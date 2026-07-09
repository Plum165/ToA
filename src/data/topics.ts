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
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">LINEAR SEARCH (UPPER BOUND O(n) WORKCASE)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm LinearSearch(A[0..n-1], target)
  // Searches for a target value in an array
  // Input: An array A of n elements, and a target value
  // Output: The index of target if found, otherwise -1
  for i <- 0 to n - 1 do
    if A[i] == target then
      return i
  return -1
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: O(n) (Worst Case)
- Space Complexity: O(1) auxiliary space (in-place)
- Reason: In the worst-case scenario (where the target element is at the very end of the array, or does not exist at all), the loop must run exactly n times, executing comparisons on each step. This scales linearly with the input size n.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static int linearSearch(int[] arr, int target) {
    int n = arr.length;
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i; // Target found
        }
    }
    return -1; // Target not found
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
function linearSearch(arr: number[], target: number): number {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === target) {
            return i; // Target found
        }
    }
    return -1; // Target not found
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def linear_search(arr, target):
    n = len(arr)
    for i in range(n):
        if arr[i] == target:
            return i # Target found
    return -1 # Target not found
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Big-O represents the asymptotic upper bound of an algorithm's growth rate. If an algorithm is O(n), its operations will not scale faster than a linear function of n.
          </div>
        </div>
      </div>
    `
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
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">OPTIMIZED BUBBLE SORT (LOWER BOUND Ω(n) BESTCASE)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm OptimizedBubbleSort(A[0..n-1])
  // Sorts a given array with early exit check
  // Input: An array A[0..n-1] of n elements
  // Output: Array A sorted in nondecreasing order
  for i <- 0 to n - 2 do
    swapped <- false
    for j <- 0 to n - i - 2 do
      if A[j] > A[j+1] do
        Swap A[j] and A[j+1]
        swapped <- true
    if not swapped break // Already fully sorted
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: Ω(n) (Best Case)
- Space Complexity: Ω(1) auxiliary space (in-place)
- Reason: When the input array is already fully sorted, the inner loop executes comparisons exactly n-1 times on the first pass. Since no elements are out of order, "swapped" remains false, triggering the early break. Thus, the algorithm takes linear time in the best case.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static void bubbleSort(int[] arr) {
    int n = arr.length;
    boolean swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break; // Early termination
    }
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
function bubbleSort(arr: number[]): void {
    const n = arr.length;
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break; // Early termination
    }
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break # Early termination
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Omega notation (Ω) represents the asymptotic lower bound. An algorithm is Ω(f(n)) if its running time grows at least as fast as f(n). Optimized Bubble Sort guarantees Ω(n) performance when inputs are already sorted.
          </div>
        </div>
      </div>
    `
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
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">SELECTION SORT (TIGHT BOUND Θ(n²) IN ALL CASES)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm SelectionSort(A[0..n-1])
  // Sorts a given array by selection sort
  // Input: An array A[0..n-1] of orderable elements
  // Output: Array A sorted in nondecreasing order
  for i <- 0 to n - 2 do
    min_idx <- i
    for j <- i + 1 to n - 1 do
      if A[j] < A[min_idx] do
        min_idx <- j
    Swap A[i] and A[min_idx]
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: Θ(n²) (Best, Worst, and Average Cases)
- Space Complexity: Θ(1) auxiliary space (In-place)
- Reason: Regardless of whether the array is sorted, reverse-sorted, or completely random, the inner loop always runs n * (n - 1) / 2 times to check for minimum values. Thus, it performs exactly the same quadratic number of key comparisons, resulting in a tight bound of Θ(n²).
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap elements
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
function selectionSort(arr: number[]): void {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # Swap elements
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Theta notation (Θ) represents a tight asymptotic bound. An algorithm is Θ(f(n)) if and only if its worst-case is O(f(n)) and its best-case is Ω(f(n)). Selection Sort is a classic example because its key comparison count does not depend on the input values.
          </div>
        </div>
      </div>
    `
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
    code: `
      <div class="space-y-8">
        <div>
          <div class="code-section-title">BINARY SEARCH (LOGARITHMIC TIME O(log n) CLASS)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm BinarySearch(A[0..n-1], target)
  // Searches for target in a sorted array
  // Input: An array A[0..n-1] sorted in ascending order, and a target value
  // Output: Index of target if found, otherwise -1
  low <- 0
  high <- n - 1
  while low <= high do
    mid <- floor((low + high) / 2)
    if A[mid] == target return mid
    else if A[mid] < target low <- mid + 1
    else high <- mid - 1
  return -1
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: O(log n) (Worst and Average Cases)
- Space Complexity: O(1) auxiliary space (Iterative approach)
- Reason: At each iteration of the loop, the algorithm narrows the active search window size by exactly half. Solving the recurrence relation T(n) = T(n/2) + O(1) via the Master Theorem yields a logarithmic growth rate, O(log n).
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            return mid; // Found
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; // Not found
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid; // Found
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; // Not found
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid # Found
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1 # Not found
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Asymptotic complexity classes form a hierarchy: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!). Improving an algorithm's complexity class is the single most effective way to scale software performance.
          </div>
        </div>
      </div>
    `
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
          <div class="code-section-title">MATRIX ADDITION (NESTED SUMMATION LOOPS)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm MatrixAddition(A[0..n-1, 0..n-1], B[0..n-1, 0..n-1])
  // Adds two n x n matrices iteratively
  // Input: Two n x n matrices A and B of orderable elements
  // Output: An n x n matrix C where C[i, j] = A[i, j] + B[i, j]
  for i <- 0 to n - 1 do
    for j <- 0 to n - 1 do
      C[i, j] <- A[i, j] + B[i, j]
  return C
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: Θ(n²) (Tight Quadratic Bound)
- Space Complexity: Θ(n²) auxiliary space to store the output matrix C
- Reason: The basic operation is the addition of two matrix elements. The outer loop runs exactly n times. The inner loop also runs exactly n times for each outer loop iteration, leading to exactly n * n = n² additions. Formal derivation: Sum_{i=0}^{n-1} [ Sum_{j=0}^{n-1} 1 ] = Sum_{i=0}^{n-1} n = n².
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static int[][] addMatrices(int[][] A, int[][] B, int n) {
    int[][] C = new int[n][n];
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j]; // Basic Operation
        }
    }
    return C;
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
function addMatrices(A: number[][], B: number[][], n: number): number[][] {
    const C = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j]; // Basic Operation
        }
    }
    return C;
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def add_matrices(A, B, n):
    C = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            C[i][j] = A[i][j] + B[i][j] # Basic Operation
    return C
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
To analyze nested loops, express the total executions as a nested sum. Work from the innermost loop outwards using summation formulas like Sum_{i=a}^{b} c = c(b - a + 1) and Sum_{i=1}^{n} i = n(n + 1)/2.
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
        <div>
          <div class="code-section-title">FACTORIAL (RECURSION RELATION THETA(n) ANALYSIS)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm Factorial(n)
  // Computes n! recursively
  // Input: A nonnegative integer n
  // Output: The value of n!
  if n == 0 return 1
  return Factorial(n-1) * n
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: Θ(n)
- Space Complexity: Θ(n) recursion stack space
- Recurrence Relation: Let T(n) be the number of multiplications. For n > 0, T(n) = T(n-1) + 1, with base case T(0) = 0. Solving by backward substitution: T(n) = T(n-1) + 1 = [T(n-2) + 1] + 1 = T(n-2) + 2 = ... = T(n-k) + k. At the base case k = n, T(n) = T(0) + n = n, which represents Θ(n) total operations.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static int factorial(int n) {
    if (n == 0) {
        return 1; // Base case
    }
    return factorial(n - 1) * n; // Recursive call
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
function factorial(n: number): number {
    if (n === 0) {
        return 1; // Base case
    }
    return factorial(n - 1) * n; // Recursive call
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def factorial(n):
    if n == 0:
        return 1 # Base case
    return factorial(n - 1) * n # Recursive call
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Recurrence relations define the mathematical run-time of recursive functions. Unrolling (backward substitution) is used for linear recurrences, while the recursion tree and Master Theorem are standard for divide-and-conquer recurrences (e.g., T(n) = 2T(n/2) + Θ(n) => Θ(n log n)).
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
          <div class="code-section-title">CLOSEST PAIR (BRUTE FORCE OPTIMIZATION)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm BruteForceClosestPair(P[0..n-1])
  // Finds the two closest 2D points in a set using brute force
  // Input: An array P of n points
  // Output: The minimum distance between two points, and the points themselves
  dmin <- infinity
  for i <- 0 to n - 2 do
    for j <- i + 1 to n - 1 do
      d <- sqrt( (P[i].x - P[j].x)^2 + (P[i].y - P[j].y)^2 )
      if d < dmin do
        dmin <- d
        p1 <- P[i]
        p2 <- P[j]
  return p1, p2, dmin
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: Θ(n²) comparisons
- Space Complexity: Θ(1) auxiliary space (in-place)
- Reason: The algorithm computes the Euclidean distance between every distinct pair of points. The outer loop runs n-1 times and the inner loop runs n-1-i times, resulting in a total number of distance comparisons equal to Sum_{i=0}^{n-2} (n - 1 - i) = n * (n - 1) / 2. This represents a tight quadratic bound.
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static class Point {
    public double x, y;
    public Point(double x, double y) { this.x = x; this.y = y; }
}

public static double findClosest(Point[] points) {
    double minDist = Double.MAX_VALUE;
    int n = points.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            double dx = points[i].x - points[j].x;
            double dy = points[i].y - points[j].y;
            double dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) {
                minDist = dist;
            }
        }
    }
    return minDist;
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
interface Point {
    x: number;
    y: number;
}

function findClosestPair(points: Point[]): { p1: Point; p2: Point; dist: number } {
    let minDist = Infinity;
    let p1 = points[0], p2 = points[1];
    const n = points.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) {
                minDist = dist;
                p1 = points[i];
                p2 = points[j];
            }
        }
    }
    return { p1, p2, dist: minDist };
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
import math

def brute_force_closest_pair(points):
    min_dist = float('inf')
    p1, p2 = None, None
    n = len(points)
    for i in range(n - 1):
        for j in range(i + 1, n):
            dx = points[i][0] - points[j][0]
            dy = points[i][1] - points[j][1]
            dist = math.sqrt(dx*dx + dy*dy)
            if dist < min_dist:
                min_dist = dist
                p1, p2 = points[i], points[j]
    return p1, p2, min_dist
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Computing Euclidean distances between all pairs of points is conceptually robust but computationally expensive, Θ(n²). Advanced divide-and-conquer strategies or sweep-line algorithms reduce this closest-pair lookup to O(n log n).
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
          <div class="code-section-title">STRING MATCHING (BRUTE FORCE SCANS)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm BruteForceStringMatch(T[0..n-1], P[0..m-1])
  // Implements brute-force string matching
  // Input: An array T[0..n-1] of n characters (text) and P[0..m-1] of m characters (pattern)
  // Output: The index of the first character in the text that starts the match, otherwise -1
  for i <- 0 to n - m do
    j <- 0
    while j < m and T[i + j] == P[j] do
      j <- j + 1
    if j == m return i
  return -1
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: O(n * m) worst case, O(n + m) average case (natural language text)
- Space Complexity: O(1) auxiliary space (in-place)
- Reason: In the worst-case scenario (e.g., matching a pattern of "AAAAAB" in a text of "AAAAAAAAAA..."), the inner loop runs exactly m comparisons for each of the (n - m + 1) outer loop configurations. This yields a total of m * (n - m + 1) operations, which is asymptotically O(n * m).
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static int bruteForceStringMatch(String text, String pattern) {
    int n = text.length();
    int m = pattern.length();
    for (int i = 0; i <= n - m; i++) {
        int j = 0;
        while (j < m && text.charAt(i + j) == pattern.charAt(j)) {
            j++;
        }
        if (j == m) {
            return i; // Found pattern at index i
        }
    }
    return -1; // Pattern not found
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
function bruteForceStringMatch(text: string, pattern: string): number {
    const n = text.length;
    const m = pattern.length;
    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && text[i + j] === pattern[j]) {
            j++;
        }
        if (j === m) {
            return i; // Found pattern at index i
        }
    }
    return -1; // Pattern not found
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def brute_force_string_match(text, pattern):
    n = len(text)
    m = len(pattern)
    for i in range(n - m + 1):
        j = 0
        while j < m and text[i + j] == pattern[j]:
            j += 1
        if j == m:
            return i # Found pattern at index i
    return -1 # Pattern not found
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
While Brute Force is easy to write, more efficient algorithms exist for string matching. Knuth-Morris-Pratt (KMP) or Boyer-Moore skip redundant comparisons based on pattern pre-processing, yielding linear O(n + m) worst-case performance.
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
        <div>
          <div class="code-section-title">CONVEX HULL (BRUTE FORCE CUBIC O(n³) GEOMETRY)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm BruteForceConvexHull(P[0..n-1])
  // Solves the Convex Hull problem using brute force
  // Input: A set P of n >= 3 2D points
  // Output: A set of line segments representing the edges of the convex hull
  E <- empty set
  for i <- 0 to n - 2 do
    for j <- i + 1 to n - 1 do
      a <- P[j].y - P[i].y
      b <- P[i].x - P[j].x
      c <- P[i].x * P[j].y - P[i].y * P[j].x
      
      all_on_same_side <- true
      sign <- 0
      for k <- 0 to n - 1 do
        if k != i and k != j do
          val <- a * P[k].x + b * P[k].y - c
          if val != 0 do
            if sign == 0 do
              sign <- sign(val)
            else if sign(val) != sign do
              all_on_same_side <- false
              break
      if all_on_same_side do
        Add segment (P[i], P[j]) to E
  return E
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: O(n³) worst and best cases
- Space Complexity: O(n) auxiliary space to store the convex hull segments
- Reason: The algorithm selects every possible pair of points, which takes n * (n - 1) / 2 = O(n²) steps. For each pair, it draws a line and iterates through all other n-2 points to check which side of the line they lie on, which takes O(n) steps. The overall performance is O(n²) * O(n) = O(n³).
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
import java.util.ArrayList;
import java.util.List;

public static class Point {
    public double x, y;
    public Point(double x, double y) { this.x = x; this.y = y; }
}

public static class Segment {
    public Point p1, p2;
    public Segment(Point p1, Point p2) { this.p1 = p1; this.p2 = p2; }
}

public static List<Segment> bruteForceConvexHull(Point[] points) {
    List<Segment> hull = new ArrayList<>();
    int n = points.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            double a = points[j].y - points[i].y;
            double b = points[i].x - points[j].x;
            double c = points[i].x * points[j].y - points[i].y * points[j].x;
            boolean allOnSameSide = true;
            double sign = 0;
            for (int k = 0; k < n; k++) {
                if (k != i && k != j) {
                    double val = a * points[k].x + b * points[k].y - c;
                    if (Math.abs(val) > 1e-9) {
                        if (sign == 0) {
                            sign = Math.signum(val);
                        } else if (Math.signum(val) != sign) {
                            allOnSameSide = false;
                            break;
                        }
                    }
                }
            }
            if (allOnSameSide) {
                hull.add(new Segment(points[i], points[j]));
            }
        }
    }
    return hull;
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
interface Point {
    x: number;
    y: number;
}

interface Segment {
    p1: Point;
    p2: Point;
}

function bruteForceConvexHull(points: Point[]): Segment[] {
    const hull: Segment[] = [];
    const n = points.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const a = points[j].y - points[i].y;
            const b = points[i].x - points[j].x;
            const c = points[i].x * points[j].y - points[i].y * points[j].x;
            let allOnSameSide = true;
            let sign = 0;
            for (let k = 0; k < n; k++) {
                if (k !== i && k !== j) {
                    const val = a * points[k].x + b * points[k].y - c;
                    if (Math.abs(val) > 1e-9) {
                        if (sign === 0) {
                            sign = Math.sign(val);
                        } else if (Math.sign(val) !== sign) {
                            allOnSameSide = false;
                            break;
                        }
                    }
                }
            }
            if (allOnSameSide) {
                hull.push({ p1: points[i], p2: points[j] });
            }
        }
    }
    return hull;
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def brute_force_convex_hull(points):
    hull = []
    n = len(points)
    for i in range(n - 1):
        for j in range(i + 1, n):
            a = points[j][1] - points[i][1]
            b = points[i][0] - points[j][0]
            c = points[i][0] * points[j][1] - points[i][1] * points[j][0]
            all_on_same_side = True
            sign = 0
            for k in range(n):
                if k != i and k != j:
                    val = a * points[k][0] + b * points[k][1] - c
                    if abs(val) > 1e-9:
                        current_sign = 1 if val > 0 else -1
                        if sign == 0:
                            sign = current_sign
                        elif current_sign != sign:
                            all_on_same_side = False
                            break
            if all_on_same_side:
                hull.append((points[i], points[j]))
    return hull
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
The brute-force Convex Hull algorithm is highly inefficient at O(n³). Practical software applications involving spatial analysis, game design, or pathfinding rely on Graham's Scan or QuickHull, which achieve O(n log n) efficiency.
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
        <div>
          <div class="code-section-title">KNAPSACK (BRUTE FORCE EXHAUSTIVE SUBSET SCAN)</div>
          
          <span class="code-label">Pseudocode</span>
          <div class="code-box">
Algorithm BruteForceKnapsack(weights[0..n-1], values[0..n-1], W)
  // Solves the 0/1 Knapsack problem by generating all 2^n subsets
  // Input: Arrays weights and values of n items, and capacity W
  // Output: The maximum value of items that fit in the knapsack
  max_value <- 0
  for i <- 0 to 2^n - 1 do
    current_weight <- 0
    current_value <- 0
    for j <- 0 to n - 1 do
      // Check if j-th item is included in subset i (using bitwise check)
      if (i AND 2^j) != 0 do
        current_weight <- current_weight + weights[j]
        current_value <- current_value + values[j]
    if current_weight <= W and current_value > max_value do
      max_value <- current_value
  return max_value
          </div>

          <span class="code-label">Complexity Analysis</span>
          <div class="code-box">
- Time Complexity: Θ(n * 2ⁿ) worst and best cases
- Space Complexity: Θ(1) auxiliary space (bitwise state representation)
- Reason: For n items, there are exactly 2ⁿ possible subsets of items that can be chosen. The algorithm iterates from 0 to 2ⁿ - 1. In each of those steps, it performs n bitwise comparisons to evaluate the weight and value of the active subset. Thus, the total time complexity is Θ(n * 2ⁿ).
          </div>

          <span class="code-label">Java</span>
          <div class="code-box">
public static int bruteForceKnapsack(int[] weights, int[] values, int W) {
    int n = weights.length;
    int maxValue = 0;
    int numSubsets = 1 << n; // 2^n subsets
    
    for (int i = 0; i < numSubsets; i++) {
        int currentWeight = 0;
        int currentValue = 0;
        for (int j = 0; j < n; j++) {
            if ((i & (1 << j)) != 0) {
                currentWeight += weights[j];
                currentValue += values[j];
            }
        }
        if (currentWeight <= W && currentValue > maxValue) {
            maxValue = currentValue;
        }
    }
    return maxValue;
}
          </div>

          <span class="code-label">JavaScript / TypeScript</span>
          <div class="code-box">
function bruteForceKnapsack(weights: number[], values: number[], W: number): number {
    const n = weights.length;
    let maxValue = 0;
    const numSubsets = 1 << n; // 2^n subsets
    
    for (let i = 0; i < numSubsets; i++) {
        let currentWeight = 0;
        let currentValue = 0;
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) !== 0) {
                currentWeight += weights[j];
                currentValue += values[j];
            }
        }
        if (currentWeight <= W && currentValue > maxValue) {
            maxValue = currentValue;
        }
    }
    return maxValue;
}
          </div>

          <span class="code-label">Python</span>
          <div class="code-box">
def brute_force_knapsack(weights, values, W):
    n = len(weights)
    max_value = 0
    num_subsets = 1 << n # 2^n subsets
    
    for i in range(num_subsets):
        current_weight = 0
        current_value = 0
        for j in range(n):
            if (i & (1 << j)) != 0:
                current_weight += weights[j]
                current_value += values[j]
        if current_weight <= W and current_value > max_value:
            max_value = current_value
    return max_value
          </div>

          <span class="code-label">Notes</span>
          <div class="code-box">
Exhaustive search generates all candidates to guarantee an optimal solution. It is extremely slow for large n, since O(2ⁿ) or O(n!) subsets/permutations quickly crash modern systems. Dynamic programming (for Knapsack) or the Hungarian Algorithm (for Assignment) solve these in polynomial time.
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
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            <strong>Merge Sort</strong> is a classic, highly efficient, comparison-based sorting algorithm invented by John von Neumann in 1945. It represents the quintessential application of the <strong>Divide and Conquer</strong> paradigm.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Divide:</strong> Partition the unsorted list of size $n$ into two equal sublists of size $n/2$ around a calculated midpoint.</li>
            <li><strong>Conquer:</strong> Recursively sort both sublists using Merge Sort until base cases (sublists of size $\le 1$) are reached.</li>
            <li><strong>Combine:</strong> Merge the two sorted sublists back into a single sorted list in linear time.</li>
            <li><strong>Stable Sorting:</strong> A sorting algorithm is stable if it preserves the relative order of equal elements. Merge Sort is inherently stable.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Explanation</h3>
          <p class="leading-relaxed text-sm">
            Merge Sort processes data recursively. The recursive structure splits the problem size down to $1$ before building back up. In the merge phase, we maintain pointers at the head of both sorted subarrays and repeatedly move the smaller element into the target array.
          </p>
        </div>

        <!-- --- VISUAL RECURSION TRACE --- -->
        <div class="step-card">
          <span class="step-title">Visual Trace: Sorting [7, 2, 1, 6, 4]</span>
          <div class="space-y-4 my-2 text-center text-xs">
            <div>
              <p class="text-blue-300 font-bold uppercase mb-1">1. Division Stage (Split)</p>
              <div class="flex flex-col items-center gap-2">
                <span class="p-1.5 bg-white/5 rounded border border-white/10 font-mono text-sm">[7, 2, 1, 6, 4]</span>
                <span class="text-gray-400">↓</span>
                <div class="flex gap-4">
                  <span class="p-1.5 bg-blue-500/10 rounded border border-blue-500/30 font-mono">[7, 2]</span>
                  <span class="p-1.5 bg-red-500/10 rounded border border-red-500/30 font-mono">[1, 6, 4]</span>
                </div>
                <span class="text-gray-400">↓</span>
                <div class="flex gap-4">
                  <span class="p-1 bg-blue-500/10 rounded border border-blue-500/30 font-mono">[7] | [2]</span>
                  <span class="p-1 bg-red-500/10 rounded border border-red-500/30 font-mono">[1] | [6, 4]</span>
                </div>
              </div>
            </div>

            <div>
              <p class="text-green-300 font-bold uppercase mb-1">2. Merge Stage (Combine)</p>
              <div class="flex flex-col items-center gap-2">
                <div class="flex gap-4">
                  <span class="p-1 bg-green-500/10 rounded border border-green-500/30 font-mono text-green-300">[2, 7]</span>
                  <span class="p-1 bg-green-500/10 rounded border border-green-500/30 font-mono text-green-300">[1, 4, 6]</span>
                </div>
                <span class="text-gray-400">↓</span>
                <span class="p-1.5 bg-green-500/20 rounded border border-green-500 font-mono text-sm font-bold">[1, 2, 4, 6, 7]</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Recurrence & Complexity Analysis</h3>
          <p class="text-sm">The running time of Merge Sort satisfies the recurrence relation:</p>
          <div class="latex-output text-center">$$T(n) = 2T(n/2) + f(n)$$</div>
          <p class="text-sm mt-2">
            Where $f(n) = \Theta(n)$ is the cost of merging. Applying the <strong>Master Theorem</strong>:
          </p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm font-mono opacity-85">
            <li>$a = 2$ (2 subproblems)</li>
            <li>$b = 2$ (problem size split by 2)</li>
            <li>$d = 1$ (merge overhead is linear $\Theta(n^1)$)</li>
            <li>Since $a = b^d \implies 2 = 2^1$, this falls under <strong>Case 2</strong> of the Master Theorem.</li>
            <li><strong>Conclusion:</strong> $T(n) \in \Theta(n \log n)$ across best, worst, and average cases.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Auxiliary Memory:</strong> Merge Sort is NOT in-place. It requires an extra $\Theta(n)$ temporary array to complete the merge.</li>
            <li><strong>Midpoint Calculations:</strong> Using <code class="font-mono text-xs">mid = (low + high) / 2</code> can cause integer overflow in languages like Java if array indices are huge; prefer <code class="font-mono text-xs">low + (high - low) / 2</code>.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm space-y-3">
            <div>
              <p class="font-bold text-accent">Exercise 1:</p>
              <p>Prove that Merge Sort maintains sorting stability during the merge step.</p>
              <details class="mt-2 text-xs text-gray-400">
                <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
                <p class="mt-1">
                  Stability is preserved by the comparison condition in the merge step: <code class="font-mono text-[11px]">if (left[i] <= right[j])</code>. By selecting the element from the left subarray first in the case of a tie, original ordering is preserved.
                </p>
              </details>
            </div>
            <div>
              <p class="font-bold text-accent">Exercise 2:</p>
              <p>What is the maximum number of comparisons performed when merging two sorted arrays of size $n/2$?</p>
              <details class="mt-2 text-xs text-gray-400">
                <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
                <p class="mt-1">
                  The maximum comparisons needed to merge two arrays of size $k$ is $2k - 1$. For two subarrays of size $n/2$, this equates to exactly $n - 1$ comparisons.
                </p>
              </details>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            CLRS: Introduction to Algorithms, Third Edition, Chapter 2.2 | Donald Knuth: The Art of Computer Programming, Volume 3.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm MergeSort(A[0..n-1])
    // Sorts array A by recursive splitting and merging
    if n > 1
        mid <- floor(n / 2)
        copy A[0..mid-1] to B[0..mid-1]
        copy A[mid..n-1] to C[0..n-mid-1]
        MergeSort(B)
        MergeSort(C)
        Merge(B, C, A)

Algorithm Merge(B[0..p-1], C[0..q-1], A[0..p+q-1])
    // Merges sorted sub-arrays B and C into A
    i <- 0; j <- 0; k <- 0
    while i < p and j < q do
        if B[i] <= C[j]
            A[k] <- B[i]
            i <- i + 1
        else
            A[k] <- C[j]
            j <- j + 1
        k <- k + 1
    if i = p
        copy C[j..q-1] to A[k..p+q-1]
    else
        copy B[i..p-1] to A[k..p+q-1]
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity:
  - Best Case: Θ(n log n) comparisons
  - Worst Case: Θ(n log n) comparisons
  - Average Case: Θ(n log n) comparisons
- Space Complexity: Θ(n) auxiliary storage
- Reason: The recursion splits the inputs into halves at each level down to size 1 (log n height tree). Recombining the results requires a linear scan of elements at each of the log n levels, performing Θ(n) work per level.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class MergeSort {
    public static void mergeSort(int[] a) {
        int n = a.length;
        if (n < 2) return;
        int mid = n / 2;
        int[] l = new int[mid];
        int[] r = new int[n - mid];

        System.arraycopy(a, 0, l, 0, mid);
        System.arraycopy(a, mid, r, 0, n - mid);

        mergeSort(l);
        mergeSort(r);
        merge(a, l, r);
    }

    private static void merge(int[] a, int[] l, int[] r) {
        int i = 0, j = 0, k = 0;
        while (i < l.length && j < r.length) {
            if (l[i] <= r[j]) {
                a[k++] = l[i++];
            } else {
                a[k++] = r[j++];
            }
        }
        while (i < l.length) {
            a[k++] = l[i++];
        }
        while (j < r.length) {
            a[k++] = r[j++];
        }
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
        
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
            
    result.extend(left[i:])
    result.extend(right[j:])
    return result
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Merge Sort's stable nature and predictable running time make it highly popular for sorting linked lists (where memory is not contiguous and nodes can be merged in O(1) space) and in external sorting algorithms handling data sets too large to fit in main memory.
          </div>
        </div>
      </div>
    `
  },
  div_quick: {
    id: 'div_quick',
    title: 'QuickSort',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            <strong>QuickSort</strong> is a highly efficient, in-place sorting algorithm developed by British computer scientist Tony Hoare in 1959. Unlike Merge Sort, it is an <em>unstable</em> sorting algorithm, but it is typically faster in practice due to lower constant factors.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Pivot:</strong> A selected item from the array (e.g. first, last, or median) used to partition values.</li>
            <li><strong>Partitioning:</strong> Rearranging the array such that all elements smaller than the pivot reside on its left, and all elements larger than the pivot reside on its right.</li>
            <li><strong>In-Place:</strong> Performs sorting operations within the original array without allocating linear auxiliary memory arrays.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Explanation</h3>
          <p class="leading-relaxed text-sm">
            Unlike Merge Sort, which divides purely by index position, QuickSort divides elements by <strong>value</strong>. By placing a chosen Pivot in its correct final sorted position during partitioning, the problem splits into two smaller independent sub-sorting tasks.
          </p>
        </div>

        <!-- --- VISUAL PIVOT AND SWAP DETAILS --- -->
        <div class="step-card">
          <span class="step-title">Visual Partition Trace (Hoare Logic) on [5, 3, 8, 4, 2, 7, 1, 6]</span>
          <div class="space-y-3 font-mono text-xs my-2">
            <div class="bg-black/30 p-2.5 rounded">
              <p class="text-yellow-400 font-bold mb-1">Choosing pivot (First Element): 5</p>
              <div class="flex justify-center gap-1.5 text-sm">
                <span class="p-1 bg-yellow-500/20 border border-yellow-500 font-bold">[5]</span>
                <span class="p-1 border border-white/10">3</span>
                <span class="p-1 border border-white/10">8</span>
                <span class="p-1 border border-white/10">4</span>
                <span class="p-1 border border-white/10">2</span>
                <span class="p-1 border border-white/10">7</span>
                <span class="p-1 border border-white/10">1</span>
                <span class="p-1 border border-white/10">6</span>
              </div>
            </div>

            <div class="bg-black/30 p-2.5 rounded">
              <p class="text-blue-300 font-bold mb-1">Scanning pointers i (left) and j (right):</p>
              <p class="text-[11px] opacity-80">Pointer i finds 8 (&gt;5). Pointer j finds 1 (&lt;5). Swap them:</p>
              <div class="flex justify-center gap-1.5 text-sm mt-1">
                <span class="p-1 bg-yellow-500/10 border border-yellow-500/30">5</span>
                <span class="p-1">3</span>
                <span class="p-1 bg-red-500/20 border border-red-500 font-bold">1</span>
                <span class="p-1">4</span>
                <span class="p-1">2</span>
                <span class="p-1">7</span>
                <span class="p-1 bg-red-500/20 border border-red-500 font-bold">8</span>
                <span class="p-1">6</span>
              </div>
            </div>

            <div class="bg-black/30 p-2.5 rounded">
              <p class="text-green-300 font-bold mb-1">Pointers cross (i &gt; j). Swap pivot with element at index j (2):</p>
              <div class="flex justify-center gap-1.5 text-sm">
                <span class="p-1 bg-green-500/20 border border-green-500 font-bold">2</span>
                <span class="p-1">3</span>
                <span class="p-1">1</span>
                <span class="p-1">4</span>
                <span class="p-1 bg-yellow-500/20 border border-yellow-500 font-bold">5</span>
                <span class="p-1">7</span>
                <span class="p-1">8</span>
                <span class="p-1">6</span>
              </div>
              <p class="text-[10px] text-gray-400 mt-1">Pivot 5 is now in correct final position. Recurse left of 5 and right of 5.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Efficiency Analysis</h3>
          <ul class="space-y-2 text-sm font-mono">
            <li><strong>Best Case:</strong> $\Theta(n \log n)$ <span class="opacity-70">(Pivot splits array perfectly in half)</span></li>
            <li><strong>Average Case:</strong> $\Theta(n \log n)$ <span class="opacity-70">(Highly likely on random pivot strategies)</span></li>
            <li><strong>Worst Case:</strong> $\Theta(n^2)$ <span class="opacity-70">(Array already sorted, pivot always picks min/max element)</span></li>
            <li><strong>Space Complexity:</strong> $\Theta(\log n)$ average recursion stack depth (can degenerate to $O(n)$ in the worst case).</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Pivot Selection:</strong> Naive selection of first/last elements as pivot triggers $O(n^2)$ worst-case on pre-sorted arrays. Always recommend <em>randomized pivot</em> or <em>median-of-three</em> strategies.</li>
            <li><strong>Infinite Loops:</strong> Pointers can get stuck on values equal to the pivot if boundary checks (e.g., <code class="font-mono text-xs">&lt;</code> vs <code class="font-mono text-xs">&lt;=</code>) are set incorrectly.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm space-y-3">
            <div>
              <p class="font-bold text-accent">Exercise 1:</p>
              <p>What is the recursion tree depth of QuickSort in the absolute worst case?</p>
              <details class="mt-2 text-xs text-gray-400">
                <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
                <p class="mt-1">
                  In the worst case (where one partition contains $n-1$ elements and the other has $0$), the recursion tree depth is exactly $n - 1$, leading to $O(n^2)$ comparisons.
                </p>
              </details>
            </div>
            <div>
              <p class="font-bold text-accent">Exercise 2:</p>
              <p>How does the Median-of-Three pivot selection method work?</p>
              <details class="mt-2 text-xs text-gray-400">
                <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
                <p class="mt-1">
                  It takes the first, middle, and last elements of the subarray, finds their median, swaps it with the first element, and uses it as the pivot. This guarantees that we avoid the absolute worst-case split on pre-sorted arrays.
                </p>
              </details>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            C.A.R. Hoare: Quicksort, Computer Journal 5(1):10-16, 1962 | Robert Sedgewick: Quicksort, Garland Publishing, 1980.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm QuickSort(A, low, high)
    // Sorts the subarray A[low..high]
    if low < high
        s <- Partition(A, low, high) // s is the pivot position
        QuickSort(A, low, s - 1)
        QuickSort(A, s + 1, high)

Algorithm Partition(A, low, high)
    // Partitions A around pivot (using Hoare's logic)
    pivot <- A[low]
    i <- low + 1
    j <- high
    while i <= j do
        while i <= high and A[i] <= pivot do i <- i + 1
        while j >= low and A[j] > pivot do j <- j - 1
        if i < j
            Swap A[i] and A[j]
    Swap A[low] and A[j]
    return j
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity:
  - Best Case: Θ(n log n)
  - Worst Case: Θ(n²)
  - Average Case: Θ(n log n)
- Space Complexity: Θ(log n) stack frame space (worst case Θ(n))
- Reason: At each level of the recursion, we spend linear time partitioning elements. If splits are balanced, we solve subproblems of size n/2, needing log n levels. If highly skewed, we split into size 1 and n-1, needing n levels.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIdx = partition(arr, low, high);
            quickSort(arr, low, pivotIdx - 1);
            quickSort(arr, pivotIdx + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[low];
        int i = low + 1;
        int j = high;

        while (i <= j) {
            while (i <= high && arr[i] <= pivot) i++;
            while (j >= low && arr[j] > pivot) j--;
            if (i < j) {
                swap(arr, i, j);
            }
        }
        swap(arr, low, j);
        return j;
    }

    private static void swap(int[] arr, int x, int y) {
        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[low];
    let i = low + 1;
    let j = high;

    while (i <= j) {
        while (i <= high && arr[i] <= pivot) i++;
        while (j >= low && arr[j] > pivot) j--;
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
        
    if low < high:
        pivot_idx = partition(arr, low, high)
        quick_sort(arr, low, pivot_idx - 1)
        quick_sort(arr, pivot_idx + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[low]
    i = low + 1
    j = high
    
    while i <= j:
        while i <= high and arr[i] <= pivot:
            i += 1
        while j >= low and arr[j] > pivot:
            j -= 1
        if i < j:
            arr[i], arr[j] = arr[j], arr[i]
            
    arr[low], arr[j] = arr[j], arr[low]
    return j
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Modern systems use hybrid sorting algorithms like Timsort (used in Python and Java) or introsort (which uses QuickSort initially, then switches to Heapsort if recursion exceeds limits, ensuring O(n log n) worst-case performance).
          </div>
        </div>
      </div>
    `
  },
  div_strassen: {
    id: 'div_strassen',
    title: "Strassen's Matrix Multiplication",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            In 1969, Volker Strassen shook the mathematics and computer science community by proving that standard $O(n^3)$ matrix multiplication is asymptotically suboptimal. He developed a divide-and-conquer algorithm that operates in strictly sub-cubic time.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Naive Block Multiplication:</strong> Splitting two $n \times n$ matrices into four submatrices of size $n/2 \times n/2$, which requires 8 separate multiplications.</li>
            <li><strong>Strassen's Reduction:</strong> An algebraic approach that reduces block multiplications from 8 to 7, introducing 18 additions/subtractions in exchange.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Explanation</h3>
          <p class="leading-relaxed text-sm">
            Given matrices $A$ and $B$, we divide each into 4 blocks of size $n/2 \times n/2$:
          </p>
          <div class="bg-black/30 p-2 text-center rounded font-mono text-xs my-2">
            A = [[A11, A12], [A21, A22]],  B = [[B11, B12], [B21, B22]]
          </div>
          <p class="text-sm">
            Strassen defines 7 recursive multiplication variables ($P_1$ to $P_7$) of size $n/2 \times n/2$:
          </p>
          <div class="latex-output font-mono text-[11px] bg-black/40 p-3 rounded space-y-1 text-yellow-300">
            $$P_1 = A_{11}(B_{12} - B_{22})$$<br>
            $$P_2 = (A_{11} + A_{12})B_{22}$$<br>
            $$P_3 = (A_{21} + A_{22})B_{11}$$<br>
            $$P_4 = A_{22}(B_{21} - B_{11})$$<br>
            $$P_5 = (A_{11} + A_{22})(B_{11} + B_{22})$$<br>
            $$P_6 = (A_{12} - A_{22})(B_{21} + B_{22})$$<br>
            $$P_7 = (A_{11} - A_{21})(B_{11} + B_{12})$$
          </div>
          <p class="text-sm mt-3">Using these variables, the quadrants of the product matrix $C$ are merged:</p>
          <div class="latex-output font-mono text-[11px] bg-black/40 p-3 rounded text-green-300">
            $$C_{11} = P_5 + P_4 - P_2 + P_6$$<br>
            $$C_{12} = P_1 + P_2$$<br>
            $$C_{21} = P_3 + P_4$$<br>
            $$C_{22} = P_5 + P_1 - P_3 - P_7$$
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Recurrence Analysis (Master Theorem Case 3)</h3>
          <p class="text-sm">The recurrence relation for Strassen is:</p>
          <div class="latex-output text-center">$$T(n) = 7T(n/2) + \Theta(n^2)$$</div>
          <div class="bg-black/30 p-3 rounded mt-2 text-xs font-mono space-y-1">
            <p>1. Parameters: $a = 7$ (7 recursive multiplication calls), $b = 2$ (matrix dimensions halved), $d = 2$ (addition overhead is $\Theta(n^2)$).</p>
            <p>2. Inequality comparison: $a$ vs $b^d \implies 7 > 2^2 \implies 7 > 4$.</p>
            <p>3. Because $a > b^d$, **Case 3** of the Master Theorem applies.</p>
            <p>4. Running time: $T(n) \in \Theta(n^{\log_2 7}) \approx \Theta(n^{2.807})$.</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Hidden Constants:</strong> Due to the 18 matrix additions, Strassen's has higher constant overhead than the standard loop multiplication. It is only faster in practice for matrix dimensions $n > 64$ or $n > 128$.</li>
            <li><strong>Numerical Stability:</strong> Strassen's algorithm exhibits slightly lower numerical precision stability due to addition-subtraction groupings, which can amplify floating-point errors.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm space-y-2">
            <p class="font-bold text-accent">Exercise:</p>
            <p>Substitute the definitions of $P_5, P_4, P_2, P_6$ into the formula for $C_{11}$ and prove it mathematically yields $A_{11}B_{11} + A_{12}B_{21}$.</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution Proof</summary>
              <div class="mt-1 font-mono text-[11px] bg-black/40 p-2 rounded">
                C11 = P5 + P4 - P2 + P6<br>
                = (A11 + A22)(B11 + B22) + A22(B21 - B11) - (A11 + A12)B22 + (A12 - A22)(B21 + B22)<br>
                = [A11*B11 + A11*B22 + A22*B11 + A22*B22] + [A22*B21 - A22*B11] - [A11*B22 + A12*B22] + [A12*B21 + A12*B22 - A22*B21 - A22*B22]<br>
                = A11*B11 + A12*B21 (All other terms cancel out perfectly).
              </div>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Volker Strassen: Gaussian Elimination is not Optimal, Numerische Mathematik 13: 354–356, 1969.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm Strassen(A, B, n)
    // Multiplies square matrices A and B of size n x n
    if n <= Threshold
        return NaiveMatrixMultiply(A, B, n)
        
    Divide A into A11, A12, A21, A22
    Divide B into B11, B12, B21, B22
    
    P1 <- Strassen(A11, B12 - B22, n/2)
    P2 <- Strassen(A11 + A12, B22, n/2)
    P3 <- Strassen(A21 + A22, B11, n/2)
    P4 <- Strassen(A22, B21 - B11, n/2)
    P5 <- Strassen(A11 + A22, B11 + B22, n/2)
    P6 <- Strassen(A12 - A22, B21 + B22, n/2)
    P7 <- Strassen(A11 - A21, B11 + B12, n/2)
    
    C11 <- P5 + P4 - P2 + P6
    C12 <- P1 + P2
    C21 <- P3 + P4
    C22 <- P5 + P1 - P3 - P7
    
    Combine C11, C12, C21, C22 into C
    return C
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity:
  - Best / Worst / Average Case: Θ(n^2.807)
- Space Complexity: Θ(n^2) due to block copying at each recursive call
- Reason: Traditional block multiplication makes 8 recursive calls, yielding T(n) = 8T(n/2) + O(n^2) -> O(n^3). Strassen requires only 7 calls, satisfying T(n) = 7T(n/2) + O(n^2) -> O(n^log_2 7) ~ O(n^2.807).
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
// Overview block structure representing Strassen allocation
public class StrassenMultiplying {
    public static double[][] multiply(double[][] a, double[][] b) {
        int n = a.length;
        if (n <= 64) {
            return naiveMultiply(a, b);
        }
        // Allocations and additions to construct submatrices...
        // double[][] p1 = multiply(a11, sub(b12, b22));
        // double[][] p2 = multiply(add(a11, a12), b22);
        // ...
        // Reassemble into result double[][] c.
        return new double[n][n];
    }

    private static double[][] naiveMultiply(double[][] a, double[][] b) {
        int n = a.length;
        double[][] c = new double[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    c[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return c;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
// Recursive helper outline
function strassenMultiply(A, B) {
    const n = A.length;
    if (n <= 2) {
        return naiveMultiply(A, B);
    }
    // Splitting, subtracting, adding, recursive calling, and rejoining blocks...
    // P1 = strassenMultiply(A11, subtract(B12, B22))
    // P2 = strassenMultiply(add(A11, A12), B22)
    // ...
    // C11 = add(subtract(add(P5, P4), P2), P6)
    return A;
}

function naiveMultiply(A, B) {
    const n = A.length;
    const C = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def strassen_multiply(A, B):
    n = len(A)
    if n <= 2:
        return naive_multiply(A, B)
    # Perform Strassen algebra with P1..P7 recursive steps...
    # return reassembled_matrix
    return A

def naive_multiply(A, B):
    n = len(A)
    C = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            for k in range(n):
                C[i][j] += A[i][k] * B[k][j]
    return C
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Due to memory lookup spatial layouts, hardware caches perform far better with linear block multiplications. In practice, modern optimized matrix libraries (like BLAS or LAPACK) utilize highly tuned cache block tiling in O(n^3) rather than Strassen's algorithm for standard sizes.
          </div>
        </div>
      </div>
    `
  },
  div_geom: {
    id: 'div_geom',
    title: 'Geometric D&C: Closest Pair & QuickHull',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Divide and Conquer is not restricted to numbers. It works exceptionally well in computational geometry. Two signature examples are finding the <strong>Closest Pair of Points</strong> (Shamos & Hoey, 1975) and building a <strong>Convex Hull</strong> (QuickHull).
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Closest Pair:</strong> Find two points in 2D space separated by the minimum Euclidean distance $d = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$.</li>
            <li><strong>Convex Hull:</strong> The smallest convex boundary enclosing a set of points (often described as the shape of a rubber band snapped around pegs).</li>
            <li><strong>Straddle Zone (Strip):</strong> A vertical region of width $2d$ around the dividing line where points from different partitions could be closer than the current min distance $d$.</li>
          </ul>
        </div>

        <!-- --- CLOSEST PAIR VISUAL --- -->
        <div class="step-card">
          <span class="step-title">Closest Pair: Straddle Zone Concept</span>
          <div class="relative h-44 w-full bg-black/40 rounded-lg border border-white/10 my-2 overflow-hidden">
            <div class="absolute left-0 top-0 h-full w-1/2 border-r border-dashed border-white/20 flex items-center justify-center text-[10px] text-gray-500">Left Side (dL)</div>
            <div class="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center text-[10px] text-gray-500">Right Side (dR)</div>
            <div class="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 bg-yellow-500/10 border-x border-yellow-500/30 flex items-center justify-center">
              <span class="text-[9px] text-yellow-300 font-bold uppercase tracking-tighter text-center">Straddle Strip<br>Width 2d</span>
            </div>
            {/* Points */}
            <div class="absolute left-[20%] top-[40%] w-2 h-2 bg-blue-400 rounded-full"></div>
            <div class="absolute right-[15%] top-[20%] w-2 h-2 bg-red-400 rounded-full"></div>
            {/* Straddlers */}
            <div class="absolute left-[47%] top-[55%] w-2 h-2 bg-green-400 rounded-full shadow-[0_0_5px_#4ade80]"></div>
            <div class="absolute left-[52%] top-[58%] w-2 h-2 bg-green-400 rounded-full shadow-[0_0_5px_#4ade80]"></div>
          </div>
          <p class="text-xs text-center opacity-80">
            We only scan strip points sorted by Y. For each point, we check at most the next <strong>7 points</strong>, keeping combine linear!
          </p>
        </div>

        <!-- --- QUICKHULL VISUAL --- -->
        <div class="step-card">
          <span class="step-title">QuickHull Concept (Excluding Internal Points)</span>
          <div class="bg-black/30 p-2 rounded-lg my-2 text-center">
            <svg viewBox="0 0 200 110" class="w-full h-36">
              <polygon points="30,80 170,80 100,20" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" stroke-width="1.5" />
              <line x1="30" y1="80" x2="170" y2="80" stroke="#facc15" stroke-dasharray="3" />
              <circle cx="30" cy="80" r="3.5" fill="#fff" />
              <circle cx="170" cy="80" r="3.5" fill="#fff" />
              <circle cx="100" cy="20" r="4.5" fill="#facc15" />
              <text x="30" y="93" fill="white" font-size="9">P1 (MinX)</text>
              <text x="170" y="93" fill="white" font-size="9">P2 (MaxX)</text>
              <text x="100" y="14" fill="#facc15" font-size="9" text-anchor="middle" font-weight="bold">Pmax (Furthest)</text>
              <circle cx="90" cy="65" r="2.5" fill="#666" />
              <circle cx="110" cy="55" r="2.5" fill="#666" />
              <text x="100" y="60" fill="#777" font-size="8" text-anchor="middle">Ignored Inside Triangle</text>
            </svg>
            <p class="text-[11px] opacity-75">
              Triangle P1-P2-Pmax acts as a shield. Points inside are discarded; recursion runs on outside regions.
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Complexity Analysis</h3>
          <ul class="space-y-2 text-sm font-mono">
            <li><strong>Closest Pair (Divide & Conquer):</strong> Satisfies $T(n) = 2T(n/2) + O(n \log n)$ which reduces to $\Theta(n \log n)$ using pre-sorting on X and Y coords.</li>
            <li><strong>QuickHull:</strong>
              <ul class="list-disc pl-5 mt-1 space-y-0.5">
                <li><strong>Average Case:</strong> $\Theta(n \log n)$ when points are distributed uniformly and many get excluded.</li>
                <li><strong>Worst Case:</strong> $\Theta(n^2)$ when all points lie on the boundary (e.g. distributed along a circle).</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Y-Sorting in Strip:</strong> If we do not sort the strip points by their Y-coordinate at each merge step (or maintain pre-sorted arrays), the merge step becomes $O(n^2)$, degrading the total runtime to $O(n \log^2 n)$ or $O(n^2)$.</li>
            <li><strong>Precision Errors:</strong> In QuickHull, calculating which side of a line a point resides on uses cross-products. Double-precision float stability must be checked for collinear points.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm space-y-3">
            <div>
              <p class="font-bold text-accent">Exercise 1:</p>
              <p>Why is it mathematically guaranteed that checking only the next 7 points in the closest-pair Y-sorted strip is sufficient?</p>
              <details class="mt-2 text-xs text-gray-400">
                <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
                <p class="mt-1">
                  By geometric packing arguments, we know that no two points in the left/right sub-strips can be closer than $d$. In a $d \times 2d$ rectangular bounding box, at most 8 points can exist under this condition. Thus, comparing a point with the next 7 in Y-sorted order is sufficient.
                </p>
              </details>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Preparata, M. I., & Shamos, M. I.: Computational Geometry: An Introduction, Springer-Verlag, 1985.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm ClosestPair(P)
    // Computes closest distance between points in P
    Sort points by X-coordinate
    return ClosestPairRec(P)

Algorithm ClosestPairRec(P)
    if |P| <= 3
        return BruteForceClosestPair(P)
        
    mid <- |P| / 2
    dL <- ClosestPairRec(P[0..mid-1])
    dR <- ClosestPairRec(P[mid..end])
    d <- min(dL, dR)
    
    Strip <- points in P within X-distance d of P[mid]
    Sort Strip by Y-coordinate
    
    for i <- 0 to |Strip|-1 do
        for k <- i+1 to min(i+7, |Strip|-1) do
            d <- min(d, Distance(Strip[i], Strip[k]))
    return d
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity:
  - Closest Pair: Θ(n log n)
  - QuickHull: Average Θ(n log n), Worst Case Θ(n²)
- Space Complexity: Θ(n)
- Reason: Sorting points initially takes O(n log n). The recursive splitting satisfies T(n) = 2T(n/2) + O(n) because the strip filtering takes linear time since we only verify up to 7 neighbors for each point.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class ClosestPoints {
    public static class Point {
        double x, y;
        public Point(double x, double y) { this.x = x; this.y = y; }
    }

    public static double getClosestDistance(Point[] pts) {
        // Core structure: sort by X then run recursive binary-splitting
        // On merging, extract strip, sort by Y, and compare 7 adjacent neighbors.
        return 0.0; 
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
// Core outline for closest pair of points
function getClosestDistance(points) {
    points.sort((a, b) => a.x - b.x);
    return closestPairRec(points);
}

function closestPairRec(points) {
    const n = points.length;
    if (n <= 3) return bruteForce(points);

    const mid = Math.floor(n / 2);
    const dL = closestPairRec(points.slice(0, mid));
    const dR = closestPairRec(points.slice(mid));
    let d = Math.min(dL, dR);

    const strip = points.filter(p => Math.abs(p.x - points[mid].x) < d);
    strip.sort((a, b) => a.y - b.y);

    for (let i = 0; i < strip.length; i++) {
        for (let j = i + 1; j < Math.min(i + 8, strip.length); j++) {
            const dist = Math.hypot(strip[i].x - strip[j].x, strip[i].y - strip[j].y);
            d = Math.min(d, dist);
        }
    }
    return d;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
import math

def get_closest_distance(points):
    points.sort(key=lambda p: p[0]) # sort by X
    return closest_pair_rec(points)

def closest_pair_rec(points):
    n = len(points)
    if n <= 3:
        return brute_force(points)
        
    mid = n // 2
    dL = closest_pair_rec(points[:mid])
    dR = closest_pair_rec(points[mid:])
    d = min(dL, dR)
    
    mid_x = points[mid][0]
    strip = [p for p in points if abs(p[0] - mid_x) < d]
    strip.sort(key=lambda p: p[1]) # sort by Y
    
    for i in range(len(strip)):
        for j in range(i + 1, min(i + 8, len(strip))):
            dist = math.hypot(strip[i][0] - strip[j][0], strip[i][1] - strip[j][1])
            d = min(d, dist)
            
    return d
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
By keeping points pre-sorted in both X and Y and passing them down the recursion stacks during splits, we can eliminate sorting in the strip completely, satisfying T(n) = 2T(n/2) + O(n) recursively, avoiding the O(n log n) sorting step at each level.
          </div>
        </div>
      </div>
    `
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
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            The <strong>Transform and Conquer</strong> design paradigm is a two-stage methodology. Instead of attacking a complex problem directly, we map or transform the instance into an alternative form that is significantly easier to solve. Once transformed, we solve that modified instance, and then (if necessary) convert the solution back to the original domain.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Instance Simplification:</strong> Re-structuring input into an easier instance of the <em>same</em> problem (e.g., Pre-sorting).</li>
            <li><strong>Representation Change:</strong> Converting input to a different structural representation (e.g., Heaps, AVL Trees, Horner's Form).</li>
            <li><strong>Problem Reduction:</strong> Translating the task into a completely different problem with an existing optimal solver (e.g., LCM &le; GCD).</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">The Transformation Pipeline</span>
          <div class="flex items-center justify-between gap-1 text-xs font-bold text-center my-2 font-mono overflow-x-auto p-2">
            <div class="p-2 bg-blue-500/20 border border-blue-500/50 rounded">Original Input</div>
            <div class="text-gray-400">⟶</div>
            <div class="p-2 bg-purple-500/20 border border-purple-500/50 rounded">Transformation Stage</div>
            <div class="text-gray-400">⟶</div>
            <div class="p-2 bg-green-500/20 border border-green-500/50 rounded">Conquest Solver</div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Ignoring Overhead:</strong> Neglecting the cost of the transformation itself, which can dominate the total run time.</li>
            <li><strong>Incomplete Mapping:</strong> Forgetting to map the transformed solution back to the original problem space.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Classify finding the median after sorting, and representing a graph as an adjacency list.</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1">
                Finding the median after sorting is <strong>Instance Simplification</strong>. Graph representation change is <strong>Representation Change</strong>.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Levitin, A. (2011). Introduction to the Design and Analysis of Algorithms. Chapter 6.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm TransformAndConquer(Instance I)
    T_Instance = Transform(I)
    T_Solution = Solve(T_Instance)
    return MapBack(T_Solution)
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: O(Transformation) + O(Solving)
- Space Complexity: O(Space(Transformation))
- Reason: The algorithm runs as a sequential pipeline. The step with the largest asymptotic complexity acts as the overall bottleneck.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public interface Pipeline&lt;I, S&gt; {
    default S execute(I input) {
        return solve(transform(input));
    }
    I transform(I input);
    S solve(I transformed);
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
class Pipeline {
  constructor(transformFn, solveFn) {
    this.transform = transformFn;
    this.solve = solveFn;
  }
  execute(input) {
    return this.solve(this.transform(input));
  }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
class Pipeline:
    def __init__(self, transform_fn, solve_fn):
        self.transform = transform_fn
        self.solve = solve_fn
    def execute(self, input_val):
        return self.solve(self.transform(input_val))
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Constructing a balanced BST or a heap transforms unstructured sequences into structured hierarchies, allowing for fast searches, deletions, and retrievals in O(log n) time.
          </div>
        </div>
      </div>
    `
  },
  trans_presort: {
    id: 'trans_presort',
    title: 'Instance Simplification: Pre-sorting',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            <strong>Instance Simplification</strong> transforms a problem's input into a simpler, canonical state. The most prominent variant is <strong>Pre-sorting</strong>. By ordering the list first, we can replace multiple expensive $O(n^2)$ scans with a single rapid $O(n)$ pass.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Element Uniqueness:</strong> The problem of verifying whether all values in a collection are distinct.</li>
            <li><strong>Adjacent Checking:</strong> Scanning adjacent values ($A[i]$ vs $A[i+1]$) of a sorted array to detect duplicates in linear time.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">Pre-sorting Cluster Effect</span>
          <div class="bg-black/40 p-3 rounded font-mono text-xs space-y-2 my-2">
            <div>Unsorted: [ 3, 7, 2, 3, 9 ] &rarr; Search pairs is $O(n^2)$</div>
            <div class="text-yellow-300 font-bold">⟶ SORT ⟶</div>
            <div>Sorted: [ 2, <span class="text-red-400 font-bold underline">3, 3</span>, 7, 9 ] &rarr; Duplicates cluster together!</div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Destructive Sorting:</strong> Sorting the array in-place without copying it, causing side-effects for callers that expect the original order.</li>
            <li><strong>Incorrect Scan Bounds:</strong> Running the loop to index $n-1$, leading to Out-of-Bounds errors when evaluating $A[i+1]$.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>How can you find the mode (most frequent element) of an array in $O(n \log n)$ time using pre-sorting?</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1">
                Sort the array first. Then do a single scan while counting consecutive occurrences of identical values. Update the max frequency whenever a streak finishes.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Cormen, T. H., et al. (2022). Introduction to Algorithms (4th Edition). MIT Press.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm UniqueElements(A[0..n-1])
    Sort(A) // O(n log n)
    for i <- 0 to n - 2 do
        if A[i] == A[i+1]
            return false
    return true
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(n log n)
- Space Complexity: O(n) (or O(1) if sorting in-place)
- Reason: Sorting takes Θ(n log n) time. The sequential comparison pass takes Θ(n) comparisons. The sorting phase represents the dominant bottleneck.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
import java.util.Arrays;

public class UniqueChecker {
    public static boolean hasUnique(int[] arr) {
        int[] copy = arr.clone();
        Arrays.sort(copy);
        for (int i = 0; i &lt; copy.length - 1; i++) {
            if (copy[i] == copy[i + 1]) {
                return false;
            }
        }
        return true;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function hasUniqueElements(arr: number[]): boolean {
    const sorted = [...arr].sort((a, b) =&gt; a - b);
    for (let i = 0; i &lt; sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            return false;
        }
    }
    return true;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def has_unique_elements(arr):
    sorted_arr = sorted(arr)
    for i in range(len(sorted_arr) - 1):
        if sorted_arr[i] == sorted_arr[i + 1]:
            return False
    return True
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Although a hash set can perform this check in average O(n) time, sorting uses O(1) auxiliary space (e.g., using HeapSort), which is ideal in memory-constrained devices.
          </div>
        </div>
      </div>
    `
  },
  trans_horner: {
    id: 'trans_horner',
    title: "Representation Change: Horner's Rule",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Evaluating a polynomial $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_0$ naively takes quadratic $\Theta(n^2)$ time. **Horner's Rule** is a classic **Representation Change** algorithm that rewrites the polynomial in a nested multiply-add format, lowering multiplications to exactly $n$.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Polynomial Representation:</strong> Converting standard summation $\sum a_i x^i$ to nested factors: $(\dots((a_n x + a_{n-1})x + a_{n-2})x \dots)x + a_0$.</li>
            <li><strong>Coefficient List:</strong> The sequence $[a_n, a_{n-1}, \dots, a_0]$ from highest to lowest degree.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">Trace Example: P(x) = 2x³ - 6x² + 2x - 1 at x = 3</span>
          <p class="text-xs mb-2">Nested factorization: $((2x - 6)x + 2)x - 1$</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse font-mono">
              <thead>
                <tr class="border-b border-white/10 text-gray-400">
                  <th class="py-1">Step</th>
                  <th class="py-1">Coeff</th>
                  <th class="py-1">Accumulated Result</th>
                  <th class="py-1">Calculation Details</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white/5"><td>Start</td><td>a_3 = 2</td><td>2</td><td>Initialize with highest coefficient</td></tr>
                <tr class="border-b border-white/5"><td>1</td><td>a_2 = -6</td><td>0</td><td>(2 &times; 3) + (-6) = 0</td></tr>
                <tr class="border-b border-white/5"><td>2</td><td>a_1 = 2</td><td>2</td><td>(0 &times; 3) + 2 = 2</td></tr>
                <tr><td>End</td><td>a_0 = -1</td><td class="text-green-400 font-bold">5</td><td class="text-green-400 font-bold">(2 &times; 3) + (-1) = 5</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Forgetting Zero Coefficients:</strong> Omitting zero coefficients for missing degrees (e.g., $x^2 - 1$ must be $[1, 0, -1]$).</li>
            <li><strong>Reversed Iteration:</strong> Iterating from lowest power upward instead of highest downward.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Evaluate $P(x) = 3x^3 + 2x^2 + 5$ at $x = -2$.</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1">
                Coefficients: $[3, 2, 0, 5]$. Accumulator:<br>
                &bull; Start: $r = 3$<br>
                &bull; Step 1: $r = 3 \times (-2) + 2 = -4$<br>
                &bull; Step 2: $r = -4 \times (-2) + 0 = 8$<br>
                &bull; Step 3: $r = 8 \times (-2) + 5 = -11$. Result: <strong>-11</strong>.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Knuth, D. E. (1997). The Art of Computer Programming, Vol 2.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm Horner(A[0..n], x)
    result <- A[n]
    for i <- n - 1 downto 0 do
        result <- result * x + A[i]
    return result
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(n)
- Space Complexity: Θ(1)
- Reason: The single loop performs exactly n multiplications and n additions, achieving the theoretical lower bound for arbitrary polynomial evaluation.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class HornerPolynomial {
    public static double evaluate(double[] A, double x) {
        int n = A.length - 1;
        double result = A[n];
        for (int i = n - 1; i &gt;= 0; i--) {
            result = result * x + A[i];
        }
        return result;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function evaluateHorner(coefficients: number[], x: number): number {
    const n = coefficients.length - 1;
    let result = coefficients[n];
    for (let i = n - 1; i &gt;= 0; i--) {
        result = result * x + coefficients[i];
    }
    return result;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def evaluate_horner(coefficients, x):
    n = len(coefficients) - 1
    result = coefficients[n]
    for i in range(n - 1, -1, -1):
        result = result * x + coefficients[i]
    return result
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
This process is mathematically equivalent to synthetic division. The intermediate accumulator values form the coefficients of the quotient polynomial from dividing P(x) by (x - c).
          </div>
        </div>
      </div>
    `
  },
  trans_expo: {
    id: 'trans_expo',
    title: "Binary Exponentiation (Horner's Method)",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            Computing $a^n$ naively requires $n-1$ multiplications. By applying **Representation Change**, we express the exponent $n$ in binary and scan it **Left-to-Right** using Horner-style doubling (squaring) and adding (multiplying). This reduces multiplications to logarithmic $\Theta(\log n)$ bounds.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Square and Multiply:</strong> Doubling the accumulated power corresponds to squaring ($p \gets p^2$), and adding a $1$ bit corresponds to multiplying ($p \gets p \times a$).</li>
            <li><strong>Bitwise Scanning:</strong> Scanning binary bits from the second most-significant bit down to the least-significant bit.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">Trace Example: Computing $a^{13}$ (13 = 1101$_2$)</span>
          <p class="text-xs mb-2">Starting with $p = a$ for the leading bit, we scan remaining bits <strong class="text-yellow-400">101</strong> Left-to-Right:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse font-mono">
              <thead>
                <tr class="border-b border-white/10 text-gray-400">
                  <th class="py-1">Bit</th>
                  <th class="py-1">Action</th>
                  <th class="py-1">Accumulator State</th>
                  <th class="py-1">Multiplies</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white/5"><td>1 (leading)</td><td>Initialize</td><td>p = a</td><td>0</td></tr>
                <tr class="border-b border-white/5"><td>1</td><td>Square & Multiply</td><td>p = (a)² &times; a = a³</td><td>2</td></tr>
                <tr class="border-b border-white/5"><td>0</td><td>Square Only</td><td>p = (a³)² = a⁶</td><td>1</td></tr>
                <tr><td>1</td><td class="text-green-400 font-bold">Square & Multiply</td><td class="text-green-400 font-bold">p = (a⁶)² &times; a = a¹³</td><td class="text-green-400 font-bold">2</td></tr>
              </tbody>
            </table>
          </div>
          <div class="mt-2 bg-green-500/10 p-2 rounded text-xs text-green-300">
            <strong>Total multiplications:</strong> 2 + 1 + 2 = <strong>5 multiplications</strong> (versus 12 naively!).
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Incorrect Scan Direction:</strong> Scanning Right-to-Left without updating multipliers correctly. Left-to-Right is the natural Horner polynomial evaluation scheme.</li>
            <li><strong>Extra Multiply on Start:</strong> Squaring the accumulator for the leading bit (index $k$). The leading bit should simply initialize the accumulator to $a$.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Determine the multiplications to compute $a^{19}$ ($19_{10} = 10011_2$).</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1">
                Bits: $[1, 0, 0, 1, 1]$.<br>
                &bull; Start (bit 1): $p = a$<br>
                &bull; Bit 0: Square &rarr; $p = a^2$ (1 mul)<br>
                &bull; Bit 0: Square &rarr; $p = a^4$ (1 mul)<br>
                &bull; Bit 1: Square & Multiply &rarr; $p = a^8 \times a = a^9$ (2 muls)<br>
                &bull; Bit 1: Square & Multiply &rarr; $p = a^{18} \times a = a^{19}$ (2 muls).<br>
                Total multiplications = $1 + 1 + 2 + 2 = \mathbf{6}$ multiplications.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Menezes, A. J., et al. (1996). Handbook of Applied Cryptography. CRC Press.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm LeftToRightBinaryPower(a, n)
    // n in binary: b_k b_k-1 ... b_0 where b_k is 1
    p <- a
    for i <- k - 1 downto 0 do
        p <- p * p
        if b_i == 1
            p <- p * a
    return p
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(log n)
- Space Complexity: Θ(1) auxiliary space (or Θ(log n) to store the bit representation)
- Reason: The loop runs exactly once for each of the O(log n) bits of the exponent. Each iteration executes exactly 1 (if bit is 0) or 2 (if bit is 1) multiplications.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class BinaryExponentiation {
    public static long power(long a, int n) {
        if (n == 0) return 1;
        String bin = Integer.toBinaryString(n);
        long p = a;
        for (int i = 1; i &lt; bin.length(); i++) {
            p = p * p;
            if (bin.charAt(i) == '1') {
                p = p * a;
            }
        }
        return p;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function binaryPower(a: number, n: number): number {
    if (n === 0) return 1;
    const binary = n.toString(2);
    let p = a;
    for (let i = 1; i &lt; binary.length; i++) {
        p = p * p;
        if (binary[i] === '1') {
            p = p * a;
        }
    }
    return p;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def binary_power(a, n):
    if n == 0:
        return 1
    binary = bin(n)[2:]
    p = a
    for i in range(1, len(binary)):
        p = p * p
        if binary[i] == '1':
            p = p * a
    return p
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
This algorithm is central to modular exponentiation in cryptosystems like RSA, where we compute (a^n) mod m for extremely large numbers to enforce secure key cryptography.
          </div>
        </div>
      </div>
    `
  },
  trans_red: {
    id: 'trans_red',
    title: 'Problem Reduction: LCM & State Space',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            **Problem Reduction** is one of the most powerful paradigms in Computer Science. Instead of designing a new algorithm, we map or transform problem $P$ to another problem $Q$ with a known, highly efficient solver. Once solved, we map the results back to answer the original task.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Reduction (P &le; Q):</strong> A mapping that converts any instance of $P$ into an equivalent instance of $Q$.</li>
            <li><strong>Least Common Multiple (LCM):</strong> Reduced to Greatest Common Divisor (GCD) using $\\text{LCM}(u,v) = \\frac{|u \\times v|}{\\text{GCD}(u,v)}$.</li>
            <li><strong>State Space Graph:</strong> A configuration graph where vertices represent states and directed edges represent valid actions. Finding the optimal set of moves reduces to BFS shortest-path exploration.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">State-Space Graph Reduction Concept</span>
          <div class="bg-black/40 p-2 rounded-xl border border-white/10 text-center my-2">
            <svg viewBox="0 0 400 110" class="w-full h-24 max-w-sm mx-auto">
              <defs>
                <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#888" />
                </marker>
                <marker id="garr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#22c55e" />
                </marker>
              </defs>
              <line x1="45" y1="55" x2="145" y2="25" stroke="#555" stroke-width="1" marker-end="url(#arr)" />
              <line x1="45" y1="55" x2="145" y2="85" stroke="#22c55e" stroke-width="2" marker-end="url(#garr)" />
              <line x1="145" y1="25" x2="245" y2="25" stroke="#555" stroke-width="1" marker-end="url(#arr)" />
              <line x1="145" y1="85" x2="245" y2="55" stroke="#22c55e" stroke-width="2" marker-end="url(#garr)" />
              <line x1="245" y1="55" x2="345" y2="55" stroke="#22c55e" stroke-width="2" marker-end="url(#garr)" />
              <circle cx="45" cy="55" r="16" fill="#3b82f6" />
              <text x="45" y="58" text-anchor="middle" fill="white" font-size="8" font-weight="bold">Start</text>
              <circle cx="145" cy="25" r="14" fill="#334155" />
              <text x="145" y="28" text-anchor="middle" fill="white" font-size="7">State A</text>
              <circle cx="145" cy="85" r="14" fill="#334155" stroke="#22c55e" stroke-width="1.5" />
              <text x="145" y="88" text-anchor="middle" fill="white" font-size="7">State B</text>
              <circle cx="245" cy="25" r="14" fill="#334155" />
              <circle cx="245" cy="55" r="14" fill="#334155" stroke="#22c55e" stroke-width="1.5" />
              <text x="245" y="58" text-anchor="middle" fill="white" font-size="7">State D</text>
              <circle cx="345" cy="55" r="16" fill="#ef4444" />
              <text x="345" y="58" text-anchor="middle" fill="white" font-size="8" font-weight="bold">Goal</text>
            </svg>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Integer Overflow on Multiply:</strong> Doing $u \times v$ first can overflow. To avoid this, divide by GCD first: $(u / \text{GCD}(u,v)) \times v$.</li>
            <li><strong>Infinite State Exploration:</strong> Forgetting to track already visited nodes during BFS state exploration, triggering infinite loop states.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Show how to reduce finding the maximum of an array to finding the minimum.</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1">
                Negate all elements in the array: $A' = [-x \text{ for } x \in A]$. Find the minimum of $A'$: $m = \text{find\_min}(A')$. Return the negation of the minimum: $\max(A) = -m$.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Sipser, M. (2012). Introduction to the Theory of Computation.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm LCM(u, v)
    if u == 0 or v == 0
        return 0
    g <- GCD(u, v)
    return (u / g) * v
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(log(min(u, v))) using Euclidean GCD.
- Space Complexity: Θ(1)
- Reason: The reduction step requires a constant number of basic operations, meaning the total efficiency matches Euclidean's logarithmic GCD solver.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class LCMReduction {
    public static long gcd(long a, long b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    public static long lcm(long u, long v) {
        if (u == 0 || v == 0) return 0;
        return (u / gcd(u, v)) * v;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(u: number, v: number): number {
    if (u === 0 || v === 0) return 0;
    return (u / gcd(u, v)) * v;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def lcm(u, v):
    if u == 0 or v == 0:
        return 0
    return (u // gcd(u, v)) * v
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Reduction is central to computational complexity theory, where we reduce NP-complete decision problems (like 3-SAT) to other problems to prove their NP-hardness.
          </div>
        </div>
      </div>
    `
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
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            The **Space-Time Tradeoff** states that we can reduce the running time of an algorithm by consuming more memory (space). In modern computing, memory is cheap, so we often trade space to gain speed. A prime example is **Counting Sort**, which sorts keys in linear time by using an auxiliary array to count element frequencies.
          </p>
          <div class="mt-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded text-sm">
            <strong class="text-purple-300">Did you know?</strong> <strong>Dynamic Programming</strong> is a classic Space-Time Tradeoff. We store solutions to sub-problems in memory (Space) to avoid re-calculating them later (Time).
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Counting Sort:</strong> A non-comparison-based sorting algorithm that sorts integers by counting the number of occurrences of each unique element.</li>
            <li><strong>Distribution Array (Cumulative Frequencies):</strong> An array where the value at index $i$ is the prefix sum of frequencies, representing the final starting index or boundaries for elements in the sorted output.</li>
          </ul>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">
            <h4 class="font-bold text-green-300 mb-2 border-b border-green-500/20 pb-2">Advantages</h4>
            <ul class="list-disc pl-5 text-sm space-y-1 opacity-90">
              <li><strong>Linear Time:</strong> Runs in $\Theta(n + k)$ time, bypassing the $\Omega(n \log n)$ barrier of comparison-based sorting when the range of elements $k$ is small.</li>
              <li><strong>Stability:</strong> Preserves the relative input order of equal elements (vital for composite sorting keys, e.g., Radix Sort).</li>
            </ul>
          </div>
          <div class="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
            <h4 class="font-bold text-red-300 mb-2 border-b border-red-500/20 pb-2">Weaknesses</h4>
            <ul class="list-disc pl-5 text-sm space-y-1 opacity-90">
              <li><strong>Memory Footprint:</strong> If the range $k$ is huge (e.g., $1$ to $10^9$), allocating the frequency array causes critical space overhead.</li>
              <li><strong>Constraint-Bound:</strong> Restricted to integers or keys that can map directly to contiguous array indices.</li>
            </ul>
          </div>
        </div>

        <div class="step-card">
          <span class="step-title">Trace Example: Sorting by Counting ($A = [13, 11, 12, 13, 12, 12]$)</span>
          <p class="text-sm mb-4">Let's walk through the three phases of the algorithm with an array of size $n = 6$ and range $k$ of keys from $11$ to $13$.</p>

          <div class="glass p-4 rounded-lg border border-white/10 mb-6">
            <h4 class="font-bold text-xs text-center text-accent mb-2">Step 1 & 2: Frequency & Distribution arrays</h4>
            <div class="grid grid-cols-4 gap-2 text-center text-sm font-mono">
              <div class="text-gray-400 border-b border-white/10">Value</div>
              <div class="font-bold">11</div><div class="font-bold">12</div><div class="font-bold">13</div>
              
              <div class="text-gray-400 text-left pl-2">Frequency</div>
              <div class="bg-blue-500/20 rounded">1</div>
              <div class="bg-blue-500/20 rounded">3</div>
              <div class="bg-blue-500/20 rounded">2</div>

              <div class="text-gray-400 text-left pl-2">Distribution</div>
              <div class="bg-yellow-500/20 rounded text-yellow-200">1</div>
              <div class="bg-yellow-500/20 rounded text-yellow-200">4</div>
              <div class="bg-yellow-500/20 rounded text-yellow-200">6</div>
            </div>
            <p class="text-xs text-center mt-2 opacity-60">Distribution (Prefix Sum) determines the boundary position for each element.</p>
          </div>

          <div class="glass p-4 rounded-lg border border-white/10">
            <h4 class="font-bold text-xs text-center text-accent mb-2">Step 3: Stable Output Placement (Scanning backwards)</h4>
            <div class="space-y-2 font-mono text-xs md:text-sm">
              <div class="flex items-center justify-between border-b border-white/5 pb-1">
                <span>A[5] = 12</span>
                <span class="text-gray-400">Dist[12] is 4</span>
                <span class="text-green-400">Place at S[3]</span>
                <span class="text-yellow-500">Dist[12] &rarr; 3</span>
              </div>
              <div class="flex items-center justify-between border-b border-white/5 pb-1">
                <span>A[4] = 12</span>
                <span class="text-gray-400">Dist[12] is 3</span>
                <span class="text-green-400">Place at S[2]</span>
                <span class="text-yellow-500">Dist[12] &rarr; 2</span>
              </div>
              <div class="flex items-center justify-between border-b border-white/5 pb-1">
                <span>A[3] = 13</span>
                <span class="text-gray-400">Dist[13] is 6</span>
                <span class="text-green-400">Place at S[5]</span>
                <span class="text-yellow-500">Dist[13] &rarr; 5</span>
              </div>
              <div class="flex items-center justify-between border-b border-white/5 pb-1">
                <span>A[2] = 12</span>
                <span class="text-gray-400">Dist[12] is 2</span>
                <span class="text-green-400">Place at S[1]</span>
                <span class="text-yellow-500">Dist[12] &rarr; 1</span>
              </div>
              <div class="flex items-center justify-between border-b border-white/5 pb-1">
                <span>A[1] = 11</span>
                <span class="text-gray-400">Dist[11] is 1</span>
                <span class="text-green-400">Place at S[0]</span>
                <span class="text-yellow-500">Dist[11] &rarr; 0</span>
              </div>
              <div class="flex items-center justify-between">
                <span>A[0] = 13</span>
                <span class="text-gray-400">Dist[13] is 5</span>
                <span class="text-green-400">Place at S[4]</span>
                <span class="text-yellow-500">Dist[13] &rarr; 4</span>
              </div>
            </div>
            <div class="mt-4 pt-2 border-t border-white/20 text-center">
              <p class="text-xs mb-1 font-bold text-accent">Final Output Array (S):</p>
              <div class="flex justify-center gap-1 font-mono text-sm">
                <div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">11</div>
                <div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">12</div>
                <div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">12</div>
                <div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">12</div>
                <div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">13</div>
                <div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">13</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Massive Key Range:</strong> Forgetting that if keys are extremely spread out (e.g. $[0, 10^9]$), allocating $D$ of size $10^9 + 1$ can trigger an Out-Of-Memory exception even for sorting two items.</li>
            <li><strong>Forward Output Scan:</strong> Scanning the input array from left-to-right (forward) when building the output array, which breaks stability. It must be processed backwards.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>How would you adapt Counting Sort to handle an array that contains negative integers?</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1">
                Find the minimum element in the input array ($\text{min}$). Offset all elements by subtracting $\text{min}$ when accessing the frequency array, converting keys to indices in $[0, \text{max} - \text{min}]$. When placing elements into the output array, add the offset back: $\text{output}[\text{count}[A[i] - \text{min}] - 1] = A[i]$.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Cormen, T. H., et al. (2022). Introduction to Algorithms (4th Edition). MIT Press.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm CountingSort(A[0..n-1], k)
    // A contains elements in range 0 to k
    let D[0..k] be array initialized to 0
    let S[0..n-1] be output array
    
    for i <- 0 to n - 1 do
        D[A[i]] <- D[A[i]] + 1
        
    for j <- 1 to k do
        D[j] <- D[j] + D[j-1]
        
    for i <- n - 1 downto 0 do
        val <- A[i]
        S[D[val] - 1] <- val
        D[val] <- D[val] - 1
        
    return S
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(n + k) in all cases (best, worst, average)
- Space Complexity: Θ(n + k) auxiliary space
- Reason: The algorithm performs constant-time array operations across loops of sizes n, k, and n. It is highly efficient for small values of range k, scaling linearly with the sum of input size n and range k.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
import java.util.Arrays;

public class CountingSortStable {
    public static int[] sort(int[] arr, int k) {
        int n = arr.length;
        int[] D = new int[k + 1];
        int[] S = new int[n];
        
        // 1. Calculate frequencies
        for (int i = 0; i &lt; n; i++) {
            D[arr[i]]++;
        }
        
        // 2. Compute prefix sums (distributions)
        for (int j = 1; j &lt;= k; j++) {
            D[j] += D[j - 1];
        }
        
        // 3. Stably place elements backwards
        for (int i = n - 1; i &gt;= 0; i--) {
            int val = arr[i];
            S[D[val] - 1] = val;
            D[val]--;
        }
        return S;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function countingSort(arr: number[], k: number): number[] {
    const n = arr.length;
    const D = Array(k + 1).fill(0);
    const S = Array(n);
    
    // 1. Frequencies
    for (let i = 0; i &lt; n; i++) {
        D[arr[i]]++;
    }
    
    // 2. Cumulative distributions
    for (let j = 1; j &lt;= k; j++) {
        D[j] += D[j - 1];
    }
    
    // 3. Place stably backwards
    for (let i = n - 1; i &gt;= 0; i--) {
        const val = arr[i];
        S[D[val] - 1] = val;
        D[val]--;
    }
    return S;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def counting_sort(arr, k):
    n = len(arr)
    D = [0] * (k + 1)
    S = [0] * n
    
    # 1. Count frequencies
    for num in arr:
        D[num] += 1
        
    # 2. Cumulative prefix sums
    for j in range(1, k + 1):
        D[j] += D[j - 1]
        
    # 3. Output backwards
    for i in range(n - 1, -1, -1):
        val = arr[i]
        S[D[val] - 1] = val
        D[val] -= 1
        
    return S
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Counting Sort is a non-comparison sort. It completely bypasses the lower bound of Ω(n log n) comparison-based sorting, but its high performance is conditional on k being in O(n).
          </div>
        </div>
      </div>
    `
  },
  spa_horspool: {
    id: 'spa_horspool',
    title: "Horspool's String Matching",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            **Horspool's Algorithm** is a highly efficient string-matching algorithm that utilizes the **Input Enhancement** technique. Rather than checking characters and moving the pattern forward by exactly 1 index upon a mismatch, it pre-computes a **Shift Table** for the pattern. This allows the algorithm to skip over multiple characters at a time, checking alignments from **Right-to-Left**.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Shift Table:</strong> A table mapping each alphabet symbol to a skip size, computed using the formula: $Shift(c) = m - 1 - index(c)$ where $index(c)$ is the rightmost position of $c$ in the pattern (excluding the pattern's last character). For characters not in the pattern, the shift is equal to the pattern's length $m$.</li>
            <li><strong>Right-to-Left Matching:</strong> Comparing characters starting from the end of the pattern backwards to the beginning, which allows early mismatches to execute large skips.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">Shift Table Construction ("BARBER", m=6)</span>
          <p class="text-xs mb-3">Formula: $Shift(c) = m - 1 - index(c)$ for the rightmost occurrence of $c$ in the prefix of length $m-1$.</p>
          <div class="overflow-x-auto">
            <table class="w-full text-center text-xs border-collapse border border-white/10">
              <thead>
                <tr class="bg-blue-900/30 text-blue-200">
                  <th class="p-2 border border-white/10">Char</th>
                  <th class="p-2 border border-white/10">Rightmost Prefix Index</th>
                  <th class="p-2 border border-white/10">Calculation ($6 - 1 - \text{index}$)</th>
                  <th class="p-2 border border-white/10 text-accent font-bold">Shift</th>
                </tr>
              </thead>
              <tbody class="font-mono">
                <tr><td class="p-2 border border-white/10">A</td><td class="p-2 border border-white/10">1</td><td class="p-2 border border-white/10">6 - 1 - 1</td><td class="p-2 border border-white/10 text-accent font-bold">4</td></tr>
                <tr><td class="p-2 border border-white/10">R</td><td class="p-2 border border-white/10">2 (excluding index 5)</td><td class="p-2 border border-white/10">6 - 1 - 2</td><td class="p-2 border border-white/10 text-accent font-bold">3</td></tr>
                <tr><td class="p-2 border border-white/10">B</td><td class="p-2 border border-white/10">3</td><td class="p-2 border border-white/10">6 - 1 - 3</td><td class="p-2 border border-white/10 text-accent font-bold">2</td></tr>
                <tr><td class="p-2 border border-white/10">E</td><td class="p-2 border border-white/10">4</td><td class="p-2 border border-white/10">6 - 1 - 4</td><td class="p-2 border border-white/10 text-accent font-bold">1</td></tr>
                <tr class="bg-red-500/5 text-red-300"><td class="p-2 border border-white/10">Others</td><td class="p-2 border border-white/10">-</td><td class="p-2 border border-white/10">Default value</td><td class="p-2 border border-white/10 font-bold">6</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="step-card">
          <span class="step-title">🎞 Animated Shift Movement Trace</span>
          <p class="text-sm mb-4">Text: <code>JIM_SAW_ME_IN_A_BARBER_SHOP</code>. Pattern: <code>BARBER</code> (m=6).</p>
          <div class="space-y-4 font-mono text-xs md:text-sm">
            <div class="bg-black/40 p-3 rounded-lg border border-white/5">
              <span class="text-xs text-yellow-300 font-bold">Frame 1 (Initial Alignment):</span>
              <pre class="mt-1">JIM_SA<span class="text-red-400 font-bold">W</span>_ME_IN_A_BARBER_SHOP
BARBE<span class="text-red-400 font-bold">R</span></pre>
              <p class="text-xs text-blue-300 mt-2">Mismatch on W. Look at aligned text character W. ShiftTable[W] = 6. Shift pattern by 6.</p>
            </div>
            <div class="bg-black/40 p-3 rounded-lg border border-white/5">
              <span class="text-xs text-yellow-300 font-bold">Frame 2:</span>
              <pre class="mt-1">JIM_SAW_ME_<span class="text-red-400 font-bold">I</span>N_A_BARBER_SHOP
      BARBE<span class="text-red-400 font-bold">R</span></pre>
              <p class="text-xs text-blue-300 mt-2">Mismatch on I. Look at aligned character I. ShiftTable[I] = 6. Shift pattern by 6.</p>
            </div>
            <div class="bg-black/40 p-3 rounded-lg border border-white/5">
              <span class="text-xs text-yellow-300 font-bold">Frame 3:</span>
              <pre class="mt-1">JIM_SAW_ME_IN_A_B<span class="text-red-400 font-bold">A</span>RBER_SHOP
            BARBE<span class="text-red-400 font-bold">R</span></pre>
              <p class="text-xs text-blue-300 mt-2">Mismatch on A. Look at aligned character A. ShiftTable[A] = 4. Shift pattern by 4.</p>
            </div>
            <div class="bg-green-950/30 border border-green-500/30 p-3 rounded-lg">
              <span class="text-xs text-green-400 font-bold">Frame 4:</span>
              <pre class="mt-1">JIM_SAW_ME_IN_A_<span class="text-green-400 font-bold">BARBER</span>_SHOP
                <span class="text-green-400 font-bold">BARBER</span></pre>
              <p class="text-xs text-green-300 mt-2 font-semibold">✔ Match found! Return index 16.</p>
            </div>
          </div>
        </div>

        <div class="step-card border-l-4 border-purple-500">
          <span class="step-title">Why it works well: Input Enhancement</span>
          <p class="text-sm leading-relaxed">
            In standard natural texts, many characters aligned with the end of the pattern do not occur in the pattern at all. Horspool exploits this by skipping past the entire window of length $m$ in a single comparison.
          </p>
        </div>

        <div class="step-card border-l-4 border-red-500">
          <span class="step-title">Worst-Case Construction (Θ(nm))</span>
          <p class="text-xs md:text-sm mb-2">
            The worst case matches brute force when the alignment repeatedly shifts by only 1 index.
          </p>
          <div class="bg-black/40 p-3 rounded font-mono text-xs mb-2">
            Text: AAAAAAAAAAAAAAAAAA<br>
            Pattern: AAAAAB
          </div>
          <p class="text-xs opacity-80">
            Every window matches all the A's and fails on the final character B. Since the aligned text character A is at index $m-2$ in the pattern, the shift size remains constant at 1, causing quadratic $\Theta(nm)$ comparison passes.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Last Character in Shift:</strong> Including the last pattern character at index $m-1$ in prefix scanning, yielding a skip of 0, resulting in infinite loops.</li>
            <li><strong>Using Wrong Text Index:</strong> Grabbing the mismatched character index rather than the character aligned with the end of the pattern for looking up shift distance.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Construct the Horspool shift table for the pattern <code>REORDER</code> over the standard English alphabet.</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <div class="mt-1 space-y-1">
                <p>Length $m = 7$. Exclude final character 'R' at index 6.</p>
                <p>&bull; 'E': rightmost index in prefix is 4 &rarr; Shift = $7 - 1 - 4 = \mathbf{2}$</p>
                <p>&bull; 'O': rightmost index in prefix is 2 &rarr; Shift = $7 - 1 - 2 = \mathbf{4}$</p>
                <p>&bull; 'R': rightmost index in prefix is 3 &rarr; Shift = $7 - 1 - 3 = \mathbf{3}$</p>
                <p>&bull; 'D': rightmost index in prefix is 5 &rarr; Shift = $7 - 1 - 5 = \mathbf{1}$</p>
                <p>&bull; All other characters (including 'R' outside index 3, and default letters) &rarr; Shift = $\mathbf{7}$.</p>
              </div>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Horspool, R. N. (1980). Practical Fast Export-Import of String Search Algorithms.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm ShiftTable(P[0..m-1])
    Initialize Table with value m for all characters
    for j <- 0 to m - 2 do
        Table[P[j]] <- m - 1 - j
    return Table

Algorithm HorspoolMatching(T[0..n-1], P[0..m-1])
    Table <- ShiftTable(P)
    i <- m - 1
    while i < n do
        k <- 0
        while k < m and P[m - 1 - k] == T[i - k] do
            k <- k + 1
        if k == m then
            return i - m + 1
        else
            i <- i + Table[T[i]]
    return -1
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity:
  - Worst Case: Θ(n * m) (e.g. searching all A's)
  - Average Case: Θ(n)
  - Best Case: Θ(n / m)
- Space Complexity: Θ(sigma) where sigma is alphabet size
- Reason: The shift table maps each potential character to its shift distance. The search loop compares strings backwards, enabling fast jumps of size m in the best-case alignments.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
import java.util.Arrays;

public class HorspoolSearch {
    public static int search(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        int[] shiftTable = new int[256];
        
        // 1. Build Shift Table
        Arrays.fill(shiftTable, m);
        for (int j = 0; j &lt; m - 1; j++) {
            shiftTable[pattern.charAt(j)] = m - 1 - j;
        }
        
        // 2. Search Loop
        int i = m - 1;
        while (i &lt; n) {
            int k = 0;
            while (k &lt; m && pattern.charAt(m - 1 - k) == text.charAt(i - k)) {
                k++;
            }
            if (k == m) {
                return i - m + 1; // Match found!
            }
            // Shift pattern based on aligned character in text
            i += shiftTable[text.charAt(i)];
        }
        return -1; // No match found
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function horspoolSearch(text: string, pattern: string): number {
    const n = text.length;
    const m = pattern.length;
    const shiftTable: Record&lt;string, number&gt; = {};
    
    // 1. Build Shift Table
    for (let i = 0; i &lt; 256; i++) {
        shiftTable[String.fromCharCode(i)] = m;
    }
    for (let j = 0; j &lt; m - 1; j++) {
        shiftTable[pattern[j]] = m - 1 - j;
    }
    
    // 2. Search
    let i = m - 1;
    while (i &lt; n) {
        let k = 0;
        while (k &lt; m && pattern[m - 1 - k] === text[i - k]) {
            k++;
        }
        if (k === m) {
            return i - m + 1; // Match found!
        }
        i += shiftTable[text[i]] ?? m;
    }
    return -1;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def horspool_search(text, pattern):
    n = len(text)
    m = len(pattern)
    
    # 1. Build Shift Table
    shift_table = {chr(i): m for i in range(256)}
    for j in range(m - 1):
        shift_table[pattern[j]] = m - 1 - j
        
    # 2. Search loop
    i = m - 1
    while i &lt; n:
        k = 0
        while k &lt; m and pattern[m - 1 - k] == text[i - k]:
            k += 1
        if k == m:
            return i - m + 1
        i += shift_table.get(text[i], m)
        
    return -1
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Horspool is a simplified variant of the Boyer-Moore algorithm, dropping the Good Suffix heuristic. In practice, because bad character shifts dominate typical lookups, its performance is comparable to Boyer-Moore while being much simpler to implement.
          </div>
        </div>
      </div>
    `
  },
  spa_boyer: {
    id: 'spa_boyer',
    title: 'Boyer-Moore String Matching Heuristics',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            The **Boyer-Moore Algorithm** is widely considered the gold standard for sequential string matching. Similar to Horspool, it scans the pattern from **Right-to-Left**. However, instead of relying on a single skip table, it uses **two independent heuristics** at each alignment window: the **Bad Symbol** rule and the **Good Suffix** rule. It evaluates both rules and makes the largest safe shift.
          </p>
          <div class="mt-2 p-3 bg-purple-500/10 border border-purple-500/30 rounded text-center font-mono text-sm">
            $Shift = \max( \text{Bad\_Symbol\_Shift}, \text{Good\_Suffix\_Shift} )$
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Bad Symbol Heuristic ($d_1$):</strong> If a mismatch occurs at text character $c$ and $k$ suffix characters matched, align $c$ with its rightmost prefix occurrence in the pattern. $d_1 = \max(T(c) - k, 1)$.</li>
            <li><strong>Good Suffix Heuristic ($d_2$):</strong> If $k > 0$ characters match a suffix of the pattern, find the next rightmost occurrence of that suffix elsewhere in the pattern. If it doesn't occur, find a prefix of the pattern that matches a suffix of the matched portion. Otherwise, shift by $m$.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">1. Bad Symbol Table Construction</span>
          <p class="text-xs mb-2">For a pattern, we map each alphabet letter to its distance from the end: $T(c) = m - 1 - \text{index}$ of rightmost prefix occurrence. Default is $m$.</p>
          <div class="overflow-x-auto">
            <table class="w-full text-center text-xs border border-white/10">
              <thead>
                <tr class="bg-white/5">
                  <th class="p-2 border border-white/10">Pattern: "BARBER" (m=6)</th>
                  <th class="p-2 border border-white/10">B</th>
                  <th class="p-2 border border-white/10">A</th>
                  <th class="p-2 border border-white/10">R</th>
                  <th class="p-2 border border-white/10">E</th>
                  <th class="p-2 border border-white/10">Others</th>
                </tr>
              </thead>
              <tbody class="font-mono">
                <tr>
                  <td class="p-2 border font-bold text-accent">Value T(c)</td>
                  <td class="p-2 border">2</td>
                  <td class="p-2 border">4</td>
                  <td class="p-2 border">0 (excludes last)</td>
                  <td class="p-2 border">1</td>
                  <td class="p-2 border">6</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-2 bg-yellow-500/10 p-2 rounded text-xs text-yellow-200">
            <strong>Example mismatch trace:</strong> If we compare text suffix "ER" ($k=2$) against pattern "BARBER" and mismatch at text character 'S' against pattern 'B':<br>
            &bull; Mismatch character $c = \text{'S'}$. $T(\text{'S'}) = 6$. Matched suffix count $k = 2$.<br>
            &bull; $d_1 = \max(6 - 2, 1) = \mathbf{4}$.
          </div>
        </div>

        <div class="step-card border-l-4 border-emerald-400">
          <span class="step-title">2. Good Suffix Rule — Graphical Explanation of Cases</span>
          <p class="text-xs opacity-80 mb-4">The three topological conditions when shifting matching subsegments:</p>
          
          <div class="space-y-6 font-mono text-xs md:text-sm">
            <div class="glass p-3 rounded border border-white/5">
              <span class="text-emerald-400 font-bold">Case 1: Suffix occurs elsewhere in the pattern</span>
              <p class="text-[11px] opacity-75 mt-1">Shift to align the other occurrence of the suffix in the pattern with the text.</p>
              <pre class="mt-2 bg-black/30 p-2 rounded">
TEXT:    T E X T <span class="text-green-400 font-bold">B A B</span>
PATTERN: M A O <span class="text-green-400 font-bold">B A B</span>  &rarr;  Matched "BAB" (k=3)
SHIFT:   M A O B A B &larr; Shift left, aligned with other prefix occurrence</pre>
            </div>

            <div class="glass p-3 rounded border border-white/5">
              <span class="text-yellow-400 font-bold">Case 2: Suffix DOES NOT recur fully, but a prefix matches its end</span>
              <p class="text-[11px] opacity-75 mt-1">Align the matching prefix segment of the pattern with the text.</p>
              <pre class="mt-2 bg-black/30 p-2 rounded">
TEXT:    A B C <span class="text-green-400 font-bold">B A B</span>
PATTERN: <span class="text-yellow-400 font-bold">A B</span> C B <span class="text-green-400 font-bold">A B</span>  &rarr;  Suffix "AB" ends match
SHIFT:       A B C B A B &larr; Shift so prefix "AB" aligns with matched text</pre>
            </div>

            <div class="glass p-3 rounded border border-white/5">
              <span class="text-red-400 font-bold">Case 3: No recurrences or overlapping prefixes</span>
              <p class="text-[11px] opacity-75 mt-1">Safely skip the pattern past the entire matched window.</p>
              <pre class="mt-2 bg-black/30 p-2 rounded">
TEXT:    X X X <span class="text-green-400 font-bold">D E F</span>
PATTERN: A B C <span class="text-green-400 font-bold">D E F</span>
SHIFT:         A B C D E F &larr; Full shift of length m = 6</pre>
            </div>
          </div>
        </div>

        <div class="step-card border-l-4 border-yellow-400">
          <span class="step-title">Heuristics Comparison Matrix</span>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-center border-collapse border border-white/10">
              <thead>
                <tr class="bg-white/5">
                  <th class="p-2 border">Feature</th>
                  <th class="p-2 border text-yellow-300">Horspool</th>
                  <th class="p-2 border text-purple-300">Boyer-Moore</th>
                </tr>
              </thead>
              <tbody class="font-mono">
                <tr><td class="p-2 border">Scan Direction</td><td class="p-2 border">Right-to-Left</td><td class="p-2 border">Right-to-Left</td></tr>
                <tr><td class="p-2 border">Bad Symbol Rule</td><td class="p-2 border">✔ Yes (Simple last-aligned char)</td><td class="p-2 border">✔ Yes (Standard adjusted by matches $k$)</td></tr>
                <tr><td class="p-2 border">Good Suffix Rule</td><td class="p-2 border text-red-300">✘ No</td><td class="p-2 border text-green-300">✔ Yes</td></tr>
                <tr><td class="p-2 border">Worst-Case Time</td><td class="p-2 border">$\Theta(nm)$</td><td class="p-2 border text-green-300">$O(n + m)$ (with both rules)</td></tr>
                <tr><td class="p-2 border">Preprocessing Cost</td><td class="p-2 border">Low ($O(m + \sigma)$)</td><td class="p-2 border">Moderate ($O(m + \sigma)$)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Negative Shifts:</strong> Forgetting the $\max(\dots, 1)$ guard in the Bad Symbol rule, causing negative shifts (reversing pattern search) when the mismatched letter is located to the right of the compared position.</li>
            <li><strong>Incomplete Good Suffix Array:</strong> Omitting prefix-suffix matching properties (Case 2), leading to suboptimal or incorrect (too large) shifts.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Why does Boyer-Moore often achieve sublinear $O(n/m)$ time complexity in practice, inspecting fewer than $n$ characters?</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1">
                Because if the character aligned with the end of the pattern is completely absent from the pattern, the Bad Symbol heuristic shifts the pattern fully by $m$ positions. This enables the algorithm to skip whole blocks of $m$ characters in a single comparison.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Boyer, R. S., & Moore, J. S. (1977). A Fast String Searching Algorithm. ACM Communications.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm BoyerMooreSearch(T[0..n-1], P[0..m-1])
    badCharTable <- BuildBadChar(P)
    goodSuffixTable <- BuildGoodSuffix(P)
    
    s <- 0  // shift of the pattern with respect to text
    while s <= (n - m) do
        j <- m - 1
        
        // Scan Right-to-Left
        while j >= 0 and P[j] == T[s + j] do
            j <- j - 1
            
        if j < 0 then
            return s  // Match found at shift s
        else
            k <- (m - 1) - j  // number of matched characters
            d1 <- max(badCharTable[T[s + j]] - k, 1)
            d2 <- goodSuffixTable[j]
            s <- s + max(d1, d2)
            
    return -1
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity:
  - Worst Case: O(n + m) (guaranteed when both bad symbol and good suffix rules are fully active)
  - Best Case: O(n / m)
- Space Complexity: O(m + sigma) auxiliary space
- Reason: Pre-processing requires space for the bad character table of size sigma and the good suffix table of size m. The search scans right-to-left, yielding very large steps under mismatched conditions.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class BoyerMooreSearch {
    // Note: This exhibits standard search loop using Bad Symbol rule
    // combined with a safe fallback of 1 shift when good suffix is omitted.
    public static int search(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        int[] badChar = new int[256];
        
        // Preprocess: Last occurrence of each character
        for (int i = 0; i &lt; 256; i++) {
            badChar[i] = -1;
        }
        for (int i = 0; i &lt; m; i++) {
            badChar[pattern.charAt(i)] = i;
        }
        
        int s = 0; // Alignment shift
        while (s &lt;= (n - m)) {
            int j = m - 1;
            
            // Scan Right-to-Left
            while (j &gt;= 0 && pattern.charAt(j) == text.charAt(s + j)) {
                j--;
            }
            
            if (j &lt; 0) {
                return s; // Match found!
            } else {
                // Aligns pattern with the bad character
                s += Math.max(1, j - badChar[text.charAt(s + j)]);
            }
        }
        return -1;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function boyerMooreSearch(text: string, pattern: string): number {
    const n = text.length;
    const m = pattern.length;
    const badCharTable: Record&lt;string, number&gt; = {};
    
    // Preprocess: Last occurrence index
    for (let i = 0; i &lt; 256; i++) {
        badCharTable[String.fromCharCode(i)] = -1;
    }
    for (let i = 0; i &lt; m; i++) {
        badCharTable[pattern[i]] = i;
    }
    
    let s = 0;
    while (s &lt;= (n - m)) {
        let j = m - 1;
        
        while (j &gt;= 0 && pattern[j] === text[s + j]) {
            j--;
        }
        
        if (j &lt; 0) {
            return s; // Match found!
        } else {
            // Shift aligning with bad char
            s += Math.max(1, j - (badCharTable[text[s + j]] ?? -1));
        }
    }
    return -1;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def boyer_moore_search(text, pattern):
    n = len(text)
    m = len(pattern)
    
    # Preprocess: Last occurrence index
    bad_char = {chr(i): -1 for i in range(256)}
    for i in range(m):
        bad_char[pattern[i]] = i
        
    s = 0
    while s &lt;= (n - m):
        j = m - 1
        
        while j &gt;= 0 and pattern[j] == text[s + j]:
            j -= 1
            
        if j &lt; 0:
            return s
        else:
            s += max(1, j - bad_char.get(text[s + j], -1))
            
    return -1
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Boyer-Moore is a linear string-matching algorithm when the pattern doesn't contain matching periodic components. It is used in systems like GNU grep, optimizing text lookup queries.
          </div>
        </div>
      </div>
    `
  },
  gre_intro: {
    id: 'gre_intro',
    title: 'Greedy Technique & Change Making',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            The **Greedy Technique** is a design paradigm that builds up a solution piece by piece, always making the choice that offers the most obvious and immediate benefit at that specific moment. This is a <strong>locally optimal choice</strong> made with the hope that it will lead to a <strong>globally optimal solution</strong>. Greedy choices are irrevocable: once made, they can never be reconsidered or backtracked.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Greedy Choice Property:</strong> A global optimum can be reached by making local, greedy choices at each step. This is the cornerstone of greedy correctness proofs.</li>
            <li><strong>Optimal Substructure:</strong> A problem exhibits optimal substructure if an optimal solution to the problem contains within it optimal solutions to its sub-problems.</li>
            <li><strong>Canonical Coin Denominations:</strong> A set of coin values for which the greedy change-making algorithm is guaranteed to return the minimum possible number of coins (e.g., USD coins: $\{25, 10, 5, 1\}$).</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">Trace Example: Greedy Change for 48¢ (USD: [25, 10, 5, 1])</span>
          <p class="text-sm mb-3">At each step, we greedily select the largest denomination that is less than or equal to the remaining amount.</p>
          <div class="space-y-2 font-mono text-xs md:text-sm">
            <div class="flex items-center justify-between border-b border-white/5 pb-1">
              <span>Amount: 48¢</span>
              <span class="text-gray-400">Available: [25, 10, 5, 1]</span>
              <span class="text-green-400">Pick 25¢</span>
              <span class="text-yellow-500">Remaining: 23¢</span>
            </div>
            <div class="flex items-center justify-between border-b border-white/5 pb-1">
              <span>Amount: 23¢</span>
              <span class="text-gray-400">Available: [10, 5, 1]</span>
              <span class="text-green-400">Pick 10¢</span>
              <span class="text-yellow-500">Remaining: 13¢</span>
            </div>
            <div class="flex items-center justify-between border-b border-white/5 pb-1">
              <span>Amount: 13¢</span>
              <span class="text-gray-400">Available: [10, 5, 1]</span>
              <span class="text-green-400">Pick 10¢</span>
              <span class="text-yellow-500">Remaining: 3¢</span>
            </div>
            <div class="flex items-center justify-between border-b border-white/5 pb-1">
              <span>Amount: 3¢</span>
              <span class="text-gray-400">Available: [1]</span>
              <span class="text-green-400">Pick 1¢</span>
              <span class="text-yellow-500">Remaining: 2¢</span>
            </div>
            <div class="flex items-center justify-between border-b border-white/5 pb-1">
              <span>Amount: 2¢</span>
              <span class="text-gray-400">Available: [1]</span>
              <span class="text-green-400">Pick 1¢</span>
              <span class="text-yellow-500">Remaining: 1¢</span>
            </div>
            <div class="flex items-center justify-between">
              <span>Amount: 1¢</span>
              <span class="text-gray-400">Available: [1]</span>
              <span class="text-green-400">Pick 1¢</span>
              <span class="text-yellow-500">Remaining: 0¢</span>
            </div>
          </div>
          <div class="mt-3 p-2 bg-green-500/10 border border-green-500/20 rounded text-center text-xs">
            <strong>Coins Selected:</strong> $[25, 10, 10, 1, 1, 1]$ &mdash; Total: <span class="text-accent font-bold">6 coins</span>.
          </div>
        </div>

        <div class="step-card border-l-4 border-red-500 bg-red-950/10">
          <span class="step-title">The Greedy Failure (Non-Canonical Denominations)</span>
          <p class="text-xs md:text-sm mb-2">Let denominations be $D = \{4, 3, 1\}$ and target amount be $6$.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div class="bg-black/30 p-2 rounded">
              <p class="text-red-400 font-bold border-b border-white/5 pb-1 mb-1">Greedy Path:</p>
              <p>1. Select 4 (Remains: 2)</p>
              <p>2. Select 1 (Remains: 1)</p>
              <p>3. Select 1 (Remains: 0)</p>
              <p class="mt-2 text-yellow-300">Total Coins: 3 ([4, 1, 1])</p>
            </div>
            <div class="bg-black/30 p-2 rounded">
              <p class="text-green-400 font-bold border-b border-white/5 pb-1 mb-1">Optimal Path:</p>
              <p>1. Select 3 (Remains: 3)</p>
              <p>2. Select 3 (Remains: 0)</p>
              <p class="mt-4 text-green-300">Total Coins: 2 ([3, 3])</p>
            </div>
          </div>
          <p class="text-xs mt-2 text-red-200">
            Because greedy is short-sighted and picked the 4 first, it was locked into a sub-optimal choice. Under non-canonical sets, we must utilize Dynamic Programming.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Assuming Optimality:</strong> Assuming a greedy algorithm is correct without verifying the greedy choice property. Greedy should always be backed by a mathematical proof of optimality (such as an induction or exchange argument).</li>
            <li><strong>Denomination Order:</strong> Attempting greedy change-making without sorting denominations in descending order first, resulting in infinite loops or runtime crashes.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Prove or disprove: For any coin denomination set containing $1$, Greedy Change-making will always find some valid representation of the amount, even if it is not optimal.</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1 text-gray-200 leading-relaxed">
                <strong>True.</strong> Because the set contains $1$, any remaining amount can always be fully cleared by repeatedly taking $1$-unit coins. Therefore, a solution is guaranteed to exist (feasibility is satisfied), though it may contain a sub-optimal (excessive) number of coins.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Kleinberg, J., & Tardos, É. (2005). Algorithm Design. Pearson Education.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm GreedyChange(Coins[0..m-1], Amount)
    // Coins is sorted descending: Coins[0] > Coins[1] ...
    let Result be an empty list
    for i <- 0 to m - 1 do
        while Amount >= Coins[i] do
            Amount <- Amount - Coins[i]
            Append Coins[i] to Result
            
    if Amount == 0 then
        return Result
    else
        return "No solution"
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: O(m + N) where m is the number of denominations and N is the total count of coins selected.
- Space Complexity: O(N) auxiliary space to store the selected coins.
- Reason: The nested loops execute once for each unique coin returned. If the amount is vast and denominations are small, the loop execution scale matches the output coin volume.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
import java.util.ArrayList;
import java.util.List;

public class GreedyChangeChanger {
    public static List&lt;Integer&gt; getChange(int[] coins, int amount) {
        List&lt;Integer&gt; result = new ArrayList&lt;&gt;();
        for (int coin : coins) {
            while (amount &gt;= coin) {
                amount -= coin;
                result.add(coin);
            }
        }
        return result;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function getChangeGreedy(coins: number[], amount: number): number[] {
    // Assumes coins are pre-sorted descending: [25, 10, 5, 1]
    const result: number[] = [];
    for (let i = 0; i &lt; coins.length; i++) {
        const coin = coins[i];
        while (amount &gt;= coin) {
            amount -= coin;
            result.push(coin);
        }
    }
    return result;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def get_change_greedy(coins, amount):
    # Coins must be sorted in descending order
    result = []
    for coin in coins:
        while amount &gt;= coin:
            amount -= coin
            result.append(coin)
    return result
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Greedy change-making works perfectly for US currency coins because it forms a "matroid-like" structure, ensuring local choices match the global optimum. For general coin systems, Dynamic Programming is required.
          </div>
        </div>
      </div>
    `
  },
  gre_huff: {
    id: 'gre_huff',
    title: 'Huffman Coding & Compression',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            **Huffman Coding** is a lossless data compression algorithm. The basic idea is to assign variable-length codes to input characters, with lengths based on their frequencies. The most frequent character gets the shortest code, and the least frequent character gets the longest. To ensure unambiguous decoding, the codes must be **prefix-free** (no code is a prefix of another).
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Prefix-Free Code:</strong> A set of binary codes where no codeword is a prefix of another codeword, allowing unique decoding without requiring look-ahead delimiters.</li>
            <li><strong>Huffman Tree:</strong> A binary tree built bottom-up from character frequencies, where characters are stored solely at leaf nodes, minimizing the weighted path length.</li>
            <li><strong>Entropy:</strong> The theoretical minimum average number of bits required to represent a character in a source alphabet.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">Trace Example: Tree Construction (A: 0.40, B: 0.35, C: 0.15, D: 0.10)</span>
          <p class="text-sm mb-4">Let's walk through the greedy tree-building process using a priority queue sorted by frequency.</p>
          
          <div class="space-y-4 text-xs font-mono">
            <div class="bg-black/30 p-2 rounded">
              <span class="text-accent font-bold">1. Initial Priority Queue (PQ):</span>
              <p class="mt-1">Queue: [ D(0.10), C(0.15), B(0.35), A(0.40) ]</p>
            </div>

            <div class="bg-black/30 p-2 rounded">
              <span class="text-accent font-bold">2. Merge two lowest: D and C</span>
              <p class="mt-1">Combine D(0.10) and C(0.15) into an internal parent node Node_CD with frequency 0.25.</p>
              <pre class="mt-2 text-yellow-300">
     (0.25)
     /    \
  D(0.1)  C(0.15)
              </pre>
              <p class="mt-1">Queue updated: [ Node_CD(0.25), B(0.35), A(0.40) ]</p>
            </div>

            <div class="bg-black/30 p-2 rounded">
              <span class="text-accent font-bold">3. Merge Node_CD and B</span>
              <p class="mt-1">Combine Node_CD(0.25) and B(0.35) into Node_CDB with frequency 0.60.</p>
              <pre class="mt-2 text-yellow-300">
           (0.60)
          /      \
      (0.25)    B(0.35)
      /    \
   D(0.1)  C(0.15)
              </pre>
              <p class="mt-1">Queue updated: [ A(0.40), Node_CDB(0.60) ]</p>
            </div>

            <div class="bg-green-950/20 border border-green-500/20 p-2 rounded">
              <span class="text-green-300 font-bold">4. Final Merge: A and Node_CDB</span>
              <p class="mt-1">Combine to form the Root with frequency 1.00.</p>
              <pre class="mt-2 text-green-400">
               Root (1.00)
              /           \
           A(0.40)       (0.60)
                        /      \
                    (0.25)    B(0.35)
                    /    \
                 D(0.1)  C(0.15)
              </pre>
              <p class="mt-2 text-blue-300 font-sans">Assign '0' to Left branch, '1' to Right branch:</p>
              <ul class="list-disc pl-5 mt-1 font-sans text-gray-200">
                <li><strong>A:</strong> <code>0</code> (1 bit)</li>
                <li><strong>B:</strong> <code>11</code> (2 bits)</li>
                <li><strong>C:</strong> <code>101</code> (3 bits)</li>
                <li><strong>D:</strong> <code>100</code> (3 bits)</li>
              </ul>
              <p class="mt-2 font-sans text-xs">
                <strong>Average Code Length:</strong> $(0.4 \times 1) + (0.35 \times 2) + (0.15 \times 3) + (0.10 \times 3) = \mathbf{1.85}$ bits per char. <br>
                (Saves 7.5% space compared to a fixed 2-bit representation!)
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Not Sorting Dynamically:</strong> Forgetting that after popping two nodes and merging them, the new parent node must be re-inserted into the sorted priority queue at its correct relative position.</li>
            <li><strong>Code Ambiguity:</strong> Placing characters at internal (non-leaf) nodes of the tree, which ruins the prefix-free guarantee and makes decoding impossible.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Using the tree from our trace, decode the binary stream <code>011101100</code>.</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1 text-gray-200 leading-relaxed">
                Step by step decoding starting from the root:<br>
                &bull; <code>0</code> &rarr; <strong>A</strong><br>
                &bull; <code>11</code> &rarr; <strong>B</strong><br>
                &bull; <code>101</code> &rarr; <strong>C</strong><br>
                &bull; <code>100</code> &rarr; <strong>D</strong><br>
                The decoded sequence is <strong>ABCD</strong>.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Huffman, D. A. (1952). A Method for the Construction of Minimum-Redundancy Codes. Proceedings of the IRE.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm Huffman(C[0..n-1], F[0..n-1])
    let PQ be an empty priority queue
    for i <- 0 to n - 1 do
        node <- CreateNode(C[i], F[i])
        Insert node into PQ sorted by frequency
        
    while size(PQ) > 1 do
        left <- PopMin(PQ)
        right <- PopMin(PQ)
        parent <- CreateNode(null, left.freq + right.freq)
        parent.left <- left
        parent.right <- right
        Insert parent into PQ
        
    return PopMin(PQ) // root of the Huffman tree
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: O(n log n) where n is the number of characters.
- Space Complexity: O(n) auxiliary space to store tree nodes.
- Reason: Each insertion and deletion from a min-heap or priority queue takes O(log n) time. The algorithm performs n merges, yielding a total time of O(n log n).
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
import java.util.PriorityQueue;

class HuffmanNode implements Comparable&lt;HuffmanNode&gt; {
    char character;
    int frequency;
    HuffmanNode left;
    HuffmanNode right;

    public HuffmanNode(char character, int frequency) {
        this.character = character;
        this.frequency = frequency;
    }

    @Override
    public int compareTo(HuffmanNode other) {
        return Integer.compare(this.frequency, other.frequency);
    }
}

public class HuffmanTree {
    public static HuffmanNode buildTree(char[] chars, int[] freqs) {
        PriorityQueue&lt;HuffmanNode&gt; pq = new PriorityQueue&lt;&gt;();
        for (int i = 0; i &lt; chars.length; i++) {
            pq.add(new HuffmanNode(chars[i], freqs[i]));
        }
        
        while (pq.size() &gt; 1) {
            HuffmanNode left = pq.poll();
            HuffmanNode right = pq.poll();
            HuffmanNode parent = new HuffmanNode('\0', left.frequency + right.frequency);
            parent.left = left;
            parent.right = right;
            pq.add(parent);
        }
        return pq.poll();
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
class HuffmanNode {
    char: string | null;
    freq: number;
    left: HuffmanNode | null;
    right: HuffmanNode | null;

    constructor(char: string | null, freq: number, left: HuffmanNode | null = null, right: HuffmanNode | null = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

function buildHuffmanTree(chars: string[], freqs: number[]): HuffmanNode | null {
    const pq: HuffmanNode[] = chars.map((char, index) =&gt; new HuffmanNode(char, freqs[index]));
    
    while (pq.length &gt; 1) {
        // Sort ascending to get two nodes with lowest frequencies
        pq.sort((a, b) =&gt; a.freq - b.freq);
        
        const left = pq.shift()!;
        const right = pq.shift()!;
        
        const parent = new HuffmanNode(null, left.freq + right.freq, left, right);
        pq.push(parent);
    }
    return pq[0] ?? null;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
import heapq

class HuffmanNode:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None
        
    def __lt__(self, other):
        return self.freq &lt; other.freq

def build_huffman_tree(chars, freqs):
    pq = []
    for i in range(len(chars)):
        heapq.heappush(pq, HuffmanNode(chars[i], freqs[i]))
        
    while len(pq) &gt; 1:
        left = heapq.heappop(pq)
        right = heapq.heappop(pq)
        
        parent = HuffmanNode(None, left.freq + right.freq)
        parent.left = left
        parent.right = right
        heapq.heappush(pq, parent)
        
    return heapq.heappop(pq)
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Huffman coding is the foundational block of many classic compression protocols, notably DEFLATE (used in ZIP and PNG formats), where it is paired with LZ77.
          </div>
        </div>
      </div>
    `
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
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            **Dynamic Programming (DP)** is an algorithmic paradigm that solves a complex problem by breaking it down into sub-problems, solving each sub-problem exactly once, and storing their solutions in a lookup table (tabulation or memoization). This completely avoids the exponential work of re-computing overlapping states. DP was coined by **Richard Bellman** in the 1950s.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Overlapping Sub-problems:</strong> The recursive tree of the problem repeatedly visits the exact same sub-problems rather than generating unique ones (unlike Divide & Conquer).</li>
            <li><strong>Optimal Substructure:</strong> An optimal solution to an instance of the problem can be constructed from optimal solutions to its sub-problems.</li>
            <li><strong>Tabulation (Bottom-Up):</strong> Solving sub-problems iteratively from the smallest base cases, building up a multi-dimensional grid.</li>
            <li><strong>Memoization (Top-Down):</strong> Storing recursive call returns in an auxiliary hashmap or array to prune tree branches.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">The Fibonacci Speedup Tracing ($N = 5$)</span>
          <p class="text-sm mb-4">
            While naive recursion takes $O(2^N)$ time by drawing a massive duplicate tree, bottom-up DP evaluates each state in a linear sequence.
          </p>
          <div class="glass p-4 rounded-lg border border-white/10 text-center">
            <h4 class="font-bold text-xs text-accent mb-2">1D Tabulation Array Tracing</h4>
            <div class="grid grid-cols-6 gap-2 font-mono text-sm">
              <div class="text-gray-400 border-b border-white/5">State</div>
              <div>F[0]</div><div>F[1]</div><div>F[2]</div><div>F[3]</div><div>F[4]</div>
              
              <div class="text-gray-400 text-left pl-1 border-b border-white/5">Calculated</div>
              <div class="bg-blue-500/20 rounded">0</div>
              <div class="bg-blue-500/20 rounded">1</div>
              <div class="bg-yellow-500/20 rounded">1</div>
              <div class="bg-yellow-500/20 rounded">2</div>
              <div class="bg-yellow-500/20 rounded">3</div>
            </div>
            <p class="text-xs text-left mt-3 opacity-80 font-sans">
              &bull; $F[2] = F[1] + F[0] = 1 + 0 = \mathbf{1}$<br>
              &bull; $F[3] = F[2] + F[1] = 1 + 1 = \mathbf{2}$<br>
              &bull; $F[4] = F[3] + F[2] = 2 + 1 = \mathbf{3}$
            </p>
          </div>
        </div>

        <div class="step-card border-l-4 border-purple-500 bg-purple-950/10">
          <span class="step-title">Optimization: Space Compression</span>
          <p class="text-xs md:text-sm">
            To calculate $F[i]$, we only ever need $F[i-1]$ and $F[i-2]$. We don't need to keep the entire historical list in memory. By holding just two primitive variables (<code>prev1</code> and <code>prev2</code>) and sliding them forward, we compress auxiliary space complexity from $\Theta(n)$ to <span class="text-accent font-bold">$\Theta(1)$</span>.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Missing Base Cases:</strong> Failing to initialize $F[0]$ or $F[1]$, leading to array boundary errors or infinite NaN recursive loops.</li>
            <li><strong>Subproblem Overlap Missing:</strong> Using DP for problems that do not have overlapping sub-problems (e.g. Merge Sort). Naive recursion or iterative splits are better suited here, as there's no duplicate work.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Write out the recurrence relation for the number of ways to climb $N$ steps if you can take either $1$ or $2$ steps at a time.</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <div class="mt-1 text-gray-200 leading-relaxed">
                Let $W(N)$ be the number of ways. To reach step $N$, you must have either taken $1$ step from step $N-1$, or $2$ steps from step $N-2$. <br>
                Thus, the recurrence relation is: <br>
                <strong>$W(N) = W(N-1) + W(N-2)$</strong> with base cases $W(1) = 1, W(2) = 2$. (This is isomorphic to the Fibonacci sequence!)
              </div>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Bellman, R. (1957). Dynamic Programming. Princeton University Press.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm FibonacciDP(n)
    let F[0..n] be an array
    F[0] <- 0
    F[1] <- 1
    for i <- 2 to n do
        F[i] <- F[i-1] + F[i-2]
    return F[n]
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(n)
- Space Complexity: Θ(n) (Can be reduced to Θ(1) by storing only two previous values)
- Reason: The bottom-up loop runs exactly n times, doing constant-time operations inside. This reduces naive recursion's exponential O(2^n) time to linear.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class FibonacciDP {
    public static long calculate(int n) {
        if (n &lt;= 1) return n;
        long[] F = new long[n + 1];
        F[0] = 0;
        F[1] = 1;
        for (int i = 2; i &lt;= n; i++) {
            F[i] = F[i - 1] + F[i - 2];
        }
        return F[n];
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function fibDP(n: number): number {
    if (n &lt;= 1) return n;
    const f = Array(n + 1).fill(0);
    f[0] = 0;
    f[1] = 1;
    for (let i = 2; i &lt;= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def fib_dp(n):
    if n &lt;= 1:
        return n
    f = [0] * (n + 1)
    f[0] = 0
    f[1] = 1
    for i in range(2, n + 1):
        f[i] = f[i - 1] + f[i - 2]
    return f[n]
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Dynamic programming is used in real compilers and interpreter runtimes (such as V8 regex engine memoization states) to guard against backtracking complexity attacks.
          </div>
        </div>
      </div>
    `
  },
  dyn_change: {
    id: 'dyn_change',
    title: 'Dynamic Programming: Change Making',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            While the Greedy changer works only for specific "canonical" coin sets, **Dynamic Programming** guarantees an optimal solution containing the absolute minimum number of coins for **any** denomination set. It computes the minimum coins needed for every sub-amount from $1$ up to the target, caching results.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Coin Change Recurrence:</strong> For a target amount $i$ and coin values $d_1, d_2, \dots, d_m$, the recurrence is:
              <div class="my-2 p-2 bg-black/40 rounded font-mono text-center text-yellow-300">
                $F(i) = \min_{j: i \ge d_j} \{ F(i - d_j) \} + 1$
              </div>
              with base case $F(0) = 0$.
            </li>
            <li><strong>Unreachable Amount:</strong> A state where no combination of coins can sum to the amount, represented by storing Infinity in the cache array.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">Trace Example: Coins = {1, 3, 4}, Target = 6</span>
          <p class="text-sm mb-4">Let's build the 1D DP lookup table iteratively from $0$ to $6$.</p>
          
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-center text-xs border border-white/10 font-mono">
              <thead>
                <tr class="bg-white/5">
                  <th class="p-2 border">Sub-Amount ($i$)</th>
                  <th class="p-2 border">0</th>
                  <th class="p-2 border">1</th>
                  <th class="p-2 border">2</th>
                  <th class="p-2 border">3</th>
                  <th class="p-2 border">4</th>
                  <th class="p-2 border">5</th>
                  <th class="p-2 border text-accent">6</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 border font-sans font-bold text-left">Min Coins ($F(i)$)</td>
                  <td class="p-2 border bg-blue-500/10">0</td>
                  <td class="p-2 border">1</td>
                  <td class="p-2 border">2</td>
                  <td class="p-2 border text-yellow-200">1</td>
                  <td class="p-2 border text-yellow-200">1</td>
                  <td class="p-2 border">2</td>
                  <td class="p-2 border bg-green-500/20 text-green-300 font-bold">2</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="text-xs space-y-2 leading-relaxed opacity-90">
            <p>&bull; <strong>$F(1)$:</strong> Min of $\{F(1-1)\} + 1 = F(0)+1 = 1$</p>
            <p>&bull; <strong>$F(2)$:</strong> Min of $\{F(2-1)\} + 1 = F(1)+1 = 2$</p>
            <p>&bull; <strong>$F(3)$:</strong> Min of $\{F(3-1), F(3-3)\} + 1 = \min(F(2), F(0)) + 1 = 0 + 1 = \mathbf{1}$ <span class="text-yellow-400 font-mono">(Coin used: 3)</span></p>
            <p>&bull; <strong>$F(4)$:</strong> Min of $\{F(4-1), F(4-3), F(4-4)\} + 1 = \min(F(3), F(1), F(0)) + 1 = 0 + 1 = \mathbf{1}$ <span class="text-yellow-400 font-mono">(Coin used: 4)</span></p>
            <p>&bull; <strong>$F(5)$:</strong> Min of $\{F(4), F(2), F(1)\} + 1 = \min(1, 2, 1) + 1 = 1 + 1 = \mathbf{2}$ <span class="text-yellow-400 font-mono">(Coin used: 4 or 1)</span></p>
            <p>&bull; <strong>$F(6)$:</strong> Min of $\{F(5), F(3), F(2)\} + 1 = \min(2, 1, 2) + 1 = 1 + 1 = \mathbf{2}$ <span class="text-green-400 font-semibold">(Coin used: 3 &rarr; $3+3$)</span></p>
          </div>
          <p class="text-xs text-green-400 mt-2 font-bold font-mono">Result: 2 coins (Unlike Greedy, which picks [4, 1, 1] &mdash; 3 coins!)</p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Infinite Loops with Missing Check:</strong> Forgetting to check if $i \ge d_j$ before looking up $F(i - d_j)$, which causes index out-of-bounds or looking up undefined negative array locations.</li>
            <li><strong>Not Handling Unreachable amounts:</strong> Forgetting to verify if the result remains Infinity before returning, which can result in returning misleading garbage values (e.g., Infinity + 1 causing integer overflow or NaN).</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>If we want to reconstruct the coin values instead of just returning the minimum count, what auxiliary data should we store?</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1 text-gray-200 leading-relaxed">
                Maintain a second array <code>coinUsed[0..amount]</code>. Whenever we update <code>dp[i]</code> with a smaller count using coin $d_j$, we store the coin value: <code>coinUsed[i] = d_j</code>. Once the table is filled, we backtrack from the target amount: subtract <code>coinUsed[amount]</code> from the amount iteratively until reaching 0.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Neapolitan, R. E. (2015). Foundations of Algorithms (5th Edition). Jones & Bartlett Learning.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm MinCoinsChange(Coins[0..m-1], Amount)
    let DP[0..Amount] be an array filled with Infinity
    DP[0] <- 0
    
    for i <- 1 to Amount do
        for j <- 0 to m - 1 do
            if i >= Coins[j] then
                if DP[i - Coins[j]] != Infinity then
                    DP[i] <- min(DP[i], DP[i - Coins[j]] + 1)
                    
    return if DP[Amount] == Infinity then -1 else DP[Amount]
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(N * m) where N is the amount and m is the number of coin denominations.
- Space Complexity: Θ(N) auxiliary space
- Reason: The algorithm employs two nested loops. The outer loop runs N times and the inner loop runs m times, resulting in a product-bound complexity of N * m.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
import java.util.Arrays;

public class CoinChangeDP {
    public static int getMinCoins(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        
        for (int i = 1; i &lt;= amount; i++) {
            for (int coin : coins) {
                if (i &gt;= coin) {
                    int subProblem = dp[i - coin];
                    if (subProblem != Integer.MAX_VALUE) {
                        dp[i] = Math.min(dp[i], subProblem + 1);
                    }
                }
            }
        }
        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function getMinCoins(coins: number[], amount: number): number {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base Case
    
    for (let i = 1; i &lt;= amount; i++) {
        for (let j = 0; j &lt; coins.length; j++) {
            const coin = coins[j];
            if (i &gt;= coin) {
                const subProblem = dp[i - coin];
                if (subProblem !== Infinity) {
                    dp[i] = Math.min(dp[i], subProblem + 1);
                }
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def get_min_coins(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if i &gt;= coin:
                dp[i] = min(dp[i], dp[i - coin] + 1)
                
    return dp[amount] if dp[amount] != float('inf') else -1
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
This is a standard pseudo-polynomial dynamic programming problem. If the amount is extremely large, memory scaling becomes a bottleneck.
          </div>
        </div>
      </div>
    `
  },
  dyn_warshall: {
    id: 'dyn_warshall',
    title: "Warshall's Algorithm (Transitive Closure)",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            **Warshall's Algorithm** is a dynamic programming algorithm used to compute the **transitive closure** of a directed graph. In simple terms, it determines whether there is a directed path of any length between every pair of vertices. The graph is represented as a boolean adjacency matrix.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Transitive Closure ($R$):</strong> A boolean matrix where $R[i, j] = 1$ if there exists a directed path from vertex $i$ to vertex $j$, and $0$ otherwise.</li>
            <li><strong>Intermediate Vertices:</strong> Vertices that may be traversed along a path between two nodes. Warshall's algorithm incrementally allows vertices $\{1, 2, \dots, k\}$ as potential intermediate nodes.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">The Dynamic Programming Recurrence</span>
          <p class="text-xs md:text-sm">
            Let $R^{(k)}[i, j]$ be 1 if there is a path from $i$ to $j$ using only vertices in $\{1 \dots k\}$ as intermediates.
          </p>
          <div class="bg-black/30 p-3 rounded font-mono text-center text-xs my-2 border border-white/5">
            $R^{(k)}[i, j] = R^{(k-1)}[i, j] \lor \left( R^{(k-1)}[i, k] \land R^{(k-1)}[k, j] \right)$
          </div>
          <p class="text-xs opacity-80">
            <strong>Intuition:</strong> A path exists from $i$ to $j$ using vertices up to $k$ if: <br>
            1. There was already a path using only vertices up to $k-1$ (i.e. $R^{(k-1)}[i, j]$), OR <br>
            2. There is a path from $i$ to $k$ AND a path from $k$ to $j$ using only vertices up to $k-1$.
          </p>
        </div>

        <div class="step-card">
          <span class="step-title">Worked Trace: 3-Vertex directed graph (1 &rarr; 2 &rarr; 3)</span>
          <p class="text-sm mb-3">We have edges $(1,2)$ and $(2,3)$. We want to discover that $1 \to 3$ exists via transitivity.</p>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-2 font-mono text-[11px] text-center">
            <div class="bg-black/40 p-2 rounded">
              <span class="text-yellow-400 font-bold border-b border-white/10 block mb-1">R(0) (Base)</span>
              <pre class="text-left mt-1">
[0  1  0]
[0  0  1]
[0  0  0]</pre>
            </div>
            <div class="bg-black/40 p-2 rounded">
              <span class="text-yellow-400 font-bold border-b border-white/10 block mb-1">R(1) (k=1)</span>
              <pre class="text-left mt-1">
[0  1  0]
[0  0  1]
[0  0  0]</pre>
              <span class="text-[9px] text-gray-400 block mt-1">No paths bypass vertex 1.</span>
            </div>
            <div class="bg-green-950/20 border border-green-500/20 p-2 rounded">
              <span class="text-green-400 font-bold border-b border-white/10 block mb-1">R(2) (k=2)</span>
              <pre class="text-left mt-1">
[0  1  <span class="text-green-300 font-bold">1</span>]
[0  0  1]
[0  0  0]</pre>
              <span class="text-[9px] text-green-300 block mt-1">Path 1&rarr;3 found via 2! (R[1,2]&and;R[2,3])</span>
            </div>
            <div class="bg-black/40 p-2 rounded">
              <span class="text-yellow-400 font-bold border-b border-white/10 block mb-1">R(3) (k=3)</span>
              <pre class="text-left mt-1">
[0  1  1]
[0  0  1]
[0  0  0]</pre>
              <span class="text-[9px] text-gray-400 block mt-1">Final closure matrix.</span>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Incorrect Loop Nesting Order:</strong> Placing the intermediate node loop $k$ as the inner-most loop rather than the outer-most loop. The nesting MUST be: <code>k</code> (outer), then <code>i</code> (middle), then <code>j</code> (inner). Breaking this nesting destroys the recurrence logic.</li>
            <li><strong>Matrix Deep Copy Failure:</strong> Modifying the input adjacency matrix directly in languages like JavaScript, affecting original graphs due to shallow reference sharing.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>What is the transitive closure of a directed cycle graph of size $3$ ($1 \to 2 \to 3 \to 1$)?</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1 text-gray-200 leading-relaxed">
                Since every vertex can reach every other vertex (including itself through the loop), the transitive closure is a $3 \times 3$ matrix filled entirely with 1s: <br>
                <code>[[1, 1, 1], [1, 1, 1], [1, 1, 1]]</code>.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Warshall, S. (1962). A Theorem on Boolean Matrices. Journal of the ACM.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm Warshall(A[0..n-1, 0..n-1])
    let R be copy of A
    for k <- 0 to n - 1 do
        for i <- 0 to n - 1 do
            for j <- 0 to n - 1 do
                R[i, j] <- R[i, j] or (R[i, k] and R[k, j])
    return R
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(n³)
- Space Complexity: Θ(n²) auxiliary space
- Reason: The algorithm uses three nested loops, each running exactly n times. The updates inside require only constant-time boolean logic.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class WarshallTransitive {
    public static boolean[][] transitiveClosure(boolean[][] adjMatrix) {
        int n = adjMatrix.length;
        boolean[][] R = new boolean[n][n];
        
        // Copy initial adjacency matrix
        for (int i = 0; i &lt; n; i++) {
            System.arraycopy(adjMatrix[i], 0, R[i], 0, n);
        }
        
        // Warshall's triple loop
        for (int k = 0; k &lt; n; k++) {
            for (int i = 0; i &lt; n; i++) {
                for (int j = 0; j &lt; n; j++) {
                    R[i][j] = R[i][j] || (R[i][k] && R[k][j]);
                }
            }
        }
        return R;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function warshall(adjMatrix: boolean[][]): boolean[][] {
    const n = adjMatrix.length;
    // Deep copy matrix
    const R = adjMatrix.map(row =&gt; [...row]);
    
    for (let k = 0; k &lt; n; k++) {
        for (let i = 0; i &lt; n; i++) {
            for (let j = 0; j &lt; n; j++) {
                R[i][j] = R[i][j] || (R[i][k] && R[k][j]);
            }
        }
    }
    return R;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def warshall(adj_matrix):
    n = len(adj_matrix)
    # Deep copy
    R = [row[:] for row in adj_matrix]
    
    for k in range(n):
        for i in range(n):
            for j in range(n):
                R[i][j] = R[i][j] or (R[i][k] and R[k][j])
                
    return R
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Using bitwise shifts or packed integers (where each row is a bitset) speeds up Warshall's algorithm by a factor of 32 or 64 on modern CPU architectures.
          </div>
        </div>
      </div>
    `
  },
  dyn_floyd: {
    id: 'dyn_floyd',
    title: "Floyd's Algorithm (All-Pairs Shortest Path)",
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            **Floyd's Algorithm** (also known as Floyd-Warshall) is a dynamic programming algorithm used to find the shortest path distances between **every** pair of vertices in a weighted graph. It can handle negative edge weights, as long as the graph does not contain any negative weight cycles.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>All-Pairs Shortest Path:</strong> Finding the minimum path weights between every pair of vertices $(i, j)$ in the graph, outputting a 2D distance matrix.</li>
            <li><strong>Path Relaxation:</strong> Evaluating if a path from $i$ to $j$ can be shortened by detouring through an intermediate vertex $k$.</li>
            <li><strong>Negative Cycle:</strong> A cycle in a weighted graph whose total weight sum is less than zero. Floyd's algorithm cannot resolve paths when negative cycles exist.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">The Relaxation Formula</span>
          <p class="text-xs md:text-sm">
            Let $D^{(k)}[i, j]$ represent the shortest path weight from $i$ to $j$ using only intermediate nodes up to $k$.
          </p>
          <div class="latex-output my-2 p-2 bg-black/40 rounded text-center text-yellow-300">
            $D^{(k)}[i, j] = \min \left( D^{(k-1)}[i, j], D^{(k-1)}[i, k] + D^{(k-1)}[k, j] \right)$
          </div>
          <p class="text-xs opacity-80 mt-1">
            <strong>Initialize $D^{(0)}$:</strong> Adjacency matrix of weights (0 on diagonal, $\infty$ for missing edges).
          </p>
        </div>

        <div class="step-card">
          <span class="step-title">Worked Trace: Graph Relaxation (3 nodes)</span>
          <p class="text-sm mb-3">Vertices 1, 2, 3 with edge $1 \to 2$ (wt=4), $2 \to 3$ (wt=3) and $1 \to 3$ (wt=9).</p>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-2 font-mono text-[11px] text-center">
            <div class="bg-black/40 p-2 rounded">
              <span class="text-yellow-400 font-bold border-b border-white/10 block mb-1">D(0) (Base)</span>
              <pre class="text-left mt-1">
[0   4   9]
[&infin;   0   3]
[&infin;  &infin;   0]</pre>
            </div>
            <div class="bg-black/40 p-2 rounded">
              <span class="text-yellow-400 font-bold border-b border-white/10 block mb-1">D(1) (k=1)</span>
              <pre class="text-left mt-1">
[0   4   9]
[&infin;   0   3]
[&infin;  &infin;   0]</pre>
              <span class="text-[9px] text-gray-400 block mt-1">No detours via vertex 1 help.</span>
            </div>
            <div class="bg-green-950/20 border border-green-500/20 p-2 rounded">
              <span class="text-green-400 font-bold border-b border-white/10 block mb-1">D(2) (k=2)</span>
              <pre class="text-left mt-1">
[0   4   <span class="text-green-300 font-bold">7</span>]
[&infin;   0   3]
[&infin;  &infin;   0]</pre>
              <span class="text-[9px] text-green-300 block mt-1">Path 1&rarr;3 relaxed! (4+3=7 &lt; 9)</span>
            </div>
            <div class="bg-black/40 p-2 rounded">
              <span class="text-yellow-400 font-bold border-b border-white/10 block mb-1">D(3) (k=3)</span>
              <pre class="text-left mt-1">
[0   4   7]
[&infin;   0   3]
[&infin;  &infin;   0]</pre>
              <span class="text-[9px] text-gray-400 block mt-1">Final relaxed distance matrix.</span>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Integer Overflow with Infinity:</strong> Using <code>Integer.MAX_VALUE</code> in languages like Java or C++ directly in comparisons without caution. Evaluating <code>MAX_VALUE + weight</code> wraps around to negative integers, which can trick the algorithm into registering nonexistent, highly optimal negative shortcut paths.</li>
            <li><strong>Cycle Instabilities:</strong> Running Floyd's on graphs with negative cycles without verifying the diagonal values. (If <code>D[i][i] &lt; 0</code>, a negative cycle exists).</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>How can you use the final matrix of Floyd's algorithm to detect if a graph contains a negative cycle?</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1 text-gray-200 leading-relaxed">
                Inspect the main diagonal values of the final distance matrix $D^{(n)}$. Since $D^{(0)}[i,i] = 0$, any diagonal value that drops below zero (i.e. $D^{(n)}[i,i] < 0$ for any $i$) indicates that vertex $i$ can reach itself through a negative-weight cycle.
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Floyd, R. W. (1962). Algorithm 97: Shortest Path. Communications of the ACM.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm Floyd(W[0..n-1, 0..n-1])
    let D be copy of W
    for k <- 0 to n - 1 do
        for i <- 0 to n - 1 do
            for j <- 0 to n - 1 do
                if D[i, k] != Infinity and D[k, j] != Infinity then
                    D[i, j] <- min(D[i, j], D[i, k] + D[k, j])
    return D
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(n³)
- Space Complexity: Θ(n²) auxiliary space
- Reason: The algorithm maintains a 2D distance grid of size n * n, updating weights inside a triple loop that executes n³ times.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class FloydAllPairsShortest {
    private static final double INF = Double.POSITIVE_INFINITY;

    public static double[][] floyd(double[][] weights) {
        int n = weights.length;
        double[][] D = new double[n][n];
        
        // Copy initial adjacency matrix
        for (int i = 0; i &lt; n; i++) {
            System.arraycopy(weights[i], 0, D[i], 0, n);
        }
        
        // Floyd's algorithm
        for (int k = 0; k &lt; n; k++) {
            for (int i = 0; i &lt; n; i++) {
                for (int j = 0; j &lt; n; j++) {
                    if (D[i][k] != INF && D[k][j] != INF) {
                        D[i][j] = Math.min(D[i][j], D[i][k] + D[k][j]);
                    }
                }
            }
        }
        return D;
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
function floyd(weights: number[][]): number[][] {
    const n = weights.length;
    // Deep copy weights matrix
    const D = weights.map(row =&gt; [...row]);
    
    for (let k = 0; k &lt; n; k++) {
        for (let i = 0; i &lt; n; i++) {
            for (let j = 0; j &lt; n; j++) {
                if (D[i][k] !== Infinity && D[k][j] !== Infinity) {
                    D[i][j] = Math.min(D[i][j], D[i][k] + D[k][j]);
                }
            }
        }
    }
    return D;
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def floyd(weights):
    n = len(weights)
    D = [row[:] for row in weights]
    
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if D[i][k] != float('inf') and D[k][j] != float('inf'):
                    D[i][j] = min(D[i][j], D[i][k] + D[k][j])
                    
    return D
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
Floyd's algorithm is extremely cache-friendly compared to running Dijkstra's from every vertex, as its memory access pattern is sequentially localized.
          </div>
        </div>
      </div>
    `
  },
  dyn_knap: {
    id: 'dyn_knap',
    title: 'Knapsack Problem (DP Solution)',
    notes: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Introduction</h3>
          <p class="leading-relaxed text-sm md:text-base">
            The **0/1 Knapsack Problem** challenges us to select a subset of $n$ items, each with a weight $w_i$ and value $v_i$, to maximize total value without exceeding a maximum weight capacity $W$. The "0/1" constraint means we cannot divide items; we either pick an item fully or leave it. This is NP-hard, but dynamic programming solves it in pseudo-polynomial $O(nW)$ time.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-accent mb-2">Definitions</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Knapsack Recurrence:</strong> Let $V[i, j]$ be the maximum value obtained using a subset of the first $i$ items with capacity $j$:
              <div class="my-2 p-2 bg-black/40 rounded font-mono text-center text-yellow-300">
                $V[i, j] = \max \left( V[i-1, j], v_i + V[i-1, j - w_i] \right) \quad \text{if } j \ge w_i$
              </div>
              Otherwise, if $j < w_i$, then $V[i, j] = V[i-1, j]$.
            </li>
            <li><strong>Backtracking:</strong> Scanning the solved 2D grid backwards from $V[n, W]$ to identify the precise item subset chosen.</li>
          </ul>
        </div>

        <div class="step-card">
          <span class="step-title">Worked Trace: Capacity $W=5$, 3 Items</span>
          <p class="text-[11px] mb-3">Items: 1 (wt=1, val=6), 2 (wt=2, val=10), 3 (wt=3, val=12).</p>
          <div class="overflow-x-auto">
            <table class="w-full text-center text-xs border border-white/10 font-mono">
              <thead>
                <tr class="bg-white/5 text-[10px]">
                  <th class="p-2 border">Item ($i$)</th>
                  <th class="p-2 border">Cap 0</th>
                  <th class="p-2 border">Cap 1</th>
                  <th class="p-2 border">Cap 2</th>
                  <th class="p-2 border">Cap 3</th>
                  <th class="p-2 border">Cap 4</th>
                  <th class="p-2 border text-accent font-bold">Cap 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 border font-sans text-left">0 (None)</td>
                  <td class="p-2 border">0</td><td class="p-2 border">0</td><td class="p-2 border">0</td><td class="p-2 border">0</td><td class="p-2 border">0</td><td class="p-2 border">0</td>
                </tr>
                <tr>
                  <td class="p-2 border font-sans text-left">1 (wt=1,v=6)</td>
                  <td class="p-2 border">0</td><td class="p-2 border">6</td><td class="p-2 border">6</td><td class="p-2 border">6</td><td class="p-2 border">6</td><td class="p-2 border">6</td>
                </tr>
                <tr>
                  <td class="p-2 border font-sans text-left">2 (wt=2,v=10)</td>
                  <td class="p-2 border">0</td><td class="p-2 border">6</td><td class="p-2 border">10</td><td class="p-2 border">16</td><td class="p-2 border">16</td><td class="p-2 border">16</td>
                </tr>
                <tr class="bg-green-500/10">
                  <td class="p-2 border font-sans text-left font-bold text-green-300">3 (wt=3,v=12)</td>
                  <td class="p-2 border">0</td><td class="p-2 border">6</td><td class="p-2 border">10</td><td class="p-2 border">16</td><td class="p-2 border">18</td><td class="p-2 border text-green-300 font-bold">22</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-[11px] mt-3 space-y-1">
            <p class="font-bold text-accent">How to Backtrack from V[3,5] = 22:</p>
            <p>&bull; Compare $V[3,5]$ (22) with $V[2,5]$ (16). They are different &rarr; <span class="text-green-300 font-bold">Item 3 is SELECTED</span>. Remaining capacity &rarr; $5 - 3 = 2$.</p>
            <p>&bull; Compare $V[2,2]$ (10) with $V[1,2]$ (6). They are different &rarr; <span class="text-green-300 font-bold">Item 2 is SELECTED</span>. Remaining capacity &rarr; $2 - 2 = 0$.</p>
            <p>&bull; Since remaining capacity is 0, we terminate. Items in Knapsack: <span class="text-accent font-bold">[Item 2, Item 3]</span> &mdash; Weight: 5, Max Value: 22.</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Common Mistakes</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-200">
            <li><strong>Offset Indexing OffbyOne:</strong> Blending 1-based table indices $i$ with 0-based item weight/value arrays, accidentally accessing weights using $i$ instead of $i-1$, which shifts the item properties and invalidates calculations.</li>
            <li><strong>Table Initialization:</strong> Neglecting to size the DP matrix to $N+1$ rows and $W+1$ columns, leading to crash exceptions on boundary indexes.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-2">Exercises</h3>
          <div class="bg-black/20 p-3 rounded-lg border border-white/5 text-sm">
            <p class="font-bold text-accent">Exercise 1:</p>
            <p>Can we use this dynamic programming approach to solve the Knapsack problem if item weights are fractional (e.g. 1.5kg)?</p>
            <details class="mt-2 text-xs text-gray-400">
              <summary class="cursor-pointer hover:text-white font-mono">View Solution</summary>
              <p class="mt-1 text-gray-200 leading-relaxed">
                <strong>No.</strong> Standard tabulation requires discrete contiguous indices. If weights are fractional, the grid coordinates would be non-integers, making standard table lookups impossible. (We would have to scale weights up to integers first, or use branch-and-bound optimization).
              </p>
            </details>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Further Reading</h3>
          <p class="text-xs opacity-75">
            Martello, S., & Toth, P. (1990). Knapsack Problems: Algorithms and Computer Implementations. Wiley.
          </p>
        </div>
      </div>
    `,
    code: `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="font-bold text-accent mb-2">1. Pseudocode</h4>
          <pre class="code-box">
Algorithm KnapsackDP(Weights[0..n-1], Values[0..n-1], Capacity)
    let V[0..n, 0..Capacity] be a 2D array filled with 0
    
    for i <- 1 to n do
        wt <- Weights[i - 1]
        val <- Values[i - 1]
        for j <- 0 to Capacity do
            if j >= wt then
                V[i, j] <- max(V[i-1, j], val + V[i-1, j - wt])
            else
                V[i, j] <- V[i-1, j]
                
    return V[n, Capacity]
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">2. Complexity Analysis</h4>
          <div class="code-box">
- Time Complexity: Θ(n * W) where n is the number of items and W is the capacity.
- Space Complexity: Θ(n * W) auxiliary space (Can be reduced to Θ(W) by using a 1D state array)
- Reason: The algorithm uses two nested loops of sizes n and W+1, filling the 2D grid cells iteratively.
          </div>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">3. Java</h4>
          <pre class="code-box">
public class Knapsack01DP {
    public static int solve(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int[][] V = new int[n + 1][capacity + 1];
        
        for (int i = 1; i &lt;= n; i++) {
            int wt = weights[i - 1];
            int val = values[i - 1];
            for (int j = 0; j &lt;= capacity; j++) {
                if (j &gt;= wt) {
                    V[i][j] = Math.max(V[i - 1][j], val + V[i - 1][j - wt]);
                } else {
                    V[i][j] = V[i - 1][j];
                }
            }
        }
        return V[n][capacity];
    }
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">4. JavaScript / TypeScript</h4>
          <pre class="code-box">
interface KnapsackResult {
    maxValue: number;
    itemsIndices: number[];
}

function knapsackDP(weights: number[], values: number[], capacity: number): KnapsackResult {
    const n = weights.length;
    const V = Array.from({ length: n + 1 }, () =&gt; Array(capacity + 1).fill(0));
    
    for (let i = 1; i &lt;= n; i++) {
        const wt = weights[i - 1];
        const val = values[i - 1];
        for (let j = 0; j &lt;= capacity; j++) {
            if (j &gt;= wt) {
                V[i][j] = Math.max(V[i - 1][j], val + V[i - 1][j - wt]);
            } else {
                V[i][j] = V[i - 1][j];
            }
        }
    }
    
    // Backtracking to find item selections
    let tempCap = capacity;
    const selected: number[] = [];
    for (let i = n; i &gt; 0; i--) {
        if (V[i][tempCap] !== V[i - 1][tempCap]) {
            selected.push(i - 1); // Store 0-based item index
            tempCap -= weights[i - 1];
        }
    }
    
    return {
        maxValue: V[n][capacity],
        itemsIndices: selected.reverse()
    };
}
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">5. Python</h4>
          <pre class="code-box">
def knapsack_dp(weights, values, capacity):
    n = len(weights)
    V = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        wt = weights[i - 1]
        val = values[i - 1]
        for j in range(capacity + 1):
            if j &gt;= wt:
                V[i][j] = max(V[i - 1][j], val + V[i - 1][j - wt])
            else:
                V[i][j] = V[i - 1][j]
                
    # Backtrack
    temp_cap = capacity
    selected = []
    for i in range(n, 0, -1):
        if V[i][temp_cap] != V[i - 1][temp_cap]:
            selected.append(i - 1)
            temp_cap -= weights[i - 1]
            
    return V[n][capacity], sorted(selected)
          </pre>
        </div>

        <div>
          <h4 class="font-bold text-accent mb-2">6. Notes</h4>
          <div class="code-box">
The 0/1 Knapsack is an NP-complete problem. The Dynamic Programming solution works in pseudo-polynomial time because it depends on the numerical value of the capacity W.
          </div>
        </div>
      </div>
    `
  }
};
