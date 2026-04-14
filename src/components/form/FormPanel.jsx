import { useState } from "react";
import { useResume, ACTIONS } from "../../context/ResumeContext";
import Input from "./Input";
import Textarea from "./Textarea";
import SectionHeader from "./SectionHeader";

const SECTIONS = ["personal", "summary", "experience", "skills", "education"];

export default function FormPanel() {
  const { data, dispatch } = useResume();
  const [activeSection, setActiveSection] = useState("personal");

  // ── Personal ────────────────────────────────────────────────────────────────
  const updatePersonal = (field, value) =>
    dispatch({ type: ACTIONS.UPDATE_PERSONAL, field, value });

  // ── Summary ─────────────────────────────────────────────────────────────────
  const updateSummary = (value) =>
    dispatch({ type: ACTIONS.UPDATE_SUMMARY, value });

  // ── Experience ───────────────────────────────────────────────────────────────
  const updateExp = (id, field, value) =>
    dispatch({ type: ACTIONS.UPDATE_EXP_FIELD, id, field, value });

  const updateExpBullet = (id, idx, value) =>
    dispatch({ type: ACTIONS.UPDATE_EXP_BULLET, id, idx, value });

  const addExpBullet = (id) =>
    dispatch({ type: ACTIONS.ADD_EXP_BULLET, id });

  const removeExpBullet = (id, idx) =>
    dispatch({ type: ACTIONS.REMOVE_EXP_BULLET, id, idx });

  const addExp = () => dispatch({ type: ACTIONS.ADD_EXP });

  const removeExp = (id) => dispatch({ type: ACTIONS.REMOVE_EXP, id });

  // ── Skills ───────────────────────────────────────────────────────────────────
  const updateSkills = (value) =>
    dispatch({ type: ACTIONS.UPDATE_SKILLS, value });

  // ── Education ────────────────────────────────────────────────────────────────
  const updateEdu = (id, field, value) =>
    dispatch({ type: ACTIONS.UPDATE_EDU_FIELD, id, field, value });

  const addEdu = () => dispatch({ type: ACTIONS.ADD_EDU });

  const removeEdu = (id) => dispatch({ type: ACTIONS.REMOVE_EDU, id });

  return (
    <div className="w-[360px] flex-shrink-0 flex flex-col border-r border-slate-800 overflow-hidden">
      {/* Logo bar */}
      <div className="px-5 py-4 border-b border-slate-800 flex items-center gap-3">
        <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs font-bold">R</span>
        </div>
        <div>
          <h1 className="text-sm font-bold text-white">Resume Builder</h1>
          <p className="text-[10px] text-slate-500">5 templates · print to A4</p>
        </div>
      </div>

      {/* Section tabs */}
      <div className="flex border-b border-slate-800 overflow-x-auto scrollbar-hide">
        {SECTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            className={`px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap
                        transition-colors flex-shrink-0 ${
                          activeSection === s
                            ? "text-indigo-400 border-b-2 border-indigo-500"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Scrollable fields */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

        {/* ── Personal ── */}
        {activeSection === "personal" && (
          <>
            <SectionHeader title="Personal Info" icon="👤" />
            <Input label="Full Name"  value={data.personal.name}     onChange={(v) => updatePersonal("name", v)}     placeholder="Jane Smith" />
            <Input label="Job Title"  value={data.personal.title}    onChange={(v) => updatePersonal("title", v)}    placeholder="Senior Designer" />
            <Input label="Email"      value={data.personal.email}    onChange={(v) => updatePersonal("email", v)}    placeholder="jane@email.com" type="email" />
            <Input label="Phone"      value={data.personal.phone}    onChange={(v) => updatePersonal("phone", v)}    placeholder="+1 555 000 0000" />
            <Input label="Location"  value={data.personal.location} onChange={(v) => updatePersonal("location", v)} placeholder="City, State" />
            <Input label="LinkedIn"  value={data.personal.linkedin} onChange={(v) => updatePersonal("linkedin", v)} placeholder="linkedin.com/in/you" />
            <Input label="Website"   value={data.personal.website}  onChange={(v) => updatePersonal("website", v)}  placeholder="yoursite.com" />
          </>
        )}

        {/* ── Summary ── */}
        {activeSection === "summary" && (
          <>
            <SectionHeader title="Summary" icon="📝" />
            <Textarea
              label="Professional Summary"
              value={data.summary}
              onChange={updateSummary}
              placeholder="Write a compelling 2–3 sentence summary..."
              rows={5}
            />
          </>
        )}

        {/* ── Experience ── */}
        {activeSection === "experience" && (
          <>
            <SectionHeader title="Work Experience" icon="💼" />
            {data.experience.map((exp, eIdx) => (
              <div
                key={exp.id}
                className="bg-slate-800/50 rounded-xl p-4 space-y-3 border border-slate-700/50"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400">Position {eIdx + 1}</span>
                  <button
                    onClick={() => removeExp(exp.id)}
                    className="text-slate-600 hover:text-red-400 text-xs transition-colors"
                  >
                    ✕ Remove
                  </button>
                </div>
                <Input label="Job Title" value={exp.role}     onChange={(v) => updateExp(exp.id, "role", v)}     placeholder="Senior Engineer" />
                <Input label="Company"   value={exp.company}  onChange={(v) => updateExp(exp.id, "company", v)}  placeholder="Acme Corp" />
                <div className="grid grid-cols-2 gap-2">
                  <Input label="Period"   value={exp.period}   onChange={(v) => updateExp(exp.id, "period", v)}   placeholder="2022 – Present" />
                  <Input label="Location" value={exp.location} onChange={(v) => updateExp(exp.id, "location", v)} placeholder="Remote" />
                </div>

                {/* Bullet points */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Bullet Points
                  </label>
                  <div className="space-y-2">
                    {exp.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex gap-2 items-start">
                        <textarea
                          value={b}
                          onChange={(e) => updateExpBullet(exp.id, bIdx, e.target.value)}
                          placeholder={`Achievement ${bIdx + 1}...`}
                          rows={2}
                          className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-xs
                                     text-slate-100 placeholder-slate-500 resize-none
                                     focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                     transition-colors"
                        />
                        <button
                          onClick={() => removeExpBullet(exp.id, bIdx)}
                          className="text-slate-600 hover:text-red-400 text-xs mt-2 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => addExpBullet(exp.id)}
                    className="mt-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    + Add bullet
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={addExp}
              className="w-full py-2.5 border border-dashed border-slate-700 rounded-xl text-xs
                         text-slate-400 hover:border-indigo-500 hover:text-indigo-400 transition-colors"
            >
              + Add Experience
            </button>
          </>
        )}

        {/* ── Skills ── */}
        {activeSection === "skills" && (
          <>
            <SectionHeader title="Skills" icon="⚡" />
            <Textarea
              label="Skills (comma separated)"
              value={data.skills.join(", ")}
              onChange={updateSkills}
              placeholder="React, Python, Leadership, ..."
              rows={4}
            />
            <div className="flex flex-wrap gap-1.5 mt-1">
              {data.skills.filter(Boolean).map((s, i) => (
                <span
                  key={i}
                  className="bg-indigo-900/50 text-indigo-300 text-[10px] px-2.5 py-1 rounded-full border border-indigo-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </>
        )}

        {/* ── Education ── */}
        {activeSection === "education" && (
          <>
            <SectionHeader title="Education" icon="🎓" />
            {data.education.map((edu, eIdx) => (
              <div
                key={edu.id}
                className="bg-slate-800/50 rounded-xl p-4 space-y-3 border border-slate-700/50"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400">School {eIdx + 1}</span>
                  <button
                    onClick={() => removeEdu(edu.id)}
                    className="text-slate-600 hover:text-red-400 text-xs transition-colors"
                  >
                    ✕ Remove
                  </button>
                </div>
                <Input label="School / University" value={edu.school}  onChange={(v) => updateEdu(edu.id, "school", v)}  placeholder="MIT" />
                <Input label="Degree"               value={edu.degree}  onChange={(v) => updateEdu(edu.id, "degree", v)}  placeholder="B.S. Computer Science" />
                <div className="grid grid-cols-2 gap-2">
                  <Input label="Period"       value={edu.period} onChange={(v) => updateEdu(edu.id, "period", v)} placeholder="2018 – 2022" />
                  <Input label="GPA (opt.)"   value={edu.gpa}    onChange={(v) => updateEdu(edu.id, "gpa", v)}    placeholder="3.8" />
                </div>
              </div>
            ))}
            <button
              onClick={addEdu}
              className="w-full py-2.5 border border-dashed border-slate-700 rounded-xl text-xs
                         text-slate-400 hover:border-indigo-500 hover:text-indigo-400 transition-colors"
            >
              + Add Education
            </button>
          </>
        )}
      </div>
    </div>
  );
}

