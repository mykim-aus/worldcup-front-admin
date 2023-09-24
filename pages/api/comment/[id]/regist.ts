import { PrismaClient } from '@prisma/client';
import { parse } from 'path';

export default async function handle(req: any, res: any) {
  const prisma = new PrismaClient();
  const gameId = Number(req.query.id);

  const parsed = await JSON.parse(req.body);

  // 금칙 특수문자 체크
  const hasForbiddenCharacters = (input: any) => {
    // <> 대괄호는 XSS 공격을 방지하기 위해 추가
    // {} 중괄호는 일부 코드 주입을 방지하기 위해 추가
    // [] 대괄호 안의 문자는 SQL 쿼리 주입을 방지하기 위해 추가
    // 백틱(`)은 코드 실행을 방지하기 위해 추가
    const forbiddenCharsPattern = /[<>{};'"\[\]`]/;
    return forbiddenCharsPattern.test(input);
  };

  try {
    if (req.method === 'POST') {
      if (
        hasForbiddenCharacters(parsed.commentName) ||
        hasForbiddenCharacters(parsed.commentContent)
      ) {
        throw new Error('금칙 특수문자가 포함되어 있습니다.');
      }

      const data = {
        commentName: parsed.commentName,
        commentContent: parsed.commentContent,
        createdAt: new Date(),
        updatedAt: undefined,
        gameId: gameId,
        imageId: parsed.iId,
        authorId: null,
        isAnonymous: true,
      };

      const comment = await prisma.comment.create({
        data: data,
      });

      res.status(200).json(comment);
    }
  } catch (e: any) {
    console.log(e);

    res.status(500).json({ statusCode: 500, message: e.message });
  }
}
