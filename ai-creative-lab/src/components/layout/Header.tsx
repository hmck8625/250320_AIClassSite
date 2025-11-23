import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image 
                src="/icons/site_icon.png"
                alt="東京AI創造スタジオ"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl">東京AI創造スタジオ</span>
          </Link>
          
          {/* CTA ボタン */}
          <Button size="sm" className="bg-green-500 hover:bg-green-600">
            <Link href="https://lin.ee/kehl7g7" target="_blank">
              LINE登録
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
