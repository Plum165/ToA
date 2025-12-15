
// script.js
import { ALGO_CONTENT } from './algorithms.js';  // Adjust path if needed

console.log(ALGO_CONTENT);          // Should print all topics
console.log(getTopicContent('sums')); // Should print the object for sums

// 1. TOPIC REGISTRY
const CURRICULUM = {
    
    known: [
        { id: 'big', title: 'Big O Notation', type: 'standard' },
        { id: 'omega', title: 'Omega Ω', type: 'standard' },
        { id: 'theta', title: 'Theta Θ ', type: 'standard' },
        { id: 'comp', title: 'Comparing Big O, Omega Ω, Theta Θ ', type: 'standard' }
    ],
    algo: [
        { id: 'sums', title: 'Summation', type: 'custom' },
        { id: 'recurrence', title: 'Recurrence Relations', type: 'Distribution' }
    ],
    dec: [
        { id: 'dec_intro', title: 'Intro & Insertion Sort', type: 'standard' },
        { id: 'dec_topo', title: 'Topological Sort', type: 'standard' },
        { id: 'dec_perm', title: 'Generating Permutations', type: 'standard' },
        { id: 'dec_factor', title: 'Decrease by Factor', type: 'standard' },
        { id: 'dec_var', title: 'Variable Size Decrease', type: 'standard' },
         { id: 'dec_kth', title: 'k-th Order Statistic (QuickSelect)', type: 'standard' }
    ],
    div: [
        { id: 'div_intro', title: 'Intro & Merge Sort', type: 'standard' },
        { id: 'div_quick', title: 'QuickSort', type: 'standard' },
        { id: 'div_geom', title: 'Geometric D&C', type: 'standard' },
         { id: 'div_strassen', title: 'Strassen\'s Matrix Multiplication', type: 'standard' }
    ],
   tra: [
        { id: 'trans_intro', title: 'Intro', type: 'standard' },
        { id: 'trans_presort', title: 'Instance Simplification (Pre-sorting)', type: 'standard' },
        { id: 'trans_horner', title: 'Horner\'s Rule (Polynomials)', type: 'standard' },
        { id: 'trans_expo', title: 'Binary Exponentiation', type: 'standard' },
        { id: 'trans_red', title: 'Problem Reduction (LCM)', type: 'standard' }
    ],
    spa: [
        { id: 'spa_intro', title: 'Intro & Counting Sort', type: 'standard' },
        { id: 'spa_horspool', title: 'Horspool\'s Algorithm', type: 'standard' },
        { id: 'spa_boyer', title: 'Boyer-Moore Algorithm', type: 'standard' }
    ],
     bru: [
        { id: 'brute_intro', title: 'Intro & Closest Pair', type: 'standard' },
        { id: 'bf_string', title: 'String Matching', type: 'standard' },
    { id: 'bf_geom', title: 'Geometric Problems', type: 'standard' },
    { id: 'bf_exhaust', title: 'Exhaustive Search', type: 'standard' }
    ],
   gre: [
        { id: 'gre_intro', title: 'Intro & Change Making', type: 'standard' },
        { id: 'gre_huff', title: 'Huffman Coding', type: 'standard' }
    ],
   dyn: [
        { id: 'dyn_intro', title: 'Intro: Principle & Fibonacci', type: 'standard' },
        { id: 'dyn_change', title: 'Change Making (DP)', type: 'standard' },
        { id: 'dyn_warshall', title: 'Warshall\'s Algorithm (Closure)', type: 'standard' },
        { id: 'dyn_floyd', title: 'Floyd\'s Algorithm (Shortest Path)', type: 'standard' },
        { id: 'dyn_knap', title: 'Knapsack Problem (DP)', type: 'standard' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    loadTopic('big', 'known');
});

function setupNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            renderMenu(e.target.dataset.category);
        });
    });
    renderMenu('known');
}

function renderMenu(category) {
    const menu = document.getElementById('topic-menu');
    menu.innerHTML = '';
    const items = CURRICULUM[category] || [];
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = "p-3 rounded glass cursor-pointer hover:bg-white/5 transition-colors flex items-center gap-3";
        div.onclick = () => loadTopic(item.id, category);
        div.innerHTML = `<div class="w-2 h-2 rounded-full bg-red-500"></div><span class="text-sm font-medium">${item.title}</span>`;
        menu.appendChild(div);
    });
}
function getTopicContent(id) {
    for (const moduleKey in ALGO_CONTENT) {
        const module = ALGO_CONTENT[moduleKey];
        if (module[id]) return module[id];
    }
    return null;
}


