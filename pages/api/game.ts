import { PrismaClient } from '@prisma/client';

export default async function handle(req: any, res: any) {
  const prisma = new PrismaClient();

  try {
    if (req.method === 'GET') {
      const { sort, range, gameType, limit } = req.query;

      let orderBy: any = {};
      let where: any = {};

      // sort 조건
      if (sort === 'new') {
        orderBy = {
          createdAt: 'desc',
        };
      } else if (sort === 'popular') {
        orderBy = {
          totalCount: 'desc',
        };
      }

      // range 조건에 따른 날짜 설정
      const now = new Date();
      const dateMapping: any = {
        month: () => now.setMonth(now.getMonth() - 1),
        week: () => now.setDate(now.getDate() - 7),
        day: () => now.setDate(now.getDate() - 1),
      };

      if (dateMapping[range]) {
        where.createdAt = {
          gte: new Date(dateMapping[range]()),
        };
      }

      // gameType 조건
      if (gameType) {
        where.gameType = gameType;
      }

      // limit 조건
      let take;
      if (limit) {
        take = parseInt(limit, 10);
      }

      const games = await prisma.game.findMany({
        orderBy,
        where,
        take: take || undefined,
      });

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
