import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <Link href="/" className="font-bold text-xl">
            AI創造ラボ
          </Link>
          
          {/* グローバルナビゲーション - PC */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-primary">教室について</Link>
            <Link href="/courses" className="hover:text-primary">コース紹介</Link>
            <Link href="/gallery" className="hover:text-primary">作品ギャラリー</Link>
            {/* 体験会申込は非表示 */}
            <Link href="/blog" className="hover:text-primary">ブログ</Link>
            <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
          </nav>
          
          {/* LINE登録ボタン */}
          <Button size="sm" className="hidden md:block bg-green-500 hover:bg-green-600">
            <Link href="https://lin.ee/yourlineurl" target="_blank">
              LINE登録
            </Link>
          </Button>
          
          {/* モバイルメニューボタン */}
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* モバイルメニュー - 実際の実装ではstate管理が必要 */}
      <div className="hidden">
        <nav className="container mx-auto py-4 flex flex-col space-y-4">
          <Link href="/about" className="hover:text-primary">教室について</Link>
          <Link href="/courses" className="hover:text-primary">コース紹介</Link>
          <Link href="/gallery" className="hover:text-primary">作品ギャラリー</Link>
          {/* 体験会申込は非表示 */}
          <Link href="/blog" className="hover:text-primary">ブログ</Link>
          <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
          <Button size="sm" className="bg-green-500 hover:bg-green-600 w-full">
            <Link href="https://lin.ee/yourlineurl" target="_blank">
              LINE登録
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
