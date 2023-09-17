import { PrismaClient } from '@prisma/client';

export default async function handle(req: any, res: any) {
  const prisma = new PrismaClient();
  const body = req.body;

  try {
    if (req.method === 'POST') {
      for (const image of body) {
        await prisma.image.update({
          where: {
            id: image.id,
          },
          data: {
            win_count: image.win_count,
          },
        });
      }

      res.status(200).json();
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ statusCode: 500, message: e.message });
  }
}
