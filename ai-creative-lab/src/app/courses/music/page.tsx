import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MusicCoursePage() {
  return (
    <div className="container mx-auto py-12">
      {/* ヘッダー */}
      <div className="mb-12">
        <Link href="/courses" className="text-red-600 hover:underline mb-4 inline-block">
          ← コース一覧に戻る
        </Link>
        <h1 className="text-4xl font-bold mb-4">AI音楽作曲コース</h1>
        <div className="flex items-center mb-6">
          <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded mr-3">小学生向け</span>
          <span className="text-gray-700">月2回 / 90分</span>
        </div>
      </div>

      {/* コース概要 */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/sample/top/image_music_icon.jpg"
            alt="AI音楽作曲コース"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">コース概要</h2>
          <p className="mb-4">
            AI音楽作曲コースでは、AIを使って自分だけのオリジナル曲を作曲します。
            音楽の基礎知識も学びながら、作曲の楽しさを体験できる創造的なコースです。
          </p>
          <p className="mb-4">
            楽器が弾けなくても、音楽理論を知らなくても大丈夫。
            AIツールを活用して、自分のイメージした音楽を形にする喜びを味わいましょう。
          </p>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">このコースで身につくスキル</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>AI音楽生成ツールの活用方法</li>
              <li>基本的な音楽理論</li>
              <li>作曲の基礎知識</li>
              <li>音楽編集の基本スキル</li>
              <li>音楽を通した感情表現</li>
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
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第1クール：音楽の基礎とAI入門（1〜3ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>音楽の基本要素（リズム、メロディ、ハーモニー）</li>
                      <li>AI音楽生成ツールの基本操作</li>
                      <li>簡単なメロディ作り</li>
                      <li>音楽の聴き方と分析</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>AIを使った短いメロディ集（30秒程度の曲を3〜5曲）</p>
                  </div>
                </div>
              </div>
              
              {/* 第2クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第2クール：作曲の基礎（4〜6ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>コード進行の基礎</li>
                      <li>AIを使った伴奏作り</li>
                      <li>音楽のジャンルと特徴</li>
                      <li>感情を表現する音楽</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>メロディと伴奏がある1分程度のオリジナル曲（2〜3曲）</p>
                  </div>
                </div>
              </div>
              
              {/* 第3クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第3クール：音楽制作の発展（7〜9ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>楽曲の構成（イントロ、Aメロ、Bメロ、サビなど）</li>
                      <li>AIを使った編曲</li>
                      <li>音楽と物語性</li>
                      <li>基本的なミキシング</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>構成のある2分程度のオリジナル曲（1〜2曲）</p>
                  </div>
                </div>
              </div>
              
              {/* 第4クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第4クール：総合音楽制作（10〜12ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>テーマに沿った作曲</li>
                      <li>AIと人間の協働作曲</li>
                      <li>音楽と映像の組み合わせ</li>
                      <li>作品発表の準備</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>オリジナルミニアルバム（3曲程度）と発表会</p>
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
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold mr-4">
                H.S
              </div>
              <div>
                <p className="font-bold">Hくん（小学3年生）</p>
                <p className="text-sm text-gray-600">受講期間：5ヶ月</p>
              </div>
            </div>
            <p className="mb-4">
              「ピアノは習っていたけど、自分で曲を作るのは難しいと思っていました。
              でもAIを使うと、思いついたメロディをすぐに形にできて楽しいです。
              自分の作った曲を家族に聴いてもらうのが嬉しいです！」
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold mr-4">
                M.K
              </div>
              <div>
                <p className="font-bold">Mさん（小学5年生）</p>
                <p className="text-sm text-gray-600">受講期間：10ヶ月</p>
              </div>
            </div>
            <p className="mb-4">
              「音楽が好きで、いつも聴いていましたが、自分でも作れるようになって
              とても楽しいです。学校の音楽の授業でも役立っています。
              将来は作曲家になりたいと思うようになりました！」
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
                    <p className="text-2xl font-bold text-red-600">12,800円/月（税込）</p>
                    <p className="text-sm text-gray-600">月2回（90分/回）</p>
                  </div>
                  <div>
                    <p className="font-bold">教材費</p>
                    <p>初回のみ 6,000円（税込）</p>
                    <p className="text-sm text-gray-600">タブレット貸出あり（月額1,000円）</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">開講スケジュール</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">火曜クラス</p>
                    <p>16:30〜18:00</p>
                  </div>
                  <div>
                    <p className="font-bold">金曜クラス</p>
                    <p>16:30〜18:00</p>
                  </div>
                  <div>
                    <p className="font-bold">土曜クラス</p>
                    <p>10:30〜12:00</p>
                    <p>13:30〜15:00</p>
                  </div>
                  <p className="text-sm text-gray-600">※クラスは人数制限があります。詳細はお問い合わせください。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-red-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">まずは無料体験会に参加してみませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          実際にAI音楽ツールを使って、簡単なメロディ作りを体験できます。
          お子様の興味や適性を見ながら、詳しくご説明いたします。
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
