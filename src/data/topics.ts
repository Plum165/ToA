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
        <!-- Definition -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">1. Mathematical Foundations of Big O</h3>
          <p class="leading-relaxed text-sm md:text-base text-gray-300">
            <strong>Big O Notation ($O$)</strong> provides an asymptotic upper bound on the growth rate of a function. It defines the worst-case scenario, guaranteeing that an algorithm's execution time or space requirement will not scale faster than a given envelope.
          </p>
          
          <div class="glass p-4 rounded-xl mt-3 space-y-3 border border-white/10">
            <p class="text-sm font-semibold text-accent">Definition (Threshold Method):</p>
            <p class="text-sm text-gray-200">
              Let $t(n)$ and $g(n)$ be non-negative functions over the set of natural numbers. We say that $t(n) \\in O(g(n))$ if and only if there exist a positive real constant $c > 0$ and a positive integer $n_0 \\ge 1$ such that:
            </p>
            <div class="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-center text-accent text-sm md:text-base">
              $t(n) \\le c \\cdot g(n) \\quad \\text{for all} \\quad n \\ge n_0$
            </div>
            
            <p class="text-sm font-semibold text-accent mt-4">Definition (Limit Method):</p>
            <p class="text-sm text-gray-200">
              Alternatively, using calculus, we can compare functions by taking the limit of their ratio as $n$ approaches infinity:
            </p>
            <div class="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-center text-accent text-sm md:text-base">
              $\\lim_{n \\to \\infty} \\frac{t(n)}{g(n)} = L$
            </div>
            <p class="text-xs text-gray-400 mt-1">
              If $0 \\le L < \\infty$ (i.e., the limit is a non-negative finite constant), then $t(n) \\in O(g(n))$. If $L = \\infty$, then $t(n) \\notin O(g(n))$.
            </p>
          </div>
        </div>

        <!-- Why It Matters -->
        <div class="glass p-4 rounded-xl border-l-4 border-accent bg-accent/5">
          <h4 class="font-bold text-sm text-white mb-1">Why It Matters</h4>
          <p class="text-xs md:text-sm text-gray-300 leading-relaxed">
            In software engineering, Big O represents a <strong>fail-safe contract</strong>. If a system handles mission-critical operations (e.g., flight controller telemetry, real-time banking transfers), you must guarantee that even the absolute worst-case configuration of inputs will not cause system timeout or stack overflows.
          </p>
        </div>

        <!-- Detailed Step-by-Step Proofs -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white">2. Rigorous Worked Proofs</h3>
          
          <!-- Proof A -->
          <div class="step-card p-4 rounded-xl border border-white/10 bg-black/25">
            <span class="step-title text-accent font-bold text-sm">Worked Proof A: $100n + 5 \\in O(n)$</span>
            <p class="text-xs md:text-sm text-gray-300 mt-2">
              Show that there exist $c > 0$ and $n_0 \\ge 1$ such that $100n + 5 \\le c \\cdot n$.
            </p>
            <ol class="list-decimal pl-5 mt-2 space-y-2 text-xs md:text-sm text-gray-300">
              <li>
                <strong>Express the inequality:</strong> $100n + 5 \\le c \\cdot n$ for all $n \\ge n_0$.
              </li>
              <li>
                <strong>Divide both sides by $n$:</strong> Since $n > 0$, this yields $100 + \\frac{5}{n} \\le c$.
              </li>
              <li>
                <strong>Analyze the behavior of the fraction:</strong> The term $\\frac{5}{n}$ is a decreasing function of $n$. Its maximum value occurs at the smallest possible value of $n$ (our threshold $n_0$).
              </li>
              <li>
                <strong>Select a threshold $n_0$:</strong> Let us pick $n_0 = 1$.
              </li>
              <li>
                <strong>Calculate the constant $c$:</strong> Substituting $n = 1$ into the inequality gives $100 + \\frac{5}{1} = 105$.
              </li>
              <li>
                <strong>Verify:</strong> For any $n \\ge 1$, we have $\\frac{5}{n} \\le 5$, which guarantees $100 + \\frac{5}{n} \\le 105$.
              </li>
            </ol>
            <p class="text-xs font-mono text-green-400 mt-2">
              ✔ Proof Complete: By choosing $c = 105$ and $n_0 = 1$, the threshold inequality is satisfied for all $n \\ge n_0$.
            </p>
          </div>

          <!-- Proof B -->
          <div class="step-card p-4 rounded-xl border border-white/10 bg-black/25">
            <span class="step-title text-accent font-bold text-sm">Worked Proof B: $3n^2 + 10n \\log_2 n + 20 \\in O(n^2)$</span>
            <p class="text-xs md:text-sm text-gray-300 mt-2">
              Prove that $3n^2 + 10n \\log_2 n + 20 \\le c \\cdot n^2$ for $n \\ge n_0$.
            </p>
            <ol class="list-decimal pl-5 mt-2 space-y-2 text-xs md:text-sm text-gray-300">
              <li>
                <strong>Divide by the highest-order term ($n^2$):</strong> This yields $3 + \\frac{10 \\log_2 n}{n} + \\frac{20}{n^2} \\le c$.
              </li>
              <li>
                <strong>Establish upper bounds:</strong>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>For all $n \\ge 1$, we know that $\\log_2 n < n$. Therefore, $\\frac{\\log_2 n}{n} < 1$. This implies $\\frac{10 \\log_2 n}{n} \\le 10$.</li>
                  <li>For all $n \\ge 1$, we know $\\frac{20}{n^2} \\le 20$.</li>
                </ul>
              </li>
              <li>
                <strong>Select parameters:</strong> Pick $n_0 = 1$. Let us sum our individual upper bounds: $c = 3 + 10 + 20 = 33$.
              </li>
              <li>
                <strong>Verification:</strong> For all $n \\ge 1$, $3n^2 + 10n \\log_2 n + 20 \\le 3n^2 + 10n^2 + 20n^2 = 33n^2$.
              </li>
            </ol>
            <p class="text-xs font-mono text-green-400 mt-2">
              ✔ Proof Complete: Choosing $c = 33$ and $n_0 = 1$ satisfies $t(n) \\le c \\cdot n^2$.
            </p>
          </div>
        </div>

        <!-- Interactive Practice Exercises -->
        <div class="glass p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
          <h3 class="text-lg font-bold text-white">3. Self-Guided Learning Exercises</h3>
          
          <div class="space-y-4">
            <div class="bg-black/30 p-3 rounded-lg border border-white/5">
              <p class="text-sm font-semibold text-gray-200">Exercise 1: Show that $5n^3 + 12n^2 \\log_2 n + 100 \\in O(n^3)$. Give a formal specification of $c$ and $n_0$.</p>
              <details class="mt-2 text-xs md:text-sm">
                <summary class="text-accent cursor-pointer select-none font-bold hover:underline">Show step-by-step mathematical proof</summary>
                <div class="mt-2 text-gray-300 space-y-2 bg-black/40 p-3 rounded border border-white/5 font-sans">
                  <p><strong>Step 1:</strong> Set up the inequality: $5n^3 + 12n^2 \\log_2 n + 100 \\le c \\cdot n^3$.</p>
                  <p><strong>Step 2:</strong> Divide both sides by $n^3$: $5 + \\frac{12 \\log_2 n}{n} + \\frac{100}{n^3} \\le c$.</p>
                  <p><strong>Step 3:</strong> Since $\\log_2 n \\le n$ for all $n \\ge 1$, we have $\\frac{12 \\log_2 n}{n} \\le 12$. Furthermore, $\\frac{100}{n^3} \\le 100$ for all $n \\ge 1$.</p>
                  <p><strong>Step 4:</strong> Pick $n_0 = 1$. The maximum value of the left-hand side is $5 + 12 + 100 = 117$. Let $c = 117$.</p>
                  <p><strong>Step 5:</strong> For any $n \\ge 1$, we observe that $5n^3 + 12n^2 \\log_2 n + 100 \\le 5n^3 + 12n^3 + 100n^3 = 117n^3$. Hence, $c=117$ and $n_0=1$ constitutes a mathematically rigorous choice.</p>
                </div>
              </details>
            </div>

            <div class="bg-black/30 p-3 rounded-lg border border-white/5">
              <p class="text-sm font-semibold text-gray-200">Exercise 2: Is it true that $n^2 \\in O(n)$? Disprove this claim rigorously using the definition of limits.</p>
              <details class="mt-2 text-xs md:text-sm">
                <summary class="text-accent cursor-pointer select-none font-bold hover:underline">Show mathematical disproof</summary>
                <div class="mt-2 text-gray-300 space-y-2 bg-black/40 p-3 rounded border border-white/5 font-sans">
                  <p><strong>Proof by contradiction (using Limit method):</strong></p>
                  <p>Let $t(n) = n^2$ and $g(n) = n$. Take the limit of their ratio as $n \\to \\infty$:</p>
                  <div class="font-mono text-center text-accent py-1">
                    $\\lim_{n \\to \\infty} \\frac{n^2}{n} = \\lim_{n \\to \\infty} n = \\infty$
                  </div>
                  <p>According to the Limit Method, if the limit is $\\infty$, then $t(n) \\notin O(g(n))$. Therefore, $n^2 \\notin O(n)$.</p>
                  <p><strong>Using the threshold definition:</strong> Suppose there exists some constant $c > 0$ such that $n^2 \\le c \\cdot n$ for all $n \\ge n_0$. Dividing by $n$ (since $n > 0$) yields $n \\le c$ for all $n \\ge n_0$. However, this is a clear contradiction since $n$ is unbounded and will eventually exceed any constant $c$ as $n \\to \\infty$. Thus, no such constant $c$ can exist.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <!-- Real-World Applications -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">4. Real-World Applications</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-black/20 p-4 rounded-xl border border-white/10">
              <h4 class="font-bold text-accent text-sm mb-1">Database Queries & Scalability</h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                Without indexing, searching a database table requires checking every row, which is a linear $O(n)$ scan. For a table of $10^9$ rows, this takes seconds. Creating a B-Tree index transforms searches to $O(\\log n)$ lookup, which completes in less than 30 index compares!
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-xl border border-white/10">
              <h4 class="font-bold text-accent text-sm mb-1">Cryptographical Key Cracking</h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                Security protocols like AES rely on the fact that cracking a key by brute force scales exponentially: $O(2^k)$, where $k$ is the key size in bits. Increasing the key size from 128 to 256 bits doubles the key length, but squares the cracking difficulty to $2^{256}$ operations (which would take longer than the age of the universe).
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `// =========================================================================
// 1. LINEAR SEARCH - O(n) Time Complexity (Worst Case)
// =========================================================================
// If the target is at the very end of the array, or doesn't exist, we must
// iterate through all 'n' elements of the list.
function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i; // Found target in 'i' steps
    }
    return -1; // Not found: n checks made
}

// =========================================================================
// 2. BUBBLE SORT - O(n²) Time Complexity (Worst Case)
// =========================================================================
// If the input array is sorted in descending order, the nested loops will
// perform n * (n - 1) / 2 comparisons and swaps, yielding a quadratic upper bound.
function bubbleSort(arr: number[]): void {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Perform structural swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// =========================================================================
// 3. RECURSIVE FIBONACCI - O(2ⁿ) Time Complexity (Worst Case)
// =========================================================================
// Naive recursion branches twice per call without caching intermediate states,
// constructing a call tree of depth n. The total calls scale exponentially.
function fibRecursive(n: number): number {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// =========================================================================
// 4. POWERSETS GENERATION - O(2ⁿ) Time/Space Complexity
// =========================================================================
// Finding all subsets of a set. A set of size n possesses exactly 2ⁿ subsets.
// Thus, both generating and storing the powerset requires exponential bound.
function getPowerSet<T>(arr: T[]): T[][] {
    const result: T[][] = [[]];
    for (let value of arr) {
        const length = result.length;
        for (let i = 0; i < length; i++) {
            let temp = [...result[i], value];
            result.push(temp);
        }
    }
    return result;
}`
  },
  omega: {
    id: 'omega',
    title: 'Omega Notation Ω (Lower Bound)',
    notes: `
      <div class="space-y-6">
        <!-- Definition -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">1. Mathematical Foundations of Omega Ω</h3>
          <p class="leading-relaxed text-sm md:text-base text-gray-300">
            <strong>Omega Notation ($\\Omega$)</strong> provides an asymptotic lower bound on the growth rate of a function. It defines the best-case scenario or establishes a lower boundary, guaranteeing that an algorithm will take <em>at least</em> this much time or space for sufficiently large inputs.
          </p>
          
          <div class="glass p-4 rounded-xl mt-3 space-y-3 border border-white/10">
            <p class="text-sm font-semibold text-accent">Definition (Threshold Method):</p>
            <p class="text-sm text-gray-200">
              We say that $t(n) \\in \\Omega(g(n))$ if and only if there exist a positive real constant $c > 0$ and a positive integer $n_0 \\ge 1$ such that:
            </p>
            <div class="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-center text-accent text-sm md:text-base">
              $t(n) \\ge c \\cdot g(n) \\quad \\text{for all} \\quad n \\ge n_0$
            </div>
            
            <p class="text-sm font-semibold text-accent mt-4">Definition (Limit Method):</p>
            <p class="text-sm text-gray-200">
              Using calculus limits, we can rigorously define lower bounds:
            </p>
            <div class="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-center text-accent text-sm md:text-base">
              $\\lim_{n \\to \\infty} \\frac{t(n)}{g(n)} = L$
            </div>
            <p class="text-xs text-gray-400 mt-1">
              If $L > 0$ (including $L = \\infty$), then $t(n) \\in \\Omega(g(n))$. If $L = 0$, then $t(n) \\notin \\Omega(g(n))$.
            </p>
          </div>
        </div>

        <!-- Why It Matters -->
        <div class="glass p-4 rounded-xl border-l-4 border-accent bg-accent/5">
          <h4 class="font-bold text-sm text-white mb-1">Why It Matters</h4>
          <p class="text-xs md:text-sm text-gray-300 leading-relaxed">
            While Big O guarantees that an algorithm won't overshoot a certain performance limit, Omega establishes <strong>theoretical lower bounds</strong> on problems. For example, computer scientists have proven that any comparison-based sorting algorithm (like Merge Sort or QuickSort) must perform at least $\\Omega(n \\log n)$ comparisons in the worst case. This tells us we can never design a comparison-based sort with a worst-case of $O(n)$.
          </p>
        </div>

        <!-- Detailed Step-by-Step Proofs -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white">2. Rigorous Worked Proofs</h3>
          
          <!-- Proof A -->
          <div class="step-card p-4 rounded-xl border border-white/10 bg-black/25">
            <span class="step-title text-accent font-bold text-sm">Worked Proof A: $5n^2 - 100n \\in \\Omega(n^2)$</span>
            <p class="text-xs md:text-sm text-gray-300 mt-2">
              Prove that there exist $c > 0$ and $n_0 \\ge 1$ such that $5n^2 - 100n \\ge c \\cdot n^2$ for all $n \\ge n_0$.
            </p>
            <ol class="list-decimal pl-5 mt-2 space-y-2 text-xs md:text-sm text-gray-300">
              <li>
                <strong>Set up the inequality:</strong> $5n^2 - 100n \\ge c \\cdot n^2$.
              </li>
              <li>
                <strong>Divide by $n^2$ (for $n > 0$):</strong> This gives $5 - \\frac{100}{n} \\ge c$.
              </li>
              <li>
                <strong>Observe values as $n$ grows:</strong> The term $\\frac{100}{n}$ decreases. To keep $5 - \\frac{100}{n}$ positive, we must ensure $n$ is large enough.
              </li>
              <li>
                <strong>Select a threshold $n_0$:</strong> Let's pick $n_0 = 50$. At $n = 50$, the expression is $5 - \\frac{100}{50} = 5 - 2 = 3$.
              </li>
              <li>
                <strong>Calculate the constant $c$:</strong> Let $c = 3$. For any $n \\ge 50$, we have $\\frac{100}{n} \\le 2$, which guarantees that $5 - \\frac{100}{n} \\ge 3$.
              </li>
            </ol>
            <p class="text-xs font-mono text-green-400 mt-2">
              ✔ Proof Complete: Choosing $c = 3$ and $n_0 = 50$ satisfies $5n^2 - 100n \\ge 3n^2$ for all $n \\ge 50$.
            </p>
          </div>

          <!-- Proof B -->
          <div class="step-card p-4 rounded-xl border border-white/10 bg-black/25">
            <span class="step-title text-accent font-bold text-sm">Worked Proof B: $n^3 + 2n \\in \\Omega(n^2)$</span>
            <p class="text-xs md:text-sm text-gray-300 mt-2">
              Prove that $n^3 + 2n \\ge c \\cdot n^2$ for sufficiently large $n$.
            </p>
            <ol class="list-decimal pl-5 mt-2 space-y-2 text-xs md:text-sm text-gray-300">
              <li>
                <strong>Write the inequality:</strong> $n^3 + 2n \\ge c \\cdot n^2$.
              </li>
              <li>
                <strong>Divide both sides by $n^2$:</strong> $n + \\frac{2}{n} \\ge c$.
              </li>
              <li>
                <strong>Analyze variables:</strong> Since $n \\ge 1$, we know $n + \\frac{2}{n} \\ge n$.
              </li>
              <li>
                <strong>Select parameters:</strong> Pick $n_0 = 1$. Since $n \\ge 1$ for all $n \\ge n_0$, we can choose $c = 1$. The inequality holds: $n^3 + 2n \\ge n^3 \\ge n^2$ for all $n \\ge 1$.
              </li>
            </ol>
            <p class="text-xs font-mono text-green-400 mt-2">
              ✔ Proof Complete: Choosing $c = 1$ and $n_0 = 1$ satisfies the Omega relation.
            </p>
          </div>
        </div>

        <!-- Interactive Practice Exercises -->
        <div class="glass p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
          <h3 class="text-lg font-bold text-white">3. Self-Guided Learning Exercises</h3>
          
          <div class="space-y-4">
            <div class="bg-black/30 p-3 rounded-lg border border-white/5">
              <p class="text-sm font-semibold text-gray-200">Exercise 1: Prove that $10n^2 + 5n \\in \\Omega(n)$. Identify $c$ and $n_0$.</p>
              <details class="mt-2 text-xs md:text-sm">
                <summary class="text-accent cursor-pointer select-none font-bold hover:underline">Show step-by-step mathematical proof</summary>
                <div class="mt-2 text-gray-300 space-y-2 bg-black/40 p-3 rounded border border-white/5 font-sans">
                  <p><strong>Step 1:</strong> Goal is to show $10n^2 + 5n \\ge c \\cdot n$ for all $n \\ge n_0$.</p>
                  <p><strong>Step 2:</strong> Divide both sides by $n$: $10n + 5 \\ge c$.</p>
                  <p><strong>Step 3:</strong> Since $n \\ge 1$, the term $10n$ is at least $10$. Therefore, $10n + 5 \\ge 15$ for all $n \\ge 1$.</p>
                  <p><strong>Step 4:</strong> Pick $n_0 = 1$ and $c = 15$. For any $n \\ge n_0$, we have $10n^2 + 5n \\ge 15n$.</p>
                  <p><strong>Step 5:</strong> Proof complete. The chosen constants satisfy the lower bound inequality.</p>
                </div>
              </details>
            </div>

            <div class="bg-black/30 p-3 rounded-lg border border-white/5">
              <p class="text-sm font-semibold text-gray-200">Exercise 2: Is $n \\log_2 n \\in \\Omega(n^2)$? Disprove this using limits.</p>
              <details class="mt-2 text-xs md:text-sm">
                <summary class="text-accent cursor-pointer select-none font-bold hover:underline">Show mathematical disproof</summary>
                <div class="mt-2 text-gray-300 space-y-2 bg-black/40 p-3 rounded border border-white/5 font-sans">
                  <p><strong>Limit-based analysis:</strong></p>
                  <p>Take the limit of the ratio as $n \\to \\infty$:</p>
                  <div class="font-mono text-center text-accent py-1">
                    $\\lim_{n \\to \\infty} \\frac{n \\log_2 n}{n^2} = \\lim_{n \\to \\infty} \\frac{\\log_2 n}{n} = 0$
                  </div>
                  <p>Applying L'Hôpital's Rule (or general growth hierarchies), $\\lim_{n \\to \\infty} \\frac{\\log_2 n}{n} = 0$. Since the limit is equal to $0$, $t(n) \\notin \\Omega(n^2)$.</p>
                  <p><strong>Intuition:</strong> A lower bound means $t(n)$ must grow at least as fast as $g(n)$. Since $n \\log_2 n$ grows strictly slower than $n^2$, $n^2$ cannot act as a lower bound.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <!-- Real-World Applications -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">4. Real-World Applications</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-black/20 p-4 rounded-xl border border-white/10">
              <h4 class="font-bold text-accent text-sm mb-1">Sorting Optimization Lower Bounds</h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                The $\\Omega(n \\log n)$ proof for comparison-based sorting lets computer scientists know when to stop searching for faster algorithms. It shifted researchers' focus toward non-comparison sorting (like Radix Sort or Counting Sort), which bypass the lower bound by exploiting data structures and run in $O(n)$ time!
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-xl border border-white/10">
              <h4 class="font-bold text-accent text-sm mb-1">Blockchain Hash Difficulty Bounds</h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                Consensus algorithms (Proof of Work) require finding a hash below a target threshold. The difficulty is configured mathematically to ensure a strict lower bound on operations ($\\Omega(2^d)$ hash checks), maintaining stable, predictable transaction block-mining times.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `// =========================================================================
// 1. LINEAR SEARCH - Ω(1) Time Complexity (Best Case)
// =========================================================================
// In the absolute best case, the target element is located at index 0 of the
// array. The search terminates instantly in exactly one operation, Ω(1) constant.
function linearSearchBestCase<T>(arr: T[], target: T): number {
    if (arr.length > 0 && arr[0] === target) {
        return 0; // Terminated in 1 operation
    }
    // ... remainder of search continues in loop ...
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// =========================================================================
// 2. OPTIMIZED BUBBLE SORT - Ω(n) Time Complexity (Best Case)
// =========================================================================
// If the input array is already fully sorted, a single pass with no swaps
// allows the algorithm to detect sorted state and terminate early.
function bubbleSortOptimized(arr: number[]): void {
    let n = arr.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Perform structural swap
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Optimization: last item of each loop is sorted
    } while (swapped); // If no items were swapped, array is sorted!
}

// =========================================================================
// 3. ITERATIVE FIBONACCI - Ω(n) Time Complexity (Best Case)
// =========================================================================
// Calculating Fibonacci iteratively solves each subproblem exactly once,
// performing exactly n loops. This guarantees a tight linear lower bound Ω(n).
function fibIterative(n: number): number {
    if (n <= 1) return n;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}`
  },
  theta: {
    id: 'theta',
    title: 'Theta Notation Θ (Tight Bound)',
    notes: `
      <div class="space-y-6">
        <!-- Definition -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">1. Mathematical Foundations of Theta Θ</h3>
          <p class="leading-relaxed text-sm md:text-base text-gray-300">
            <strong>Theta Notation ($\\Theta$)</strong> provides an asymptotic tight bound on the growth rate of a function. It represents an exact matching envelope, sandwiching the running time from both above and below.
          </p>
          
          <div class="glass p-4 rounded-xl mt-3 space-y-3 border border-white/10">
            <p class="text-sm font-semibold text-accent">Definition (Threshold Method):</p>
            <p class="text-sm text-gray-200">
              We say that $t(n) \\in \\Theta(g(n))$ if and only if there exist positive real constants $c_1 > 0, c_2 > 0$ and a positive integer $n_0 \\ge 1$ such that:
            </p>
            <div class="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-center text-accent text-sm md:text-base">
              $c_2 \\cdot g(n) \\le t(n) \\le c_1 \\cdot g(n) \\quad \\text{for all} \\quad n \\ge n_0$
            </div>
            <p class="text-xs text-gray-400 mt-1">
              This is equivalent to saying that $t(n) \\in O(g(n))$ AND $t(n) \\in \\Omega(g(n))$ simultaneously.
            </p>
            
            <p class="text-sm font-semibold text-accent mt-4">Definition (Limit Method):</p>
            <p class="text-sm text-gray-200">
              Alternatively, using limits:
            </p>
            <div class="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-center text-accent text-sm md:text-base">
              $\\lim_{n \\to \\infty} \\frac{t(n)}{g(n)} = L$
            </div>
            <p class="text-xs text-gray-400 mt-1">
              If $0 < L < \\infty$ (i.e., the limit is a non-zero, finite constant), then $t(n) \\in \\Theta(g(n))$.
            </p>
          </div>
        </div>

        <!-- Why It Matters -->
        <div class="glass p-4 rounded-xl border-l-4 border-accent bg-accent/5">
          <h4 class="font-bold text-sm text-white mb-1">Deep Dive: Theta vs Big O</h4>
          <p class="text-xs md:text-sm text-gray-300 leading-relaxed">
            In everyday speech, developers often use "Big O" when they actually mean "Theta". For example, saying "Linear Search takes $O(n)$" is correct, but saying "Selection Sort takes $O(n^2)$" is loose because Selection Sort <strong>always</strong> takes quadratic time, even in the best case.
          </p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm text-gray-300">
            <li>Calling $10n + 5 \\in O(n^2)$ is <strong>mathematically true</strong> but extremely sloppy because $n^2$ is an overestimate.</li>
            <li>Calling $10n + 5 \\in \\Theta(n)$ is a <strong>tight, precise claim</strong>. It asserts that the function scales strictly linearly, never slower or faster.</li>
          </ul>
        </div>

        <!-- Detailed Step-by-Step Proofs -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white">2. Rigorous Worked Proofs</h3>
          
          <!-- Proof A -->
          <div class="step-card p-4 rounded-xl border border-white/10 bg-black/25">
            <span class="step-title text-accent font-bold text-sm">Worked Proof: $4n^2 + 3n + 2 \\in \\Theta(n^2)$</span>
            <p class="text-xs md:text-sm text-gray-300 mt-2">
              We must show that there exist $c_1, c_2 > 0$ and $n_0 \\ge 1$ such that $c_2 \\cdot n^2 \\le 4n^2 + 3n + 2 \\le c_1 \\cdot n^2$ for $n \\ge n_0$.
            </p>
            <ol class="list-decimal pl-5 mt-2 space-y-2 text-xs md:text-sm text-gray-300">
              <li>
                <strong>Establish the upper bound (Big O):</strong>
                <ul class="list-disc pl-5 mt-1">
                  <li>For all $n \\ge 1$, we know $3n \\le 3n^2$ and $2 \\le 2n^2$.</li>
                  <li>Thus, $4n^2 + 3n + 2 \\le 4n^2 + 3n^2 + 2n^2 = 9n^2$. This gives our upper bound multiplier: $c_1 = 9$ with $n_0 = 1$.</li>
                </ul>
              </li>
              <li>
                <strong>Establish the lower bound (Omega Ω):</strong>
                <ul class="list-disc pl-5 mt-1">
                  <li>Since $3n + 2 \\ge 0$ for all $n \\ge 1$, we can write: $4n^2 + 3n + 2 \\ge 4n^2$.</li>
                  <li>This gives our lower bound multiplier: $c_2 = 4$ with $n_0 = 1$.</li>
                </ul>
              </li>
              <li>
                <strong>Combine inequalities:</strong>
                <div class="bg-black/30 p-2 rounded text-center text-accent my-2 font-mono text-xs">
                  $4n^2 \\le 4n^2 + 3n + 2 \\le 9n^2 \\quad \\text{for all} \\quad n \\ge 1$
                </div>
              </li>
            </ol>
            <p class="text-xs font-mono text-green-400 mt-2">
              ✔ Proof Complete: Choosing $c_1 = 9$, $c_2 = 4$, and $n_0 = 1$ rigorously sandwiches the function.
            </p>
          </div>
        </div>

        <!-- Interactive Practice Exercises -->
        <div class="glass p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
          <h3 class="text-lg font-bold text-white">3. Self-Guided Learning Exercises</h3>
          
          <div class="space-y-4">
            <div class="bg-black/30 p-3 rounded-lg border border-white/5">
              <p class="text-sm font-semibold text-gray-200">Exercise 1: Determine the tight bound $\\Theta$ of $t(n) = \\frac{1}{2}n^2 + 3n \\log_2 n$. Prove using limits.</p>
              <details class="mt-2 text-xs md:text-sm">
                <summary class="text-accent cursor-pointer select-none font-bold hover:underline">Show limit-based mathematical proof</summary>
                <div class="mt-2 text-gray-300 space-y-2 bg-black/40 p-3 rounded border border-white/5 font-sans">
                  <p><strong>Step 1:</strong> Hypothesize that $t(n) \\in \\Theta(n^2)$ because $n^2$ is the dominant term.</p>
                  <p><strong>Step 2:</strong> Set up the limit ratio with $g(n) = n^2$:</p>
                  <div class="font-mono text-center text-accent py-1">
                    $\\lim_{n \\to \\infty} \\frac{\\frac{1}{2}n^2 + 3n \\log_2 n}{n^2}$
                  </div>
                  <p><strong>Step 3:</strong> Simplify the fraction:</p>
                  <div class="font-mono text-center text-accent py-1">
                    $\\lim_{n \\to \\infty} \\left( \\frac{1}{2} + \\frac{3 \\log_2 n}{n} \\right)$
                  </div>
                  <p><strong>Step 4:</strong> Evaluate individual limits. We know that as $n \\to \\infty$, the term $\\frac{3\\log_2 n}{n} \\to 0$. Therefore:</p>
                  <div class="font-mono text-center text-accent py-1">
                    $\\lim_{n \\to \\infty} \\left( \\frac{1}{2} + \\frac{3 \\log_2 n}{n} \\right) = \\frac{1}{2} + 0 = \\frac{1}{2}$
                  </div>
                  <p><strong>Step 5:</strong> Since $L = \\frac{1}{2}$ is a positive, non-zero, finite constant ($0 < \\frac{1}{2} < \\infty$), the Limit Method proves that $t(n) \\in \\Theta(n^2)$.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <!-- Real-World Applications -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">4. Real-World Applications</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-black/20 p-4 rounded-xl border border-white/10">
              <h4 class="font-bold text-accent text-sm mb-1">Cryptographic Security</h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                In cryptography, developers must prevent side-channel timing attacks. If a decryption function's execution time varies based on the key bits, hackers can deduce private keys by measuring latencies. Thus, operations must be designed to have a strict constant-time $\\Theta(1)$ profile regardless of inputs.
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-xl border border-white/10">
              <h4 class="font-bold text-accent text-sm mb-1">Stock Trading Systems</h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                High-frequency trading engines require highly predictable transaction latency. Standardizing on algorithms with a tight $\\Theta(n \\log n)$ bound (such as Merge Sort or Heap Sort) ensures that transaction processing times remain uniform and stable under heavy market volatility.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `// =========================================================================
// 1. ARRAY REDUCTION - Θ(n) Time Complexity (Constant Linear Growth)
// =========================================================================
// Summing elements of an array. Regardless of values or distribution, we
// MUST perform exactly n loop iterations and operations. Best, worst, and
// average case is exactly bounded at Θ(n).
function sumArray(arr: number[]): number {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; // Basic operation executed exactly n times
    }
    return total;
}

// =========================================================================
// 2. SELECTION SORT - Θ(n²) Time Complexity (Tight Quadratic Bound)
// =========================================================================
// Unlike bubble or insertion sort, selection sort always performs the same
// number of nested loop element comparisons: n*(n-1)/2, even if the array is
// already sorted. This represents a perfect tight bound of Θ(n²).
function selectionSort(arr: number[]): void {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j; // basic operation executed exactly n*(n-1)/2 times
            }
        }
        // Swap elements to place minimum in position i
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

// =========================================================================
// 3. MATRIX EQUALITY CHECK - Θ(n²) Time Complexity (Two-Dimensional Scan)
// =========================================================================
// Checking if two matrices of size n x n are equal. The inner loops run exactly
// n * n times to check entries. If guaranteed no short-circuit (e.g. comparing
// identical matrices), then time is bounded tightly at Θ(n²).
function compareMatrices(A: number[][], B: number[][], n: number): boolean {
    let isEqual = true;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (A[i][j] !== B[i][j]) {
                isEqual = false; // Check continues for comprehensive audit
            }
        }
    }
    return isEqual;
}`
  },
  comp: {
    id: 'comp',
    title: 'Comparing Efficiency Classes',
    notes: `
      <div class="space-y-6">
        <!-- growth scale introduction -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">1. Mathematical Comparison of Complexity Classes</h3>
          <p class="leading-relaxed text-sm md:text-base text-gray-300">
            The selection of an algorithm is the single most important decision impacting the performance and scalability of software systems. Let us explore how various growth rates scale as input size $n$ approaches infinity.
          </p>
        </div>

        <!-- Limit Comparison Rule -->
        <div class="glass p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
          <p class="text-sm font-semibold text-accent">The Limit Comparison Rule:</p>
          <p class="text-sm text-gray-300">
            To compare the growth rates of any two functions $t(n)$ and $g(n)$, we evaluate the limit of their ratio:
          </p>
          <div class="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-center text-accent text-sm">
            $\\lim_{n \\to \\infty} \\frac{t(n)}{g(n)} = L$
          </div>
          <ul class="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-300">
            <li>If $L = 0$, then $t(n)$ grows strictly slower than $g(n)$.</li>
            <li>If $L = \\infty$, then $t(n)$ grows strictly faster than $g(n)$.</li>
            <li>If $0 < L < \\infty$, then $t(n)$ and $g(n)$ grow at the same rate.</li>
          </ul>
          <p class="text-xs text-gray-400">
            *Note: When evaluating these limits, L'Hôpital's Rule from calculus is highly useful: take the derivative of the numerator and denominator separately when encountering indeterminate forms $\\frac{\\infty}{\\infty}$.
          </p>
        </div>

        <!-- growth table -->
        <div class="glass p-4 rounded-xl border border-white/10">
          <h4 class="font-bold text-sm mb-2 text-center text-accent">Asymptotic Scaling Reference Chart</h4>
          <div class="overflow-x-auto rounded-lg">
            <table class="w-full text-center text-xs font-mono">
              <thead>
                <tr class="bg-white/10 text-white font-bold">
                  <th class="p-2 border border-white/10">Input Size (n)</th>
                  <th class="p-2 border border-white/10 text-green-400">O(1) Constant</th>
                  <th class="p-2 border border-white/10 text-cyan-400">O(log₂ n) Log</th>
                  <th class="p-2 border border-white/10 text-blue-400">O(n) Linear</th>
                  <th class="p-2 border border-white/10 text-indigo-400">O(n log n)</th>
                  <th class="p-2 border border-white/10 text-yellow-400">O(n²) Quadratic</th>
                  <th class="p-2 border border-white/10 text-red-400">O(2ⁿ) Exp</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5 opacity-90 text-gray-300">
                <tr><td class="p-2 font-bold text-white">10</td><td class="p-2 text-green-400">1 ops</td><td class="p-2">3.3 ops</td><td class="p-2">10 ops</td><td class="p-2">33 ops</td><td class="p-2 text-yellow-400">100 ops</td><td class="p-2 text-red-400">1,024 ops</td></tr>
                <tr><td class="p-2 font-bold text-white">100</td><td class="p-2 text-green-400">1 ops</td><td class="p-2">6.6 ops</td><td class="p-2">100 ops</td><td class="p-2">664 ops</td><td class="p-2 text-yellow-400">10k ops</td><td class="p-2 text-red-400">1.27E+30 ops</td></tr>
                <tr><td class="p-2 font-bold text-white">1,000</td><td class="p-2 text-green-400">1 ops</td><td class="p-2">10 ops</td><td class="p-2">1k ops</td><td class="p-2">10k ops</td><td class="p-2 text-yellow-400">1M ops</td><td class="p-2 text-red-500">Incalculable</td></tr>
                <tr><td class="p-2 font-bold text-white">10,000</td><td class="p-2 text-green-400">1 ops</td><td class="p-2">13 ops</td><td class="p-2">10k ops</td><td class="p-2">133k ops</td><td class="p-2 text-yellow-500">100M ops</td><td class="p-2 text-red-600">Incalculable</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-[10px] text-center text-gray-400 mt-2">
            At $n=100$, an $O(2^n)$ algorithm takes $1.27 \\times 10^{30}$ steps. At $10^9$ operations/second, this would run for $4 \\times 10^{13}$ years!
          </p>
        </div>

        <!-- Self-Guided Exercises -->
        <div class="glass p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
          <h3 class="text-lg font-bold text-white">2. Mathematical Growth Questions</h3>
          
          <div class="space-y-4">
            <div class="bg-black/30 p-3 rounded-lg border border-white/5">
              <p class="text-sm font-semibold text-gray-200">Exercise 1: Prove that $n \\log_2 n$ grows strictly slower than $n^2$ using L'Hôpital's Rule.</p>
              <details class="mt-2 text-xs md:text-sm">
                <summary class="text-accent cursor-pointer select-none font-bold hover:underline">Show calculus proof</summary>
                <div class="mt-2 text-gray-300 space-y-2 bg-black/40 p-3 rounded border border-white/5 font-sans">
                  <p>We want to find the limit of their ratio as $n \\to \\infty$:</p>
                  <div class="font-mono text-center text-accent py-1">
                    $L = \\lim_{n \\to \\infty} \\frac{n \\log_e n}{n^2} = \\lim_{n \\to \\infty} \\frac{\\log_e n}{n}$
                  </div>
                  <p>This is an indeterminate form $\\frac{\\infty}{\\infty}$. Apply L'Hôpital's Rule by taking derivatives of numerator and denominator with respect to $n$:</p>
                  <div class="font-mono text-center text-accent py-1">
                    $L = \\lim_{n \\to \\infty} \\frac{\\frac{d}{dn}[\\log_e n]}{\\frac{d}{dn}[n]} = \\lim_{n \\to \\infty} \\frac{\\frac{1}{n}}{1} = \\lim_{n \\to \\infty} \\frac{1}{n} = 0$
                  </div>
                  <p>Since the limit $L = 0$, $n \\log_2 n$ grows strictly slower than $n^2$. Therefore, $n \\log_2 n \\in O(n^2)$ but $n^2 \\notin O(n \\log_2 n)$.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <!-- Architectural Impact -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">3. Architectural Impacts in Production Systems</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-black/20 p-4 rounded-xl border border-white/10">
              <h4 class="font-bold text-accent text-sm mb-1">Client-Side Smoothness (60 FPS)</h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                Web browsers repaint screens 60 times a second (once every 16.6ms). If user actions trigger synchronous operations with $O(n^2)$ complexity, processing an array of only 5,000 items can take several hundred milliseconds, leading to complete browser freeze. Maintaining $O(1)$ or $O(n)$ ensures fluid interface response.
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-xl border border-white/10">
              <h4 class="font-bold text-accent text-sm mb-1">Server Costs and Cloud Autoscaling</h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                An algorithm that takes $O(n)$ requires linear cloud instance resources. If it is quadratic $O(n^2)$, doubling the request volume quadruples CPU workloads, triggering cloud auto-scaling. Upgrading algorithm design from $O(n^2)$ to $O(n \\log n)$ can reduce server bills by over 90%!
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `// =========================================================================
// 1. CONSTANT TIME - O(1)
// =========================================================================
// Operation takes identical time irrespective of array size.
function getFirstElement<T>(arr: T[]): T | null {
    return arr.length > 0 ? arr[0] : null;
}

// =========================================================================
// 2. LOGARITHMIC TIME - O(log n)
// =========================================================================
// Search space is halved at each recursion level. Bounded at O(log n).
function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

// =========================================================================
// 3. LINEAR TIME - O(n)
// =========================================================================
// Work scales one-to-one with input size n.
function countTargetOccurrence<T>(arr: T[], target: T): number {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) count++;
    }
    return count;
}

