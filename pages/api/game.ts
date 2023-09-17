import { PrismaClient } from '@prisma/client';

export default async function handle(req: any, res: any) {
  const prisma = new PrismaClient();

  try {
    if (req.method === 'GET') {
      const games = await prisma.game.findMany();

      console.log(games);

      res.status(200).json(games);
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  } catch (e: any) {
    res.status(500).json({ statusCode: 500, message: e.message });
  }
}
