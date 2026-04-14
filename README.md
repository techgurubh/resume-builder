# 📄 AI Resume Builder

A fully functional resume builder built with **React + Vite + Tailwind CSS**.  
Switch between **5 distinct templates**, edit all sections live, and print to A4 PDF — no backend required.

---

## ✨ Features

- 🖊️ **Live editing** — changes reflect instantly in the preview
- 🎨 **5 templates** — Modern, Professional, Creative, Minimal, Executive
- 🖨️ **Print to A4 PDF** — browser-native, no extra libraries
- 💾 **Central state** — switching templates never loses your data
- ⚡ **Zero dependencies beyond React + Tailwind**

---

## 📁 Project Structure

```
resume-builder/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── form/
│   │   │   ├── FormPanel.jsx        # Left panel with all form sections
│   │   │   ├── Input.jsx            # Reusable labeled input
│   │   │   ├── Textarea.jsx         # Reusable labeled textarea
│   │   │   └── SectionHeader.jsx    # Section title with icon
│   │   └── templates/
│   │       ├── ModernTemplate.jsx
│   │       ├── ProfessionalTemplate.jsx
│   │       ├── CreativeTemplate.jsx
│   │       ├── MinimalTemplate.jsx
│   │       └── ExecutiveTemplate.jsx
│   ├── context/
│   │   └── ResumeContext.jsx        # Global state via Context + useReducer
│   ├── data/
│   │   └── defaultData.js           # Sample resume data
│   ├── hooks/
│   │   └── usePrint.js              # Print-to-A4 logic
│   ├── utils/
│   │   └── uid.js                   # Unique ID generator
│   ├── App.jsx                      # Root layout
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind directives
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/techgurubh/resume-builder.git
cd ai-resume-builder

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

      https://techgurubh.github.io/resume-builder/

---

## 🖨️ Print / Export PDF

Click the **"Print / Save PDF (A4)"** button in the top-right of the preview panel.  
Your browser's print dialog will open — choose **"Save as PDF"** and set paper size to **A4**.

---

## 🛠️ Built With

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
