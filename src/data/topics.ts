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
