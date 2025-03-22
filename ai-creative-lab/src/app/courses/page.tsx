import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">コース紹介</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AIを活用して様々な創作活動を体験し、子どもたちの可能性を広げる多彩なコース
        </p>
      </div>
      
      {/* 汎用コースへの誘導セクション */}
      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold mb-3">AIの全体像を学ぶコース（期間限定無料！）</h2>
            <p className="text-gray-700 mb-4">
              特定の分野に限らず、AI・LLMをつかってどういうことができるの？？？に答えるコースです。
              基礎から応用まで、幅広くAIの活用方法を学べます。大人の方も勉強になる内容です。
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/courses/general" className="text-white">詳細を見る</Link>
            </Button>
          </div>
          <div className="w-full md:w-1/3 h-48 bg-gray-200 relative overflow-hidden rounded-lg">
            <Image 
              src="/images/sample/top/2-engi.jpg"
              alt="汎用AIコース"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* コース一覧 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">コース一覧</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* コース1 */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <Image 
                src="/images/sample/top/image_art_icon.jpg"
                alt="AIアート探検コース"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">小学生向け</span>
              <h3 className="text-xl font-bold mb-2">AIアート探検コース</h3>
              <p className="text-gray-600 mb-4">
                AIを使って絵や写真を作りながら、自分だけの作品集を作ります。
                デジタルアートの基礎も学べる入門コースです。
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">月2回 / 90分</span>
                <Button variant="outline" size="sm">
                  <Link href="/courses">comming soon..</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* コース2 */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <Image 
                src="/images/sample/top/image_game_icon.jpg"
                alt="AIゲームクリエイターコース"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mb-2">小中学生向け</span>
              <h3 className="text-xl font-bold mb-2">AIゲームクリエイターコース</h3>
              <p className="text-gray-600 mb-4">
                AIを活用してゲームのキャラクターや背景を作り、簡単なゲームプログラミングに挑戦します。
                自分だけのオリジナルゲームを作ろう！
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">月3回 / 90分</span>
                <Button variant="outline" size="sm">
                  <Link href="/courses">comming soon..</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* コース3 */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <Image 
                src="/images/sample/top/image_engneer_icon.jpg"
                alt="AIアプリ開発コース"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded mb-2">中高生向け</span>
              <h3 className="text-xl font-bold mb-2">AIアプリ開発コース</h3>
              <p className="text-gray-600 mb-4">
                AIを活用したWebアプリケーションの開発に挑戦します。
                プログラミングの基礎からAI APIの活用方法まで学べる発展コースです。
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">月4回 / 120分</span>
                <Button variant="outline" size="sm">
                 <Link href="/courses">comming soon..</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* コース4 */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <Image 
                src="/images/sample/top/image_music_icon.jpg"
                alt="AI音楽作曲コース"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded mb-2">小学生向け</span>
              <h3 className="text-xl font-bold mb-2">AI音楽作曲コース</h3>
              <p className="text-gray-600 mb-4">
                AIを使って自分だけのオリジナル曲を作曲します。
                音楽の基礎知識も学びながら、作曲の楽しさを体験できます。
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">月2回 / 90分</span>
                <Button variant="outline" size="sm">
                 <Link href="/courses">comming soon..</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* コース5 */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <Image 
                src="/images/sample/top/image_boy_idea.jpg"
                alt="AIロボティクスコース"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded mb-2">小中学生向け</span>
              <h3 className="text-xl font-bold mb-2">AIロボティクスコース</h3>
              <p className="text-gray-600 mb-4">
                AIとロボットプログラミングを組み合わせて、自律型ロボットの開発に挑戦します。
                ハードウェアとソフトウェアの連携を学びます。
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">月3回 / 120分</span>
                <Button variant="outline" size="sm">
                 <Link href="/courses">comming soon..</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* コース6 */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <Image 
                src="/images/sample/top/image_story_icon.jpg"
                alt="AI映像制作コース"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mb-2">中高生向け</span>
              <h3 className="text-xl font-bold mb-2">AI映像制作コース</h3>
              <p className="text-gray-600 mb-4">
                AIを活用した映像制作技術を学び、ショートフィルムやアニメーションの制作に挑戦します。
                映像編集の基礎から応用まで幅広く学べます。
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">月3回 / 120分</span>
                <Button variant="outline" size="sm">
                 <Link href="/courses">comming soon..</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* CTA */}
      <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">まずは無料体験会に参加してみませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          各コースの詳細や料金については、無料体験会でご説明します。
          お子様の興味や適性を見ながら、最適なコースをご提案いたします。
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
