/**
 * Template 6 — ZETY STYLE
 * Inspired by Zety's signature layout:
 * - Deep teal/navy left sidebar (contact, skills, education)
 * - Clean white right column (summary, experience)
 * - Bold full-width colored header with name + title
 * - Icon-prefixed contact details
 * - Thin accent line section dividers
 * - ATS-friendly, single-page optimised
 */
export default function ZetyTemplate({ data }) {
  const { personal, summary, experience, skills, education } = data;

  const SIDEBAR_BG   = "bg-[#1a3a4a]";   // deep teal-navy
  const ACCENT       = "text-[#4ecdc4]";  // bright teal accent
  const ACCENT_BG    = "bg-[#4ecdc4]";
  const HEADER_BG    = "bg-[#1a3a4a]";

  return (
    <div
      className="bg-white min-h-full flex flex-col"
      style={{ fontFamily: "'Calibri', 'Segoe UI', Arial, sans-serif" }}
    >
      {/* ── Full-width header ───────────────────────────────────────────── */}
      <div className={`${HEADER_BG} px-8 py-7`}>
        <h1 className="text-[2.1rem] font-bold text-white leading-tight tracking-wide">
          {personal.name}
        </h1>
        <p className={`${ACCENT} text-base font-semibold mt-0.5 tracking-wider uppercase`}>
          {personal.title}
        </p>
      </div>

      {/* ── Two-column body ─────────────────────────────────────────────── */}
      <div className="flex flex-1">

        {/* LEFT SIDEBAR */}
        <div className={`${SIDEBAR_BG} w-[42%] px-6 py-6 flex flex-col gap-6 flex-shrink-0`}>

          {/* Contact */}
          <div>
            <SidebarHeading accent={ACCENT_BG}>Contact</SidebarHeading>
            <ul className="space-y-2 mt-3">
              {personal.phone && (
                <ContactRow icon="📞">{personal.phone}</ContactRow>
              )}
              {personal.email && (
                <ContactRow icon="✉">{personal.email}</ContactRow>
              )}
              {personal.location && (
                <ContactRow icon="📍">{personal.location}</ContactRow>
              )}
              {personal.linkedin && (
                <ContactRow icon="in">{personal.linkedin}</ContactRow>
              )}
              {personal.website && (
                <ContactRow icon="🌐">{personal.website}</ContactRow>
              )}
            </ul>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <SidebarHeading accent={ACCENT_BG}>Skills</SidebarHeading>
              <ul className="mt-3 space-y-2">
                {skills.filter(Boolean).map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {/* Dot + skill bar */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ecdc4] flex-shrink-0" />
                    <span className="text-[11px] text-slate-200 flex-1">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <SidebarHeading accent={ACCENT_BG}>Education</SidebarHeading>
              <div className="mt-3 space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[11px] font-bold text-white leading-snug">{edu.degree}</p>
                    <p className="text-[11px] text-[#4ecdc4] font-semibold">{edu.school}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{edu.period}
                      {edu.gpa ? <span className="ml-1">· GPA {edu.gpa}</span> : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT MAIN COLUMN */}
        <div className="flex-1 px-7 py-6 space-y-5">

          {/* Summary */}
          {summary && (
            <div>
              <MainHeading accent="border-[#4ecdc4]">Profile</MainHeading>
              <p className="text-[11.5px] leading-relaxed text-gray-600 mt-2">{summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div>
              <MainHeading accent="border-[#4ecdc4]">Work Experience</MainHeading>
              <div className="mt-3 space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    {/* Role + period */}
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[12px] font-bold text-gray-900">{exp.role}</p>
                        <p className="text-[11px] text-[#1a3a4a] font-semibold">
                          {exp.company}
                          {exp.location ? ` · ${exp.location}` : ""}
                        </p>
                      </div>
                      <span className="text-[10px] text-gray-400 whitespace-nowrap ml-3 mt-0.5 bg-gray-100 px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>
                    {/* Bullets */}
                    <ul className="mt-1.5 space-y-1">
                      {exp.bullets.filter(Boolean).map((b, i) => (
                        <li key={i} className="flex gap-2 text-[11px] text-gray-600 items-start">
                          <span className="text-[#4ecdc4] font-bold mt-0.5 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SidebarHeading({ children, accent }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-sm ${accent} flex-shrink-0`} />
      <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
        {children}
      </h3>
    </div>
  );
}

function MainHeading({ children, accent }) {
  return (
    <div className={`border-b-2 ${accent} pb-1`}>
      <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a3a4a]">
        {children}
      </h2>
    </div>
  );
}

function ContactRow({ icon, children }) {
  return (
    <li className="flex items-start gap-2 text-[11px] text-slate-300">
      <span className="text-[11px] flex-shrink-0 w-4 text-center">{icon}</span>
      <span className="break-all">{children}</span>
    </li>
  );
}
