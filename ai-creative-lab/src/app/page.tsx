'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/ui/animated-section'
import { AnimatedCard } from '@/components/ui/animated-card'
import { HeroAnimation, HeroItem } from '@/components/ui/hero-animation'
import { ImageSlideshow } from '@/components/ui/image-slideshow'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* ヘッダー/ファーストビュー - 画像スライドショー背景 */}
      <div className="relative w-full h-screen text-white overflow-hidden">
        {/* 背景画像スライドショー */}
        <div className="absolute inset-0">
          <ImageSlideshow 
            images={[
              '/images/sample/top/image_boy_idea.jpg',
              '/images/sample/top/image_art_icon.jpg',
              '/images/sample/top/image_game_icon.jpg',
              '/images/sample/top/image_music_icon.jpg',
              '/images/sample/top/image_story_icon.jpg'
            ]}
            interval={4000}
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto relative z-10 h-full flex items-end justify-start pb-16">
          <HeroAnimation>
            <HeroItem>
              <div className="mb-8 mx-4 max-w-xl bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
                  テクノロジーと創造性の出会い。<br className="hidden sm:block" />
                  子どもたちの好奇心が広がる場所
                </h1>
              </div>
            </HeroItem>
          </HeroAnimation>
        </div>
      </div>
      
      {/* AI創造スタジオについて */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-10">東京AI創造スタジオについて</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
                最新のAI・LLMを用いて、楽しみながら音楽、アート、プログラミングなど様々な創作活動が体験できる教室
              </p>
            </div>
            <div className="order-1 md:order-2 bg-white p-4 rounded-lg shadow-lg overflow-hidden mb-6 md:mb-0">
              <Image 
                src="/images/blog/EYE-ai-tools-for-kids.jpg" 
                alt="東京AI創造スタジオ" 
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 600px"
                quality={85}
                className="w-full h-auto rounded object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* AI創造教育の価値提案セクション */}
      <motion.section 
        className="w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
            AIは道具、大切なのは創造する楽しさと学ぶ力
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div 
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="font-bold text-xl sm:text-2xl mb-3 text-gray-800 flex items-start sm:items-center">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-lg flex-shrink-0 mt-1 sm:mt-0">1</span>
                  <span>子どもたちが出会う新しい学びの風景</span>
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                AIは子どもたちの日常にもなりつつある新しい技術。この変化を前向きに捉え、創造力を育む機会として活用することが大切です。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="font-bold text-xl sm:text-2xl mb-3 text-gray-800 flex items-start sm:items-center">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-lg flex-shrink-0 mt-1 sm:mt-0">2</span>
                  <span>遊びながら学ぶ、創作の世界</span>
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                AIを使って、音楽やアート、ゲーム、物語などを作る体験を通して、創造することの楽しさを発見します。子どもたちのペースに合わせた学びで、自信と興味を育みます。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="font-bold text-xl sm:text-2xl mb-3 text-gray-800 flex items-start sm:items-center">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-lg flex-shrink-0 mt-1 sm:mt-0">3</span>
                  <span>広がる興味と育つ創造力</span>
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                AIという新しい道具を使う経験から、子どもたちは様々な分野に興味を持ち始めます。「こんなこと、楽しい！」という発見が、未来の可能性を豊かにします。
                </p>
              </motion.div>
            </div>
            
          <motion.div 
            className="mt-8 sm:mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-xl font-medium text-gray-700 italic">
              &quot;AIは道具、大切なのは使う人の創造力。子どもたちの『やってみたい』を応援します。&quot;
            </p>
          </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* 先行無料モニター募集バナー */}
      <motion.div 
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <p className="text-xl font-bold mb-1">🎉 先行無料モニター募集中！ 🎉</p>
          <p className="mb-2">開校準備中につき、カリキュラム作りに参加いただける方を募集しています</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="bg-white text-yellow-600 hover:bg-gray-100">
              <a href="#monitor" className="w-full h-full inline-flex items-center justify-center">
                詳細を見る
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* 独自コンセプト説明 */}
      <AnimatedSection id="concept" className="py-16 w-full" direction="up">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">AIを「入口」に、さまざま分野への興味を育む</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg mb-6">
                東京AI創造スタジオは、AIというツールを通じて、創造性・好奇心を引き出す探究型学習を提供します。
                AI・LLMに精通する講師が、最新のAIを用いた創作活動をお子様へレクチャーします。
                「AIで簡単に作る」から「自分で本格的に作る」へのシームレスな成長をサポートします。
              </p>
              <p className="text-lg">
                子どもたちがAIユーザーではなく、クリエイターとして成長できる環境づくりを目指します。
              </p>
            </motion.div>
            <motion.div 
              className="bg-gray-200 h-80 flex items-center justify-center overflow-hidden rounded-lg shadow-lg relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image 
                src="/images/sample/top/image_boy_idea.jpg" 
                alt="コンセプト図解" 
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 800px"
                quality={85}
                className="object-cover hover:scale-105 transition-transform duration-500" 
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* 教室の強み/差別化 */}
      <AnimatedSection className="py-16 w-full bg-gray-50" direction="up">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">従来のAI・プログラミング教室との違い</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md border-2 border-secondary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
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
            </motion.div>
          </div>
          <motion.div 
            className="mt-12 bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
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
          </motion.div>
        </div>
      </AnimatedSection>

 {/* 創造分野への架け橋セクション */}
