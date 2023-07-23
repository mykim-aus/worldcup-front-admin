'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const TournamentResultPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(router);
  console.log(pathname);
  console.log(searchParams);

  //   const { imageUrl } = router.query;

  // imageUrl 값으로 원하는 작업 수행
  // ...

  return (
    <div>
      <h1>토너먼트 결과 페이지</h1>
      {/* <p>이미지 URL: {imageUrl}</p> */}
      {/* 추가적인 내용 */}
    </div>
  );
};

export default TournamentResultPage;
