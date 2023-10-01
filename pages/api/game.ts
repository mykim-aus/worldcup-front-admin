import { PrismaClient } from '@prisma/client';

export default async function handle(req: any, res: any) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(req.url, process.env.NEXT_PUBLIC_API_URL);
  const lang = searchParams.get('lang');

  try {
    if (req.method === 'GET') {
      if (lang == 'ko') {
        const games = await prisma.gameKo.findMany();
        return res.status(200).json(games);
      }
      if (lang == 'en') {
        const games = await prisma.gameEn.findMany();
        return res.status(200).json(games);
      }
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  } catch (e: any) {
    res.status(500).json({ statusCode: 500, message: e.message });
  }
}
