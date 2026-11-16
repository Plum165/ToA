# Theory of Algorithms - Interactive Learning Platform

An immersive, offline-first educational platform designed for studying the **Theory of Algorithms** curriculum (CSC3003S). It modernizes traditional computer science lecture materials with fluid layouts, real-time matrix tracing playgrounds, dynamic curve plots, and instant-feedback concept practice quizzes.

---

## 🎨 Key Features

*   **22+ Adaptive Themes**: Features an ultra-rich selector of curated themes (e.g., *Sapphire & Steel*, *Cat Noir*, *Cyberpunk Glow*, *Dark Emerald*) with instant color adjustments matching your visual comfort.
*   **LaTeX Formula Rendering**: Integrated with **MathJax** to display complex equations, summations, and proofs cleanly inside the browser.
*   **Real-Time Algorithmic Tracers**:
    *   **Asymptotic curves**: An interactive SVG plot of complexity growth classes ($O(1)$, $O(\log n)$, $O(n)$, $O(n \log n)$, $O(n^2)$, $O(2^n)$) with mouse-hover coordinate probes.
    *   **Warshall's Algorithm**: Fully animated directed graph rendering and step-by-step matrix transitions showing transitive paths as they are formed.
    *   **Floyd's Algorithm**: Step-by-step path relaxation mapping shortest path costs dynamically across weighted graph states.
    *   **0/1 Knapsack DP**: Responsive, slider-controlled grid tracing of the sub-problem matrix, combined with a visual backtracking system that maps exactly which items are included in the optimal knapsack.
*   **Dynamic Search Filter**: Instant keyboard filter allowing students to search and switch between any of the 33 comprehensive curriculum topics in less than a second.
*   **Interactive Quizzes**: Generates dynamic multiple-choice code analysis and conceptual questions based on the active topic, with instant scoreboards and complete explanations.

---

## ⚙️ Architecture

This application is built with a highly modular, decoupled architecture:

```txt
src/
├── App.tsx                   # Central coordinate controller & theme manager
├── main.tsx                  # Vite render mount point
├── index.css                 # Global classes, layout margins & 20+ theme variables
├── types.ts                  # Shared curriculum & quiz interfaces
├── data/
│   └── topics.ts             # Complete 33-topic curriculum offline database
└── components/
    ├── Header.tsx            # Branding, stats & custom theme select panel
    ├── Sidebar.tsx           # Category tab buttons & search-filtered topic list
    ├── ContentPanel.tsx      # Multi-tab view (Notes, Code, Tracer, Exercise)
    ├── ExercisePanel.tsx     # Active-topic-dependent multiple choice quiz engine
    └── Visualizers/
        ├── ComplexityChart.tsx # Interactive SVG plot of asymptotic complexity
        ├── WarshallTracer.tsx # Interactive directed graph & matrix trace engine
        ├── FloydTracer.tsx    # Interactive shortest path relaxation trace engine
        └── KnapsackTracer.tsx # Dynamic table with slider control & backtracking
```

---

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation

1.  Clone the repository or extract the ZIP.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Launch the development server on `http://localhost:3000`:
    ```bash
    npm run dev
    ```
4.  Build the production bundle:
    ```bash
    npm run build
    ```

---

## 📚 Educational Value

This platform addresses common hurdles in studying computer science algorithm analysis:
*   **Mathematical Visualizations**: Proves abstract summation rules and recurrences side-by-side with code and visual traces.
*   **Hands-on Practice**: Replaces passive reading with interactive, step-by-step stepping through DP matrices and graphs.
*   **Active Recall**: Engages learners via custom quizzes to immediately test comprehension.

---

## ♿ Accessibility & PWA

*   **Offline-First**: All data, rendering, and logic live locally in the browser, making the app fully operational without an internet connection.
*   **Fluid Layouts**: Built using mobile-first, fluid columns with touch target zones of at least `44px` on interactive elements.
*   **A11y Compliant**: Strict semantic HTML layouts (`<header>`, `<main>`, `<aside>`), explicit labels, and high contrast visibility on all custom color themes.
