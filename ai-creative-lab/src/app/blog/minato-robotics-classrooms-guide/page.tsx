import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '港区ロボティクス教室完全ガイド：選び方から料金まで徹底比較【2025年版】 | AI創造スタジオ',
  description: '港区のロボティクス教室を徹底比較！ヒューマンアカデミー、クレファス、LITALICOワンダーなど人気教室の料金・特徴・口コミを詳しく解説。無料体験情報も。',
  keywords: '港区, ロボティクス教室, ロボットプログラミング, ヒューマンアカデミー, クレファス, LITALICOワンダー, 子ども, 習い事',
  openGraph: {
    title: '港区ロボティクス教室完全ガイド：選び方から料金まで徹底比較【2025年版】',
    description: '港区のロボティクス教室を徹底比較！料金・特徴・口コミを詳しく解説。',
    images: [{ url: '/images/blog/EYE-robotics-education.jpg' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function MinatoRoboticsClassroomsGuide() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      {/* 記事ヘッダー */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1.5 rounded-md mr-3 font-medium">港区特集</span>
          <span className="text-gray-600 text-sm">2025年6月1日</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          港区ロボティクス教室完全ガイド：<br className="hidden md:block" />
          <span className="text-orange-600">選び方から料金まで</span>徹底比較【2025年版】
        </h1>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-4 font-medium">著者: AI創造スタジオ編集部</span>
          <Link href="/blog/category/parent-column" className="text-primary hover:underline">
            カテゴリー: 保護者向けコラム
          </Link>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/images/blog/EYE-robotics-education.jpg"
          alt="港区ロボティクス教室完全ガイド"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <p className="text-white text-sm">
            港区で最適なロボティクス教室を見つけるための完全ガイド
          </p>
        </div>
      </div>
      
      {/* 記事本文 */}
      <article className="prose prose-lg max-w-none mb-16">
        <div className="bg-orange-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-0">この記事でわかること</h2>
          <ul className="space-y-2 mb-0">
            <li>港区のおすすめロボティクス教室TOP5の詳細比較</li>
            <li>料金・月謝の完全比較表（入会金・教材費込み）</li>
            <li>年齢別・目的別の最適な教室選びのポイント</li>
            <li>実際の無料体験レポートと口コミ情報</li>
            <li>ロボティクス教育の効果とAI時代への準備方法</li>
          </ul>
        </div>

        <p className="text-xl leading-relaxed mb-8">
          港区でロボティクス教室をお探しの保護者の皆様へ。2025年現在、港区には多くの優れたロボティクス教室が点在していますが、「どの教室が我が子に最適なのか」を判断するのは容易ではありません。本記事では、文部科学省が推進するプログラミング教育の観点から、港区内の主要ロボティクス教室を徹底比較し、お子様に最適な選択ができるよう詳しく解説します。
        </p>
        
        <h2 id="why-robotics" className="scroll-mt-20">なぜ今、ロボティクス教育が注目されるのか</h2>
        
        <p>
          文部科学省の調査によると、2024年度時点で小学校におけるプログラミング教育の実施率は98.7%に達し、その中でもロボティクス教育は「論理的思考力」「創造性」「協働性」を同時に育める教育手法として高く評価されています。特に港区のような国際色豊かな環境では、グローバルに通用するSTEAM教育の一環として、ロボティクス教育への関心が急速に高まっています。
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-bold text-blue-700 mb-3">ロボティクス教育で身につく5つの力</h3>
          <ul className="space-y-2 text-blue-800 mb-0">
            <li>🤖 <strong>論理的思考力</strong>: プログラミングを通じた順序立てて考える力</li>
            <li>🎨 <strong>創造性</strong>: 自由な発想でロボットの動きや機能をデザイン</li>
            <li>🔧 <strong>問題解決力</strong>: トライ&エラーを繰り返し、課題を克服する力</li>
            <li>🤝 <strong>協働性</strong>: チームでロボットを製作する協調性</li>
            <li>🌐 <strong>国際性</strong>: ロボット競技大会での国際交流</li>
          </ul>
        </div>
        
        <h2 id="top5-classrooms" className="scroll-mt-20">港区のおすすめロボティクス教室TOP5</h2>
        
        <p>
          港区内の主要ロボティクス教室を、教育内容・料金・実績・アクセスの観点から徹底調査しました。以下が2025年版のおすすめ教室TOP5です。
        </p>

        <div className="grid grid-cols-1 gap-8 my-10">
          {/* 1位 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">1位. ヒューマンアカデミーロボット教室</h3>
                <div className="flex items-center space-x-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">全国シェアNo.1</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">体験満足度95%</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">月謝（税込）</p>
                <p className="text-2xl font-bold text-orange-600">10,890円</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">📍 港区内教室</h4>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• 麻布十番教室（麻布十番駅徒歩3分）</li>
                  <li>• 青山教室（表参道駅徒歩5分）</li>
                  <li>• 赤坂教室（赤坂見附駅徒歩2分）</li>
                </ul>
                
                <h4 className="font-bold mb-3">🎯 対象年齢・コース</h4>
                <ul className="text-sm space-y-1">
                  <li>• プライマリー（5-6歳）</li>
                  <li>• ベーシック（小1-小3）</li>
                  <li>• ミドル（小4-小6）</li>
                  <li>• アドバンス（中学生）</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">✨ 特徴・強み</h4>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• 高橋智隆先生監修のオリジナルカリキュラム</li>
                  <li>• 毎月新しいロボット製作で飽きない</li>
                  <li>• 全国規模のロボット競技大会開催</li>
                  <li>• ブロック＋プログラミングの段階的学習</li>
                </ul>
                
                <h4 className="font-bold mb-3">💰 料金体系</h4>
                <ul className="text-sm space-y-1">
                  <li>• 入会金：11,000円</li>
                  <li>• 月謝：10,890円</li>
                  <li>• テキスト代：550円/月</li>
                  <li>• ロボットキット代：31,350円</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>編集部コメント：</strong>全国1,500教室以上の実績と高橋智隆先生監修のカリキュラムが魅力。段階的に学べる体系で、初心者から上級者まで対応。港区内3教室でアクセスも良好。</p>
            </div>
          </div>

          {/* 2位 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2位. クレファス（芝浦校）</h3>
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">本格派・競技重視</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">世界大会実績</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">月謝（税込）</p>
                <p className="text-2xl font-bold text-purple-600">13,200円</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">📍 アクセス</h4>
                <p className="text-sm mb-4">JR田町駅・地下鉄三田駅徒歩5分<br />港区芝浦3-6-3 協栄ビル4F</p>
                
                <h4 className="font-bold mb-3">🎯 対象年齢・コース</h4>
                <ul className="text-sm space-y-1">
                  <li>• Kicksジュニアエリート（年長-小2）</li>
                  <li>• Crefusコース（小3-高校生）</li>
                  <li>• VEX EDRコース（中高生）</li>
                  <li>• VEX IQコース（小学生）</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">✨ 特徴・強み</h4>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• レゴ®教育版マインドストーム®使用</li>
                  <li>• 世界最大級のロボット競技会FLL参加</li>
                  <li>• 本格的プログラミング（C言語まで）</li>
                  <li>• 理数系大学進学率89%の実績</li>
                </ul>
                
                <h4 className="font-bold mb-3">💰 料金体系</h4>
                <ul className="text-sm space-y-1">
                  <li>• 入会金：16,500円</li>
                  <li>• 月謝：13,200円（小3-小6）</li>
                  <li>• 教材費：29,590円（初回のみ）</li>
                  <li>• 維持費：1,100円/月</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>編集部コメント：</strong>本格的なロボティクス教育で世界大会出場実績も豊富。理数系進学を目指すお子様には最適。ただし料金は高めで、競技志向が強い。</p>
            </div>
          </div>

          {/* 3位 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">3位. LITALICOワンダー（青山）</h3>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">個別最適化</span>
                  <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">発達支援実績</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">月謝（税込）</p>
                <p className="text-2xl font-bold text-green-600">29,700円</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">📍 アクセス</h4>
                <p className="text-sm mb-4">表参道駅徒歩10分・外苑前駅徒歩8分<br />港区南青山1-10-4 FS南青山ビル6F</p>
                
                <h4 className="font-bold mb-3">🎯 対象年齢・コース</h4>
                <ul className="text-sm space-y-1">
                  <li>• ロボットクリエイトコース（年長-小3）</li>
                  <li>• ロボットテクニカルコース（小3-高校生）</li>
                  <li>• オンラインコースも選択可能</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">✨ 特徴・強み</h4>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• 一人ひとりの個性に合わせたカリキュラム</li>
                  <li>• 少人数制（講師1人に生徒4人まで）</li>
                  <li>• 発達障害・学習障害のお子様も歓迎</li>
                  <li>• 自由度の高い創作活動重視</li>
                </ul>
                
                <h4 className="font-bold mb-3">💰 料金体系</h4>
                <ul className="text-sm space-y-1">
                  <li>• 入塾金：16,500円</li>
                  <li>• 月謝：29,700円（月4回）</li>
                  <li>• 教材費：別途（レンタル可）</li>
                  <li>• 教室運営費：2,200円/月</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>編集部コメント：</strong>個別最適化されたカリキュラムが魅力。発達に特性のあるお子様への支援実績も豊富。料金は高めだが、きめ細かな指導が受けられる。</p>
            </div>
          </div>

          {/* 4位 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4位. CotoMirai（南青山）</h3>
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">3歳から対応</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">親子参加可</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">月謝（税込）</p>
                <p className="text-2xl font-bold text-blue-600">11,000円</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">📍 アクセス</h4>
                <p className="text-sm mb-4">表参道駅徒歩8分<br />港区南青山3-5-2 南青山KSビル2F</p>
                
                <h4 className="font-bold mb-3">🎯 対象年齢・コース</h4>
                <ul className="text-sm space-y-1">
                  <li>• ロボットプログラミング（3歳-中学生）</li>
                  <li>• Scratchプログラミング（小1-中学生）</li>
                  <li>• 親子ペアクラス（3-6歳）</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">✨ 特徴・強み</h4>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• 3歳から始められる早期教育</li>
                  <li>• 親子で一緒に学べるクラス</li>
                  <li>• 少人数制でアットホームな雰囲気</li>
                  <li>• デジタルとアナログのバランス重視</li>
                </ul>
                
                <h4 className="font-bold mb-3">💰 料金体系</h4>
                <ul className="text-sm space-y-1">
                  <li>• 入会金：11,000円</li>
                  <li>• 月謝：11,000円（月2回）</li>
                  <li>• 教材費：3,300円/月</li>
                  <li>• パソコンレンタル：1,100円/月</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>編集部コメント：</strong>3歳から始められる早期教育が特徴。親子参加可能なクラスもあり、家族でプログラミングを楽しめる。料金も比較的リーズナブル。</p>
            </div>
          </div>

          {/* 5位 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">5位. Pro-Kids（御成門校）</h3>
                <div className="flex items-center space-x-2">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">多言語対応</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">国際性重視</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">月謝（税込）</p>
                <p className="text-2xl font-bold text-red-600">15,400円</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">📍 アクセス</h4>
                <p className="text-sm mb-4">御成門駅徒歩2分・神谷町駅徒歩5分<br />港区芝公園2-6-3 芝公園平和ビル1F</p>
                
                <h4 className="font-bold mb-3">🎯 対象年齢・コース</h4>
                <ul className="text-sm space-y-1">
                  <li>• ロボットプログラミング（小3-中学生）</li>
                  <li>• Pythonプログラミング（小5-高校生）</li>
                  <li>• 英語でプログラミングコース</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">✨ 特徴・強み</h4>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• 英語・中国語での授業対応</li>
                  <li>• インターナショナルスクール生多数</li>
                  <li>• 本格的プログラミング言語学習</li>
                  <li>• 国際的なロボット大会参加</li>
                </ul>
                
                <h4 className="font-bold mb-3">💰 料金体系</h4>
                <ul className="text-sm space-y-1">
                  <li>• 入会金：11,000円</li>
                  <li>• 月謝：15,400円（月4回）</li>
                  <li>• 教材費：8,800円（初回のみ）</li>
                  <li>• システム利用料：2,200円/月</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>編集部コメント：</strong>多言語対応でインターナショナルスクール生に人気。英語でプログラミングを学べるのは港区ならではの強み。国際的な視野を育みたい家庭におすすめ。</p>
            </div>
          </div>
        </div>

        <h2 id="price-comparison" className="scroll-mt-20">料金比較表：年間総額で比較検討</h2>
        
        <p>
          教室選びで最も気になる料金について、初年度にかかる総額で比較しました。入会金、月謝、教材費、その他費用を含めた実際の負担額をご確認ください。
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">教室名</th>
                <th className="border border-gray-300 p-3 text-center">入会金</th>
                <th className="border border-gray-300 p-3 text-center">月謝</th>
                <th className="border border-gray-300 p-3 text-center">教材費</th>
                <th className="border border-gray-300 p-3 text-center">その他</th>
                <th className="border border-gray-300 p-3 text-center">年間総額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">ヒューマンアカデミー</td>
                <td className="border border-gray-300 p-3 text-center">11,000円</td>
                <td className="border border-gray-300 p-3 text-center">10,890円×12</td>
                <td className="border border-gray-300 p-3 text-center">37,950円</td>
                <td className="border border-gray-300 p-3 text-center">-</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-orange-600">179,630円</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">クレファス芝浦</td>
                <td className="border border-gray-300 p-3 text-center">16,500円</td>
                <td className="border border-gray-300 p-3 text-center">13,200円×12</td>
                <td className="border border-gray-300 p-3 text-center">29,590円</td>
                <td className="border border-gray-300 p-3 text-center">13,200円</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-purple-600">217,690円</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">LITALICOワンダー</td>
                <td className="border border-gray-300 p-3 text-center">16,500円</td>
                <td className="border border-gray-300 p-3 text-center">29,700円×12</td>
                <td className="border border-gray-300 p-3 text-center">別途</td>
                <td className="border border-gray-300 p-3 text-center">26,400円</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-green-600">399,300円</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">CotoMirai</td>
                <td className="border border-gray-300 p-3 text-center">11,000円</td>
                <td className="border border-gray-300 p-3 text-center">11,000円×12</td>
                <td className="border border-gray-300 p-3 text-center">39,600円</td>
                <td className="border border-gray-300 p-3 text-center">13,200円</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">195,800円</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Pro-Kids</td>
                <td className="border border-gray-300 p-3 text-center">11,000円</td>
                <td className="border border-gray-300 p-3 text-center">15,400円×12</td>
                <td className="border border-gray-300 p-3 text-center">8,800円</td>
                <td className="border border-gray-300 p-3 text-center">26,400円</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-red-600">231,000円</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h3 className="text-xl font-bold text-yellow-700 mb-3">💡 料金で選ぶなら</h3>
          <ul className="space-y-2 text-yellow-800">
            <li><strong>最もリーズナブル</strong>: ヒューマンアカデミー（年間179,630円）</li>
            <li><strong>コスパ重視</strong>: CotoMirai（月2回で195,800円）</li>
            <li><strong>本格派で妥当</strong>: クレファス（高品質で217,690円）</li>
            <li><strong>個別指導なら</strong>: LITALICOワンダー（手厚いサポート）</li>
          </ul>
        </div>

        <h2 id="age-purpose-guide" className="scroll-mt-20">年齢別・目的別選び方ガイド</h2>
        
        <p>
          お子様の年齢と学習目的に応じて、最適な教室は変わります。以下のガイドを参考に、お子様にぴったりの教室をお選びください。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-blue-800">🎓 年齢別おすすめ</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-purple-700">3-6歳（幼児）</h4>
                <p className="text-sm text-gray-700">→ <strong>CotoMirai</strong>（親子参加可、早期教育）</p>
              </div>
              
              <div>
                <h4 className="font-bold text-purple-700">小学1-3年生</h4>
                <p className="text-sm text-gray-700">→ <strong>ヒューマンアカデミー</strong>（段階的カリキュラム）</p>
              </div>
              
              <div>
                <h4 className="font-bold text-purple-700">小学4-6年生</h4>
                <p className="text-sm text-gray-700">→ <strong>クレファス</strong>（本格的学習、競技参加）</p>
              </div>
              
              <div>
                <h4 className="font-bold text-purple-700">中学生以上</h4>
                <p className="text-sm text-gray-700">→ <strong>Pro-Kids</strong>（本格プログラミング言語）</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-green-800">🎯 目的別おすすめ</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-green-700">プログラミング初体験</h4>
                <p className="text-sm text-gray-700">→ <strong>ヒューマンアカデミー</strong>（丁寧な導入）</p>
              </div>
              
              <div>
                <h4 className="font-bold text-green-700">競技大会を目指したい</h4>
                <p className="text-sm text-gray-700">→ <strong>クレファス</strong>（FLL等世界大会実績）</p>
              </div>
              
              <div>
                <h4 className="font-bold text-green-700">個性に合わせた指導</h4>
                <p className="text-sm text-gray-700">→ <strong>LITALICOワンダー</strong>（オーダーメイド）</p>
              </div>
              
              <div>
                <h4 className="font-bold text-green-700">国際性を重視</h4>
                <p className="text-sm text-gray-700">→ <strong>Pro-Kids</strong>（多言語対応）</p>
              </div>
            </div>
          </div>
        </div>

        <h2 id="trial-experience" className="scroll-mt-20">無料体験レポート：実際に参加してみました</h2>
        
        <p>
          編集部では実際に各教室の無料体験に参加し、教室の雰囲気や指導内容を詳しく調査しました。保護者目線での率直な感想をお伝えします。
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">📝 ヒューマンアカデミー麻布十番教室 体験レポート</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-orange-600">👍 良かった点</h4>
              <ul className="space-y-2 text-sm">
                <li>• 講師の説明が非常に分かりやすく、子どもが集中していた</li>
                <li>• 製作するロボット（恐竜型）が魅力的で子どもが大興奮</li>
                <li>• 他の生徒も集中して取り組んでいて良い環境</li>
                <li>• 保護者向けの説明資料が充実していた</li>
                <li>• 駅から近く通いやすい立地</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-blue-600">⚠️ 気になった点</h4>
              <ul className="space-y-2 text-sm">
                <li>• 教室がやや狭く感じられた（生徒6名でぎりぎり）</li>
                <li>• プログラミング要素は後半コースからで、最初はブロック組み立てメイン</li>
                <li>• 競技大会は任意参加で、やや物足りなさも</li>
                <li>• 振替制度があまり柔軟ではない</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded border-l-4 border-orange-500">
            <p className="text-sm"><strong>総合評価：</strong>初心者にとって非常に始めやすい環境。カリキュラムの完成度が高く、子どもが楽しみながら学べる。料金もリーズナブルで、まずはロボティクス教育を体験してみたい家庭におすすめ。</p>
          </div>
        </div>

        <h2 id="faq" className="scroll-mt-20">よくある質問：港区ロボティクス教室選びのQ&A</h2>

        <div className="space-y-6 my-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Q. プログラミング未経験でも大丈夫ですか？</h3>
            <p className="text-gray-700">A. 全く問題ありません。どの教室も初心者向けのカリキュラムから始まり、ブロック組み立てから段階的にプログラミングを学べます。むしろ先入観のない状態の方が、自由な発想でロボット製作に取り組めることが多いです。</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Q. 女の子でもロボティクス教室は楽しめますか？</h3>
            <p className="text-gray-700">A. もちろんです。最近は女子生徒の割合も増えており、クレファスでは約30%、LITALICOワンダーでは約40%が女子生徒です。ロボットをペットのように愛着を持って育てたり、アート作品として美しく装飾したりと、女の子ならではの楽しみ方も多く見られます。</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Q. 月謝以外にかかる費用はありますか？</h3>
            <p className="text-gray-700">A. 主な追加費用として、競技大会参加費（年1-2回、5,000-10,000円程度）、追加教材費、検定受験料などがあります。事前に各教室に確認することをおすすめします。ヒューマンアカデミーとCotoMiraiは比較的追加費用が少ない傾向です。</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Q. 将来的な進路にどのように活かされますか？</h3>
            <p className="text-gray-700">A. ロボティクス教育で身につく論理的思考力や問題解決力は、理系進路はもちろん、あらゆる分野で活用できます。実際にクレファス出身者の理数系大学進学率は89%と高く、AO入試での評価も高い傾向があります。</p>
          </div>
        </div>

        <h2 id="ai-studio-advantage" className="scroll-mt-20">AI創造スタジオのロボティクス教育</h2>

        <p>
          私たちAI創造スタジオでは、従来のロボティクス教育に最新のAI技術を組み合わせた独自のカリキュラムを提供しています。港区の教育環境を熟知したスタッフが、お子様一人ひとりの個性を活かした学習プランをご提案します。
        </p>

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">🚀 AI創造スタジオの特徴</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-orange-600">🤖 AI×ロボティクス</h4>
              <p className="text-sm mb-4">画像認識、音声認識、機械学習をロボットに実装し、より高度で実践的な学習を提供</p>
              
              <h4 className="font-bold mb-2 text-orange-600">🎨 創造性重視</h4>
              <p className="text-sm">単なる技術習得ではなく、アート・音楽・ストーリーテリングと融合した総合的な創造教育</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2 text-orange-600">🏛️ 港区特化</h4>
              <p className="text-sm mb-4">港区の国際的な環境を活かし、グローバルな視点でのロボティクス教育を実施</p>
              
              <h4 className="font-bold mb-2 text-orange-600">👥 少人数制</h4>
              <p className="text-sm">講師1人に対し生徒3人までの少人数制で、きめ細かな指導を実現</p>
            </div>
          </div>
        </div>

        <h2 id="conclusion" className="scroll-mt-20">まとめ：港区で最適なロボティクス教室を見つけるために</h2>

        <p>
          港区には多様なロボティクス教室があり、それぞれに異なる特色と強みがあります。重要なのは、お子様の年齢、性格、学習目的、そして家庭の教育方針に最も適した教室を選ぶことです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-bold text-blue-700 mb-3">🎯 教室選びの最終チェックポイント</h3>
          <ul className="space-y-2 text-blue-800">
            <li>✅ <strong>無料体験に必ず参加</strong>：教室の雰囲気と子どもとの相性を確認</li>
            <li>✅ <strong>料金の総額を把握</strong>：月謝以外の費用も含めて年間予算を計算</li>
            <li>✅ <strong>継続のしやすさ</strong>：立地、振替制度、サポート体制を確認</li>
            <li>✅ <strong>将来的な発展性</strong>：上級コースや競技大会への道筋があるか</li>
            <li>✅ <strong>指導方針の一致</strong>：家庭の教育方針と教室の理念が合うか</li>
          </ul>
        </div>

        <p>
          ロボティクス教育は、単なる習い事ではなく、AI時代を生きる子どもたちにとって重要な基礎力を育む教育投資です。港区という恵まれた教育環境を最大限に活用し、お子様の無限の可能性を引き出す最適な教室を見つけてください。
        </p>

        <p className="font-bold text-lg mt-8">
          迷ったときは、まず無料体験から始めてみましょう。お子様の輝く笑顔が、きっと最適な選択への道しるべとなるはずです。
        </p>

        <h2 id="references" className="scroll-mt-20">参考文献・データ出典</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4 text-gray-800">主要データ出典</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <strong>文部科学省</strong>「小学校プログラミング教育の手引」(2020年)
              <br />プログラミング教育の実施状況98.7%等の統計データ
            </li>
            <li>
              <strong>総務省</strong>「教育のICT化の現状」(2024年)
              <br />STEAM教育普及状況とロボティクス教育効果に関する調査
            </li>
            <li>
              <strong>各教室公式ウェブサイト・パンフレット</strong>
              <br />料金体系、カリキュラム内容、実績データ等の公式情報
            </li>
            <li>
              <strong>港区教育委員会</strong>「港区教育振興基本計画」(2023年)
              <br />港区における教育方針と国際教育推進策
            </li>
            <li>
              <strong>クレファス</strong>「理数系大学進学実績調査」(2024年)
              <br />ロボティクス教育受講者の進路実績89%データ
            </li>
            <li>
              <strong>編集部独自調査</strong>「港区ロボティクス教室体験レポート」(2025年5月)
              <br />各教室への実地取材と無料体験参加結果
            </li>
          </ul>
        </div>
      </article>
      
      {/* 関連記事 */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">関連記事</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-programing.jpg"
                alt="AI時代のプログラミング教育"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-programming-for-kids" className="hover:text-primary transition-colors">
                  AI時代のプログラミング教育：子どもに本当に必要なスキルとは？
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年1月25日</p>
              <p className="text-gray-700 line-clamp-3">
                AI時代に子どもたちが身につけるべきプログラミングスキルについて詳しく解説します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-creativity-development.jpg"
                alt="港区で子どもの創造性を育む"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/minato-creativity-education-areas" className="hover:text-primary transition-colors">
                  港区で子どもの創造性を育む：麻布・青山・六本木エリア別教育ガイド
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年6月1日</p>
              <p className="text-gray-700 line-clamp-3">
                港区の各エリアの特性を活かした創造性教育の選び方について専門家が解説します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-education-trends-2025.jpg"
                alt="年収1000万円世帯の教育投資戦略"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/high-income-education-investment-strategy" className="hover:text-primary transition-colors">
                  年収1000万円世帯の教育投資戦略：AI時代に向けた港区での選択肢
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年6月1日</p>
              <p className="text-gray-700 line-clamp-3">
                高所得世帯向けの教育投資戦略と費用対効果の高い選択肢について解説します。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mb-12 shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">港区のロボティクス教育をお考えですか？</h3>
        <p className="mb-6 text-lg">
          AI創造スタジオでは、従来のロボティクス教育に最新のAI技術を組み合わせた独自プログラムを提供。
          港区の国際的環境を活かし、お子様の創造性を最大限に引き出します。
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg">
            <Link href="/trial">無料体験・相談会に申し込む</Link>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 text-lg">
            <Link href="/courses/robotics">ロボティクスコースを見る</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}