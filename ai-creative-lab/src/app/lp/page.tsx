'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Sparkles, X } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}


const campaignCode = '#AZB2311';
const defaultMessage = `体験希望 ${campaignCode}`;
const defaultShortLink = 'https://lin.ee/kehl7g7';

const coursePaths = [
  {
    id: 'musician',
    title: 'ミュージシャンコース',
    tagline: '生成AIで作詞・作曲・ジャケットまで一気通貫',
    image: '/images/lp_material/icon_musician.png',
    points: [
      '生成AIやプロンプトの基礎',
      '生成AIを活用した作詞',
      '生成AIを活用した作曲',
      '曲調やトーンの調整',
      '曲に合わせたジャケット画像の作成',
    ],
    gift: {
      label: 'プレゼント：ミュージックキーホルダー',
      image: '/images/lp_material/present_musickeyholder.png',
      alt: 'ミュージックキーホルダーのイメージ',
    },
  },
  {
    id: 'manga',
    title: '漫画家コース',
    tagline: '生成AIでストーリーから作画まで',
    image: '/images/lp_material/icon_cartoonist.png',
    points: [
      '生成AIやプロンプトの基礎',
      '生成AIを活用した漫画ストーリー作成',
      '生成AIを活用したキャラ設定',
      'セリフ推敲やトーン調整',
      '生成AIを活用した漫画執筆',
    ],
    gift: {
      label: 'プレゼント：漫画ZINE',
      image: '/images/lp_material/present_commicZINE.png',
      alt: '漫画ZINEのイメージ',
    },
  },
];

const flowSteps = [
  {
    time: '0–10分',
    title: 'チェックイン＆ルール',
    detail: '自己紹介や注意事項の共有',
    image: '/images/lp_material/section_flow_selfintroduction.png',
    alt: '自己紹介とルール説明の様子',
  },
  {
    time: '10~25分',
    title: 'コース選択',
    detail: 'コースを選択してもらい、作りたいものを親御さんと話し会ってもらいます。',
    image: '/images/lp_material/section_flow_choice.png',
    alt: 'コース選択のイメージ',
  },
  {
    time: '25–40分',
    title: '概要のレクチャー',
    detail: '生成AIとはなにか？どう指示をすればつくりたいものができるのか？を小さいお子様にわかるように説明しながら、実際に生成AIを触ってもらいます。',
    image: '/images/lp_material/section_flow_lecture.png',
    alt: '先生からレクチャーを受けている様子',
  },
  {
    time: '50分-100分',
    title: '休憩あと、作品の制作',
    detail: 'スタッフが常に横につきながらレクチャーをしながら制作を進めてもらいます。',
    image: '/images/lp_material/section_flow_create.png',
    alt: '制作を進める様子',
  },
  {
    time: '100-120分',
    title: '発表',
    detail: '何を製作したのか他のお友達にも発表してもらいます',
    image: '/images/lp_material/section_flow_presntation.png',
    alt: '作品発表のイメージ',
  },
];

const safetyPolicies = [
  'ご連絡をいただければ、事前の講師紹介も可能です',
  '実名や学校名などの個人情報は制作物に入れません。',
  '実在人物の写真は扱わず、イラスト中心で進行します。',
  '写真・作品の記録は保護者の同意を得た場合のみ共有します。',
  'すべて「やさしい言葉ルール」で運営し、トラブルを防ぎます。',
];

const faqItems = [
  {
    question: 'PCは必要ですか？',
    answer: '不要です。制作デバイスはすべて会場で用意しています。',
  },
  {
    question: 'プレゼント・データの受け取り方法は？',
    answer: 'プレゼントは後日郵送し、データはその場で共有します。',
  },
  {
    question: '英語対応は可能ですか？',
    answer: '不可能です',
  },
  {
    question: '申込方法は？',
    answer: 'LINEで「体験希望」とメッセージを送るだけ。担当者がご返信いたします。',
  },
];

