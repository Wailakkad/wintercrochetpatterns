import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StarterPackModal } from './components/StarterPackModal';
import { YarnBallIcon } from './components/icons';

// Lazy-loaded route components for optimal performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const FreePatterns = lazy(() => import('./pages/FreePatterns').then(m => ({ default: m.FreePatterns })));
const Store = lazy(() => import('./pages/Store').then(m => ({ default: m.Store })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then(m => ({ default: m.ProductDetail })));
const PatternDetail = lazy(() => import('./pages/PatternDetail').then(m => ({ default: m.PatternDetail })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail').then(m => ({ default: m.BlogPostDetail })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// ScrollToTop on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

// Fallback spinner with cute yarn ball animation
function LoadingFallback() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF7EF] text-[#7A3E55] animate-bounce">
        <YarnBallIcon className="w-8 h-8" />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
        Winding Cozy Yarn...
      </p>
    </div>
  );
}

export default function App() {
  const [isStarterPackOpen, setIsStarterPackOpen] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-[#FFFDFB] text-slate-800 font-sans selection:bg-[#F8D7E5] selection:text-[#7A3E55]">
          {/* Header */}
          <Header onOpenStarterPack={() => setIsStarterPackOpen(true)} />

          {/* Main Router Outlet with Suspense */}
          <main className="flex-1">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home onOpenStarterPack={() => setIsStarterPackOpen(true)} />} />
                <Route path="/about" element={<About />} />
                <Route path="/free-patterns" element={<FreePatterns />} />
                <Route path="/store" element={<Store />} />
                <Route path="/store/:slug" element={<ProductDetail />} />
                <Route path="/patterns/:slug" element={<PatternDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPostDetail />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />

          {/* Global Starter Pack Lead Magnet Modal */}
          <StarterPackModal
            isOpen={isStarterPackOpen}
            onClose={() => setIsStarterPackOpen(false)}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
