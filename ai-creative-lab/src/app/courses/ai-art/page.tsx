import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AiArtCoursePage() {
  return (
    <div className="container mx-auto py-12">
      {/* ヘッダー */}
      <div className="mb-12">
        <Link href="/courses" className="text-blue-600 hover:underline mb-4 inline-block">
          ← コース一覧に戻る
        </Link>
        <h1 className="text-4xl font-bold mb-4">AIアート探検コース</h1>
        <div className="flex items-center mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded mr-3">小学生向け</span>
          <span className="text-gray-700">月2回 / 90分</span>
        </div>
      </div>

      {/* コース概要 */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/sample/top/image_art_icon.jpg"
            alt="AIアート探検コース"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">コース概要</h2>
          <p className="mb-4">
            AIアート探検コースでは、最新のAI技術を使って、絵や写真を作る方法を学びます。
            お子様の想像力を刺激しながら、デジタルアートの基礎も身につけられる入門コースです。
          </p>
          <p className="mb-4">
            AIツールを使うことで、プロのようなアート作品を簡単に作れるようになります。
            自分だけのオリジナル作品集を作りながら、創造力と表現力を育みます。
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">このコースで身につくスキル</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>AIアートツールの基本操作</li>
              <li>効果的なプロンプト（指示）の書き方</li>
              <li>デジタルアートの基礎知識</li>
              <li>作品の編集・加工技術</li>
              <li>ポートフォリオの作り方</li>
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
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第1クール：AIアートの基礎（1〜3ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>AIアートツールの基本操作</li>
                      <li>簡単なプロンプトの書き方</li>
                      <li>色彩と構図の基礎</li>
                      <li>簡単な作品制作</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>自分だけのAIアートカード（5〜10枚）</p>
                  </div>
                </div>
              </div>
              
              {/* 第2クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第2クール：表現力を高める（4〜6ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>高度なプロンプト技術</li>
                      <li>スタイルの応用と変化</li>
                      <li>画像編集の基礎</li>
                      <li>テーマに沿った作品制作</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>テーマ別ミニアートブック</p>
                  </div>
                </div>
              </div>
              
              {/* 第3クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第3クール：作品制作（7〜9ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>複数のAIツールの組み合わせ</li>
                      <li>作品の一貫性と物語性</li>
                      <li>デジタルポートフォリオの作成</li>
                      <li>作品発表の準備</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>オリジナルアート作品集（デジタル・印刷）</p>
                  </div>
                </div>
              </div>
              
              {/* 第4クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第4クール：応用と発展（10〜12ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>AIと手作業の組み合わせ</li>
                      <li>アニメーションの基礎</li>
                      <li>作品の展示方法</li>
                      <li>年間作品展の準備</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>年間集大成作品と展示会出展</p>
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
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold mr-4">
                Y.K
              </div>
              <div>
                <p className="font-bold">Yさん（小学4年生）</p>
                <p className="text-sm text-gray-600">受講期間：6ヶ月</p>
              </div>
            </div>
            <p className="mb-4">
              「最初はどうやって作ればいいか分からなかったけど、先生が教えてくれて、
              今では自分の好きなキャラクターや風景を作れるようになりました。
              友達にも見せると驚かれて嬉しいです！」
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold mr-4">
                M.T
              </div>
              <div>
                <p className="font-bold">Mさん（小学6年生）</p>
                <p className="text-sm text-gray-600">受講期間：9ヶ月</p>
              </div>
            </div>
            <p className="mb-4">
              「AIを使って自分の想像した世界を絵にできるのが楽しいです。
              学校の図工の時間でも、アイデアがたくさん浮かぶようになりました。
              将来はゲームのデザイナーになりたいです！」
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
                    <p className="text-2xl font-bold text-blue-600">12,800円/月（税込）</p>
                    <p className="text-sm text-gray-600">月2回（90分/回）</p>
                  </div>
                  <div>
                    <p className="font-bold">教材費</p>
                    <p>初回のみ 5,000円（税込）</p>
                    <p className="text-sm text-gray-600">タブレット貸出あり（月額1,000円）</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">開講スケジュール</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">水曜クラス</p>
                    <p>16:00〜17:30</p>
                    <p>17:45〜19:15</p>
                  </div>
                  <div>
                    <p className="font-bold">土曜クラス</p>
                    <p>10:00〜11:30</p>
                    <p>13:00〜14:30</p>
                  </div>
                  <p className="text-sm text-gray-600">※クラスは人数制限があります。詳細はお問い合わせください。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">まずは無料体験会に参加してみませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          実際にAIアートツールを使って、簡単な作品を作る体験ができます。
          お子様の興味や適性を見ながら、詳しくご説明いたします。
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
