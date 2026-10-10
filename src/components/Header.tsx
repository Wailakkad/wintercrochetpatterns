import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { SheepIcon, YarnBallIcon } from './icons';

interface HeaderProps {
  onOpenStarterPack: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenStarterPack }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Free Patterns', href: '/free-patterns' },
    { label: 'Store', href: '/store' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-rose-100/80 bg-[#FFFDFB]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text wordmark with subtle cute icon */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-slate-900 transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F8D7E5]/60 text-[#7A3E55] transition-transform group-hover:scale-105">
            <YarnBallIcon className="w-5 h-5" />
          </div>
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#7A3E55]">
            Winter Crochet Patterns
          </span>
        </Link>

        {/* Zone 2: 4 Clean nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative py-1 transition-colors hover:text-[#7A3E55] ${
                isActive(link.href)
                  ? 'font-semibold text-[#7A3E55]'
                  : 'text-slate-600'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#7A3E55]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenStarterPack}
            className="flex items-center gap-1.5 rounded-xl bg-[#F8D7E5] px-4 py-2 text-xs font-semibold text-[#7A3E55] transition-all hover:bg-[#f2adc9] hover:shadow-xs active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7A3E55]" />
            Free Starter Pack
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenStarterPack}
            className="rounded-lg bg-[#F8D7E5] px-2.5 py-1.5 text-xs font-semibold text-[#7A3E55]"
          >
            Starter Pack
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-rose-50"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-rose-100 bg-[#FFFDFB] px-4 py-4 md:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#FFF7EF] font-semibold text-[#7A3E55]'
                    : 'text-slate-600 hover:bg-rose-50/50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStarterPack();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#7A3E55] py-2.5 text-xs font-semibold text-white cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Get the Free Starter Pack
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
