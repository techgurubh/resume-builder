/**
 * Template 3 — CREATIVE
 * Bold rose sidebar, skill progress bars, timeline experience layout.
 */
export default function CreativeTemplate({ data }) {
  const { personal, summary, experience, skills, education } = data;

  return (
    <div
      className="bg-white min-h-full flex"
      style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif" }}
    >
      {/* Left sidebar */}
      <div className="w-56 bg-rose-700 text-white px-6 py-8 flex-shrink-0 flex flex-col gap-6">
        {/* Name & title */}
        <div>
          <h1 className="text-xl font-bold leading-tight">{personal.name}</h1>
          <p className="text-rose-200 text-xs font-semibold uppercase tracking-wider mt-1">
            {personal.title}
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-1.5">
          <p className="text-xs text-rose-200 font-bold uppercase tracking-widest mb-2">Contact</p>
          {personal.email    && <p className="text-xs text-rose-100 break-all">{personal.email}</p>}
          {personal.phone    && <p className="text-xs text-rose-100">{personal.phone}</p>}
          {personal.location && <p className="text-xs text-rose-100">{personal.location}</p>}
          {personal.linkedin && <p className="text-xs text-rose-100 break-all">{personal.linkedin}</p>}
        </div>

        {/* Skills with fake progress bars */}
        {skills.length > 0 && (
          <div>
            <p className="text-xs text-rose-200 font-bold uppercase tracking-widest mb-3">Skills</p>
            <div className="space-y-2">
              {skills.filter(Boolean).map((s, i) => (
                <div key={i}>
                  <p className="text-xs text-white mb-1">{s}</p>
                  <div className="h-1 bg-rose-900 rounded-full">
                    <div
                      className="h-1 bg-rose-200 rounded-full"
                      style={{ width: `${65 + (i % 4) * 9}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <p className="text-xs text-rose-200 font-bold uppercase tracking-widest mb-3">Education</p>
            {education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <p className="text-xs font-semibold text-white leading-snug">{edu.degree}</p>
                <p className="text-xs text-rose-200">{edu.school}</p>
                <p className="text-xs text-rose-300">{edu.period}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right content */}
      <div className="flex-1 px-8 py-8 space-y-6">
        {/* Summary */}
        {summary && (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-lg font-bold text-rose-700 uppercase tracking-widest">About Me</h2>
              <div className="flex-1 h-0.5 bg-rose-100" />
            </div>
            <p className="text-sm leading-relaxed text-gray-600">{summary}</p>
          </div>
        )}

        {/* Experience timeline */}
        {experience.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-lg font-bold text-rose-700 uppercase tracking-widest">Experience</h2>
              <div className="flex-1 h-0.5 bg-rose-100" />
            </div>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-5 border-l-2 border-rose-200">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 bg-rose-500 rounded-full" />
                  <div className="flex justify-between items-start flex-wrap gap-1">
                    <div>
                      <p className="font-bold text-gray-900">{exp.role}</p>
                      <p className="text-rose-600 text-sm font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-xs bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full border border-rose-100">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {exp.bullets.filter(Boolean).map((b, i) => (
                      <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-rose-400 flex-shrink-0">▸</span>
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
  );
}