function loadTopic(id, category) {
    const root = document.getElementById('topic-root');
    const content = getTopicContent(id);
    if (content) {
        renderStandardTopic(id, root);
    } else {
        root.innerHTML = `<div class="p-10 text-center opacity-50">Content coming soon...</div>`;
    }
}

function renderStandardTopic(id, container) {
   const content = getTopicContent(id); // <-- use lookup
    if (!content) {
        container.innerHTML = `<div class="p-10 text-center opacity-50">Content not found.</div>`;
        return;
    }

    container.innerHTML = `
        <div class="flex flex-col h-full">
            <h2 class="text-2xl font-bold mb-4 border-b border-white/10 pb-2">${content.title}</h2>
            <div class="flex gap-2 mb-4">
                <button onclick="switchContentTab('notes')" class="content-tab-btn btn btn-primary text-xs" id="tab-notes">Notes</button>
                <button onclick="switchContentTab('code')" class="content-tab-btn btn btn-ghost text-xs" id="tab-code">Code</button>
                <button onclick="switchContentTab('exercise')" class="content-tab-btn btn btn-ghost text-xs" id="tab-exercise">Exercise</button>
            </div>
            <div id="content-notes" class="tab-content block animate-fade-in">
                <div class="text-sm md:text-base leading-relaxed">${content.notes}</div>
            </div>
            <div id="content-code" class="tab-content hidden">
                <pre class="bg-black/30 p-4 rounded-lg overflow-x-auto text-sm text-green-400 font-mono border border-white/10"><code>${content.code}</code></pre>
            </div>
            <div id="content-exercise" class="tab-content hidden">
                <div id="exercise-container" class="glass p-6 rounded-lg min-h-[300px]"></div>
            </div>
        </div>
    `;

    // Initialize logic
    if (window.exerciseEngine) window.exerciseEngine = null; // Clear old instance
    window.exerciseEngine = new NotationExercise('exercise-container');
    window.exerciseEngine.init();

    // Determine which exercise engine to use
    if (id === 'sums' || id === 'recurrence') {
        window.exerciseEngine = new EfficiencyExercise('exercise-container');
    } else {
        // Default for notations (big, omega, etc)
        window.exerciseEngine = new NotationExercise('exercise-container');
    }
    
    window.exerciseEngine.init();
    if (window.MathJax) MathJax.typesetPromise();

    // DRAW THE CHARTS (New Logic)
    if (id === 'big') drawNotationChart('big', 'chart-big');
    if (id === 'omega') drawNotationChart('omega', 'chart-omega');
    if (id === 'theta') drawNotationChart('theta', 'chart-theta');
}


// --- NEW CHART FUNCTION ---
function drawNotationChart(type, canvasId) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    // Generate Data points for n = 0 to 10
    const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let datasets = [];

    // Common styling
    const red = 'rgba(239, 68, 68, 1)';
    const blue = 'rgba(59, 130, 246, 1)';
    const green = 'rgba(34, 197, 94, 1)';

    if (type === 'big') {
        // Big O: t(n) <= c*g(n)
        // t(n) fluctuates but stays under c*g(n)
        datasets = [
            {
                label: 'c · g(n) (Upper Bound)',
                data: labels.map(n => n * 1.5 + 2), // Smooth line
                borderColor: red,
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4
            },
            {
                label: 't(n) (Algorithm)',
                data: labels.map(n => n + Math.sin(n)*2), // Wobbly line below
                borderColor: blue,
                borderWidth: 2,
                tension: 0.4
            }
        ];
    } else if (type === 'omega') {
        // Omega: t(n) >= c*g(n)
        datasets = [
            {
                label: 't(n) (Algorithm)',
                data: labels.map(n => n * 2 + Math.sin(n)*3 + 5), // High wobbly
                borderColor: blue,
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'c · g(n) (Lower Bound)',
                data: labels.map(n => n * 0.8), // Low smooth
                borderColor: green,
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4
            }
        ];
    } else if (type === 'theta') {
        // Theta: Sandwiched
        datasets = [
            {
                label: 'c1 · g(n) (Upper)',
                data: labels.map(n => n * 2.5 + 5),
                borderColor: red,
                borderWidth: 1,
                borderDash: [5, 5],
                tension: 0.4
            },
            {
                label: 't(n) (Exact)',
                data: labels.map(n => n * 1.8 + Math.sin(n)), // Middle
                borderColor: blue,
                borderWidth: 3,
                tension: 0.4
            },
            {
                label: 'c2 · g(n) (Lower)',
                data: labels.map(n => n * 1.0),
                borderColor: green,
                borderWidth: 1,
                borderDash: [5, 5],
                tension: 0.4
            }
        ];
    }

    new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { display: false, grid: { display: false } },
                x: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#888' } }
            },
            plugins: {
                legend: { labels: { color: '#ddd' } }
            }
        }
    });
}

