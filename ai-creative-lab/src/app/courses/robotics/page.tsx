import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RoboticsCoursePage() {
  return (
    <div className="container mx-auto py-12">
      {/* ヘッダー */}
      <div className="mb-12">
        <Link href="/courses" className="text-yellow-600 hover:underline mb-4 inline-block">
          ← コース一覧に戻る
        </Link>
        <h1 className="text-4xl font-bold mb-4">AIロボティクスコース</h1>
        <div className="flex items-center mb-6">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded mr-3">小中学生向け</span>
          <span className="text-gray-700">月3回 / 120分</span>
        </div>
      </div>

      {/* コース概要 */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/sample/top/image_boy_idea.jpg"
            alt="AIロボティクスコース"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">コース概要</h2>
          <p className="mb-4">
            AIロボティクスコースでは、AIとロボットプログラミングを組み合わせて、
            自律型ロボットの開発に挑戦します。ハードウェアとソフトウェアの連携を学びながら、
            実際に動くロボットを作る楽しさを体験できます。
          </p>
          <p className="mb-4">
            センサーからの情報をAIで処理し、ロボットを制御する方法を学ぶことで、
            論理的思考力と問題解決能力を育みます。未来のエンジニアを目指す第一歩です。
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">このコースで身につくスキル</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>ロボットプログラミングの基礎</li>
              <li>AIによるセンサーデータ処理</li>
              <li>機械学習の基本概念</li>
              <li>ハードウェア設計の基礎</li>
              <li>システム思考と問題解決能力</li>
            </ul>
          </div>
        </div>
      </div>

      {/* カリキュラム */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">カリキュラム</h2>
        <div className="bg-white border rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <div className="space-y-8">
              {/* 第1クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第1クール：ロボティクス入門（1〜3ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>ロボットキットの基本操作</li>
                      <li>基本的なプログラミング</li>
                      <li>センサーの種類と特性</li>
                      <li>簡単なロボット制御</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>基本動作（前進・後退・回転）ができるロボット</p>
                  </div>
                </div>
              </div>
              
              {/* 第2クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第2クール：センサーとAI（4〜6ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>複数センサーの連携</li>
                      <li>AIによるデータ処理の基礎</li>
                      <li>条件分岐とアルゴリズム</li>
                      <li>障害物回避プログラミング</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>障害物を自動回避するロボット</p>
                  </div>
                </div>
              </div>
              
              {/* 第3クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第3クール：機械学習の基礎（7〜9ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>機械学習の基本概念</li>
                      <li>画像認識の基礎</li>
                      <li>音声認識の基礎</li>
                      <li>学習モデルの活用</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>物体を認識して反応するロボット</p>
                  </div>
                </div>
              </div>
              
              {/* 第4クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第4クール：総合ロボットプロジェクト（10〜12ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>複数のAI機能の統合</li>
                      <li>ロボットの機構設計</li>
                      <li>システム最適化</li>
                      <li>プロジェクト管理の基礎</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>特定のタスクを自律的に実行するオリジナルロボット</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 受講生の声・作品例 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">受講生の声・作品例</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 font-bold mr-4">
                S.T
              </div>
              <div>
                <p className="font-bold">Sくん（小学6年生）</p>
                <p className="text-sm text-gray-600">受講期間：9ヶ月</p>
              </div>
            </div>
            <p className="mb-4">
              「ロボットを動かすのは難しいと思っていましたが、少しずつプログラミングを
              学んでいくうちに、自分の思い通りに動かせるようになりました。
              特に障害物を自動で避けるロボットを作った時は、友達にも自慢できて嬉しかったです！」
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 font-bold mr-4">
                Y.M
              </div>
              <div>
                <p className="font-bold">Yさん（中学2年生）</p>
                <p className="text-sm text-gray-600">受講期間：1年</p>
              </div>
            </div>
            <p className="mb-4">
              「理科が好きで、ロボットにも興味があったので、このコースを選びました。
              AIを使ってロボットが自分で判断して動くようになる仕組みが面白いです。
              学校の科学部でも役立っていて、ロボットコンテストに出場する予定です！」
            </p>
          </div>
        </div>
      </section>

      {/* 料金・スケジュール */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">料金・スケジュール</h2>
        <div className="bg-white border rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">料金プラン</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <p className="font-bold">月謝制</p>
                    <p className="text-2xl font-bold text-yellow-600">19,800円/月（税込）</p>
                    <p className="text-sm text-gray-600">月3回（120分/回）</p>
                  </div>
                  <div>
                    <p className="font-bold">教材費・ロボットキット</p>
                    <p>初回のみ 15,000円（税込）</p>
                    <p className="text-sm text-gray-600">※ロボットキットはお持ち帰りいただけます</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">開講スケジュール</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">水曜クラス</p>
                    <p>17:00〜19:00</p>
                  </div>
                  <div>
                    <p className="font-bold">金曜クラス</p>
                    <p>17:00〜19:00</p>
                  </div>
                  <div>
                    <p className="font-bold">土曜クラス</p>
                    <p>10:00〜12:00</p>
                    <p>14:00〜16:00</p>
                  </div>
                  <p className="text-sm text-gray-600">※クラスは人数制限があります。詳細はお問い合わせください。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-yellow-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">まずは無料体験会に参加してみませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          実際にロボットキットを使って、簡単なプログラミングを体験できます。
          お子様の興味や適性を見ながら、詳しくご説明いたします。
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yellow-600">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yellow-600">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
