'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function LpPromoPopup() {
  const pathname = usePathname();
  const isLanding = pathname?.startsWith('/lp');
  const [showModal, setShowModal] = useState(false);
  const [showCorner, setShowCorner] = useState(false);

  const pushEvent = useCallback((eventName: string, details?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...details,
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || isLanding) return;
    const modalKey = 'lpPopupShown_modal';
    if (!sessionStorage.getItem(modalKey)) {
      const timer = window.setTimeout(() => {
        sessionStorage.setItem(modalKey, 'true');
        pushEvent('lp_popup_shown', { variant: 'modal', reason: 'time_elapsed' });
        setShowModal(true);
      }, 5000);
      const handlePopState = () => {
        if (!sessionStorage.getItem(modalKey)) {
          sessionStorage.setItem(modalKey, 'true');
          pushEvent('lp_popup_shown', { variant: 'modal', reason: 'browser_back' });
          setShowModal(true);
        }
      };
      window.addEventListener('popstate', handlePopState);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isLanding, pushEvent]);

  useEffect(() => {
    if (typeof window === 'undefined' || isLanding) return;
    setShowCorner(true);
    pushEvent('lp_popup_shown', { variant: 'corner', reason: 'passive_corner', pathname });
  }, [pathname, isLanding, pushEvent]);

  if (isLanding) return null;

  const promoContent = (
    <>
      <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100" style={{ aspectRatio: '16 / 9' }}>
        <Image src="/comic_material/comic_exa_3.png" alt="漫画ZINEサンプル" fill className="object-cover" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF7A00]">え、これ小学生が？</p>
      <h3 className="text-2xl font-bold text-[#0A1E3F]">たった120分で、お子様が「作曲家・漫画家」デビュー。</h3>
      <p className="text-sm text-gray-700 leading-6">
        練習なしで頭の中のアイデアをAIで即形に。LPでは当日の流れや教材、作品例、郵送される記念品など詳細が確認できます。
      </p>
      <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
        <li>参加費・会場・安全ポリシー</li>
        <li>漫画/音楽作品の実例と制作フロー</li>
        <li>特典（漫画ZINE &amp; ミュージックキーホルダー）</li>
      </ul>
      <p className="text-xs font-semibold text-[#0A1E3F]/70">※港区エリアで体験会開催中。作品は後日郵送でプレゼント。</p>
      <Button
        className="w-full bg-[#2F7CFF] hover:bg-[#1C5ED8]"
        onClick={() => pushEvent('click_line_cta', { location: 'popup-lp' })}
      >
        <Link href="/lp">LPで詳細を見る</Link>
      </Button>
    </>
  );

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-sm text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="space-y-4">{promoContent}</div>
          </div>
        </div>
      )}

      {showCorner && (
        <div className="fixed bottom-4 right-4 z-40 w-full max-w-xs rounded-2xl bg-white p-4 shadow-lg">
          <button
            type="button"
            onClick={() => setShowCorner(false)}
            className="absolute right-2 top-2 text-xs text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
          <div className="space-y-3 text-sm text-[#0A1E3F]">
            <div className="relative w-full overflow-hidden rounded-xl bg-gray-100" style={{ aspectRatio: '16 / 9' }}>
              <Image src="/comic_material/comic_exa_3.png" alt="漫画ZINEサンプル" fill className="object-cover" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF7A00]">え、これ小学生が？</p>
            <h4 className="text-base font-bold leading-snug">【開講モニター募集中！】<br />120分で我が子が作曲家・漫画家に！？作品は子供の宝物！</h4>
            <Button
              size="sm"
              className="w-full bg-[#2F7CFF] hover:bg-[#1C5ED8]"
              onClick={() => pushEvent('click_line_cta', { location: 'popup-corner' })}
            >
              <Link href="/lp">LPで詳細を見る</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
