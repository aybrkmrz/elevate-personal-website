
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/programs-and-pricing', label: 'Programs & Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
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
          <span className="text-xl font-bold">FitFlex</span>
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
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Get Started</Link>
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
              <Button asChild onClick={() => setIsOpen(false)} className="mt-2">
                <Link to="/contact">Get Started</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
