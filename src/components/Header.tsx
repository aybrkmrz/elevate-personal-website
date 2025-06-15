
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/about', label: 'Hakkımda' },
  { href: '/services', label: 'Hizmetler' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'İletişim' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = "text-primary";
  const inactiveLinkClass = "hover:text-primary transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Berkay Erel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild>
            <Link to="/booking">Randevu Al</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/login">Giriş Yap</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4 py-4 border-t border-border/40">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `text-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 flex w-full flex-col gap-2 px-4">
                <Button asChild onClick={() => setIsOpen(false)} className="w-full">
                  <Link to="/booking">Randevu Al</Link>
                </Button>
                <Button variant="outline" asChild onClick={() => setIsOpen(false)} className="w-full">
                  <Link to="/login">Giriş Yap</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
