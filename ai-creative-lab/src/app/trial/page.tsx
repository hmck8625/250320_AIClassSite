import { redirect } from 'next/navigation';

export default function TrialPage() {
  // 体験会申込ページは非公開のため、LINE公式アカウントにリダイレクト
  redirect('https://lin.ee/kehl7g7');
  
  // リダイレクト後は実行されないため、最小限のreturnで十分
  return null;
}
