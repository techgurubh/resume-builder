import { createContext, useContext, useReducer } from "react";
import { defaultData } from "../data/defaultData";
import { uid } from "../utils/uid";

// ─── Action Types ─────────────────────────────────────────────────────────────
export const ACTIONS = {
  UPDATE_PERSONAL: "UPDATE_PERSONAL",
  UPDATE_SUMMARY: "UPDATE_SUMMARY",
  UPDATE_EXP_FIELD: "UPDATE_EXP_FIELD",
  UPDATE_EXP_BULLET: "UPDATE_EXP_BULLET",
  ADD_EXP_BULLET: "ADD_EXP_BULLET",
  REMOVE_EXP_BULLET: "REMOVE_EXP_BULLET",
  ADD_EXP: "ADD_EXP",
  REMOVE_EXP: "REMOVE_EXP",
  UPDATE_SKILLS: "UPDATE_SKILLS",
  UPDATE_EDU_FIELD: "UPDATE_EDU_FIELD",
  ADD_EDU: "ADD_EDU",
  REMOVE_EDU: "REMOVE_EDU",
};

// ─── Reducer ──────────────────────────────────────────────────────────────────
function resumeReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_PERSONAL:
      return {
        ...state,
        personal: { ...state.personal, [action.field]: action.value },
      };

    case ACTIONS.UPDATE_SUMMARY:
      return { ...state, summary: action.value };

    case ACTIONS.UPDATE_EXP_FIELD:
      return {
        ...state,
        experience: state.experience.map((e) =>
          e.id === action.id ? { ...e, [action.field]: action.value } : e
        ),
      };

    case ACTIONS.UPDATE_EXP_BULLET:
      return {
        ...state,
        experience: state.experience.map((e) =>
          e.id === action.id
            ? {
                ...e,
                bullets: e.bullets.map((b, i) =>
                  i === action.idx ? action.value : b
                ),
              }
            : e
        ),
      };

    case ACTIONS.ADD_EXP_BULLET:
      return {
        ...state,
        experience: state.experience.map((e) =>
          e.id === action.id ? { ...e, bullets: [...e.bullets, ""] } : e
        ),
      };

    case ACTIONS.REMOVE_EXP_BULLET:
      return {
        ...state,
        experience: state.experience.map((e) =>
          e.id === action.id
            ? { ...e, bullets: e.bullets.filter((_, i) => i !== action.idx) }
            : e
        ),
      };

    case ACTIONS.ADD_EXP:
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            id: uid(),
            company: "",
            role: "",
            period: "",
            location: "",
            bullets: [""],
          },
        ],
      };

    case ACTIONS.REMOVE_EXP:
      return {
        ...state,
        experience: state.experience.filter((e) => e.id !== action.id),
      };

    case ACTIONS.UPDATE_SKILLS:
      return {
        ...state,
        skills: action.value.split(",").map((s) => s.trim()),
      };

    case ACTIONS.UPDATE_EDU_FIELD:
      return {
        ...state,
        education: state.education.map((e) =>
          e.id === action.id ? { ...e, [action.field]: action.value } : e
        ),
      };

    case ACTIONS.ADD_EDU:
      return {
        ...state,
        education: [
          ...state.education,
          { id: uid(), school: "", degree: "", period: "", gpa: "" },
        ],
      };

    case ACTIONS.REMOVE_EDU:
      return {
        ...state,
        education: state.education.filter((e) => e.id !== action.id),
      };

    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const [data, dispatch] = useReducer(resumeReducer, defaultData);
  return (
    <ResumeContext.Provider value={{ data, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used inside <ResumeProvider>");
  return ctx;
}

