import { Topic } from '../types';

export const TOPICS: Record<string, Topic> = {
  // ============================================
  // CATEGORY: NOTATIONS (known)
  // ============================================
  big: {
    id: 'big',
    title: 'Big O Notation (Upper Bound)',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definition</h3>
          <p class="leading-relaxed text-sm md:text-base">
            A function $t(n) \\in O(g(n))$ if and only if there is a positive constant $c$ and an integer $n_0$ such that <span class="font-bold text-accent whitespace-nowrap">$t(n) \\le c \\cdot g(n)$</span> for all $n \\ge n_0$.
          </p>
          <p class="mt-2 text-sm opacity-80">
            This represents the <strong>Worst Case</strong> scenario. It guarantees that the algorithm will not take more time than this bound.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Worked Example Proof: $100n + 5 \\in O(n)$</span>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li><strong>Goal:</strong> Find $c$ such that $100n + 5 \\le c \\cdot n$.</li>
            <li><strong>Divide by n:</strong> $100 + 5/n \\le c$.</li>
            <li><strong>Pick $n_0 = 5$:</strong> Then $100 + 5/5 = 101$.</li>
            <li><strong>Result:</strong> If we choose $c = 101$, the condition holds for all $n \\ge 5$. Hence proved.</li>
          </ul>
        </div>
        <div class="warn-box">
          <strong>Key Takeaway:</strong> We ignore constants and lower-order terms when evaluating asymptotic complexity. For example, $0.5n^2 + 100n$ simplifies to $O(n^2)$.
        </div>
      </div>
    `,
    code: `// Linear Search: Worst case is O(n) (item at the end or not present)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// Bubble Sort: Worst case is O(n^2) (nested loop comparisons)
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}`
  },
  omega: {
    id: 'omega',
    title: 'Omega Notation Ω (Lower Bound)',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definition</h3>
          <p class="leading-relaxed text-sm md:text-base">
            A function $t(n) \\in \\Omega(g(n))$ if there is a positive constant $c$ and integer $n_0$ such that <span class="font-bold text-accent whitespace-nowrap">$t(n) \\ge c \\cdot g(n)$</span> for all $n \\ge n_0$.
          </p>
          <p class="mt-2 text-sm opacity-80">
            This represents the <strong>Best Case</strong> scenario. The algorithm takes <em>at least</em> this much time for all sufficiently large inputs.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Worked Example Proof: $n^3 + 2n \\in \\Omega(n^2)$</span>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>We want to find $c, n_0 > 0$ such that $n^3 + 2n \\ge c \\cdot n^2$.</li>
            <li>Since $n^3 \\ge n^2$ for all $n \\ge 1$, we have $n^3 + 2n \\ge n^2$.</li>
            <li>Pick $c = 1$ and $n_0 = 1$. The inequality holds, proving that $n^3 + 2n \\in \\Omega(n^2)$.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Linear Search: Best Case is Ω(1) (found at index 0 immediately)
function linearSearchBestCase(arr, target) {
    if (arr[0] === target) return 0;
    // ... rest of linear search ...
}

// Optimized Bubble Sort: Best Case is Ω(n) (array already sorted)
function bubbleSortOptimized(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
}`
  },
  theta: {
    id: 'theta',
    title: 'Theta Notation Θ (Tight Bound)',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definition</h3>
          <p class="leading-relaxed text-sm md:text-base">
            A function $t(n) \\in \\Theta(g(n))$ if and only if there are positive constants $c_1, c_2$ and an integer $n_0$ such that:
          </p>
          <div class="latex-output">$c_2 \\cdot g(n) \\le t(n) \\le c_1 \\cdot g(n) \\quad \\forall n \\ge n_0$</div>
          <p class="text-sm opacity-80 mt-2">
            This represents the <strong>Average or Tight Bound</strong>. It sandwiches the function, showing the algorithm grows at exactly the same rate as $g(n)$.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Theta vs Big O Concept</span>
          <p class="text-sm mb-2">Theta is a stronger claim than Big O. While we can say $100n + 5 \\in O(n^2)$ (loose bound), it is only $\\Theta(n)$ because it grows strictly linearly.</p>
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong class="text-green-400">Correct:</strong> $3n^2 + 5 \\in \\Theta(n^2)$</li>
            <li><strong class="text-red-400">Incorrect:</strong> $3n^2 + 5 \\in \\Theta(n^3)$</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Summing an array: Always takes exactly n operations
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
} // Time Complexity is Θ(n) in best, worst, and average cases

// Selection Sort: Always performs Θ(n^2) comparisons regardless of layout
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
}`
  },
  comp: {
    id: 'comp',
    title: 'Comparing Efficiency Classes',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Growth Rate Comparison</h3>
          <p class="leading-relaxed text-sm md:text-base">
            As input size $n$ scales to infinity, the efficiency of different complexity classes varies dramatically.
          </p>
        </div>
        <div class="glass p-4 rounded-lg">
          <h4 class="font-bold text-sm mb-2 text-center text-accent">Efficiency Hierarchy</h4>
          <p class="text-xs text-center font-mono opacity-85 mb-3">
            $O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)$
          </p>
          <div class="overflow-x-auto rounded-lg">
            <table class="w-full text-center text-xs font-mono">
              <thead>
                <tr class="bg-white/10 text-white font-bold">
                  <th class="p-2 border border-white/10">n</th>
                  <th class="p-2 border border-white/10 text-green-400">log₂n</th>
                  <th class="p-2 border border-white/10 text-blue-400">n</th>
                  <th class="p-2 border border-white/10 text-cyan-400">n log n</th>
                  <th class="p-2 border border-white/10 text-yellow-400">n²</th>
                  <th class="p-2 border border-white/10 text-orange-400">2ⁿ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5 opacity-90">
                <tr><td class="p-2 font-bold">10</td><td class="p-2">3.3</td><td class="p-2">10</td><td class="p-2">33</td><td class="p-2">100</td><td class="p-2">1024</td></tr>
                <tr><td class="p-2 font-bold">100</td><td class="p-2">6.6</td><td class="p-2">100</td><td class="p-2">664</td><td class="p-2">10k</td><td class="p-2">Huge (1.27E30)</td></tr>
                <tr><td class="p-2 font-bold">1k</td><td class="p-2">10</td><td class="p-2">1k</td><td class="p-2">9.9k</td><td class="p-2">1M</td><td class="p-2">Incalculable</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    code: `// O(1) Constant Time
function getFirst(arr) {
    return arr[0] || null;
}

