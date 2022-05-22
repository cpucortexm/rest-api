import prisma from 'lib/prisma'

export default async function handler(req, res) {

    // We know to get, update or delete a expense, but we cannot create
    // a expense as we dont know the id, hence post cannot be added here.
    // POST is thus implemented in api/expenses/index.js
  if (req.method === 'GET') {
      const expense = await prisma.expense.findUnique({
          where: {
          id: parseInt(req.query.id), // req.query.id is a string, prisma expects an int
          },
      })
      if (!expense) {
        return res.status(404).json({ message: 'Not Found' })
      }
      res.status(200).json(expense)
  }
  
  if (req.method === 'PUT') {
    const { trip, name, date, amount, currency} = req.body
      await prisma.expense.update({
          data: {
            trip,
            name,
            date,
            amount,
            currency
          },
          where: {
            id: parseInt(req.query.id),
          },
        })
      return res.status(200).end()
  }

  if (req.method === 'DELETE') {
      await prisma.expense.delete({
      where: {
        id: parseInt(req.query.id),
      },
    })

    return res.status(200).end()
  }
}