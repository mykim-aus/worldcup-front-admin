import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/test:
 *   get:
 *     description: Return Hello, world
 *     responses:
 *       200:
 *         description: hello world
 */
export default async function getTodo(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method === 'GET') {
      const result = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );

      return res.status(200).send({ message: 'Hello, world!' });
    }
  } catch (err) {
    return res.status(500).send({ error: 'failed to load data' });
  }
}