// O(log n) Logarithmic Time
function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
  },

  // ============================================
  // CATEGORY: ALGORITHM EFFICIENCY (algo)
  // ============================================
  sums: {
    id: 'sums',
    title: 'Summation & Sequential Efficiency',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Analyzing Loops</h3>
          <p class="leading-relaxed text-sm md:text-base">
            For non-recursive sequential algorithms, we analyze efficiency by formulating a summation representing the number of basic operations executed.
          </p>
        </div>
        <div class="glass p-4 rounded-lg">
          <h4 class="font-bold text-sm mb-2 text-center text-accent">Essential Math Rules</h4>
          <ul class="space-y-3 text-xs md:text-sm font-mono leading-relaxed">
            <li><strong>R1 (Constant):</strong> $\\sum_{i=l}^{u} 1 = (u - l + 1)$<br><span class="opacity-60 text-xs">// e.g. sum of 1 from 1 to n is n</span></li>
            <li><strong>R2 (Linear):</strong> $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} \\approx \\frac{1}{2}n^2$<br><span class="opacity-60 text-xs">// Arithmetic Series</span></li>
            <li><strong>R3 (Squares):</strong> $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6} \\approx \\frac{1}{3}n^3$</li>
            <li><strong>R4 (Geometric):</strong> $\\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$<br><span class="opacity-60 text-xs">// Powers of 2</span></li>
          </ul>
        </div>
        <div class="step-card">
          <span class="step-title">Worked Example: Nested Dependent Loops</span>
          <div class="code-box text-xs mb-2">
for i = 0 to n - 1 do
  for j = 0 to i do
    print(j)
          </div>
          <p class="text-sm">Outer loop runs $n$ times. Inner loop runs $i+1$ times. The sum is:</p>
          <div class="latex-output">$\\sum_{i=0}^{n-1} (i+1) = \\sum_{j=1}^{n} j = \\frac{n(n+1)}{2} \\in \\Theta(n^2)$</div>
        </div>
      </div>
    `,
    code: `// Sum of Matrix: We iterate n x n times
