import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: '港区のプログラミング教室選び完全ガイド - 子どもの才能を伸ばす教室比較と選び方 | AIアソビあとりえ',
  description: '港区周辺の子ども向けプログラミング教室の比較や選び方、年齢別の学習法、家庭でできるプログラミング教育まで。子どものIT才能を見つけ、伸ばすための総合ガイド。',
  keywords: '港区 子供 プログラミング教室, 子ども コーディング 習い事, 小学生 プログラミング 港区, プログラミング教室 比較, 子供 IT教育 選び方, AI プログラミング 子ども',
  openGraph: {
    title: '港区のプログラミング教室選び完全ガイド - 子どもの才能を伸ばす教室比較と選び方',
    description: '港区周辺の子ども向けプログラミング教室の比較や選び方、年齢別の学習法を紹介。子どものIT才能を見つけ、伸ばすための総合ガイドです。',
    images: [{ url: '/images/blog/EYE-programing.jpg' }],
  }
};

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* 記事ヘッダー */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1.5 rounded-md mr-3 font-medium">IT教育</span>
          <span className="text-gray-600 text-sm">2025年5月20日</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          港区のプログラミング教室選び完全ガイド - 子どもの才能を伸ばす教室比較と選び方
        </h1>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-4 font-medium">著者: 佐藤 健太（IT教育専門家）</span>
          <Link href="/blog/category/it-education" className="text-primary hover:underline">
            カテゴリー: IT教育
          </Link>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/images/blog/EYE-programing.jpg"
          alt="港区のプログラミング教室選び完全ガイド - 子どもの才能を伸ばす教室比較と選び方"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <article className="prose prose-lg md:prose-xl max-w-none mb-16">
        <p className="text-xl leading-relaxed mb-8">
          プログラミング教育の重要性が高まる中、「どのような教室を選べばよいのか」「わが子に合った学習法は何か」など、保護者の方々の疑問は尽きないでしょう。特に港区は多様なプログラミング教室が集まる地域であり、選択肢の多さに迷われる方も多いはずです。本記事では、港区周辺のプログラミング教室情報や選び方のポイント、そして家庭でできるIT教育まで、子どものプログラミング学習に関する総合的な情報をご紹介します。
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">子どものプログラミング学習がもたらす多面的な効果</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">論理的思考力と問題解決能力の向上</h3>
        <p>
          プログラミングは、複雑な問題を小さな部分に分解し、順序立てて解決していく過程です。この学習過程を通じて、子どもたちは論理的に考える力や問題解決能力を自然と身につけていきます。
        </p>
        
        <p>
          例えば、ゲームを作るプログラミングでは、「キャラクターをどう動かすか」「スコアをどう計算するか」など、様々な課題を一つずつ解決していく必要があります。この経験が、日常生活や学校の勉強においても、問題を体系的に捉え、効率的に解決する力につながります。
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h4 className="text-xl font-bold text-blue-700 mb-3">プログラミング学習がもたらす認知能力の向上</h4>
          <ul className="list-disc pl-6 space-y-2 text-blue-800">
            <li><span className="font-bold">論理的思考力</span>：順序立てて考え、因果関係を理解する能力</li>
            <li><span className="font-bold">抽象化能力</span>：複雑な問題を単純化し、本質を見抜く力</li>
            <li><span className="font-bold">分析力</span>：問題を細分化し、構造を理解する能力</li>
            <li><span className="font-bold">アルゴリズム的思考</span>：効率的な解決手順を考える力</li>
            <li><span className="font-bold">デバッグ能力</span>：エラーを特定し、修正する問題解決力</li>
            <li><span className="font-bold">集中力</span>：一つの課題に集中して取り組む力</li>
          </ul>
        </div>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">創造性とイノベーション力の育成</h3>
        <p>
          プログラミングは単なる技術習得ではなく、創造的な活動です。自分のアイデアを形にする過程で、子どもたちは創造性や革新的な思考力を育みます。特に、ビジュアルプログラミングやゲーム開発などの分野では、技術的な要素と芸術的な要素が融合し、多面的な創造性が発揮されます。
        </p>
        
        <p>
          また、プログラミングでは「同じ問題に対して複数の解決方法がある」ことを学びます。この経験は、固定観念にとらわれない柔軟な思考力や、より良い解決策を模索する革新的な姿勢を育てます。
        </p>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">デジタル時代を生きる力</h3>
        <p>
          現代社会はデジタル技術に支えられており、その傾向は今後さらに強まるでしょう。プログラミングを学ぶことで、子どもたちはテクノロジーを「消費するだけ」ではなく、「創造する側」になる力を身につけます。
        </p>
        
        <p>
          また、AIやロボティクスなどの先端技術が発展する中、これらの技術を理解し、活用できる能力は、将来のキャリアにおいても大きなアドバンテージとなります。早い段階からプログラミングに親しむことで、テクノロジーに対する健全な理解と適応力を育むことができるのです。
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-lg my-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">プログラミング学習の多面的効果</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-bold">認知的効果</span>：論理的思考力、問題解決能力、抽象化能力の向上
            </li>
            <li>
              <span className="font-bold">創造的効果</span>：創造性、イノベーション力、表現力の育成
            </li>
            <li>
              <span className="font-bold">社会的効果</span>：チームワーク、コミュニケーション能力、プレゼンテーション力の向上
            </li>
            <li>
              <span className="font-bold">情緒的効果</span>：忍耐力、挫折からの回復力、達成感の経験
            </li>
            <li>
              <span className="font-bold">将来的効果</span>：デジタルリテラシー、キャリア選択肢の拡大、技術革新への適応力
            </li>
          </ul>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">子どものプログラミング教育の始め時と選び方</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">年齢別のプログラミング教育アプローチ</h3>
        <p>
          子どものプログラミング教育は、年齢や発達段階に応じたアプローチが重要です。各年齢に適した方法でプログラミングに親しむことで、無理なく自然に論理的思考力や創造性を育むことができます。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-pink-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-pink-800 mb-3">5〜7歳：遊びを通じた導入期</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">適した活動</span>：ロボット玩具、ビジュアルブロックプログラミング、アンプラグドプログラミング</li>
              <li><span className="font-bold">ポイント</span>：遊びの要素を重視、具体的な体験を通じた学習、短時間の活動</li>
              <li><span className="font-bold">おすすめ</span>：ScratchJr、LEGO WeDo、Cubetto、コード・ア・ピラー</li>
              <li><span className="font-bold">注意点</span>：画面時間の制限、成果よりもプロセスを重視、楽しさを最優先</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-purple-800 mb-3">8〜10歳：基礎概念習得期</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">適した活動</span>：ビジュアルプログラミング、簡単なゲーム制作、基本的なロボティクス</li>
              <li><span className="font-bold">ポイント</span>：プログラミングの基本概念の理解、創造的なプロジェクト、協働学習</li>
              <li><span className="font-bold">おすすめ</span>：Scratch、Minecraft Education Edition、LEGO SPIKE Prime</li>
              <li><span className="font-bold">注意点</span>：挫折感を味わわせない、段階的な難易度設定、個人のペースを尊重</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-blue-800 mb-3">11〜13歳：応用発展期</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">適した活動</span>：テキストベースのプログラミング入門、アプリ開発、ウェブ制作</li>
              <li><span className="font-bold">ポイント</span>：実用的なプロジェクト、個人の興味に合わせた学習、基本的な概念の深化</li>
              <li><span className="font-bold">おすすめ</span>：Python、JavaScript、App Inventor、HTML/CSS</li>
              <li><span className="font-bold">注意点</span>：文法の複雑さによる挫折防止、成功体験の提供、長期的な視点での学習</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-green-800 mb-3">14歳以上：専門性探求期</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">適した活動</span>：本格的なプログラミング言語、特定分野の専門学習、チームプロジェクト</li>
              <li><span className="font-bold">ポイント</span>：将来のキャリアを見据えた学習、実社会の問題解決、自主的な学習習慣</li>
              <li><span className="font-bold">おすすめ</span>：Java、C++、Unity、AI/機械学習入門、データサイエンス</li>
              <li><span className="font-bold">注意点</span>：専門性と基礎のバランス、挑戦と達成感のサイクル、自己効力感の育成</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">プログラミング教室の選び方と注意点</h3>
        <p>
          プログラミング教室選びは、子どものIT教育の質と継続性に大きく影響します。特に港区は多様なプログラミング教室があり、選択肢が豊富です。以下のポイントを参考に、お子さんに合った教室を選びましょう。
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-xl font-bold text-yellow-700 mb-3">プログラミング教室選びの重要ポイント</h4>
          <ul className="list-disc pl-6 space-y-2 text-yellow-800">
            <li><span className="font-bold">教育方針</span>：技術習得重視か創造性重視か、競技志向か趣味志向か</li>
            <li><span className="font-bold">カリキュラム</span>：体系的な学習内容、年齢に適した進度、多様なプロジェクト経験</li>
            <li><span className="font-bold">使用言語・ツール</span>：年齢に適した言語選択、最新技術への対応、実用的なスキル習得</li>
            <li><span className="font-bold">講師の質</span>：技術的知識だけでなく教育スキル、子どもとのコミュニケーション能力</li>
            <li><span className="font-bold">少人数制</span>：個別指導の充実度、質問対応の丁寧さ、子ども一人ひとりへの配慮</li>
            <li><span className="font-bold">発表機会</span>：作品発表会、コンテスト参加、成果を共有する場の提供</li>
            <li><span className="font-bold">継続サポート</span>：家庭学習のサポート、質問対応、保護者への進捗報告</li>
            <li><span className="font-bold">設備・環境</span>：最新機器の充実度、学習環境の快適さ、セキュリティ対策</li>
            <li><span className="font-bold">費用</span>：入会金、月謝、教材費、追加費用の有無</li>
            <li><span className="font-bold">立地・アクセス</span>：通いやすさ、送迎サービスの有無、オンライン対応</li>
          </ul>
        </div>
        
        <p>
          教室選びでは、必ず体験レッスンに参加し、お子さんの反応を見ることが大切です。また、複数の教室を比較検討することで、より適切な選択ができるでしょう。特に講師とお子さんの相性や、教室の雰囲気は、長期的な学習のモチベーションに大きく影響するため、慎重に見極めることをおすすめします。
        </p>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">教室タイプ別の特徴と選び方</h3>
        <p>
          プログラミング教室にはいくつかのタイプがあり、それぞれに特徴があります。お子さんの性格や目標に合ったタイプを選ぶことが大切です。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-blue-800 mb-3">創造性重視型</h4>
            <p className="text-sm mb-3">
              <span className="font-bold">特徴</span>：子どもの自由な発想を重視し、プログラミングを創造的な表現手段として教える
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><span className="font-bold">強み</span>：創造性の育成、自己表現力の向上、プログラミングへの興味喚起</li>
              <li><span className="font-bold">弱み</span>：体系的な技術習得が遅れる可能性、基礎固めが不十分になることも</li>
              <li><span className="font-bold">向いている子</span>：自由な発想が好きな子、芸術的な面も持つ子、飽きっぽい子</li>
              <li><span className="font-bold">代表例</span>：クリエイティブ・コーディング・ラボ（麻布）、テックアートスタジオ（六本木）</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-green-800 mb-3">技術習得型</h4>
            <p className="text-sm mb-3">
              <span className="font-bold">特徴</span>：プログラミングの基礎から応用まで、体系的に技術を習得することを重視
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><span className="font-bold">強み</span>：確かな技術力の習得、体系的な学習、将来の専門教育への準備</li>
              <li><span className="font-bold">弱み</span>：創造性が制限される可能性、楽しさよりも訓練的な側面が強い</li>
              <li><span className="font-bold">向いている子</span>：集中力のある子、技術向上に興味がある子、将来エンジニアを目指す子</li>
              <li><span className="font-bold">代表例</span>：テックアカデミーJr.（赤坂）、コードキャンプキッズ（六本木）</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-yellow-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-yellow-800 mb-3">ロボティクス融合型</h4>
            <p className="text-sm mb-3">
              <span className="font-bold">特徴</span>：プログラミングとロボット工学を組み合わせ、物理的な動きを通じて学ぶ
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><span className="font-bold">強み</span>：具体的な体験を通じた学習、エンジニアリング思考の育成、達成感が得やすい</li>
              <li><span className="font-bold">弱み</span>：ロボット以外の応用が少ない可能性、コストが高めになりがち</li>
              <li><span className="font-bold">向いている子</span>：手を動かすのが好きな子、物づくりに興味がある子、理科好きな子</li>
              <li><span className="font-bold">代表例</span>：ロボットプログラミングスクール（白金）、テックロボラボ（芝公園）</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-purple-800 mb-3">ゲーム開発特化型</h4>
            <p className="text-sm mb-3">
              <span className="font-bold">特徴</span>：ゲーム制作を通じてプログラミングを学ぶ、子どもの興味を引きやすい
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><span className="font-bold">強み</span>：高いモチベーション維持、創造性とロジックの両立、完成作品の達成感</li>
              <li><span className="font-bold">弱み</span>：ゲーム以外の応用が少ない可能性、ゲームプレイと制作の区別が必要</li>
              <li><span className="font-bold">向いている子</span>：ゲーム好きな子、物語創作が好きな子、視覚的な表現が好きな子</li>
              <li><span className="font-bold">代表例</span>：ゲームクリエイターズアカデミー（麻布十番）、キッズゲームラボ（赤坂）</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-red-800 mb-3">AI・先端技術特化型</h4>
            <p className="text-sm mb-3">
              <span className="font-bold">特徴</span>：AI、IoT、VRなどの最新技術を取り入れたプログラミング教育
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><span className="font-bold">強み</span>：最新技術への理解、未来志向の学び、実社会との接点</li>
              <li><span className="font-bold">弱み</span>：基礎が不十分になる可能性、技術の変化に伴うカリキュラム変更</li>
              <li><span className="font-bold">向いている子</span>：新しい技術に興味がある子、好奇心旺盛な子、応用力のある子</li>
              <li><span className="font-bold">代表例</span>：AIアソビあとりえ（麻布十番）、フューチャーテックラボ（六本木）</li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-indigo-800 mb-3">少人数個別指導型</h4>
            <p className="text-sm mb-3">
              <span className="font-bold">特徴</span>：少人数制で個々の子どもに合わせた指導を行う
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><span className="font-bold">強み</span>：一人ひとりのペースや興味に合わせた指導、きめ細かなフィードバック</li>
              <li><span className="font-bold">弱み</span>：他の子どもとの交流や刺激が少ない、比較的高額</li>
              <li><span className="font-bold">向いている子</span>：マイペースな子、集中力が必要な子、特定の分野を深く学びたい子</li>
              <li><span className="font-bold">代表例</span>：パーソナルコーディング（広尾）、マイプログラミングコーチ（赤坂）</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">港区周辺のおすすめプログラミング教室比較</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">港区周辺のおすすめプログラミング教室詳細比較</h3>
        <p>
          港区周辺で特に評判の良いプログラミング教室について、より詳細な比較を行います。各教室の特徴、対象年齢、費用、立地などを比較し、お子さんに最適な教室選びの参考にしてください。
        </p>
        
        <div className="overflow-x-auto my-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b text-left">教室名</th>
                <th className="py-3 px-4 border-b text-left">特徴・強み</th>
                <th className="py-3 px-4 border-b text-left">対象年齢</th>
                <th className="py-3 px-4 border-b text-left">月謝（税込）</th>
                <th className="py-3 px-4 border-b text-left">立地</th>
                <th className="py-3 px-4 border-b text-left">主な言語・ツール</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">テックアカデミーJr.</td>
                <td className="py-3 px-4">体系的なカリキュラム、少人数制、技術習得重視</td>
                <td className="py-3 px-4">小学1年〜中学3年</td>
                <td className="py-3 px-4">15,000円〜22,000円</td>
                <td className="py-3 px-4">赤坂</td>
                <td className="py-3 px-4">Scratch、Python、HTML/CSS、JavaScript</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">クリエイティブ・コーディング・ラボ</td>
                <td className="py-3 px-4">創造性重視、アート×プログラミング、作品展示会</td>
                <td className="py-3 px-4">小学1年〜中学3年</td>
                <td className="py-3 px-4">12,000円〜18,000円</td>
                <td className="py-3 px-4">麻布</td>
                <td className="py-3 px-4">Scratch、p5.js、Processing、メディアアート</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">ロボットプログラミングスクール</td>
                <td className="py-3 px-4">ロボット制作と連動、実践的な学び、コンテスト実績多数</td>
                <td className="py-3 px-4">小学1年〜高校3年</td>
                <td className="py-3 px-4">16,000円〜24,000円</td>
                <td className="py-3 px-4">白金</td>
                <td className="py-3 px-4">LEGO MINDSTORMS、SPIKE Prime、Arduino</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">AIアソビあとりえ</td>
                <td className="py-3 px-4">AI×プログラミング、創造性重視、多分野への発展</td>
                <td className="py-3 px-4">小学1年〜中学3年</td>
                <td className="py-3 px-4">15,000円〜20,000円</td>
                <td className="py-3 px-4">麻布十番</td>
                <td className="py-3 px-4">Scratch、Python、AI開発ツール、アプリ開発</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">ゲームクリエイターズアカデミー</td>
                <td className="py-3 px-4">ゲーム開発特化、プロ講師、作品リリース実績</td>
                <td className="py-3 px-4">小学3年〜高校3年</td>
                <td className="py-3 px-4">18,000円〜25,000円</td>
                <td className="py-3 px-4">麻布十番</td>
                <td className="py-3 px-4">Unity、Unreal Engine、Scratch、JavaScript</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">コードキャンプキッズ</td>
                <td className="py-3 px-4">実践的スキル習得、プロジェクトベース学習、就職支援</td>
                <td className="py-3 px-4">小学3年〜高校3年</td>
                <td className="py-3 px-4">16,000円〜22,000円</td>
                <td className="py-3 px-4">六本木</td>
                <td className="py-3 px-4">HTML/CSS、JavaScript、Python、Ruby</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">パーソナルコーディング</td>
                <td className="py-3 px-4">完全個別指導、カスタマイズカリキュラム、柔軟な時間設定</td>
                <td className="py-3 px-4">小学1年〜高校3年</td>
                <td className="py-3 px-4">25,000円〜35,000円</td>
                <td className="py-3 px-4">広尾</td>
                <td className="py-3 px-4">生徒に合わせた言語選択、多言語対応</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-sm text-gray-600 italic">
          ※料金や内容は2025年5月時点の情報です。最新情報は各教室の公式サイトでご確認ください。
        </p>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">教室選びの成功事例</h3>
        <p>
          実際に港区でプログラミング教室選びに成功した家庭の事例をご紹介します。これらの事例から、効果的な教室選びのポイントを学びましょう。
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h4 className="text-xl font-bold text-blue-700 mb-3">事例1：子どもの興味に合わせた選択</h4>
          <p className="text-blue-800 mb-3">
            ゲーム好きな小学4年生の息子さんを持つAさん家族は、息子さんの興味を活かせる「ゲームクリエイターズアカデミー」を選びました。複数の教室の体験レッスンに参加した結果、ゲーム制作を通じてプログラミングを学べる環境が息子さんのモチベーションを高めると判断。入会後は毎回楽しそうに通い、自分でデザインしたキャラクターを動かすゲームを作るなど、創造性とプログラミングスキルの両方を伸ばしています。
          </p>
          <p className="text-blue-800">
            <span className="font-bold">成功のポイント</span>：子どもの興味（ゲーム）を学習動機に変えたこと。複数の体験レッスンを通じて比較検討したこと。教室の雰囲気や指導方針が子どもに合っているかを重視したこと。
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h4 className="text-xl font-bold text-green-700 mb-3">事例2：将来を見据えた選択</h4>
          <p className="text-green-800 mb-3">
            理系志向の強い小学6年生の娘さんを持つBさん家族は、将来のキャリアも視野に入れて「テックアカデミーJr.」を選びました。体系的なカリキュラムと実践的なスキル習得を重視する教育方針が、娘さんの学習スタイルに合っていると感じたそうです。入会から1年で、基本的なウェブサイト制作ができるようになり、学校の課題でもプログラミングスキルを活かせるようになりました。
          </p>
          <p className="text-green-800">
            <span className="font-bold">成功のポイント</span>：長期的な視点でスキル習得を考えたこと。子どもの学習スタイルに合った教育方針を選んだこと。実践的なスキルが身につくカリキュラムを重視したこと。
          </p>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-xl font-bold text-yellow-700 mb-3">事例3：新しい可能性への挑戦</h4>
          <p className="text-yellow-800 mb-3">
            プログラミング未経験だった小学3年生の息子さんを持つCさん家族は、AIと創造性を重視する「AIアソビあとりえ」を選びました。息子さんは理系科目が得意というわけではありませんでしたが、AIを活用した創作活動から始めることで、プログラミングへの敷居が低く感じられたそうです。現在は、AIを使った物語創作からプログラミングへと興味が広がり、自分のアイデアをコードで表現することに夢中になっています。
          </p>
          <p className="text-yellow-800">
            <span className="font-bold">成功のポイント</span>：子どもの苦手意識に配慮した入口を選んだこと。創造性とテクノロジーのバランスを重視したこと。段階的に学べる環境を選んだこと。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">家庭でできるプログラミング教育</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">日常生活に取り入れるプログラミング的思考</h3>
        <p>
          プログラミング教室に通うことも大切ですが、家庭での日常的な活動を通じてプログラミング的思考を育むことも効果的です。特別な知識や道具がなくても、日常生活の中で簡単に取り入れられるアクティビティをご紹介します。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-blue-800 mb-3">5〜7歳向け家庭活動</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">順序カード遊び</span>：日常の活動（歯磨き、着替えなど）を順序立てたカードで表現</li>
              <li><span className="font-bold">迷路作り</span>：紙やブロックで迷路を作り、解き方を考える</li>
              <li><span className="font-bold">パターン認識ゲーム</span>：色や形のパターンを作り、次に来るものを予測</li>
              <li><span className="font-bold">ロボット遊び</span>：親が「ロボット」になり、子どもの指示通りに動く</li>
              <li><span className="font-bold">お片付けアルゴリズム</span>：おもちゃの片付け方を手順化して考える</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-green-800 mb-3">8〜10歳向け家庭活動</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">レシピプログラミング</span>：料理のレシピを「プログラム」として考え、実行する</li>
              <li><span className="font-bold">条件分岐ゲーム</span>：「もし〜なら」を使ったゲームや物語作り</li>
              <li><span className="font-bold">ボードゲーム</span>：論理的思考を育むボードゲーム（チェス、コードマスターなど）</li>
              <li><span className="font-bold">日常の自動化計画</span>：家の中で「自動化したいこと」を考え、手順を設計</li>
              <li><span className="font-bold">デジタルデトックスデー</span>：テクノロジーなしで問題解決する日を設ける</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-yellow-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-yellow-800 mb-3">11歳以上向け家庭活動</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">家族プロジェクト</span>：家族で取り組む小さなプログラミングプロジェクト</li>
              <li><span className="font-bold">問題解決チャレンジ</span>：日常の問題をテクノロジーで解決する方法を考える</li>
              <li><span className="font-bold">デジタル創作</span>：デジタルストーリーテリング、家族ブログの作成</li>
              <li><span className="font-bold">オープンソースへの貢献</span>：簡単なオープンソースプロジェクトへの参加</li>
              <li><span className="font-bold">テック企業研究</span>：興味のあるテック企業について調べ、将来を考える</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-purple-800 mb-3">継続のためのアイデア</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">学習カレンダー</span>：プログラミング学習の予定と達成を記録するカレンダー</li>
              <li><span className="font-bold">家族テックタイム</span>：週末など定期的な家族でのプログラミング時間</li>
              <li><span className="font-bold">プロジェクトショーケース</span>：子どもの作品を家族や友人に発表する機会</li>
              <li><span className="font-bold">学習ポートフォリオ</span>：子どもの作品や学びを記録するデジタルポートフォリオ</li>
              <li><span className="font-bold">テックペンパル</span>：プログラミングを学ぶ他の子どもとの交流</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">おすすめの家庭学習用プログラミングツール</h3>
        <p>
          家庭でのプログラミング学習をサポートするための、年齢別におすすめのツールやアプリをご紹介します。これらを活用することで、教室での学びを家庭でも継続し、深めることができます。
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-lg my-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">年齢別おすすめプログラミングツール</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-indigo-700">5〜7歳向け</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><span className="font-bold">ScratchJr</span>：幼児向けビジュアルプログラミングアプリ</li>
                <li><span className="font-bold">Cubetto</span>：画面なしで学べる木製プログラミングロボット</li>
                <li><span className="font-bold">Code-a-pillar</span>：つなげて動きをプログラムするおもちゃ</li>
                <li><span className="font-bold">Osmo Coding</span>：タブレットと実物を組み合わせた学習キット</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-indigo-700">8〜10歳向け</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><span className="font-bold">Scratch</span>：MITが開発した子ども向けビジュアルプログラミング環境</li>
                <li><span className="font-bold">Minecraft: Education Edition</span>：ゲームを通じて学ぶプログラミング</li>
                <li><span className="font-bold">LEGO SPIKE Prime</span>：レゴブロックとプログラミングの融合</li>
                <li><span className="font-bold">Swift Playgrounds</span>：Appleが提供するプログラミング学習アプリ</li>
                <li><span className="font-bold">CodeCombat</span>：ゲーム形式でコーディングを学べるプラットフォーム</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-indigo-700">11歳以上向け</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><span className="font-bold">Codecademy</span>：インタラクティブなプログラミング学習プラットフォーム</li>
                <li><span className="font-bold">Replit</span>：ブラウザベースのコーディング環境</li>
                <li><span className="font-bold">Tynker</span>：ゲーム開発からPythonまで学べるプラットフォーム</li>
                <li><span className="font-bold">Unity Learn</span>：ゲーム開発を学べる公式チュートリアル</li>
                <li><span className="font-bold">GitHub Learning Lab</span>：実践的なプロジェクトベースの学習</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p>
          これらのツールは、あくまで補助的なリソースとして活用するのが効果的です。スクリーンタイムを適切に管理し、実際のプロジェクト制作や問題解決活動とバランスよく組み合わせることをおすすめします。
        </p>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">AIを活用した家庭でのプログラミング学習</h3>
        <p>
          最近では、AIを活用したプログラミング学習ツールも家庭で手軽に利用できるようになりました。これらのツールを使うことで、専門的な知識がなくても、子どもと一緒に新しい形のプログラミング学習を楽しむことができます。
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h4 className="text-xl font-bold text-blue-700 mb-3">家庭でできるAI活用プログラミング学習</h4>
          <ul className="list-disc pl-6 space-y-2 text-blue-800">
            <li><span className="font-bold">AIコーディングアシスタント</span>：子どもが考えたアイデアをAIがコード化する支援ツールを活用</li>
            <li><span className="font-bold">AI×ビジュアルプログラミング</span>：AIがサポートするビジュアルプログラミング環境で、より直感的に学習</li>
            <li><span className="font-bold">パーソナライズド学習</span>：AIが子どもの理解度や興味に合わせて学習内容を調整するプラットフォーム</li>
            <li><span className="font-bold">プロジェクトアイデア生成</span>：AIに「面白いプログラミングプロジェクト」のアイデアを提案してもらう</li>
            <li><span className="font-bold">コードレビュー支援</span>：子どもが書いたコードをAIがレビューし、改善点を提案</li>
          </ul>
        </div>
        
        <p>
          AIツールは便利ですが、あくまでも学習を支援するための「入口」として活用するのがおすすめです。AIが生成したコードを理解し、自分でカスタマイズしたり、改良したりする過程で、より深い学びが得られます。
        </p>
        
        <p>
          AIアソビあとりえでは、AIを「入口」として子どものプログラミング的思考を引き出し、徐々に本格的なコーディングへと導くアプローチを採用しています。家庭でもこのような段階的なアプローチを取り入れることで、子どものIT能力を効果的に育成できるでしょう。
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">子どものIT才能の見極め方と伸ばし方</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">IT才能のサイン</h3>
        <p>
          子どものIT才能を早期に見極めることで、適切な支援や教育を提供することができます。ただし、才能の現れ方は子どもによって様々です。以下のようなサインに注目してみましょう。
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="text-xl font-bold text-yellow-700 mb-3">子どものIT才能を示すサイン</h4>
          <ul className="list-disc pl-6 space-y-2 text-yellow-800">
            <li><span className="font-bold">論理的思考の強さ</span>：物事を順序立てて考え、因果関係を理解する能力</li>
            <li><span className="font-bold">問題解決への意欲</span>：難しい問題に粘り強く取り組み、解決策を模索する姿勢</li>
            <li><span className="font-bold">パターン認識能力</span>：規則性やパターンを見つけ出す力</li>
            <li><span className="font-bold">テクノロジーへの好奇心</span>：デジタル機器の仕組みや動作原理への関心</li>
            <li><span className="font-bold">創造的な応用力</span>：学んだことを新しい状況に応用する能力</li>
            <li><span className="font-bold">抽象的概念の理解</span>：目に見えない概念や原理を理解する力</li>
            <li><span className="font-bold">忍耐力と集中力</span>：長時間にわたって一つの課題に取り組める集中力</li>
            <li><span className="font-bold">自己学習能力</span>：自ら情報を探し、独学で知識を深める姿勢</li>
          </ul>
        </div>
        
        <p>
          ただし、これらのサインがすべて揃っていなくても、IT分野での才能がないというわけではありません。また、才能は適切な環境と教育によって開花するものです。子どもの興味や反応を観察しながら、無理なくIT学習の機会を提供していくことが大切です。
        </p>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">才能を伸ばすための環境づくり</h3>
        <p>
          子どものIT才能を伸ばすためには、適切な環境づくりが重要です。以下のポイントを参考に、子どもの才能を育む環境を整えましょう。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-blue-800 mb-3">物理的環境の整備</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">学習スペース</span>：集中できる専用の学習環境</li>
              <li><span className="font-bold">適切な機器</span>：年齢に合った性能のPC、タブレットなど</li>
              <li><span className="font-bold">インターネット環境</span>：安全なオンライン学習環境の整備</li>
              <li><span className="font-bold">学習リソース</span>：書籍、オンラインコース、教材など</li>
              <li><span className="font-bold">創作環境</span>：アイデアを形にできるツールや素材</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-green-800 mb-3">心理的環境の整備</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">失敗を許容する姿勢</span>：試行錯誤を奨励し、失敗を学びの機会と捉える</li>
              <li><span className="font-bold">自己主導性の尊重</span>：子ども自身の興味や学習ペースを尊重</li>
              <li><span className="font-bold">適切な称賛</span>：努力や過程を認める具体的なフィードバック</li>
              <li><span className="font-bold">好奇心の奨励</span>：「なぜ？」「どうやって？」という問いを大切にする</li>
              <li><span className="font-bold">長期的視点</span>：即時の成果よりも持続的な成長を重視</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-purple-800 mb-3">教育的サポート</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">適切な指導者</span>：子どもの個性を尊重する指導者との出会い</li>
              <li><span className="font-bold">コミュニティへの参加</span>：同じ興味を持つ仲間との交流</li>
              <li><span className="font-bold">実践的な課題</span>：実世界の問題に取り組む機会</li>
              <li><span className="font-bold">多様な学習機会</span>：ワークショップ、ハッカソン、コンテストなど</li>
              <li><span className="font-bold">メンターシップ</span>：経験者からの指導や助言</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-red-800 mb-3">バランスの取れた育成</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">多様な経験</span>：IT以外の活動や興味のバランス</li>
              <li><span className="font-bold">身体活動</span>：デジタル活動と身体活動のバランス</li>
              <li><span className="font-bold">社会性の育成</span>：対人スキルやチームワークの経験</li>
              <li><span className="font-bold">倫理的視点</span>：テクノロジーの倫理や社会的影響の理解</li>
              <li><span className="font-bold">健全な利用習慣</span>：デジタル機器の適切な使用時間と習慣</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">専門的な道を目指す場合の進路</h3>
        <p>
          特にIT分野での才能が顕著で、より専門的な道を目指したい場合は、以下のような進路も視野に入れることができます。ただし、子ども自身の意思を最優先し、無理なく進められる道を選ぶことが大切です。
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-lg my-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">IT専門教育の進路オプション</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-indigo-700">小学生の段階</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><span className="font-bold">専門的なプログラミング教室</span>：技術習得を重視する教室</li>
                <li><span className="font-bold">プログラミングコンテスト</span>：U-12プログラミングコンテストなど</li>
                <li><span className="font-bold">オンラインコミュニティ</span>：子ども向けのプログラミングフォーラムやコミュニティ</li>
                <li><span className="font-bold">テックキャンプ</span>：休暇期間を利用した集中的な学び</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-indigo-700">中学生の段階</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><span className="font-bold">情報系の部活動</span>：学校のパソコン部や科学部</li>
                <li><span className="font-bold">専門的な個人レッスン</span>：プロのエンジニアからの指導</li>
                <li><span className="font-bold">オープンソースプロジェクト</span>：簡単なオープンソースへの貢献</li>
                <li><span className="font-bold">IT系高校の受験準備</span>：情報科学高校などへの進学準備</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-indigo-700">高校生以降</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><span className="font-bold">情報科学高校</span>：東京都立産業技術高等専門学校など</li>
                <li><span className="font-bold">IT系大学・専門学校</span>：情報工学部、コンピュータサイエンス学科など</li>
                <li><span className="font-bold">インターンシップ</span>：IT企業での実務経験</li>
                <li><span className="font-bold">ハッカソン参加</span>：チームでの開発イベント</li>
                <li><span className="font-bold">個人開発</span>：アプリやサービスの個人開発と公開</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p>
          専門的な道を目指す場合でも、プログラミングを楽しむ心を忘れないことが大切です。技術的な向上だけを追求すると、かえって創造性や問題解決の喜びが失われてしまうことがあります。子どものIT分野への情熱と喜びを大切にしながら、適切なサポートを提供していきましょう。
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">まとめ：子どものプログラミング教育成功のカギ</h2>
        <p>
          子どものプログラミング教育は、単に「コードを書く」技術を身につけるだけでなく、論理的思考力や問題解決能力、創造性など、多面的な能力を育む貴重な機会です。特にAI時代においては、テクノロジーを理解し、活用できる能力はますます重要になっています。
        </p>
        
        <p>
          プログラミング教育を成功させるカギは、子どもの興味や適性を尊重し、無理なく楽しみながら続けられる環境を整えることです。港区には多様なプログラミング教室があり、創造性重視型から技術習得型、AI・先端技術特化型まで、選択肢は豊富です。お子さんの性格や目標に合った教室を選び、家庭でも日常的にプログラミング的思考を育む機会を作ることで、より効果的なIT教育が実現できるでしょう。
        </p>
        
        <p>
          また、AIなどの最新技術も、子どもの学習をサポートする「入口」として活用することで、より効果的なプログラミング教育につながります。AIアソビあとりえでは、AIを活用したプログラミング学習から始め、徐々に本格的なコーディングへと導く段階的なアプローチを採用しています。
        </p>
        
        <p>
          最も大切なのは、プログラミングを通じて子どもが問題解決の喜びや創造の楽しさを体験できることです。技術的な上達はもちろん大切ですが、テクノロジーを通じて世界を理解し、自分のアイデアを形にする力を育むことこそ、プログラミング教育の本質と言えるでしょう。
        </p>
        
        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 my-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">AIアソビあとりえ プログラミングコースのご案内</h3>
          <p className="mb-4">
            AIアソビあとりえでは、AIを「入口」として子どものプログラミング的思考と創造性を引き出す独自のプログラムを提供しています。AIを活用した創作体験から始め、徐々に本格的なコーディングスキルも身につけながら、子どもたちの論理的思考力と創造力を育みます。
          </p>
          <p className="mb-4">
            従来のプログラミング教室とは異なり、「技術」だけでなく「創造力」「問題解決能力」「論理的思考力」を総合的に育成するプログラムです。AIツールを活用することで、プログラミング初心者のお子さんでも挫折せず、楽しみながら学ぶことができます。
          </p>
          <p>
            港区（麻布十番）で無料体験レッスンを随時開催していますので、ぜひお気軽にお問い合わせください。
          </p>
        </div>
      </article>
      
      {/* 関連記事 */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">関連記事</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/sample/top/image_art_icon.jpg"
                alt="AIアートで広がる子どもの表現力"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-art-for-kids" className="hover:text-primary transition-colors">
                  子どものためのAIアート入門 - デジタルからアナログ表現への架け橋
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年3月30日</p>
              <p className="text-gray-700 line-clamp-3">
                AIアートの基本概念から子どもの創造性を引き出す方法まで、AIを活用した芸術教育について解説します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/sample/top/image_music_icon.jpg"
                alt="AIで広がる子どもの音楽創作"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-music-for-kids" className="hover:text-primary transition-colors">
                  AIで広がる子どもの音楽創作 - 作曲体験から本格的な音楽教育へ
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年3月28日</p>
              <p className="text-gray-700 line-clamp-3">
                AIを活用した音楽創作の方法と、子どもの音楽的才能を開発するアプローチについて解説します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/sample/top/image_boy_idea.jpg"
                alt="AIを活用した子どもの創造性開発"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-creativity-development" className="hover:text-primary transition-colors">
                  AIを活用した子どもの創造性開発 - 港区の新しい教育アプローチ
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年3月22日</p>
              <p className="text-gray-700 line-clamp-3">
                港区の子ども向けAI教室が提案する、AIを活用した創造性教育の新しいアプローチを紹介します。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-xl mb-12 shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">お子様のIT才能を見つけ、伸ばしませんか？</h3>
        <p className="mb-6 text-lg">
          AIアソビあとりえでは、AIを活用した新しいプログラミング教育プログラムを提供しています。
          創造性を重視した独自のアプローチで、お子様のIT才能を見つけ、伸ばすお手伝いをします。
          無料体験レッスンも随時開催していますので、ぜひお気軽にご参加ください。
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg">
            <Link href="/courses/programming">プログラミングコースを見る</Link>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 text-lg">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
        </div>
      </section>
      
      {/* 前後の記事ナビゲーション */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog/ai-art-for-kids" className="flex items-center">
            <span className="mr-2">←</span> 前の記事
          </Link>
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog/ai-music-for-kids" className="flex items-center">
            次の記事 <span className="ml-2">→</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
