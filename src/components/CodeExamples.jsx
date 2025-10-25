import React, { useState } from 'react';

const snippets = {
  javascript: {
    label: 'JavaScript',
    install: 'npm i @vanishid/sdk',
    code: `import { createAuth } from '@vanishid/sdk'\n\nconst auth = createAuth({ projectId: process.env.VANISH_PROJECT_ID })\n\n// One line to enable biometric login\nawait auth.enableBiometrics()\n\n// Then authenticate anywhere\nconst session = await auth.signIn()\nconsole.log('session', session)`
  },
  python: {
    label: 'Python',
    install: 'pip install vanishid',
    code: `from vanishid import Auth\n\nauth = Auth(project_id=os.environ.get('VANISH_PROJECT_ID'))\n\n# One line to enable biometric login\nauth.enable_biometrics()\n\n# Then authenticate anywhere\nsession = auth.sign_in()\nprint(session)`
  },
  go: {
    label: 'Go',
    install: 'go get github.com/vanishid/sdk',
    code: `import (\n  \"os\"\n  vanish \"github.com/vanishid/sdk\"\n)\n\nauth := vanish.New(os.Getenv(\"VANISH_PROJECT_ID\"))\n\n// One line to enable biometric login\nauth.EnableBiometrics()\n\n// Then authenticate anywhere\nsession, _ := auth.SignIn()\nprintln(session.Token)`
  }
};

export default function CodeExamples() {
  const [lang, setLang] = useState('javascript');
  const current = snippets[lang];

  return (
    <section id="code" className="max-w-7xl mx-auto px-6 pt-8 pb-6">
      <div className="flex items-end justify-between gap-6 mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Biometrics in one line</h2>
          <p className="text-white/70 mt-1">Drop-in SDKs for your stack. Secure by default.</p>
        </div>
        <div className="flex gap-2">
          {Object.entries(snippets).map(([key, s]) => (
            <button
              key={key}
              onClick={() => setLang(key)}
              className={`px-3 py-1.5 rounded-md text-sm border ${lang===key? 'bg-white/15 border-white/20 text-white':'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-xl border border-white/10 bg-[#0b0d12]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
            <div className="text-xs text-white/60">{current.label}</div>
            <div className="text-[11px] text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded">secure</div>
          </div>
          <pre className="p-4 overflow-auto text-sm leading-relaxed text-white/90"><code>{current.code}</code></pre>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0b0d12] p-4">
          <div className="text-xs text-white/60 mb-2">Install</div>
          <pre className="text-sm bg-white/5 border border-white/10 rounded px-3 py-2 overflow-x-auto"><code>{current.install}</code></pre>
          <ul className="mt-4 text-sm text-white/70 space-y-2">
            <li>• FIDO2/WebAuthn compliant</li>
            <li>• Device-bound keys</li>
            <li>• Risk signals & passkey fallback</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
