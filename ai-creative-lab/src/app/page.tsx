import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* ヒーローセクション - 仮実装 */}
      <div className="w-full bg-gray-900 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AIで広がる、創造の入口
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            好きを見つける、才能を育てる - 港区の子ども向けAI教室
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary">
              <Link href="https://lin.ee/yourlineurl" target="_blank">
                LINE公式アカウントで体験予約
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              詳しく見る
            </Button>
          </div>
        </div>
      </div>
      
      {/* コンセプト紹介 */}
      <section className="py-16 w-full">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">AI創造ラボとは</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-6">
                AI創造ラボは、子どもたちがAIツールを活用して音楽、アート、ゲーム、
                Webアプリなど多様な創造活動を体験し、自分の「好き」や「才能」を
                発見するきっかけを提供する港区の教室です。
              </p>
              <p className="text-lg">
                AIを「ゴール」ではなく「創造の入口」として位置づけ、
                子どもたちの潜在的な可能性を引き出します。
              </p>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <p className="text-gray-500">画像エリア（後で実装）</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
