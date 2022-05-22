import prisma from 'lib/prisma'

export default async function handler(req, res) {

    // We know to get, update or delete a trip, but we cannot create
    // a trip as we dont know the id, hence post cannot be added here.
    // POST is thus implemented in api/trips/index.js
  if (req.method === 'GET') {

      const trip = await prisma.trip.findUnique({
          where: {
          id: parseInt(req.query.id), // req.query.id is a string, prisma expects an int
          },
      })
      if (!trip) {
        return res.status(404).json({ message: 'Not Found' })
      }
      res.status(200).json(trip)
  }

  if (req.method === 'PUT') {

    const { user, name, start_date, end_date } = req.body
      await prisma.trip.update({
          data: {
            user,
            name,
            start_date,
            end_date,
          },
          where: {
            id: parseInt(req.query.id),
          },
        })
      return res.status(200).end()
  }
	if (req.method === 'DELETE') {
      await prisma.trip.delete({
      where: {
        id: parseInt(req.query.id),
      },
    })
    return res.status(200).end()
  }
}