function addMatrices(A, B, n) {
    let C = Array.from({length: n}, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j]; // Basic operation
        }
    }
    return C;
} // Complexity is Θ(n^2)`
  },
  recurrence: {
    id: 'recurrence',
    title: 'Recurrence Relations & Master Theorem',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Recursive Algorithm Analysis</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Recursive algorithms are analyzed using mathematical recurrences of form $T(n) = a \\cdot T(n/b) + f(n)$ where $a \\ge 1, b > 1$.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">The Master Theorem</span>
          <p class="text-xs mb-2">For recurrences of form $T(n) = a \\cdot T(n/b) + \\Theta(n^d)$:</p>
          <div class="bg-black/30 p-3 rounded font-mono text-xs space-y-1">
            <p>1. If $a < b^d$ : $T(n) \\in \\Theta(n^d)$ (Driver function dominates)</p>
            <p>2. If $a = b^d$ : $T(n) \\in \\Theta(n^d \\log n)$ (Balanced split-combine)</p>
            <p>3. If $a > b^d$ : $T(n) \\in \\Theta(n^{\\log_b a})$ (Sub-problem roots dominate)</p>
          </div>
        </div>
        <div class="step-card">
          <span class="step-title">Exam Application (Array Sum Claim Proof)</span>
          <p class="text-sm">A student claims that summing an array using divide-and-conquer takes $O(\\log n)$ because we split the array in half recursively.</p>
          <p class="text-sm mt-1"><strong>The proof of why they are wrong:</strong></p>
          <ul class="list-decimal pl-5 space-y-1 text-xs">
            <li>We divide into 2 halves ($a=2, b=2$) and perform 1 final addition ($d=0$).</li>
            <li>Recurrence: $T(n) = 2T(n/2) + 1$.</li>
            <li>Compare $a$ vs $b^d$: $2$ vs $2^0 = 1$. Since $2 > 1$, we are in Case 3.</li>
            <li>Asymptotic complexity is $T(n) \\in \\Theta(n^{\\log_2 2}) = \\Theta(n^1) = \\Theta(n)$ (Linear).</li>
          </ul>
          <p class="text-xs font-bold text-accent mt-2">Conclusion: The classmate's claim of $O(\\log n)$ is WRONG.</p>
        </div>
      </div>
    `,
    code: `// Binary Search Recurrence: T(n) = T(n/2) + 1
// a = 1, b = 2, d = 0 (constant work to compare)
// a = b^d (1 = 2^0), so Case 2: Θ(n^0 log n) = Θ(log n)

// Naive Fibonacci Recurrence: T(n) = T(n-1) + T(n-2) + 1
// Solved by characteristic equations: Θ(1.618^n) - Exponential!`
  },

  // ============================================
  // CATEGORY: BRUTE FORCE (bru)
  // ============================================
  brute_intro: {
    id: 'brute_intro',
    title: 'Brute Force: Introduction & Closest Pair',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Brute Force is a straightforward, direct approach to solving a problem based on the problem statement and definition.
          </p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-xs opacity-85">
            <li><strong>Pros:</strong> Highly versatile, simple, guaranteed correct if a solution exists.</li>
            <li><strong>Cons:</strong> Almost never produces efficient algorithms (often exponential or high-order polynomial).</li>
          </ul>
        </div>
        <div class="step-card">
          <span class="step-title">Closest Pair Problem</span>
          <p class="text-sm">Given $n$ points in a 2D plane, find the pair with the smallest Euclidean distance.</p>
          <p class="text-sm font-mono mt-2 bg-black/20 p-2 rounded text-center">
            $d = \\sqrt{(x_i - x_j)^2 + (y_i - y_j)^2}$
          </p>
          <p class="text-xs opacity-75 mt-2">
            Brute Force compares every point $i$ with every point $j > i$. Total comparisons: $n(n-1)/2 \\in \\Theta(n^2)$.
          </p>
        </div>
      </div>
    `,
    code: `// Brute Force Closest Pair of Points
function bruteForceClosestPair(points) {
    let minDist = Infinity;
    let closestPair = [];
    let n = points.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let dx = points[i].x - points[j].x;
            let dy = points[i].y - points[j].y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < minDist) {
                minDist = dist;
                closestPair = [points[i], points[j]];
            }
        }
    }
    return { distance: minDist, pair: closestPair };
}`
  },
  bf_string: {
    id: 'bf_string',
    title: 'Brute Force String Matching',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">String Matching Definition</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Given a text $T$ of length $n$ and a pattern $P$ of length $m$, find the first occurrence of $P$ in $T$.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">The Search Strategy</span>
          <p class="text-xs md:text-sm">
            Align the pattern at the first character of the text. Compare characters left-to-right. On a mismatch, shift the pattern <strong>exactly 1 position</strong> to the right, and start comparisons again.
          </p>
          <ul class="list-disc pl-5 mt-2 text-xs space-y-1 opacity-80">
            <li><strong>Worst Case:</strong> Compare $m$ characters for each of the $n-m+1$ positions. Total comparisons: $m(n-m+1) \\in \\Theta(nm)$.</li>
            <li><strong>Average Case:</strong> On natural language, mismatches occur very early, giving $\\Theta(n)$ time.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Brute Force String Match
function stringMatch(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    
    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && text[i + j] === pattern[j]) {
            j++;
        }
        if (j === m) return i; // Pattern matched at index i
    }
    return -1; // No match found
}`
  },
  bf_geom: {
    id: 'bf_geom',
    title: 'Geometric Brute Force & Convex Hull',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Convex Hull Problem</h3>
          <p class="leading-relaxed text-sm md:text-base">
            The Convex Hull of a set of points is the smallest convex polygon that contains all points in the set. Think of snapping a rubber band around pins.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Brute Force Strategy</span>
          <p class="text-sm">
            For every pair of points $p_1, p_2$ in the set, draw a line segment. If all other points lie on the <strong>same side</strong> of this line, then the segment forms a boundary of the Convex Hull.
          </p>
          <ul class="list-disc pl-5 mt-2 text-xs space-y-1 opacity-85">
            <li>Check every pair of points: $\\Theta(n^2)$ pairs.</li>
            <li>Check $n-2$ other points for each pair: $\\Theta(n)$ checks.</li>
            <li><strong>Total Complexity:</strong> $\\Theta(n^3)$ (very slow).</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Cubic Convex Hull concept
// We check if ax + by - c has the same sign for all other points
function solveLineSide(p1, p2, p) {
    let a = p2.y - p1.y;
    let b = p1.x - p2.x;
    let c = p1.x * p2.y - p1.y * p2.x;
    return a * p.x + b * p.y - c;
}`
  },
  bf_exhaust: {
    id: 'bf_exhaust',
    title: 'Exhaustive Search',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Combinatorial Optimization</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Exhaustive search systematically generates every candidate solution, tests them, and returns the absolute best.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Classic NP-Hard Problems</span>
          <ul class="space-y-3 mt-2 text-xs md:text-sm">
            <li><strong>Travelling Salesperson (TSP):</strong> Find the shortest tour visiting $n$ cities. Generating all tours takes $(n-1)! / 2$ permutations. Time is $\\Theta(n!)$.</li>
            <li><strong>Knapsack Problem:</strong> Fill a knapsack of capacity $W$ with subsets of items to maximize value. Generating all $2^n$ subsets takes $\\Theta(2^n)$ time.</li>
            <li><strong>Assignment Problem:</strong> Assign $n$ people to $n$ jobs to minimize cost. Takes $n!$ permutations. Time is $\\Theta(n!)$.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Knapsack Exhaustive Search via Binary Subsets
function knapsackExhaustive(items, capacity) {
    let n = items.length;
    let bestValue = 0;
    let bestSubset = [];
    
    // Total subsets is 2^n
    for (let i = 0; i < (1 << n); i++) {
        let currentWeight = 0;
        let currentValue = 0;
        let currentSubset = [];
        
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) !== 0) {
                currentWeight += items[j].weight;
                currentValue += items[j].value;
                currentSubset.push(items[j]);
            }
        }
        
        if (currentWeight <= capacity && currentValue > bestValue) {
            bestValue = currentValue;
            bestSubset = currentSubset;
        }
    }
    return { value: bestValue, items: bestSubset };
}`
  },

  // ============================================
  // CATEGORY: DECREASE & CONQUER (dec)
  // ============================================
  dec_intro: {
    id: 'dec_intro',
    title: 'Decrease & Conquer & Insertion Sort',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The Strategy</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Solve a problem by reducing an instance of size $n$ to an instance of size $n-1$, solving it, and extending the solution.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Insertion Sort</span>
          <p class="text-sm">
            Assume the sub-array $A[0 \\dots i-1]$ is already sorted. Insert $A[i]$ into its correct location by shifting larger elements right.
          </p>
          <ul class="list-disc pl-5 mt-2 text-xs space-y-1 opacity-80">
            <li><strong>Worst Case (Reverse):</strong> $\\sum_{i=1}^{n-1} i = \\frac{n(n-1)}{2} \\in \\Theta(n^2)$.</li>
            <li><strong>Best Case (Sorted):</strong> $\\Theta(n)$ comparisons. Excellent for nearly-sorted lists!</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Insertion Sort in JavaScript
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let v = arr[i];
        let j = i - 1;
        // Shift elements of arr[0..i-1] that are greater than v
        while (j >= 0 && arr[j] > v) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = v;
    }
    return arr;
}`
  },
  dec_topo: {
    id: 'dec_topo',
    title: 'Topological Sort',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definition</h3>
          <p class="leading-relaxed text-sm md:text-base">
            For a Directed Acyclic Graph (DAG), list vertices so that for every edge $u \\to v$, $u$ comes before $v$ in the ordering.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Source Removal Algorithm</span>
          <p class="text-xs md:text-sm">
            1. Find a vertex with <strong>in-degree 0</strong> (no incoming edges).<br>
            2. Add it to the sorted list.<br>
            3. Remove the vertex and all its outgoing edges from the graph.<br>
            4. Repeat until the graph is empty. If no source exists but nodes remain, there is a cycle!
          </p>
        </div>
      </div>
    `,
    code: `// Source Removal Topological Sort Concept
function topologicalSort(numVertices, edges) {
    let inDegree = Array(numVertices).fill(0);
    let adj = Array.from({length: numVertices}, () => []);
    
    edges.forEach(([u, v]) => {
        adj[u].push(v);
        inDegree[v]++;
    });
    
    let queue = [];
    for (let i = 0; i < numVertices; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    let order = [];
    while (queue.length > 0) {
        let u = queue.shift();
        order.push(u);
        
        adj[u].forEach(v => {
            inDegree[v]--;
            if (inDegree[v] === 0) queue.push(v);
        });
    }
    
    return order.length === numVertices ? order : "Cycle Detected";
}`
  },
  dec_perm: {
    id: 'dec_perm',
    title: 'Generating Permutations (Johnson-Trotter)',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Johnson-Trotter Algorithm</h3>
          <p class="leading-relaxed text-sm md:text-base">
            An elegant algorithm to generate all $n!$ permutations without recursion, where each permutation differs from its predecessor by swapping exactly two adjacent elements.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">The Mobil Rule</span>
          <p class="text-xs md:text-sm">
            Each number is assigned a direction (left $\\leftarrow$ or right $\\rightarrow$). A number is <strong>Mobile</strong> if it points to an adjacent neighbor that is smaller than itself.
          </p>
          <ol class="list-decimal pl-5 mt-2 text-xs space-y-1">
            <li>Find the largest mobile integer $k$.</li>
            <li>Swap $k$ with the element it points to.</li>
            <li>Reverse the direction of all elements larger than $k$.</li>
            <li>Repeat until no mobile elements remain.</li>
          </ol>
        </div>
      </div>
    `,
    code: `// Concept: Find largest mobile element
function getLargestMobileIndex(arr, dirs) {
    let maxVal = -1;
    let maxIdx = -1;
    for (let i = 0; i < arr.length; i++) {
        let dir = dirs[i]; // -1 for Left, 1 for Right
        let nextIdx = i + dir;
        if (nextIdx >= 0 && nextIdx < arr.length) {
            if (arr[i] > arr[nextIdx] && arr[i] > maxVal) {
                maxVal = arr[i];
                maxIdx = i;
            }
        }
    }
    return maxIdx;
}`
  },
  dec_factor: {
    id: 'dec_factor',
    title: 'Decrease by a Constant Factor',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Logarithmic Reduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Reduce problem size by a constant factor (usually $2$) at each step. This yields highly optimal $\\Theta(\\log n)$ complexity.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Fake Coin Problem</span>
          <p class="text-xs md:text-sm leading-relaxed">
            Among $n$ coins, find one fake coin that is lighter. <br>
            <strong>Decrease by 3-Way split:</strong> Divide the coins into three piles: $A, B$ of size $\\lfloor n/3 \\rfloor$ and $C$ of the remainder. Weigh $A$ vs $B$ on a balance scale.
          </p>
          <ul class="list-disc pl-5 mt-2 text-xs space-y-1 opacity-85">
            <li>If $A < B$: Recurse on pile $A$.</li>
            <li>If $A > B$: Recurse on pile $B$.</li>
            <li>If $A == B$: Recurse on pile $C$ (the remaining coins).</li>
            <li>This takes exactly $\\Theta(\\log_3 n)$ weighings.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Russian Peasant Multiplication (Multiplication à la Russe)
// Multiply n x m by halving n and doubling m
function RussianPeasantMultiply(n, m) {
    let res = 0;
    while (n > 0) {
        if (n % 2 !== 0) { // If odd, accumulate m
            res += m;
        }
        n = Math.floor(n / 2); // Halve
        m = m * 2;             // Double
    }
    return res;
}`
  },
  dec_var: {
    id: 'dec_var',
    title: 'Variable Size Decrease',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Variable Size Reduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            The reduction factor varies depending on the data values of the subproblem instance.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Euclid's GCD Algorithm</span>
          <p class="text-sm">Based on $gcd(m, n) = gcd(n, m \\% n)$. The reduction step is highly variable but guarantees logarithmic bounds in the worst case.</p>
        </div>
        <div class="step-card">
          <span class="step-title">Interpolation Search</span>
          <p class="text-sm leading-relaxed">
            Instead of checking the middle, make an educated guess based on values (like finding "Z" at the end of a phone book).
          </p>
          <div class="bg-black/30 p-2 rounded text-xs font-mono mb-2">
            pos = lo + [(target - A[lo]) * (hi - lo)] / (A[hi] - A[lo])
          </div>
          <ul class="list-disc pl-5 text-xs space-y-1 opacity-80">
            <li><strong>Average Case:</strong> $\\Theta(\\log \\log n)$ - phenomenally fast!</li>
            <li><strong>Worst Case:</strong> $\\Theta(n)$ if values grow exponentially.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Euclid's GCD
function gcd(m, n) {
    while (n !== 0) {
        let r = m % n;
        m = n;
        n = r;
    }
    return m;
}

// Interpolation Search
function interpolationSearch(arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi && target >= arr[lo] && target <= arr[hi]) {
        if (lo === hi) {
            if (arr[lo] === target) return lo;
            return -1;
        }
        let pos = lo + Math.floor(((hi - lo) * (target - arr[lo])) / (arr[hi] - arr[lo]));
        if (arr[pos] === target) return pos;
        if (arr[pos] < target) lo = pos + 1;
        else hi = pos - 1;
    }
    return -1;
}`
  },
  dec_kth: {
    id: 'dec_kth',
    title: 'k-th Order Statistic (QuickSelect)',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The Selection Problem</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Find the $k$-th smallest element in an unsorted array of size $n$ without sorting the entire array first.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">QuickSelect Algorithm</span>
          <p class="text-xs md:text-sm">
            Partition the array around a pivot element $s$. Everything left is $\\le$ pivot; everything right is $\\ge$ pivot.
          </p>
          <ul class="list-disc pl-5 mt-2 text-xs space-y-1 opacity-85">
            <li>If pivot index $s == k$, we have found our element!</li>
            <li>If $s > k$, recursively search the <strong>left</strong> partition.</li>
            <li>If $s < k$, recursively search the <strong>right</strong> partition.</li>
            <li><strong>Average Case:</strong> $T(n) = T(n/2) + n \\in \\Theta(n)$ time.</li>
            <li><strong>Worst Case:</strong> $\\Theta(n^2)$ if pivot selections are highly skewed.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// QuickSelect Implementation
function quickSelect(arr, k) {
    return select(arr, 0, arr.length - 1, k);
}

function select(arr, l, r, k) {
    if (l === r) return arr[l];
    let s = partition(arr, l, r);
    if (s === k) return arr[s];
    if (s > k) return select(arr, l, s - 1, k);
    return select(arr, s + 1, r, k);
}

function partition(arr, l, r) {
    let pivot = arr[l];
    let i = l + 1;
    let j = r;
    while (i <= j) {
        while (i <= r && arr[i] <= pivot) i++;
        while (j >= l && arr[j] > pivot) j--;
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[l], arr[j]] = [arr[j], arr[l]];
    return j;
}`
  },

  // ============================================
  // CATEGORY: DIVIDE & CONQUER (div)
  // ============================================
  div_intro: {
    id: 'div_intro',
    title: 'Divide & Conquer: Merge Sort',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The Concept</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Divide the problem of size $n$ into several sub-problems of size $n/2$, solve them recursively, and merge their solutions.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Merge Sort Analysis</span>
          <p class="text-sm">Sort the array $A$ by sorting halves recursively and merging.</p>
          <div class="latex-output">$T(n) = 2T(n/2) + \\Theta(n)$</div>
          <ul class="list-disc pl-5 mt-2 text-xs space-y-1 opacity-80">
            <li>$a = 2, b = 2, d = 1$. Since $a = b^d$, Master Theorem case 2 applies.</li>
            <li><strong>Asymptotic Cost:</strong> Always $\\Theta(n \\log n)$ (best, worst, average).</li>
            <li><strong>Space Cost:</strong> Requires $\\Theta(n)$ extra memory buffer for merge operations.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Merge Sort recursive function
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}`
  },
  div_quick: {
    id: 'div_quick',
    title: 'QuickSort',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Divide by Value</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Unlike MergeSort which splits purely by index position, QuickSort partitions elements around a <strong>pivot value</strong>.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">QuickSort Analysis</span>
          <ul class="list-disc pl-5 mt-2 text-xs space-y-1 opacity-85">
            <li><strong>Best/Average Case:</strong> Pivot always splits in half. $T(n) = 2T(n/2) + n \\in \\Theta(n \\log n)$.</li>
            <li><strong>Worst Case:</strong> Pivot is always maximum or minimum (such as sorting an already sorted list). $T(n) = T(n-1) + n \\in \\Theta(n^2)$.</li>
            <li><strong>Space:</strong> Work is in-place, but recursive call stack uses $O(\\log n)$ space.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// QuickSort recursive implementation
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[left];
    let i = left + 1;
    let j = right;
    while (i <= j) {
        while (i <= right && arr[i] <= pivot) i++;
        while (j >= left && arr[j] > pivot) j--;
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[left], arr[j]] = [arr[j], arr[left]];
    return j;
}`
  },
  div_strassen: {
    id: 'div_strassen',
    title: "Strassen's Matrix Multiplication",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Matrix Multiplication Optimization</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Standard matrix multiplication requires $O(n^3)$ operations. A naive divide-and-conquer strategy splits them into $2 \\times 2$ blocks, requiring 8 half-size multiplications: $T(n) = 8T(n/2) + n^2 \\in \\Theta(n^3)$.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Strassen's Formula</span>
          <p class="text-sm">
            Volker Strassen discovered that by taking clever linear combinations, we can multiply blocks using only <strong>7 multiplications</strong> instead of 8.
          </p>
          <div class="latex-output">$T(n) = 7T(n/2) + \\Theta(n^2)$</div>
          <p class="text-xs opacity-75 mt-2">
            According to the Master Theorem, $a = 7, b = 2, d = 2$. Since $7 > 2^2 = 4$, Case 3 applies.
          </p>
          <p class="text-sm font-bold text-green-400 mt-1">
            Asymptotic Cost: $O(n^{\\log_2 7}) \\approx O(n^{2.807})$
          </p>
        </div>
      </div>
    `,
    code: `// Strassen's reduction overview:
// We compute 7 matrices of size (n/2 x n/2):
// P1 = A11 * (B12 - B22)
// P2 = (A11 + A12) * B22
// ... up to P7
// Then combine quadrants:
// C11 = P5 + P4 - P2 + P6
// ... C12, C21, C22`
  },
  div_geom: {
    id: 'div_geom',
    title: 'Geometric D&C: Closest Pair & QuickHull',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Geometric Optimization</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Divide-and-conquer can speed up closest-pair from $\\Theta(n^2)$ to $\\Theta(n \\log n)$, and Convex Hull (QuickHull) from $\\Theta(n^3)$ to average $\\Theta(n \\log n)$.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">D&C Closest Pair Step</span>
          <ol class="list-decimal pl-5 text-xs space-y-1">
            <li>Sort points by X-coordinate. Split into left and right halves.</li>
            <li>Solve closest-pair recursively in each half. Let $d$ be the minimum of these distances.</li>
            <li>In the <strong>Straddle Zone</strong> (vertical strip of width $2d$), sort points by Y-coordinate. For each point, check only the next <strong>7 points</strong>.</li>
            <li>Merge cost is linear, yielding $T(n) = 2T(n/2) + n \\in \\Theta(n \\log n)$.</li>
          </ol>
        </div>
      </div>
    `,
    code: `// QuickHull: Average-case Θ(n log n)
// 1. Draw a line between extreme points P1 (min X) and P2 (max X).
// 2. Find furthest point Pmax from line. It is part of the Hull.
// 3. Discard all points inside the triangle P1-P2-Pmax (they cannot be on the Hull).
// 4. Repeat recursively on left of P1-Pmax and left of Pmax-P2.`
  },

  // ============================================
  // CATEGORY: TRANSFORMATION (tra)
  // ============================================
  trans_intro: {
    id: 'trans_intro',
    title: 'Transform and Conquer: Introduction',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The Philosophy</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Solve a problem by transforming it into an instance that is simpler, has a different representation, or is a completely different problem with a known solution.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">The Three Sub-techniques</span>
          <ul class="space-y-2 mt-2 text-xs md:text-sm">
            <li><strong>1. Instance Simplification:</strong> Transform to a simpler instance of the same problem (e.g. Pre-sorting).</li>
            <li><strong>2. Representation Change:</strong> Transform into an alternative representation (e.g. Heaps, Horner's Rule).</li>
            <li><strong>3. Problem Reduction:</strong> Transform to a different problem entirely (e.g. reducing Least Common Multiple to GCD).</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Conceptual transformation flow:
// Input Instance (Hard) ---> Transformed Instance (Easy)
//                                   |
//                                   v
// Final Answer <--- Output Solution (Reconstructed)`
  },
  trans_presort: {
    id: 'trans_presort',
    title: 'Instance Simplification: Pre-sorting',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Pre-sorting Efficiency</h3>
          <p class="leading-relaxed text-sm md:text-base">
            We can simplify a problem by sorting the input array first in $O(n \\log n)$ time, which makes subsequent steps trivial.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Element Uniqueness Proof</span>
          <p class="text-xs md:text-sm">
            Check if an array has any duplicates.
          </p>
          <ul class="list-disc pl-5 mt-1 text-xs space-y-1 opacity-80">
            <li><strong>Brute Force:</strong> Compare all pairs $\\in \\Theta(n^2)$.</li>
            <li><strong>Pre-sorting:</strong> Sort the array ($O(n \\log n)$) then do a single linear scan checking if $A[i] == A[i+1]$ ($O(n)$).</li>
            <li><strong>Total Time:</strong> $O(n \\log n) + O(n) = O(n \\log n)$, which is significantly faster.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Element Uniqueness via Pre-sorting
function hasUniqueElements(arr) {
    // 1. Sort the array
    arr.sort((a, b) => a - b);
    
    // 2. Single pass comparison
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) return false; // Duplicate found!
    }
    return true;
}`
  },
  trans_horner: {
    id: 'trans_horner',
    title: "Representation Change: Horner's Rule",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Polynomial Evaluation</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Evaluate $P(x) = a_n \\cdot x^n + a_{n-1} \\cdot x^{n-1} \\dots + a_0$ at value $x$.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Horner's Factorization</span>
          <p class="text-xs md:text-sm">
            Factor out $x$ repeatedly to form nested multiplications:
          </p>
          <div class="bg-black/30 p-2 rounded text-center font-mono text-xs mb-2">
            P(x) = (...((a_n * x + a_n-1) * x + a_n-2) * x ... + a_0)
          </div>
          <p class="text-xs">
            This cuts multiplications to $n$ and additions to $n$, reducing complexity from quadratic $\\Theta(n^2)$ (or $\\Theta(n)$ with power accumulation) to exactly $n$ cycles in $\\Theta(n)$ time.
          </p>
        </div>
      </div>
    `,
    code: `// Horner's Rule in JavaScript
function evaluatePolynomial(coefficients, x) {
    let n = coefficients.length - 1;
    let result = coefficients[n]; // Start with highest power coefficient
    
    for (let i = n - 1; i >= 0; i--) {
        result = result * x + coefficients[i]; // Nested Multiply-Add
    }
    return result;
} // Executed in Θ(n) operations`
  },
  trans_expo: {
    id: 'trans_expo',
    title: "Binary Exponentiation (Horner's Method)",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Fast Exponentiation</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Compute $a^n$ efficiently. Instead of doing $n-1$ multiplications, we apply a Left-to-Right binary representation scan of the exponent.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Exam Step-by-Step Proof: $a^{13}$</span>
          <p class="text-sm">How many multiplications are needed to compute $a^{13}$ using Horner's Left-to-Right binary exponentiation?</p>
          <ol class="list-decimal pl-5 mt-2 text-xs space-y-1">
            <li>Convert exponent to binary: $13_{10} = 1101_2$ (size $k = 4$ bits).</li>
            <li>Starting with $p = a$ (corresponding to leading bit 1).</li>
            <li><strong>Bit 1 (index 1):</strong> Square $p$: $p^2 = a^2$. Since bit is 1, multiply by $a$: $p = a^3$. <span class="text-accent">(2 multiplications)</span></li>
            <li><strong>Bit 0 (index 2):</strong> Square $p$: $p^2 = a^6$. Bit is 0, so no multiply. <span class="text-accent">(1 multiplication)</span></li>
            <li><strong>Bit 1 (index 3):</strong> Square $p$: $p^2 = a^{12}$. Since bit is 1, multiply by $a$: $p = a^{13}$. <span class="text-accent">(2 multiplications)</span></li>
          </ol>
          <div class="mt-2 bg-green-500/20 p-2 rounded text-xs border border-green-500">
            <strong>Total multiplications:</strong> 2 + 1 + 2 = <strong>5 multiplications</strong>.
          </div>
        </div>
      </div>
    `,
    code: `// Left-to-Right Binary Exponentiation
function binaryPower(a, n) {
    if (n === 0) return 1;
    let binary = n.toString(2); // Convert exponent to binary string
    let p = a;
    
    for (let i = 1; i < binary.length; i++) {
        p = p * p; // Square
        if (binary[i] === '1') {
            p = p * a; // Multiply if bit is 1
        }
    }
    return p;
} // Complexity is Θ(log n)`
  },
  trans_red: {
    id: 'trans_red',
    title: 'Problem Reduction: LCM & State Space',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Reducing Problems</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Solve a problem by converting its instances into a completely different problem that is already solved.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Arithmetic Reduction</span>
          <p class="text-xs">Find LCM(u, v) by reducing to GCD:</p>
          <div class="bg-black/30 p-2 rounded font-mono text-center text-xs mb-2">
            LCM(u, v) = (u * v) / GCD(u, v)
          </div>
        </div>
        <div class="step-card">
          <span class="step-title">State Space Graph Reduction</span>
          <p class="text-xs md:text-sm">
            Many puzzles (River Crossing, 8-puzzle) can be modeled as a graph where:
          </p>
          <ul class="list-disc pl-5 text-xs space-y-1 opacity-80">
            <li><strong>Vertices:</strong> Represent valid puzzle configurations (states).</li>
            <li><strong>Edges:</strong> Represent valid moves (transitions).</li>
            <li><strong>Solution:</strong> Reduced to a Breadth-First Search (BFS) for the shortest path from Start vertex to Goal vertex.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// LCM Reduction to GCD
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(u, v) {
    if (u === 0 || v === 0) return 0;
    return Math.abs(u * v) / gcd(u, v);
}`
  },

  // ============================================
  // CATEGORY: SPACE/TIME TRADEOFF (spa)
  // ============================================
  spa_intro: {
    id: 'spa_intro',
    title: 'Space/Time Tradeoff & Counting Sort',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The Tradeoff</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Trade extra memory space (storage) to gain significantly faster processing speeds.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Counting Sort</span>
          <p class="text-xs leading-relaxed">
            Sort an array of size $n$ of integers where values are in a known small range $[0, k]$.
          </p>
          <ol class="list-decimal pl-5 mt-2 text-xs space-y-1">
            <li>Build a frequency array $D[0..k]$ counting elements in $O(n)$ time.</li>
            <li>Accumulate prefix sums to get distributions $D[i] = D[i] + D[i-1]$ in $O(k)$ time.</li>
            <li>Insert elements into stable output array backwards in $O(n)$ time.</li>
            <li><strong>Complexity:</strong> $\\Theta(n + k)$ time and $\\Theta(n + k)$ extra space. Stable and fast!</li>
          </ol>
        </div>
        <div class="warn-box text-xs">
          <strong>Memory Warning:</strong> If range $k$ is massive ($k = 10^9$), Counting Sort crashes the system due to memory allocation bounds, even if $n$ is tiny.
        </div>
      </div>
    `,
    code: `// Counting Sort Stable Implementation
function countingSort(arr, k) {
    let n = arr.length;
    let count = Array(k + 1).fill(0);
    let output = Array(n);
    
    // 1. Frequencies
    for (let i = 0; i < n; i++) count[arr[i]]++;
    
    // 2. Distributions
    for (let i = 1; i <= k; i++) count[i] += count[i - 1];
    
    // 3. Place stably (backwards)
    for (let i = n - 1; i >= 0; i--) {
        let val = arr[i];
        output[count[val] - 1] = val;
        count[val]--;
    }
    return output;
}`
  },
  spa_horspool: {
    id: 'spa_horspool',
    title: "Horspool's String Matching",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Input Enhancement</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Instead of shifting by 1, pre-calculate shift properties of the pattern into a <strong>Shift Table</strong> based on the character matched. Matches right-to-left.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Shift Table Construction</span>
          <p class="text-xs leading-relaxed">
            The shift table maps every alphabet character to its skip value: <br>
            <strong>Formula:</strong> $Shift(c) = m - 1 - index(c)$ of rightmost occurrence (excluding last letter). If not in pattern, shift is $m$.
          </p>
          <div class="bg-black/30 p-2 rounded text-xs font-mono mb-2">
            Example "BARBER" (m=6):<br>
            A -> 6-1-1 = 4<br>
            R -> 6-1-2 = 3 (penultimate R)<br>
            B -> 6-1-3 = 2 (middle B)<br>
            E -> 6-1-4 = 1<br>
            Others -> 6
          </div>
        </div>
      </div>
    `,
    code: `// Horspool's Algorithm
function horspoolSearch(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    let shiftTable = {};
    
    // 1. Build Shift Table
    for (let i = 0; i < 256; i++) shiftTable[String.fromCharCode(i)] = m;
    for (let j = 0; j < m - 1; j++) {
        shiftTable[pattern[j]] = m - 1 - j;
    }
    
    // 2. Search
    let i = m - 1; // Align pattern end
    while (i < n) {
        let k = 0;
        while (k < m && pattern[m - 1 - k] === text[i - k]) {
            k++;
        }
        if (k === m) return i - m + 1; // Found match!
        i += shiftTable[text[i]] || m; // Shift pattern by table skip value
    }
    return -1;
}`
  },
  spa_boyer: {
    id: 'spa_boyer',
    title: 'Boyer-Moore String Matching Heuristics',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Boyer-Moore Dual Rules</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Boyer-Moore is the gold standard of string matching. It scans the pattern from <strong>Right-to-Left</strong> and determines shifts using <strong>two independent heuristics</strong>:
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">1. Bad Symbol Heuristic</span>
          <p class="text-xs">Aligns the mismatched character in the text with its last occurrence in the pattern.</p>
          <div class="bg-black/30 p-2 rounded font-mono text-xs mb-2">
            $d_1 = \\max(T(c) - k, 1)$
          </div>
          <p class="text-[10px] opacity-75">where $T(c)$ is shift table, and $k$ is number of successfully matched suffix characters.</p>
        </div>
        <div class="step-card">
          <span class="step-title">2. Good Suffix Heuristic</span>
          <p class="text-xs leading-relaxed">
            Looks at the matched suffix of length $k$. If it appears elsewhere in the pattern, align with that. If a prefix of the pattern matches a suffix of the matched text, align those. Else, shift by $m$.
          </p>
        </div>
        <div class="warn-box text-xs">
          <strong>Decision rule:</strong> At each mismatch, compute shifts $d_1$ and $d_2$. Shift by the <strong>largest</strong> value: $Shift = \\max(d_1, d_2)$.
        </div>
      </div>
    `,
    code: `// Boyer-Moore Search outer skeleton
function boyerMooreSearch(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    let badCharTable = buildBadCharTable(pattern);
    let goodSuffixTable = buildGoodSuffixTable(pattern);
    
    let s = 0; // Alignment shift
    while (s <= (n - m)) {
        let j = m - 1;
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }
        if (j < 0) {
            return s; // Match found at offset s
        } else {
            let d1 = Math.max(1, j - (badCharTable[text[s + j]] ?? -1));
            let d2 = goodSuffixTable[j] || 0;
            s += Math.max(d1, d2);
        }
    }
    return -1;
}`
  },

  // ============================================
  // CATEGORY: GREEDY (gre)
  // ============================================
  gre_intro: {
    id: 'gre_intro',
    title: 'Greedy Technique & Change Making',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The Greedy Principle</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Make the locally optimal, irrevocable choice at each step, hoping it aggregates to a globally optimal solution.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Greedy Change-Making</span>
          <p class="text-xs md:text-sm">
            Make change for amount $n$ using denominations $d_1 > d_2 > \\dots > d_m$ by repeatedly selecting the largest denomination $\\le$ remaining amount.
          </p>
          <ul class="list-disc pl-5 mt-2 text-xs space-y-1 opacity-80">
            <li><strong>Optimal:</strong> Stably optimal for <em>canonical</em> coin sets like USD $\{25, 10, 5, 1\}$.</li>
            <li><strong>Suboptimal:</strong> Fails for $\{4, 3, 1\}$ with amount 6. Greedy chooses $4 + 1 + 1$ (3 coins), whereas the optimal is $3 + 3$ (2 coins).</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Greedy Coin Changer
function getChangeGreedy(coins, amount) {
    // Expects coins sorted descending: [25, 10, 5, 1]
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }
    return result; // May be suboptimal if coins not canonical
}`
  },
  gre_huff: {
    id: 'gre_huff',
    title: 'Huffman Coding & Compression',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Variable-Length Text Compression</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Static fixed-length encodings (like ASCII using 8 bits per letter) waste space. Frequent letters should use short codes, and rare letters long ones.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Prefix-Free Property</span>
          <p class="text-xs">
            To prevent ambiguity, no character code can be a prefix of another (e.g. if A is 0, B cannot start with 0). We construct a binary tree where characters reside exclusively at <strong>leaves</strong>.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Exam Tree Trace: A(0.15), B(0.45), C(0.40)</span>
          <ol class="list-decimal pl-5 text-xs space-y-1">
            <li>Priority Queue (PQ): A(0.15), C(0.40), B(0.45)</li>
            <li>Merge two lowest: A(0.15) and C(0.40) into Node_AC(0.55). <br>Left = A, Right = C.</li>
            <li>PQ now: B(0.45), Node_AC(0.55).</li>
            <li>Merge B and AC into Root(1.0). Left = B, Right = AC.</li>
            <li><strong>Traverse (Left=0, Right=1):</strong> B is at Left: <strong>0</strong>. AC is at Right: 1. A is Right-Left: <strong>10</strong>. C is Right-Right: <strong>11</strong>.</li>
            <li><strong>Avg Bits per Letter:</strong> $0.45(1) + 0.15(2) + 0.40(2) = 1.55$ bits.</li>
          </ol>
        </div>
      </div>
    `,
    code: `// Huffman Leaf and Node creation logic
class HuffmanNode {
    constructor(char, freq, left = null, right = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

// DFS to extract prefix-free codes
function generateCodes(root, code, codesDict) {
    if (!root) return;
    if (!root.left && !root.right) {
        codesDict[root.char] = code;
        return;
    }
    generateCodes(root.left, code + "0", codesDict);
    generateCodes(root.right, code + "1", codesDict);
}`
  },

  // ============================================
  // CATEGORY: DYNAMIC PROGRAMMING (dyn)
  // ============================================
  dyn_intro: {
    id: 'dyn_intro',
    title: 'Dynamic Programming & Fibonacci',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The DP Philosophy</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Solve optimization problems with overlapping sub-problems. It solves each sub-problem exactly <strong>once</strong> and records it in a table (memoization or tabulation) to prevent exponential re-calculations.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Principle of Optimality</span>
          <p class="text-xs leading-relaxed font-sans">
            An optimal solution to any instance of the problem is made up of optimal solutions to its sub-problem instances.
          </p>
        </div>
        <div class="warn-box text-xs">
          <strong>Key Limitation (State Explosion):</strong> If sub-problems are not ordered or have many independent variables (e.g. Traveling Salesperson without ordering), the table size grows exponentially, rendering DP infeasible.
        </div>
      </div>
    `,
    code: `// Dynamic Programming (Tabulation - Bottom-Up)
function fibDP(n) {
    let f = Array(n + 1).fill(0);
    f[0] = 0; f[1] = 1;
    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2]; // Lookup from table
    }
    return f[n];
} // Cuts recursive recursion from O(2^n) to Θ(n) time!`
  },
  dyn_change: {
    id: 'dyn_change',
    title: 'Dynamic Programming: Change Making',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Optimal Coin Changing</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Find the minimum number of coins to make amount $n$ using denominations $D = \{d_1, d_2 \\dots d_m\}$. Unlike Greedy, DP guarantees an optimal solution for <em>any</em> coin set.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">The Recurrence</span>
          <div class="latex-output">$F(n) = \\min_{j: n \\ge d_j} \\{ F(n - d_j) \\} + 1$</div>
          <p class="text-xs opacity-80 mt-1">Base case: $F(0) = 0$.</p>
        </div>
        <div class="step-card">
          <span class="step-title">Exam Explanation (Loop States)</span>
          <p class="text-xs leading-relaxed">
            1. <strong>"Iterate 1 to n":</strong> We solve for every sub-amount $i$ from 1 up to $n$ sequentially.<br>
            2. <strong>"temp stores current max":</strong> We initialize a temporary minimum variable to Infinity before searching.<br>
            3. <strong>"Iterate j over denominations":</strong> We try subtracting every coin $d_j$ that is $\\le i$.<br>
            4. <strong>"Check less than temp":</strong> We look up $F(i - d_j)$. If it is smaller than our current best, we lower our target.<br>
            5. <strong>"Update by adding 1":</strong> We add the coin we just picked: $F(i) = temp + 1$.
          </p>
        </div>
      </div>
    `,
    code: `// DP Change Maker
function getMinCoins(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base Case
    
    for (let i = 1; i <= amount; i++) {
        let temp = Infinity;
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j]) {
                temp = Math.min(temp, dp[i - coins[j]]);
            }
        }
        dp[i] = temp + 1;
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}`
  },
  dyn_warshall: {
    id: 'dyn_warshall',
    title: "Warshall's Algorithm (Transitive Closure)",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Transitive Closure</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Find if a directed path exists between any two vertices $i$ and $j$ in a directed graph of size $n$, represented as a boolean matrix.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">The Dynamic Programming Formulation</span>
          <p class="text-xs md:text-sm">
            Let $R^{(k)}[i, j]$ be $1$ if there is a path from $i$ to $j$ using only vertices in $\{1 \\dots k\}$ as intermediates.
          </p>
          <div class="bg-black/30 p-3 rounded font-mono text-center text-xs my-2">
            R(k)[i, j] = R(k-1)[i, j] OR ( R(k-1)[i, k] AND R(k-1)[k, j] )
          </div>
          <ul class="list-disc pl-5 text-xs space-y-1 opacity-85">
            <li>We increment $k$ from $1$ to $n$.</li>
            <li>At stage $k$, we use the $k$-th row and $k$-th column of the previous matrix to discover new paths.</li>
            <li>Complexity: $\\Theta(n^3)$ time, $\\Theta(n^2)$ space.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Warshall's Algorithm
function warshall(adjMatrix) {
    let n = adjMatrix.length;
    let R = adjMatrix.map(row => [...row]); // Copy initial matrix
    
    for (let k = 0; k < n; k++) { // Intermediate node k
        for (let i = 0; i < n; i++) { // Source node i
            for (let j = 0; j < n; j++) { // Destination node j
                R[i][j] = R[i][j] || (R[i][k] && R[k][j]);
            }
        }
    }
    return R;
}`
  },
  dyn_floyd: {
    id: 'dyn_floyd',
    title: "Floyd's Algorithm (All-Pairs Shortest Path)",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Shortest Paths</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Find the shortest directed path weights between every pair of vertices in a weighted graph. It is the weighted equivalent of Warshall's.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">The Relaxation Formula</span>
          <p class="text-xs md:text-sm">
            Let $D^{(k)}[i, j]$ represent the shortest path weight from $i$ to $j$ using only intermediate nodes up to $k$.
          </p>
          <div class="latex-output">$D^{(k)}[i, j] = \\min \\left( D^{(k-1)}[i, j], D^{(k-1)}[i, k] + D^{(k-1)}[k, j] \\right)$</div>
          <ul class="list-disc pl-5 text-xs space-y-1 opacity-80 mt-2">
            <li><strong>Initialize $D^{(0)}$:</strong> Adjacency matrix of weights (0 on diagonal, $\\infty$ for missing edges).</li>
            <li>At stage $k$, we check if path $i \\to k \\to j$ is shorter than direct path $i \\to j$.</li>
            <li>Complexity: $\\Theta(n^3)$ time.</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Floyd's Algorithm for All-Pairs Shortest Path
function floyd(weights) {
    let n = weights.length;
    let D = weights.map(row => [...row]); // Copy initial weights
    
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (D[i][k] + D[k][j] < D[i][j]) {
                    D[i][j] = D[i][k] + D[k][j]; // Path relaxation
                }
            }
        }
    }
    return D;
}`
  },
  dyn_knap: {
    id: 'dyn_knap',
    title: 'Knapsack Problem (DP Solution)',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Overcoming Exponential Time</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Solve the Knapsack problem for $n$ items and capacity $W$ in polynomial $O(nW)$ time instead of exhaustive $O(2^n)$ subsets.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Knapsack Recurrence Relation</span>
          <p class="text-xs md:text-sm">
            Let $V[i, j]$ be the max value using a subset of the first $i$ items with intermediate capacity $j$.
          </p>
          <div class="latex-output">$V[i, j] = \\max \\left( V[i-1, j], v_i + V[i-1, j - w_i] \\right) \\quad \\text{if } j \\ge w_i$</div>
          <p class="text-xs opacity-75 mt-1">If item weight exceeds capacity ($j < w_i$), we simply inherit previous row: $V[i, j] = V[i-1, j]$.</p>
        </div>
        <div class="step-card">
          <span class="step-title">Knapsack Backtracking Proof</span>
          <p class="text-xs leading-relaxed">
            How do we find <strong>which</strong> items are in the optimal subset after filling the grid? <br>
            Start at bottom-right corner $V[n, W]$:
          </p>
          <ol class="list-decimal pl-5 mt-1 text-xs space-y-1">
            <li>If $V[i, j] == V[i-1, j]$: Item $i$ was <strong>NOT</strong> selected. Backtrack up to cell $V[i-1, j]$.</li>
            <li>If $V[i, j] > V[i-1, j]$: Item $i$ <strong>WAS</strong> selected. Backtrack diagonally to cell $V[i-1, j - w_i]$ and add item $i$ to our list of items.</li>
            <li>Repeat until $i=0$ or $j=0$.</li>
          </ol>
        </div>
      </div>
    `,
    code: `// Knapsack DP Tabulation
function knapsackDP(weights, values, capacity) {
    let n = weights.length;
    let V = Array.from({length: n + 1}, () => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        let wt = weights[i - 1];
        let val = values[i - 1];
        for (let j = 0; j <= capacity; j++) {
            if (j >= wt) {
                V[i][j] = Math.max(V[i - 1][j], val + V[i - 1][j - wt]);
            } else {
                V[i][j] = V[i - 1][j];
            }
        }
    }
    
    // Backtracking to find items
    let j = capacity;
    let selected = [];
    for (let i = n; i > 0; i--) {
        if (V[i][j] !== V[i - 1][j]) {
            selected.push(i - 1); // Selected item index
            j -= weights[i - 1];
        }
    }
    
    return { maxValue: V[n][capacity], itemsIndices: selected };
}`
  }
};