// =========================================================================
// 4. LINEARITHMIC TIME - O(n log n)
// =========================================================================
// Standard split-and-combine recursive sorting (Merge Sort).
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    // Merge helper
    const merge = (l: number[], r: number[]): number[] => {
        let res: number[] = [], i = 0, j = 0;
        while (i < l.length && j < r.length) {
            if (l[i] < r[j]) res.push(l[i++]);
            else res.push(r[j++]);
        }
        return [...res, ...l.slice(i), ...r.slice(j)];
    };
    return merge(left, right);
}

// =========================================================================
// 5. FACTORIAL TIME - O(n!)
// =========================================================================
// Extremely dangerous complexity class. Bounded at factorial permutations.
function generatePermutations<T>(arr: T[]): T[][] {
    if (arr.length === 0) return [[]];
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const subPerms = generatePermutations(remaining);
        for (let perm of subPerms) {
            result.push([current, ...perm]);
        }
    }
    return result;
}`
  },

  // ============================================
  // CATEGORY: ALGORITHM EFFICIENCY (algo)
  // ============================================
  sums: {
    id: 'sums',
    title: 'Efficiency: Summation (Sequential)',
    notes: `
      <div class="space-y-6">
        <!-- --- INTRO --- -->
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Analyzing Loops</h3>
          <p class="leading-relaxed text-sm md:text-base">
            For non-recursive algorithms (loops), we measure efficiency by counting the <strong>Basic Operation</strong> using summation. We set up a sum representing how many times the loop body executes.
          </p>
        </div>

        <!-- --- EXPANDED RULES (R1 - R5) --- -->
        <div class="glass p-4 rounded-lg">
          <h4 class="font-bold text-sm mb-2 text-center text-accent">Essential Math Rules</h4>
          <ul class="space-y-3 text-sm font-mono">
            <li><strong>R1 (Constant):</strong> $\\sum_{i=l}^{u} 1 = (u - l + 1)$<br><span class="opacity-60 text-xs">// e.g. sum of 1 from 1 to n is n</span></li>
            <li><strong>R2 (Linear):</strong> $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} \\approx \\frac{1}{2}n^2$<br><span class="opacity-60 text-xs">// Arithmetic Series (1+2+3...+n)</span></li>
            <li><strong>R3 (Squares):</strong> $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6} \\approx \\frac{1}{3}n^3$</li>
            <li><strong>R4 (Geometric):</strong> $\\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$<br><span class="opacity-60 text-xs">// Powers of 2 (1+2+4+8...)</span></li>
            <li><strong>R5 (Additivity):</strong> $\\sum (ca_i + b_i) = c\\sum a_i + \\sum b_i$<br><span class="opacity-60 text-xs">// You can split sums and pull out constants</span></li>
          </ul>
        </div>

        <!-- --- DETAILED STEP-BY-STEP EXAMPLE --- -->
        <div class="step-card">
          <span class="step-title">Worked Example: Dependent Loops</span>
          <div class="code-box text-xs mb-2">for i = 0 to n-1 do<br>  for j = 0 to i do<br>    print(j)</div>
          <p class="text-sm mb-2">The inner loop runs $i+1$ times. The outer loop runs $n$ times.</p>
          <p class="text-sm"><strong>Step 1:</strong> Set up sum.</p>
          <div class="latex-output text-center">$$ \\sum_{i=0}^{n-1} (i+1) $$</div>
          <p class="text-sm"><strong>Step 2:</strong> Split using R5.</p>
          <div class="latex-output text-center">$$ \\sum_{i=0}^{n-1} i + \\sum_{i=0}^{n-1} 1 $$</div>
          <p class="text-sm"><strong>Step 3:</strong> Apply R2 and R1.</p>
          <div class="latex-output text-center">$$ \\frac{(n-1)n}{2} + n = \\frac{n^2 - n + 2n}{2} \\approx \\Theta(n^2) $$</div>
        </div>

        <!-- --- 3 EXERCISES --- -->
        <div>
          <h4 class="font-bold text-sm mb-4 text-accent">Practice Exercises</h4>
          
          <!-- Ex 1 -->
          <div class="mb-4 border-b border-white/10 pb-4">
            <p class="font-bold text-sm text-green-400">Exercise 1: Simple Loop</p>
            <p class="text-sm font-mono mb-2">for k = 1 to n do: x = x + 5</p>
            <details class="bg-black/20 p-2 rounded cursor-pointer"><summary class="text-xs text-accent opacity-80 hover:opacity-100">Show Solution</summary>
            <p class="mt-2 text-sm">$\\sum_{k=1}^{n} 1 = n$. <br><strong>Complexity:</strong> $\\Theta(n)$</p></details>
          </div>

          <!-- Ex 2 -->
          <div class="mb-4 border-b border-white/10 pb-4">
            <p class="font-bold text-sm text-yellow-400">Exercise 2: Independent Loops</p>
            <p class="text-sm font-mono mb-2">for i = 1 to n do:<br>  for j = 1 to n do:<br>    x++</p>
            <details class="bg-black/20 p-2 rounded cursor-pointer"><summary class="text-xs text-accent opacity-80 hover:opacity-100">Show Solution</summary>
            <p class="mt-2 text-sm">$\\sum_{i=1}^{n} \\sum_{j=1}^{n} 1 = \\sum_{i=1}^{n} n = n \\cdot n = n^2$. <br><strong>Complexity:</strong> $\\Theta(n^2)$</p></details>
          </div>

          <!-- Ex 3 -->
          <div class="mb-4">
            <p class="font-bold text-sm text-red-400">Exercise 3: "Down to" Loop</p>
            <p class="text-sm font-mono mb-2">for i = n downto 1 do:<br>  for j = 1 to i do:<br>    x++</p>
            <details class="bg-black/20 p-2 rounded cursor-pointer"><summary class="text-xs text-accent opacity-80 hover:opacity-100">Show Solution</summary>
            <p class="mt-2 text-sm">Even though i goes down, the logic is the same. <br>When i=n, inner runs n. When i=1, inner runs 1.<br>Sum is $n + (n-1) + ... + 1 = \\frac{n(n+1)}{2}$. <br><strong>Complexity:</strong> $\\Theta(n^2)$</p></details>
          </div>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">MATRIX ADDITION ANALYSIS</div>
          
          <span class="code-label">Algorithm Code</span>
          <div class="code-box">
