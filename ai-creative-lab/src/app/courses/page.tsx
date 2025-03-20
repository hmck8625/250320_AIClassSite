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
                  <Link href="/courses/ai-art">詳細を見る</Link>
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
                  <Link href="/courses/game-creator">詳細を見る</Link>
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
                  <Link href="/courses/app-dev">詳細を見る</Link>
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
                  <Link href="/courses/music">詳細を見る</Link>
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
                  <Link href="/courses/robotics">詳細を見る</Link>
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
                  <Link href="/courses/video">詳細を見る</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 対象別ガイド */}
      <section className="mb-16 bg-gray-50 py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">対象別おすすめコース</h2>
        
        {/* 小学生向け */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">小</span>
            小学生向けコース
          </h3>
          <p className="mb-4">
            小学生のお子様には、まずは様々な創作活動を体験することが大切です。
            AIアート探検コースやAI音楽作曲コースがおすすめです。
            楽しみながら創造力を育み、自分の「好き」を見つける第一歩となります。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AIアート探検コース</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">AI音楽作曲コース</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">AIゲームクリエイターコース</span>
          </div>
        </div>
        
        {/* 中学生向け */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">中</span>
            中学生向けコース
          </h3>
          <p className="mb-4">
            中学生のお子様には、より専門的なスキルを身につけられるコースがおすすめです。
            AIゲームクリエイターコースやAIロボティクスコースでは、
            プログラミングの基礎も学びながら、より複雑な創作活動に挑戦できます。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">AIゲームクリエイターコース</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">AIロボティクスコース</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">AI映像制作コース</span>
          </div>
        </div>
        
        {/* 高校生向け */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3">高</span>
            高校生向けコース
          </h3>
          <p className="mb-4">
            高校生のお子様には、将来の進路や専門性を見据えたコースがおすすめです。
            AIアプリ開発コースやAI映像制作コースでは、
            実践的なスキルを身につけながら、ポートフォリオとなる作品制作に取り組めます。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AIアプリ開発コース</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">AI映像制作コース</span>
          </div>
        </div>
      </section>
      
      {/* カリキュラム詳細 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">カリキュラム詳細</h2>
        <div className="bg-white border rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">3ヶ月単位のステップアップ方式</h3>
            <p className="mb-6">
              AI創造ラボのカリキュラムは、3ヶ月を1クールとしたステップアップ方式を採用しています。
              各クールで明確な目標を設定し、段階的にスキルを伸ばしていきます。
            </p>
            
            <div className="space-y-6">
              {/* 第1クール */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-bold mb-2">第1クール：基礎を学ぶ（1〜3ヶ月目）</h4>
                <p>
                  AIツールの基本的な使い方や、各分野の基礎知識を学びます。
                  簡単な作品制作を通じて、創作の楽しさを体験します。
                </p>
              </div>
              
              {/* 第2クール */}
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-xl font-bold mb-2">第2クール：スキルを深める（4〜6ヶ月目）</h4>
                <p>
                  より高度なAIツールの活用方法や技術を学びます。
                  自分のアイデアを形にするための表現力を養います。
                </p>
              </div>
              
              {/* 第3クール */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-xl font-bold mb-2">第3クール：作品を創る（7〜9ヶ月目）</h4>
                <p>
                  学んだ知識とスキルを活かして、オリジナル作品の制作に取り組みます。
                  作品発表会に向けて、企画から完成までのプロセスを経験します。
                </p>
              </div>
              
              {/* 第4クール */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-bold mb-2">第4クール：発展と応用（10〜12ヶ月目）</h4>
                <p>
                  より複雑な課題に挑戦し、応用力を身につけます。
                  年間の集大成として、自分の「好き」や「才能」を活かした作品を制作します。
                </p>
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
