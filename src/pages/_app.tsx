import type { AppProps } from "next/app";
import "../styles/globals.css"; // 이 경로가 맞습니다!

export default function RocketYunju({ Component, pageProps }: AppProps) {
  console.log("현재 페이지:", Component.name); // 디버깅용
  console.log("페이지 데이터:", pageProps); // 디버깅용
  return (
    <div>
      <header>
        <nav className="flex flex-col">
          <a href="/">홈으로 이동</a>
          <a href="/chapter_1">제 1장 보기</a>
        </nav>
      </header>
      <main>
        {" "}
        <Component {...pageProps} />
      </main>
    </div>
  );
}
