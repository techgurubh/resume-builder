/**
 * Template 7 — TERRACOTTA
 * Based on the uploaded resume image:
 * - Off-white/cream background
 * - Large bold black name, terracotta orange job title
 * - Icon-prefixed contact row with pipe separators
 * - Orange icon + bold uppercase section headers
 * - Horizontal divider lines between sections
 * - Right-aligned dates on experience & education
 * - Pill/tag shaped skills
 * - Certifications section (bullet list)
 */
export default function TerracottaTemplate({ data }) {
  const { personal, summary, experience, skills, education, certifications = [] } = data;

  const ORANGE = "#c0553a"; // terracotta orange from the image

  return (
    <div
      className="bg-[#faf9f7] min-h-full px-10 py-9"
      style={{ fontFamily: "'Calibri', 'Segoe UI', Arial, sans-serif" }}
    >
      {/* ── NAME + TITLE ──────────────────────────────────────────────── */}
      <div className="mb-3">
        <h1
          className="text-[2.6rem] font-black text-gray-900 leading-none tracking-tight"
          style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
        >
          {personal.name || "YOUR NAME"}
        </h1>
        <p
          className="text-sm font-bold uppercase tracking-widest mt-1"
          style={{ color: ORANGE }}
        >
          {personal.title || "YOUR PROFESSION"}
        </p>
      </div>

      {/* ── CONTACT ROW ───────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-xs text-gray-600">
        {personal.email && (
          <span className="flex items-center gap-1.5">
            <SvgEmail color={ORANGE} />
            {personal.email}
          </span>
        )}
        {personal.email && personal.phone && <Pipe />}
        {personal.phone && (
          <span className="flex items-center gap-1.5">
            <SvgPhone color={ORANGE} />
            {personal.phone}
          </span>
        )}
        {personal.phone && personal.location && <Pipe />}
        {personal.location && (
          <span className="flex items-center gap-1.5">
            <SvgPin color={ORANGE} />
            {personal.location}
          </span>
        )}
        {personal.location && personal.linkedin && <Pipe />}
        {personal.linkedin && (
          <span className="flex items-center gap-1.5">
            <SvgLink color={ORANGE} />
            {personal.linkedin}
          </span>
        )}
      </div>

      <Divider />

      {/* ── SUMMARY ───────────────────────────────────────────────────── */}
      {summary && (
        <>
          <Section title="SUMMARY" icon={<SvgPerson color={ORANGE} />} color={ORANGE}>
            <p className="text-[11.5px] leading-relaxed text-gray-700">{summary}</p>
          </Section>
          <Divider />
        </>
      )}

      {/* ── EXPERIENCE ────────────────────────────────────────────────── */}
      {experience.length > 0 && (
        <>
          <Section title="EXPERIENCE" icon={<SvgBag color={ORANGE} />} color={ORANGE}>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[12px] font-bold text-gray-900 uppercase tracking-wide">
                      {exp.role}
                    </p>
                    <p className="text-[11px] text-gray-500 whitespace-nowrap ml-4">{exp.period}</p>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {exp.company}
                    {exp.location ? <span> • {exp.location}</span> : null}
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {exp.bullets.filter(Boolean).map((b, i) => (
                      <li key={i} className="flex gap-2 text-[11.5px] text-gray-700 items-start">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
          <Divider />
        </>
      )}

      {/* ── EDUCATION ─────────────────────────────────────────────────── */}
      {education.length > 0 && (
        <>
          <Section title="EDUCATION" icon={<SvgGrad color={ORANGE} />} color={ORANGE}>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[12px] font-bold text-gray-900 uppercase tracking-wide">
                      {edu.degree}
                    </p>
                    <p className="text-[11px] text-gray-500 whitespace-nowrap ml-4">{edu.period}</p>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {edu.school}
                    {edu.gpa ? <span> • GPA {edu.gpa}</span> : null}
                  </p>
                </div>
              ))}
            </div>
          </Section>
          <Divider />
        </>
      )}

      {/* ── SKILLS ────────────────────────────────────────────────────── */}
      {skills.length > 0 && (
        <>
          <Section title="SKILLS" icon={<SvgStar color={ORANGE} />} color={ORANGE}>
            <div className="flex flex-wrap gap-2 mt-1">
              {skills.filter(Boolean).map((s, i) => (
                <span
                  key={i}
                  className="text-[11px] text-gray-700 border border-gray-300 rounded-full px-3 py-1 bg-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>
          <Divider />
        </>
      )}

      {/* ── CERTIFICATIONS ────────────────────────────────────────────── */}
      {certifications.length > 0 && (
        <Section title="CERTIFICATIONS" icon={<SvgCert color={ORANGE} />} color={ORANGE}>
          <ul className="space-y-1.5 mt-1">
            {certifications.filter((c) => c.name).map((cert, i) => (
              <li key={i} className="text-[11.5px] text-gray-700 flex gap-2 items-start">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                <span>
                  <span className="font-semibold">{cert.name}</span>
                  {cert.org  ? <span className="text-gray-500"> • {cert.org}</span>  : null}
                  {cert.year ? <span className="text-gray-500"> • {cert.year}</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

// ─── Layout helpers ───────────────────────────────────────────────────────────

function Section({ title, icon, color, children }) {
  return (
    <div className="py-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">{icon}</span>
        <h2 className="text-[12px] font-extrabold tracking-widest" style={{ color: "#1a1a1a" }}>
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return <hr className="border-t border-gray-200 my-0.5" />;
}

function Pipe() {
  return <span className="text-gray-300 select-none">|</span>;
}

// ─── Inline SVG icons (terracotta colored) ────────────────────────────────────

function SvgEmail({ color }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill={color}>
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function SvgPhone({ color }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill={color}>
      <path d="M6.6 10.8a15.4 15.4 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.55.56 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.55 3.55a1 1 0 01-.25 1L6.6 10.8z"/>
    </svg>
  );
}

function SvgPin({ color }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
    </svg>
  );
}

function SvgLink({ color }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill={color}>
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 000 10h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 000-10z"/>
    </svg>
  );
}

function SvgPerson({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  );
}

function SvgBag({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
      <path d="M20 6h-2.18A3 3 0 0015 4H9a3 3 0 00-2.82 2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM9 6h6a1 1 0 010 2H9a1 1 0 010-2z"/>
    </svg>
  );
}

function SvgGrad({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
    </svg>
  );
}

function SvgStar({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );
}

function SvgCert({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"/>
    </svg>
  );
}
