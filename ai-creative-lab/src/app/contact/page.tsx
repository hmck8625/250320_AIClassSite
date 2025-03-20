import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          【オープン準備中】AI創造ラボへのお問い合わせは、LINE公式アカウントからお願いいたします
        </p>
      </div>
      
      {/* LINE問い合わせ案内 */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center mb-16">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">LINE公式アカウントでお問い合わせ</h2>
        <p className="mb-6">
          開校準備中につき、お問い合わせはLINE公式アカウントで受け付けております。<br />
          24時間いつでもメッセージをお送りいただけます。<br />
          体験授業のお申し込みやご質問など、お気軽にお問い合わせください。
        </p>
        <Button size="lg" className="bg-[#06C755] hover:bg-[#05B64B]">
          <Link href="https://lin.ee/kehl7g7" target="_blank" className="w-full h-full inline-flex items-center justify-center">
            <span className="mr-2">LINE公式アカウントを追加する</span>
            <span>→</span>
          </Link>
        </Button>
      </div>
      
      {/* モニター募集セクション */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">🎉 先行無料モニター募集中！</h2>
        <p className="text-center mb-6">
          当教室は現在開校準備中ですが、カリキュラム完成に向けて先行無料モニターを募集しています。<br />
          あなたのフィードバックが、新しいAI教室を創り上げます。
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-bold mb-3">モニター特典</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span>無料でカリキュラムを体験できる</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span>正式開校後の優先入会権と特別割引</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-bold mb-3">参加条件</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>小中学生とその保護者</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>月2回程度の授業参加が可能な方</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="mb-4">モニター参加をご希望の方は、LINE公式アカウントから「モニター希望」とメッセージください。</p>
          <Button size="lg" className="bg-[#06C755] hover:bg-[#05B64B]">
            <Link href="https://lin.ee/kehl7g7" target="_blank" className="w-full h-full inline-flex items-center justify-center">
              <span className="mr-2">LINE公式アカウントで申し込む</span>
              <span>→</span>
            </Link>
          </Button>
        </div>
      </div>
      
      {/* よくある質問 */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">よくあるご質問</h2>
        <div className="space-y-4">
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
          
          <div className="text-center mt-8">
            <p className="mb-4">その他のご質問は、LINE公式アカウントからお気軽にお問い合わせください。</p>
            <Button size="lg" className="bg-[#06C755] hover:bg-[#05B64B]">
              <Link href="https://lin.ee/kehl7g7" target="_blank" className="w-full h-full inline-flex items-center justify-center">
                <span className="mr-2">LINE公式アカウントを追加する</span>
                <span>→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
