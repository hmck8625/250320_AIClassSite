import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'STEAM教育とAI：未来を生きる子どもたちのための新しい学びのカタチ | AI創造ラボ',
  description: 'STEAM教育とAIを融合した新しい教育アプローチ。科学・技術・工学・芸術・数学を横断的に学び、創造性と問題解決能力を育む効果的な方法と実践例を紹介します。',
  keywords: 'STEAM教育, AI教育, STEM, 創造性教育, プロジェクト学習, 子ども向けプログラミング, 港区, AI創造ラボ',
  openGraph: {
    title: 'STEAM教育とAI：未来を生きる子どもたちのための新しい学びのカタチ',
    description: 'STEAM教育とAIを融合した新しい教育アプローチ。科学・技術・工学・芸術・数学を横断的に学び、創造性と問題解決能力を育む効果的な方法と実践例を紹介します。',
    images: [{ url: '/images/steam-education-hero.jpg' }],
  }
};

export default function SteamEducationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* ヒーローセクション */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              <span className="text-primary">STEAM教育</span>とAIで育む<br />未来を創る力
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              科学・技術・工学・芸術・数学を横断的に学ぶSTEAM教育に、最新のAI技術を融合。港区の子どもたちの創造性と問題解決能力を育む、次世代の学びをご提供します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg">
                <Link href="/trial">無料体験に申し込む</Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 text-lg">
                <Link href="/courses">コース一覧を見る</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/steam-education-hero.jpg"
              alt="STEAM教育の様子"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* STEAM教育とは */}
      <section className="mb-16" id="what-is-steam">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">STEAM教育とは</h2>
          <div className="grid md:grid-cols-5 gap-6 text-center mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">S</span>
              </div>
              <h3 className="font-bold mb-2">Science</h3>
              <p className="text-gray-700">科学</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">T</span>
              </div>
              <h3 className="font-bold mb-2">Technology</h3>
              <p className="text-gray-700">技術</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-2xl font-bold">E</span>
              </div>
              <h3 className="font-bold mb-2">Engineering</h3>
              <p className="text-gray-700">工学</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">A</span>
              </div>
              <h3 className="font-bold mb-2">Arts</h3>
              <p className="text-gray-700">芸術</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl font-bold">M</span>
              </div>
              <h3 className="font-bold mb-2">Mathematics</h3>
              <p className="text-gray-700">数学</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              STEAM教育は、従来の教科の枠を超えた学際的な教育アプローチです。単なる知識の習得ではなく、<strong>実践的な問題解決を通じて総合的な能力を育む</strong>ことを目指しています。
            </p>
            <p>
              STEMに「A（Arts：芸術）」が加わったSTEAM教育は、論理的思考だけでなく、創造性やデザイン思考も重視。AI時代に必要とされる「人間ならではの創造力」を育む教育として、世界中で注目されています。
            </p>
          </div>
        </div>
      </section>
      
      {/* STEAM教育の重要性 */}
      <section className="mb-16" id="importance">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">
          なぜ今、STEAM教育が重要なのか
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/steam-importance.jpg"
              alt="STEAM教育の重要性"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">AI時代を生きる力を育む</h3>
            <p className="mb-4 text-lg">
              AIが急速に発展する現代社会において、単純な知識の暗記や反復作業はAIに代替される可能性が高まっています。これからの時代に求められるのは、<span className="font-bold text-primary">AIと協働しながら創造的な価値を生み出せる人材</span>です。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-800">複雑な問題解決能力の育成</h3>
            <p className="mb-4 text-lg">
              現実世界の課題は一つの学問分野だけでは解決できません。STEAM教育は多角的な視点から問題にアプローチする力を育み、子どもたちの問題解決能力を高めます。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-800">創造性と批判的思考の両立</h3>
            <p className="text-lg">
              STEAM教育の中核は「創造すること」と「批判的に考えること」の融合。AIツールの活用を通じて、子どもたちは技術の可能性と限界を体験的に学び、自分なりの解決策を生み出す力を身につけます。
            </p>
          </div>
        </div>
      </section>
      
      {/* AI×STEAM教育の特徴 */}
      <section className="mb-16" id="ai-steam-features">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">
          AI創造ラボが提供するSTEAM教育の特徴
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">AIを入口とした多様な創造活動</h3>
            <p className="text-gray-700">
              AIをゴールではなく「入口」として位置づけ、子どもたちの興味関心に合わせて音楽、アート、ゲーム開発など多様な創造分野への探究を促します。AIが生み出す「驚き」をきっかけに、子どもたちの好奇心を引き出します。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">少人数制グループプロジェクト</h3>
            <p className="text-gray-700">
              4〜5人の少人数グループで実践するプロジェクト型学習を採用。チームでの協働を通じて、コミュニケーション能力や多様な視点を尊重する姿勢を養います。AIと人間の強みを生かし合う共創の経験を提供します。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">子どもの才能発見・育成サポート</h3>
            <p className="text-gray-700">
              STEAM教育の幅広い活動を通して子どもの潜在的な才能や興味を発見。専門的な探究に適した質の高い提携先教室への橋渡しを行い、子どもの才能を継続的に育む教育パスを提案します。
            </p>
          </div>
        </div>
      </section>
      
      {/* 年齢別 STEAM教育プログラム */}
      <section className="mb-16" id="programs">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">
          年齢別 STEAM教育プログラム
        </h2>
        
        <div className="space-y-8">
          <div className="bg-blue-50 rounded-xl overflow-hidden shadow-md">
            <div className="grid md:grid-cols-3">
              <div className="p-8 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">
                  小学校低学年向け | STEAMディスカバリーコース
                </h3>
                <p className="mb-6 text-lg">
                  遊びを通してSTEAMの基礎概念に触れる入門コース。AIと一緒にお絵かきをしたり、簡単なロボットを動かしたりしながら、科学や技術の面白さを体験します。
                </p>
                <h4 className="font-bold text-lg mb-2">学べる力:</h4>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>好奇心と探究心</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>グループ活動でのコミュニケーション力</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>創造的な自己表現</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/courses/discovery">コース詳細を見る</Link>
                </Button>
              </div>
              <div className="relative md:h-auto">
                <Image 
                  src="/images/steam-elementary-lower.jpg"
                  alt="小学校低学年向けSTEAM教育"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-xl overflow-hidden shadow-md">
            <div className="grid md:grid-cols-3">
              <div className="relative md:h-auto">
                <Image 
                  src="/images/steam-elementary-upper.jpg"
                  alt="小学校高学年向けSTEAM教育"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-green-700">
                  小学校高学年向け | STEAMクリエイターコース
                </h3>
                <p className="mb-6 text-lg">
                  AIツールを活用した創作活動を通して、STEAMの各分野を横断的に学びます。物語創作、簡単なゲーム開発、デジタルアート制作など、多様なプロジェクトに挑戦します。
                </p>
                <h4 className="font-bold text-lg mb-2">学べる力:</h4>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>プロジェクト設計・実行力</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>批判的思考と問題解決能力</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>デジタルツールの創造的活用力</span>
                  </li>
                </ul>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/courses/creator">コース詳細を見る</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl overflow-hidden shadow-md">
            <div className="grid md:grid-cols-3">
              <div className="p-8 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">
                  中学生向け | STEAMイノベーターコース
                </h3>
                <p className="mb-6 text-lg">
                  社会課題の解決を目指すプロジェクト型学習。AIを含む先端テクノロジーを活用しながら、オリジナルのソリューションをチームで開発します。専門家メンターによる指導も実施。
                </p>
                <h4 className="font-bold text-lg mb-2">学べる力:</h4>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>イノベーション思考と起業家精神</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>高度なテクノロジー理解と活用力</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>リーダーシップとプロジェクト管理能力</span>
                  </li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/courses/innovator">コース詳細を見る</Link>
                </Button>
              </div>
              <div className="relative md:h-auto">
                <Image 
                  src="/images/steam-junior-high.jpg"
                  alt="中学生向けSTEAM教育"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* STEAM教育の効果 */}
      <section className="mb-16" id="effects">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">
          STEAM教育で育まれる7つの力
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="h-14 w-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">創造的思考力</h3>
            <p className="text-gray-700">
              既存の枠組みにとらわれず、新しいアイデアやソリューションを生み出す力。AIツールを活用した創造的なプロジェクトを通じて育まれます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">批判的思考力</h3>
            <p className="text-gray-700">
              情報を多角的に分析し、適切に評価・判断する能力。AIの出力結果を吟味し改善するプロセスを通じて強化されます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">テクノロジー活用力</h3>
            <p className="text-gray-700">
              AIを含む最新テクノロジーの基本原理を理解し、目的に応じて適切に活用する能力。ツールとしてのAIを主体的に使いこなします。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="h-14 w-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">協働・コミュニケーション力</h3>
            <p className="text-gray-700">
              多様な視点や専門性を持つメンバーと協力して課題に取り組む力。チームプロジェクトを通じて培われます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="h-14 w-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">自己効力感と挑戦意欲</h3>
            <p className="text-gray-700">
              自分の能力を信じ、新しい課題に積極的に挑戦する姿勢。STEAM教育の多様なプロジェクト経験が自信につながります。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="h-14 w-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">学際的思考力</h3>
            <p className="text-gray-700">
              複数の学問分野を横断的に捉え、知識を統合して応用する力。STEAMの各分野を融合したプロジェクトで養われます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">情報倫理とリテラシー</h3>
            <p className="text-gray-700">
              AIを含むテクノロジーの社会的影響や倫理的課題を理解し、責任ある利用を判断できる能力。ディスカッションやケーススタディを通じて育みます。
            </p>
          </div>
        </div>
      </section>
      
      {/* 保護者の声 */}
      <section className="mb-16" id="testimonials">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">
          保護者の声
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-md relative">
            <div className="absolute top-4 right-4 text-6xl text-gray-200">"</div>
            <p className="text-lg mb-6 relative z-10">
              息子は技術に興味がある一方で、図工や音楽も好きな子でした。このAI×STEAM教育では、その両方の才能を伸ばせる環境があり、大変満足しています。特にAIを使った作曲活動がきっかけで、現在は音楽教室にも通い始めました。
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-bold">中村さん（小4男子の保護者）</p>
                <p className="text-sm text-gray-600">港区在住</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md relative">
            <div className="absolute top-4 right-4 text-6xl text-gray-200">"</div>
            <p className="text-lg mb-6 relative z-10">
              娘はプログラミングにはあまり興味を示さなかったのですが、AIアートというクリエイティブな切り口から入ったことで、徐々に技術にも関心を持つようになりました。子どもの適性を見極め、様々な分野へと興味を広げてくれる懐の深さが魅力です。
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-bold">佐藤さん（小6女子の保護者）</p>
                <p className="text-sm text-gray-600">港区在住</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* よくある質問 */}
      <section className="mb-16" id="faq">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">
          よくある質問
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-gray-800">STEAM教育とSTEM教育の違いは何ですか？</h3>
            <p className="text-gray-700">
              STEM教育が科学（Science）、技術（Technology）、工学（Engineering）、数学（Mathematics）の4分野を重視するのに対し、STEAM教育ではこれに芸術（Arts）を加えています。芸術の要素を取り入れることで、創造性やデザイン思考、感性といった側面も重視する教育アプローチです。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-gray-800">プログラミングの経験がない子どもでも参加できますか？</h3>
            <p className="text-gray-700">
              はい、まったく経験がなくても参加できます。AI創造ラボのSTEAM教育では、AIツールを活用することで、プログラミングの知識がなくても創造的な活動に参加できるようカリキュラムを設計しています。お子様の興味や適性に合わせて、段階的に技術的な要素も学べる構成になっています。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-gray-800">STEAM教育は将来どのような進路に役立ちますか？</h3>
            <p className="text-gray-700">
              STEAM教育で培われる創造力、批判的思考力、問題解決能力、協働力などは、あらゆる職業や分野で求められる普遍的なスキルです。特にAI時代においては、テクノロジーと創造性を融合できる人材が重宝されます。理系・文系を問わず、変化の激しい未来社会で活躍するための基礎力を育みます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-gray-800">AIと子どもの創造性は両立するのですか？</h3>
            <p className="text-gray-700">
              AIは創造性を奪うものではなく、むしろ新たな創造の可能性を広げるツールです。AI創造ラボでは、AIを「ゴール」ではなく「スタート地点」と位置づけ、AIの出力をさらに発展させる思考プロセスを大切にしています。AIと協働しながら自分なりの創造性を発揮する経験を通じて、AI時代ならではの創造力を育みます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-gray-800">体験レッスンはありますか？</h3>
            <p className="text-gray-700">
              はい、無料体験レッスンを実施しています。実際のSTEAM教育のアクティビティを体験できるので、お子様との相性を確認するのに最適です。下部の「無料体験に申し込む」ボタンからお申し込みいただけます。
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-blue-100 p-10 rounded-2xl shadow-lg text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">AI時代を生きる子どもたちの創造力を育む</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          AI創造ラボのSTEAM教育で、テクノロジーと創造性を融合した新しい学びを体験しませんか？
          港区を中心に、少人数制で質の高い教育環境をご提供しています。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
            <Link href="/courses">コース一覧を見る</Link>
          </Button>
        </div>
      </section>
      
      {/* 関連記事 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">
          関連記事
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-education-future.jpg"
                alt="STEAM教育の未来"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/steam-education-future" className="hover:text-primary transition-colors">
                  STEAM教育の未来：2025年以降のトレンドと展望
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">2025年3月15日</p>
              <p className="text-gray-700 line-clamp-3">
                AIの進化がSTEAM教育にもたらす変革と、未来社会で求められるスキルについて解説。教育のパラダイムシフトを探ります。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-steam-tools.jpg"
                alt="STEAM教育ツール"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/steam-tools-for-kids" className="hover:text-primary transition-colors">
                  子ども向けSTEAM教育ツール10選：家庭でできるSTEAM活動
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">2025年2月20日</p>
              <p className="text-gray-700 line-clamp-3">
                家庭でSTEAM教育を実践するための厳選ツールとアクティビティアイデアを紹介。日常生活の中で科学的思考と創造性を育みます。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-classroom-activities.jpg"
                alt="クラスルーム活動ガイド"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-classroom-activities" className="hover:text-primary transition-colors">
                  AI教育クラスルーム活動ガイド：創造性を育む実践的アプローチ
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">2025年4月8日</p>
              <p className="text-gray-700 line-clamp-3">
                小中学生向けAI教育の実践的な授業活動アイデア。創造性と批判的思考を育むグループワークやプロジェクトベースの学習方法を解説します。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* スクールデータ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">
          スクール情報
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">AI創造ラボ</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>東京都港区芝浦3-4-1 田町駅前ビル5F</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>営業時間：平日14:00-20:00 / 土日10:00-18:00</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>電話：03-1234-5678</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>メール：info@ai-creative-lab.jp</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">アクセス</h3>
              <p className="text-lg mb-2">
                • JR山手線・京浜東北線「田町駅」東口より徒歩3分<br />
                • 都営地下鉄浅草線・三田線「三田駅」A4出口より徒歩5分
              </p>
            </div>
          </div>
          
          <div className="bg-gray-200 h-80 rounded-xl overflow-hidden shadow-md">
            {/* Googleマップが入ります */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 text-lg">Googleマップが表示されます</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}