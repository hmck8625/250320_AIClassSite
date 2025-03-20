import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function VideoCoursePage() {
  return (
    <div className="container mx-auto py-12">
      {/* ヘッダー */}
      <div className="mb-12">
        <Link href="/courses" className="text-indigo-600 hover:underline mb-4 inline-block">
          ← コース一覧に戻る
        </Link>
        <h1 className="text-4xl font-bold mb-4">AI映像制作コース</h1>
        <div className="flex items-center mb-6">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded mr-3">中高生向け</span>
          <span className="text-gray-700">月3回 / 120分</span>
        </div>
      </div>

      {/* コース概要 */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/sample/top/image_story_icon.jpg"
            alt="AI映像制作コース"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">コース概要</h2>
          <p className="mb-4">
            AI映像制作コースでは、AIを活用した映像制作技術を学び、ショートフィルムやアニメーションの制作に挑戦します。
            映像編集の基礎から応用まで幅広く学べる、創造性と技術力を育むコースです。
          </p>
          <p className="mb-4">
            AIツールを活用することで、これまでは専門家でなければ難しかった高度な映像表現も可能に。
            自分のアイデアを映像で表現する力を身につけ、未来のクリエイターを目指しましょう。
          </p>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">このコースで身につくスキル</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>映像編集の基礎技術</li>
              <li>AIを活用した映像生成</li>
              <li>ストーリーテリングの基本</li>
              <li>視覚効果（VFX）の基礎</li>
              <li>映像作品の企画・制作プロセス</li>
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
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第1クール：映像制作の基礎（1〜3ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>映像編集ソフトの基本操作</li>
                      <li>カメラワークの基礎</li>
                      <li>AIを使った素材生成入門</li>
                      <li>基本的な映像文法</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>30秒〜1分程度のショートクリップ</p>
                  </div>
                </div>
              </div>
              
              {/* 第2クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第2クール：AIと映像表現（4〜6ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>AIを使ったキャラクター・背景生成</li>
                      <li>ストーリーボードの作成</li>
                      <li>音響効果と音楽</li>
                      <li>基本的なアニメーション技法</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>2〜3分程度のショートストーリー</p>
                  </div>
                </div>
              </div>
              
              {/* 第3クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第3クール：映像制作の応用（7〜9ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>視覚効果（VFX）の基礎</li>
                      <li>AIを活用した映像変換・加工</li>
                      <li>ナレーションと台詞</li>
                      <li>映像作品の構成と演出</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>3〜5分程度のショートフィルムまたはアニメーション</p>
                  </div>
                </div>
              </div>
              
              {/* 第4クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第4クール：総合映像プロジェクト（10〜12ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>企画から完成までの制作プロセス</li>
                      <li>複数のAIツールの連携活用</li>
                      <li>高度な編集テクニック</li>
                      <li>作品発表の準備</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>オリジナル映像作品（5分程度）と上映会</p>
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
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 font-bold mr-4">
                K.T
              </div>
              <div>
                <p className="font-bold">Kくん（中学3年生）</p>
                <p className="text-sm text-gray-600">受講期間：8ヶ月</p>
              </div>
            </div>
            <p className="mb-4">
              「YouTubeの動画編集に興味があって始めましたが、AIを使うことで自分一人では
              作れないような映像効果も簡単に作れるようになりました。友達と一緒に
              ショートフィルムを作って、学校の文化祭で上映したのが良い思い出です。」
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 font-bold mr-4">
                M.S
              </div>
              <div>
                <p className="font-bold">Mさん（高校2年生）</p>
                <p className="text-sm text-gray-600">受講期間：1年</p>
              </div>
            </div>
            <p className="mb-4">
              「将来は映像関係の仕事に就きたいと思っていて、このコースを選びました。
              AIを使った映像制作は最先端の技術で、自分のイメージを形にするのが楽しいです。
              作った作品をSNSにアップしたら、思った以上に反響があって驚きました！」
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
                    <p className="text-2xl font-bold text-indigo-600">19,800円/月（税込）</p>
                    <p className="text-sm text-gray-600">月3回（120分/回）</p>
                  </div>
                  <div>
                    <p className="font-bold">教材費</p>
                    <p>初回のみ 12,000円（税込）</p>
                    <p className="text-sm text-gray-600">ノートPC貸出あり（月額3,000円）</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">開講スケジュール</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">火曜クラス</p>
                    <p>18:00〜20:00</p>
                  </div>
                  <div>
                    <p className="font-bold">木曜クラス</p>
                    <p>18:00〜20:00</p>
                  </div>
                  <div>
                    <p className="font-bold">日曜クラス</p>
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
      <div className="bg-indigo-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">まずは無料体験会に参加してみませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          実際にAI映像ツールを使って、簡単な映像制作を体験できます。
          お子様の興味や適性を見ながら、詳しくご説明いたします。
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-600">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-600">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
