import React, { useEffect, useState } from 'react';
import { saveLead } from '../lib/db';
import { Mail, Building2, User } from 'lucide-react';

export default function SignupForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', company: '', role: '' });

  useEffect(() => {
    const saved = localStorage.getItem('vanish-lead-draft');
    if (saved) {
      try { setForm(JSON.parse(saved)); } catch {}
    }
  }, []);

  function onChange(e) {
    const next = { ...form, [e.target.name]: e.target.value };
    setForm(next);
    localStorage.setItem('vanish-lead-draft', JSON.stringify(next));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Enter a valid email.');
      return;
    }
    setStatus('saving');
    try {
      await saveLead({ ...form, createdAt: Date.now() });
      localStorage.removeItem('vanish-lead-draft');
      setStatus('saved');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setStatus('idle');
    }
  }

  return (
    <section id="signup" className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-24">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Get early access</h3>
          <p className="mt-2 text-white/70 max-w-prose">Join the private beta and be first to ship truly invisible auth. We'll invite teams weekly as capacity opens.</p>
          <ul className="mt-4 text-white/70 text-sm space-y-2">
            <li>• Priority onboarding and migration support</li>
            <li>• Access to SDK previews and design partner Slack</li>
            <li>• Influence the roadmap for enterprise features</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div className="grid gap-4">
            <label className="text-sm">Work Email</label>
            <div className="relative">
              <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="you@company.com"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-[#0b0d12] border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <label className="text-sm">Company</label>
            <div className="relative">
              <Building2 className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={onChange}
                required
                placeholder="Acme Inc."
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-[#0b0d12] border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <label className="text-sm">Role</label>
            <div className="relative">
              <User className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={onChange}
                required
                placeholder="Staff Engineer, CTO, Founder..."
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-[#0b0d12] border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {error && <div className="text-sm text-red-300">{error}</div>}

          <button
            type="submit"
            disabled={status==='saving' || status==='saved'}
            className="w-full inline-flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 px-5 py-3 text-sm font-medium shadow-lg shadow-blue-500/30 disabled:opacity-60"
          >
            {status==='saved' ? "You're on the list 🎉" : status==='saving' ? 'Submitting…' : 'Request access'}
          </button>
          <p className="text-xs text-white/50">We store submissions in a local database on this device for preview purposes.</p>
        </form>
      </div>
    </section>
  );
}
