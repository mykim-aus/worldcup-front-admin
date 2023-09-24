import { PrismaClient } from '@prisma/client';
import { parse } from 'path';

export default async function handle(req: any, res: any) {
  const prisma = new PrismaClient();
  const gameId = Number(req.query.id);

  const parsed = await JSON.parse(req.body);

  try {
    if (req.method === 'POST') {
      //   const comment = await prisma.comment.update({
      //     where: {
      //       id: parsed.id,
      //     },
      //     data: {
      //       reported: parsed.reported + 1,
      //     },
      //   });

      res.status(200).json('success');
    }
  } catch (e: any) {
    res.status(500).json({ statusCode: 500, message: e.message });
  }
}
