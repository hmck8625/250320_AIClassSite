import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto">
        {/* フッターナビゲーション */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <Image 
                  src="/icons/site_icon.png"
                  alt="AI創造スタジオ"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">AI創造スタジオ</h3>
            </div>
            <p className="mb-2">【オープン準備中】</p>
          </div>
          
          {/* サイトマップ */}
          <div>
            <h3 className="text-lg font-bold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary-300">ホーム</Link></li>
              <li><Link href="/about" className="hover:text-primary-300">教室について</Link></li>
              <li><Link href="/courses" className="hover:text-primary-300">コース紹介</Link></li>
              <li><Link href="/gallery" className="hover:text-primary-300">作品ギャラリー</Link></li>
            </ul>
          </div>
          
          {/* サイトマップ2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">情報</h3>
            <ul className="space-y-2">
              {/* 体験会申込は非表示 */}
              <li><Link href="/blog" className="hover:text-primary-300">ブログ/教育コラム</Link></li>
              <li><Link href="/contact" className="hover:text-primary-300">お問い合わせ</Link></li>
              <li><Link href="/faq" className="hover:text-primary-300">よくある質問</Link></li>
            </ul>
          </div>
          
          {/* LINE登録 */}
          <div>
            <h3 className="text-lg font-bold mb-4">LINE公式アカウント</h3>
            <p className="mb-4">最新の体験会情報やAI教育に関する情報をお届けします</p>
            <Link 
              href="https://lin.ee/kehl7g7" 
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded inline-block"
            >
              LINE登録はこちら
            </Link>
          </div>
        </div>
        
        {/* コピーライトと補助リンク */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AI創造スタジオ All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-white">利用規約</Link>
            <Link href="/sitemap" className="hover:text-white">サイトマップ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
