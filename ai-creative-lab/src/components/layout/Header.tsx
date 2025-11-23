'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isLanding = pathname?.startsWith('/lp');
  const handleLineClick = () => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click_line_cta',
      location: isLanding ? 'lp-header' : 'global-header',
    });
  };

  if (isLanding) {
    return (
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image src="/icons/site_icon.png" alt="東京AI創造スタジオ" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl">東京AI創造スタジオ</span>
            </Link>
            <Button size="sm" className="bg-green-500 hover:bg-green-600" onClick={handleLineClick}>
              <Link href="https://lin.ee/kehl7g7" target="_blank">
                LINE登録
              </Link>
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image src="/icons/site_icon.png" alt="東京AI創造スタジオ" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl">東京AI創造スタジオ</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-primary">教室について</Link>
            <Link href="/courses" className="hover:text-primary">コース紹介</Link>
            <Link href="/gallery" className="hover:text-primary">作品ギャラリー</Link>
            <Link href="/blog" className="hover:text-primary">ブログ</Link>
            <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
          </nav>

          <Button size="sm" className="hidden md:block bg-green-500 hover:bg-green-600" onClick={handleLineClick}>
            <Link href="https://lin.ee/kehl7g7" target="_blank">
              LINE登録
            </Link>
          </Button>

          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
