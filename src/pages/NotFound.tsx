
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Hatası: Kullanıcı var olmayan bir rotaya erişmeye çalıştı:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Hay aksi! Sayfa bulunamadı</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Anasayfaya Dön
        </a>
      </div>
    </div>
  );
};

export default NotFound;