window.switchContentTab = function(tabName) {
    document.querySelectorAll('.content-tab-btn').forEach(b => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-ghost');
    });
    document.getElementById(`tab-${tabName}`).classList.remove('btn-ghost');
    document.getElementById(`tab-${tabName}`).classList.add('btn-primary');

    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    document.getElementById(`content-${tabName}`).classList.remove('hidden');
}
// ===============================
// WARSHALL INTERACTIVE CONTROLLER (FIXED)
// ===============================

function initWarshall() {
  const size = 4;
  let currentK = 1;
  let stepIndex = 1;

  // adjacency matrix (initial)
  const adjMatrix = [
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,0],
    [1,0,0,0]
  ];

  // Keep step-by-step matrix copies
  const steps = [];
  let R = adjMatrix.map(r => [...r]);
  steps.push(R.map(r => [...r])); // step 0

  // Precompute all k steps
  for (let k = 0; k < size; k++) {
    let newR = R.map(r => [...r]);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (R[i][j] === 0 && (R[i][k] && R[k][j])) {
          newR[i][j] = 1;
        }
      }
    }
    R = newR;
    steps.push(R.map(r => [...r]));
  }

  function renderMatrix(stepIdx) {
    const container = document.getElementById("warshall-matrix");
    container.innerHTML = "";

    const mat = steps[stepIdx];
    // header
    container.innerHTML += "<div></div>";
    for (let j = 0; j < size; j++) {
      container.innerHTML += `<div class="${j+1===currentK?'k-col font-bold':''}">${j+1}</div>`;
    }

    for (let i = 0; i < size; i++) {
      container.innerHTML += `<div class="${i+1===currentK?'k-row font-bold':''}">${i+1}</div>`;
      for (let j = 0; j < size; j++) {
        let cls = "bg-black/40";
        if (i+1===currentK) cls += " k-row";
        if (j+1===currentK) cls += " k-col";
        if (steps[stepIdx][i][j] === 1 && steps[Math.max(stepIdx-1,0)][i][j] === 0) {
          cls += " new-edge";
        } else if (mat[i][j] === 1) {
          cls += " text-blue-300";
        }
        container.innerHTML += `<div class="${cls}">${mat[i][j]}</div>`;
      }
    }
  }

  function highlightNode() {
    document.querySelectorAll("#warshall-graph [data-node]").forEach(n => {
      n.classList.remove("k-active-node");
      if (parseInt(n.dataset.node) === currentK) {
        n.classList.add("k-active-node");
      }
    });
  }

  function updateUI(stepIdx) {
    document.getElementById("k-indicator").innerText = `Current k = ${currentK}`;
    renderMatrix(stepIdx);
    highlightNode();
  }

  // Control buttons
  const nextBtn = document.getElementById("next-k");
  const prevBtn = document.getElementById("prev-k");

  nextBtn.addEventListener("click", () => {
    stepIndex++;
    if (stepIndex >= steps.length) stepIndex = steps.length - 1;
    currentK = Math.min(stepIndex, size);
    updateUI(stepIndex);
  });

  prevBtn.addEventListener("click", () => {
    stepIndex--;
    if (stepIndex < 0) stepIndex = 0;
    currentK = Math.min(stepIndex, size);
    updateUI(stepIndex);
  });

  // initial render
  updateUI(1);
}

// Wait until the DOM is fully ready
window.addEventListener("DOMContentLoaded", () => {
  initWarshall();
});