<AnimatedSection id="creative-fields" className="py-16 w-full" direction="up">
  <div className="container">
    <h2 className="text-3xl font-bold text-center mb-10">AIから広がる5つの創造分野</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={0}>
        <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center overflow-hidden relative">
          <Image 
            src="/images/sample/top/image_music_icon.jpg" 
            alt="音楽" 
            fill
            className="object-cover" 
          />
        </div>
        <h3 className="text-xl font-bold mb-2">音楽</h3>
        <p>AIで作曲の基礎を学び、音楽制作の世界へ。メロディ、リズム、ハーモニーの理解から始まる音楽創作の旅。</p>
      </AnimatedCard>
      <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={1}>
        <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center overflow-hidden relative">
          <Image 
            src="/images/sample/top/image_art_icon.jpg" 
            alt="芸術" 
            fill
            className="object-cover" 
          />
        </div>
        <h3 className="text-xl font-bold mb-2">芸術</h3>
        <p>AIアートから本格的なデジタル/アナログ表現へ。視覚的創造性を育み、自分だけの表現方法を見つける。</p>
      </AnimatedCard>
      <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={2}>
        <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center overflow-hidden relative">
          <Image 
            src="/images/sample/top/image_game_icon.jpg" 
            alt="ゲーム開発" 
            fill
            className="object-cover" 
          />
        </div>
        <h3 className="text-xl font-bold mb-2">ゲーム開発</h3>
        <p>AIを活用したゲームデザインから独自ゲーム制作へ。ゲームの仕組みを理解し、自分のアイデアを形にする。</p>
      </AnimatedCard>
      <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={3}>
        <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center overflow-hidden relative">
          <Image 
            src="/images/sample/top/image_story_icon.jpg" 
            alt="物語創作" 
            fill
            className="object-cover" 
          />
        </div>
        <h3 className="text-xl font-bold mb-2">物語創作</h3>
        <p>AIで物語の構造を学び、創作表現力を磨く。キャラクター、プロット、世界観の構築から始まる物語づくり。</p>
      </AnimatedCard>
      <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={4}>
        <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center overflow-hidden relative">
          <Image 
            src="/images/sample/top/image_engneer_icon.jpg" 
            alt="エンジニアリング" 
            fill
            className="object-cover" 
          />
        </div>
        <h3 className="text-xl font-bold mb-2">エンジニアリング</h3>
        <p>AIモデル理解から本格的プログラミングへ。論理的思考力を養い、テクノロジーの可能性を広げる。</p>
      </AnimatedCard>
          </div>
          
          <motion.div 
            className="mt-12 bg-gray-200 p-6 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4 text-center">コンセプトイメージ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-2 rounded">
                <div className="aspect-square bg-gray-100 flex items-center justify-center mb-2 relative">
                  <Image 
                    src="/images/sample/top/2-game.jpg" 
                    alt="AIで作った音楽" 
                    fill
                    className="object-cover rounded" 
                  />
                </div>
                <p className="text-xs text-center">ゲーム作り</p>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="aspect-square bg-gray-100 flex items-center justify-center mb-2 relative">
                  <Image 
                    src="/images/sample/top/2-art.jpg" 
                    alt="自分で作った音楽" 
                    fill
                    className="object-cover rounded" 
                  />
                </div>
                <p className="text-xs text-center">アート</p>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="aspect-square bg-gray-100 flex items-center justify-center mb-2 relative">
                  <Image 
                    src="/images/sample/top/2-robot.jpg" 
                    alt="AIで作ったアート" 
                    fill
                    className="object-cover rounded" 
                  />
                </div>
                <p className="text-xs text-center">エンジニアリング</p>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="aspect-square bg-gray-100 flex items-center justify-center mb-2 relative">
                  <Image 
                    src="/images/sample/top/2-engi.jpg" 
                    alt="自分で作ったアート" 
                    fill
                    className="object-cover rounded" 
                  />
                </div>
                <p className="text-xs text-center">プログラミング</p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* カリキュラム/コース紹介 */}
      <AnimatedSection className="py-16 w-full bg-gray-50" direction="up">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">創造性を育む段階的なカリキュラム</h2>
          <p className="text-center text-lg mb-10 max-w-3xl mx-auto">まずは全分野を体験し、お子様の興味・適性を発見。その後、好きな分野を深く探究します。</p>
          
          {/* 導入プラン */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md mb-10 border-l-4 border-secondary"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">導入プラン「AI創造の旅」（初月・必修）</h3>
            <p className="italic mb-4">浅く広く様々な創造分野を体験する網羅的プログラム</p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">第1週</h4>
                <p>AIアートとビジュアル表現の世界</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">第2週</h4>
                <p>AIと音楽創作の可能性</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">第3週</h4>
                <p>AIを活用したゲーム・Webデザインの基礎</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">第4週</h4>
                <p>AIによる物語創作とストーリーテリング</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-3">
                <span>⏱️</span>
              </div>
              <p>1ヶ月4回（週1回・60分/回）</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-3">
                <span>🎯</span>
              </div>
              <p>5つの創造分野を体験し、お子様の興味・適性を発見します</p>
            </div>
          </motion.div>
          
          {/* 専門コース */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">専門コース（2ヶ月集中プログラム）</h3>
            <p className="mb-6 italic">興味を見つけた分野を深く探究するための専門コース</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={0}>
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 flex items-center justify-center text-2xl">
                🎵
              </div>
              <h4 className="font-bold text-lg mb-2">「AIミュージシャン」音楽制作コース</h4>
              <p className="text-gray-700 mb-4">AIによる作曲の基礎から、実際の楽曲制作まで</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>音楽理論の基礎とAI作曲ツールの活用</li>
                <li>メロディ、リズム、ハーモニーの理解と創作</li>
                <li>自分だけのオリジナル楽曲制作</li>
                <li>発表と振り返り・次のステップ</li>
              </ul>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={1}>
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 flex items-center justify-center text-2xl">
                🎨
              </div>
              <h4 className="font-bold text-lg mb-2">「AIアーティスト」ビジュアル創作コース</h4>
              <p className="text-gray-700 mb-4">AIアートの可能性を探りながら、視覚表現の世界へ</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>AIイメージ生成の基本と活用テクニック</li>
                <li>色彩、構図、テーマ性の理解</li>
                <li>デジタルとアナログの融合作品制作</li>
                <li>作品展示と振り返り・次のステップ</li>
              </ul>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={2}>
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 flex items-center justify-center text-2xl">
                🎮
              </div>
              <h4 className="font-bold text-lg mb-2">「AIゲームクリエイター」ゲーム開発コース</h4>
              <p className="text-gray-700 mb-4">AIを活用したゲーム企画から簡単な実装まで</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>ゲーム設計の基礎とAIの活用方法</li>
                <li>キャラクター、世界観、ルール設計</li>
                <li>簡単なゲームプロトタイプの作成</li>
                <li>テストプレイと振り返り・次のステップ</li>
              </ul>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={3}>
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4 flex items-center justify-center text-2xl">
                💻
              </div>
              <h4 className="font-bold text-lg mb-2">「AIウェブデザイナー」Webサイト制作コース</h4>
              <p className="text-gray-700 mb-4">AIを活用したウェブデザインと基本的な実装</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Webデザインの基礎とAIツールの活用</li>
                <li>ユーザー体験とインターフェース設計</li>
                <li>自分のポートフォリオサイト制作</li>
                <li>公開と振り返り・次のステップ</li>
              </ul>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={4}>
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4 flex items-center justify-center text-2xl">
                📚
              </div>
              <h4 className="font-bold text-lg mb-2">「AIストーリーテラー」物語創作コース</h4>
              <p className="text-gray-700 mb-4">AIと共に物語の構造を学び、創作表現力を磨く</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>物語構造の基礎とAI文章生成の活用</li>
                <li>キャラクター、プロット、世界観の構築</li>
                <li>オリジナルストーリーの創作</li>
                <li>発表と振り返り・次のステップ</li>
              </ul>
            </AnimatedCard>
          </div>
          
          {/* 親子コース */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md border-2 border-dashed border-secondary mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="flex flex-wrap items-center mb-4">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full mb-4 md:mb-0 flex items-center justify-center text-2xl mr-6">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-2xl font-bold flex-1">「親子でAI探検」コース</h3>
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">全コース対応</span>
            </div>
            
            <p className="mb-6">全ての専門コースを親子で一緒に学べる特別なスタイルです。お子様の創作プロセスを共有し、家庭での継続学習をサポートします。</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="text-secondary mr-2">✓</div>
                <p>お子様の創作プロセスを共有できる</p>
              </div>
              <div className="flex items-start">
                <div className="text-secondary mr-2">✓</div>
                <p>親子での共同創作体験が可能</p>
              </div>
              <div className="flex items-start">
                <div className="text-secondary mr-2">✓</div>
                <p>家庭での継続学習をサポート</p>
              </div>
              <div className="flex items-start">
                <div className="text-secondary mr-2">✓</div>
                <p>世代を超えたクリエイティブコミュニケーション</p>
              </div>
            </div>
          </motion.div>
          
          {/* オンライン対応 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl mr-4">
                🌐
              </div>
              <h3 className="text-xl font-bold">オンラインでの受講も可能です</h3>
            </div>
            <p className="mb-4">教室での対面レッスンだけでなく、オンラインでの参加も選択可能です。同じ教材・カリキュラムで、ご自宅からでも質の高い学びを体験できます。</p>
            <p>ハイブリッド形式（一部対面・一部オンライン）も柔軟に対応しています。</p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* 子供の才能発見・育成アプローチ */}
      <AnimatedSection className="py-16 w-full" direction="up">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">お子様の隠れた才能を発見する4ステップ</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={0}>
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <span>1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI創作を通した興味領域の観察</h3>
              <p>AIツールを使った様々な創作活動を通じて、お子様がどの分野に興味を示すか、どのように取り組むかを専門家が観察します。</p>
            </AnimatedCard>
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={1}>
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <span>2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">得意分野の特定と個別アドバイス</h3>
              <p>お子様の反応や作品から、潜在的な才能や適性を分析。個々の強みを活かす方向性をアドバイスします。</p>
            </AnimatedCard>
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={2}>
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <span>3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">専門分野体験の提案とマッチング</h3>
              <p>特定された得意分野をさらに深く探求できるワークショップや特別プログラムを提案。適切な学習環境とのマッチングを行います。</p>
            </AnimatedCard>
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={3}>
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <span>4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">長期的な才能育成プランの設計</h3>
              <p>お子様の成長に合わせた段階的な学習計画を提案。必要に応じて外部の専門教室や発展的な学習機会も紹介します。</p>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>


      {/* 先行モニター募集セクション */}
      <AnimatedSection id="monitor" className="py-16 w-full bg-gradient-to-r from-yellow-50 to-yellow-100" direction="up">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-6">🎉 先行無料モニター募集中！</h2>
          <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
            当教室は現在開校準備中ですが、カリキュラム完成に向けて先行無料モニターを募集しています。
            あなたのフィードバックが、新しいAI教室を創り上げます。
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={0}>
              <h3 className="text-xl font-bold mb-4">先行モニター特典</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span>無料でカリキュラムを体験できる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span>あなたの希望・フィードバックが実際のカリキュラムに反映される</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span>正式開校後の優先入会権と特別割引</span>
                </li>
              </ul>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={1}>
              <h3 className="text-xl font-bold mb-4">参加条件</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>港区および周辺地域にお住まいの小中学生とその保護者</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>月2回程度の授業参加が可能な方</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>簡単なアンケートやフィードバックにご協力いただける方</span>
                </li>
              </ul>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" index={2}>
              <h3 className="text-xl font-bold mb-4">カリキュラムは皆様の声で進化します</h3>
              <p className="mb-4">私たちは「子どもたちが本当に楽しく学べるAI教室」を目指しています。そのため、カリキュラム設計段階から保護者様とお子様のご意見を取り入れたいと考えています。</p>
              <p className="italic">皆様のフィードバックを反映した、世界でひとつだけのAI創造教室を一緒に作り上げていきましょう。</p>
            </AnimatedCard>
          </div>
          
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <h3 className="text-xl font-bold mb-6">お問い合わせ・モニター申し込み</h3>
            <p className="mb-6">下記の公式LINEアカウントから、お気軽にお問い合わせください。<br />「モニター希望」とメッセージいただければ、詳細をご案内いたします。</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05B64B]">
                <a href="https://lin.ee/kehl7g7" target="_blank" className="w-full h-full inline-flex items-center justify-center">
                  <span className="mr-2">LINE公式アカウントを追加する</span>
                  <span>→</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="py-16 w-full" direction="up">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">よくあるご質問</h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-bold mb-2">対象年齢は何歳からですか？</h3>
              <p>基本的には小学校1年生（6歳）から中学3年生（15歳）までを対象としています。特に小学3年生〜6年生の年齢層がもっとも創造性と学習能力のバランスが取れており、効果的です。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-bold mb-2">事前にプログラミングやAIの知識は必要ですか？</h3>
              <p>いいえ、まったく必要ありません。むしろ先入観なく創造的に取り組める方が、より多くの可能性を発見できます。すべての必要なスキルは授業の中で段階的に学んでいきます。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-bold mb-2">どのようなAIツールを使用しますか？</h3>
              <p>年齢や目的に応じて、安全で教育的価値の高いAIツールを厳選して使用します。画像生成AI、音楽生成AI、テキスト生成AI、簡易的なプログラミング支援AIなど、多様なツールを体験できます。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-bold mb-2">親も一緒に参加することはできますか？</h3>
              <p>はい、当教室の特徴として「親子でAI探検」コースをご用意しています。すべての専門コースで親子参加が可能です。お子様の創作プロセスを共有でき、家庭での継続学習もスムーズになります。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-bold mb-2">オンラインでも受講できますか？</h3>
              <p>はい、すべてのコースはオンラインでも受講可能です。対面授業と同じカリキュラム・教材を使用し、質の高い学習体験を提供します。また、対面とオンラインを組み合わせたハイブリッド形式での受講も可能です。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-bold mb-2">授業の振替は可能ですか？</h3>
              <p>はい、3日前までにご連絡いただければ、同月内での振替が可能です。ただし、定員の関係で希望の日時に添えない場合もございますので、あらかじめご了承ください。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-bold mb-2">モニター参加とはどのようなものですか？</h3>
              <p>開校準備中の現段階で、カリキュラム開発に参加いただく特別プログラムです。無料で授業を体験でき、皆様のフィードバックを実際のカリキュラムに反映させていきます。正式開校後の優先入会権と特別割引も提供しています。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-bold mb-2">体験授業はどのように申し込めばよいですか？</h3>
              <p>このページ上部または下部の「無料体験授業に申し込む」ボタンから申し込みフォームにお進みいただけます。また、LINE公式アカウントからのお申し込みも受け付けております。</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* 申し込み/問い合わせセクション */}
      <AnimatedSection className="py-16 w-full bg-secondary text-white" direction="up">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">無料体験授業で創造の旅をスタート</h2>
          
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-lg mb-6">【オープン準備中】お子様の可能性を広げる第一歩として、まずは無料体験授業にお申し込みください。AIを活用した創作体験を通じて、新しい学びの世界を体感していただけます。</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
                <Link href="https://lin.ee/kehl7g7" target="_blank" className="w-full h-full inline-flex items-center justify-center">
                  無料体験授業に申し込む
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">詳しい資料をご希望の方はこちら</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                <Link href="/contact" className="w-full h-full inline-flex items-center justify-center">
                  詳細資料をダウンロード
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
