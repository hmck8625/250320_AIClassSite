import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI創造ラボへのお問い合わせは、以下のフォームまたはお電話にてお気軽にどうぞ
        </p>
      </div>
      
      {/* お問い合わせ方法 */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* 電話 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">お電話</h2>
          <p className="text-gray-600 mb-4">平日 10:00〜18:00</p>
          <p className="text-xl font-bold text-primary">03-1234-5678</p>
        </div>
        
        {/* メール */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">メール</h2>
          <p className="text-gray-600 mb-4">24時間受付中</p>
          <p className="text-xl font-bold text-primary">info@ai-creative-lab.jp</p>
        </div>
        
        {/* LINE */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">LINE</h2>
          <p className="text-gray-600 mb-4">24時間受付中</p>
          <Button className="bg-green-500 hover:bg-green-600">
            <Link href="https://lin.ee/yourlineurl" target="_blank">LINE公式アカウント</Link>
          </Button>
        </div>
      </div>
      
      {/* お問い合わせフォームとアクセス情報 */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* お問い合わせフォーム */}
        <div>
          <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">お名前 <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="例：山田 太郎" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">メールアドレス <span className="text-red-500">*</span></label>
              <input type="email" className="w-full border rounded-md px-3 py-2" placeholder="例：example@gmail.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">電話番号</label>
              <input type="tel" className="w-full border rounded-md px-3 py-2" placeholder="例：090-1234-5678" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">お問い合わせ内容 <span className="text-red-500">*</span></label>
              <select className="w-full border rounded-md px-3 py-2">
                <option value="">選択してください</option>
                <option value="体験会について">体験会について</option>
                <option value="コース内容について">コース内容について</option>
                <option value="料金について">料金について</option>
                <option value="教室の場所・アクセスについて">教室の場所・アクセスについて</option>
                <option value="その他">その他</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">メッセージ <span className="text-red-500">*</span></label>
              <textarea className="w-full border rounded-md px-3 py-2 h-32" placeholder="お問い合わせ内容を詳しくご記入ください"></textarea>
            </div>
            
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <p className="text-sm">
                <Link href="/privacy" className="text-primary hover:underline">プライバシーポリシー</Link>を読み、同意します。
              </p>
            </div>
            
            <div>
              <Button className="bg-primary w-full">送信する</Button>
            </div>
          </form>
        </div>
        
        {/* アクセス情報 */}
        <div>
          <h2 className="text-2xl font-bold mb-6">アクセス情報</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">AI創造ラボ</h3>
            <p className="mb-2">〒106-0032</p>
            <p className="mb-2">東京都港区六本木1-2-3</p>
            <p className="mb-2">○○ビル 5F</p>
            <p className="mb-4">TEL: 03-1234-5678</p>
            
            <h4 className="font-bold mb-2">営業時間</h4>
            <p className="mb-4">
              平日: 13:00〜20:00<br />
              土日祝: 10:00〜18:00<br />
              定休日: 月曜日
            </p>
            
            <h4 className="font-bold mb-2">アクセス</h4>
            <p>
              東京メトロ日比谷線「六本木駅」1C出口より徒歩3分<br />
              都営大江戸線「六本木駅」3出口より徒歩5分
            </p>
          </div>
          
          {/* 地図 */}
          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">地図エリア（後で実装）</p>
          </div>
        </div>
      </div>
      
      {/* よくある質問 */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">よくあるご質問</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="border rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-50">
              <span>料金体系について教えてください</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="p-4 border-t">
              <p>
                各コースによって料金が異なります。基本的には月謝制で、月額12,000円〜18,000円程度です。
                入会金や教材費などの詳細は、無料体験会でご説明いたします。
              </p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-50">
              <span>何歳から通えますか？</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="p-4 border-t">
              <p>
                小学1年生から高校3年生までを対象としています。
                年齢に合わせたコースをご用意していますので、お子様の学年や興味に合わせてご案内いたします。
              </p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-50">
              <span>パソコンやタブレットは持参する必要がありますか？</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="p-4 border-t">
              <p>
                教室にパソコンやタブレットを用意していますので、持参いただく必要はありません。
                ただし、ご自宅での復習や作品制作のために、ご家庭でもパソコンやタブレットがあると学習効果が高まります。
              </p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-50">
              <span>途中入会はできますか？</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="p-4 border-t">
              <p>
                はい、随時入会を受け付けています。
                カリキュラムは段階的に設計されていますが、お子様のレベルに合わせて調整いたしますので、
                いつからでも始めていただけます。
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="mb-4">その他のご質問は、お気軽にお問い合わせください。</p>
            <Button variant="outline" className="mr-4">
              <Link href="/faq">よくある質問一覧</Link>
            </Button>
            <Button className="bg-primary">
              <Link href="/trial">無料体験会に申し込む</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
