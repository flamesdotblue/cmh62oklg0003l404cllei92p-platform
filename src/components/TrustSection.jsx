import React from 'react';
import { ShieldCheck, Lock, Fingerprint, Check } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="trust" className="max-w-7xl mx-auto px-6 pt-16 md:pt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-emerald-300">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wide">Security by design</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold">Built to be trusted</h3>
          <ul className="mt-4 space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-400" /> End-to-end encryption and device attestation</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-400" /> Phishing-resistant WebAuthn flows</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-400" /> Regional data residency and key isolation</li>
          </ul>
          <div className="mt-5 flex gap-3 text-xs text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1"><Lock className="h-3 w-3"/> SOC 2 (in progress)</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1"><Fingerprint className="h-3 w-3"/> FIDO2 Ready</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Scale', text: 'Architected for millions of MAU. Low-latency edge.', },
            { name: 'Privacy', text: 'PII minimization, opt-in analytics only.', },
            { name: 'Uptime', text: '99.99% target, multi-region failover.', },
            { name: 'Compliance', text: 'SOC2, GDPR, ISO27001 roadmap.', },
          ].map((card, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-4">
              <div className="text-sm text-white/60">{card.name}</div>
              <div className="mt-1 text-white/90 text-sm">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
