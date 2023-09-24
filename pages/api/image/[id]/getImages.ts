import { PrismaClient } from '@prisma/client';

export default async function handle(req: any, res: any) {
  const prisma = new PrismaClient();
  const gameId = Number(req.query.id);

  try {
    if (req.method === 'GET') {
      const images = await prisma.image.findMany({
        where: {
          gameId: gameId,
        },
      });

      res.status(200).json(images);
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  } catch (e: any) {
    res.status(500).json({ statusCode: 500, message: e.message });
  }
}