// Adding two n x n matrices
void addMatrix(int[][] A, int[][] B, int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j]; // Basic Op
        }
    }
}
          </div>

          <span class="code-label">Formal Derivation</span>
          <div class="code-box">
// 1. Setup Summation
// Outer runs 0 to n-1. Inner runs 0 to n-1.
// Cost is 1 per inner step.
// Sum(i=0 to n-1) [ Sum(j=0 to n-1) [ 1 ] ]

// 2. Solve Inner
// Sum(j=0 to n-1) of 1 = (n-1 - 0 + 1) = n

// 3. Solve Outer
// Sum(i=0 to n-1) of n
// = n * (n - 0) = n^2

// Conclusion: Theta(n^2)
          </div>
        </div>
      </div>
    `
  },
  recurrence: {
    id: 'recurrence',
    title: 'Efficiency: Recurrence Relations',
    notes: `
      <div class="space-y-6">
        <!-- --- PART 1: GENERAL THEORY --- -->
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Analyzing Recursive Algorithms</h3>
          <p class="leading-relaxed text-sm md:text-base">
            For recursive algorithms, we cannot just use summation. We use <strong>Recurrence Relations</strong> defined by $T(n)$ in terms of itself with smaller inputs.
          </p>
        </div>
        
        <!-- --- MASTER THEOREM DEFINITION --- -->
        <div class="step-card">
          <span class="step-title">The Master Theorem</span>
          <p class="text-sm mb-2">Used for Divide & Conquer relations of form: $T(n) = aT(n/b) + f(n)$</p>
          <ul class="list-disc pl-5 mt-2 space-y-2 text-sm">
            <li><strong>$a$:</strong> Number of sub-problems (recursive calls).</li>
            <li><strong>$b$:</strong> Factor by which problem size splits.</li>
            <li><strong>$d$:</strong> Driver function power ($f(n) \\in \\Theta(n^d)$).</li>
          </ul>
          <div class="mt-4 p-3 bg-white/5 rounded text-sm font-mono">
            1. If $a < b^d$ : $\\Theta(n^d)$ (Driver dominates)<br>
            2. If $a = b^d$ : $\\Theta(n^d \\log n)$ (Balanced)<br>
            3. If $a > b^d$ : $\\Theta(n^{\\log_b a})$ (Roots dominate)
          </div>
        </div>

        <!-- --- PART 2: QUESTION 4 SCENARIO --- -->
        <div class="glass p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 class="font-bold text-sm mb-2 text-accent">Exam Application (Question 4)</h4>
          <p class="text-sm"><strong>Scenario:</strong> You write a Divide & Conquer algorithm to sum an array of size $n$.</p>
          <p class="text-sm mt-2"><strong>The Claim:</strong> A classmate argues this runs in $\\log n$ time because it splits in half like Binary Search.</p>
          <p class="text-sm mt-2 text-red-300"><strong>Task:</strong> Prove them WRONG by solving the recurrence.</p>
        </div>

        <!-- --- STEP 1: DEFINE --- -->
        <div>
          <h4 class="font-bold text-sm mb-2 text-accent">Step 1: Define Recurrence</h4>
          <p class="text-sm leading-relaxed">To sum $n$ elements, we split into 2 halves. We solve recursively ($2 \\times A(n/2)$), then perform 1 addition to combine.</p>
          <div class="latex-output text-center">$$A(n) = 2A(n/2) + 1$$</div>
        </div>

        <!-- --- STEP 2: SOLVE --- -->
        <div>
          <h4 class="font-bold text-sm mb-2 text-accent">Step 2: Solve (Master Theorem)</h4>
          <p class="text-sm mt-2 mb-1">Identify parameters from $A(n) = 2A(n/2) + 1$:</p>
          <ul class="list-disc pl-5 space-y-1 text-sm font-mono">
            <li>$a = 2$ (2 calls)</li>
            <li>$b = 2$ (Size / 2)</li>
            <li>$f(n) = 1 = n^0 \\implies d = 0$</li>
          </ul>

          <p class="text-sm mt-3 mb-1"><strong>Compare $a$ vs $b^d$:</strong></p>
          <div class="latex-output text-center">$$2 \\quad \\text{vs} \\quad 2^0 (=1)$$</div>
          <p class="text-sm text-center mt-1">Since $2 > 1$, Case 3 applies (Roots dominate).</p>
        </div>

        <!-- --- CONCLUSION --- -->
        <div class="glass p-4 rounded-lg border border-red-500/30">
          <h4 class="font-bold text-sm mb-2 text-accent">Final Calculation</h4>
          <div class="latex-output text-center">$$A(n) \\in \\Theta(n^{\\log_b a}) = \\Theta(n^{\\log_2 2}) = \\Theta(n^1) = \\Theta(n)$$</div>
          <p class="text-sm mt-2"><strong>Conclusion:</strong> The complexity is $\\Theta(n)$ (Linear). The classmate is <strong>WRONG</strong>. Splitting the problem doesn\'t help if you still have to process every single element.</p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <!-- --- EXAMPLE 1 --- -->
        <div>
          <div class="code-section-title">1. FACTORIAL (Linear Recursion)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm F(n)
  if n == 0 return 1
  return F(n-1) * n
          </div>

          <span class="code-label">Java Code</span>
          <div class="code-box">
