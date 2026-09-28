import React, { useState } from 'react';
import { X, CheckCircle, Download, Mail, Sparkles } from 'lucide-react';
import { STARTER_PACK_FEATURES } from '../data/patterns';
import { SheepIcon, YarnBallIcon } from './icons';

interface StarterPackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StarterPackModal: React.FC<StarterPackModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="starter-pack-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-rose-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header accent strip */}
        <div className="h-2.5 bg-gradient-to-r from-[#F8D7E5] via-[#E9E2FF] to-[#DFF7EF]" />

        <button
          onClick={handleReset}
          aria-label="Close modal"
          className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-rose-400"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF7EF] border border-rose-100 text-rose-800">
              <SheepIcon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#7A3E55]">
                Free Digital Gift
              </span>
              <h2 id="starter-pack-title" className="text-xl sm:text-2xl font-bold text-slate-900">
                Winter Starter Pack
              </h2>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Get instant access to all 4 printable winter crochet patterns, plus our exclusive yarn substitution cheat sheet and size adjustment chart.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#FFF7EF]/80 p-4 border border-rose-100/60">
                <p className="text-xs font-semibold text-[#7A3E55] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                  What you will receive:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {STARTER_PACK_FEATURES.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <label htmlFor="starter-email" className="block text-xs font-medium text-slate-700 mb-1.5">
                  Where should we email your free bundle?
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="starter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:border-[#7A3E55] focus:outline-none focus:ring-2 focus:ring-[#F8D7E5]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#7A3E55] py-3 px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#582639] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? 'Preparing Bundle...' : 'Send Me the Free Starter Pack'}
              </button>

              <p className="text-center text-[11px] text-slate-400">
                No spam. Unsubscribe anytime with 1 click.
              </p>
            </form>
          ) : (
            <div className="mt-6 rounded-2xl bg-emerald-50/70 p-5 border border-emerald-100 text-center animate-in fade-in">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Check your inbox (demo)</h3>
              <p className="mt-1 text-xs text-slate-600">
                We sent the bundle link to <span className="font-semibold text-slate-800">{email}</span>!
              </p>

              <div className="mt-5 pt-4 border-t border-emerald-200/60">
                <p className="text-xs text-slate-500 mb-3">Want to download it right now?</p>
                <a
                  href="/pdfs/winter-crochet-starter-pack.pdf"
                  download="winter-crochet-starter-pack.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#7A3E55] py-2.5 px-5 text-xs font-semibold text-white shadow-sm hover:bg-[#582639] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Starter Pack PDF Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
