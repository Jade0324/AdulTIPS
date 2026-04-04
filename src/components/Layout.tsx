import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Modules', path: '/#modules' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-primary">Adulting PH</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    location.pathname === link.path ? "text-primary" : "text-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/module-1"
                className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-all"
              >
                Start Learning
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-surface border-b border-gray-100 p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-base font-medium text-muted hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/module-1"
              className="block bg-primary text-white px-4 py-2 rounded-lg text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Learning
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-primary text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Adulting Survival Guide PH</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                A free, step-by-step resource helping Filipinos navigate adult life systems.
                Friendly, clear, and practical advice for the next generation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/" className="hover:text-accent">Home</Link></li>
                <li><Link to="/resources" className="hover:text-accent">Resources & Glossary</Link></li>
                <li><Link to="/module-1" className="hover:text-accent">Government IDs</Link></li>
                <li><Link to="/module-2" className="hover:text-accent">Financial Basics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Disclaimer</h4>
              <p className="text-xs text-white/50 italic">
                Not affiliated with any government agency. Information provided is for educational purposes only.
                Always verify with official sources (SSS, BIR, DFA, etc.) for the latest updates.
              </p>
            </div>
          </div>
          <div className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Adulting Survival Guide PH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
