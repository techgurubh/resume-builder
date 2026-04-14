/**
 * Template 1 — MODERN
 * Minimalist, dark header, indigo accents, pill-shaped skill tags.
 */
export default function ModernTemplate({ data }) {
  const { personal, summary, experience, skills, education } = data;

  return (
    <div
      className="bg-white min-h-full"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
      {/* Header */}
      <div className="bg-slate-900 text-white px-10 py-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{personal.name}</h1>
            <p className="text-indigo-300 text-lg mt-1 font-medium">{personal.title}</p>
          </div>
          <div className="text-right text-sm text-slate-300 space-y-0.5">
            {personal.email    && <div>{personal.email}</div>}
            {personal.phone    && <div>{personal.phone}</div>}
            {personal.location && <div>{personal.location}</div>}
            {personal.website  && <div>{personal.website}</div>}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-10 py-8 space-y-7">

        {/* Summary */}
        {summary && (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1 h-5 bg-indigo-500 rounded-full block" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Profile</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-5 bg-indigo-500 rounded-full block" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Experience</h2>
            </div>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{exp.role}</p>
                      <p className="text-indigo-500 text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right text-xs text-gray-400">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {exp.bullets.filter(Boolean).map((b, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-indigo-400"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills + Education */}
        <div className="grid grid-cols-2 gap-8">
          {skills.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1 h-5 bg-indigo-500 rounded-full block" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.filter(Boolean).map((s, i) => (
                  <span
                    key={i}
                    className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full border border-indigo-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {education.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1 h-5 bg-indigo-500 rounded-full block" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Education</h2>
              </div>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-semibold text-sm text-gray-900">{edu.degree}</p>
                    <p className="text-indigo-500 text-xs font-medium">{edu.school}</p>
                    <p className="text-xs text-gray-400">
                      {edu.period}{edu.gpa ? ` · GPA ${edu.gpa}` : ""}
                    </p>
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

