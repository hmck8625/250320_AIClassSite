import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AppDevCoursePage() {
  return (
    <div className="container mx-auto py-12">
      {/* ヘッダー */}
      <div className="mb-12">
        <Link href="/courses" className="text-purple-600 hover:underline mb-4 inline-block">
          ← コース一覧に戻る
        </Link>
        <h1 className="text-4xl font-bold mb-4">AIアプリ開発コース</h1>
        <div className="flex items-center mb-6">
          <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded mr-3">中高生向け</span>
          <span className="text-gray-700">月4回 / 120分</span>
        </div>
      </div>

      {/* コース概要 */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/sample/top/image_engneer_icon.jpg"
            alt="AIアプリ開発コース"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">コース概要</h2>
          <p className="mb-4">
            AIアプリ開発コースでは、AIを活用したWebアプリケーションの開発に挑戦します。
            プログラミングの基礎からAI APIの活用方法まで、実践的なスキルを身につけられる発展コースです。
          </p>
          <p className="mb-4">
            自分のアイデアをプログラミングで形にする力を養いながら、
            将来のIT人材として必要な技術力と問題解決能力を育みます。
          </p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">このコースで身につくスキル</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Webプログラミング（HTML/CSS/JavaScript）</li>
              <li>AI APIの活用方法</li>
              <li>データベース基礎</li>
              <li>アプリケーション設計</li>
              <li>プロジェクト管理</li>
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
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第1クール：Webプログラミング基礎（1〜3ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>HTML/CSSの基礎</li>
                      <li>JavaScriptプログラミング入門</li>
                      <li>レスポンシブデザイン</li>
                      <li>簡単なWebサイト制作</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>オリジナルWebサイト</p>
                  </div>
                </div>
              </div>
              
              {/* 第2クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第2クール：AI API活用入門（4〜6ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>APIの基本概念</li>
                      <li>AI APIの種類と特徴</li>
                      <li>APIリクエストとレスポンス</li>
                      <li>簡単なAIアプリ制作</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>AI機能を組み込んだミニWebアプリ</p>
                  </div>
                </div>
              </div>
              
              {/* 第3クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第3クール：アプリケーション開発（7〜9ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>データベース基礎</li>
                      <li>ユーザー認証</li>
                      <li>複数のAI APIの連携</li>
                      <li>アプリケーション設計</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>実用的なAIウェブアプリケーション</p>
                  </div>
                </div>
              </div>
              
              {/* 第4クール */}
              <div>
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">第4クール：総合プロジェクト（10〜12ヶ月目）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">学習内容</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>プロジェクト管理</li>
                      <li>チーム開発の基礎</li>
                      <li>デプロイメント</li>
                      <li>プレゼンテーション技術</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">成果物</h4>
                    <p>オリジナルAIアプリケーション（ポートフォリオ作品）</p>
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
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 font-bold mr-4">
                T.M
              </div>
              <div>
                <p className="font-bold">Tくん（中学3年生）</p>
                <p className="text-sm text-gray-600">受講期間：1年</p>
              </div>
            </div>
            <p className="mb-4">
              「プログラミングは独学で少しやっていましたが、AIと組み合わせる方法は全く分かりませんでした。
              このコースでは実際に動くアプリを作りながら学べるので、知識が定着しやすいです。
              作ったアプリを友達に使ってもらえるのが嬉しいです。」
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 font-bold mr-4">
                A.K
              </div>
              <div>
                <p className="font-bold">Aさん（高校1年生）</p>
                <p className="text-sm text-gray-600">受講期間：9ヶ月</p>
              </div>
            </div>
            <p className="mb-4">
              「将来はIT関係の仕事に就きたいと思っていたので、このコースを選びました。
              実際のプロジェクトを通して学ぶので、学校では教わらない実践的なスキルが身につきます。
              特にAI APIを使った開発は面白く、自分のアイデアを形にする楽しさを知りました。」
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
                    <p className="text-2xl font-bold text-purple-600">24,800円/月（税込）</p>
                    <p className="text-sm text-gray-600">月4回（120分/回）</p>
                  </div>
                  <div>
                    <p className="font-bold">教材費</p>
                    <p>初回のみ 10,000円（税込）</p>
                    <p className="text-sm text-gray-600">ノートPC貸出あり（月額3,000円）</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">開講スケジュール</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">月曜クラス</p>
                    <p>18:00〜20:00</p>
                  </div>
                  <div>
                    <p className="font-bold">水曜クラス</p>
                    <p>18:00〜20:00</p>
                  </div>
                  <div>
                    <p className="font-bold">土曜クラス</p>
                    <p>15:00〜17:00</p>
                  </div>
                  <div>
                    <p className="font-bold">日曜クラス</p>
                    <p>13:00〜15:00</p>
                  </div>
                  <p className="text-sm text-gray-600">※クラスは人数制限があります。詳細はお問い合わせください。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">まずは無料体験会に参加してみませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          実際にAI APIを使った簡単なプログラミングを体験できます。
          お子様の興味や適性を見ながら、詳しくご説明いたします。
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
