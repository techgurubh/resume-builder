import { useState, useRef } from "react";
import { ResumeProvider, useResume } from "./context/ResumeContext";
import FormPanel from "./components/form/FormPanel";
import ModernTemplate       from "./components/templates/ModernTemplate";
import ProfessionalTemplate from "./components/templates/ProfessionalTemplate";
import CreativeTemplate     from "./components/templates/CreativeTemplate";
import MinimalTemplate      from "./components/templates/MinimalTemplate";
import ExecutiveTemplate    from "./components/templates/ExecutiveTemplate";
import ZetyTemplate         from "./components/templates/ZetyTemplate";
import { usePrint } from "./hooks/usePrint";

// ─── Template registry ────────────────────────────────────────────────────────
const TEMPLATES = [
  { id: "modern",       label: "Modern",       icon: "⬡", component: ModernTemplate },
  { id: "professional", label: "Professional", icon: "◻", component: ProfessionalTemplate },
  { id: "creative",     label: "Creative",     icon: "◈", component: CreativeTemplate },
  { id: "minimal",      label: "Minimal",      icon: "—", component: MinimalTemplate },
  { id: "executive",    label: "Executive",    icon: "◆", component: ExecutiveTemplate },
  { id: "zety",         label: "Zety",         icon: "◑", component: ZetyTemplate },
];

// ─── Preview panel (needs access to context) ──────────────────────────────────
function PreviewPanel({ activeTemplate, setActiveTemplate }) {
  const { data } = useResume();
  const { printRef, handlePrint } = usePrint();
  const ActiveTemplate = TEMPLATES.find((t) => t.id === activeTemplate)?.component ?? ModernTemplate;

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-900">
      {/* Toolbar */}
      <div className="px-6 py-3 border-b border-slate-800 flex items-center justify-between gap-4 flex-wrap">
        {/* Template switcher buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTemplate(t.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTemplate === t.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
              }`}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        {/* Print / PDF button */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white
                     text-xs font-semibold px-4 py-2 rounded-lg transition-colors
                     shadow-lg shadow-emerald-600/20"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2
                 m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z
                 m8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print / Save PDF (A4)
        </button>
      </div>

      {/* A4 canvas */}
      <div className="flex-1 overflow-auto p-8 flex justify-center">
        <div
          ref={printRef}
          className="bg-white shadow-2xl shadow-black/50 overflow-hidden"
          style={{ width: "210mm", minHeight: "297mm" }}
        >
          <ActiveTemplate data={data} />
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
function AppLayout() {
  const [activeTemplate, setActiveTemplate] = useState("modern");

  return (
    <div
      className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <FormPanel />
      <PreviewPanel activeTemplate={activeTemplate} setActiveTemplate={setActiveTemplate} />
    </div>
  );
}

export default function App() {
  return (
    <ResumeProvider>
      <AppLayout />
    </ResumeProvider>
  );
}