int factorial(int n) {
    if (n == 0) return 1;
    return factorial(n - 1) * n;
}
          </div>

          <span class="code-label">JavaScript Code (Analysis)</span>
          <div class="code-box">
// Recurrence Relation:
// M(n) = M(n-1) + 1
// M(0) = 0
// By Backward Substitution:
// M(n) = [M(n-2)+1] + 1 = M(n-2) + 2
// ... = M(n-k) + k
// At base case k=n: M(0) + n = n
// Complexity: Theta(n)
          </div>
        </div>

        <!-- --- EXAMPLE 2 --- -->
        <div>
          <div class="code-section-title">2. MERGE SORT (Divide & Conquer)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm MergeSort(A)
  if A.size > 1
    copy A[0..n/2] to B
    copy A[n/2..n] to C
    MergeSort(B)
    MergeSort(C)
    Merge(B, C, A)
          </div>

          <span class="code-label">Java Code</span>
          <div class="code-box">
void mergeSort(int[] arr) {
    if (arr.length < 2) return;
    int mid = arr.length / 2;
    // ... split array logic ...
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
}
          </div>

          <span class="code-label">JavaScript Code (Analysis)</span>
          <div class="code-box">
// Relation: T(n) = 2T(n/2) + c*n
// Here: a=2, b=2, d=1 (since merge is linear)
// Compare a vs b^d:
// 2 vs 2^1  =>  2 = 2
// Case 2 of Master Theorem applies.
// Complexity: Theta(n^d log n) = Theta(n log n)
          </div>
        </div>
      </div>
    `
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
          <h3 class="text-xl font-bold text-accent mb-2">Definition</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Brute Force is a straightforward approach directly based on the problem statement and definitions. It implies a lack of sophistication ("Just do it").
          </p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm opacity-80">
            <li><strong>Strengths:</strong> Wide applicability, simple to implement, yields reasonable algorithms for small tasks.</li>
            <li><strong>Weaknesses:</strong> Rarely produces efficient algorithms, often infeasibly slow ($O(n!)$ or $O(2^n)$).</li>
          </ul>
        </div>
        <div class="glass p-4 rounded-lg">
          <h4 class="font-bold text-sm mb-2 text-accent">The Closest Pair Problem</h4>
          <p class="text-sm">Find the two points that are closest together in a set of $n$ 2D points $P_1 = (x_1, y_1) \\dots P_n$.</p>
          <p class="text-sm mt-2"><strong>Brute Force Strategy:</strong> Calculate distance between EVERY pair of points and keep the minimum.</p>
          <p class="text-sm mt-2 text-red-300">Efficiency: $\\Theta(n^2)$</p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">CLOSEST PAIR ALGORITHM</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
dmin <- infinity
for i <- 1 to n-1 do
  for j <- i+1 to n do
    d <- sqrt( (xi - xj)^2 + (yi - yj)^2 )
    if d < dmin
      dmin <- d
      index1 <- i
      index2 <- j
return index1, index2
          </div>

          <span class="code-label">Java Implementation</span>
          <div class="code-box">
public double findClosest(Point[] points) {
    double minDist = Double.MAX_VALUE;
    for (int i = 0; i < points.length; i++) {
        for (int j = i + 1; j < points.length; j++) {
            double dist = points[i].distance(points[j]);
            if (dist < minDist) {
                minDist = dist;
            }
        }
    }
    return minDist;
}
          </div>

          <span class="code-label">JavaScript (Live Logic)</span>
          <div class="code-box">
function bruteClosestPair(points) {
    let minInfo = { p1: null, p2: null, dist: Infinity };
    
    // Compare every point with every other point
    for(let i = 0; i < points.length; i++){
        for(let j = i + 1; j < points.length; j++){
            let dx = points[i].x - points[j].x;
            let dy = points[i].y - points[j].y;
            let d = Math.sqrt(dx*dx + dy*dy);
            
            if(d < minInfo.dist){
                minInfo.dist = d;
                minInfo.p1 = points[i];
                minInfo.p2 = points[j];
            }
        }
    }
    return minInfo;
}
          </div>
        </div>
      </div>
    `
  },
  bf_string: {
    id: 'bf_string',
    title: 'Brute Force: String Matching',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction to Brute Force</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Brute Force is a straightforward approach directly based on the problem statement. It implies a lack of sophistication, but it is often the quickest to implement and applicable to a wide range of problems.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">The String Matching Problem</span>
          <p class="text-sm mb-2">Given a text $T$ (n characters) and a pattern $P$ (m characters), find the index of the first occurrence of $P$ in $T$.</p>
          <ul class="list-disc pl-5 mt-2 space-y-2 text-sm">
            <li><strong>Method:</strong> Align pattern at the beginning of the text. Compare characters from left to right.</li>
            <li><strong>Mismatch:</strong> As soon as a mismatch occurs, shift the pattern <strong>one position</strong> to the right.</li>
            <li><strong>Repeat:</strong> Continue until a match is found or the pattern reaches the end ($n-m$).</li>
          </ul>
        </div>
        <div class="glass p-4 rounded-lg">
          <h4 class="font-bold text-sm mb-2 text-center text-accent">Efficiency Analysis</h4>
          <p class="text-sm opacity-90 mb-2"><strong>Worst Case:</strong> The search string matches on every character except the last, for every iteration.</p>
          <ul class="space-y-1 text-sm font-mono">
            <li>Comparisons: $m(n - m + 1)$</li>
            <li>Complexity: $\\Theta(nm)$</li>
            <li>Average Case (Natural Language): $\\Theta(n)$</li>
          </ul>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">1. STRING MATCHING</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm BruteForceStringMatch(T[0..n-1], P[0..m-1])
  // Align pattern at every possible starting index i
  for i <- 0 to n - m do
    j <- 0
    // Compare characters while they match
    while j < m AND P[j] == T[i + j] do
      j <- j + 1
    if j == m return i
  return -1
          </div>

          <span class="code-label">Java Code</span>
          <div class="code-box">
int bruteForceSearch(String txt, String pat) {
    int n = txt.length();
    int m = pat.length();
    
    for (int i = 0; i <= n - m; i++) {
        int j = 0;
        while (j < m && txt.charAt(i + j) == pat.charAt(j)) {
            j++;
        }
        if (j == m) return i; // Found at index i
    }
    return -1;
}
          </div>

          <span class="code-label">Analysis</span>
          <div class="code-box">
// Outer loop runs (n - m + 1) times.
// Inner while loop runs at most m times.
// Total comparisons = m * (n - m + 1)
// Since n usually >> m, we drop lower terms.
// Complexity: O(n * m)
          </div>
        </div>
      </div>
    `
  },
  bf_geom: {
    id: 'bf_geom',
    title: 'Brute Force: Geometric Problems',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Closest Pair & Convex Hull</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Geometric algorithms deal with points, lines, and polygons. Brute force approaches here are conceptually simple but often computationally expensive.
          </p>
        </div>
        
        <!-- --- CLOSEST PAIR --- -->
        <div class="step-card">
          <span class="step-title">Closest Pair Problem</span>
          <p class="text-sm">Find the two points that are closest together in a set of $n$ 2D points.</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>Calculate distance between <strong>every pair</strong> of distinct points.</li>
            <li>Compute distance using Euclidean formula: $d = \\sqrt{(x_i-x_j)^2 + (y_i-y_j)^2}$.</li>
            <li>Keep track of the minimum distance found so far.</li>
          </ul>
          <div class="mt-3 p-2 bg-red-500/10 border border-red-500/30 rounded">
            <p class="text-sm font-mono text-red-300"><strong>Efficiency:</strong> $\\Theta(n^2)$</p>
            <p class="text-xs opacity-70">Reason: Nested loops checking every pair.</p>
          </div>
        </div>

        <!-- --- CONVEX HULL --- -->
        <div class="step-card">
          <span class="step-title">Convex Hull Problem</span>
          <p class="text-sm">Find the smallest convex polygon containing all $n$ points (like a rubber band snapped around pegs).</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li><strong>Algorithm:</strong> For every pair of points ($n^2$), draw a line.</li>
            <li>Check if all <strong>other</strong> points ($n$) lie on the same side of that line.</li>
            <li>If yes, that line segment is part of the Convex Hull boundary.</li>
          </ul>
          <div class="mt-3 p-2 bg-red-500/10 border border-red-500/30 rounded">
            <p class="text-sm font-mono text-red-300"><strong>Efficiency:</strong> $O(n^3)$</p>
            <p class="text-xs opacity-70">Reason: $n^2$ pairs $\\times$ $n$ checks per pair.</p>
          </div>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <!-- --- EXAMPLE 1: Closest Pair --- -->
        <div>
          <div class="code-section-title">1. CLOSEST PAIR (Quadratic)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm ClosestPair(P)
  dmin <- infinity
  for i <- 1 to n-1 do
    for j <- i+1 to n do
      d <- sqrt((xi - xj)^2 + (yi - yj)^2)
      if d < dmin
        dmin <- d; index1 <- i; index2 <- j
  return index1, index2
          </div>

          <span class="code-label">Java Code</span>
          <div class="code-box">
double closestPair(Point[] p) {
    double min = Double.MAX_VALUE;
    int n = p.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            double dist = p[i].distanceTo(p[j]);
            if (dist < min) min = dist;
        }
    }
    return min;
}
          </div>

          <span class="code-label">Analysis</span>
          <div class="code-box">
// Basic Operation: Distance Calculation
// Summation: Sum(i=1 to n-1) of [ (n) - (i+1) + 1 ]
// = (n-1) + (n-2) + ... + 1
// = n(n-1)/2
// Complexity: Theta(n^2)
          </div>
        </div>

        <!-- --- EXAMPLE 2: Convex Hull --- -->
        <div>
          <div class="code-section-title">2. CONVEX HULL (Cubic)</div>
          
          <span class="code-label">Pseudocode Logic</span>
          <div class="code-box">
For each pair of points (p1, p2):
  Determine a line equation ax + by = c
  Check all other n-2 points:
    Do they lie on the same side of line?
  If True -> Add (p1, p2) to hull boundary.
          </div>

          <span class="code-label">Analysis</span>
          <div class="code-box">
// 1. Pairs of points: O(n^2)
// 2. Checking all other points: O(n)
// Total Efficiency: O(n^2) * O(n) = O(n^3)
// This is very slow. Better algorithms exist (e.g., QuickHull).
          </div>
        </div>
      </div>
    `
  },
  bf_exhaust: {
    id: 'bf_exhaust',
    title: 'Brute Force: Exhaustive Search',
    notes: `
      <div class="space-y-8">
        <!-- --- INTRO --- -->
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Discrete Optimization</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Exhaustive Search generates <strong>every possible candidate solution</strong> (permutations or subsets), evaluates them, and picks the best one.
          </p>
        </div>

        <!-- --- 1. TSP VISUAL & NOTES --- -->
        <div class="step-card">
          <span class="step-title">1. Travelling Salesman Problem (TSP)</span>
          <p class="text-sm mb-4">Find the shortest tour visiting every city exactly once and returning to start.</p>
          
          <!-- VISUAL GRAPH -->
          <div class="glass p-4 rounded-lg border border-white/10 mb-4">
            <h4 class="font-bold text-xs text-center text-accent mb-2">Example Graph (4 Cities)</h4>
            <div class="flex flex-col md:flex-row items-center gap-6">
              <!-- SVG Graph -->
              <svg viewBox="0 0 200 150" class="w-48 h-32">
                <line x1="50" y1="30" x2="150" y2="30" stroke="#555" stroke-width="2" />
                <text x="100" y="25" fill="#aaa" font-size="10">10</text>
                <line x1="150" y1="30" x2="150" y2="120" stroke="#555" stroke-width="2" />
                <text x="155" y="75" fill="#aaa" font-size="10">15</text>
                <line x1="150" y1="120" x2="50" y2="120" stroke="#555" stroke-width="2" />
                <text x="100" y="135" fill="#aaa" font-size="10">20</text>
                <line x1="50" y1="120" x2="50" y2="30" stroke="#555" stroke-width="2" />
                <text x="35" y="75" fill="#aaa" font-size="10">10</text>
                <line x1="50" y1="30" x2="150" y2="120" stroke="#f87171" stroke-width="1" stroke-dasharray="4" />
                <text x="80" y="70" fill="#f87171" font-size="10">35</text>
                <!-- Nodes -->
                <circle cx="50" cy="30" r="12" fill="#1e293b" stroke="#fff" /><text x="50" y="34" text-anchor="middle" fill="#fff" font-size="10">A</text>
                <circle cx="150" cy="30" r="12" fill="#1e293b" stroke="#fff" /><text x="150" y="34" text-anchor="middle" fill="#fff" font-size="10">B</text>
                <circle cx="150" cy="120" r="12" fill="#1e293b" stroke="#fff" /><text x="150" y="124" text-anchor="middle" fill="#fff" font-size="10">C</text>
                <circle cx="50" cy="120" r="12" fill="#1e293b" stroke="#fff" /><text x="50" y="124" text-anchor="middle" fill="#fff" font-size="10">D</text>
              </svg>
              <!-- Routes Table -->
              <div class="text-xs font-mono">
                <div class="border-b border-white/10 pb-1 mb-1 font-bold">Routes (Start A)</div>
                <p>A→B→C→D→A: 10+15+20+10 = <span class="text-green-400">55</span></p>
                <p>A→B→D→C→A: 10+?+20+35 = 80+</p>
                <div class="mt-2 text-red-300">Cost: $(n-1)!/2$ permutations</div>
              </div>
            </div>
          </div>
        </div>

        <!-- --- 2. KNAPSACK VISUAL & NOTES --- -->
        <div class="step-card">
          <span class="step-title">2. Knapsack Problem</span>
          <p class="text-sm mb-4">Given items with Weight (w) and Value (v), maximize value in a knapsack of capacity W.</p>
          
          <!-- VISUAL ITEMS -->
          <div class="glass p-4 rounded-lg border border-white/10">
            <div class="flex justify-between items-center mb-4">
              <div class="flex gap-2">
                <!-- Item 1 -->
                <div class="bg-blue-900/30 border border-blue-500 rounded p-2 text-center w-20">
                  <div class="text-xs text-gray-400">Item 1</div><div class="font-bold">2kg</div><div class="text-green-400">$20</div>
                </div>
                <!-- Item 2 -->
                <div class="bg-blue-900/30 border border-blue-500 rounded p-2 text-center w-20">
                  <div class="text-xs text-gray-400">Item 2</div><div class="font-bold">5kg</div><div class="text-green-400">$30</div>
                </div>
                <!-- Item 3 -->
                <div class="bg-blue-900/30 border border-blue-500 rounded p-2 text-center w-20">
                  <div class="text-xs text-gray-400">Item 3</div><div class="font-bold">10kg</div><div class="text-green-400">$50</div>
                </div>
              </div>
              <!-- Capacity -->
              <div class="border-2 border-dashed border-white/30 rounded p-3 h-24 flex items-center justify-center w-24 text-center">
                <div><div class="text-xs text-gray-400">Capacity</div><div class="font-bold text-xl">10kg</div></div>
              </div>
            </div>
            <p class="text-xs font-mono text-center text-accent">Process: Try all $2^n$ subsets</p>
            <ul class="text-xs mt-2 space-y-1 opacity-80 pl-4 list-disc">
              <li>{1, 2} -> 7kg, $50 (Valid, Best)</li>
              <li>{3} -> 10kg, $50 (Valid)</li>
              <li>{1, 3} -> 12kg (Invalid, >10kg)</li>
            </ul>
          </div>
          <p class="text-xs text-red-300 mt-2 text-right">Efficiency: $\\Omega(2^n)$</p>
        </div>

        <!-- --- 3. ASSIGNMENT PROBLEM --- -->
        <div class="step-card">
          <span class="step-title">3. Assignment Problem</span>
          <p class="text-sm mb-4">Assign $n$ people to $n$ jobs (one-to-one) to minimize total cost.</p>

          <!-- MATRIX VISUAL -->
          <div class="glass p-4 rounded-lg border border-white/10 mb-4">
            <h4 class="font-bold text-xs text-center text-accent mb-2">Cost Matrix C[i,j]</h4>
            <div class="grid grid-cols-4 gap-1 text-center text-xs font-mono items-center">
              <!-- Header -->
              <div></div><div class="text-gray-400">Job1</div><div class="text-gray-400">Job2</div><div class="text-gray-400">Job3</div>
              <!-- P1 -->
              <div class="text-gray-400 font-bold">P1</div>
              <div class="bg-black/20 py-2 rounded">9</div>
              <div class="bg-green-500/20 text-green-400 border border-green-500 py-2 rounded font-bold">2</div>
              <div class="bg-black/20 py-2 rounded">7</div>
              <!-- P2 -->
              <div class="text-gray-400 font-bold">P2</div>
              <div class="bg-green-500/20 text-green-400 border border-green-500 py-2 rounded font-bold">6</div>
              <div class="bg-black/20 py-2 rounded">4</div>
              <div class="bg-black/20 py-2 rounded">3</div>
              <!-- P3 -->
              <div class="text-gray-400 font-bold">P3</div>
              <div class="bg-black/20 py-2 rounded">5</div>
              <div class="bg-black/20 py-2 rounded">8</div>
              <div class="bg-green-500/20 text-green-400 border border-green-500 py-2 rounded font-bold">1</div>
            </div>
            <p class="text-xs text-center mt-3">Cost = 2 + 6 + 1 = <span class="text-green-400 font-bold">9</span></p>
          </div>
          <p class="text-xs text-red-300 mt-2 text-right">Efficiency: $\\Theta(n!)$ (Permutations)</p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <!-- --- EXAMPLE 1: TSP --- -->
        <div>
          <div class="code-section-title">1. TSP ALGORITHM (Permutations)</div>
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm TSP(Cities C)
  min_dist <- infinity
  best_path <- null
  // Generate every possible order
  foreach permutation P of C do
    if cost(P) < min_dist
      min_dist <- cost(P)
      best_path <- P
  return best_path
          </div>
          <span class="code-label">Analysis</span>
          <div class="code-box">
// Cities = n
// Number of permutations = (n-1)!
// We divide by 2 because A->B... is same dist as ...B->A
// Complexity: Theta(n!)
          </div>
        </div>

        <!-- --- EXAMPLE 2: KNAPSACK --- -->
        <div>
          <div class="code-section-title">2. KNAPSACK (Subsets)</div>
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm Knapsack(Weights W, Values V, Capacity C)
  max_val <- 0
  // Iterate 0 to 2^n - 1 (Binary representation of subsets)
  for i <- 0 to 2^n - 1 do
    subset <- getItemsFromBinary(i)
    if weight(subset) <= C
      if value(subset) > max_val
        max_val <- value(subset)
  return max_val
          </div>
        </div>

        <!-- --- EXAMPLE 3: ASSIGNMENT --- -->
        <div>
          <div class="code-section-title">3. ASSIGNMENT (Permutations)</div>
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm Assignment(CostMatrix C[0..n-1, 0..n-1])
  min_cost <- infinity
  // Generate permutations of columns {0, 1, ..., n-1}
  foreach permutation p of {0...n-1} do
    current_cost <- 0
    for i <- 0 to n-1 do
      // p[i] is the job assigned to person i
      current_cost <- current_cost + C[i, p[i]]
    
    if current_cost < min_cost
      min_cost <- current_cost
      best_assignment <- p
  return best_assignment
          </div>
          <div class="code-box">
// Note: Exhaustive search is impractical for n > 12.
// The Hungarian Algorithm solves this in O(n^3).
          </div>
        </div>
      </div>
    `
  },

  // ============================================
  // CATEGORY: DECREASE & CONQUER (dec)
  // ============================================
  dec_intro: {
    id: 'dec_intro',
    title: "Decrease & Conquer: Intro & Insertion Sort",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The Decrease & Conquer Strategy</h3>
          <p class="leading-relaxed text-sm md:text-base">
            The core principle of **Decrease & Conquer** is to solve a problem by reducing an instance of size $n$ to a smaller instance of the same problem, solving the smaller instance, and then extending that solution to solve the original instance.
          </p>
        </div>
        <div class="step-card">
          <span class="step-title">Three Major Variations</span>
          <ul class="list-disc pl-5 mt-2 space-y-2 text-sm">
            <li><strong>Decrease by a Constant (usually 1):</strong> Size is reduced by the same constant at each step (e.g., Insertion Sort, Topological Sort, Generating Permutations).</li>
            <li><strong>Decrease by a Constant Factor (usually 2):</strong> Size is reduced by the same constant factor at each step (e.g., Binary Search, Fake Coin Problem, Russian Peasant Multiplication).</li>
            <li><strong>Variable-Size Decrease:</strong> Size reduction varies from step to step based on the input data (e.g., Euclid's GCD, Interpolation Search, Selection Problem).</li>
          </ul>
        </div>
        <div class="glass p-4 rounded-lg">
          <h4 class="font-bold text-sm mb-2 text-accent">Insertion Sort</h4>
          <p class="text-sm">
            Insertion Sort is a classic bottom-up application of decrease-by-1. To sort an array $A[0 \dots n-1]$, we assume the subarray $A[0 \dots i-1]$ is already sorted, and we insert the single element $A[i]$ into its correct sorted position by shifting larger elements to the right.
          </p>
          <p class="text-sm mt-2 text-red-300">Worst-Case Efficiency: $\Theta(n^2)$</p>
          <p class="text-sm text-green-400">Best-Case Efficiency: $\Theta(n)$</p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">INSERTION SORT ALGORITHM</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm InsertionSort(A[0..n-1])
  // Sorts a given array by insertion sort
  // Input: An array A[0..n-1] of n orderable elements
  // Output: Array A[0..n-1] sorted in nondecreasing order
  for i <- 1 to n - 1 do
    v <- A[i]
    j <- i - 1
    while j >= 0 AND A[j] > v do
      A[j + 1] <- A[j]
      j <- j - 1
    A[j + 1] <- v
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity:
  - Worst Case (Reverse Sorted): Θ(n²) comparisons and shifts.
  - Best Case (Already Sorted): Θ(n) comparisons, 0 shifts.
  - Average Case (Random): Θ(n²) comparisons and shifts.
- Space Complexity: Θ(1) auxiliary space (in-place).
- Reason: The outer loop runs n-1 times. In the worst case, the inner loop runs i times for each i, leading to sum_{i=1}^{n-1} i = n(n-1)/2 ≈ n²/2 operations.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static void insertionSort(int[] A) {
    int n = A.length;
    for (int i = 1; i < n; i++) {
        int v = A[i];
        int j = i - 1;
        
        // Shift elements greater than v to the right
        while (j >= 0 && A[j] > v) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = v;
    }
}
          </div>

          <span class="code-label">JavaScript</span>
          <div class="code-box">
function insertionSort(arr) {
    const n = arr.length;
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
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        v = arr[i]
        j = i - 1
        
        # Shift elements of arr[0..i-1] that are greater than v
        while j >= 0 and arr[j] > v:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = v
    return arr
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Insertion sort is highly efficient for small datasets and partially sorted arrays (nearly O(n) time). It is a stable sorting algorithm and sorts in-place.
          </div>
        </div>
      </div>
    `
  },
  dec_topo: {
    id: 'dec_topo',
    title: "Topological Sort",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definition & Applications</h3>
          <p class="leading-relaxed text-sm md:text-base">
            For a **Directed Acyclic Graph (DAG)**, a topological sort is a linear ordering of its vertices such that for every directed edge $u \to v$, vertex $u$ comes before $v$ in the ordering.
          </p>
          <p class="text-xs opacity-75 mt-2">
            Topological sorting is widely used for task scheduling, resolving build dependencies (e.g., packages), and instruction pipelining.
          </p>
        </div>

        <!-- --- VISUAL EXAMPLE (SVG GRAPH) --- -->
        <div class="glass p-4 rounded-lg border border-white/10">
          <h4 class="font-bold text-sm mb-6 text-center text-accent">Visual Trace: Source Removal Method</h4>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- --- STEP 1 --- -->
            <div class="bg-black/20 rounded-lg p-2 text-center">
              <div class="text-xs font-bold text-blue-300 mb-2">Step 1: Remove "a" (Source)</div>
              <svg viewBox="0 0 200 120" class="w-full h-32 mx-auto">
                <defs><marker id="head" orient="auto" markerWidth="6" markerHeight="6" refX="5" refY="3"><path d="M0,0 V6 L6,3 Z" fill="#999"/></marker></defs>
                
                <line x1="30" y1="60" x2="90" y2="20" stroke="#f87171" stroke-width="2" stroke-dasharray="4" marker-end="url(#head)" />
                <line x1="30" y1="60" x2="90" y2="100" stroke="#f87171" stroke-width="2" stroke-dasharray="4" marker-end="url(#head)" />
                <line x1="110" y1="20" x2="170" y2="60" stroke="#555" stroke-width="2" marker-end="url(#head)" />
                <line x1="110" y1="100" x2="170" y2="60" stroke="#555" stroke-width="2" marker-end="url(#head)" />

                <circle cx="20" cy="60" r="15" fill="#22c55e" stroke="#fff" stroke-width="2" />
                <text x="20" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">a</text>
                
                <circle cx="100" cy="20" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />
                <text x="100" y="25" text-anchor="middle" fill="#fff" font-size="12">b</text>
                
                <circle cx="100" cy="100" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />
                <text x="100" y="105" text-anchor="middle" fill="#fff" font-size="12">c</text>
                
                <circle cx="180" cy="60" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />
                <text x="180" y="65" text-anchor="middle" fill="#fff" font-size="12">d</text>
              </svg>
              <p class="text-xs mt-1 text-green-400">List: { a }</p>
            </div>

            <!-- --- STEP 2 --- -->
            <div class="bg-black/20 rounded-lg p-2 text-center">
              <div class="text-xs font-bold text-blue-300 mb-2">Step 2: Remove "b" (Source)</div>
              <svg viewBox="0 0 200 120" class="w-full h-32 mx-auto">
                <line x1="110" y1="20" x2="170" y2="60" stroke="#f87171" stroke-width="2" stroke-dasharray="4" marker-end="url(#head)" />
                <line x1="110" y1="100" x2="170" y2="60" stroke="#555" stroke-width="2" marker-end="url(#head)" />

                <circle cx="20" cy="60" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" />
                <text x="20" y="65" text-anchor="middle" fill="#555" font-size="12">a</text>
                
                <circle cx="100" cy="20" r="15" fill="#22c55e" stroke="#fff" stroke-width="2" />
                <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">b</text>
                
                <circle cx="100" cy="100" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />
                <text x="100" y="105" text-anchor="middle" fill="#fff" font-size="12">c</text>
                
                <circle cx="180" cy="60" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />
                <text x="180" y="65" text-anchor="middle" fill="#fff" font-size="12">d</text>
              </svg>
              <p class="text-xs mt-1 text-green-400">List: { a, b }</p>
            </div>

            <!-- --- STEP 3 --- -->
            <div class="bg-black/20 rounded-lg p-2 text-center">
              <div class="text-xs font-bold text-blue-300 mb-2">Step 3: Remove "c" (Source)</div>
              <svg viewBox="0 0 200 120" class="w-full h-32 mx-auto">
                <line x1="110" y1="100" x2="170" y2="60" stroke="#f87171" stroke-width="2" stroke-dasharray="4" marker-end="url(#head)" />

                <circle cx="20" cy="60" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" />
                <text x="20" y="65" text-anchor="middle" fill="#555" font-size="12">a</text>
                
                <circle cx="100" cy="20" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" />
                <text x="100" y="25" text-anchor="middle" fill="#555" font-size="12">b</text>
                
                <circle cx="100" cy="100" r="15" fill="#22c55e" stroke="#fff" stroke-width="2" />
                <text x="100" y="105" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">c</text>
                
                <circle cx="180" cy="60" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />
                <text x="180" y="65" text-anchor="middle" fill="#fff" font-size="12">d</text>
              </svg>
              <p class="text-xs mt-1 text-green-400">List: { a, b, c }</p>
            </div>

            <!-- --- STEP 4 --- -->
            <div class="bg-black/20 rounded-lg p-2 text-center">
              <div class="text-xs font-bold text-blue-300 mb-2">Step 4: Remove "d" (Source)</div>
              <svg viewBox="0 0 200 120" class="w-full h-32 mx-auto">
                <circle cx="20" cy="60" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" /> 
                <text x="20" y="65" text-anchor="middle" fill="#555" font-size="12">a</text>
                <circle cx="100" cy="20" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" /> 
                <text x="100" y="25" text-anchor="middle" fill="#555" font-size="12">b</text>
                <circle cx="100" cy="100" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" /> 
                <text x="100" y="105" text-anchor="middle" fill="#555" font-size="12">c</text>
                
                <circle cx="180" cy="60" r="15" fill="#22c55e" stroke="#fff" stroke-width="2" />
                <text x="180" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">d</text>
              </svg>
              <p class="text-xs mt-1 text-green-400">List: { a, b, c, d }</p>
            </div>

          </div>
        </div>

        <div class="step-card">
          <span class="step-title">Source Removal Algorithm</span>
          <p class="text-sm">
            Topological Sort can be elegantly solved using **Decrease & Conquer** via Kahn's Source Removal Algorithm.
          </p>
          <ol class="list-decimal pl-5 mt-2 space-y-1 text-sm">
            <li>Identify a vertex with <strong>in-degree 0</strong> (called a source).</li>
            <li>Output the source vertex to the sorted order.</li>
            <li><strong>Decrease problem size:</strong> Remove the source and all its outgoing edges from the graph.</li>
            <li>Repeat until no vertices remain. If nodes remain but none have in-degree 0, the graph contains a cycle.</li>
          </ol>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">TOPOLOGICAL SORT (KAHN'S SOURCE REMOVAL)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm SourceRemovalTopoSort(G)
  // Implements topological sort via source removal
  // Input: A directed acyclic graph (DAG) G = (V, E)
  // Output: A list of vertices in topological order
  
  Calculate in-degree for all vertices
  Initialize an empty list L
  Initialize a Queue Q with all vertices having in-degree = 0
  
  while Q is not empty do
    u <- Dequeue from Q
    L.append(u)
    
    for each neighbor v of u do
      in-degree[v] <- in-degree[v] - 1
      if in-degree[v] == 0 then
        Enqueue v into Q
        
  if L.length < |V| then
    return "Error: Graph contains a cycle"
  else
    return L
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: Θ(|V| + |E|) where |V| is the number of vertices and |E| is the number of edges.
- Space Complexity: Θ(|V|) to store in-degrees and queue space.
- Reason: Each vertex is enqueued and dequeued exactly once. For each vertex, we iterate over its outgoing edges exactly once, giving overall linear time complexity.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
import java.util.*;

public class TopologicalSort {
    public static List<Integer> topoSort(int numVertices, List<List<Integer>> adj) {
        int[] inDegree = new int[numVertices];
        for (int u = 0; u < numVertices; u++) {
            for (int v : adj.get(u)) {
                inDegree[v]++;
            }
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numVertices; i++) {
            if (inDegree[i] == 0) {
                queue.add(i);
            }
        }
        
        List<Integer> order = new ArrayList<>();
        while (!queue.isEmpty()) {
            int u = queue.poll();
            order.add(u);
            
            for (int v : adj.get(u)) {
                inDegree[v]--;
                if (inDegree[v] == 0) {
                    queue.add(v);
                }
            }
        }
        
        if (order.size() != numVertices) {
            throw new IllegalStateException("Cycle detected in graph!");
        }
        return order;
    }
}
          </div>

          <span class="code-label">JavaScript</span>
          <div class="code-box">
function topologicalSort(numVertices, edges) {
    const inDegree = Array(numVertices).fill(0);
    const adj = Array.from({ length: numVertices }, () => []);
    
    edges.forEach(([u, v]) => {
        adj[u].push(v);
        inDegree[v]++;
    });
    
    const queue = [];
    for (let i = 0; i < numVertices; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    const order = [];
    while (queue.length > 0) {
        const u = queue.shift();
        order.push(u);
        
        adj[u].forEach(v => {
            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        });
    }
    
    return order.length === numVertices ? order : "Cycle Detected";
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
from collections import deque

def topological_sort(num_vertices, edges):
    in_degree = [0] * num_vertices
    adj = [[] for _ in range(num_vertices)]
    
    for u, v in edges:
        adj[u].append(v)
        in_degree[v] += 1
        
    queue = deque([i for i in range(num_vertices) if in_degree[i] == 0])
    order = []
    
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    if len(order) != num_vertices:
        return "Cycle Detected"
    return order
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
The Source Removal method is also known as Kahn's Algorithm. An alternative approach is utilizing Depth-First Search (DFS) and ordering vertices by decreasing post-visit order numbers.
          </div>
        </div>
      </div>
    `
  },
  dec_perm: {
    id: 'dec_perm',
    title: "Generating Permutations (Johnson-Trotter)",
    notes: `
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The Johnson-Trotter Algorithm</h3>
          <p class="leading-relaxed text-sm md:text-base">
            This algorithm systematically generates all $n!$ permutations of $\{1, 2, \dots, n\}$ iteratively. It does so by applying the decrease-by-1 strategy: generating permutations of size $n$ from those of size $n-1$.
          </p>
        </div>

        <div class="glass p-4 rounded-lg border-l-4 border-blue-500">
          <h4 class="font-bold text-sm mb-2 text-accent">Concept of Mobile Elements</h4>
          <p class="text-xs md:text-sm mb-2">
            Each integer $i$ has an associated direction arrow pointing left ($\leftarrow$) or right ($\rightarrow$).
          </p>
          <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>An integer is **Mobile** if its arrow points to an adjacent neighbor that is **smaller** than itself.</li>
            <li>Initially, all integers point left: $\leftarrow 1 \quad \leftarrow 2 \quad \dots \quad \leftarrow n$.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-4 pl-2 border-l-4 border-accent">Visual Trace (n=3)</h3>
          
          <!-- STATE 1 -->
          <div class="step-card">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-mono text-gray-400">Step 1</span>
              <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Largest Mobile: 3</span>
            </div>
            <div class="font-mono text-xl text-center bg-black/30 p-3 rounded tracking-widest">
              <span class="text-gray-500">←1</span> <span class="text-gray-500">←2</span> <span class="text-green-400 font-bold">←3</span>
            </div>
            <p class="text-xs mt-2 opacity-80">3 points to 2. Since 3 > 2, 3 is mobile. <strong>Swap Left.</strong></p>
          </div>

          <!-- STATE 2 -->
          <div class="step-card">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-mono text-gray-400">Step 2</span>
              <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Largest Mobile: 3</span>
            </div>
            <div class="font-mono text-xl text-center bg-black/30 p-3 rounded tracking-widest">
              <span class="text-gray-500">←1</span> <span class="text-green-400 font-bold">←3</span> <span class="text-gray-500">←2</span>
            </div>
            <p class="text-xs mt-2 opacity-80">3 points to 1. Since 3 > 1, 3 is mobile. <strong>Swap Left.</strong></p>
          </div>

          <!-- STATE 3 -->
          <div class="step-card">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-mono text-gray-400">Step 3</span>
              <span class="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Largest Mobile: 2</span>
            </div>
            <div class="font-mono text-xl text-center bg-black/30 p-3 rounded tracking-widest">
              <span class="text-red-400 opacity-60">←3</span> <span class="text-gray-500">←1</span> <span class="text-yellow-400 font-bold">←2</span>
            </div>
            <div class="text-xs mt-2 space-y-1">
              <p>3 is at the wall and cannot move left. <strong>2</strong> is now the largest mobile integer (it points to 1).</p>
              <p class="text-white font-bold">Action: Swap 2 Left.</p>
            </div>
          </div>

          <!-- STATE 4 -->
          <div class="step-card border-l-4 border-purple-500">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-mono text-gray-400">Step 4 (Direction Reverse)</span>
              <span class="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Rule #3 Triggered</span>
            </div>
            <div class="font-mono text-xl text-center bg-black/30 p-3 rounded tracking-widest">
              <span class="text-purple-300 font-bold">→3</span> <span class="text-yellow-400">←2</span> <span class="text-gray-500">←1</span>
            </div>
            <div class="text-xs mt-2 space-y-1">
              <p>We just moved 2. The rule says: reverse the direction of all elements larger than the mobile element (3 > 2).</p>
              <p>Therefore, <span class="text-red-400">←3</span> becomes <span class="text-green-400">→3</span>.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">JOHNSON-TROTTER PERMUTATION GENERATOR</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm JohnsonTrotter(n)
  // Generates all n! permutations of {1, ..., n}
  // Input: A positive integer n
  // Output: List of all permutations
  
  Initialize values val[1..n] <- [1, 2, ..., n]
  Initialize directions dir[1..n] <- [Left, Left, ..., Left]
  Print the initial permutation
  
  while there exists a mobile integer in val do
    Find the largest mobile integer k in val
    Find its index i in val
    
    // Swap k with its adjacent neighbor it points to
    neighbor_index <- i + (dir[i] == Left ? -1 : 1)
    Swap val[i] and val[neighbor_index]
    Swap dir[i] and dir[neighbor_index]
    
    // Reverse directions of all elements larger than k
    for j <- 1 to n do
      if val[j] > k then
        dir[j] <- (dir[j] == Left ? Right : Left)
        
    Print current permutation
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: Θ(n!) because it generates exactly n! permutations, and each transition takes O(n) time.
- Space Complexity: Θ(n) to store the elements and their directions.
- Reason: There are exactly n! unique permutations. Each step involves scanning for the largest mobile element, performing a swap, and potentially updating directions, which runs in O(n) time per permutation.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
import java.util.*;

public class JohnsonTrotter {
    public static List<int[]> generatePermutations(int n) {
        List<int[]> permutations = new ArrayList<>();
        int[] val = new int[n];
        boolean[] isLeft = new boolean[n]; // true for left, false for right
        
        for (int i = 0; i < n; i++) {
            val[i] = i + 1;
            isLeft[i] = true;
        }
        
        permutations.add(val.clone());
        
        while (true) {
            int mobileIdx = -1;
            int maxMobileVal = -1;
            
            // Find largest mobile integer
            for (int i = 0; i < n; i++) {
                int dir = isLeft[i] ? -1 : 1;
                int neighbor = i + dir;
                
                if (neighbor >= 0 && neighbor < n) {
                    if (val[i] > val[neighbor]) {
                        if (val[i] > maxMobileVal) {
                            maxMobileVal = val[i];
                            mobileIdx = i;
                        }
                    }
                }
            }
            
            if (mobileIdx == -1) break; // No mobile elements left
            
            // Swap mobile element with neighbor
            int dir = isLeft[mobileIdx] ? -1 : 1;
            int neighborIdx = mobileIdx + dir;
            
            int tempVal = val[mobileIdx];
            val[mobileIdx] = val[neighborIdx];
            val[neighborIdx] = tempVal;
            
            boolean tempDir = isLeft[mobileIdx];
            isLeft[mobileIdx] = isLeft[neighborIdx];
            isLeft[neighborIdx] = tempDir;
            
            // Reverse direction of all elements larger than k
            for (int i = 0; i < n; i++) {
                if (val[i] > maxMobileVal) {
                    isLeft[i] = !isLeft[i];
                }
            }
            
            permutations.add(val.clone());
        }
        
        return permutations;
    }
}
          </div>

          <span class="code-label">JavaScript</span>
          <div class="code-box">
function johnsonTrotter(n) {
    const val = Array.from({ length: n }, (_, i) => i + 1);
    const isLeft = Array(n).fill(true); // true = Left, false = Right
    const permutations = [[...val]];
    
    while (true) {
        let mobileIdx = -1;
        let maxMobileVal = -1;
        
        for (let i = 0; i < n; i++) {
            const dir = isLeft[i] ? -1 : 1;
            const neighborIdx = i + dir;
            
            if (neighborIdx >= 0 && neighborIdx < n) {
                if (val[i] > val[neighborIdx]) {
                    if (val[i] > maxMobileVal) {
                        maxMobileVal = val[i];
                        mobileIdx = i;
                    }
                }
            }
        }
        
        if (mobileIdx === -1) break;
        
        const dir = isLeft[mobileIdx] ? -1 : 1;
        const neighborIdx = mobileIdx + dir;
        
        // Swap values
        [val[mobileIdx], val[neighborIdx]] = [val[neighborIdx], val[mobileIdx]];
        // Swap directions
        [isLeft[mobileIdx], isLeft[neighborIdx]] = [isLeft[neighborIdx], isLeft[mobileIdx]];
        
        // Reverse direction for all values > maxMobileVal
        for (let i = 0; i < n; i++) {
            if (val[i] > maxMobileVal) {
                isLeft[i] = !isLeft[i];
            }
        }
        
        permutations.push([...val]);
    }
    
    return permutations;
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def johnson_trotter(n):
    val = list(range(1, n + 1))
    is_left = [True] * n # True for Left, False for Right
    permutations = [val.copy()]
    
    while True:
        mobile_idx = -1
        max_mobile_val = -1
        
        # Find largest mobile element
        for i in range(n):
            direction = -1 if is_left[i] else 1
            neighbor_idx = i + direction
            
            if 0 <= neighbor_idx < n:
                if val[i] > val[neighbor_idx]:
                    if val[i] > max_mobile_val:
                        max_mobile_val = val[i]
                        mobile_idx = i
                        
        if mobile_idx == -1:
            break
            
        direction = -1 if is_left[mobile_idx] else 1
        neighbor_idx = mobile_idx + direction
        
        # Swap values and directions
        val[mobile_idx], val[neighbor_idx] = val[neighbor_idx], val[mobile_idx]
        is_left[mobile_idx], is_left[neighbor_idx] = is_left[neighbor_idx], is_left[mobile_idx]
        
        # Reverse directions of larger elements
        for i in range(n):
            if val[i] > max_mobile_val:
                is_left[i] = not is_left[i]
                
        permutations.append(val.copy())
        
    return permutations
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
The Johnson-Trotter algorithm is highly efficient because it generates permutations in an order where adjacent elements are swapped (minimal change ordering).
          </div>
        </div>
      </div>
    `
  },
  dec_factor: {
    id: 'dec_factor',
    title: "Decrease by Constant Factor",
    notes: `
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Logarithmic Reductions</h3>
          <p class="leading-relaxed text-sm md:text-base">
            In decrease-by-constant-factor algorithms, the size of the instance is reduced by the same constant factor (usually 2 or 3) at each step. This usually yields exceptional $\Theta(\log n)$ logarithmic runtime performance.
          </p>
        </div>

        <!-- --- 1. FAKE COIN VISUAL --- -->
        <div class="step-card">
          <span class="step-title">1. The Fake Coin Problem (3-Way Split)</span>
          <p class="text-sm mb-4">Identify one lighter fake coin among $n$ coins using a balance scale.</p>
          
          <div class="glass p-4 rounded-lg border border-white/10">
            <h4 class="font-bold text-xs text-center text-accent mb-2">Visual Trace: 8 Coins</h4>
            <div class="flex flex-col gap-3 font-mono text-xs">
              <div class="flex items-center gap-2">
                <span class="text-blue-300 w-12">Step 1</span>
                <div class="flex-1 text-center border-b border-white/10 pb-1">
                  Weigh: PileA [10, 10] vs PileB [10, 9] (Remaining: [10, 10, 10, 10])<br>
                  <span class="text-red-400">Right Pile is Lighter!</span> The fake is in PileB.
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-blue-300 w-12">Step 2</span>
                <div class="flex-1 text-center">
                  Weigh: [10] vs [9]<br>
                  <span class="text-green-400 font-bold">Found Fake Coin at Index with 9g!</span>
                </div>
              </div>
            </div>
          </div>
          <p class="text-xs text-right mt-1 opacity-70">Complexity: $\Theta(\log_3 n)$</p>
        </div>

        <!-- --- 2. RUSSE VISUAL --- -->
        <div class="step-card">
          <span class="step-title">2. Russian Peasant Multiplication (Multiplication à la Russe)</span>
          <p class="text-sm mb-4">Multiply two positive integers $n$ and $m$ by repeatedly halving $n$ and doubling $m$.</p>
          
          <div class="glass p-4 rounded-lg border border-white/10">
            <h4 class="font-bold text-xs text-center text-accent mb-2">Trace: 50 × 20</h4>
            <table class="w-full text-xs text-center font-mono">
              <tr class="border-b border-white/20 text-gray-400"><th>n (Halve)</th><th>m (Double)</th><th>Action</th></tr>
              <tr><td>50</td><td>20</td><td class="opacity-50">Ignore (Even)</td></tr>
              <tr><td>25</td><td>40</td><td class="text-green-400">Add 40</td></tr>
              <tr><td>12</td><td>80</td><td class="opacity-50">Ignore (Even)</td></tr>
              <tr><td>6</td><td>160</td><td class="opacity-50">Ignore (Even)</td></tr>
              <tr><td>3</td><td>320</td><td class="text-green-400">Add 320</td></tr>
              <tr><td>1</td><td>640</td><td class="text-green-400">Add 640</td></tr>
              <tr class="border-t border-white/20 font-bold text-accent"><td>0</td><td></td><td>Sum = 40 + 320 + 640 = 1000</td></tr>
            </table>
          </div>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">DECREASE BY CONSTANT FACTOR LOGIC</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm RussianPeasantMultiplication(n, m)
  // Computes n * m by decreasing by constant factor
  // Input: Positive integers n and m
  // Output: Product of n and m
  sum <- 0
  while n > 0 do
    if n % 2 != 0 then
      sum <- sum + m
    n <- floor(n / 2)
    m <- m * 2
  return sum

Algorithm FindFakeCoin(Coins[0..n-1])
  // Finds one lighter fake coin among n coins
  // Input: Array of coins with weights
  if n == 1 return Coins[0]
  
  Divide coins into 3 piles: PileA, PileB, PileC
  // PileA and PileB must be equal size: floor(n/3)
  // PileC contains the remainder
  
  if Weight(PileA) < Weight(PileB) then
    return FindFakeCoin(PileA)
  else if Weight(PileA) > Weight(PileB) then
    return FindFakeCoin(PileB)
  else
    return FindFakeCoin(PileC)
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: 
  - Russian Peasant Multiplication: Θ(log n)
  - Fake Coin Problem (3-way): Θ(log₃ n)
- Space Complexity: Θ(1) auxiliary space (can be done iteratively).
- Reason: At each step, Russian Peasant Multiplication divides n by 2, requiring log₂ n steps. The 3-way coin weighing splits the search space into exactly 1/3 of its original size at each level of the recursion, taking log₃ n steps.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public class ConstantFactor {
    // Russian Peasant Multiplication
    public static int russianMultiply(int n, int m) {
        int result = 0;
        while (n > 0) {
            if ((n & 1) != 0) { // If odd
                result += m;
            }
            n = n >> 1; // Halve n (bit shift right)
            m = m << 1; // Double m (bit shift left)
        }
        return result;
    }

    // 3-way Fake Coin finding helper logic
    public static int findFakeCoin(int[] coins, int start, int end) {
        int n = end - start + 1;
        if (n == 1) return start;
        
        int pileSize = n / 3;
        if (pileSize == 0) {
            // Only 2 coins left
            if (coins[start] < coins[end]) return start;
            else return end;
        }
        
        int startA = start;
        int endA = start + pileSize - 1;
        int startB = endA + 1;
        int endB = startB + pileSize - 1;
        int startC = endB + 1;
        int endC = end;
        
        int weightA = getSum(coins, startA, endA);
        int weightB = getSum(coins, startB, endB);
        
        if (weightA < weightB) {
            return findFakeCoin(coins, startA, endA);
        } else if (weightA > weightB) {
            return findFakeCoin(coins, startB, endB);
        } else {
            return findFakeCoin(coins, startC, endC);
        }
    }
    
    private static int getSum(int[] coins, int s, int e) {
        int sum = 0;
        for (int i = s; i <= e; i++) sum += coins[i];
        return sum;
    }
}
          </div>

          <span class="code-label">JavaScript</span>
          <div class="code-box">
// Russian Peasant Multiplication
function russianMultiply(n, m) {
    let result = 0;
    while (n > 0) {
        if (n % 2 !== 0) {
            result += m;
        }
        n = Math.floor(n / 2);
        m *= 2;
    }
    return result;
}

// Fake Coin (3-way)
function findFakeCoin(coins, start = 0, end = coins.length - 1) {
    const n = end - start + 1;
    if (n === 1) return start;
    
    const pileSize = Math.floor(n / 3);
    if (pileSize === 0) {
        return coins[start] < coins[end] ? start : end;
    }
    
    const startA = start;
    const endA = start + pileSize - 1;
    const startB = endA + 1;
    const endB = startB + pileSize - 1;
    const startC = endB + 1;
    const endC = end;
    
    const sum = (s, e) => {
        let total = 0;
        for (let i = s; i <= e; i++) total += coins[i];
        return total;
    };
    
    const weightA = sum(startA, endA);
    const weightB = sum(startB, endB);
    
    if (weightA < weightB) {
        return findFakeCoin(coins, startA, endA);
    } else if (weightA > weightB) {
        return findFakeCoin(coins, startB, endB);
    } else {
        return findFakeCoin(coins, startC, endC);
    }
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def russian_multiply(n, m):
    result = 0
    while n > 0:
        if n % 2 != 0:
            result += m
        n //= 2
        m *= 2
    return result

def find_fake_coin(coins, start=0, end=None):
    if end is None:
        end = len(coins) - 1
    n = end - start + 1
    if n == 1:
        return start
        
    pile_size = n // 3
    if pile_size == 0:
        return start if coins[start] < coins[end] else end
        
    start_a, end_a = start, start + pile_size - 1
    start_b, end_b = end_a + 1, end_a + pile_size
    start_c, end_c = end_b + 1, end
    
    weight_a = sum(coins[start_a:end_a + 1])
    weight_b = sum(coins[start_b:end_b + 1])
    
    if weight_a < weight_b:
        return find_fake_coin(coins, start_a, end_a)
    elif weight_a > weight_b:
        return find_fake_coin(coins, start_b, end_b)
    else:
        return find_fake_coin(coins, start_c, end_c)
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Russian peasant multiplication operates identically to hardware-level binary multiplication (shifting and adding). 3-way coin-weighing is a classic example of ternary search, which converges faster than binary search due to 3-way branch division.
          </div>
        </div>
      </div>
    `
  },
  dec_var: {
    id: 'dec_var',
    title: "Variable Size Decrease",
    notes: `
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Concept</h3>
          <p class="leading-relaxed text-sm md:text-base">
            In variable-size decrease algorithms, the size reduction pattern varies at each step and depends directly on the specific values of the elements rather than just their quantities.
          </p>
        </div>

        <!-- --- 1. EUCLID VISUAL --- -->
        <div class="step-card">
          <span class="step-title">1. Euclid's Algorithm (GCD)</span>
          <p class="text-sm mb-4">Find the Greatest Common Divisor of $m$ and $n$ using $gcd(m, n) = gcd(n, m \bmod n)$.</p>
          
          <div class="glass p-4 rounded-lg border border-white/10">
            <h4 class="font-bold text-xs text-center text-accent mb-3">Trace: GCD(60, 24)</h4>
            <div class="flex flex-col gap-2 font-mono text-sm">
              <div class="flex items-center justify-between bg-black/20 p-2 rounded">
                <span>Step 1</span>
                <span class="text-blue-300">60 % 24 = 12</span>
                <span class="opacity-50">New pair: (24, 12)</span>
              </div>
              <div class="flex items-center justify-between bg-black/20 p-2 rounded">
                <span>Step 2</span>
                <span class="text-blue-300">24 % 12 = 0</span>
                <span class="opacity-50">New pair: (12, 0)</span>
              </div>
              <div class="bg-green-500/20 border border-green-500 p-2 rounded text-center font-bold text-green-400">
                Remainder is 0. GCD is 12!
              </div>
            </div>
          </div>
          <p class="text-xs text-right mt-1 opacity-70">Complexity: $\Theta(\log n)$</p>
        </div>

        <!-- --- 2. INTERPOLATION SEARCH VISUAL --- -->
        <div class="step-card">
          <span class="step-title">2. Interpolation Search</span>
          <p class="text-sm mb-4">Interpolation search estimates the position of the target key in a sorted array based on its value, similar to how humans search a phonebook.</p>

          <div class="glass p-5 rounded-lg border border-white/10 mb-4">
            <h4 class="font-bold text-xs text-center text-accent mb-4">Visual: Probing for Value "30"</h4>
            
            <div class="relative h-12 w-full bg-white/5 rounded-lg border border-white/20 mb-2">
              <div class="absolute left-0 -top-6 text-xs text-gray-400 text-center"><span class="font-bold text-white">0</span><br>↓</div>
              <div class="absolute right-0 -top-6 text-xs text-gray-400 text-center"><span class="font-bold text-white">100</span><br>↓</div>
              
              <div class="absolute left-[30%] h-full w-1 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
              
              <div class="absolute left-[30%] -bottom-8 -translate-x-1/2 text-center">
                <div class="text-yellow-400 text-lg font-bold">↑</div>
                <div class="text-xs text-yellow-300 font-bold whitespace-nowrap">Probe (30)</div>
              </div>
            </div>
            
            <div class="mt-10 text-xs font-mono text-center opacity-80">
              Range: 0 to 100. Target: 30.<br>
              Probe = lo + [(target - A[lo]) / (A[hi] - A[lo])] * (hi - lo) ≈ 30% mark.
            </div>
          </div>

          <div class="bg-black/20 p-3 rounded-lg text-sm">
            <p class="font-bold text-gray-400 mb-2">Interpolation Position Formula:</p>
            <p class="font-mono text-yellow-300 text-xs bg-black/40 p-2 rounded text-center">
              pos = lo + ⌊((target - A[lo]) * (hi - lo)) / (A[hi] - A[lo])⌋
            </p>
          </div>
          
          <div class="grid grid-cols-2 gap-2 text-xs text-center mt-3">
            <div class="p-2 border border-green-500/30 rounded bg-green-500/10 text-green-300"><strong>Average Case:</strong><br>$\Theta(\log \log n)$<br>(Extremely Fast)</div>
            <div class="p-2 border border-red-500/30 rounded bg-red-500/10 text-red-300"><strong>Worst Case:</strong><br>$\Theta(n)$<br>(Highly Skewed Data)</div>
          </div>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">VARIABLE SIZE DECREASE ALGORITHMS</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm EuclidGCD(m, n)
  // Computes the greatest common divisor of m and n
  // Input: Two nonnegative, non-both-zero integers m and n
  // Output: Greatest common divisor of m and n
  while n != 0 do
    r <- m % n
    m <- n
    n <- r
  return m

Algorithm InterpolationSearch(A[0..n-1], target)
  // Searches for target in a sorted, uniformly distributed array
  lo <- 0
  hi <- n - 1
  while lo <= hi AND target >= A[lo] AND target <= A[hi] do
    if lo == hi then
      if A[lo] == target return lo
      return -1
      
    // Value-proportionate probe formula
    pos <- lo + floor( ((target - A[lo]) * (hi - lo)) / (A[hi] - A[lo]) )
    
    if A[pos] == target return pos
    else if A[pos] < target then
      lo <- pos + 1
    else
      hi <- pos - 1
  return -1
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity:
  - Euclid GCD: Θ(log n) worst case (Lame's Theorem).
  - Interpolation Search: Θ(log (log n)) average case under uniform distribution; Θ(n) worst case if elements increase exponentially.
- Space Complexity: Θ(1) auxiliary space.
- Reason: Euclid's GCD size decrease varies depending on m % n, but the product mn decreases by a factor of at least 2 every two iterations. Interpolation search uses numerical proportion to estimate position, which behaves like a binary-like search but on extremely compressed ranges.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public class VariableDecrease {
    // Euclid's GCD
    public static int gcd(int m, int n) {
        while (n != 0) {
            int r = m % n;
            m = n;
            n = r;
        }
        return m;
    }

    // Interpolation Search
    public static int interpolationSearch(int[] A, int target) {
        int lo = 0;
        int hi = A.length - 1;
        
        while (lo <= hi && target >= A[lo] && target <= A[hi]) {
            if (lo == hi) {
                if (A[lo] == target) return lo;
                return -1;
            }
            
            // Numerical ratio calculation
            int pos = lo + ((target - A[lo]) * (hi - lo)) / (A[hi] - A[lo]);
            
            if (A[pos] == target) {
                return pos;
            } else if (A[pos] < target) {
                lo = pos + 1;
            } else {
                hi = pos - 1;
            }
        }
        return -1;
    }
}
          </div>

          <span class="code-label">JavaScript</span>
          <div class="code-box">
// Euclid's GCD
function gcd(m, n) {
    while (n !== 0) {
        const r = m % n;
        m = n;
        n = r;
    }
    return m;
}

// Interpolation Search
function interpolationSearch(arr, target) {
    let lo = 0;
    let hi = arr.length - 1;
    
    while (lo <= hi && target >= arr[lo] && target <= arr[hi]) {
        if (lo === hi) {
            if (arr[lo] === target) return lo;
            return -1;
        }
        
        // Ratio probe
        const pos = lo + Math.floor(((target - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo]));
        
        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            lo = pos + 1;
        } else {
            hi = pos - 1;
        }
    }
    return -1;
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
# Euclid's GCD
def gcd(m, n):
    while n != 0:
        m, n = n, m % n
    return m

# Interpolation Search
def interpolation_search(arr, target):
    lo = 0
    hi = len(arr) - 1
    
    while lo <= hi and arr[lo] <= target <= arr[hi]:
        if lo == hi:
            if arr[lo] == target:
                return lo
            return -1
            
        # Probe formula
        pos = lo + int(((target - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo]))
        
        if arr[pos] == target:
            return pos
        elif arr[pos] < target:
            lo = pos + 1
        else:
            hi = pos - 1
            
    return -1
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Interpolation search requires both sorted values and uniform distribution of data. On skewed datasets (e.g., [1, 2, 4, 8, 16, 32...]), performance degrades heavily to O(n).
          </div>
        </div>
      </div>
    `
  },
  dec_kth: {
    id: 'dec_kth',
    title: "k-th Order Statistic (QuickSelect)",
    notes: `
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">The Selection Problem</h3>
          <p class="leading-relaxed text-sm md:text-base">
            The Selection Problem seeks to find the $k$-th smallest element in an unsorted array of size $n$ (such as finding the median, minimum, or maximum) without fully sorting the array first.
          </p>
        </div>

        <!-- --- VISUAL FLOW DIAGRAM --- -->
        <div class="glass p-5 rounded-xl border border-white/10 text-center">
          <h4 class="font-bold text-sm mb-4 text-accent uppercase tracking-wider">How it works (Lomuto Partition)</h4>
          <div class="flex flex-col gap-3 max-w-md mx-auto">
            <div class="flex rounded-lg overflow-hidden font-mono text-xs font-bold">
              <div class="bg-blue-600/40 flex-1 py-3 border-r border-white/10">Smaller<br>(Left Subarray)</div>
              <div class="bg-yellow-600/40 w-20 py-3 text-yellow-200">PIVOT INDEX<br>(s)</div>
              <div class="bg-red-600/40 flex-1 py-3 border-l border-white/10">Larger<br>(Right Subarray)</div>
            </div>
            <p class="text-xs opacity-70">Compare Pivot Index (s) with Target rank (k)</p>
            <div class="grid grid-cols-3 gap-2 text-xs font-bold">
              <div class="bg-blue-500/10 p-2 rounded border border-blue-500/30 text-blue-300">If k < s<br>Search Left</div>
              <div class="bg-green-500/10 p-2 rounded border border-green-500/30 text-green-300">If k == s<br>Found Pivot!</div>
              <div class="bg-red-500/10 p-2 rounded border border-red-500/30 text-red-300">If k > s<br>Search Right</div>
            </div>
          </div>
        </div>

        <!-- --- PRETTY STEP-BY-STEP TRACE --- -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4 pl-2 border-l-4 border-accent">Step-by-Step Walkthrough</h3>
          
          <!-- INPUT CARD -->
          <div class="bg-white/5 p-4 rounded-lg mb-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-bold text-gray-400 uppercase">Input Array</span>
              <span class="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Target Index: k=2 (3rd smallest)</span>
            </div>
            <p class="font-mono text-lg tracking-wide text-center">[ 7, 10, 4, 3, 20, 15 ]</p>
          </div>

          <!-- STEP 1 -->
          <div class="step-card">
            <div class="flex justify-between">
              <span class="step-title">Step 1: Partition around A[0] (7)</span>
              <span class="text-xs font-mono text-yellow-400">Pivot = 7</span>
            </div>
            <div class="font-mono text-center bg-black/30 p-2 rounded mb-2">
              <span class="text-blue-300">4, 3</span> | <span class="text-yellow-400 font-bold">7</span> | <span class="text-red-400">10, 20, 15</span>
            </div>
            <p class="text-xs text-center">Pivot ends at <strong>Index 2</strong>.</p>
            <div class="mt-2 text-center text-sm font-bold text-green-400 bg-green-500/10 p-2 rounded border border-green-500/30">
              Pivot index s = 2. Since s == k, we have found our answer: 7!
            </div>
          </div>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">QUICKSELECT (HOARE'S SELECTION) ALGORITHM</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm QuickSelect(A[l..r], k)
  // Finds the k-th smallest element in A[l..r]
  // Input: Subarray A[l..r] and target statistic rank k (0-indexed)
  // Output: The value of the k-th smallest element
  if l == r return A[l]
  
  // Partition around pivot A[l] using Lomuto partition
  s <- Partition(A, l, r)
  
  if s == k then
    return A[s]
  else if s > k then
    return QuickSelect(A[l..s-1], k)
  else
    return QuickSelect(A[s+1..r], k)

Algorithm Partition(A, l, r)
  // Lomuto partitioning
  pivot <- A[l]
  s <- l
  for i <- l + 1 to r do
    if A[i] < pivot then
      s <- s + 1
      Swap A[s] and A[i]
  Swap A[l] and A[s]
  return s
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity:
  - Average Case: Θ(n) linear time.
  - Worst Case: Θ(n²) if partitioning is highly skewed (e.g., sorted array with first element as pivot).
- Space Complexity: Θ(log n) average recursion depth; can be optimized to Θ(1) using iterative search.
- Reason: In average case, the partition size halves at each recursive call: n + n/2 + n/4 + ... = 2n, leading to O(n) total work.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public class Selection {
    public static int quickSelect(int[] arr, int k) {
        return select(arr, 0, arr.length - 1, k);
    }
    
    private static int select(int[] arr, int l, int r, int k) {
        if (l == r) return arr[l];
        
        int s = partition(arr, l, r);
        
        if (s == k) {
            return arr[s];
        } else if (s > k) {
            return select(arr, l, s - 1, k);
        } else {
            return select(arr, s + 1, r, k);
        }
    }
    
    private static int partition(int[] arr, int l, int r) {
        int pivot = arr[l];
        int s = l;
        for (int i = l + 1; i <= r; i++) {
            if (arr[i] < pivot) {
                s++;
                int temp = arr[s];
                arr[s] = arr[i];
                arr[i] = temp;
            }
        }
        int temp = arr[l];
        arr[l] = arr[s];
        arr[s] = temp;
        return s;
    }
}
          </div>

          <span class="code-label">JavaScript</span>
          <div class="code-box">
function quickSelect(arr, k) {
    return select(arr, 0, arr.length - 1, k);
}

function select(arr, l, r, k) {
    if (l === r) return arr[l];
    
    const s = partition(arr, l, r);
    
    if (s === k) {
        return arr[s];
    } else if (s > k) {
        return select(arr, l, s - 1, k);
    } else {
        return select(arr, s + 1, r, k);
    }
}

function partition(arr, l, r) {
    const pivot = arr[l];
    let s = l;
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] < pivot) {
            s++;
            [arr[s], arr[i]] = [arr[i], arr[s]];
        }
    }
    [arr[l], arr[s]] = [arr[s], arr[l]];
    return s;
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def quick_select(arr, k):
    return select(arr, 0, len(arr) - 1, k)

def select(arr, l, r, k):
    if l == r:
        return arr[l]
        
    s = partition(arr, l, r)
    
    if s == k:
        return arr[s]
    elif s > k:
        return select(arr, l, s - 1, k)
    else:
        return select(arr, s + 1, r, k)

def partition(arr, l, r):
    pivot = arr[l]
    s = l
    for i in range(l + 1, r + 1):
        if arr[i] < pivot:
            s += 1
            arr[s], arr[i] = arr[i], arr[s]
    arr[l], arr[s] = arr[s], arr[l]
    return s
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
QuickSelect is also known as Hoare's Selection Algorithm. It is highly optimized compared to full sorting (O(n log n)) when only a specific rank (like the median) is required.
          </div>
        </div>
      </div>
    `
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
