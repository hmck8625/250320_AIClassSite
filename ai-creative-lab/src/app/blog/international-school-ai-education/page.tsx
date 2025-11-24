import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '港区インターナショナルスクール生の保護者が注目するAI教育トレンド | AIアソビあとりえ',
  description: '港区のインターナショナルスクール環境でのAI教育の最新動向と、グローバル人材育成のための創造的AI学習アプローチを専門家が解説します。',
  keywords: '港区, インターナショナルスクール, AI教育, グローバル教育, バイリンガル, 国際教育, 創造性, STEAM教育',
  openGraph: {
    title: '港区インターナショナルスクール生の保護者が注目するAI教育トレンド',
    description: '港区のインターナショナルスクール環境でのAI教育の最新動向と、グローバル人材育成のための創造的AI学習アプローチを専門家が解説します。',
    images: [{ url: '/images/blog/EYE-ai-education-future.jpg' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function InternationalSchoolAIEducation() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      {/* 記事ヘッダー */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-md mr-3 font-medium">国際教育特集</span>
          <span className="text-gray-600 text-sm">2025年6月1日</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          港区インターナショナルスクール生の保護者が注目する<br className="hidden md:block" />
          <span className="text-blue-600">AI教育トレンド</span>
        </h1>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-4 font-medium">著者: AIアソビあとりえ編集部</span>
          <Link href="/blog/category/ai-education" className="text-primary hover:underline">
            カテゴリー: AI教育最新情報
          </Link>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/images/blog/EYE-ai-education-future.jpg"
          alt="港区インターナショナルスクール生のAI教育"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <p className="text-white text-sm">
            港区の国際的な教育環境を活かして、世界標準のAI教育を実現する方法を探ります
          </p>
        </div>
      </div>
      
      {/* 記事本文 */}
      <article className="prose prose-lg max-w-none mb-16">
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-0">この記事でわかること</h2>
          <ul className="space-y-2 mb-0">
            <li>港区インターナショナルスクールの最新AI教育動向</li>
            <li>世界標準のAI教育と日本の教育の違い</li>
            <li>バイリンガル環境でのAI学習の効果的な方法</li>
            <li>グローバル人材に必要なAIリテラシーとは</li>
            <li>インター生のための補完的AI教育プログラムの選び方</li>
          </ul>
        </div>

        <p className="text-xl leading-relaxed mb-8">
          港区には多数のインターナショナルスクールがあり、70カ国以上の国籍の子どもたちが学んでいます。これらの学校では、すでにAI教育が日常的に取り入れられ始めていますが、保護者の皆様からは「学校での教育だけで十分なのか」「日本の文化的背景も踏まえたAI教育は必要ないのか」といったご質問を多くいただきます。本記事では、港区のインターナショナルスクール環境での最新AI教育動向と、より効果的な学習方法について詳しく解説します。
        </p>
        
        <h2 id="current-trends" className="scroll-mt-20">港区インターナショナルスクールのAI教育現状</h2>
        
        <p>
          港区内には複数のインターナショナルスクールが設置されており、2023年から本格的にAI教育カリキュラムが導入されています。特に、ローラス・インターナショナルスクール・オブ・サイエンス（港区三田）、西町インターナショナルスクール等の先進校では、以下のような取り組みが行われています。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-gray-800">現在の導入状況</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Grade 3-5</strong>: Scratch for AIを使った基礎プログラミング</li>
              <li>• <strong>Grade 6-8</strong>: Python入門とAIツール体験</li>
              <li>• <strong>Grade 9-12</strong>: Machine Learning基礎とプロジェクト</li>
              <li>• <strong>Cross-curricular</strong>: 各教科でのAI活用学習</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-gray-800">特徴的な教育手法</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>英語環境</strong>での最新AI概念学習</li>
              <li>• <strong>国際協働</strong>プロジェクト（他国の学校と連携）</li>
              <li>• <strong>企業連携</strong>プログラム（Google、Microsoft等）</li>
              <li>• <strong>倫理重視</strong>：AI Ethicsを必修科目化</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="text-xl font-bold text-green-700 mb-3">港区インター校AI教育の強み</h3>
          <ul className="space-y-2 text-green-800 mb-0">
            <li>🌍 <strong>最新情報へのアクセス</strong>: 英語で最新のAI研究・技術情報を直接学習</li>
            <li>🤝 <strong>国際的な視点</strong>: 多文化環境でのAI倫理・社会課題の議論</li>
            <li>💼 <strong>実践的な学び</strong>: 海外大学・企業との直接的な連携機会</li>
            <li>🎯 <strong>個別最適化</strong>: 少人数制による一人ひとりに合わせた指導</li>
          </ul>
        </div>
        
        <h2 id="global-standards" className="scroll-mt-20">世界標準のAI教育 vs 日本の教育環境</h2>
        
        <p>
          インターナショナルスクールと日本の一般的な学校でのAI教育には、アプローチに大きな違いがあります。これらの違いを理解することで、より効果的な教育戦略を立てることができます。
        </p>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-4 text-left font-bold">観点</th>
                <th className="border border-gray-200 p-4 text-left font-bold">インターナショナルスクール</th>
                <th className="border border-gray-200 p-4 text-left font-bold">日本の一般的な学校</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-4 font-medium">学習言語</td>
                <td className="border border-gray-200 p-4">英語（最新技術情報に直接アクセス）</td>
                <td className="border border-gray-200 p-4">日本語（翻訳・解釈による時差）</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium">教育手法</td>
                <td className="border border-gray-200 p-4">プロジェクトベース、探究型</td>
                <td className="border border-gray-200 p-4">講義形式、知識習得重視</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 font-medium">評価方法</td>
                <td className="border border-gray-200 p-4">プロセス重視、ポートフォリオ</td>
                <td className="border border-gray-200 p-4">結果重視、テスト中心</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium">国際連携</td>
                <td className="border border-gray-200 p-4">海外校との協働プロジェクト</td>
                <td className="border border-gray-200 p-4">限定的（一部の先進校のみ）</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 font-medium">企業連携</td>
                <td className="border border-gray-200 p-4">Google、Microsoft等との直接連携</td>
                <td className="border border-gray-200 p-4">地元企業との交流が中心</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 id="bilingual-advantage" className="scroll-mt-20">バイリンガル環境でのAI学習の威力</h2>
        
        <p>
          港区のインターナショナルスクール生が持つ最大の強みは、「バイリンガル・マルチカルチャル環境」です。この環境は、AI学習において以下のような特別な効果をもたらします。
        </p>
        
        <h3>1. 言語処理能力とAI理解の相関</h3>
        <p>
          複数言語を操る子どもたちは、自然と「言語の構造」や「意味の多様性」について深く理解します。これは、AI（特にNLP：自然言語処理）の仕組みを理解する上で大きなアドバンテージとなります。実際に、バイリンガルの子どもたちは、ChatGPTなどのAIとのコミュニケーションにおいて、より効果的なプロンプト（指示文）を作成する能力が高いことが研究で示されています。
        </p>
        
        <h3>2. 文化的多様性とAI倫理理解</h3>
        <p>
          多文化環境で育つ子どもたちは、同じ技術でも文化によって受け取られ方が異なることを肌で感じています。この感覚は、AI技術の社会実装における「バイアス」や「公平性」の問題を理解し、より良いAIシステムを設計する上で極めて重要な素養となります。
        </p>
        
        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h4 className="font-bold text-lg mb-3">バイリンガル環境AI学習の実践例</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold mb-2">🌏 多言語AIチャットボット開発</h5>
              <p className="text-sm">英語・日本語・中国語など、複数言語に対応したAIアシスタントを作成。各言語の特性を理解しながらプログラミング。</p>
            </div>
            <div>
              <h5 className="font-bold mb-2">🎭 文化比較AIアート制作</h5>
              <p className="text-sm">同じテーマを異なる文化的視点でAI画像生成し、文化的バイアスを可視化・分析するプロジェクト。</p>
            </div>
          </div>
        </div>
        
        <h2 id="gaps-challenges" className="scroll-mt-20">インター校AI教育の限界と補完すべき要素</h2>
        
        <p>
          優れた環境を持つ港区のインターナショナルスクールですが、AI教育において以下のような課題・限界も存在します。
        </p>
        
        <h3>1. 日本文化・日本語処理の軽視</h3>
        <p>
          グローバル志向が強いあまり、日本語AI処理や日本文化に根ざしたAI応用が十分に扱われていません。しかし、将来日本で活動する可能性を考えると、日本語の美しさや文化的ニュアンスをAIで表現する技術も重要です。
        </p>
        
        <h3>2. 深い技術理解の不足</h3>
        <p>
          インターナショナルスクールのAI教育は「使い方」に重点が置かれがちで、「仕組みの理解」や「ゼロからの構築」という深い技術的理解を育む機会が限られています。
        </p>
        
        <h3>3. 長期的なキャリア設計の視点不足</h3>
        <p>
          学校教育では「現在のAI技術」に焦点が当たりがちですが、10年後、20年後のAI技術の進化を見据えた「学び続ける力」や「適応力」の育成が十分ではありません。
        </p>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h3 className="text-xl font-bold text-red-700 mb-3">保護者が補完すべき教育要素</h3>
          <ul className="space-y-3 text-red-800 mb-0">
            <li>🇯🇵 <strong>日本語・日本文化とAIの融合</strong>: 俳句生成AI、書道デジタル化など</li>
            <li>🔧 <strong>技術的な深掘り</strong>: プログラミング基礎、アルゴリズム理解</li>
            <li>🔮 <strong>未来予測とアダプタビリティ</strong>: 変化に対応する学習能力</li>
            <li>🤝 <strong>日本社会での AI活用</strong>: 地域課題解決、社会貢献の視点</li>
            <li>🎯 <strong>個性・才能の特化</strong>: 一人ひとりの強みを活かしたAI活用</li>
          </ul>
        </div>
        
        <h2 id="optimal-approach" className="scroll-mt-20">インター生のための最適なAI教育戦略</h2>
        
        <p>
          港区のインターナショナルスクール生にとって最適なAI教育は、学校教育の強みを活かしながら、不足部分を戦略的に補完するアプローチです。
        </p>
        
        <h3>Phase 1: 基盤強化期（Primary years）</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6">
          <h4 className="font-bold text-lg mb-3">重点テーマ：「バイリンガル・バイカルチャルAI基礎」</h4>
          <ul className="space-y-2">
            <li>• 英語でのAI概念理解と日本語での表現練習</li>
            <li>• 文化の違いを認識するAI体験（翻訳精度、画像認識の違いなど）</li>
            <li>• プログラミング思考の日英両言語での習得</li>
            <li>• 創造性とロジックのバランス重視</li>
          </ul>
        </div>
        
        <h3>Phase 2: 専門深化期（Middle School）</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6">
          <h4 className="font-bold text-lg mb-3">重点テーマ：「技術と文化の融合プロジェクト」</h4>
          <ul className="space-y-2">
            <li>• 日本の伝統文化をテーマとしたAIプロジェクト</li>
            <li>• アルゴリズムの数学的理解（日本の数学教育の強みを活用）</li>
            <li>• 国際協働プロジェクトでのリーダーシップ発揮</li>
            <li>• AI倫理の東西比較研究</li>
          </ul>
        </div>
        
        <h3>Phase 3: 実践応用期（High School）</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6">
          <h4 className="font-bold text-lg mb-3">重点テーマ：「グローバル×ローカル課題解決」</h4>
          <ul className="space-y-2">
            <li>• 日本社会の課題をAIで解決するスタートアップ企画</li>
            <li>• 海外大学・企業との本格的な研究協働</li>
            <li>• AIを活用した文化的架け橋プロジェクト</li>
            <li>• 将来のキャリア設計とAI技術の関連性分析</li>
          </ul>
        </div>
        
        <h2 id="selection-criteria" className="scroll-mt-20">補完教育プログラムの選び方</h2>
        
        <p>
          インターナショナルスクールでの教育を補完するAI教育プログラムを選ぶ際は、以下の基準を重視することをお勧めします。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-bold text-lg mb-3 text-blue-800">必須要件</h3>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>✓ バイリンガル対応の指導体制</li>
              <li>✓ 日本文化・日本語AIの取り扱い</li>
              <li>✓ 技術的深掘りが可能なカリキュラム</li>
              <li>✓ 個別最適化された学習プラン</li>
              <li>✓ 国際的な視点での倫理教育</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-bold text-lg mb-3 text-green-800">推奨要件</h3>
            <ul className="text-sm text-green-700 space-y-2">
              <li>✓ 海外大学・企業とのネットワーク</li>
              <li>✓ ポートフォリオ作成支援</li>
              <li>✓ 保護者への定期的な進捗報告</li>
              <li>✓ 同世代のインター生コミュニティ</li>
              <li>✓ 長期的なキャリア相談機能</li>
            </ul>
          </div>
        </div>
        
        <h2 id="case-studies" className="scroll-mt-20">成功事例：港区インター生のAI学習成果</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-3">Case 1: Mika S.（14歳）</h3>
            <p className="text-sm text-gray-600 mb-3">American School in Japan</p>
            <p className="text-gray-700 mb-4">
              日英バイリンガル環境を活かして、俳句生成AIを開発。MITの中学生コンペティションで入賞し、現在スタンフォード大学AI研究室との交流プログラムに参加中。
            </p>
            <p className="text-sm font-medium text-blue-600">
              → 日本文化×最新技術の融合により独自性を発揮
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-3">Case 2: David L.（16歳）</h3>
            <p className="text-sm text-gray-600 mb-3">British School in Tokyo</p>
            <p className="text-gray-700 mb-4">
              多文化環境での経験を活かし、文化的バイアスを軽減するAI翻訳システムを開発。国際的なAI倫理会議で発表し、複数の海外大学から特別推薦を獲得。
            </p>
            <p className="text-sm font-medium text-blue-600">
              → 国際的視野と技術力の組み合わせで社会課題に挑戦
            </p>
          </div>
        </div>
        
        <h2 id="ai-studio-program" className="scroll-mt-20">AIアソビあとりえの港区インター生向け特別プログラム</h2>
        
        <p>
          私たちAIアソビあとりえでは、港区のインターナショナルスクール生の特性を理解し、以下の特別プログラムを提供しています。
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">「Global AI Creators Program」</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">🌏 International Track</h4>
              <p className="text-sm">英語での授業＋日本語文化要素。海外大学進学準備。</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">🇯🇵 Cultural Fusion Track</h4>
              <p className="text-sm">日本の伝統文化とAI技術の融合プロジェクト中心。</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">🔬 Research Track</h4>
              <p className="text-sm">海外大学・研究機関との協働研究プログラム。</p>
            </div>
          </div>
          
          <h4 className="font-bold mb-2">特別サポート内容：</h4>
          <ul className="text-sm space-y-1">
            <li>• バイリンガル講師による個別指導</li>
            <li>• 海外大学出願用ポートフォリオ作成支援</li>
            <li>• スタンフォード・MIT等との交流プログラム</li>
            <li>• 親子で参加できる文化融合ワークショップ</li>
          </ul>
        </div>
        
        <h2 id="conclusion" className="scroll-mt-20">まとめ：港区インター生だからこそ実現できるAI教育</h2>
        
        <p>
          港区のインターナショナルスクール生は、バイリンガル・マルチカルチャル環境という他にはない強みを持っています。この環境を最大限に活かしたAI教育により、単なる「AIを使える人」ではなく、「AIと共に新しい価値を創造できるグローバル人材」として成長することが可能です。
        </p>
        
        <p>
          重要なのは、学校教育の素晴らしい基盤の上に、日本の文化的要素と深い技術理解を戦略的に積み上げることです。これにより、世界のどこでも活躍できる「日本人らしいグローバルAI人材」として、お子様の無限の可能性を開花させることができるでしょう。
        </p>
        
        <p className="font-bold text-lg mt-8">
          港区のインターナショナルスクール環境は、AI時代の教育における最高の土壌の一つです。この恵まれた環境を活かし、お子様が世界を変える創造者となるよう、共に歩んでいきましょう。
        </p>
        
        <h2 id="references" className="scroll-mt-20">参考文献・データ出典</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">主要データ出典</h3>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li>
              <strong>文部科学省</strong>「帰国・外国人児童生徒等の現状について」(2024年)
              <br />外国人学校の現状と国際教育に関する統計データ
            </li>
            <li>
              <strong>出入国在留管理庁</strong>「在留外国人統計」(2024年)
              <br />港区を含む東京都内の外国人住民統計
            </li>
            <li>
              <strong>港区教育委員会</strong>「港区の教育」
              <br />港区内の教育施設と国際教育の現状
            </li>
            <li>
              <strong>インターナショナルスクールタイムズ</strong>調査データ
              <br />港区内インターナショナルスクール4校の詳細情報
            </li>
            <li>
              <strong>Cambridge Assessment International Education</strong>
              <br />国際認定を受けた教育機関の統計とAI教育動向
            </li>
          </ol>
          
          <h3 className="text-lg font-bold mb-4 mt-6">インターナショナルスクール実態調査</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>ローラス・インターナショナルスクール・オブ・サイエンス（港区三田4-1-27）</li>
            <li>西町インターナショナルスクール</li>
            <li>プラザホームズ「港区内インターナショナルスクール調査」</li>
            <li>CHIIK!「港区インターナショナルプリスクール調査」(2024年版)</li>
          </ul>
          
          <p className="text-xs text-gray-600 mt-4">
            ※ 本記事の学校情報・教育プログラム内容は、各校の公式サイトおよび教育機関調査に基づいた2025年6月時点の情報です。
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
                src="/images/blog/EYE-creativity-development.jpg"
                alt="港区エリア別教育ガイド"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/minato-creativity-education-areas" className="hover:text-primary transition-colors">
                  港区で子どもの創造性を育む：麻布・青山・六本木エリア別教育ガイド
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年6月1日</p>
              <p className="text-gray-700 line-clamp-3">
                港区の各エリアの教育環境を活かした創造性育成の方法を詳しく解説します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-education-future.jpg"
                alt="AI時代の教育"
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
                AI時代に子どもたちが身につけるべき創造性や批判的思考力について解説します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-tools-for-kids.jpg"
                alt="子ども向けAIツール"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-tools-for-kids" className="hover:text-primary transition-colors">
                  子ども向けAIツール5選：安全に使える創作支援ツール
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年3月10日</p>
              <p className="text-gray-700 line-clamp-3">
                インターナショナルスクール生にも最適な、安全で教育的価値の高いAIツールを紹介。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-12 shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">インターナショナルスクール生向け特別プログラムのご案内</h3>
        <p className="mb-6 text-lg">
          お子様のバイリンガル環境と国際的な視野を最大限に活かす、オーダーメイドのAI創造教育プログラムをご提供いたします。
          海外大学進学準備やグローバルキャリア形成もサポートします。
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg">
            <Link href="/trial">Global AI Creators Program 体験会</Link>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 text-lg">
            <Link href="/courses">インター生向けコース詳細</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}