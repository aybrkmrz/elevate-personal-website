
import { Link } from 'react-router-dom';
import { Dumbbell, Twitter, Instagram, Facebook } from 'lucide-react';
import { NewsletterForm } from './forms/NewsletterForm';

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Berkay Erel</span>
            </Link>
            <p className="text-muted-foreground text-sm">Daha sağlıklı bir sen için yolculuğun burada başlıyor.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hakkımda</Link></li>
                <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hizmetler</Link></li>
                <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mağaza</Link></li>
                <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Yasal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gizlilik Politikası</Link></li>
                <li><Link to="/terms-of-use" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kullanım Şartları</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Bizi Takip Edin</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/2 lg:w-2/3">
                <h3 className="font-semibold mb-2">Bültenimize abone olun</h3>
                <NewsletterForm />
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              &copy; {new Date().getFullYear()} Berkay Erel. Tüm hakları saklıdır. Lovable ile oluşturuldu.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
