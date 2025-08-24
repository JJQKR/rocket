import Link from "next/link";
import "../styles/globals.css";

export default function RocketYunju({ Component, pageProps }) {
  console.log("현재 페이지:", Component.name); // 디버깅용
  console.log("페이지 데이터:", pageProps); // 디버깅용
  return (
    <div>
      <header>
        <nav className="flex flex-col">
          <Link href="/">홈으로 이동</Link>
          <Link href="/chapter_1">제 1장 보기</Link>
        </nav>
      </header>
      <main className="font-semibold">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
