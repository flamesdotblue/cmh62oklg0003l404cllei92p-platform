import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Private Beta
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Auth that disappears.
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-prose">
            Passwordless, biometric logins delivered through a single line of code. Ship Face/Touch ID, WebAuthn and device-bound tokens with a drop-in SDK.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#signup" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 px-5 py-3 text-sm font-medium shadow-lg shadow-blue-500/30">
              <Rocket className="h-4 w-4" /> Request early access
            </a>
            <a href="#code" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-5 py-3 text-sm border border-white/15">
              <CheckCircle2 className="h-4 w-4" /> See 1-line install
            </a>
          </div>
          <ul className="mt-6 text-white/60 text-sm space-y-2">
            <li>• Web, iOS, Android, and server SDKs</li>
            <li>• Built-in phishing resistance and device attestation</li>
            <li>• SOC2-in-progress. End-to-end encryption by default</li>
          </ul>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-white/5">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
}
