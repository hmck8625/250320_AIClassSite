import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GameCreatorCoursePage() {
  return (
    <div className="container mx-auto py-12">
      {/* ヘッダー */}
      <div className="mb-12">
        <Link href="/courses" className="text-green-600 hover:underline mb-4 inline-block">
          ← コース一覧に戻る
        </Link>
        <h1 className="text-4xl font-bold mb-4">AIゲームクリエイターコース</h1>
        <div className="flex items-center mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded mr-3">小中学生向け</span>
          <span className="text-gray-700">月3回 / 90分</span>
        </div>
      </div>

      {/* コース概要 */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/sample/top/image_game_icon.jpg"
            alt="AIゲームクリエイターコース"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">コース概要</h2>
          <p className="mb-4">
            AIゲームクリエイターコースでは、AIを活用してゲームのキャラクターや背景を作り、
            簡単なゲームプログラミングに挑戦します。お子様のアイデアを形にする楽しさを体験できます。
          </p>
          <p className="mb-4">
            ゲーム制作の基礎からAIツールの活用方法まで、幅広く学びながら、
            自分だけのオリジナルゲームを作り上げる達成感を味わいましょう。
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">このコースで身につくスキル</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>AIを使ったゲームアセット作成</li>
              <li>基本的なプログラミング知識</li>
              <li>ゲームデザインの基礎</li>
              <li>論理的思考力</li>
              <li>問題解決能力</li>
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
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第1クール：ゲーム制作の基礎（1〜3ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>ゲームエンジンの基本操作</li>
                      <li>AIを使ったキャラクター作成</li>
                      <li>簡単なプログラミング</li>
                      <li>ミニゲームの制作</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>簡単な2Dミニゲーム（迷路ゲームなど）</p>
                  </div>
                </div>
              </div>
              
              {/* 第2クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第2クール：ゲームデザインとAI活用（4〜6ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>ゲームデザインの基本</li>
                      <li>AIを使った背景・効果音作成</li>
                      <li>変数と条件分岐</li>
                      <li>ゲームメカニクスの設計</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>オリジナルアクションゲーム</p>
                  </div>
                </div>
              </div>
              
              {/* 第3クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第3クール：ゲーム開発の応用（7〜9ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>物理エンジンの活用</li>
                      <li>AIを使ったゲームストーリー作成</li>
                      <li>ループと配列</li>
                      <li>ゲームバランスの調整</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>オリジナルアドベンチャーゲーム</p>
                  </div>
                </div>
              </div>
              
              {/* 第4クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第4クール：総合ゲーム制作（10〜12ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>複数のAIツールの連携活用</li>
                      <li>ゲームUIデザイン</li>
                      <li>デバッグとテスト</li>
                      <li>ゲーム発表の準備</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>年間集大成となるオリジナルゲーム</p>
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
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 font-bold mr-4">
                K.S
              </div>
              <div>
                <p className="font-bold">Kくん（小学5年生）</p>
                <p className="text-sm text-gray-600">受講期間：8ヶ月</p>
              </div>
            </div>
            <p className="mb-4">
              「自分で考えたキャラクターがゲームの中で動くようになった時は本当に嬉しかったです。
              プログラミングは難しいと思っていましたが、先生が分かりやすく教えてくれるので楽しく学べています。
              友達にも自分のゲームで遊んでもらえて嬉しいです！」
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 font-bold mr-4">
                R.N
              </div>
              <div>
                <p className="font-bold">Rさん（中学1年生）</p>
                <p className="text-sm text-gray-600">受講期間：1年</p>
              </div>
            </div>
            <p className="mb-4">
              「最初は簡単なゲームしか作れませんでしたが、今では自分でストーリーを考えて
              アドベンチャーゲームを作れるようになりました。AIを使うと、自分一人では
              作れないようなキャラクターや背景も簡単に作れるので、アイデアをどんどん形にできます。」
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
                    <p className="text-2xl font-bold text-green-600">16,800円/月（税込）</p>
                    <p className="text-sm text-gray-600">月3回（90分/回）</p>
                  </div>
                  <div>
                    <p className="font-bold">教材費</p>
                    <p>初回のみ 8,000円（税込）</p>
                    <p className="text-sm text-gray-600">ノートPC貸出あり（月額2,000円）</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">開講スケジュール</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">火曜クラス</p>
                    <p>17:00〜18:30</p>
                  </div>
                  <div>
                    <p className="font-bold">木曜クラス</p>
                    <p>17:00〜18:30</p>
                  </div>
                  <div>
                    <p className="font-bold">土曜クラス</p>
                    <p>14:00〜15:30</p>
                    <p>16:00〜17:30</p>
                  </div>
                  <p className="text-sm text-gray-600">※クラスは人数制限があります。詳細はお問い合わせください。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-green-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">まずは無料体験会に参加してみませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          実際にAIツールを使ってゲームキャラクターを作り、簡単なゲーム制作を体験できます。
          お子様の興味や適性を見ながら、詳しくご説明いたします。
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
