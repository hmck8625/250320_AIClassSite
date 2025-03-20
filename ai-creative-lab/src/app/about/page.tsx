import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">教室について</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AIを創造の入口として、子どもたちの可能性を広げる教育理念と3ステップメソッド
        </p>
      </div>
      
      {/* 教育理念 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">教育理念</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-200 h-80 flex items-center justify-center">
            <p className="text-gray-500">画像エリア（後で実装）</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">AIは目的ではなく、創造の入口</h3>
            <p className="mb-4">
              AI創造ラボでは、AIを学ぶことそのものを目的とはしていません。
              AIは子どもたちが自分の「好き」や「才能」を見つけるための入口であり、
              創造性を広げるためのツールです。
            </p>
            <p className="mb-4">
              私たちは、子どもたちがAIを活用して様々な創作活動を体験することで、
              自分の興味や才能に気づき、それを伸ばしていくサポートをします。
            </p>
            <p>
              テクノロジーの進化に適応しながらも、その先にある「人間らしい創造性」を
              大切にする教育を提供しています。
            </p>
          </div>
        </div>
      </section>
      
      {/* 3ステップメソッド */}
      <section className="mb-16 bg-gray-50 py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">3ステップメソッド</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
            <h3 className="text-xl font-bold mb-3 text-center">体験する</h3>
            <p>
              AIツールを使って、音楽、アート、ゲーム、Webアプリなど様々な創作活動を体験します。
              多様な体験を通じて、自分が「楽しい」と感じる分野を見つけます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
            <h3 className="text-xl font-bold mb-3 text-center">深める</h3>
            <p>
              興味を持った分野について、AIツールの活用方法や基礎知識を学びます。
              自分のアイデアを形にするための技術やコツを身につけます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
            <h3 className="text-xl font-bold mb-3 text-center">創造する</h3>
            <p>
              学んだ知識と技術を活かして、自分だけのオリジナル作品を創作します。
              作品制作を通じて創造力を育み、達成感を味わいます。
            </p>
          </div>
        </div>
      </section>
      
      {/* 講師紹介 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">講師紹介</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 講師1 */}
          <div className="text-center">
            <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-500">写真</p>
            </div>
            <h3 className="text-xl font-bold mb-2">山田 太郎</h3>
            <p className="text-gray-600 mb-2">代表 / AIエンジニア</p>
            <p className="text-sm">
              大手IT企業でAI開発に10年従事。子どものプログラミング教育にも5年以上の経験を持つ。
            </p>
          </div>
          
          {/* 講師2 */}
          <div className="text-center">
            <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-500">写真</p>
            </div>
            <h3 className="text-xl font-bold mb-2">佐藤 花子</h3>
            <p className="text-gray-600 mb-2">教育ディレクター</p>
            <p className="text-sm">
              教育学修士。小学校教諭としての経験を活かし、子どもの発達段階に合わせたカリキュラムを開発。
            </p>
          </div>
          
          {/* 講師3 */}
          <div className="text-center">
            <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-500">写真</p>
            </div>
            <h3 className="text-xl font-bold mb-2">鈴木 一郎</h3>
            <p className="text-gray-600 mb-2">クリエイティブディレクター</p>
            <p className="text-sm">
              デジタルアートとゲーム開発の専門家。子どもたちの創造性を引き出すワークショップを多数開催。
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">AI創造ラボで、お子様の可能性を広げませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          まずは無料体験会にお越しください。お子様の興味や適性を見ながら、最適なコースをご提案します。
        </p>
        <Button size="lg" className="bg-primary">
          <Link href="/trial">無料体験会に申し込む</Link>
        </Button>
      </div>
    </div>
  );
}
