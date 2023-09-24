import { PrismaClient } from '@prisma/client';

export default async function handle(req: any, res: any) {
  const prisma = new PrismaClient();
  const gameId = Number(req.query.id);

  console.log(gameId);

  try {
    if (req.method === 'GET') {
      const comments = await prisma.comment.findMany({
        where: {
          gameId: gameId,
        },
        include: {
          image: true,
        },
      });

      console.log(comments);

      res.status(200).json(comments);
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  } catch (e: any) {
    res.status(500).json({ statusCode: 500, message: e.message });
  }
}
