/**
 * Template 4 — MINIMAL
 * Monospace font, pure black & white, maximum readability, zero decoration.
 */
export default function MinimalTemplate({ data }) {
  const { personal, summary, experience, skills, education } = data;

  return (
    <div
      className="bg-white min-h-full px-12 py-10"
      style={{ fontFamily: "'Courier New', 'Lucida Console', monospace" }}
    >
      {/* Name block */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black tracking-tight">{personal.name}</h1>
        <p className="text-gray-500 text-sm mt-0.5">{personal.title}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-2 text-xs text-gray-400">
          {personal.email    && <span>{personal.email}</span>}
          {personal.phone    && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website  && <span>{personal.website}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-7">
          <p className="text-sm text-gray-700 leading-relaxed max-w-xl">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-7">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4">Experience</p>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id} className="grid grid-cols-[1fr,auto] gap-x-4">
                <div>
                  <p className="font-bold text-sm text-black">{exp.role}</p>
                  <p className="text-xs text-gray-500 mb-1.5">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-1">
                    {exp.bullets.filter(Boolean).map((b, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-600 pl-3 relative before:content-['–'] before:absolute before:left-0"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-gray-400 whitespace-nowrap">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills + Education */}
      <div className="grid grid-cols-2 gap-8">
        {skills.length > 0 && (
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">Skills</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              {skills.filter(Boolean).join("  ·  ")}
            </p>
          </div>
        )}

        {education.length > 0 && (
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">Education</p>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-xs font-bold text-black">{edu.degree}</p>
                  <p className="text-xs text-gray-500">
                    {edu.school} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

