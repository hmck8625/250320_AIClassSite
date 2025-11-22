'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const campaignCode = '#AZB2311';
const defaultMessage = `体験希望 ${campaignCode}`;
const defaultShortLink = 'https://lin.ee/kehl7g7';

const menuOptions = [
  {
    title: '画像生成 → えほんZINE',
    description: '生成AIで描いた世界をA3一枚折りのZINEに。構図・登場人物・タイトルまで書き込んで出版して持ち帰ります。',
    deliverable: 'A3 ZINE（フルカラー印刷）',
    image: '/images/sample/top/image_story_icon.jpg',
    imageAlt: 'えほんZINEの制作例',
  },
  {
    title: 'らくがき → 動画化',
    description: 'タブレットで描いた落書きをアニメーション化。GIF/MP4を生成し、QR付きの台紙でお渡しします。',
    deliverable: '動画QR台紙 + データDLリンク',
    image: '/images/sample/top/image_art_icon.jpg',
    imageAlt: 'らくがきアニメのサンプル',
  },
  {
    title: 'BGMメーカー × サウンドロゴ',
    description: 'BGMループとサウンドロゴをAI伴奏で合成し、作曲者カードにクレジット。音で自己紹介ができます。',
    deliverable: 'MP3 QR + 作曲者カード',
    image: '/images/sample/top/image_music_icon.jpg',
    imageAlt: 'サウンドロゴ制作の様子',
  },
  {
    title: 'AIキャラ作り × 会話体験',
    description: 'キャラクター設定を一緒に作り、AIエージェントと対話。設定カードと会話ログQRを持ち帰ります。',
    deliverable: '設定カード + 会話ログQR',
    image: '/images/sample/top/image_game_icon.jpg',
    imageAlt: 'AIキャラ設定カードの例',
  },
];

const flowSteps = [
  { time: '0–8分', title: 'チェックイン＆ルール', detail: '当日の禁止事項と「やさしい言葉ルール」を共有。' },
  { time: '8–12分', title: 'メニュー選択', detail: '低学年は選択式UI、高学年は自由記述でテーマを決定。' },
  { time: '12–65分', title: '制作タイム', detail: '講師とアシスタントが制作を伴走。必要に応じてAIリテラシーも補足。' },
  { time: '65–80分', title: '発表', detail: '親子合流推奨。作品の背景やこだわりを発表します。' },
  { time: '80–90分', title: '出版・配布', detail: '印刷 / QR台紙を受け取って終了。オプション加工もその場で受付。' },
];

const deliverables = [
  'ZINE（えほん）',
  '動画QR台紙（GIF / MP4）',
  'MP3 QR + 作曲者カード',
  'キャラ設定カード',
  'オプション：額装プリント (+¥800)',
  'オプション：ホロカード (+¥300)',
];

const safetyPolicies = [
  '実名や学校名などの個人情報は制作物に入れません。',
  '実在人物の写真は扱わず、イラスト中心で進行します。',
  '合成音声は既存ボイスのみ使用。声クローンは採用しません。',
  '写真・作品の記録は保護者の同意を得た場合のみ共有します。',
  'すべて「やさしい言葉ルール」で運営し、トラブルを防ぎます。',
];

const faqItems = [
  {
    question: 'PCは必要ですか？',
    answer: '不要です。制作デバイス・ペンタブ・ヘッドホンはすべて会場で用意しています。',
  },
  {
    question: 'データの受け取り方法は？',
    answer: '各作品のQR台紙にアクセスURLを印刷してお渡しします。ご家族のスマホで読み取れます。',
  },
  {
    question: '英語対応は可能ですか？',
    answer: '可能です。タイトルや発表コメントを英語で行いたい場合は事前にお知らせください。',
  },
  {
    question: '申込方法は？',
    answer: 'LINEで「体験希望」とメッセージを送るだけ。自動返信で日程・メニュー選択が完了します。',
  },
];

const upcomingDates = [
  { slot: '4/27 (土) 10:00-11:30', status: '残席わずか' },
  { slot: '4/28 (日) 13:00-14:30', status: '受付中' },
  { slot: '5/06 (月・祝) 10:00-11:30', status: '受付中' },
];

