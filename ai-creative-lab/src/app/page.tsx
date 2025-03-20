import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* ヘッダー/ファーストビュー */}
      <div className="w-full bg-gray-900 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AIは目的地ではなく、創造の旅の入口
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            お子様の無限の可能性と才能を、最先端テクノロジーから見つける
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary">
              <Link href="/trial" className="w-full h-full inline-flex items-center justify-center">
                無料体験授業に申し込む
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <a href="#concept">詳しく見る</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* 独自コンセプト説明 */}
      <section id="concept" className="py-16 w-full">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">AIを「ゴール」ではなく「入口」に</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-6">
                AI創造ラボは、AIというツールを通じて、創造性・好奇心を引き出す探究型学習を提供します。
                音楽、芸術、プログラミング、ゲーム開発など多様な創造分野への架け橋となり、
                「AIで簡単に作る」から「自分で本格的に作る」へのシームレスな成長をサポートします。
              </p>
              <p className="text-lg">
                子どもたちがAIユーザーではなく、クリエイターとして成長できる環境を整えています。
              </p>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <p className="text-gray-500">コンセプト図解（後で実装）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 教室の強み/差別化 */}
      <section className="py-16 w-full bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">従来のAI・プログラミング教室との違い</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-500">従来の教室</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>AIの使い方習得が目的</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>子供はAIユーザーになる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>単一スキルの習得に留まる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>AIツールの操作方法を教える</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-secondary">
              <h3 className="text-xl font-bold mb-4 text-secondary">当教室</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>AIは創造性を引き出す入口</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>子供はクリエイターになる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>多様な創造分野への架け橋</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>個々の才能と適性を発見・育成</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">学びの旅</h3>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span>Step 1</span>
                </div>
                <p>AIで創作体験</p>
              </div>
              <div className="hidden md:block">→</div>
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span>Step 2</span>
                </div>
                <p>興味分野の発見</p>
              </div>
              <div className="hidden md:block">→</div>
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span>Step 3</span>
                </div>
                <p>基礎スキル習得</p>
              </div>
              <div className="hidden md:block">→</div>
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span>Step 4</span>
                </div>
                <p>専門分野への発展</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 創造分野への架け橋セクション */}
      <section className="py-16 w-full">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">AIから広がる5つの創造分野</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span>🎵</span>
              </div>
              <h3 className="text-xl font-bold mb-2">音楽</h3>
              <p>AIで作曲の基礎を学び、音楽制作の世界へ。メロディ、リズム、ハーモニーの理解から始まる音楽創作の旅。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span>🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">芸術</h3>
              <p>AIアートから本格的なデジタル/アナログ表現へ。視覚的創造性を育み、自分だけの表現方法を見つける。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span>🎮</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ゲーム開発</h3>
              <p>AIを活用したゲームデザインから独自ゲーム制作へ。ゲームの仕組みを理解し、自分のアイデアを形にする。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span>📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">物語創作</h3>
              <p>AIで物語の構造を学び、創作表現力を磨く。キャラクター、プロット、世界観の構築から始まる物語づくり。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span>💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2">エンジニアリング</h3>
              <p>AIモデル理解から本格的プログラミングへ。論理的思考力を養い、テクノロジーの可能性を広げる。</p>
            </div>
          </div>
          <div className="mt-12 bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">子供たちの作品例</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-2 rounded">
                <div className="aspect-square bg-gray-100 flex items-center justify-center mb-2">
                  <p className="text-sm text-gray-500">AI作品</p>
                </div>
                <p className="text-xs text-center">AIで作った音楽</p>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="aspect-square bg-gray-100 flex items-center justify-center mb-2">
                  <p className="text-sm text-gray-500">自作品</p>
                </div>
                <p className="text-xs text-center">自分で作った音楽</p>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="aspect-square bg-gray-100 flex items-center justify-center mb-2">
                  <p className="text-sm text-gray-500">AI作品</p>
                </div>
                <p className="text-xs text-center">AIで作ったアート</p>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="aspect-square bg-gray-100 flex items-center justify-center mb-2">
                  <p className="text-sm text-gray-500">自作品</p>
                </div>
                <p className="text-xs text-center">自分で作ったアート</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* カリキュラム/コース紹介 */}
      <section className="py-16 w-full bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">創造性を育む段階的なカリキュラム</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4">基本コース</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-2">AI探究基礎</h4>
                <p className="text-gray-700 mb-2">月額15,000〜25,000円</p>
                <p>週1回60分、少人数制</p>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-bold text-lg mb-2">カリキュラム概要</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>AIツールの基本操作と可能性の探索</li>
                  <li>5つの創造分野を順番に体験</li>
                  <li>個人の興味・適性の発見</li>
                  <li>基礎的な創作スキルの習得</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">特別ワークショップ</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">音楽AI作曲週末コース</h4>
              <p className="text-gray-700 mb-2">2日間, 20,000円</p>
              <p>AIを使った作曲の基礎から、実際の楽曲制作まで。音楽理論の初歩も学べる集中コース。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">ゲーム開発マラソン</h4>
              <p className="text-gray-700 mb-2">休日集中, 30,000円</p>
              <p>AIを活用したゲームデザインから始め、簡単なゲームを完成させるまでの開発プロセスを体験。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">親子で学ぶAIアート教室</h4>
              <p className="text-gray-700 mb-2">月1回, 15,000円</p>
              <p>親子でAIアートの可能性を探りながら、デジタルとアナログの表現技法を学ぶ。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">夏休み特別プロジェクト</h4>
              <p className="text-gray-700 mb-2">5日間, 50,000円</p>
              <p>夏休み期間中に集中して取り組む創作プロジェクト。企画から完成まで、本格的な創作プロセスを体験。</p>
            </div>
          </div>
          
          <div className="mt-10 bg-gray-200 h-60 flex items-center justify-center">
            <p className="text-gray-500">授業風景の写真/動画（後で実装）</p>
          </div>
        </div>
      </section>

      {/* 子供の才能発見・育成アプローチ */}
      <section className="py-16 w-full">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">お子様の隠れた才能を発見する4ステップ</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <span>1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI創作を通した興味領域の観察</h3>
              <p>AIツールを使った様々な創作活動を通じて、お子様がどの分野に興味を示すか、どのように取り組むかを専門家が観察します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <span>2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">得意分野の特定と個別アドバイス</h3>
              <p>お子様の反応や作品から、潜在的な才能や適性を分析。個々の強みを活かす方向性をアドバイスします。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <span>3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">専門分野体験の提案とマッチング</h3>
              <p>特定された得意分野をさらに深く探求できるワークショップや特別プログラムを提案。適切な学習環境とのマッチングを行います。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <span>4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">長期的な才能育成プランの設計</h3>
              <p>お子様の成長に合わせた段階的な学習計画を提案。必要に応じて外部の専門教室や発展的な学習機会も紹介します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 講師/メンター紹介 */}
      <section className="py-16 w-full bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">創造性と可能性を引き出す専門家チーム</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-center">山田 太郎</h3>
              <p className="text-gray-600 text-center mb-4">教室代表 / AIエンジニア</p>
              <p>大手IT企業でのAI開発経験を活かし、テクノロジーと教育の融合に取り組む。子どもの創造性を引き出す独自メソッドを開発。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-center">佐藤 花子</h3>
              <p className="text-gray-600 text-center mb-4">クリエイティブディレクター</p>
              <p>デジタルアートとデザインの専門家。子どもの視覚的表現力を育てるプログラムを担当。多数の展示会やワークショップ実績あり。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-center">鈴木 一郎</h3>
              <p className="text-gray-600 text-center mb-4">音楽プロデューサー</p>
              <p>作曲家・音楽プロデューサーとして活躍。AIを活用した音楽創作プログラムを開発し、子どもたちの音楽的感性を育てる。</p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">指導理念</h3>
            <p className="text-center text-lg italic">「答えを教えるのではなく、子供が自ら考え、発見する喜びを大切に」</p>
          </div>
        </div>
      </section>

      {/* 保護者の声/実績 */}
      <section className="py-16 w-full">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">保護者様からのフィードバック</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold">田中様（小3男子の母）</h3>
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="mb-4">「息子はゲームが好きでしたが、ただ遊ぶだけでなく自分でも作れることを知り、目の輝きが変わりました。今では自分のゲームアイデアを形にするために熱心に取り組んでいます。」</p>
              <p className="text-sm text-gray-600">発見された才能：ゲームデザイン、論理的思考</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold">佐々木様（小5女子の父）</h3>
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="mb-4">「娘はAIで作った絵から発展して、今ではデジタルイラストに夢中です。先生方が個性を尊重してくださるので、自信を持って表現できるようになりました。」</p>
              <p className="text-sm text-gray-600">発見された才能：ビジュアルデザイン、色彩感覚</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold">伊藤様（小4男子の母）</h3>
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="mb-4">「AIで作曲を体験したことがきっかけで、息子は音楽の才能が開花しました。今では音楽教室にも通い始め、将来の夢も見つかったようです。」</p>
              <p className="text-sm text-gray-600">発見された才能：音楽的センス、リズム感</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <p>保護者満足度</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">92%</div>
              <p>継続率</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">88%</div>
              <p>才能発見率</p>
            </div>
          </div>
        </div>
      </section>

      {/* 追加サービス紹介 */}
      <section className="py-16 w-full bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">お子様の創造性をさらに広げる特別サービス</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">AIツール自宅学習パッケージ</h3>
              <p className="text-gray-700 mb-4">月額3,000円</p>
              <p>ご家庭でも継続的に学習できるAIツールのアクセス権と、段階的な学習ガイドを提供します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">親向け教育コンサルティング</h3>
              <p className="text-gray-700 mb-4">30,000円〜</p>
              <p>お子様の才能や適性に合わせた教育方針や進路についての専門的なアドバイスを提供します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">オリジナルAI学習キット</h3>
              <p className="text-gray-700 mb-4">5,000〜10,000円</p>
              <p>創造分野別の学習キット。AIと実際の創作活動を組み合わせた独自教材で、自宅での創作活動をサポートします。</p>
            </div>
          </div>
          
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-lg">教室だけでなく、ご家庭でも継続的な成長をサポートします。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 w-full">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">よくあるご質問</h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">対象年齢は何歳からですか？</h3>
              <p>基本的には小学校1年生（6歳）から中学3年生（15歳）までを対象としています。特に小学3年生〜6年生の年齢層がもっとも創造性と学習能力のバランスが取れており、効果的です。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">事前にプログラミングやAIの知識は必要ですか？</h3>
              <p>いいえ、まったく必要ありません。むしろ先入観なく創造的に取り組める方が、より多くの可能性を発見できます。すべての必要なスキルは授業の中で段階的に学んでいきます。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">どのようなAIツールを使用しますか？</h3>
              <p>年齢や目的に応じて、安全で教育的価値の高いAIツールを厳選して使用します。画像生成AI、音楽生成AI、テキスト生成AI、簡易的なプログラミング支援AIなど、多様なツールを体験できます。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">授業の振替は可能ですか？</h3>
              <p>はい、3日前までにご連絡いただければ、同月内での振替が可能です。ただし、定員の関係で希望の日時に添えない場合もございますので、あらかじめご了承ください。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">体験授業はどのように申し込めばよいですか？</h3>
              <p>このページ上部または下部の「無料体験授業に申し込む」ボタンから申し込みフォームにお進みいただけます。また、お電話でのお申し込みも受け付けております。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 申し込み/問い合わせセクション */}
      <section className="py-16 w-full bg-secondary text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">無料体験授業で創造の旅をスタート</h2>
          
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-lg mb-6">お子様の可能性を広げる第一歩として、まずは無料体験授業にお申し込みください。AIを活用した創作体験を通じて、新しい学びの世界を体感していただけます。</p>
            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
              <Link href="/trial" className="w-full h-full inline-flex items-center justify-center">
                無料体験授業に申し込む
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">詳しい資料をご希望の方はこちら</p>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
              <Link href="/contact" className="w-full h-full inline-flex items-center justify-center">
                詳細資料をダウンロード
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
