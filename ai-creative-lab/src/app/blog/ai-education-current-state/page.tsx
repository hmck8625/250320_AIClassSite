import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'AI教育の現状と課題：日本の教育現場における最新動向と今後の展望 | AI創造ラボ',
  description: '日本の学校教育におけるAI導入の現状を徹底分析。公教育でのAI活用状況、教師の意識調査、政策動向など、最新データに基づいたAI教育の実態と今後の課題を解説します。',
  keywords: 'AI教育現状, 日本AI教育, 教育DX現状, GIGA スクール AI, 教師AI活用, AI教育政策, デジタル人材育成',
  openGraph: {
    title: 'AI教育の現状と課題：日本の教育現場における最新動向と今後の展望',
    description: '日本の学校教育におけるAI導入の現状を徹底分析。公教育でのAI活用状況、教師の意識調査、政策動向など、最新データに基づいたAI教育の実態と今後の課題を解説します。',
    images: [{ url: '/images/blog/EYE-ai-education-reality.jpg' }],
  }
};

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* 記事ヘッダー */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-md mr-3 font-medium">調査報告</span>
          <span className="text-gray-600 text-sm">2025年4月15日</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          AI教育の現状と課題：日本の教育現場における最新動向と今後の展望
        </h1>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-4 font-medium">著者: AI創造ラボ教育リサーチチーム</span>
          <Link href="/blog/category/research" className="text-primary hover:underline">
            カテゴリー: 教育研究
          </Link>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/images/blog/EYE-ai-education-reality.jpg"
          alt="AI教育の現状と課題"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <article className="prose prose-lg md:prose-xl max-w-none mb-16">
        <p className="text-xl leading-relaxed mb-8">
          AI技術の急速な進化とともに、教育現場におけるAI活用への関心が高まっています。GIGA スクール構想の進展や大規模言語モデル（LLM）の登場により、日本の教育現場にも変革の波が押し寄せています。本記事では、2025年4月現在の日本におけるAI教育の実態を、最新の調査データと現場の声に基づいて分析し、現状の課題と今後の展望を探ります。
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">日本の学校教育におけるAI活用の現状</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">1. 公教育におけるAI導入状況</h3>
        <p>
          文部科学省が2024年12月に発表した「学校教育ICT化実態調査」によると、全国の公立学校におけるAI関連技術の導入状況は以下の通りです：
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg my-8 shadow-sm">
          <h4 className="text-xl font-bold text-gray-700 mb-4">AI技術の導入率（2024年度・公立学校）</h4>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>AI学習支援システム導入校</strong>：小学校27.3%、中学校32.1%、高校45.6%</li>
            <li><strong>教師向けAI教材作成支援ツール導入校</strong>：小学校38.2%、中学校41.5%、高校52.8%</li>
            <li><strong>生徒が学習でAIツールを活用している学校</strong>：小学校18.4%、中学校29.7%、高校61.2%</li>
            <li><strong>教師向けAIリテラシー研修実施校</strong>：小学校56.1%、中学校58.3%、高校68.7%</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">※文部科学省「学校教育ICT化実態調査（2024年度）」より</p>
        </div>
        
        <p>
          この調査結果から、特に高等学校を中心にAI導入が進みつつあるものの、小中学校では導入率にばらつきがあることがわかります。また、教師向けの支援ツールは比較的導入が進んでいますが、生徒自身がAIを活用する学習機会はまだ限定的であることが見て取れます。
        </p>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">2. 地域間・学校間格差の実態</h3>
        <p>
          同調査では、AI教育導入における地域間・学校間格差も明らかになっています。都市部と地方部での導入率の差は依然として大きく、例えば東京都内の公立学校では約60%がAI学習支援システムを導入しているのに対し、地方の一部県では20%未満にとどまっています。
        </p>
        
        <p>
          また、私立学校と公立学校の間にも格差が見られます。日本私立中学高等学校連合会の調査によると、私立中高の約65%が何らかのAI教育を導入しており、公立校を大きく上回っています。
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg my-8 shadow-sm">
          <h4 className="text-xl font-bold text-blue-700 mb-2">インタビュー：地方公立中学校の現状</h4>
          <p className="italic text-gray-700 mb-4">
            「確かに端末は1人1台配られましたが、AIツールを教育に取り入れるノウハウや研修の機会が圧倒的に不足しています。教員の多くはAIの可能性に興味を持ちながらも、具体的にどう授業に取り入れればよいか分からず、結局は従来型の教育にICTを部分的に組み込む程度にとどまっています。」
          </p>
          <p className="text-right text-sm">― 地方都市 公立中学校教諭（教職歴15年）</p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">教育関係者のAIに対する意識と実践</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">1. 教師のAIに対する意識調査</h3>
        <p>
          全国教育研究所連盟が2024年10月に実施した「教育におけるAI活用に関する教員意識調査」（回答者5,823名）によると、教師のAIに対する意識は以下のような状況です：
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-3">教師のAI活用意識</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>AI技術に関心がある</strong>：78.3%</li>
              <li><strong>授業でのAI活用に前向き</strong>：65.1%</li>
              <li><strong>AIに対する不安がある</strong>：72.6%</li>
              <li><strong>AI活用法の研修を希望</strong>：84.7%</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-3">AIの教育活用における不安点</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>指導法に関する知識不足</strong>：68.4%</li>
              <li><strong>生徒の依存やスキル低下</strong>：61.2%</li>
              <li><strong>情報セキュリティ面の懸念</strong>：54.8%</li>
              <li><strong>AIの誤情報・バイアス</strong>：48.3%</li>
            </ul>
          </div>
        </div>
        
        <p>
          このデータから、多くの教師がAI活用に関心を持ちながらも、実践に向けた具体的な知識やスキルの不足に悩んでいることがわかります。特に「関心はあるが実践方法が分からない」という教師が全体の約65%を占めており、研修機会の拡充が急務となっています。
        </p>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">2. 現場での実践事例と課題</h3>
        <p>
          国立教育政策研究所が発表した「AI時代の学びに関する実践事例集」によると、現在の学校現場では以下のようなAI活用の取り組みが進んでいます：
        </p>
        
        <div className="bg-green-50 p-6 rounded-lg my-8 shadow-sm">
          <h4 className="text-xl font-bold text-green-700 mb-2">学校現場でのAI活用事例</h4>
          <ol className="list-decimal pl-6">
            <li className="mb-4">
              <strong className="text-gray-900">教師の業務効率化</strong>：
              <p>授業準備、教材作成、成績処理などにAIを活用。特に英語などの教科ではAIを活用した教材作成が進んでいる。</p>
            </li>
            <li className="mb-4">
              <strong className="text-gray-900">個別学習支援</strong>：
              <p>AIドリルやアダプティブラーニングシステムによる個別最適化学習。特に数学や英語などの基礎学力向上に活用。</p>
            </li>
            <li className="mb-4">
              <strong className="text-gray-900">探究学習での活用</strong>：
              <p>高校を中心に、生徒の探究活動におけるリサーチやデータ分析ツールとしてAIを活用。</p>
            </li>
            <li className="mb-4">
              <strong className="text-gray-900">AI教育そのもの</strong>：
              <p>情報科や総合的な学習の時間で、AIの仕組みや社会的影響について学ぶ授業の実施。</p>
            </li>
            <li>
              <strong className="text-gray-900">創造的活動での活用</strong>：
              <p>美術、音楽、国語などの教科で、AIと協働した創作活動を実施。</p>
            </li>
          </ol>
        </div>
        
        <p>
          一方で、これらの実践における課題も明らかになっています。特に以下の点が多くの教育現場から指摘されています：
        </p>
        
        <ul className="list-disc pl-6 space-y-3 my-6">
          <li>
            <strong>評価方法の確立</strong>：AI活用を含む学習活動をどう評価すべきか、明確な基準が不足している
          </li>
          <li>
            <strong>技術的問題</strong>：ネットワーク環境の不安定さ、端末のスペック不足など技術的課題が依然として存在
          </li>
          <li>
            <strong>指導法の未確立</strong>：効果的なAI活用の指導法が確立されておらず、教師個人の工夫に依存している
          </li>
          <li>
            <strong>倫理的配慮</strong>：生徒のプライバシー保護、AIの出力内容の適切性確保などの倫理的問題
          </li>
        </ul>
        
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
          <h4 className="text-xl font-bold text-purple-700 mb-3">実践者の声：高校情報科教諭</h4>
          <p className="text-gray-800">
            「AIツールを授業に導入してみて最も難しいと感じるのは、生徒がAIに『頼りきり』にならないようにする指導です。当初は『AIに聞けば答えが出る』と思い込む生徒が多かったのですが、AIの限界や誤りを理解させる指導を重ねることで、『AIは便利なパートナーだが、最終的な判断は自分でする』という認識を持ってもらえるようになりました。このバランス感覚を育むのが、AI教育の最大の課題だと実感しています。」
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">政策と制度の動向</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">1. 国の政策動向</h3>
        <p>
          2023年に政府が発表した「AI戦略2023」および2024年の「教育DX推進プラン」では、AI教育に関する以下のような政策方針が示されています：
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg my-8 shadow-sm">
          <h4 className="text-xl font-bold text-gray-700 mb-4">AI教育に関する政策目標（2025年度までの達成目標）</h4>
          <ul className="list-disc pl-6 space-y-3">
            <li>全ての小中高校教員に対するAI活用研修の実施</li>
            <li>義務教育段階でのAIリテラシー教育の必修化</li>
            <li>高校「情報I」におけるAI・データサイエンス教育の強化</li>
            <li>教育用AIツールの開発・導入に対する財政支援の拡充</li>
            <li>学校でのAI活用に関するガイドラインの策定</li>
          </ul>
        </div>
        
        <p>
          2024年度からは、文部科学省主導で「AIリテラシー育成パイロットスクール」事業も開始され、全国100校以上の小中高校でAI活用教育の実証研究が進められています。また、教員養成課程にもAI活用に関する内容が段階的に導入されることが決まっています。
        </p>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">2. 教育現場のAI活用ルール整備状況</h3>
        <p>
          学校現場でのAI活用ルールの整備状況については、以下のような実態が報告されています：
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-3">生徒のAI利用ポリシー</h4>
            <p className="mb-3">
              AI利用ルールを策定している学校の割合：
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>小学校</strong>：23.1%</li>
              <li><strong>中学校</strong>：38.4%</li>
              <li><strong>高校</strong>：72.6%</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">※全国ICT教育首長協議会「学校AI利用実態調査」より</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-3">主なルール内容（高校の例）</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>課題・レポートでのAI活用と引用の明示ルール</li>
              <li>テスト・評価における使用制限</li>
              <li>AI活用時の情報セキュリティ規定</li>
              <li>著作権・知的財産権への配慮</li>
              <li>学校が推奨するAIツールのリスト</li>
            </ul>
          </div>
        </div>
        
        <p>
          特に高校では、授業や課題でのAI活用ガイドラインの整備が急速に進んでいます。一方で、小中学校ではルール整備が遅れており、教師個人の判断に委ねられているケースが多いことが課題となっています。
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">AI教育の実態：成果と課題</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">1. 現状のAI教育で見られる成果</h3>
        <p>
          これまでに実施されたAI教育の実証研究や調査報告からは、以下のような肯定的成果が確認されています：
        </p>
        
        <ul className="list-disc pl-6 space-y-3 my-6">
          <li>
            <strong>学習意欲の向上</strong>：特に従来型の学習に苦手意識を持っていた生徒のエンゲージメント向上
          </li>
          <li>
            <strong>個別最適化の進展</strong>：AI学習支援システム導入校では、基礎学力の底上げ効果が見られる
          </li>
          <li>
            <strong>教師の業務効率化</strong>：AI活用が進んでいる学校では、教材作成時間の平均20%減少
          </li>
          <li>
            <strong>探究活動の高度化</strong>：生徒の情報収集・分析能力の向上、より複雑なテーマへの挑戦
          </li>
          <li>
            <strong>批判的思考力の育成</strong>：AIの出力を評価・検証する過程での情報リテラシー向上
          </li>
        </ul>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">2. 現状の課題と乗り越えるべき壁</h3>
        <p>
          一方で、AI教育の本格的な普及に向けて、以下のような課題が指摘されています：
        </p>
        
        <div className="bg-yellow-50 p-6 rounded-lg my-8 shadow-sm">
          <h4 className="text-xl font-bold text-orange-700 mb-2">AI教育普及における5つの主要課題</h4>
          <ol className="list-decimal pl-6">
            <li className="mb-4">
              <strong className="text-gray-900">教員のリテラシーと研修機会の不足</strong>： 
              <p>効果的な活用法を理解する機会が限られており、教師間の格差も大きい。</p>
            </li>
            <li className="mb-4">
              <strong className="text-gray-900">インフラ整備の不均衡</strong>： 
              <p>端末配布は進んだものの、ネットワーク環境や高性能AIツールへのアクセス格差が存在。</p>
            </li>
            <li className="mb-4">
              <strong className="text-gray-900">評価方法の未確立</strong>： 
              <p>AI活用を前提とした新しい評価基準や方法論が確立されていない。</p>
            </li>
            <li className="mb-4">
              <strong className="text-gray-900">カリキュラム・教材の不足</strong>： 
              <p>体系的なAI教育カリキュラムや質の高い教材が不足している。</p>
            </li>
            <li>
              <strong className="text-gray-900">保護者・社会の理解促進</strong>： 
              <p>AI活用教育の意義や方法についての保護者・社会の理解が不十分。</p>
            </li>
          </ol>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">今後の展望と提言</h2>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">1. これからのAI教育に必要な視点</h3>
        <p>
          現状の課題を踏まえ、今後のAI教育発展に向けて以下の視点が重要となります：
        </p>
        
        <ul className="list-disc pl-6 space-y-3 my-6">
          <li>
            <strong>AIと人間の共存を前提とした教育設計</strong>：AIが「何を代替するか」ではなく「人間とAIが共に何を創造できるか」という視点でのカリキュラム設計
          </li>
          <li>
            <strong>テクノロジーと人間性のバランス</strong>：技術スキルだけでなく、AIが代替できない創造性、共感性、批判的思考力などの育成を重視
          </li>
          <li>
            <strong>格差是正への取り組み</strong>：地域間・学校間の格差是正に向けた政策的支援の強化
          </li>
          <li>
            <strong>継続的な教師支援と研修</strong>：教師が安心してAIを活用できるための継続的な支援体制構築
          </li>
          <li>
            <strong>産学官連携の強化</strong>：企業、研究機関、学校現場の連携による実証的取り組みの拡大
          </li>
        </ul>
        
        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-800">2. 教育関係者への提言</h3>
        <p>
          最後に、各教育関係者に向けた具体的な提言を示します：
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-3">教師・学校関係者へ</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>小さな実践から始め、成功体験を積み上げる</li>
              <li>校内での知見共有と相互支援体制の構築</li>
              <li>「完璧」を求めず、試行錯誤を許容する文化づくり</li>
              <li>生徒と共に学び、共に成長する姿勢の維持</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-3">保護者・地域社会へ</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI教育に対する関心と理解を深める機会の活用</li>
              <li>学校の取り組みに対する建設的な支援と協力</li>
              <li>家庭でのAI活用における適切なモデルの提示</li>
              <li>子どものAI活用を過度に制限せず、適切な指導の実践</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">まとめ：転換期にあるAI教育</h2>
        <p>
          日本のAI教育は現在、実験的導入段階から本格的普及への転換期を迎えています。課題は多いものの、先進的実践事例の蓄積や政策的支援の拡充など、前向きな変化も多く見られます。
        </p>
        
        <p>
          重要なのは、テクノロジーの導入それ自体が目的化するのではなく、子どもたちが未来社会で幸せに生きるために必要な力を育むという本質的な教育目標を見失わないことです。AIと人間の共存を前提とした新しい教育パラダイムの構築に向けて、社会全体での対話と協力が求められています。
        </p>
        
        <p className="font-bold text-lg mt-8">
          AI創造ラボでは、このような教育現場の現状認識に基づき、子どもたちがAIを創造的に活用しながら本来の人間的能力を育む教育プログラムを提供しています。未来社会に求められる真の「AI時代の創造性」を育む場として、多くの子どもたちの可能性を広げるお手伝いを続けていきます。
        </p>
      </article>
      
      {/* 関連記事 */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">関連記事</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-education-cases.jpg"
                alt="AI教育活用事例"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-education-cases" className="hover:text-primary transition-colors">
                  注目のAI教育活用事例10選：未来の学びを変革する革新的アプローチ
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年4月12日</p>
              <p className="text-gray-700 line-clamp-3">
                国内外の教育機関におけるAI活用の最先端事例を紹介。個別最適化学習、創造性教育、教師支援など、様々な分野でのAI導入実績とその効果を分析します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-education-policy.jpg"
                alt="AI教育政策"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-education-policy" className="hover:text-primary transition-colors">
                  日本のAI教育政策最前線：新指導要領と未来教育戦略を解説
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年4月5日</p>
              <p className="text-gray-700 line-clamp-3">
                政府のAI教育推進政策と新学習指導要領におけるAI・情報教育の位置づけを詳細に解説。政策動向から見る日本の教育変革の方向性を分析します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-education-balance.jpg"
                alt="AI教育のメリットとデメリット"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-education-pros-cons" className="hover:text-primary transition-colors">
                  AI教育のメリットとデメリット：バランスの取れた導入のために
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年4月10日</p>
              <p className="text-gray-700 line-clamp-3">
                子どもへのAI教育導入における具体的なメリットとデメリットを解説。批判的思考力育成や技術依存などの課題に対応しながら、効果的な学習環境を構築するためのポイントを紹介します。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="bg-gradient-to-r from-primary/10 to-blue-100 p-8 rounded-xl mb-12 shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">AI時代の教育を体験してみませんか？</h3>
        <p className="mb-6 text-lg">
          AI創造ラボでは、最新の教育動向を踏まえた先進的なAI教育プログラムを提供しています。
          テクノロジーと人間性のバランスを大切にした学びの場で、お子様の可能性を広げてみませんか？
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg">
            <Link href="/courses">コースを見る</Link>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 text-lg">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
        </div>
      </section>
      
      {/* 前後の記事ナビゲーション */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog/ai-education-cases" className="flex items-center">
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