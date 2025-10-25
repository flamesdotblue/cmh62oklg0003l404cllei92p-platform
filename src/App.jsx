import React from 'react';
import Hero from './components/Hero';
import CodeExamples from './components/CodeExamples';
import TrustSection from './components/TrustSection';
import SignupForm from './components/SignupForm';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_80%_at_50%_0%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(40%_60%_at_80%_20%,rgba(168,85,247,0.15),transparent_60%),#0a0b0f] text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-600 shadow-lg shadow-blue-500/30" />
            <span className="font-semibold tracking-tight">VanishID</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#code" className="hover:text-white">Docs</a>
            <a href="#trust" className="hover:text-white">Security</a>
            <a href="#signup" className="hover:text-white">Early Access</a>
          </nav>
          <a href="#signup" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 px-4 py-2 text-sm border border-white/15">Get early access</a>
        </div>
      </header>

      <main>
        <Hero />
        <CodeExamples />
        <TrustSection />
        <SignupForm />
      </main>

      <footer className="mt-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 text-sm text-white/60 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} VanishID. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