const courseModules = [
  { title: 'M1 物語と世界観', detail: 'ZINEをさらに発展させ、装丁・世界観設計を深掘り。' },
  { title: 'M2 音と言葉', detail: 'BGM制作からラジオCMづくりへ。録音と声の演出も学びます。' },
  { title: 'M3 漫画・アニメ', detail: '4コマから短編アニメーションまで。ストーリーボード制作も体験。' },
  { title: 'M4 ゲーム & カード', detail: 'カードゲーム設計とデジタル対戦を組み合わせ、大会開催まで伴走。' },
];

const concernItems = [
  {
    icon: Compass,
    title: '何を学べば良いの？',
    body: '“AIの基本”だけでは腹落ちしづらい。作品に落とし込むゴールが必要です。',
  },
  {
    icon: ShieldCheck,
    title: '安全は大丈夫？',
    body: '誤情報や個人情報の扱いが不安。ルール化された環境で体験したい。',
  },
  {
    icon: Sparkles,
    title: '本当に続く？',
    body: '成果が見えて家で話題になる習い事がいい。続く工夫が欲しい。',
  },
];

const atelierAnswers = [
  {
    title: '講義ではなく「出版・上映・放送」のゴール設計',
    detail: '作品が家に残る（ZINE / 動画 / MP3 / QR）から、学びが続きます。',
  },
  {
    title: '安全×リテラシーは体験の中に埋め込む',
    detail: '実名・学校名NG／人物写真は扱わない／声クローン不使用／同意制で記録。',
  },
  {
    title: 'EQ×称賛のデザイン',
    detail: 'ほめ言葉の型・ミニ発表で自己効力感とやさしい言葉を育てます。',
  },
];

type LineCtaSectionProps = {
  id: string;
  title: string;
  description: string;
  location: string;
  notes?: string[];
  footnote?: string;
  tone?: 'dark' | 'light';
  primaryLabel?: string;
  messagePrefill?: string;
  addFriendUrl: string;
  buildMessageUrl: (prefill: string) => string;
  onPrimaryClick: (location: string) => void;
};

