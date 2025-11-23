export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center space-y-3">
        <p className="text-lg font-semibold">東京AI創造スタジオ</p>
        <p className="text-sm text-gray-300">体験会・ご相談はLINEでお気軽にどうぞ。</p>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} 東京AI創造スタジオ All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
