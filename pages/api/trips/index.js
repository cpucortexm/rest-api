import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {  
    const trips = await prisma.trip.findMany()

    // Promise.all(), which resolves when all its promises are resolved.
    // trips is an array
    // trips.map(), returns a list of promises, so in result we’ll get 
    // the value when everything we ran is resolved.
    await Promise.all(
          trips.map(async (trip) => {
            trip.expenses = await prisma.expense.findMany({
              where: {
                trip: trip.id,
              },
            })
          })
        )

    res.status(200).json(trips)
    return
  }

  if (req.method === 'POST'){
      const { user, name, start_date, end_date } = req.body
      if (!user) {
        return res
          .status(400)
          .json({ message: 'Missing required parameter `user`' })
      }
      if (!name) {
        return res
          .status(400)
          .json({ message: 'Missing required parameter `name`' })
      }

      // creates table in the trip postgresql table hosted at Railway app
      await prisma.trip.create({
        data: {
          user,
          name,
          start_date,
          end_date,
        },
      })
      res.status(200).end()
      return 
  }

    // It can also be
    // res.status()
    // res.json() 
    // but we can chain it like this in js as a single line
    res.status(405).json({message: 'Method Not Allowed'})

} 