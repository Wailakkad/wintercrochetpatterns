import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Heart } from 'lucide-react';
import { SheepIcon, YarnBallIcon } from './icons';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-rose-100 bg-[#FFF7EF]/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand bio */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F8D7E5] text-[#7A3E55]">
                <SheepIcon className="w-5 h-5" />
              </div>
              <span className="font-display text-lg font-bold text-[#7A3E55]">
                Winter Crochet Patterns
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-600 leading-relaxed">
              Cozy, size-inclusive, and beginner-friendly printable PDF crochet patterns for baby beanies, cardigans, earwarmers, and gloves. Warm designs crafted for happy makers.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-rose-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-[#7A3E55] hover:text-[#7A3E55] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-rose-600" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.053.224-.174.271-.4.165-1.49-.693-2.42-2.868-2.42-4.616 0-3.759 2.731-7.213 7.877-7.213 4.136 0 7.35 2.947 7.35 6.887 0 4.11-2.591 7.417-6.187 7.417-1.208 0-2.344-.628-2.733-1.371l-.744 2.834c-.269 1.037-.999 2.336-1.488 3.132 1.11.343 2.285.531 3.504.531 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
                <span>Save on Pinterest</span>
              </a>
              <a
                href="mailto:hello@wintercrochetpatterns.com"
                className="flex items-center gap-1.5 rounded-lg border border-rose-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-[#7A3E55] hover:text-[#7A3E55] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              Free Patterns
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/patterns/easy-cute-baby-beanie" className="hover:text-[#7A3E55] transition-colors">
                  Easy and Cute Baby Beanie
                </Link>
              </li>
              <li>
                <Link to="/patterns/fingerless-gloves" className="hover:text-[#7A3E55] transition-colors">
                  Fingerless Gloves
                </Link>
              </li>
              <li>
                <Link to="/patterns/cardigan-with-granny-squares" className="hover:text-[#7A3E55] transition-colors">
                  Granny Square Cardigan
                </Link>
              </li>
              <li>
                <Link to="/patterns/illuin-earwarmer" className="hover:text-[#7A3E55] transition-colors">
                  Illuin Earwarmer
                </Link>
              </li>
              <li>
                <Link to="/free-patterns" className="font-medium text-[#7A3E55] hover:underline">
                  View All Patterns →
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              Shop
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/store/crochet-sweater-jacket-pattern" className="hover:text-[#7A3E55] transition-colors">
                  Sweater Jacket Pattern
                </Link>
              </li>
              <li>
                <Link to="/store/top-down-crochet-sweater-pattern" className="hover:text-[#7A3E55] transition-colors">
                  Top Down Sweater Pattern
                </Link>
              </li>
              <li>
                <Link to="/store/flower-power-granny-poncho-pattern" className="hover:text-[#7A3E55] transition-colors">
                  Flower Power Poncho
                </Link>
              </li>
              <li>
                <Link to="/store" className="font-medium text-[#7A3E55] hover:underline">
                  Visit the Store →
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              Information
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/about" className="hover:text-[#7A3E55] transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#7A3E55] transition-colors">
                  Crochet Tutorials & Guides
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#7A3E55] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#7A3E55] transition-colors">
                  Terms of Use & License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-rose-200/50 pt-6 text-xs text-slate-500 sm:flex-row">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for cozy crocheters worldwide.
          </p>
          <p className="mt-2 sm:mt-0">
            © {new Date().getFullYear()} Winter Crochet Patterns. All free PDF patterns for personal use.
          </p>
        </div>
      </div>
    </footer>
  );
};
