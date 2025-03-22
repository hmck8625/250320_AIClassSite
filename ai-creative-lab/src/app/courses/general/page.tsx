import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FreeCurriculumPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ヘッダー */}
      <div className="mb-12">
        <Link href="/courses" className="text-blue-600 hover:underline mb-4 inline-block">
          ← コース一覧に戻る
        </Link>
        <h1 className="text-4xl font-bold mb-4">AI創造力育成 無料体験カリキュラム</h1>
        <div className="flex items-center mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded mr-3">小学1年生〜中学3年生</span>
          <span className="text-gray-700">全4回 / 各回90分</span>
        </div>
      </div>

      {/* コース概要 */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/sample/free_curriculum/ai_creativity_main.jpg"
            alt="AI創造力育成 無料体験カリキュラム"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">カリキュラム概要</h2>
          <p className="mb-4">
            「AIをきっかけに多様な創造分野への興味を育む」をコンセプトにした、親子参加型の無料体験カリキュラムです。
            最新のAI技術を活用して、子どもたちの創造力と好奇心を引き出します。
          </p>
          <p className="mb-4">
            全4回のカリキュラムでは、AIアート、AI音楽、AIゲームデザイン、AIエンジニアリングなど、
            多様な創造分野を体験できます。AIを「ゴール」ではなく「入口」として位置づけ、
            子どもたちの本来の創造性を引き出します。
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">このカリキュラムの特徴</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>親子で一緒に学ぶ参加型スタイル</li>
              <li>「Projects」「Passion」「Peers」「Play」の4P原則</li>
              <li>5つの創造分野（音楽、芸術、ゲーム開発、物語創作、エンジニアリング）</li>
              <li>最新AI技術の安全な活用方法</li>
              <li>家庭での継続学習サポート</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4回のカリキュラム図解 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">4回のカリキュラム構成</h2>
        
        <div className="relative w-full h-[400px] mb-8">
          <Image 
            src="/images/sample/free_curriculum/curriculum_diagram.jpg"
            alt="4回のカリキュラム構成図"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 第1回 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
            <div className="text-center mb-4">
              <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded">第1回</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">AIアートと創造表現の冒険</h3>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-3xl">
                🎨
              </div>
            </div>
            <p className="text-center text-gray-700">
              AIを使った視覚的な創造表現を体験し、デジタルとアナログの表現方法を組み合わせます。
            </p>
          </div>
          
          {/* 第2回 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <div className="text-center mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">第2回</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">AIと音楽の不思議な世界</h3>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-3xl">
                🎵
              </div>
            </div>
            <p className="text-center text-gray-700">
              AIを活用した音楽創作の基本を理解し、親子で一緒に音楽を作り上げる喜びを共有します。
            </p>
          </div>
          
          {/* 第3回 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
            <div className="text-center mb-4">
              <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded">第3回</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">AIゲームデザインとストーリーテリング</h3>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-3xl">
                🎮
              </div>
            </div>
            <p className="text-center text-gray-700">
              AIを活用したゲーム企画とストーリー創作を体験し、創造的なゲームコンセプトを作り上げます。
            </p>
          </div>
          
          {/* 第4回 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
            <div className="text-center mb-4">
              <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded">第4回</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">未来を創るAIエンジニアリング</h3>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 text-3xl">
                🔧
              </div>
            </div>
            <p className="text-center text-gray-700">
              AIを活用した問題解決とプロトタイピングを体験し、未来の製品やサービスを考案します。
            </p>
          </div>
        </div>
      </section>

      {/* 期待される効果 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">期待される効果</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 子どもへの効果 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">子どもへの効果</h3>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-4xl">
                👧👦
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>AIを創造的に活用するスキルの習得</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>5つの創造分野への興味喚起と適性の発見</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>創造的思考力と問題解決能力の向上</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>自己表現力とコミュニケーション能力の向上</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>未来のテクノロジーに対する前向きな姿勢の育成</span>
              </li>
            </ul>
          </div>
          
          {/* 保護者への効果 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">保護者への効果</h3>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-4xl">
                👨‍👩‍👧
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>子どもの創作プロセスの理解と共有</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>家庭での継続学習をサポートするスキルの習得</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>AI時代の教育に対する理解の深化</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>子どもとの新たなコミュニケーション方法の発見</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>子どもの潜在的な興味・才能の発見</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 参加者の声 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">参加者の声</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold mr-4">
                K.S
              </div>
              <div>
                <p className="font-bold">Kくん（小学3年生）と保護者</p>
                <p className="text-sm text-gray-600">港区在住</p>
              </div>
            </div>
            <p className="mb-4">
              「最初はAIって難しそうと思っていましたが、とても楽しく学べました。
              特にAIで音楽を作る回が面白かったです。家でもやってみたいと思います！」
            </p>
            <p className="text-sm text-gray-600">
              （保護者）「子どもがこんなに集中して取り組む姿を見られて驚きました。
              家庭でも継続できるアドバイスをいただけたのが良かったです。」
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold mr-4">
                A.T
              </div>
              <div>
                <p className="font-bold">Aさん（小学5年生）と保護者</p>
                <p className="text-sm text-gray-600">港区在住</p>
              </div>
            </div>
            <p className="mb-4">
              「AIを使ってゲームのアイデアを考えるのが楽しかったです。
              自分の考えたキャラクターがすぐに絵になるのがすごいと思いました。
              もっといろんなことを作ってみたいです！」
            </p>
            <p className="text-sm text-gray-600">
              （保護者）「子どもの創造性を引き出す方法を学べました。
              AIを使いこなす力は将来きっと役立つと思います。」
            </p>
          </div>
        </div>
      </section>

      {/* 開催情報 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">開催情報</h2>
        <div className="bg-white border rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">参加詳細</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <p className="font-bold">対象</p>
                    <p>小学1年生〜中学3年生（特に小学3〜6年生が最適）</p>
                    <p className="text-sm text-gray-600">※保護者同伴必須</p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="font-bold">参加費</p>
                    <p className="text-2xl font-bold text-green-600">無料</p>
                    <p className="text-sm text-gray-600">※テスト期間中の特別提供</p>
                  </div>
                  <div>
                    <p className="font-bold">持ち物</p>
                    <p>タブレットまたはノートPC（可能な方）</p>
                    <p className="text-sm text-gray-600">※貸出機材もあります</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">開催スケジュール</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <p className="font-bold">日程</p>
                    <p>2025年5月〜6月の土曜日</p>
                    <p>全4回（各回90分）</p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="font-bold">時間</p>
                    <p>午前の部：10:00〜11:30</p>
                    <p>午後の部：14:00〜15:30</p>
                  </div>
                  <div>
                    <p className="font-bold">場所</p>
                    <p>港区内レンタルスペース</p>
                    <p className="text-sm text-gray-600">※詳細は申込者にご案内します</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 参加特典 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">参加特典</h2>
        <div className="bg-yellow-50 p-8 rounded-lg">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-3xl">
                  🎁
                </div>
              </div>
              <h3 className="font-bold mb-2">AI創造活動の家庭学習リソース</h3>
              <p className="text-sm">
                家庭でも続けられるAI創造活動のリソースを無料プレゼント
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-3xl">
                  🏆
                </div>
              </div>
              <h3 className="font-bold mb-2">修了証授与</h3>
              <p className="text-sm">
                4回全ての参加者には特別な修了証を授与
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-3xl">
                  💰
                </div>
              </div>
              <h3 className="font-bold mb-2">本格コース優先案内と特別割引</h3>
              <p className="text-sm">
                本格的なコース開設時の優先案内と特別割引を提供
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LINE登録誘導 */}
      <section className="mb-16">
        <div className="bg-white border-2 border-green-500 rounded-lg overflow-hidden shadow-md">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-600">まずはLINEに登録して詳細をチェック！</h2>
                <p className="mb-6">
                  無料カリキュラムの詳細情報や最新の開催日程は、公式LINEアカウントでご案内しています。
                  友だち登録して、最新情報をゲットしましょう！
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>無料カリキュラムの詳細スケジュール</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>参加申し込み方法の案内</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>AI教育に関する最新情報</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>質問や相談もLINEで気軽にできます</span>
                  </li>
                </ul>
                <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full">
                  LINE公式アカウントを友だち追加
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-64 h-64">
                  <Image 
                    src="/images/sample/free_curriculum/line_qr.jpg"
                    alt="LINE QRコード"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">AI時代を生きる子どもたちの創造力を育みませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          定員に限りがありますので、お早めにLINEでお申し込みください。
          港区在住・在学の方を優先的にご案内しています。
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Link href="/line">LINE登録はこちら</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