const storySlides = [
  {
    title: 'ミュージシャンコース（ジャケット＋作詞・作曲）',
    body: 'オリジナル音楽とジャケット写真を作ろう！「宿題バスターズ！〜放課後ヒーローモード〜」の素材サンプル',
    jackets: [
      { src: '/music_material/boy.png', alt: '宿題バスターズ！ジャケット（Boy ver）' },
      { src: '/music_material/girl.png', alt: '宿題バスターズ！ジャケット（Girl ver）' },
    ],
    tracks: [
      { title: '宿題バスターズ！ Track 1', src: '/music_material/music1.mp3' },
      { title: '宿題バスターズ！ Track 2', src: '/music_material/music2.mp3' },
      { title: '宿題バスターズ！ Track 3', src: '/music_material/music3.mp3' },
    ],
  },
  {
    title: '漫画家コース',
    body: 'オリジナルの漫画を作ろう！3つの漫画サンプル',
    comics: [
      { src: '/comic_material/comic_exa_1.png', alt: '漫画例1' },
      { src: '/comic_material/comic_exa_2.png', alt: '漫画例2' },
      { src: '/comic_material/comic_exa_3.png', alt: '漫画例3' },
    ],
  },
  {
    title: 'クリエイターコース（ミュージックビデオ）',
    body: '色味とビート合わせを意識しながら、映像作品として仕上げます。',
    videoSrc: '/MV_material/tensai.mp4',
    poster: '/MV_material/samune.png',
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
                src="/images/lp_material/top_1.png"
                alt="体験会の様子"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-32 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/lp_material/top_2.png"
                  alt="制作風景"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/lp_material/top_3.png"
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
  buildMessageUrl,
  onLineClick,
  onViewDates,
}: {
  buildMessageUrl: (prefill: string) => string;
  onLineClick: (location: string) => void;
  onViewDates: (location: string) => void;
}) => (
  <section id="hero" className="relative isolate overflow-hidden bg-[#0A1E3F] text-white">
    <Image
      src="/images/lp_material/top_1.png"
      alt="体験会の様子"
      fill
      priority
      className="object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E3F] via-[#0A1E3F]/90 to-[#142B57]/80" />
    <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              体験会募集！
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7EB5FF]">
              ATELIER SPARK
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            AIネイティブ教育で<br />子供の興味を育み才能を発掘<br />

          </h1>
          <p className="text-xl text-white/90">
            子供が楽しみながらアート/音楽/創作を生み出す教室。<br />AIをフル活用するから「できなくてつまらない」が起こらない<br />これから必須の“AI活用”も一緒に学べる
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
              <Link href="#about">場所について</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <div className="relative h-64 rounded-[28px] overflow-hidden shadow-2xl">
            <Image
              src="/images/lp_material/top_1.png"
              alt="ATELIER SPARK 体験の様子"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/50 via-transparent to-transparent" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: '/images/lp_material/top_3.png', alt: '制作風景1' },
              { src: '/images/lp_material/top_2.png', alt: '制作風景2' },
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

  const scrollToCourses = useCallback(() => {
    if (typeof window === 'undefined') return;
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const [storyIndex, setStoryIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged: (s) => setStoryIndex(s.track.details.rel),
    slides: { perView: 1.05, spacing: 16 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 1.4, spacing: 20 },
      },
    },
    loop: true,
  });
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
          buildMessageUrl={buildMessageUrl}
          onLineClick={handleLineCtaClick}
          onViewDates={handleViewDates}
        />

        <section id="why" className="py-20 bg-white">
          <div className="container mx-auto px-4 space-y-12 max-w-6xl">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">WHY NOW</p>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mt-3">
                  AIの発達で必要な能力は激変。“尖った能力”が問われる時代へ。
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  これまでできなかったことが急速にできるようになっています。AIを活用すれば、ゲームづくり・漫画づくり・映像づくり・音楽づくりが手のひらで完結します。
                  今や<span className="font-semibold">5歳の子供でもテトリスが作れる時代</span>。幼少期からAIに触れることでAIネイティブな世代をつくり、才能の発掘をサポートします。
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#0A1E3F]/70">本教室で得られる3つのこと</p>
                <div className="grid gap-4">
                  {[
                    {
                      title: '何が学べるの？',
                      body: '生成AIの基本的な使い方と、それを用いてアートや音楽・プログラミングをする方法を学びます。',
                    },
                    {
                      title: 'わかりやすい楽しさ！',
                      body: '映像や音楽を作るので小さなお子さんでも視覚的に「楽しい」と感じられ、親御さんも一緒に楽しめます。',
                    },
                    {
                      title: '本当にできるの？',
                      body: 'AIを使うことで従来の「長い練習」「座学のインプット」がほぼ不要。お子様は飽きることなくアイデアを形にできます。',
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="flex items-start gap-4 rounded-2xl border border-[#E1E8FF] p-5 shadow-sm">
                      <Sparkles className="h-6 w-6 text-[#2F7CFF]" aria-hidden />
                      <div>
                        <p className="text-lg font-semibold leading-snug">{title}</p>
                        <p className="text-gray-700 leading-7">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xl font-bold text-[#0A1E3F]">
                あなたのお子さまもこんな作品が作れるようになります！
              </p>

              <div className="relative">
                <div ref={sliderRef} className="keen-slider">
                  {storySlides.map((slide) => (
                    <div
                      key={slide.title}
                      className="keen-slider__slide basis-full rounded-3xl bg-[#F5F7FF] p-6 shadow-md flex flex-col h-[620px] md:h-[660px]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">
                          {slide.title}
                        </p>
                        <span className="text-xs text-[#0A1E3F]/60">クリックで拡大・再生</span>
                      </div>

                      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                        <p className="text-gray-800 leading-8">{slide.body}</p>

                        {slide.jackets && (
                          <div className="space-y-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {slide.jackets?.map((jacket) => (
                                <div
                                  key={jacket.alt}
                                  className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-sm cursor-pointer"
                                  onClick={() => setLightbox({ src: jacket.src, alt: jacket.alt })}
                                >
                                  <Image
                                    src={jacket.src}
                                    alt={jacket.alt}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              ))}
                            </div>
                            <p className="text-xs text-[#0A1E3F]/60">ジャケット画像はクリックで拡大表示できます。</p>
                          </div>
                        )}

                        {slide.tracks && (
                          <div className="space-y-3">
                            {slide.tracks?.map((track) => (
                              <div key={track.title} className="rounded-2xl border border-[#E1E8FF] bg-white/70 p-3">
                                <p className="text-sm font-semibold text-[#0A1E3F]">{track.title}</p>
                                <audio controls className="mt-2 w-full">
                                  <source src={track.src} type="audio/mpeg" />
                                </audio>
                              </div>
                            ))}
                          </div>
                        )}

                        {slide.comics && (
                          <div className="space-y-2">
                            <div className="grid grid-cols-1 gap-3">
                              {slide.comics?.map((comic) => (
                                <div
                                  key={comic.alt}
                                  className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-sm cursor-pointer"
                                  onClick={() => setLightbox({ src: comic.src, alt: comic.alt })}
                                >
                                  <Image src={comic.src} alt={comic.alt} fill className="object-contain" />
                                </div>
                              ))}
                            </div>
                            <p className="text-xs text-[#0A1E3F]/60">漫画サンプルはクリックで拡大表示できます。</p>
                          </div>
                        )}

                        {slide.videoSrc && (
                          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                            <video
                              key={slide.videoSrc}
                              controls
                              poster={slide.poster}
                              className="h-full w-full object-cover"
                            >
                              <source src={slide.videoSrc} />
                            </video>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="pointer-events-auto h-12 w-12 rounded-full border-[#CBD6FF] bg-white/85 text-[#0A1E3F] shadow-md"
                    onClick={() => slider.current?.prev()}
                    aria-label="前のスライドへ"
                  >
                    <span className="text-xl">←</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="pointer-events-auto h-12 w-12 rounded-full border-[#CBD6FF] bg-white/85 text-[#0A1E3F] shadow-md"
                    onClick={() => slider.current?.next()}
                    aria-label="次のスライドへ"
                  >
                    <span className="text-xl">→</span>
                  </Button>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  {storySlides.map((slide, idx) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => slider.current?.moveToIdx(idx)}
                      className="h-3 w-3"
                      aria-label={`${slide.title}へ`}
                    >
                      <span
                        className={cn(
                          'block h-3 w-3 rounded-full transition',
                          idx === storyIndex ? 'bg-[#2F7CFF]' : 'bg-[#CBD6FF]',
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-lg font-medium text-[#0A1E3F] leading-8">
                  「必要だから学ぶ」ではなく、「作りたいから学ぶ」。その結果として、安全な使い方と質問力が自然に身につきます。
                </p>
                <button
                  type="button"
                  onClick={() => scrollToCourses()}
                  className="mt-3 text-[#2F7CFF] underline font-semibold"
                >
                  まずは2コースを見る
                </button>
              </div>
            </div>
          </div>

        </section>
        <LineCtaSection
          id="line-cta-why"
          title="LINEで申し込む・質問する"
          description="質問や不安をLINEでそのままご相談ください。トークで「体験希望」と送れば日程をご案内させていただきます。"
          location="why"
          notes={[
            '友だち追加 → すぐに質問OK',
            'テンプレ「体験希望」で日程＆コース選択',
          ]}
          tone="light"
          addFriendUrl={lineAddFriendUrl}
          buildMessageUrl={buildMessageUrl}
          onPrimaryClick={handleLineCtaClick}
        />

        <section id="courses" className="py-16 bg-[#F5F7FF]">
          <div className="container mx-auto px-4 space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">COURSES</p>
              <h2 className="text-3xl font-bold mt-2">2コース × 2レベル</h2>
              <p className="mt-2 text-lg text-[#0A1E3F]/80">
                好きなコースを選び、Level1で完成 → Level2で発展。作品の完成形と学びがひと目でわかる構成です。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {coursePaths.map((course) => {
                const messageUrl = buildMessageUrl(`${defaultMessage} ${course.title}`);
                return (
                  <div key={course.id} className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(15,34,89,0.08)] space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-[#2F7CFF]">{course.tagline}</p>
                        <h3 className="text-2xl font-bold text-[#0A1E3F]">{course.title}</h3>
                      </div>
                      <div className="relative h-20 w-28 overflow-hidden rounded-2xl">
                        <Image src={course.image} alt={course.title} fill className="object-cover" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#E1E8FF] bg-[#F8FAFF] p-4 space-y-2">
                      <ul className="list-disc pl-5 space-y-1 text-sm text-[#0A1E3F]/90">
                        {course.points.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {course.gift && (
                      <div className="flex items-center gap-4 rounded-2xl border border-[#E1E8FF] bg-white p-4">
                        <div
                          className="relative h-20 w-24 overflow-hidden rounded-xl bg-[#F5F7FF] cursor-pointer"
                          onClick={() => setLightbox({ src: course.gift?.image, alt: course.gift?.alt })}
                        >
                          <Image src={course.gift.image} alt={course.gift.alt} fill className="object-contain" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2F7CFF]">プレゼント</p>
                          <p className="text-base font-semibold text-[#0A1E3F]">{course.gift.label}</p>
                          <p className="text-xs text-[#0A1E3F]/60">クリックで拡大表示</p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm text-[#0A1E3F]/70">内容の相談や日程はLINEでお気軽にどうぞ。</p>
                      <Button
                        className="bg-[#2F7CFF] hover:bg-[#1C5ED8] text-white w-full sm:w-auto"
                        onClick={() => handleLineCtaClick(`course-${course.id}`)}
                      >
                        <Link href={messageUrl} target="_blank" rel="noreferrer">
                          このコースで申し込む
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="flow" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">FLOW</p>
            <h2 className="text-3xl font-bold mt-2 mb-8">体験会の流れ（120分）</h2>
            <div className="relative border-l-2 border-[#2F7CFF]/40 pl-8 space-y-10">
              {flowSteps.map((step) => (
                <div key={step.time} className="relative">
                  <span className="absolute -left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2F7CFF] text-sm font-semibold text-white">
                    •
                  </span>
                  <div className="md:flex md:items-start md:gap-6">
                    <div className="flex-1 space-y-2">
                      <p className="text-sm font-semibold text-[#2F7CFF]">{step.time}</p>
                      <h3 className="text-2xl font-semibold text-[#0A1E3F]">{step.title}</h3>
                      <p className="text-gray-700">{step.detail}</p>
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-48">
                      <div className="relative h-28 w-full overflow-hidden rounded-2xl shadow-sm">
                        <Image src={step.image} alt={step.alt} fill className="object-cover" />
                      </div>
                    </div>
                  </div>
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
            '自動返信の案内に沿って日程・コースを選択',
            '受付完了（確認メッセージ）／質問もそのままOK',
          ]}
          footnote="満席時はLINE上でキャンセル待ち登録ができます。"
          addFriendUrl={lineAddFriendUrl}
          buildMessageUrl={buildMessageUrl}
          onPrimaryClick={handleLineCtaClick}
        />

        <section id="deliverables" className="py-16 bg-[#F5F7FF]">
          <div className="container mx-auto px-4 space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7CFF]">TAKE HOME</p>
              <h2 className="text-3xl font-bold mt-2 mb-2">お渡しするもの</h2>
              <p className="text-[#0A1E3F]/80">
                体験後に制作物を後日郵送します。手元に残るので、家族で振り返りやすく、思い出として残ります。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 shadow-md space-y-3">
                <div className="relative h-56 overflow-hidden rounded-2xl bg-[#F5F7FF]">
                  <Image src="/images/lp_material/present_commicZINE.png" alt="漫画ZINEのサンプル" fill className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A1E3F]">漫画ZINE</h3>
                <p className="text-gray-700 text-sm leading-6">
                  生成したストーリーとキャラでつくるオリジナルZINE。手元に残り、家で読み返して次の制作アイデアが生まれます。
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-md space-y-3">
                <div className="relative h-56 overflow-hidden rounded-2xl bg-[#F5F7FF]">
                  <Image src="/images/lp_material/present_musickeyholder.png" alt="ミュージックキーホルダーのサンプル" fill className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A1E3F]">ミュージックキーホルダー</h3>
                <p className="text-gray-700 text-sm leading-6">
                  作曲したBGMやサウンドロゴをQRで聴けるキーホルダー。持ち歩けて家族や友達にも聞いてもらえます。
                </p>
              </div>
            </div>

            <p className="text-sm text-[#0A1E3F]/70">※作品は後日郵送でお届けします。宛先はLINEで確認します。</p>
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
                <li><strong>対象：</strong>小学生〜中学生</li>
                <li><strong>定員：</strong>各回6名前後</li>
                <li><strong>会場：</strong>都内のレンタルスペース予定（応募者に合わせ柔軟に調整）</li>
                <li><strong>持ち物：</strong>手ぶらでOK（必要機材は用意）</li>
                <li><strong>同伴：</strong>保護者同伴必須</li>
                <li><strong>日時：</strong>応募者に合わせて調整します。LINEでご相談ください。</li>
              </ul>
            </div>
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <Image
                src="/images/lp_material/space_image.png"
                alt="都内レンタルスペースのイメージ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/80 to-transparent" />
              <div className="absolute top-4 left-4 right-4 rounded-2xl bg-white/80 p-4 text-[#0A1E3F]">
                <p className="text-sm font-semibold text-[#2F7CFF]">ACCESS</p>
                <p className="text-lg font-bold">都内のレンタルスペース</p>
                <p className="text-sm">応募者に合わせて会場を確定し、LINEでご案内します。</p>
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
                日時は応募者に合わせて柔軟に調整します。まずはLINEで希望日・エリアをお知らせください。
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6">
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-[#F5F7FF] px-4 py-3 text-[#0A1E3F]">
                  <p className="text-lg font-semibold">日時：未定</p>
                  <p className="text-sm text-[#0A1E3F]/80">応募者の希望日・エリアをもとに決定し、LINEでご案内します。</p>
                </div>
                <div className="rounded-2xl bg-[#F5F7FF] px-4 py-3 text-[#0A1E3F]">
                  <p className="text-lg font-semibold">場所：都内の貸し会議室を予定</p>
                  <p className="text-sm text-[#0A1E3F]/80">参加人数に合わせて手配し、詳細をLINEで共有します。</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-[#0A1E3F] p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">参加費</h3>
                <p className="text-4xl font-bold">¥4,900<span className="text-base font-medium">（税込）</span></p>
                <p className="mt-2 text-sm text-white/80">兄弟2人目は¥3,000</p>
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
            </div>
          </div>
        </section>


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
          <div className="container mx-auto px-4 space-y-4 text-center">
            <h2 className="text-3xl font-bold">LINEで申し込む・質問する</h2>
            <p className="text-sm text-white/80">日程や会場はご希望に合わせて調整します。まずはLINEでご連絡ください。</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                className="bg-[#2F7CFF] hover:bg-[#1C5ED8]"
                onClick={() => handleLineCtaClick('footer')}
              >
                <Link href={buildMessageUrl(defaultMessage)} target="_blank" rel="noreferrer">
                  LINEで申し込む・質問する
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <MobileStickyCta
        buildMessageUrl={buildMessageUrl}
        onLineClick={handleLineCtaClick}
        onViewDates={handleViewDates}
      />

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -right-2 -top-2 z-10 rounded-full bg-white text-[#0A1E3F] p-2 shadow-lg ring-1 ring-[#CBD6FF]"
              onClick={() => setLightbox(null)}
              aria-label="閉じる"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative w-full overflow-hidden rounded-2xl bg-white">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1920}
                height={1080}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
