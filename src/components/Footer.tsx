
import { Link } from 'react-router-dom';
import { Dumbbell, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">FitFlex</span>
            </Link>
            <p className="text-muted-foreground text-sm">Your journey to a healthier you starts here.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/programs-and-pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Programs & Pricing</Link></li>
                <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} FitFlex. All rights reserved. Built with Lovable.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
