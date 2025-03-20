import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TrialPage() {
  // 体験会申込ページは非公開のため、トップページにリダイレクト
  redirect('/');
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">体験会申込</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI創造ラボの無料体験会に参加して、AIを活用した創作活動を体験してみませんか？
        </p>
      </div>
      
      {/* 体験会の特徴 */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-200 h-80 flex items-center justify-center">
            <p className="text-gray-500">体験会の様子（画像エリア）</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">体験会で体験できること</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">AIツールの基本操作</h3>
                  <p>子どもでも簡単に使えるAIツールの基本的な使い方を学びます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">ミニ創作体験</h3>
                  <p>AIを使って、簡単なアート作品や音楽、ゲームなどを実際に作ってみます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">個別カウンセリング</h3>
                  <p>お子様の興味や適性に合わせたコース選びのアドバイスを行います。</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Button size="lg" className="bg-primary">
                <Link href="#application-form">体験会に申し込む</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 開催日程 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">開催日程</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">3月の開催日程</h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">3月25日（土）10:00〜12:00</p>
                      <p className="text-sm text-gray-600">対象：小学1〜3年生</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">残席あり</span>
                  </div>
                </li>
                <li className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">3月25日（土）14:00〜16:00</p>
                      <p className="text-sm text-gray-600">対象：小学4〜6年生</p>
                    </div>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">満席</span>
                  </div>
                </li>
                <li className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">3月26日（日）10:00〜12:00</p>
                      <p className="text-sm text-gray-600">対象：中学生</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">残席あり</span>
                  </div>
                </li>
                <li className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">3月26日（日）14:00〜16:00</p>
                      <p className="text-sm text-gray-600">対象：高校生</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">残席あり</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">4月の開催日程</h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">4月8日（土）10:00〜12:00</p>
                      <p className="text-sm text-gray-600">対象：小学1〜3年生</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">残席あり</span>
                  </div>
                </li>
                <li className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">4月8日（土）14:00〜16:00</p>
                      <p className="text-sm text-gray-600">対象：小学4〜6年生</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">残席あり</span>
                  </div>
                </li>
                <li className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">4月9日（日）10:00〜12:00</p>
                      <p className="text-sm text-gray-600">対象：中学生</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">残席あり</span>
                  </div>
                </li>
                <li className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">4月9日（日）14:00〜16:00</p>
                      <p className="text-sm text-gray-600">対象：高校生</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">残席あり</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            ※ 各回定員8名。先着順での受付となります。<br />
            ※ 体験会は完全予約制です。必ず事前にお申し込みください。<br />
            ※ 体験会の内容は対象年齢によって異なります。
          </p>
        </div>
      </section>
      
      {/* 申込フォーム */}
      <section id="application-form" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">申込フォーム</h2>
        <div className="bg-white border rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <form className="space-y-6">
            {/* 参加者情報 */}
            <div>
              <h3 className="text-xl font-bold mb-4">参加者情報</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">お子様のお名前 <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="例：山田 太郎" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">フリガナ <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="例：ヤマダ タロウ" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">学年 <span className="text-red-500">*</span></label>
                  <select className="w-full border rounded-md px-3 py-2">
                    <option value="">選択してください</option>
                    <option value="小1">小学1年生</option>
                    <option value="小2">小学2年生</option>
                    <option value="小3">小学3年生</option>
                    <option value="小4">小学4年生</option>
                    <option value="小5">小学5年生</option>
                    <option value="小6">小学6年生</option>
                    <option value="中1">中学1年生</option>
                    <option value="中2">中学2年生</option>
                    <option value="中3">中学3年生</option>
                    <option value="高1">高校1年生</option>
                    <option value="高2">高校2年生</option>
                    <option value="高3">高校3年生</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">性別</label>
                  <select className="w-full border rounded-md px-3 py-2">
                    <option value="">選択してください</option>
                    <option value="男">男性</option>
                    <option value="女">女性</option>
                    <option value="その他">その他・回答しない</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* 保護者情報 */}
            <div>
              <h3 className="text-xl font-bold mb-4">保護者情報</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">保護者氏名 <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="例：山田 花子" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">フリガナ <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="例：ヤマダ ハナコ" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">メールアドレス <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full border rounded-md px-3 py-2" placeholder="例：example@gmail.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">電話番号 <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full border rounded-md px-3 py-2" placeholder="例：090-1234-5678" />
                </div>
              </div>
            </div>
            
            {/* 希望日程 */}
            <div>
              <h3 className="text-xl font-bold mb-4">希望日程</h3>
              <div>
                <label className="block text-sm font-medium mb-1">希望日程 <span className="text-red-500">*</span></label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option value="">選択してください</option>
                  <option value="3/25午前">3月25日（土）10:00〜12:00 【小学1〜3年生】</option>
                  <option value="3/25午後" disabled>3月25日（土）14:00〜16:00 【小学4〜6年生】（満席）</option>
                  <option value="3/26午前">3月26日（日）10:00〜12:00 【中学生】</option>
                  <option value="3/26午後">3月26日（日）14:00〜16:00 【高校生】</option>
                  <option value="4/8午前">4月8日（土）10:00〜12:00 【小学1〜3年生】</option>
                  <option value="4/8午後">4月8日（土）14:00〜16:00 【小学4〜6年生】</option>
                  <option value="4/9午前">4月9日（日）10:00〜12:00 【中学生】</option>
                  <option value="4/9午後">4月9日（日）14:00〜16:00 【高校生】</option>
                </select>
              </div>
            </div>
            
            {/* 質問・備考 */}
            <div>
              <label className="block text-sm font-medium mb-1">質問・備考</label>
              <textarea className="w-full border rounded-md px-3 py-2 h-32" placeholder="ご質問やご要望があればご記入ください"></textarea>
            </div>
            
            {/* プライバシーポリシー */}
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <p className="text-sm">
                <Link href="/privacy" className="text-primary hover:underline">プライバシーポリシー</Link>を読み、同意します。
                お預かりした個人情報は、体験会のご案内およびAI創造ラボからのお知らせ以外の目的では使用いたしません。
              </p>
            </div>
            
            {/* 送信ボタン */}
            <div className="text-center">
              <Button size="lg" className="bg-primary px-10">申し込む</Button>
            </div>
          </form>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="border rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-50">
              <span>体験会は無料ですか？</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="p-4 border-t">
              <p>はい、体験会は完全無料です。教材費等も一切かかりません。</p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-50">
              <span>パソコンの経験がなくても大丈夫ですか？</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="p-4 border-t">
              <p>はい、パソコンやプログラミングの経験がなくても問題ありません。体験会では基本的な操作からサポートします。</p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-50">
              <span>持ち物はありますか？</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="p-4 border-t">
              <p>筆記用具をお持ちください。パソコンやタブレットは教室で用意しています。</p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-50">
              <span>保護者も一緒に参加できますか？</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="p-4 border-t">
              <p>はい、保護者の方も一緒にご参加いただけます。お子様の様子を見ていただくことで、ご家庭でのサポート方法についてもアドバイスさせていただきます。</p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-50">
              <span>体験会後に入会を勧められますか？</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="p-4 border-t">
              <p>体験会後に各コースのご案内はいたしますが、強引な勧誘は一切ありません。お子様の様子や興味を見ながら、最適なコースをご提案させていただきます。</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* LINE登録CTA */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">LINE公式アカウントでも申し込みできます</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          LINE公式アカウントからも体験会のお申し込みが可能です。
          また、最新の体験会情報やAI教育に関する情報も配信しています。
        </p>
        <Button size="lg" className="bg-green-500 hover:bg-green-600">
          <Link href="https://lin.ee/yourlineurl" target="_blank">LINE公式アカウントに登録する</Link>
        </Button>
      </div>
    </div>
  );
}
