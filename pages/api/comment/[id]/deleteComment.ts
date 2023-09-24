import { PrismaClient } from '@prisma/client';

export default async function deleteComment(req: any, res: any) {
  const prisma = new PrismaClient();

  try {
    if (req.method === 'POST') {
      const { id } = JSON.parse(req.body);

      // 삭제를 수행합니다.
      await prisma.comment.delete({
        where: {
          id: id,
        },
      });

      res.status(200).json({ message: 'ok' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (e: any) {
    console.log(e);

    res.status(500).json({ statusCode: 500, message: e.message });
  } finally {
    await prisma.$disconnect();
  }
}
