import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: '子ども向けAIツール5選：安全に使える創作支援ツール | AIアソビあとりえ',
  description: '子どもの創造性を育む安全なAIツールを厳選紹介。絵画、物語創作、音楽、プログラミング、科学学習をサポートする教育的価値の高いAIアプリと効果的な活用法。',
  keywords: '子ども AI ツール, 子供 AI アプリ, 安全 AI 創作, 子ども プログラミング AI, AI 教育 小学生, 創造性 AI 子ども',
  openGraph: {
    title: '子ども向けAIツール5選：安全に使える創作支援ツール',
    description: '子どもの創造性を育む安全なAIツールを厳選紹介。絵画、物語創作、音楽、プログラミング、科学学習をサポートする教育的価値の高いAIアプリと効果的な活用法。',
    images: [{ url: '/images/sample/parakeets-9190236_1280.jpg' }],
  }
};

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* 記事ヘッダー */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-md mr-3 font-medium">AI教育最新情報</span>
          <span className="text-gray-600 text-sm">2025年3月10日</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          子ども向けAIツール5選：安全に使える創作支援ツール
        </h1>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-4 font-medium">著者: AI創造ラボ編集部</span>
          <Link href="/blog/category/ai-education" className="text-primary hover:underline">
            カテゴリー: AI教育最新情報
          </Link>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/images/sample/parakeets-9190236_1280.jpg"
          alt="子ども向けAIツール5選：安全に使える創作支援ツール"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <article className="prose prose-lg md:prose-xl max-w-none mb-16">
        <p className="text-xl leading-relaxed mb-8">
          AIテクノロジーの急速な発展により、子どもたちの創造性を育むための<Link href="/blog/creativity-development" className="text-primary hover:underline">AIツール</Link>が次々と登場しています。しかし、すべてのAIツールが子どもに適しているわけではありません。安全性や教育的価値、使いやすさなど、子ども向けツールには特別な配慮が必要です。本記事では、厳選した子ども向けAIツール5選と、それらを効果的に活用するためのポイントを紹介します。
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">子ども向けAIツールの選び方</h2>
        
        <p>
          子ども向けのAIツールを選ぶ際には、以下のポイントを重視することが大切です。
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-bold text-blue-700 mb-3">子ども向けAIツール選びの重要ポイント</h3>
          <ul className="list-disc pl-6 space-y-2 text-blue-800">
            <li><span className="font-bold">安全性</span>：有害コンテンツのフィルタリング、適切なプライバシー保護</li>
            <li><span className="font-bold">使いやすさ</span>：子どもが直感的に操作できるインターフェース</li>
            <li><span className="font-bold">教育的価値</span>：創造性、問題解決能力、批判的思考力などを育む内容</li>
            <li><span className="font-bold">カスタマイズ性</span>：年齢や発達段階に合わせた設定が可能</li>
            <li><span className="font-bold">保護者管理機能</span>：使用時間の制限や活動の確認ができる機能</li>
          </ul>
        </div>
        
        <p>
          これらのポイントを踏まえて、当編集部が実際に試用し、子どものデジタルリテラシー育成にも役立つと判断した5つのAIツールを紹介します。
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">1. Qubena（キュビナ） - AIが子どもの進捗にペースを合わせるEラーニング学習ツール</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="md:col-span-2">
            <p>
              <a href="https://qubena.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Qubena</a>は、AIのサポートにより、子どもたちのペースに合わせて最適化した学習を実現する算数・数学にターゲットをしぼったEラーニング学習ツールです。シンプルなインターフェースで操作が簡単なため、小学校低学年の子どもでも使いこなせます。
            </p>
            
            <p>
              特筆すべきは、個人に最適化する人工知能が「解くべき問題」を自動的に出題する点です。また、子どもの学習進度を尊重し、一人一人の学習フローを最適化するシステムを採用しています。
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <h4 className="font-bold text-green-800 mb-2">Qubenaの主な機能</h4>
              <ul className="list-disc pl-6 space-y-1 text-green-800">
                <li>子どものペースに合わせた個別最適化学習</li>
                <li>AIによる「解くべき問題」の自動出題</li>
                <li>小学1年生から高校IIIまで対応した幅広いカリキュラム</li>
                <li>特許取得の「パーソナライズ学習システム」</li>
                <li>家庭向け学習アプリ「Qubena Wiz Lite」の提供</li>
              </ul>
            </div>
            
            <p>
              デジタル時代の教育において、Qubenaは子どもの学習意欲を刺激し、「もっと学びたい」という気持ちを育みます。また、AIの助けを借りることで、つまずきやすいポイントを効率的に克服し、学習への自信を育てる効果も期待できます。
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-blue-800 mb-3">Qubena 基本情報</h4>
            <ul className="space-y-2">
              <li><span className="font-bold">対象年齢</span>：小学1年生〜高校生</li>
              <li><span className="font-bold">料金</span>：Qubena Wiz Lite 月額1,950円〜</li>
              <li><span className="font-bold">対応デバイス</span>：iOS、Android、Web</li>
              <li><span className="font-bold">日本語対応</span>：あり</li>
              <li><span className="font-bold">保護者管理機能</span>：あり</li>
              <li><span className="font-bold">オフライン使用</span>：一部機能のみ</li>
              <li className="pt-2"><a href="https://qubena.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">公式サイトを見る →</a></li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">2. 英語学習AIロボMusio - 毎日進化するロボットとおしゃべりを楽しみながら英会話もぐんぐん上達！</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="md:col-span-2">
            <p>
              <a href="https://www.museumbox.jp/musio/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Musio</a>は、AIを搭載した英会話学習ロボットです。自然な英会話ができる点が最大の特徴で、会話の意味を理解した上で、微妙な感情までも表情にしながら会話してくれるため、実践的な会話練習が可能です。
            </p>
            
            <p>
              このツールの優れている点は、子どもと一緒に話せば話すほど、AIの学習能力により会話をおぼえていくことです。子どもが主導権を持ちながら、自然な英会話スキルを身につけられます。
            </p>
            
            <div className="bg-purple-50 p-4 rounded-lg my-4">
              <h4 className="font-bold text-purple-800 mb-2">Musioの主な機能</h4>
              <ul className="list-disc pl-6 space-y-1 text-purple-800">
                <li>自然な英会話が可能なAIロボット</li>
                <li>子どもと一緒に話せば話すほど、AIの学習能力により会話をおぼえる</li>
                <li>英語の学習だけでなく生涯思い出に残る友だちになる</li>
                <li>文字を読み取れる英語学習ロボットSophyとの連携</li>
                <li>年齢や英語レベルに合わせた会話内容の調整</li>
              </ul>
            </div>
            
            <p>
              Musioは言語能力の発達やコミュニケーション能力の向上にも効果的です。また、ロボットとの自然な対話体験は、子どもの英語への興味を高め、学習意欲を育みます。
            </p>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-purple-800 mb-3">Musio 基本情報</h4>
            <ul className="space-y-2">
              <li><span className="font-bold">対象年齢</span>：幼児〜中学生</li>
              <li><span className="font-bold">料金</span>：本体価格 + 月額利用料</li>
              <li><span className="font-bold">対応デバイス</span>：専用ロボット</li>
              <li><span className="font-bold">日本語対応</span>：あり</li>
              <li><span className="font-bold">保護者管理機能</span>：あり</li>
              <li><span className="font-bold">オフライン使用</span>：基本機能利用可能</li>
              <li className="pt-2"><a href="https://www.museumbox.jp/musio/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">公式サイトを見る →</a></li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">3. codey rocky - 子どもの成長に合わせて長く使える長く遊べる学習用ロボット</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="md:col-span-2">
            <p>
              <a href="https://www.makeblock.com/jp/steam-kits/codey-rocky" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">codey rocky</a>は、AI対応のSTEM教育ロボットです。論理的思考、問題解決能力、創造力/想像力がプログラミング学習によって得られるように設計されており、<Link href="/blog/steam-education" className="text-primary hover:underline">STEM教育</Link>の入門として最適です。
            </p>
            
            <p>
              専門的な知識がなくても、直感的な操作で本格的なプログラミングを体験できる点が魅力です。また、子どもの成長に合わせてプログラミングも高度化していける設計になっています。
            </p>
            
            <div className="bg-yellow-50 p-4 rounded-lg my-4">
              <h4 className="font-bold text-yellow-800 mb-2">codey rockyの主な機能</h4>
              <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                <li>ブロックコーディングによるビジュアルプログラミング言語から、Pythonまで対応</li>
                <li>音声認識、顔認識、気分検出などの楽しいAI体験</li>
                <li>子どもの成長に合わせてプログラミングも高度化</li>
                <li>36種類以上のプログラム可能な電子モジュール</li>
                <li>豊富な学習教材とサンプルプログラム</li>
              </ul>
            </div>
            
            <p>
              codey rockyは論理的思考力の発達だけでなく、問題解決能力や創造的思考の育成にも効果的です。自分でプログラムしたロボットが動く体験は、子どもの自己効力感と創造的自信を育みます。
            </p>
          </div>
          
          <div className="bg-yellow-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-yellow-800 mb-3">codey rocky 基本情報</h4>
            <ul className="space-y-2">
              <li><span className="font-bold">対象年齢</span>：小学生〜中学生</li>
              <li><span className="font-bold">料金</span>：本体価格</li>
              <li><span className="font-bold">対応デバイス</span>：専用ロボット + PC/タブレット</li>
              <li><span className="font-bold">日本語対応</span>：あり</li>
              <li><span className="font-bold">保護者管理機能</span>：なし</li>
              <li><span className="font-bold">オフライン使用</span>：基本機能利用可能</li>
              <li className="pt-2"><a href="https://www.makeblock.com/jp/steam-kits/codey-rocky" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">公式サイトを見る →</a></li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">4. Coder Mindz - ボードゲームでAIの考え方を学習できる！</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="md:col-span-2">
            <p>
              <a href="https://www.amazon.co.jp/Coder-Mindz-AI-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E3%81%8C%E5%AD%A6%E3%81%B9%E3%82%8B-%E3%83%9C%E3%83%BC%E3%83%89%E3%82%B2%E3%83%BC%E3%83%A0-%E6%AD%A3%E8%A6%8F%E5%93%81-%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%E4%BB%98%E3%81%8D/dp/B07Z5NCN3D/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Coder Mindz</a>は、9歳のアメリカ人少女が開発したAI学習ツールです。<Link href="/blog/ai-programming-for-kids" className="text-primary hover:underline">プログラミング学習</Link>をボードゲームという形で提供する画期的なアプローチが特徴です。
            </p>
            
            <p>
              Coder Mindzのユニークな点は、AI学習ツールなのにロボットもパソコンもタブロイドも使わず、電源すら必要とせず、紙のボード上でゲームをしながら、AIの考え方が身についていくところにあります。
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <h4 className="font-bold text-green-800 mb-2">Coder Mindzの主な機能</h4>
              <ul className="list-disc pl-6 space-y-1 text-green-800">
                <li>ボードゲームでAIの基本概念を学習</li>
                <li>カードに書かれたプログラミング通りにロボットのコマを進める</li>
                <li>日本語マニュアル付き商品も販売</li>
                <li>デジタルデバイスなしでAIの考え方を学べる</li>
                <li>家族や友達と一緒に楽しめる協力型ゲーム</li>
              </ul>
            </div>
            
            <p>
              Coder Mindzは計算論的思考や問題解決能力の育成に効果的です。また、デジタルデバイスに依存せずにAIの基本概念を学べるため、スクリーンタイムを気にする家庭にも最適な学習ツールです。
            </p>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-green-800 mb-3">Coder Mindz 基本情報</h4>
            <ul className="space-y-2">
              <li><span className="font-bold">対象年齢</span>：6歳以上</li>
              <li><span className="font-bold">料金</span>：ボードゲーム本体価格</li>
              <li><span className="font-bold">対応デバイス</span>：不要（ボードゲーム）</li>
              <li><span className="font-bold">日本語対応</span>：あり（日本語マニュアル付き）</li>
              <li><span className="font-bold">保護者管理機能</span>：不要</li>
              <li><span className="font-bold">オフライン使用</span>：完全オフライン</li>
              <li className="pt-2"><a href="https://www.amazon.co.jp/Coder-Mindz-AI-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E3%81%8C%E5%AD%A6%E3%81%B9%E3%82%8B-%E3%83%9C%E3%83%BC%E3%83%89%E3%82%B2%E3%83%BC%E3%83%A0-%E6%AD%A3%E8%A6%8F%E5%93%81-%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%E4%BB%98%E3%81%8D/dp/B07Z5NCN3D/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Amazonで見る →</a></li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">5. Duolingo - AIと言語科学を組み合わせた子どもも楽しく学べる言語学習アプリ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="md:col-span-2">
            <p>
              <a href="https://ja.duolingo.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Duolingo</a>は、世界で最もダウンロードされている語学アプリで、科学的アプローチに基づいた言語学習を提供しています。AIと言語科学の長所を組み合わせたレッスンは、一人ひとりの学習状況によって常に変化するため、誰もが最適なレベルとペースで学習することができます。
            </p>
            
            <p>
              Duolingoの特徴は、科学に裏付けられた指導法と楽しいコンテンツを組み合わせて、成果をもたらす学習体験を実現していることです。研究によると、Duolingoのたった5つのセクションで、大学の5学期分に相当する内容を学べることが明らかになっています。
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <h4 className="font-bold text-blue-800 mb-2">Duolingoの主な機能</h4>
              <ul className="list-disc pl-6 space-y-1 text-blue-800">
                <li>AIによるパーソナライズドラーニング（個人最適化学習）</li>
                <li>ゲーム感覚で楽しく学べるインターフェース</li>
                <li>40以上の言語に対応</li>
                <li>3〜8歳の子ども向け「Duolingo ABC」アプリ</li>
                <li>生成AIを活用した「リリーとビデオ通話」機能（英会話練習）</li>
              </ul>
            </div>
            
            <p>
              Duolingoは言語リテラシーの育成だけでなく、好奇心駆動型の学習を促進します。特に子ども向けには「Duolingo ABC」という専用アプリがあり、3歳から8歳の子供を対象にデザインされており、単語のつづりと発音を関連付けながら読み方が学べる楽しいフォーマットになっています。
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-blue-800 mb-3">Duolingo 基本情報</h4>
            <ul className="space-y-2">
              <li><span className="font-bold">対象年齢</span>：3歳〜（Duolingo ABC）、13歳〜（通常版）</li>
              <li><span className="font-bold">料金</span>：基本機能無料、プレミアム機能は月額制</li>
              <li><span className="font-bold">対応デバイス</span>：iOS、Android、Web</li>
              <li><span className="font-bold">日本語対応</span>：あり</li>
              <li><span className="font-bold">保護者管理機能</span>：あり</li>
              <li><span className="font-bold">オフライン使用</span>：一部機能利用可能</li>
              <li className="pt-2"><a href="https://ja.duolingo.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">公式サイトを見る →</a></li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">AIツールを子どもと一緒に使う際のポイント</h2>
        
        <p>
          これらのツールは教育的価値が高いですが、使い方によってはAIへの依存や創造性の阻害につながる可能性もあります。健全なテクノロジー利用のために、以下のポイントを意識して、子どもと一緒に活用しましょう。
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-lg my-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">効果的なAIツール活用のための5つのポイント</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <span className="font-bold">一緒に使う時間を設ける</span>
              <p className="mt-1">特に初めは保護者と一緒に使い、適切な使い方を教えましょう。共同体験を通じて、AIの可能性と限界について会話する機会を作りましょう。</p>
            </li>
            <li>
              <span className="font-bold">使用時間を決める</span>
              <p className="mt-1">長時間の使用は避け、<Link href="/blog/screen-time-balance" className="text-primary hover:underline">他の活動とのバランス</Link>を取りましょう。AIツールは創造性の一部であり、すべてではありません。</p>
            </li>
            <li>
              <span className="font-bold">AIの限界を教える</span>
              <p className="mt-1">AIは便利なツールであり、すべてを知っているわけではないことを伝えましょう。時には間違った情報を提供することもあるため、批判的思考の重要性を教えましょう。</p>
            </li>
            <li>
              <span className="font-bold">創作の主体は子ども自身</span>
              <p className="mt-1">AIはあくまでサポート役であり、アイデアの源泉は子ども自身であることを意識させましょう。AIの提案をそのまま受け入れるのではなく、自分なりにアレンジすることを奨励しましょう。</p>
            </li>
            <li>
              <span className="font-bold">デジタルとリアルを融合させる</span>
              <p className="mt-1">AIツールでの創作体験を、実際の手を使った活動や体験学習につなげましょう。例えば、AIで作った物語を実際に演じてみたり、AIの科学実験提案を実際にやってみたりすることで、学びの深化が期待できます。</p>
            </li>
          </ol>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">AIアソビあとりえでの取り組み</h2>
        
        <p>
          <Link href="/" className="text-primary hover:underline">AIアソビあとりえ</Link>では、これらのツールを活用した創作活動を各コースに取り入れています。子どもたちがAIを「使いこなす」経験を通じて、未来を生きる力を育んでいます。
        </p>
        
        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 my-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">AIアソビあとりえの特徴的なプログラム</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link href="/courses/ai-art" className="text-primary hover:underline"><span className="font-bold">AIアートコース</span></Link>：最新のAIアートツールを活用し、デジタルからアナログ表現へと発展させる創作活動</li>
            <li><span className="font-bold">AIストーリーテリングコース</span>：AIを活用した物語創作と発表活動</li>
            <li><Link href="/courses/music" className="text-primary hover:underline"><span className="font-bold">AI音楽創作コース</span></Link>：AIを使った作曲体験と音楽理論学習</li>
            <li><Link href="/courses/app-dev" className="text-primary hover:underline"><span className="font-bold">AIプログラミングコース</span></Link>：Qubenaやcodey rockyを活用したプログラミング基礎からゲーム開発まで</li>
            <li><span className="font-bold">AI言語学習コース</span>：DuolingoやMusioを使った実践的な言語学習</li>
          </ul>
          <p className="mt-4">
            各コースでは、AIツールを「入口」として活用し、徐々に本格的な創作活動へと導いていきます。AIに依存するのではなく、AIを創造的に使いこなす力を育てることを重視しています。
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/courses" className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              コース詳細を見る
            </Link>
            <Link href="/trial" className="inline-block border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors">
              無料体験会に申し込む
            </Link>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">まとめ：子どもとAIの創造的な関係づくり</h2>
        
        <p>
          AIツールは、使い方次第で子どもの創造性を大きく広げることができます。重要なのは、AIを「魔法の箱」として捉えるのではなく、子どもの創造性を引き出し、拡張するための道具として位置づけることです。
        </p>
        
        <p>
          本記事で紹介した5つのツールは、いずれも子どもの安全と教育的価値を重視して設計されています。これらを適切に活用することで、子どもたちはAI時代に必要なスキルを楽しみながら身につけることができるでしょう。
        </p>
        
        <p>
          AIアソビあとりえでは、これらのツールを活用した創作ワークショップや<Link href="/courses" className="text-primary hover:underline">定期コース</Link>を提供しています。子どもたちがAIと創造的に関わりながら、未来を切り拓く力を育む場として、ぜひご活用ください。
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h4 className="text-xl font-bold text-blue-700 mb-3">関連リソース</h4>
          <ul className="list-disc pl-6 space-y-2 text-blue-800">
            <li><Link href="/blog/ai-education-current-state" className="hover:underline">子どものAI教育の現状：何を教え、何に気をつけるべきか</Link></li>
            <li><Link href="/blog/ai-programming-for-kids" className="hover:underline">子どものためのAIプログラミング：年齢別の身につけたいスキル</Link></li>
            <li><Link href="/blog/screen-time-balance" className="hover:underline">デジタルとリアルのバランス：子どものスクリーンタイムを考える</Link></li>
            <li><Link href="/blog/creativity-development" className="hover:underline">AIを活用した子どもの創造性開発：港区の新しい教育アプローチ</Link></li>
            <li><Link href="/blog/ai-family-learning" className="hover:underline">保護者のためのAIツールガイド：子どもと一緒に学ぶための基礎知識</Link></li>
          </ul>
        </div>
      </article>
      
      {/* 関連記事 */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">関連記事</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/sample/top/image_boy_idea.jpg"
                alt="AI時代の教育とは？"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-education-future" className="hover:text-primary transition-colors">
                  AI時代の教育とは？子どもたちに必要な力と親ができるサポート
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年3月15日</p>
              <p className="text-gray-700 line-clamp-3">
                AI時代に子どもたちが身につけるべきスキルと、それを育むための家庭でのサポート方法について解説します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-screen-time-balance.jpg"
                alt="デジタルとリアルのバランス"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/screen-time-balance" className="hover:text-primary transition-colors">
                  デジタルとリアルのバランス：子どものスクリーンタイムを考える
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年2月10日</p>
              <p className="text-gray-700 line-clamp-3">
                子どものデジタル機器利用時間の適切な管理方法と、オンライン・オフラインのバランスの取り方について考察します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/sample/top/image_art_icon.jpg"
                alt="2025年のAI教育トレンド"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-education-trends-2025" className="hover:text-primary transition-colors">
                  2025年のAI教育トレンド：世界の最新事例から学ぶ
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年2月15日</p>
              <p className="text-gray-700 line-clamp-3">
                世界各国のAI教育の最新トレンドと、日本の教育現場への応用可能性について分析します。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-xl mb-12 shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">子どもの創造性を広げるAI活用法を学びませんか？</h3>
        <p className="mb-6 text-lg">
          AIアソビあとりえでは、本記事で紹介したツールを活用した創作活動を体験できる無料ワークショップを定期的に開催しています。
          子どもたちがAIを創造的に使いこなす力を育む、新しい学びの場にぜひご参加ください。
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg">
            <Link href="/courses">コース一覧を見る</Link>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 text-lg">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
        </div>
      </section>
      
      {/* 前後の記事ナビゲーション */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog/creativity-development" className="flex items-center">
            <span className="mr-2">←</span> 前の記事
          </Link>
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog/ai-education-future" className="flex items-center">
            次の記事 <span className="ml-2">→</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