const LineCtaSection = ({
  id,
  title,
  description,
  location,
  notes = [],
  footnote,
  tone = 'dark',
  primaryLabel = 'LINEで申し込む・質問する',
  messagePrefill = defaultMessage,
  addFriendUrl,
  buildMessageUrl,
  onPrimaryClick,
}: LineCtaSectionProps) => {
  const isDark = tone === 'dark';
  const messageUrl = buildMessageUrl(messagePrefill);

  return (
    <section
      id={id}
      className={cn(
        'py-16',
        isDark ? 'bg-[#0A1E3F] text-white' : 'bg-white text-[#0A1E3F]',
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div>
              <p className={cn('text-sm font-semibold uppercase tracking-wide', isDark ? 'text-[#7EB5FF]' : 'text-[#2F7CFF]')}>
                LINE CTA
              </p>
              <h2 className="text-3xl font-bold mt-2">{title}</h2>
              <p className={cn('mt-4 text-lg leading-relaxed', isDark ? 'text-white/90' : 'text-[#0A1E3F]/80')}>
                {description}
              </p>
            </div>

            {notes.length > 0 && (
              <ol className="list-decimal space-y-2 pl-5 text-base">
                {notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ol>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-[#2F7CFF] hover:bg-[#1C5ED8] text-white w-full sm:w-auto"
                onClick={() => onPrimaryClick(location)}
              >
                <Link href={messageUrl} target="_blank" rel="noreferrer">
                  {primaryLabel}
                </Link>
              </Button>
              <div className="flex flex-col text-sm">
                <Link
                  href={addFriendUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#2F7CFF]"
                >
                  Add Friendリンク（{addFriendUrl}）
                </Link>
                <Link
                  href={messageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline text-[#2F7CFF]"
                >
                  トーク直行（テンプレ文つき）
                </Link>
              </div>
            </div>

            {footnote && (
              <p className={cn('text-sm', isDark ? 'text-white/70' : 'text-[#0A1E3F]/70')}>
                {footnote}
              </p>
            )}
          </div>

          <div className="hidden md:flex w-full max-w-sm flex-col gap-4">
            <div className="relative h-48 w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/sample/top/image_boy_idea.jpg"
                alt="体験会の様子"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-32 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/sample/top/image_art_icon.jpg"
                  alt="制作風景"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/sample/top/image_music_icon.jpg"
                  alt="BGM制作の様子"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type MobileStickyCtaProps = {
  buildMessageUrl: (prefill: string) => string;
  onLineClick: (location: string) => void;
  onViewDates: (location: string) => void;
};

const MobileStickyCta = ({ buildMessageUrl, onLineClick, onViewDates }: MobileStickyCtaProps) => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur shadow-[0_-4px_12px_rgba(10,30,63,0.2)] px-4 py-3">
    <div className="flex gap-3">
      <Button
        className="flex-1 bg-[#2F7CFF] hover:bg-[#1C5ED8]"
        onClick={() => onLineClick('sticky')}
      >
        <Link href={buildMessageUrl(defaultMessage)} target="_blank" rel="noreferrer">
          LINEで申し込む
        </Link>
      </Button>
      <Button
        variant="outline"
        className="flex-1 border-[#2F7CFF] text-[#2F7CFF]"
        onClick={() => onViewDates('sticky')}
      >
        日程を見る
      </Button>
    </div>
  </div>
);

const HeroSection = ({
  lineDisplayId,
  lineAddFriendUrl,
  buildMessageUrl,
  onLineClick,
  onViewDates,
}: {
  lineDisplayId: string;
  lineAddFriendUrl: string;
  buildMessageUrl: (prefill: string) => string;
  onLineClick: (location: string) => void;
  onViewDates: (location: string) => void;
}) => (
  <section id="hero" className="relative isolate overflow-hidden bg-[#0A1E3F] text-white">
    <Image
      src="/images/sample/top/image_boy_idea.jpg"
      alt="体験会の様子"
      fill
      priority
      className="object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E3F] via-[#0A1E3F]/90 to-[#142B57]/80" />
    <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7EB5FF]">
            ATELIER SPARK
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            遊んで、作って、飾って帰る。<br />
            小学生〜中学生前半のための“出版型”AI体験会 in 麻布・白金
          </h1>
          <p className="text-xl text-white/90">
            4メニューから選べます｜少人数制｜親子参加OK
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-[#2F7CFF] hover:bg-[#1C5ED8] text-white"
              onClick={() => onLineClick('hero')}
            >
              <Link href={buildMessageUrl(defaultMessage)} target="_blank" rel="noreferrer">
                LINEで申し込む・質問する
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => onViewDates('hero')}
            >
              日程を見る
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              <Link href="#about">場所を見る</Link>
            </Button>
          </div>
          <div className="rounded-2xl bg-white/10 p-4 text-sm leading-relaxed">
            <p className="font-semibold text-[#7EB5FF] mb-1">友だち追加はこちら</p>
            <p className="flex items-center gap-2 text-white/80">
              OA ID：{lineDisplayId}
              <span className="hidden sm:inline text-xs text-white/60">（PCでは作品サンプルを表示）</span>
            </p>
            <Link href={lineAddFriendUrl} target="_blank" rel="noreferrer" className="underline text-white">
              Add Friendリンクを開く
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <div className="relative h-64 rounded-[28px] overflow-hidden shadow-2xl">
            <Image
              src="/images/sample/top/image_boy_idea.jpg"
              alt="ATELIER SPARK 体験の様子"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 text-[#0A1E3F]">
              <p className="text-sm font-semibold text-[#2F7CFF]">ダミー写真</p>
              <p className="text-base font-semibold">親子で作品を読み合う時間</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: '/images/sample/top/image_story_icon.jpg', alt: 'ZINE制作例' },
              { src: '/images/sample/top/image_music_icon.jpg', alt: 'サウンドロゴ制作例' },
            ].map((image) => (
              <div key={image.src} className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function LandingPage() {
  const rawLineId = process.env.NEXT_PUBLIC_LINE_OA_ID;
  const normalizedLineId = rawLineId?.startsWith('@') ? rawLineId.substring(1) : rawLineId;
  const lineAddFriendUrl = normalizedLineId ? `https://line.me/R/ti/p/@${normalizedLineId}` : defaultShortLink;
  const lineDisplayId = normalizedLineId ? `@${normalizedLineId}` : 'lin.ee/kehl7g7';

  const buildMessageUrl = useCallback(
    (prefill: string) =>
      normalizedLineId
        ? `https://line.me/R/oaMessage/@${normalizedLineId}/?${encodeURIComponent(prefill)}`
        : lineAddFriendUrl,
    [normalizedLineId, lineAddFriendUrl],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    let hasUtm = false;
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
      const value = params.get(key);
      if (value) {
        document.cookie = `${key}=${value}; path=/; expires=${expires}`;
        hasUtm = true;
      }
    });
    if (hasUtm) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'utm_captured',
      });
    }
  }, []);

  const handleLineCtaClick = useCallback((location: string) => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click_line_cta',
      location,
    });
  }, []);

  const handleViewDates = useCallback((location: string) => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'view_dates',
      location,
    });
    const section = document.getElementById('schedule-pricing');
    section?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToMenus = useCallback(() => {
    if (typeof window === 'undefined') return;
    document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const [datesExpanded, setDatesExpanded] = useState(false);
  const toggleDates = () => {
    const next = !datesExpanded;
    setDatesExpanded(next);
    if (next) {
      handleViewDates('schedule-pricing');
    }
  };

  const eventJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: '出版型AI体験会 in 麻布・白金',
      startDate: '2025-04-27T10:00:00+09:00',
      endDate: '2025-04-27T11:30:00+09:00',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'ATELIER SPARK Lab（麻布・白金）',
        address: '東京都港区麻布・白金エリア',
      },
      image: ['https://tokyo-ai-creative.studio/images/sample/top/image_boy_idea.jpg'],
      description: '遊んで、作って、飾って帰る「出版型」AI体験会。LINEから参加申込できます。',
      organizer: {
        '@type': 'Organization',
        name: '東京AI創造スタジオ / ATELIER SPARK',
        url: 'https://tokyo-ai-creative.studio',
      },
      offers: {
        '@type': 'Offer',
        price: '4400',
        priceCurrency: 'JPY',
        availability: 'https://schema.org/InStock',
        url: 'https://tokyo-ai-creative.studio/lp#line-cta',
        validFrom: '2025-03-20T09:00:00+09:00',
      },
    }),
    [],
  );

  return (
    <>
      <Script id="lp-event-jsonld" type="application/ld+json">
        {JSON.stringify(eventJsonLd)}
      </Script>
      <div className="bg-white pb-24 md:pb-0">
        <HeroSection
          lineDisplayId={lineDisplayId}
          lineAddFriendUrl={lineAddFriendUrl}
          buildMessageUrl={buildMessageUrl}
          onLineClick={handleLineCtaClick}
          onViewDates={handleViewDates}
        />

        <section id="why" className="py-20 bg-white">
          <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] items-start">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">WHY NOW</p>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mt-3">
                  「必要だから」では続かない。作りたいから学ぶ体験型AI。
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  AIは講義ではなく、<span className="font-semibold">“作品にする体験”</span>で身につきます。ATELIER SPARKは、
                  <span className="font-semibold">5秒の「おおっ！」→制作→出版（ZINE/QR）</span>までをその場で完了。
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#0A1E3F]/70">親の3つの心配ごと</p>
                <div className="grid gap-4">
                  {concernItems.map(({ icon: Icon, title, body }) => (
                    <div key={title} className="flex items-start gap-4 rounded-2xl border border-[#E1E8FF] p-5 shadow-sm">
                      <Icon className="h-6 w-6 text-[#2F7CFF]" aria-hidden />
                      <div>
                        <p className="text-lg font-semibold leading-snug">{title}</p>
                        <p className="text-gray-700 leading-7">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-[#F5F7FF] p-6 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">1分ストーリー：小3のSくん</p>
                <p className="text-gray-800 leading-8">
                  Sくんは“AIの説明”ではピンと来なかった。でも、好きなテーマで1冊のZINEを出版した日、家で家族に読んでもらい、
                  翌週はBGMとサウンドロゴを足して「ぼくの作品」に。SくんにとってAIは<span className="font-semibold">“難しい道具”から、想いを形にする相棒</span>に変わりました。
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#0A1E3F]/70">私たちの答え（ATELIER SPARK）</p>
                <ul className="space-y-3">
                  {atelierAnswers.map((answer) => (
                    <li key={answer.title} className="rounded-2xl border border-gray-200 p-4 bg-white/60">
                      <p className="font-semibold leading-snug">{answer.title}</p>
                      <p className="text-gray-700 leading-7">{answer.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-lg font-medium text-[#0A1E3F] leading-8">
                  「必要だから学ぶ」ではなく、「作りたいから学ぶ」。その結果として、安全な使い方と質問力が自然に身につきます。
                </p>
                <button
                  type="button"
                  onClick={() => scrollToMenus()}
                  className="mt-3 text-[#2F7CFF] underline font-semibold"
                >
                  まずは4メニューを見る
                </button>
              </div>
            </div>

            <div className="relative w-full h-[460px] rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src="/images/sample/top/image_story_icon.jpg"
                alt="ZINEを手にとって読む親子のイメージ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 text-[#0A1E3F]">
                <p className="text-sm font-semibold text-[#2F7CFF]">作品サンプル</p>
                <p className="text-lg font-bold">ZINE + QR出版で家に飾れる</p>
                <p className="text-sm text-[#0A1E3F]/80">親子で読み返し、次の制作テーマの会話が生まれます。</p>
              </div>
            </div>
          </div>
        </section>
        <LineCtaSection
          id="line-cta-why"
          title="LINEで申し込む・質問する"
          description="保護者の不安をLINEでそのままご相談ください。トークで「体験希望」と送れば日程案内が届きます。"
          location="why"
          notes={[
            '友だち追加 → すぐに質問OK',
            'テンプレ「体験希望」で日程＆メニュー選択',
          ]}
          tone="light"
          addFriendUrl={lineAddFriendUrl}
          buildMessageUrl={buildMessageUrl}
          onPrimaryClick={handleLineCtaClick}
        />

        <section id="menus" className="py-16 bg-[#F5F7FF]">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">MENUS</p>
            <h2 className="text-3xl font-bold mt-2 mb-8">選べる4メニュー</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {menuOptions.map((menu) => (
                <div key={menu.title} className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(15,34,89,0.08)] space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src={menu.image} alt={menu.imageAlt} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0A1E3F]">{menu.title}</h3>
                    <p className="mt-3 text-gray-700 leading-relaxed">{menu.description}</p>
                    <p className="mt-4 text-sm font-semibold text-[#2F7CFF]">{menu.deliverable}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="flow" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">FLOW</p>
            <h2 className="text-3xl font-bold mt-2 mb-8">体験会の流れ（90分）</h2>
            <div className="relative border-l-2 border-[#2F7CFF]/40 pl-8 space-y-8">
              {flowSteps.map((step) => (
                <div key={step.time} className="relative">
                  <span className="absolute -left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2F7CFF] text-sm font-semibold text-white">
                    •
                  </span>
                  <p className="text-sm font-semibold text-[#2F7CFF]">{step.time}</p>
                  <h3 className="text-2xl font-semibold text-[#0A1E3F]">{step.title}</h3>
                  <p className="text-gray-700">{step.detail}</p>
                </div>
              ))}
              <p className="text-sm text-gray-600">※保護者は見学自由。発表（65分〜）からの合流がおすすめです。</p>
            </div>
          </div>
        </section>

        <LineCtaSection
          id="line-cta"
          title="申込・お問い合わせは公式LINEへ"
          description="フォームは不要。LINEで友だち追加 → トークで「体験希望」と送るだけで完了します。"
          location="line-cta"
          notes={[
            '友だち追加',
            'トークで「体験希望」と送信',
            '自動返信の案内に沿って日程・メニューを選択',
            '受付完了（確認メッセージ）／質問もそのままOK',
          ]}
          footnote="満席時はLINE上でキャンセル待ち登録ができます。"
          addFriendUrl={lineAddFriendUrl}
          buildMessageUrl={buildMessageUrl}
          onPrimaryClick={handleLineCtaClick}
        />

        <section id="deliverables" className="py-16 bg-[#F5F7FF]">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">TAKE HOME</p>
            <h2 className="text-3xl font-bold mt-2 mb-8">当日お持ち帰りいただけるもの</h2>
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="relative h-56 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/sample/top/image_story_icon.jpg"
                  alt="ZINEを持ち帰る様子"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/sample/top/image_music_icon.jpg"
                  alt="サウンドロゴやQRカードのサンプル"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-[#CBD6FF] bg-white p-4 text-lg font-medium text-[#0A1E3F]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="safety" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">SAFETY</p>
            <h2 className="text-3xl font-bold mt-2 mb-8">安全・安心の5つの約束</h2>
            <div className="grid gap-4">
              {safetyPolicies.map((policy) => (
                <div key={policy} className="flex items-start gap-3 rounded-2xl border border-gray-100 p-4 shadow-sm">
                  <span className="mt-1 h-3 w-3 rounded-full bg-[#2F7CFF]" />
                  <p className="text-gray-800">{policy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-[#0A1E3F] text-white">
          <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7EB5FF]">ABOUT</p>
              <h2 className="text-3xl font-bold mt-2 mb-4">対象・会場・持ち物</h2>
              <ul className="space-y-3 text-lg">
                <li><strong>対象：</strong>小1〜中1（低学年＝選択式UI／高学年＝自由記述OK）</li>
                <li><strong>定員：</strong>各回6名（講師1＋アシスタント2）</li>
                <li><strong>会場：</strong>麻布 / 白金エリア（申込完了後に住所と地図を共有）</li>
                <li><strong>持ち物：</strong>手ぶらでOK（必要機材は用意）</li>
                <li><strong>同伴：</strong>保護者同伴歓迎（1家族2名まで）</li>
              </ul>
            </div>
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <Image
                src="/images/sample/top/image_art_icon.jpg"
                alt="ATELIER SPARK 会場"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 text-[#0A1E3F]">
                <p className="text-sm font-semibold text-[#2F7CFF]">ACCESS</p>
                <p className="text-lg font-bold">麻布・白金エリア</p>
                <p className="text-sm">都営大江戸線・南北線から徒歩圏／駐輪スペースあり</p>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule-pricing" className="py-16 bg-white">
          <div className="container mx-auto px-4 space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">SCHEDULE</p>
              <h2 className="text-3xl font-bold mt-2 mb-4">日程・参加費</h2>
              <p className="text-gray-700">
                近日開催日をLINEで更新しています。空席状況は自動返信で即時確認できます。
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6">
              <div className="flex flex-col gap-4">
                {upcomingDates.slice(0, datesExpanded ? upcomingDates.length : 2).map((date) => (
                  <div key={date.slot} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-2xl bg-[#F5F7FF] px-4 py-3">
                    <span className="text-lg font-semibold text-[#0A1E3F]">{date.slot}</span>
                    <span className="text-sm font-semibold text-[#2F7CFF]">{date.status}</span>
                  </div>
                ))}
              </div>
              {upcomingDates.length > 2 && (
                <Button
                  variant="ghost"
                  className="mt-4 text-[#2F7CFF] hover:bg-[#F5F7FF]"
                  onClick={toggleDates}
                >
                  {datesExpanded ? '日程を閉じる' : 'すべての日程を見る'}
                </Button>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-[#0A1E3F] p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">参加費</h3>
                <p className="text-4xl font-bold">¥4,400<span className="text-base font-medium">（税込）</span></p>
                <p className="mt-2 text-sm text-white/80">兄弟2人目は¥2,200</p>
              </div>
              <div className="rounded-3xl border border-gray-200 p-6">
                <h3 className="text-2xl font-semibold mb-2">キャンセルポリシー</h3>
                <p className="text-gray-700">前日まで無料／当日100%。日程変更はLINEで柔軟に承ります。</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#2F7CFF] hover:bg-[#1C5ED8]"
                onClick={() => handleLineCtaClick('schedule-pricing')}
              >
                <Link href={buildMessageUrl(defaultMessage)} target="_blank" rel="noreferrer">
                  LINEで申し込む・質問する
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-[#2F7CFF] text-[#2F7CFF]"
                onClick={() => handleViewDates('schedule-pricing')}
              >
                日程をLINEで確認
              </Button>
            </div>
          </div>
        </section>

        <section id="course" className="py-16 bg-[#F5F7FF]">
          <div className="container mx-auto px-4 space-y-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">CONTINUOUS</p>
              <h2 className="text-3xl font-bold mt-2 mb-4">本講義（継続クラス）のご案内</h2>
              <p className="text-lg text-gray-700">
                体験会で触れた4つの概念を「出版・上映・対戦・放送」へ伸ばす12回コース。AIをただ使うのではなく、作品として社会へ届ける力を育てます。
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {courseModules.map((module) => (
                <div key={module.title} className="rounded-3xl bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#0A1E3F]">{module.title}</h3>
                  <p className="mt-2 text-gray-700">{module.detail}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-gray-200 p-6">
              <p className="text-sm font-semibold text-[#2F7CFF] uppercase tracking-[0.3em]">TUITION</p>
              <p className="text-2xl font-bold text-[#0A1E3F]">
                月2回 90分 ¥22,000〜¥28,000 ／ 月4回 ¥40,000〜¥48,000
              </p>
              <p className="mt-2 text-gray-600">カリキュラム詳細・レベル別の目安はLINEで資料をお送りします。</p>
            </div>
          </div>
        </section>

        <LineCtaSection
          id="course-cta"
          title="継続クラスの資料請求・個別相談"
          description="体験会後の学び方、レベル分け、席の空き状況をLINEでご案内します。"
          location="course"
          notes={['体験後でもOK／資料だけでもOK', 'ご希望の曜日や回数をトークで送信してください']}
          tone="light"
          primaryLabel="LINEで資料請求・個別相談"
          messagePrefill={`資料請求希望 ${campaignCode}`}
          addFriendUrl={lineAddFriendUrl}
          buildMessageUrl={buildMessageUrl}
          onPrimaryClick={handleLineCtaClick}
        />

        <section id="faq" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">FAQ</p>
            <h2 className="text-3xl font-bold mt-2 mb-8">よくある質問</h2>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-gray-200 p-4">
                  <summary className="cursor-pointer text-lg font-semibold text-[#0A1E3F]">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="lp-footer" className="bg-[#0A1E3F] py-16 text-white">
          <div className="container mx-auto px-4 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-3xl font-bold">LINEで申し込む・質問する</h2>
              <div className="flex flex-wrap gap-3">
                <Button
                  className="bg-[#2F7CFF] hover:bg-[#1C5ED8]"
                  onClick={() => handleLineCtaClick('footer')}
                >
                  <Link href={buildMessageUrl(defaultMessage)} target="_blank" rel="noreferrer">
                    LINEで申し込む・質問する
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  onClick={() => handleViewDates('footer')}
                >
                  日程を見る
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="#course">資料請求</Link>
                </Button>
              </div>
            </div>

            <div className="text-sm text-white/70 flex flex-wrap gap-4">
              <Link href="/terms" className="hover:text-white underline">
                利用規約
              </Link>
              <Link href="/privacy" className="hover:text-white underline">
                プライバシー
              </Link>
              <Link href="/consent" className="hover:text-white underline">
                同意書
              </Link>
            </div>
          </div>
        </section>
      </div>

      <MobileStickyCta
        buildMessageUrl={buildMessageUrl}
        onLineClick={handleLineCtaClick}
        onViewDates={handleViewDates}
      />
    </>
  );
}
