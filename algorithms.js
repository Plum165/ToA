/* algorithms.js - Content Database */

const ALGO_CONTENT = {
    // ============================================
    // TOPIC 1: BIG O (UPPER BOUND)
    // ============================================
    'big': {
        title: "Big O Notation (Upper Bound)",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'A function $t(n) \\in O(g(n))$ if and only if there is a positive constant $c$ and an integer $n_0$ such that <span class="font-bold text-green-400 whitespace-nowrap">$t(n) \\le c \\cdot g(n)$</span> for all $n \\ge n_0$.' +
                    '</p>' +
                    '<p class="mt-2 text-sm opacity-80">' +
                        'This represents the <strong>Worst Case</strong> scenario. It guarantees the algorithm will not take more time than this.' +
                    '</p>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-center text-accent">Visualizing Big O</h4>' +
                    '<div class="h-64"><canvas id="chart-big"></canvas></div>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Proof: $100n + 5 \\in O(n)$</span>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Goal: Find $c$ such that $100n + 5 \\le c \\cdot n$.</li>' +
                        '<li>Divide by $n$: $100 + 5/n \\le c$.</li>' +
                        '<li>Pick $n_0 = 5$, then $100 + 1 = 101$.</li>' +
                        '<li>Result: If $c = 101$, condition holds for $n \\ge 5$.</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: `
// ==========================================
// 1. LINEAR SEARCH
// ==========================================
// Worst Case: Target is at the very end.
// We look at all 'n' elements.
// Efficiency: O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// ==========================================
// 2. SORTING (Bubble Sort)
// ==========================================
// Worst Case: Array is reversed.
// Nested loops run n * n times.
// Efficiency: O(n^2) - "Evil"
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}

// ==========================================
// 3. FIBONACCI (Recursive)
// ==========================================
// Naive recursion calculates the same values repeatedly.
// Efficiency: O(2^n) - Exponential (Terrible)
function fibRecursive(n) {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// ==========================================
// 4. POWERSETS
// ==========================================
// Generating all subsets of a set.
// A set of size n has 2^n subsets.
// Efficiency: O(2^n)
function getPowerSet(arr) {
    const result = [[]];
    for (let value of arr) {
        const length = result.length;
        for (let i = 0; i < length; i++) {
            let temp = result[i].slice(0);
            temp.push(value);
            result.push(temp);
        }
    }
    return result;
}
`
    },

    // ============================================
    // TOPIC 2: OMEGA (LOWER BOUND)
    // ============================================
    'omega': {
        title: "Omega Notation Ω (Lower Bound)",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'A function $t(n) \\in \\Omega(g(n))$ if there is a positive constant $c$ and integer $n_0$ such that <span class="font-bold text-green-400 whitespace-nowrap">$t(n) \\ge c \\cdot g(n)$</span> for all $n \\ge n_0$.' +
                    '</p>' +
                    '<p class="mt-2 text-sm opacity-80">' +
                        'This represents the <strong>Best Case</strong> scenario. The algorithm takes <em>at least</em> this much time.' +
                    '</p>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-center text-accent">Visualizing Omega</h4>' +
                    '<div class="h-64"><canvas id="chart-omega"></canvas></div>' +
                '</div>' +
            '</div>',
        code: `
// ==========================================
// 1. LINEAR SEARCH
// ==========================================
// Best Case: Target is found at index 0.
// Loop runs only once.
// Efficiency: Ω(1) - Constant
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// ==========================================
// 2. SORTING (Optimized Bubble Sort)
// ==========================================
// Best Case: Array is ALREADY sorted.
// With a flag, we do one pass and stop.
// Efficiency: Ω(n)
function bubbleSortOptimized(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // swap logic...
                swapped = true;
            }
        }
        n--; 
    } while (swapped); 
}

// ==========================================
// 3. FIBONACCI (Iterative)
// ==========================================
// We solve linearly without recursion overhead.
// Efficiency: Ω(n)
function fibIterative(n) {
    let a = 0, b = 1, next;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
        next = a + b;
        a = b;
        b = next;
    }
    return b;
}

// ==========================================
// 4. POWERSETS
// ==========================================
// Even in the best case, we MUST output 2^n items.
// Efficiency: Ω(2^n)
// (Cannot be faster than the output size)
`
    },

   // ============================================
    // TOPIC: THETA (TIGHT BOUND)
    // ============================================
    'theta': {
        title: "Theta Notation Θ (Tight Bound)",
        notes: 
            '<div class="space-y-6">' +
                // --- DEFINITION ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'A function $t(n) \\in \\Theta(g(n))$ iff there are constants $c_1, c_2$ and $n_0$ such that:' +
                    '</p>' +
                    '<div class="latex-output text-center">$$c_2 g(n) \\le t(n) \\le c_1 g(n) \\quad \\forall n \\ge n_0$$</div>' +
                    '<p class="text-sm opacity-80 mt-2">' +
                        'This "sandwiches" the function. It means the algorithm behaves <strong>exactly</strong> proportional to $g(n)$ (asymptotically).' +
                    '</p>' +
                '</div>' +

                // --- KEY DIFFERENCE (FROM IMAGE) ---
                '<div class="step-card">' +
                    '<span class="step-title">Theta vs Big O</span>' +
                    '<p class="text-sm mb-2">Theta is same as Big O, except functions in this class <strong>cannot be in a more efficient class</strong>.</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong class="text-green-400">Correct:</strong> $100n + 5 \\in \\Theta(n)$ <span class="opacity-60">(Tight bound)</span></li>' +
                        '<li><strong class="text-yellow-400">Correct:</strong> $100n + 5 \\in O(n^2)$ <span class="opacity-60">(Loose upper bound)</span></li>' +
                        '<li><strong class="text-red-400">Incorrect:</strong> $100n + 5 \\notin \\Theta(n^2)$</li>' +
                    '</ul>' +
                    '<div class="warn-box mt-3">' +
                        '<strong>Why not $\\Theta(n^2)$?</strong><br>' +
                        'Although $n^2$ is an upper bound ($O$), it grows <em>much faster</em> than $100n$. We cannot find a constant $c_2$ to make $n^2$ a lower bound. Thus, it is not a tight bound.' +
                    '</div>' +
                '</div>' +

                // --- HOW TO CALCULATE ---
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">How to Determine $\\Theta$</h4>' +
                    '<ol class="list-decimal pl-5 space-y-2 text-sm">' +
                        '<li><strong>Drop low-order terms:</strong> $3n^2 + 10n + 50 \\to 3n^2$</li>' +
                        '<li><strong>Drop constants:</strong> $3n^2 \\to n^2$</li>' +
                        '<li><strong>Result:</strong> $\\Theta(n^2)$</li>' +
                        '<li><strong>Verify:</strong> Ensure the limit of $\\frac{t(n)}{g(n)}$ is a constant $> 0$.</li>' +
                    '</ol>' +
                '</div>' +

                // --- QUESTIONS ---
                '<div>' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Test Yourself</h4>' +
                    '<div class="space-y-2 text-sm">' +
                        '<p><strong>Q1:</strong> Is $n^2 + n \\in \\Theta(n)$? <span class="text-red-400 font-bold ml-2">NO</span> (Grows too fast)</p>' +
                        '<p><strong>Q2:</strong> Is $n \\log n \\in O(n^2)$? <span class="text-green-400 font-bold ml-2">YES</span> (Upper bound holds)</p>' +
                        '<p><strong>Q3:</strong> Is $n \\log n \\in \\Theta(n^2)$? <span class="text-red-400 font-bold ml-2">NO</span> (Not a tight bound)</p>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">THETA EXAMPLES</div>' +
                    
                    // --- 1. Summation ---
                    '<span class="code-label">1. Summing an Array</span>' +
                    '<div class="code-box">' +
                        'int sum(int[] arr) {\n' +
                        '    int total = 0;\n' +
                        '    // Loop runs EXACTLY n times\n' +
                        '    for(int i = 0; i < arr.length; i++) {\n' +
                        '        total += arr[i];\n' +
                        '    }\n' +
                        '    return total;\n' +
                        '}\n' +
                        '// Best Case: n steps\n' +
                        '// Worst Case: n steps\n' +
                        '// Conclusion: Theta(n)' +
                    '</div>' +

                    // --- 2. Selection Sort ---
                    '<span class="code-label">2. Selection Sort (Quadratic)</span>' +
                    '<div class="code-box">' +
                        'void selectionSort(int[] arr) {\n' +
                        '    int n = arr.length;\n' +
                        '    for (int i = 0; i < n; i++) {\n' +
                        '        int min = i;\n' +
                        '        // Inner loop ALWAYS runs n-1-i times\n' +
                        '        // regardless of data values\n' +
                        '        for (int j = i+1; j < n; j++) {\n' +
                        '            if (arr[j] < arr[min]) min = j;\n' +
                        '        }\n' +
                        '        swap(arr, i, min);\n' +
                        '    }\n' +
                        '}\n' +
                        '// Comparisions = n(n-1)/2\n' +
                        '// Conclusion: Theta(n^2)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC 4: COMPARISON TABLE
    // ============================================
    'comp': {
        title: "Comparing Efficiency Classes",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<p class="mb-4 leading-relaxed">We compare how the number of operations grows as input $n$ increases.</p>' +
                    '<div class="glass p-4 rounded-lg border-l-4 border-green-500">' +
                        '<h4 class="font-bold text-lg mb-2">Efficiency Hierarchy</h4>' +
                        '<ul class="space-y-2 text-sm">' +
                            '<li class="flex items-center gap-2">' +
                                '<span class="badge bg-green-500/20 text-green-400 px-2 rounded text-xs uppercase">Best</span>' +
                                '<span><strong>Logarithmic</strong> <span class="whitespace-nowrap">($\\log_2 n$)</span></span>' +
                            '</li>' +
                            '<li class="flex items-center gap-2">' +
                                '<span class="badge bg-blue-500/20 text-blue-400 px-2 rounded text-xs uppercase">Good</span>' +
                                '<span><strong>Linear</strong> <span class="whitespace-nowrap">($n$)</span></span>' +
                            '</li>' +
                            '<li class="flex items-center gap-2">' +
                                '<span class="badge bg-cyan-500/20 text-cyan-400 px-2 rounded text-xs uppercase">Typical</span>' +
                                '<span><strong>Log-Linear</strong> <span class="whitespace-nowrap">($n \\log n$)</span></span>' +
                            '</li>' +
                            '<li class="flex items-center gap-2">' +
                                '<span class="badge bg-orange-500/20 text-orange-400 px-2 rounded text-xs uppercase">Evil</span>' +
                                '<span><strong>Quadratic</strong> <span class="whitespace-nowrap">($n^2$)</span></span>' +
                            '</li>' +
                            '<li class="flex items-center gap-2">' +
                                '<span class="badge bg-red-500/20 text-red-400 px-2 rounded text-xs uppercase">Worst</span>' +
                                '<span><strong>Exponential</strong> <span class="whitespace-nowrap">($2^n$)</span></span>' +
                            '</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
                '<div class="w-full overflow-x-auto rounded-lg border border-white/10 bg-black/20">' +
                    '<table class="w-full text-center text-xs md:text-sm font-mono whitespace-nowrap">' +
                        '<thead>' +
                            '<tr class="bg-white/10 text-white font-bold">' +
                                '<th class="p-3">n</th>' +
                                '<th class="p-3 text-green-400">log₂n</th>' +
                                '<th class="p-3 text-blue-400">n</th>' +
                                '<th class="p-3 text-cyan-400">nlog₂n</th>' +
                                '<th class="p-3 text-orange-400">n²</th>' +
                                '<th class="p-3 text-orange-500">n³</th>' +
                                '<th class="p-3 text-red-400">2ⁿ</th>' +
                                '<th class="p-3 text-red-600">n!</th>' +
                            '</tr>' +
                        '</thead>' +
                        '<tbody class="divide-y divide-white/5 opacity-90">' +
                            '<tr><td class="p-2 font-bold">10</td><td class="p-2">3.3</td><td class="p-2">10</td><td class="p-2">33</td><td class="p-2">100</td><td class="p-2">1,000</td><td class="p-2">1,024</td><td class="p-2">3.6M</td></tr>' +
                            '<tr><td class="p-2 font-bold">100</td><td class="p-2">6.6</td><td class="p-2">100</td><td class="p-2">664</td><td class="p-2">10k</td><td class="p-2">1M</td><td class="p-2">1E+30</td><td class="p-2">Huge</td></tr>' +
                            '<tr><td class="p-2 font-bold">1k</td><td class="p-2">10</td><td class="p-2">1k</td><td class="p-2">9.9k</td><td class="p-2">1M</td><td class="p-2">1B</td><td class="p-2">Huge</td><td class="p-2">Huge</td></tr>' +
                            '<tr><td class="p-2 font-bold">10k</td><td class="p-2">13</td><td class="p-2">10k</td><td class="p-2">130k</td><td class="p-2">100M</td><td class="p-2">1T</td><td class="p-2">-</td><td class="p-2">-</td></tr>' +
                        '</tbody>' +
                    '</table>' +
                '</div>' +
                '<p class="text-xs text-center opacity-60 mt-2">*Values approximate. "Huge" exceeds 1E+100.</p>' +
            '</div>',
        code: `
/* 
   SUMMARY OF ALGORITHM CLASSES
   ----------------------------
*/

// ==========================================
// 1. LINEAR SEARCH
// ==========================================
// Best: Ω(1)      (Found immediately)
// Worst: O(n)     (Found at end)
// Avg:   Θ(n)

// ==========================================
// 2. SORTING
// ==========================================
// Merge Sort:     Θ(n log n)  (Consistent, Good)
// Bubble Sort:    O(n^2)      (Simple, Bad)
// Bogosort:       O(n!)       (Random shuffling, Terrible)

// ==========================================
// 3. FIBONACCI
// ==========================================
// Iterative:      Θ(n)        (Linear)
// Recursive:      O(2^n)      (Exponential)
// Difference:     Calculating Fib(50)
//                 Iterative: < 1 millisecond
//                 Recursive: ~ 2 minutes

// ==========================================
// 4. POWERSETS
// ==========================================
// Logic:          Generating all subsets
// Complexity:     Θ(2^n)
// Scale:          Set of 20 items = 1,000,000 operations
`
    },
    // ============================================
    // TOPIC: SUMMATION (SEQUENTIAL EFFICIENCY)
    // ============================================
    'sums': {
        title: "Efficiency: Summation (Sequential)",
        notes: 
            '<div class="space-y-6">' +
                // --- INTRO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Analyzing Loops</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'For non-recursive algorithms (loops), we measure efficiency by counting the <strong>Basic Operation</strong> using summation. We set up a sum representing how many times the loop body executes.' +
                    '</p>' +
                '</div>' +

                // --- EXPANDED RULES (R1 - R5) ---
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-center text-accent">Essential Math Rules</h4>' +
                    '<ul class="space-y-3 text-sm font-mono">' +
                        '<li><strong>R1 (Constant):</strong> $\\sum_{i=l}^{u} 1 = (u - l + 1)$<br><span class="opacity-60 text-xs">// e.g. sum of 1 from 1 to n is n</span></li>' +
                        '<li><strong>R2 (Linear):</strong> $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} \\approx \\frac{1}{2}n^2$<br><span class="opacity-60 text-xs">// Arithmetic Series (1+2+3...+n)</span></li>' +
                        '<li><strong>R3 (Squares):</strong> $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6} \\approx \\frac{1}{3}n^3$</li>' +
                        '<li><strong>R4 (Geometric):</strong> $\\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$<br><span class="opacity-60 text-xs">// Powers of 2 (1+2+4+8...)</span></li>' +
                        '<li><strong>R5 (Additivity):</strong> $\\sum (ca_i + b_i) = c\\sum a_i + \\sum b_i$<br><span class="opacity-60 text-xs">// You can split sums and pull out constants</span></li>' +
                    '</ul>' +
                '</div>' +

                // --- DETAILED STEP-BY-STEP EXAMPLE ---
                '<div class="step-card">' +
                    '<span class="step-title">Worked Example: Dependent Loops</span>' +
                    '<div class="code-box text-xs mb-2">for i = 0 to n-1 do<br>  for j = 0 to i do<br>    print(j)</div>' +
                    '<p class="text-sm mb-2">The inner loop runs $i+1$ times. The outer loop runs $n$ times.</p>' +
                    '<p class="text-sm"><strong>Step 1:</strong> Set up sum.</p>' +
                    '<div class="latex-output text-center">$$ \\sum_{i=0}^{n-1} (i+1) $$</div>' +
                    '<p class="text-sm"><strong>Step 2:</strong> Split using R5.</p>' +
                    '<div class="latex-output text-center">$$ \\sum_{i=0}^{n-1} i + \\sum_{i=0}^{n-1} 1 $$</div>' +
                    '<p class="text-sm"><strong>Step 3:</strong> Apply R2 and R1.</p>' +
                    '<div class="latex-output text-center">$$ \\frac{(n-1)n}{2} + n = \\frac{n^2 - n + 2n}{2} \\approx \\Theta(n^2) $$</div>' +
                '</div>' +

                // --- 3 EXERCISES ---
                '<div>' +
                    '<h4 class="font-bold text-sm mb-4 text-accent">Practice Exercises</h4>' +
                    
                    // Ex 1
                    '<div class="mb-4 border-b border-white/10 pb-4">' +
                        '<p class="font-bold text-sm text-green-400">Exercise 1: Simple Loop</p>' +
                        '<p class="text-sm font-mono mb-2">for k = 1 to n do: x = x + 5</p>' +
                        '<details class="bg-black/20 p-2 rounded cursor-pointer"><summary class="text-xs text-accent opacity-80 hover:opacity-100">Show Solution</summary>' +
                        '<p class="mt-2 text-sm">$\\sum_{k=1}^{n} 1 = n$. <br><strong>Complexity:</strong> $\\Theta(n)$</p></details>' +
                    '</div>' +

                    // Ex 2
                    '<div class="mb-4 border-b border-white/10 pb-4">' +
                        '<p class="font-bold text-sm text-yellow-400">Exercise 2: Independent Loops</p>' +
                        '<p class="text-sm font-mono mb-2">for i = 1 to n do:<br>  for j = 1 to n do:<br>    x++</p>' +
                        '<details class="bg-black/20 p-2 rounded cursor-pointer"><summary class="text-xs text-accent opacity-80 hover:opacity-100">Show Solution</summary>' +
                        '<p class="mt-2 text-sm">$\\sum_{i=1}^{n} \\sum_{j=1}^{n} 1 = \\sum_{i=1}^{n} n = n \\cdot n = n^2$. <br><strong>Complexity:</strong> $\\Theta(n^2)$</p></details>' +
                    '</div>' +

                    // Ex 3
                    '<div class="mb-4">' +
                        '<p class="font-bold text-sm text-red-400">Exercise 3: "Down to" Loop</p>' +
                        '<p class="text-sm font-mono mb-2">for i = n downto 1 do:<br>  for j = 1 to i do:<br>    x++</p>' +
                        '<details class="bg-black/20 p-2 rounded cursor-pointer"><summary class="text-xs text-accent opacity-80 hover:opacity-100">Show Solution</summary>' +
                        '<p class="mt-2 text-sm">Even though i goes down, the logic is the same. <br>When i=n, inner runs n. When i=1, inner runs 1.<br>Sum is $n + (n-1) + ... + 1 = \\frac{n(n+1)}{2}$. <br><strong>Complexity:</strong> $\\Theta(n^2)$</p></details>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">MATRIX ADDITION ANALYSIS</div>' +
                    
                    '<span class="code-label">Algorithm Code</span>' +
                    '<div class="code-box">' +
                        '// Adding two n x n matrices\n' +
                        'void addMatrix(int[][] A, int[][] B, int n) {\n' +
                        '    for (int i = 0; i < n; i++) {\n' +
                        '        for (int j = 0; j < n; j++) {\n' +
                        '            C[i][j] = A[i][j] + B[i][j]; // Basic Op\n' +
                        '        }\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Formal Derivation</span>' +
                    '<div class="code-box">' +
                        '// 1. Setup Summation\n' +
                        '// Outer runs 0 to n-1. Inner runs 0 to n-1.\n' +
                        '// Cost is 1 per inner step.\n' +
                        '// Sum(i=0 to n-1) [ Sum(j=0 to n-1) [ 1 ] ]\n\n' +
                        '// 2. Solve Inner\n' +
                        '// Sum(j=0 to n-1) of 1 = (n-1 - 0 + 1) = n\n\n' +
                        '// 3. Solve Outer\n' +
                        '// Sum(i=0 to n-1) of n\n' +
                        '// = n * (n - 0) = n^2\n\n' +
                        '// Conclusion: Theta(n^2)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },


   // ============================================
    // TOPIC: RECURRENCE RELATIONS & MASTER THEOREM
    // ============================================
    'recurrence': {
        title: "Efficiency: Recurrence Relations",
        notes: 
            '<div class="space-y-6">' +
                // --- PART 1: GENERAL THEORY ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Analyzing Recursive Algorithms</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'For recursive algorithms, we cannot just use summation. We use <strong>Recurrence Relations</strong> defined by $T(n)$ in terms of itself with smaller inputs.' +
                    '</p>' +
                '</div>' +
                
                // --- MASTER THEOREM DEFINITION ---
                '<div class="step-card">' +
                    '<span class="step-title">The Master Theorem</span>' +
                    '<p class="text-sm mb-2">Used for Divide & Conquer relations of form: $T(n) = aT(n/b) + f(n)$</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong>$a$:</strong> Number of sub-problems (recursive calls).</li>' +
                        '<li><strong>$b$:</strong> Factor by which problem size splits.</li>' +
                        '<li><strong>$d$:</strong> Driver function power ($f(n) \\in \\Theta(n^d)$).</li>' +
                    '</ul>' +
                    '<div class="mt-4 p-3 bg-white/5 rounded text-sm font-mono">' +
                        '1. If $a < b^d$ : $\\Theta(n^d)$ (Driver dominates)<br>' +
                        '2. If $a = b^d$ : $\\Theta(n^d \\log n)$ (Balanced)<br>' +
                        '3. If $a > b^d$ : $\\Theta(n^{\\log_b a})$ (Roots dominate)' +
                    '</div>' +
                '</div>' +

                // --- PART 2: QUESTION 4 SCENARIO ---
                '<div class="glass p-4 rounded-lg border-l-4 border-yellow-500">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Exam Application (Question 4)</h4>' +
                    '<p class="text-sm"><strong>Scenario:</strong> You write a Divide & Conquer algorithm to sum an array of size $n$.</p>' +
                    '<p class="text-sm mt-2"><strong>The Claim:</strong> A classmate argues this runs in $\\log n$ time because it splits in half like Binary Search.</p>' +
                    '<p class="text-sm mt-2 text-red-300"><strong>Task:</strong> Prove them WRONG by solving the recurrence.</p>' +
                '</div>' +

                // --- STEP 1: DEFINE ---
                '<div>' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Step 1: Define Recurrence</h4>' +
                    '<p class="text-sm leading-relaxed">To sum $n$ elements, we split into 2 halves. We solve recursively ($2 \\times A(n/2)$), then perform 1 addition to combine.</p>' +
                    '<div class="latex-output text-center">$$A(n) = 2A(n/2) + 1$$</div>' +
                '</div>' +

                // --- STEP 2: SOLVE ---
                '<div>' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Step 2: Solve (Master Theorem)</h4>' +
                    '<p class="text-sm mt-2 mb-1">Identify parameters from $A(n) = 2A(n/2) + 1$:</p>' +
                    '<ul class="list-disc pl-5 space-y-1 text-sm font-mono">' +
                        '<li>$a = 2$ (2 calls)</li>' +
                        '<li>$b = 2$ (Size / 2)</li>' +
                        '<li>$f(n) = 1 = n^0 \\implies d = 0$</li>' +
                    '</ul>' +

                    '<p class="text-sm mt-3 mb-1"><strong>Compare $a$ vs $b^d$:</strong></p>' +
                    '<div class="latex-output text-center">$$2 \\quad \\text{vs} \\quad 2^0 (=1)$$</div>' +
                    '<p class="text-sm text-center mt-1">Since $2 > 1$, Case 3 applies (Roots dominate).</p>' +
                '</div>' +

                // --- CONCLUSION ---
                '<div class="glass p-4 rounded-lg border border-red-500/30">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Final Calculation</h4>' +
                    '<div class="latex-output text-center">$$A(n) \\in \\Theta(n^{\\log_b a}) = \\Theta(n^{\\log_2 2}) = \\Theta(n^1) = \\Theta(n)$$</div>' +
                    '<p class="text-sm mt-2"><strong>Conclusion:</strong> The complexity is $\\Theta(n)$ (Linear). The classmate is <strong>WRONG</strong>. Splitting the problem doesn\'t help if you still have to process every single element.</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- EXAMPLE 1 ---
                '<div>' +
                    '<div class="code-section-title">1. FACTORIAL (Linear Recursion)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm F(n)\n' +
                        '  if n == 0 return 1\n' +
                        '  return F(n-1) * n' +
                    '</div>' +

                    '<span class="code-label">Java Code</span>' +
                    '<div class="code-box">' +
                        'int factorial(int n) {\n' +
                        '    if (n == 0) return 1;\n' +
                        '    return factorial(n - 1) * n;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">JavaScript Code (Analysis)</span>' +
                    '<div class="code-box">' +
                        '// Recurrence Relation:\n' +
                        '// M(n) = M(n-1) + 1\n' +
                        '// M(0) = 0\n' +
                        '// By Backward Substitution:\n' +
                        '// M(n) = [M(n-2)+1] + 1 = M(n-2) + 2\n' +
                        '// ... = M(n-k) + k\n' +
                        '// At base case k=n: M(0) + n = n\n' +
                        '// Complexity: Theta(n)' +
                    '</div>' +
                '</div>' +

                // --- EXAMPLE 2 ---
                '<div>' +
                    '<div class="code-section-title">2. MERGE SORT (Divide & Conquer)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm MergeSort(A)\n' +
                        '  if A.size > 1\n' +
                        '    copy A[0..n/2] to B\n' +
                        '    copy A[n/2..n] to C\n' +
                        '    MergeSort(B)\n' +
                        '    MergeSort(C)\n' +
                        '    Merge(B, C, A)' +
                    '</div>' +

                    '<span class="code-label">Java Code</span>' +
                    '<div class="code-box">' +
                        'void mergeSort(int[] arr) {\n' +
                        '    if (arr.length < 2) return;\n' +
                        '    int mid = arr.length / 2;\n' +
                        '    // ... split array logic ...\n' +
                        '    mergeSort(left);\n' +
                        '    mergeSort(right);\n' +
                        '    merge(left, right, arr);\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">JavaScript Code (Analysis)</span>' +
                    '<div class="code-box">' +
                        '// Relation: T(n) = 2T(n/2) + c*n\n' +
                        '// Here: a=2, b=2, d=1 (since merge is linear)\n' +
                        '// Compare a vs b^d:\n' +
                        '// 2 vs 2^1  =>  2 = 2\n' +
                        '// Case 2 of Master Theorem applies.\n' +
                        '// Complexity: Theta(n^d log n) = Theta(n log n)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: BRUTE FORCE INTRO & CLOSEST PAIR
    // ============================================
   // ============================================
    // TOPIC: BRUTE FORCE INTRO & CLOSEST PAIR
    // ============================================
    'brute_intro': {
        title: "Brute Force: Introduction & Closest Pair",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Brute Force is a straightforward approach directly based on the problem statement and definitions. It implies a lack of sophistication ("Just do it").' +
                    '</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm opacity-80">' +
                        '<li><strong>Strengths:</strong> Wide applicability, simple to implement, yields reasonable algorithms for small tasks.</li>' +
                        '<li><strong>Weaknesses:</strong> Rarely produces efficient algorithms, often infeasibly slow ($O(n!)$ or $O(2^n)$).</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">The Closest Pair Problem</h4>' +
                    '<p class="text-sm">Find the two points that are closest together in a set of $n$ 2D points $P_1 = (x_1, y_1) \\dots P_n$.</p>' +
                    '<p class="text-sm mt-2"><strong>Brute Force Strategy:</strong> Calculate distance between EVERY pair of points and keep the minimum.</p>' +
                    '<p class="text-sm mt-2 text-red-300">Efficiency: $\\Theta(n^2)$</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">CLOSEST PAIR ALGORITHM</div>' +
                    
                    // --- 1. PSEUDOCODE ---
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'dmin <- infinity\n' +
                        'for i <- 1 to n-1 do\n' +
                        '  for j <- i+1 to n do\n' +
                        '    d <- sqrt( (xi - xj)^2 + (yi - yj)^2 )\n' +
                        '    if d < dmin\n' +
                        '      dmin <- d\n' +
                        '      index1 <- i\n' +
                        '      index2 <- j\n' +
                        'return index1, index2' +
                    '</div>' +

                    // --- 2. JAVA ---
                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'public double findClosest(Point[] points) {\n' +
                        '    double minDist = Double.MAX_VALUE;\n' +
                        '    for (int i = 0; i < points.length; i++) {\n' +
                        '        for (int j = i + 1; j < points.length; j++) {\n' +
                        '            double dist = points[i].distance(points[j]);\n' +
                        '            if (dist < minDist) {\n' +
                        '                minDist = dist;\n' +
                        '            }\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return minDist;\n' +
                        '}' +
                    '</div>' +

                    // --- 3. JAVASCRIPT ---
                    '<span class="code-label">JavaScript (Live Logic)</span>' +
                    '<div class="code-box">' +
                        'function bruteClosestPair(points) {\n' +
                        '    let minInfo = { p1: null, p2: null, dist: Infinity };\n' +
                        '    \n' +
                        '    // Compare every point with every other point\n' +
                        '    for(let i = 0; i < points.length; i++){\n' +
                        '        for(let j = i + 1; j < points.length; j++){\n' +
                        '            let dx = points[i].x - points[j].x;\n' +
                        '            let dy = points[i].y - points[j].y;\n' +
                        '            let d = Math.sqrt(dx*dx + dy*dy);\n' +
                        '            \n' +
                        '            if(d < minInfo.dist){\n' +
                        '                minInfo.dist = d;\n' +
                        '                minInfo.p1 = points[i];\n' +
                        '                minInfo.p2 = points[j];\n' +
                        '            }\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return minInfo;\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: BRUTE FORCE STRING MATCHING
    // ============================================
    'bf_string': {
        title: "Brute Force: String Matching",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Introduction to Brute Force</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Brute Force is a straightforward approach directly based on the problem statement. It implies a lack of sophistication, but it is often the quickest to implement and applicable to a wide range of problems.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">The String Matching Problem</span>' +
                    '<p class="text-sm mb-2">Given a text $T$ (n characters) and a pattern $P$ (m characters), find the index of the first occurrence of $P$ in $T$.</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong>Method:</strong> Align pattern at the beginning of the text. Compare characters from left to right.</li>' +
                        '<li><strong>Mismatch:</strong> As soon as a mismatch occurs, shift the pattern <strong>one position</strong> to the right.</li>' +
                        '<li><strong>Repeat:</strong> Continue until a match is found or the pattern reaches the end ($n-m$).</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-center text-accent">Efficiency Analysis</h4>' +
                    '<p class="text-sm opacity-90 mb-2"><strong>Worst Case:</strong> The search string matches on every character except the last, for every iteration.</p>' +
                    '<ul class="space-y-1 text-sm font-mono">' +
                        '<li>Comparisons: $m(n - m + 1)$</li>' +
                        '<li>Complexity: $\\Theta(nm)$</li>' +
                        '<li>Average Case (Natural Language): $\\Theta(n)$</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- EXAMPLE 1: String Match ---
                '<div>' +
                    '<div class="code-section-title">1. STRING MATCHING</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm BruteForceStringMatch(T[0..n-1], P[0..m-1])\n' +
                        '  // Align pattern at every possible starting index i\n' +
                        '  for i <- 0 to n - m do\n' +
                        '    j <- 0\n' +
                        '    // Compare characters while they match\n' +
                        '    while j < m AND P[j] == T[i + j] do\n' +
                        '      j <- j + 1\n' +
                        '    if j == m return i\n' +
                        '  return -1' +
                    '</div>' +

                    '<span class="code-label">Java Code</span>' +
                    '<div class="code-box">' +
                        'int bruteForceSearch(String txt, String pat) {\n' +
                        '    int n = txt.length();\n' +
                        '    int m = pat.length();\n' +
                        '    \n' +
                        '    for (int i = 0; i <= n - m; i++) {\n' +
                        '        int j = 0;\n' +
                        '        while (j < m && txt.charAt(i + j) == pat.charAt(j)) {\n' +
                        '            j++;\n' +
                        '        }\n' +
                        '        if (j == m) return i; // Found at index i\n' +
                        '    }\n' +
                        '    return -1;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Outer loop runs (n - m + 1) times.\n' +
                        '// Inner while loop runs at most m times.\n' +
                        '// Total comparisons = m * (n - m + 1)\n' +
                        '// Since n usually >> m, we drop lower terms.\n' +
                        '// Complexity: O(n * m)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: GEOMETRIC PROBLEMS
    // ============================================
    'bf_geom': {
        title: "Brute Force: Geometric Problems",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Closest Pair & Convex Hull</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Geometric algorithms deal with points, lines, and polygons. Brute force approaches here are conceptually simple but often computationally expensive ($O(n^2)$ or $O(n^3)$).' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Closest Pair Problem</span>' +
                    '<p class="text-sm">Find the two points that are closest together in a set of $n$ 2D points.</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Calculate distance between every pair of distinct points.</li>' +
                        '<li>Compute distance using Euclidean formula: $d = \\sqrt{(x_i-x_j)^2 + (y_i-y_j)^2}$.</li>' +
                        '<li>Keep track of the minimum distance found so far.</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Convex Hull Problem</span>' +
                    '<p class="text-sm">Find the smallest convex polygon containing all $n$ points (like a rubber band snapped around pegs).</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li><strong>Algorithm:</strong> For every pair of points, draw a line.</li>' +
                        '<li>Check if all other points lie on the same side of that line.</li>' +
                        '<li>If yes, that line segment is part of the Convex Hull boundary.</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- EXAMPLE 1: Closest Pair ---
                '<div>' +
                    '<div class="code-section-title">1. CLOSEST PAIR (Quadratic)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm ClosestPair(P)\n' +
                        '  dmin <- infinity\n' +
                        '  for i <- 1 to n-1 do\n' +
                        '    for j <- i+1 to n do\n' +
                        '      d <- sqrt((xi - xj)^2 + (yi - yj)^2)\n' +
                        '      if d < dmin\n' +
                        '        dmin <- d; index1 <- i; index2 <- j\n' +
                        '  return index1, index2' +
                    '</div>' +

                    '<span class="code-label">Java Code</span>' +
                    '<div class="code-box">' +
                        'double closestPair(Point[] p) {\n' +
                        '    double min = Double.MAX_VALUE;\n' +
                        '    int n = p.length;\n' +
                        '    for (int i = 0; i < n - 1; i++) {\n' +
                        '        for (int j = i + 1; j < n; j++) {\n' +
                        '            double dist = p[i].distanceTo(p[j]);\n' +
                        '            if (dist < min) min = dist;\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return min;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Basic Operation: Distance Calculation\n' +
                        '// Summation: Sum(i=1 to n-1) of [ (n) - (i+1) + 1 ]\n' +
                        '// = (n-1) + (n-2) + ... + 1\n' +
                        '// = n(n-1)/2\n' +
                        '// Complexity: Theta(n^2)' +
                    '</div>' +
                '</div>' +

                // --- EXAMPLE 2: Convex Hull ---
                '<div>' +
                    '<div class="code-section-title">2. CONVEX HULL (Cubic)</div>' +
                    
                    '<span class="code-label">Pseudocode Logic</span>' +
                    '<div class="code-box">' +
                        'For each pair of points (p1, p2):\n' +
                        '  Determine a line equation ax + by = c\n' +
                        '  Check all other n-2 points:\n' +
                        '    Do they lie on the same side of line?\n' +
                        '  If True -> Add (p1, p2) to hull boundary.' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// 1. Pairs of points: O(n^2)\n' +
                        '// 2. Checking all other points: O(n)\n' +
                        '// Total Efficiency: O(n^2) * O(n) = O(n^3)\n' +
                        '// This is very slow. Better algorithms exist (e.g., QuickHull).' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: EXHAUSTIVE SEARCH
    // ============================================
    'bf_exhaust': {
        title: "Brute Force: Exhaustive Search",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Discrete Optimization Problems</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Exhaustive Search generates <strong>every possible candidate solution</strong>, evaluates them, and picks the best one. It is typically used for combinatorial problems involving permutations ($n!$) or subsets ($2^n$).' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Travelling Salesman Problem (TSP)</span>' +
                    '<p class="text-sm">Find the shortest tour that visits every city exactly once and returns to the start.</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li><strong>Logic:</strong> Generate all permutations of cities.</li>' +
                        '<li><strong>Cost:</strong> $(n-1)! / 2$.</li>' +
                        '<li><strong>Complexity:</strong> $\\Theta(n!)$ - Extremely slow (Factorial).</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Knapsack Problem</span>' +
                    '<p class="text-sm">Given $n$ items with weights and values, find the most valuable subset that fits in capacity $W$.</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li><strong>Logic:</strong> Generate all subsets (Power Set).</li>' +
                        '<li><strong>Cost:</strong> $2^n$ subsets.</li>' +
                        '<li><strong>Complexity:</strong> $\\Omega(2^n)$ - Exponential.</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- EXAMPLE 1: TSP ---
                '<div>' +
                    '<div class="code-section-title">1. TSP (Permutations)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm TSP(Cities C)\n' +
                        '  min_dist <- infinity\n' +
                        '  best_path <- null\n' +
                        '  foreach permutation P of C do\n' +
                        '    if cost(P) < min_dist\n' +
                        '      min_dist <- cost(P)\n' +
                        '      best_path <- P\n' +
                        '  return best_path' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// n = 20 cities\n' +
                        '// (n-1)! / 2 permutations\n' +
                        '// 19! / 2 is approx 6 x 10^16 operations.\n' +
                        '// If 1 billion ops/sec => 2000 years to solve.' +
                    '</div>' +
                '</div>' +

                // --- EXAMPLE 2: Knapsack ---
                '<div>' +
                    '<div class="code-section-title">2. KNAPSACK (Subsets)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Knapsack(Weights W, Values V, Capacity C)\n' +
                        '  max_val <- 0\n' +
                        '  // Generate all binary strings of length n\n' +
                        '  for i <- 0 to 2^n - 1 do\n' +
                        '    subset <- getItemsFromBinary(i)\n' +
                        '    if weight(subset) <= C\n' +
                        '      if value(subset) > max_val\n' +
                        '        max_val <- value(subset)\n' +
                        '  return max_val' +
                    '</div>' +

                    '<span class="code-label">Java Code (Concept)</span>' +
                    '<div class="code-box">' +
                        'int solveKnapsack(int[] w, int[] v, int cap) {\n' +
                        '    int n = w.length;\n' +
                        '    int maxVal = 0;\n' +
                        '    // 1 << n is 2^n\n' +
                        '    for (int i = 0; i < (1 << n); i++) {\n' +
                        '        int currentW = 0, currentV = 0;\n' +
                        '        for (int j = 0; j < n; j++) {\n' +
                        '            if ((i & (1 << j)) > 0) { // Check bit j\n' +
                        '                currentW += w[j];\n' +
                        '                currentV += v[j];\n' +
                        '            }\n' +
                        '        }\n' +
                        '        if (currentW <= cap && currentV > maxVal)\n' +
                        '            maxVal = currentV;\n' +
                        '    }\n' +
                        '    return maxVal;\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: DECREASE & CONQUER INTRO
    // ============================================
    'dec_intro': {
        title: "Decrease & Conquer: Intro & Insertion Sort",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Reduce the problem instance to a smaller instance of the same problem, solve the smaller instance, and then extend the solution to the original instance.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Three Variations</span>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong>Decrease by Constant:</strong> Reduce size by 1 (e.g., Insertion Sort, DFS).</li>' +
                        '<li><strong>Decrease by Constant Factor:</strong> Reduce size by a factor, usually 2 (e.g., Binary Search, Fake Coin).</li>' +
                        '<li><strong>Variable Size Decrease:</strong> Size reduction depends on data (e.g., Euclid GCD, Interpolation Search).</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Insertion Sort</h4>' +
                    '<p class="text-sm">Considers the element $A[i]$ and inserts it into the already sorted list $A[0 \\dots i-1]$. It works bottom-up.</p>' +
                    '<p class="text-sm mt-2"><strong>Efficiency:</strong> $\\Theta(n^2)$ worst case, but excellent ($\\{Theta(n)$) for partially sorted arrays.</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">INSERTION SORT</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm InsertionSort(A[0..n-1])\n' +
                        '  for i <- 1 to n-1 do\n' +
                        '    v <- A[i]\n' +
                        '    j <- i - 1\n' +
                        '    while j >= 0 AND A[j] > v do\n' +
                        '      A[j + 1] <- A[j]\n' +
                        '      j <- j - 1\n' +
                        '    A[j + 1] <- v' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'void insertionSort(int[] arr) {\n' +
                        '    for (int i = 1; i < arr.length; i++) {\n' +
                        '        int v = arr[i];\n' +
                        '        int j = i - 1;\n' +
                        '        // Shift elements greater than v\n' +
                        '        while (j >= 0 && arr[j] > v) {\n' +
                        '            arr[j + 1] = arr[j];\n' +
                        '            j--;\n' +
                        '        }\n' +
                        '        arr[j + 1] = v;\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Basic Op: Comparison (arr[j] > v)\n' +
                        '// Worst Case (Reverse sorted): Sum(1 to n-1) of i\n' +
                        '// = n(n-1)/2  => Theta(n^2)\n' +
                        '// Best Case (Sorted): Theta(n)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: TOPOLOGICAL SORT
    // ============================================
    'dec_topo': {
        title: "Topological Sort",
       notes: 
            '<div class="space-y-6">' +
                // --- INTRO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'For a Directed Acyclic Graph (DAG), list the vertices so that for every edge $u \\to v$, $u$ comes before $v$. The <strong>Source Removal</strong> method repeatedly finds a vertex with 0 in-degree.' +
                    '</p>' +
                '</div>' +

                // --- VISUAL EXAMPLE (SVG GRAPH) ---
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-sm mb-6 text-center text-accent">Visual Trace: Source Removal</h4>' +
                    
                    '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">' +
                        
                        // --- STEP 1 ---
                        '<div class="bg-black/20 rounded-lg p-2 text-center">' +
                            '<div class="text-xs font-bold text-blue-300 mb-2">Step 1: Remove "a"</div>' +
                            '<svg viewBox="0 0 200 120" class="w-full h-32 mx-auto">' +
                                '<defs><marker id="head" orient="auto" markerWidth="6" markerHeight="6" refX="5" refY="3"><path d="M0,0 V6 L6,3 Z" fill="#999"/></marker></defs>' +
                                
                                // Edges (A is removing edges to B and C)
                                '<line x1="30" y1="60" x2="90" y2="20" stroke="#f87171" stroke-width="2" stroke-dasharray="4" marker-end="url(#head)" />' +
                                '<line x1="30" y1="60" x2="90" y2="100" stroke="#f87171" stroke-width="2" stroke-dasharray="4" marker-end="url(#head)" />' +
                                '<line x1="110" y1="20" x2="170" y2="60" stroke="#555" stroke-width="2" marker-end="url(#head)" />' +
                                '<line x1="110" y1="100" x2="170" y2="60" stroke="#555" stroke-width="2" marker-end="url(#head)" />' +

                                // Nodes
                                '<circle cx="20" cy="60" r="15" fill="#22c55e" stroke="#fff" stroke-width="2" />' + // A (Green)
                                '<text x="20" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">a</text>' +
                                
                                '<circle cx="100" cy="20" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />' + // B
                                '<text x="100" y="25" text-anchor="middle" fill="#fff" font-size="12">b</text>' +
                                
                                '<circle cx="100" cy="100" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />' + // C
                                '<text x="100" y="105" text-anchor="middle" fill="#fff" font-size="12">c</text>' +
                                
                                '<circle cx="180" cy="60" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />' + // D
                                '<text x="180" y="65" text-anchor="middle" fill="#fff" font-size="12">d</text>' +
                            '</svg>' +
                            '<p class="text-xs mt-1 text-green-400">List: { a }</p>' +
                        '</div>' +

                        // --- STEP 2 ---
                        '<div class="bg-black/20 rounded-lg p-2 text-center">' +
                            '<div class="text-xs font-bold text-blue-300 mb-2">Step 2: Remove "b"</div>' +
                            '<svg viewBox="0 0 200 120" class="w-full h-32 mx-auto">' +
                                // Edges (B removing edge to D)
                                '<line x1="110" y1="20" x2="170" y2="60" stroke="#f87171" stroke-width="2" stroke-dasharray="4" marker-end="url(#head)" />' +
                                '<line x1="110" y1="100" x2="170" y2="60" stroke="#555" stroke-width="2" marker-end="url(#head)" />' +

                                // Nodes
                                '<circle cx="20" cy="60" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" />' + // A (Gone)
                                '<text x="20" y="65" text-anchor="middle" fill="#555" font-size="12">a</text>' +
                                
                                '<circle cx="100" cy="20" r="15" fill="#22c55e" stroke="#fff" stroke-width="2" />' + // B (Green)
                                '<text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">b</text>' +
                                
                                '<circle cx="100" cy="100" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />' + // C
                                '<text x="100" y="105" text-anchor="middle" fill="#fff" font-size="12">c</text>' +
                                
                                '<circle cx="180" cy="60" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />' + // D
                                '<text x="180" y="65" text-anchor="middle" fill="#fff" font-size="12">d</text>' +
                            '</svg>' +
                            '<p class="text-xs mt-1 text-green-400">List: { a, b }</p>' +
                        '</div>' +

                        // --- STEP 3 ---
                        '<div class="bg-black/20 rounded-lg p-2 text-center">' +
                            '<div class="text-xs font-bold text-blue-300 mb-2">Step 3: Remove "c"</div>' +
                            '<svg viewBox="0 0 200 120" class="w-full h-32 mx-auto">' +
                                // Edges (C removing edge to D)
                                '<line x1="110" y1="100" x2="170" y2="60" stroke="#f87171" stroke-width="2" stroke-dasharray="4" marker-end="url(#head)" />' +

                                // Nodes
                                '<circle cx="20" cy="60" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" />' + // A
                                '<text x="20" y="65" text-anchor="middle" fill="#555" font-size="12">a</text>' +
                                
                                '<circle cx="100" cy="20" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" />' + // B
                                '<text x="100" y="25" text-anchor="middle" fill="#555" font-size="12">b</text>' +
                                
                                '<circle cx="100" cy="100" r="15" fill="#22c55e" stroke="#fff" stroke-width="2" />' + // C (Green)
                                '<text x="100" y="105" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">c</text>' +
                                
                                '<circle cx="180" cy="60" r="15" fill="#1e293b" stroke="#555" stroke-width="2" />' + // D
                                '<text x="180" y="65" text-anchor="middle" fill="#fff" font-size="12">d</text>' +
                            '</svg>' +
                            '<p class="text-xs mt-1 text-green-400">List: { a, b, c }</p>' +
                        '</div>' +

                        // --- STEP 4 ---
                        '<div class="bg-black/20 rounded-lg p-2 text-center">' +
                            '<div class="text-xs font-bold text-blue-300 mb-2">Step 4: Remove "d"</div>' +
                            '<svg viewBox="0 0 200 120" class="w-full h-32 mx-auto">' +
                                // Nodes
                                '<circle cx="20" cy="60" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" />' + 
                                '<text x="20" y="65" text-anchor="middle" fill="#555" font-size="12">a</text>' +
                                '<circle cx="100" cy="20" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" />' + 
                                '<text x="100" y="25" text-anchor="middle" fill="#555" font-size="12">b</text>' +
                                '<circle cx="100" cy="100" r="15" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="2" />' + 
                                '<text x="100" y="105" text-anchor="middle" fill="#555" font-size="12">c</text>' +
                                
                                '<circle cx="180" cy="60" r="15" fill="#22c55e" stroke="#fff" stroke-width="2" />' + // D (Green)
                                '<text x="180" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">d</text>' +
                            '</svg>' +
                            '<p class="text-xs mt-1 text-green-400">List: { a, b, c, d }</p>' +
                        '</div>' +

                    '</div>' +
                '</div>' +

                // --- ALGORITHM STEPS ---
                '<div class="step-card">' +
                    '<span class="step-title">The Algorithm (Decrease by 1)</span>' +
                    '<ol class="list-decimal pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong>Find Source:</strong> Identify vertex with in-degree 0 (No incoming edges).</li>' +
                        '<li><strong>Output:</strong> Add it to the sorted list.</li>' +
                        '<li><strong>Remove:</strong> Delete vertex and all outgoing edges.</li>' +
                        '<li><strong>Repeat:</strong> Continue until graph is empty.</li>' +
                    '</ol>' +
                '</div>' +
            '</div>',
       
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">SOURCE REMOVAL ALGORITHM</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm TopoSort(Graph G)\n' +
                        '  List L <- empty\n' +
                        '  while G is not empty do\n' +
                        '    S <- FindSource(G) // Vertex with in-degree 0\n' +
                        '    if S is null return "Cycle Detected"\n' +
                        '    L.append(S)\n' +
                        '    G.removeVertex(S) // Decreases size by 1\n' +
                        '  return L' +
                    '</div>' +

                    '<span class="code-label">Java Concept (Using In-Degree)</span>' +
                    '<div class="code-box">' +
                        'List<Integer> topoSort(int V, List<List<Integer>> adj) {\n' +
                        '    int[] inDegree = new int[V];\n' +
                        '    // Calculate in-degrees\n' +
                        '    for (int u = 0; u < V; u++)\n' +
                        '        for (int v : adj.get(u)) inDegree[v]++;\n' +
                        '    \n' +
                        '    Queue<Integer> q = new LinkedList<>();\n' +
                        '    for (int i = 0; i < V; i++)\n' +
                        '        if (inDegree[i] == 0) q.add(i);\n' +
                        '        \n' +
                        '    List<Integer> result = new ArrayList<>();\n' +
                        '    while (!q.isEmpty()) {\n' +
                        '        int u = q.poll();\n' +
                        '        result.add(u);\n' +
                        '        // Decrease "virtual" graph size\n' +
                        '        for (int v : adj.get(u)) {\n' +
                        '            inDegree[v]--;\n' +
                        '            if (inDegree[v] == 0) q.add(v);\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return result;\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: GENERATING PERMUTATIONS
    // ============================================
    'dec_perm': {
        title: "Generating Permutations (Johnson-Trotter)",
        notes: 
            '<div class="space-y-8">' +
                // --- INTRO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Johnson-Trotter Algorithm</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'This algorithm generates all $n!$ permutations without recursion. It relies on the concept of <strong>Mobile Integers</strong>.' +
                    '</p>' +
                '</div>' +

                // --- RULES CARD ---
                '<div class="glass p-4 rounded-lg border-l-4 border-blue-500">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">The Rules</h4>' +
                    '<ul class="list-decimal pl-5 space-y-2 text-sm">' +
                        '<li><strong>Direction:</strong> Every number has an arrow (e.g., $\\leftarrow 3$). Initially, all point Left.</li>' +
                        '<li><strong>Mobility:</strong> A number is <em>Mobile</em> if it points to a <strong>smaller</strong> adjacent neighbor.</li>' +
                        '<li><strong>The Loop:</strong>' +
                            '<ul class="list-disc pl-5 mt-1 opacity-80">' +
                                '<li>Find the <strong>largest</strong> mobile integer ($k$).</li>' +
                                '<li><strong>Swap</strong> $k$ in the direction of its arrow.</li>' +
                                '<li><strong>Reverse</strong> the direction of all elements <strong>larger than</strong> $k$.</li>' +
                            '</ul>' +
                        '</li>' +
                    '</ul>' +
                '</div>' +

                // --- VISUAL TRACE ---
                '<div>' +
                    '<h3 class="text-lg font-bold text-white mb-4 pl-2 border-l-4 border-accent">Visual Trace (n=3)</h3>' +
                    
                    // STATE 1
                    '<div class="step-card">' +
                        '<div class="flex justify-between items-center mb-2">' +
                            '<span class="text-xs font-mono text-gray-400">Step 1</span>' +
                            '<span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Largest Mobile: 3</span>' +
                        '</div>' +
                        '<div class="font-mono text-xl text-center bg-black/30 p-3 rounded tracking-widest">' +
                            '<span class="text-gray-500">←1</span> <span class="text-gray-500">←2</span> <span class="text-green-400 font-bold">←3</span>' +
                        '</div>' +
                        '<p class="text-xs mt-2 opacity-80">3 points to 2. (3 > 2), so 3 is mobile. <strong>Swap Left.</strong></p>' +
                    '</div>' +

                    // STATE 2
                    '<div class="step-card">' +
                        '<div class="flex justify-between items-center mb-2">' +
                            '<span class="text-xs font-mono text-gray-400">Step 2</span>' +
                            '<span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Largest Mobile: 3</span>' +
                        '</div>' +
                        '<div class="font-mono text-xl text-center bg-black/30 p-3 rounded tracking-widest">' +
                            '<span class="text-gray-500">←1</span> <span class="text-green-400 font-bold">←3</span> <span class="text-gray-500">←2</span>' +
                        '</div>' +
                        '<p class="text-xs mt-2 opacity-80">3 points to 1. (3 > 1), so 3 is mobile. <strong>Swap Left.</strong></p>' +
                    '</div>' +

                    // STATE 3
                    '<div class="step-card">' +
                        '<div class="flex justify-between items-center mb-2">' +
                            '<span class="text-xs font-mono text-gray-400">Step 3</span>' +
                            '<span class="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Largest Mobile: 2</span>' +
                        '</div>' +
                        '<div class="font-mono text-xl text-center bg-black/30 p-3 rounded tracking-widest">' +
                            '<span class="text-red-400 opacity-60">←3</span> <span class="text-gray-500">←1</span> <span class="text-yellow-400 font-bold">←2</span>' +
                        '</div>' +
                        '<div class="text-xs mt-2 space-y-1">' +
                            '<p>3 is at the wall (stuck). <strong>2</strong> is now the largest mobile (points to 1).</p>' +
                            '<p class="text-white font-bold">Action: Swap 2 Left.</p>' +
                        '</div>' +
                    '</div>' +

                    // STATE 4 (THE FLIP)
                    '<div class="step-card border-l-4 border-purple-500">' +
                        '<div class="flex justify-between items-center mb-2">' +
                            '<span class="text-xs font-mono text-gray-400">Step 4 (The Flip)</span>' +
                            '<span class="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Rule #3 Triggered</span>' +
                        '</div>' +
                        '<div class="font-mono text-xl text-center bg-black/30 p-3 rounded tracking-widest">' +
                            '<span class="text-purple-300 font-bold">→3</span> <span class="text-yellow-400">←2</span> <span class="text-gray-500">←1</span>' +
                        '</div>' +
                        '<div class="text-xs mt-2 space-y-1">' +
                            '<p>We just moved <strong>2</strong>. Rule #3 says: Reverse direction of all elements larger than 2.</p>' +
                            '<p><strong>3 > 2</strong>, so <span class="text-red-400">←3</span> becomes <span class="text-green-400">→3</span>.</p>' +
                        '</div>' +
                    '</div>' +

                    // STATE 5
                    '<div class="step-card">' +
                        '<div class="flex justify-between items-center mb-2">' +
                            '<span class="text-xs font-mono text-gray-400">Step 5</span>' +
                            '<span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Largest Mobile: 3</span>' +
                        '</div>' +
                        '<div class="font-mono text-xl text-center bg-black/30 p-3 rounded tracking-widest">' +
                            '<span class="text-gray-500">←2</span> <span class="text-green-400 font-bold">→3</span> <span class="text-gray-500">←1</span>' +
                        '</div>' +
                        '<p class="text-xs mt-2 opacity-80">3 is mobile again! It points to 1 (3 > 1). <strong>Swap Right.</strong></p>' +
                    '</div>' +

                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">PSEUDOCODE</div>' +
                    
                    '<span class="code-label">Algorithm Logic</span>' +
                    '<div class="code-box">' +
                        'JohnsonTrotter(n)\n' +
                        '  // 1. Initialize\n' +
                        '  val[] = {1, 2, ..., n}\n' +
                        '  dir[] = {L, L, ..., L} // All point left\n' +
                        '  \n' +
                        '  while (exists mobile integer) do\n' +
                        '    // 2. Find k\n' +
                        '    k = FindLargestMobile()\n' +
                        '    \n' +
                        '    // 3. Swap k\n' +
                        '    Swap k with neighbor in its direction\n' +
                        '    \n' +
                        '    // 4. Reverse Directions\n' +
                        '    for i = 1 to n do\n' +
                        '      if val[i] > k\n' +
                        '        Reverse direction of val[i]\n' +
                        '        \n' +
                        '    print(current_permutation)\n' +
                        '  end while' +
                    '</div>' +

                    '<span class="code-label">Efficiency Analysis</span>' +
                    '<div class="code-box">' +
                        '// Time Complexity: Theta(n!)\n' +
                        '// It generates every permutation exactly once.\n' +
                        '// This is optimal because there are n! permutations.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: DECREASE BY FACTOR
    // ============================================
    'dec_factor': {
        title: "Decrease by Constant Factor",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'In these algorithms, the size of the instance is reduced by a constant factor (usually divided by 2) at each step. This typically results in logarithmic complexity $\\Theta(\\log n)$.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Fake Coin Problem</span>' +
                    '<p class="text-sm">Identify one lighter fake coin among $n$ coins using a balance scale.</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Divide coins into two piles of size $\\lfloor n/2 \\rfloor$.</li>' +
                        '<li>Weigh the piles. If equal, the extra coin (if $n$ odd) is fake.</li>' +
                        '<li>If unequal, repeat with the lighter pile.</li>' +
                        '<li><strong>Complexity:</strong> $\\Theta(\\log_2 n)$.</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Multiplication à la Russe</span>' +
                    '<p class="text-sm">Russian Peasant Multiplication reduces $n \\times m$ to addition and shifting.</p>' +
                    '<p class="text-sm opacity-80 mt-1">If $n$ is even: $n \\cdot m = (n/2) \\cdot (2m)$</p>' +
                    '<p class="text-sm opacity-80">If $n$ is odd: $n \\cdot m = ((n-1)/2) \\cdot (2m) + m$</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">RUSSIAN PEASANT MULTIPLICATION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Russe(n, m)\n' +
                        '  res <- 0\n' +
                        '  while n > 0 do\n' +
                        '    if n is odd\n' +
                        '      res <- res + m\n' +
                        '    n <- n / 2  (Ignore remainder)\n' +
                        '    m <- m * 2\n' +
                        '  return res' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int russianMult(int n, int m) {\n' +
                        '    int res = 0;\n' +
                        '    while (n > 0) {\n' +
                        '        if ((n & 1) == 1) { // is odd\n' +
                        '            res += m;\n' +
                        '        }\n' +
                        '        n = n >> 1; // divide by 2\n' +
                        '        m = m << 1; // multiply by 2\n' +
                        '    }\n' +
                        '    return res;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// The loop runs log2(n) times.\n' +
                        '// Only uses addition and bit-shifting (very fast in hardware).\n' +
                        '// Complexity: Theta(log n)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: VARIABLE SIZE DECREASE
    // ============================================
    'dec_var': {
        title: "Variable Size Decrease",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Here the size reduction pattern varies at each step. It is not always 1, and not always half.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Euclid\'s Algorithm (GCD)</span>' +
                    '<p class="text-sm mb-2">Finds Greatest Common Divisor of $m$ and $n$.</p>' +
                    '<p class="text-sm font-mono bg-black/20 p-2 rounded">gcd(m, n) = gcd(n, m mod n)</p>' +
                    '<p class="text-sm mt-2">The size reduces by the result of the modulo, which varies.</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Interpolation Search</span>' +
                    '<p class="text-sm">Like finding a name in a phonebook. Estimate position based on value distribution, rather than just middle.</p>' +
                    '<p class="text-sm mt-1">Average Case: $\\Theta(\\log \\log n)$ (Very fast). Worst Case: $\\Theta(n)$.</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">SELECTION PROBLEM (k-th Smallest)</div>' +
                    
                    '<span class="code-label">Pseudocode (Lomuto Partition)</span>' +
                    '<div class="code-box">' +
                        'Algorithm QuickSelect(A[l..r], k)\n' +
                        '  s <- Partition(A, l, r) // places pivot at s\n' +
                        '  if s == k return A[s]\n' +
                        '  else if s > k\n' +
                        '    QuickSelect(A[l..s-1], k)\n' +
                        '  else\n' +
                        '    QuickSelect(A[s+1..r], k)' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int quickSelect(int[] arr, int l, int r, int k) {\n' +
                        '    int p = partition(arr, l, r);\n' +
                        '    if (p == k) return arr[p];\n' +
                        '    else if (p > k) return quickSelect(arr, l, p - 1, k);\n' +
                        '    else return quickSelect(arr, p + 1, r, k);\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Unlike QuickSort, we only follow ONE side of the partition.\n' +
                        '// Average Case: T(n) = T(n/2) + n => Theta(n)\n' +
                        '// Worst Case: Theta(n^2) (if sorted)\n' +
                        '// This is Variable Decrease because partition pivot varies.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: K-TH ORDER STATISTIC (QUICKSELECT)
    // ============================================
    'dec_kth': {
        title: "k-th Order Statistic (QuickSelect)",
        notes: 
            '<div class="space-y-8">' +
                
                // --- INTRO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Selection Problem</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'We want to find the $k$-th smallest element in an array without sorting the whole array first. <br>' +
                        '<span class="opacity-80 text-xs bg-black/20 px-2 py-1 rounded inline-block mt-1">Example: If k=0 (Min), k=n/2 (Median), k=n-1 (Max).</span>' +
                    '</p>' +
                '</div>' +

                // --- VISUAL FLOW DIAGRAM ---
                '<div class="glass p-5 rounded-xl border border-white/10 text-center">' +
                    '<h4 class="font-bold text-sm mb-4 text-accent uppercase tracking-wider">How it works</h4>' +
                    '<div class="flex flex-col gap-3 max-w-md mx-auto">' +
                        '<div class="flex rounded-lg overflow-hidden font-mono text-xs font-bold">' +
                            '<div class="bg-blue-600/40 flex-1 py-3 border-r border-white/10">Smaller<br>(Left)</div>' +
                            '<div class="bg-yellow-600/40 w-16 py-3 text-yellow-200">PIVOT<br>(s)</div>' +
                            '<div class="bg-red-600/40 flex-1 py-3 border-l border-white/10">Larger<br>(Right)</div>' +
                        '</div>' +
                        '<div class="text-xs opacity-70">Compare Pivot Index (s) with Target (k)</div>' +
                        '<div class="grid grid-cols-3 gap-2 text-xs font-bold">' +
                            '<div class="bg-blue-500/10 p-2 rounded border border-blue-500/30 text-blue-300">If k < s<br>Go Left</div>' +
                            '<div class="bg-green-500/10 p-2 rounded border border-green-500/30 text-green-300">If k == s<br>FOUND!</div>' +
                            '<div class="bg-red-500/10 p-2 rounded border border-red-500/30 text-red-300">If k > s<br>Go Right</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- PRETTY STEP-BY-STEP TRACE ---
                '<div>' +
                    '<h3 class="text-lg font-bold text-white mb-4 pl-2 border-l-4 border-accent">Step-by-Step Walkthrough</h3>' +
                    
                    // INPUT CARD
                    '<div class="bg-white/5 p-4 rounded-lg mb-4">' +
                        '<div class="flex justify-between items-center mb-2">' +
                            '<span class="text-xs font-bold text-gray-400 uppercase">Input</span>' +
                            '<span class="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Target Index: k=2</span>' +
                        '</div>' +
                        '<p class="font-mono text-lg tracking-wide text-center">[ 7, 10, 4, 3, 20, 15 ]</p>' +
                        '<p class="text-center text-xs opacity-60 mt-1">We want the 3rd smallest number (Index 2)</p>' +
                    '</div>' +

                    // STEP 1
                    '<div class="step-card">' +
                        '<div class="flex justify-between">' +
                            '<span class="step-title">Step 1: Partition</span>' +
                            '<span class="text-xs font-mono text-yellow-400">Pivot = 15</span>' +
                        '</div>' +
                        '<p class="text-sm mb-2">Move smaller items left, larger right.</p>' +
                        '<div class="font-mono text-center bg-black/30 p-2 rounded mb-2">' +
                            '<span class="text-blue-300">7, 10, 4, 3</span> | <span class="text-yellow-400 font-bold">15</span> | <span class="text-red-400">20</span>' +
                        '</div>' +
                        '<p class="text-xs text-center">Pivot ends at <strong>Index 4</strong>.</p>' +
                        '<div class="mt-2 text-center text-sm font-bold text-blue-300 bg-blue-500/10 p-2 rounded">' +
                            '4 > 2 (Target) &rarr; Too High! Recurse Left.' +
                        '</div>' +
                    '</div>' +

                    // STEP 2
                    '<div class="step-card">' +
                        '<div class="flex justify-between">' +
                            '<span class="step-title">Step 2: Partition Left Side</span>' +
                            '<span class="text-xs font-mono text-yellow-400">Pivot = 3</span>' +
                        '</div>' +
                        '<p class="text-sm mb-2">Working on [ 7, 10, 4, 3 ]</p>' +
                        '<div class="font-mono text-center bg-black/30 p-2 rounded mb-2">' +
                            '<span class="opacity-50">[]</span> | <span class="text-yellow-400 font-bold">3</span> | <span class="text-red-400">7, 10, 4</span>' +
                        '</div>' +
                        '<p class="text-xs text-center">Pivot ends at <strong>Index 0</strong>.</p>' +
                        '<div class="mt-2 text-center text-sm font-bold text-red-300 bg-red-500/10 p-2 rounded">' +
                            '0 < 2 (Target) &rarr; Too Low! Recurse Right.' +
                        '</div>' +
                    '</div>' +

                    // STEP 3
                    '<div class="step-card">' +
                        '<div class="flex justify-between">' +
                            '<span class="step-title">Step 3: Partition Right Side</span>' +
                            '<span class="text-xs font-mono text-yellow-400">Pivot = 7</span>' +
                        '</div>' +
                        '<p class="text-sm mb-2">Working on [ 7, 10, 4 ]</p>' +
                        '<div class="font-mono text-center bg-black/30 p-2 rounded mb-2">' +
                            '<span class="opacity-50">4</span> | <span class="text-yellow-400 font-bold">7</span> | <span class="text-red-400"> 10</span>' +
                        '</div>' +
                        '<p class="text-xs text-center">Pivot ends at <strong>Index 2</strong>.</p>' +
                        '<div class="mt-2 text-center text-sm font-bold text-green-400 bg-green-500/10 p-2 rounded border border-green-500/30">' +
                            '2 == 2 (Target) &rarr; FOUND IT! The answer is 7.' +
                        '</div>' +
                    '</div>' +

                    // Output CARD
                    '<div class="bg-white/5 p-4 rounded-lg mb-4">' +
                        '<div class="flex justify-between items-center mb-2">' +
                            '<span class="text-xs font-bold text-gray-400 uppercase">Output</span>' +
                            '<span class="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Target Index: k=2</span>' +
                        '</div>' +
                        '<p class="font-mono text-lg tracking-wide text-center">[ 3, 4, 7, 10, 15, 20 ]</p>' +
                        '<p class="text-center text-xs opacity-60 mt-1">Hence the 3rd smallest number (Index 2) is 7</p>' +
                    '</div>' +

                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                
                // --- CONCRETE TRACE ---
                '<div>' +
                    '<div class="code-section-title">STEP-BY-STEP TRACE</div>' +
                    '<div class="code-box text-sm font-mono leading-relaxed">' +
                        '<span class="text-gray-400">// Problem: Find 3rd smallest (k=2)</span>\n' +
                        '<span class="text-gray-400">// Array: [10, 4, 5, 8, 6, 11, 26]</span>\n\n' +
                        
                        '<strong class="text-accent">STEP 1:</strong> Partition whole array (l=0, r=6)\n' +
                        'Pivot = 10 (first element)\n' +
                        'Partition Result: [4, 5, 8, 6] <span class="text-yellow-400">10</span> [11, 26]\n' +
                        'Pivot Index (s) = 4\n' +
                        'Compare s vs k: (4 > 2). Target is in Left.\n' +
                        '<span class="text-blue-400">--> Recurse Left (ignore 10, 11, 26)</span>\n\n' +

                        '<strong class="text-accent">STEP 2:</strong> Partition subarray [4, 5, 8, 6]\n' +
                        'Pivot = 4\n' +
                        'Partition Result: <span class="text-yellow-400">4</span> [5, 8, 6]\n' +
                        'Pivot Index (s) = 0\n' +
                        'Compare s vs k: (0 < 2). Target is in Right.\n' +
                        '<span class="text-red-400">--> Recurse Right (ignore 4)</span>\n\n' +

                        '<strong class="text-accent">STEP 3:</strong> Partition subarray [5, 8, 6]\n' +
                        'Pivot = 5\n' +
                        'Partition Result: <span class="text-yellow-400">5</span> [8, 6]\n' +
                        'Pivot Index (s) = 1\n' +
                        'Compare s vs k: (1 < 2). Target is in Right.\n' +
                        '<span class="text-red-400">--> Recurse Right (ignore 5)</span>\n\n' +

                        '<strong class="text-accent">STEP 4:</strong> Partition subarray [8, 6]\n' +
                        'Pivot = 8\n' +
                        'Result: [6] <span class="text-yellow-400">8</span> []\n' +
                        'Pivot Index (s) = 2\n' +
                        'Compare s vs k: (2 == 2). MATCH!\n' +
                        '<strong class="text-green-400">--> Return 8.</strong>' +
                    '</div>' +
                '</div>' +

                // --- CODE ---
                '<div>' +
                    '<div class="code-section-title">JAVA IMPLEMENTATION</div>' +
                    '<span class="code-label">QuickSelect Function</span>' +
                    '<div class="code-box">' +
                        'public int quickSelect(int[] arr, int k) {\n' +
                        '    return select(arr, 0, arr.length - 1, k);\n' +
                        '}\n\n' +
                        'private int select(int[] arr, int l, int r, int k) {\n' +
                        '    // 1. Partition the array\n' +
                        '    int s = partition(arr, l, r);\n' +
                        '    \n' +
                        '    // 2. Check the position\n' +
                        '    if (s == k) {\n' +
                        '        return arr[s]; // Found it\n' +
                        '    } \n' +
                        '    else if (s > k) {\n' +
                        '        // Target is to the left\n' +
                        '        return select(arr, l, s - 1, k);\n' +
                        '    } \n' +
                        '    else {\n' +
                        '        // Target is to the right\n' +
                        '        return select(arr, s + 1, r, k);\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: DIVIDE & CONQUER INTRO (MERGE SORT)
    // ============================================
    'div_intro': {
        title: "Divide & Conquer: Merge Sort",
        notes: 
            '<div class="space-y-6">' +
                // --- STRATEGY ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Divide and Conquer involves three steps: <strong>Divide</strong> the problem into smaller sub-problems, <strong>Conquer</strong> them recursively, and <strong>Combine</strong> the results.' +
                    '</p>' +
                '</div>' +

                // --- RECURRENCE ANALYSIS (FROM NOTES) ---
                '<div class="step-card">' +
                    '<span class="step-title">Recurrence Analysis</span>' +
                    '<p class="text-sm mb-2">The running time satisfies the recurrence:</p>' +
                    '<div class="latex-output text-center">$$C(n) = 2C(n/2) + C_{merge}(n)$$</div>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm font-mono opacity-80">' +
                        '<li><strong>2C(n/2):</strong> Cost of sorting two halves.</li>' +
                        '<li><strong>C_merge(n):</strong> Cost of merging ($n-1$ comparisons).</li>' +
                    '</ul>' +
                    
                    '<div class="bg-black/30 p-3 rounded mt-3 text-sm">' +
                        '<p class="font-bold text-accent mb-1">Applying Master Theorem:</p>' +
                        '<ul class="list-none space-y-1">' +
                            '<li>$a = 2$ (2 subproblems)</li>' +
                            '<li>$b = 2$ (Split size by 2)</li>' +
                            '<li>$d = 1$ (Merge is linear $n^1$)</li>' +
                            '<li class="mt-2 border-t border-white/10 pt-2">Check: $a$ vs $b^d \\implies 2 = 2^1$</li>' +
                            '<li>Conclusion: Case 2 ($a = b^d$)</li>' +
                            '<li class="text-green-400 font-bold mt-1">Efficiency: $\\Theta(n \\log n)$</li>' +
                        '</ul>' +
                    '</div>' +
                    '<p class="text-xs text-red-300 mt-2"><strong>Note:</strong> Requires $\\Theta(n)$ extra space (not in-place).</p>' +
                '</div>' +

                // --- VISUAL TRACE ---
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-sm mb-4 text-center text-accent">Visual Trace: [7, 2, 1, 6, 4]</h4>' +
                    
                    // LEVEL 1: SPLIT
                    '<div class="mb-4 text-center">' +
                        '<p class="text-xs text-blue-300 uppercase font-bold mb-1">1. Divide (Odd length)</p>' +
                        '<div class="flex justify-center gap-4">' +
                            '<div class="p-2 bg-blue-500/20 border border-blue-500 rounded">[7, 2]</div>' +
                            '<div class="p-2 bg-red-500/20 border border-red-500 rounded">[1, 6, 4]</div>' +
                        '</div>' +
                    '</div>' +

                    // LEVEL 2: RECURSIVE SORTS
                    '<div class="mb-4">' +
                        '<p class="text-xs text-yellow-300 uppercase font-bold mb-1 text-center">2. Conquer (Sort Halves)</p>' +
                        '<div class="grid grid-cols-2 gap-4 text-sm">' +
                            // Left Logic
                            '<div class="bg-black/20 p-2 rounded">' +
                                '<p class="text-xs opacity-50 mb-1">Left Side:</p>' +
                                '<p>Split [7], [2]</p>' +
                                '<p>Merge: 2 < 7</p>' +
                                '<p class="text-blue-300 font-bold">Result: [2, 7]</p>' +
                            '</div>' +
                            // Right Logic
                            '<div class="bg-black/20 p-2 rounded">' +
                                '<p class="text-xs opacity-50 mb-1">Right Side:</p>' +
                                '<p>Split [1], [6, 4]</p>' +
                                '<p>Sort [6, 4] -> [4, 6]</p>' +
                                '<p>Merge [1] & [4, 6]</p>' +
                                '<p class="text-red-300 font-bold">Result: [1, 4, 6]</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    // LEVEL 3: FINAL MERGE
                    '<div class="text-center">' +
                        '<p class="text-xs text-green-300 uppercase font-bold mb-1">3. Final Merge</p>' +
                        '<div class="flex flex-col items-center gap-2">' +
                            '<div class="flex gap-2 text-xs opacity-70">' +
                                '<span>L: [2, 7]</span>' +
                                '<span>vs</span>' +
                                '<span>R: [1, 4, 6]</span>' +
                            '</div>' +
                            '<div class="w-full bg-green-500/10 p-3 rounded border border-green-500 font-mono">' +
                                '[ 1, 2, 4, 6, 7 ]' +
                            '</div>' +
                            '<p class="text-xs opacity-60">1<2, then 2<4, then 4<7, then 6<7, then 7 left</p>' +
                        '</div>' +
                    '</div>' +

                '</div>' +
            '</div>',
       
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">MERGE SORT</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm MergeSort(A[0..n-1])\n' +
                        '  if n > 1\n' +
                        '    copy A[0..n/2-1] to B\n' +
                        '    copy A[n/2..n-1] to C\n' +
                        '    MergeSort(B)\n' +
                        '    MergeSort(C)\n' +
                        '    Merge(B, C, A)' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'void mergeSort(int[] a, int n) {\n' +
                        '    if (n < 2) return;\n' +
                        '    int mid = n / 2;\n' +
                        '    int[] l = new int[mid];\n' +
                        '    int[] r = new int[n - mid];\n' +
                        '    \n' +
                        '    // Fill sub-arrays...\n' +
                        '    mergeSort(l, mid);\n' +
                        '    mergeSort(r, n - mid);\n' +
                        '    merge(a, l, r, mid, n - mid);\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Merge Logic</span>' +
                    '<div class="code-box">' +
                        '// Merge step compares heads of B and C\n' +
                        '// and places the smaller one into A.\n' +
                        '// Efficiency of Merge is Theta(n).' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

   // ============================================
    // TOPIC: QUICKSORT
    // ============================================
    'div_quick': {
        title: "QuickSort",
        notes: 
        '<div class="space-y-6">' +
            // --- INTRO ---
            '<div>' +
                '<h3 class="text-xl font-bold text-accent mb-2">Partitioning Strategy</h3>' +
                '<p class="leading-relaxed text-sm md:text-base">' +
                    'Unlike MergeSort which divides by position (index), QuickSort divides by <strong>value</strong> using a Pivot. It partitions the array so that everything smaller than the pivot is on the left, and everything larger is on the right.' +
                '</p>' +
            '</div>' +

            // --- ALGORITHM STEPS ---
            '<div class="step-card">' +
                '<span class="step-title">The Algorithm</span>' +
                '<ol class="list-decimal pl-5 mt-2 space-y-2 text-sm">' +
                    '<li><strong>Select Pivot:</strong> Choose an element (commonly first or last).</li>' +
                    '<li><strong>Partition:</strong> Reorder array so $Elements &lt; Pivot$ are Left, $Elements &gt; Pivot$ are Right.</li>' +
                    '<li><strong>Place Pivot:</strong> Move pivot to its final sorted position.</li>' +
                    '<li><strong>Recurse:</strong> Apply QuickSort to left and right subarrays.</li>' +
                '</ol>' +
            '</div>' +
            // --- EFFICIENCY ---
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Efficiency Analysis</h4>' +
                    '<ul class="space-y-2 text-sm font-mono">' +
                        '<li><strong>Best Case:</strong> $\\Theta(n \\log n)$ <span class="opacity-60">(Pivot splits array in half)</span></li>' +
                        '<li><strong>Worst Case:</strong> $\\Theta(n^2)$ <span class="opacity-60">(Sorted array, Pivot is Min/Max)</span></li>' +
                        '<li><strong>Average Case:</strong> $\\Theta(n \\log n)$</li>' +
                    '</ul>' +
                '</div>' +

            // --- VISUAL TRACE ---
            '<div class="glass p-4 rounded-lg border border-white/10">' +
                '<h4 class="font-bold text-sm mb-4 text-center text-accent">Visual Trace: QuickSort Tree & Swaps</h4>' +
                '<p class="text-xs text-center mb-4 opacity-70">Array: [5, 3, 8, 4, 2, 7, 1, 6]</p>' +

                // ROOT LEVEL
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Root Pivot: 6</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-white/20">5</div>' +
                        '<div class="p-2 border border-white/20">3</div>' +
                        '<div class="p-2 border border-white/20">8</div>' +
                        '<div class="p-2 border border-white/20">4</div>' +
                        '<div class="p-2 border border-white/20">2</div>' +
                        '<div class="p-2 border border-white/20">7</div>' +
                        '<div class="p-2 border border-white/20">1</div>' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">6</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition left &lt;6, right &gt;6 → Left: [5,3,4,2,1] | Pivot:6 | Right: [8,7]</p>' +
                '</div>' +

                // LEFT SUBARRAY
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Left Subarray Pivot: 1</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">1</div>' +
                        '<div class="p-2 border border-white/20">5</div>' +
                        '<div class="p-2 border border-white/20">3</div>' +
                        '<div class="p-2 border border-white/20">4</div>' +
                        '<div class="p-2 border border-white/20">2</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition → Left: [] | Pivot:1 | Right:[5,3,4,2]</p>' +
                '</div>' +

                // RIGHT OF 1
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Right of 1 Pivot: 2</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-white/20">5</div>' +
                        '<div class="p-2 border border-white/20">3</div>' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">2</div>' +
                        '<div class="p-2 border border-white/20">4</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition → Left: [] | Pivot:2 | Right:[5,3,4]</p>' +
                '</div>' +

                // RIGHT OF 2
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Right of 2 Pivot: 4</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-blue-500 text-blue-300 bg-blue-500/10">3</div>' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">4</div>' +
                        '<div class="p-2 border border-red-500 text-red-300 bg-red-500/10">5</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition → Left:[3] | Pivot:4 | Right:[5]</p>' +
                '</div>' +

                // RIGHT SUBARRAY OF ROOT
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Right Subarray Pivot: 7</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">7</div>' +
                        '<div class="p-2 border border-white/20">8</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition → Left: [] | Pivot:7 | Right:[8]</p>' +
                '</div>' +

                // ... inside your ALGO_CONTENT object ...

// RECURSION TREE VISUALIZATION
'<div class="mb-4 glass p-4 rounded-lg">' +
    '<h4 class="font-bold text-sm text-center text-accent mb-2">Recursive Structure (Tree)</h4>' +
    
    '<div class="tree">' +
        '<ul>' +
            '<li>' +
                '<span class="tree-node pivot">6</span>' + // Root
                '<ul>' +
                    // LEFT BRANCH (1)
                    '<li>' +
                        '<span class="tree-node">1</span>' +
                        '<ul>' +
                            '<li><span class="tree-node null">[]</span></li>' + // Left of 1
                            '<li>' +
                                '<span class="tree-node">2</span>' + // Right of 1
                                '<ul>' +
                                    '<li><span class="tree-node null">[]</span></li>' + // Left of 2
                                    '<li>' +
                                        '<span class="tree-node">4</span>' + // Right of 2
                                        '<ul>' +
                                            '<li><span class="tree-node leaf">3</span></li>' + // Left of 4
                                            '<li><span class="tree-node leaf">5</span></li>' + // Right of 4
                                        '</ul>' +
                                    '</li>' +
                                '</ul>' +
                            '</li>' +
                        '</ul>' +
                    '</li>' +
                    
                    // RIGHT BRANCH (7)
                    '<li>' +
                        '<span class="tree-node">7</span>' +
                        '<ul>' +
                            '<li><span class="tree-node null">[]</span></li>' + // Left of 7
                            '<li><span class="tree-node leaf">8</span></li>' + // Right of 7
                        '</ul>' +
                    '</li>' +
                '</ul>' +
            '</li>' +
        '</ul>' +
    '</div>' +
    
    '<p class="text-xs text-center opacity-70 mt-4 bg-black/20 p-2 rounded inline-block w-full">' +
        '<span class="text-yellow-400 font-bold">Traversal Order:</span> 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8' +
    '</p>' +
'</div>' +

                // INTERACTIVE SWAP DYNAMICS
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-sm mb-4 text-center text-accent">Pivot Swap Dynamics</h4>' +

                    '<div class="mb-4">' +
                        '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                            '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">Pivot 6</div>' +
                            '<div class="p-2 border border-red-500 text-red-300 bg-red-500/10">8</div>' +
                            '<div class="p-2 border border-blue-500 text-blue-300 bg-blue-500/10">1</div>' +
                        '</div>' +
                        '<p class="text-xs text-center mt-1 opacity-70">During partition, 8 (> pivot) and 1 (&lt; pivot) swap.</p>' +
                    '</div>' +

                    '<div class="mb-4">' +
                        '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                            '<div class="p-2 border border-green-500 text-green-300 font-bold bg-green-500/20">Pivot placed</div>' +
                            '<div class="p-2 border border-white/20">All left smaller</div>' +
                            '<div class="p-2 border border-white/20">All right larger</div>' +
                        '</div>' +
                        '<p class="text-xs text-center mt-1 opacity-70">Pivot is now in its correct position; recursion continues on left & right subarrays.</p>' +
                    '</div>' +
                '</div>' +
                 

            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">QUICKSORT IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">1. Recursive Structure</span>' +
                    '<div class="code-box">' +
                        'void quickSort(int[] arr, int low, int high) {\n' +
                        '    if (low < high) {\n' +
                        '        // 1. Place pivot in correct spot\n' +
                        '        int pi = partition(arr, low, high);\n' +
                        '\n' +
                        '        // 2. Sort Left of pivot\n' +
                        '        quickSort(arr, low, pi - 1);\n' +
                        '\n' +
                        '        // 3. Sort Right of pivot\n' +
                        '        quickSort(arr, pi + 1, high);\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">2. Partitioning (Hoare Logic)</span>' +
                    '<div class="code-box">' +
                        'int partition(int[] arr, int low, int high) {\n' +
                        '    int pivot = arr[low]; // Pivot at start\n' +
                        '    int i = low + 1; \n' +
                        '    int j = high;\n' +
                        '\n' +
                        '    while (i <= j) {\n' +
                        '        // Find element on left > pivot\n' +
                        '        while (i <= high && arr[i] <= pivot) i++;\n' +
                        '        \n' +
                        '        // Find element on right < pivot\n' +
                        '        while (j >= low && arr[j] > pivot) j--;\n' +
                        '        \n' +
                        '        // Swap if pointers haven\'t crossed\n' +
                        '        if (i < j) swap(arr, i, j);\n' +
                        '    }\n' +
                        '    \n' +
                        '    // Place pivot in correct position (j)\n' +
                        '    swap(arr, low, j);\n' +
                        '    return j;\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: STRASSEN'S ALGORITHM
    // ============================================
    'div_strassen': {
        title: "Strassen's Matrix Multiplication",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Problem</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Multiplying two $n \\times n$ matrices traditionally requires 3 nested loops (row, column, sum). This results in a cubic complexity of $\\Theta(n^3)$.' +
                    '</p>' +
                '</div>' +

                // --- NAIVE D&C ---
                '<div class="step-card">' +
                    '<span class="step-title">Naive Divide & Conquer</span>' +
                    '<p class="text-sm">We can divide each matrix into 4 sub-matrices of size $n/2$.</p>' +
                    '<div class="latex-output text-center">$$C = \\begin{pmatrix} A_{11}B_{11} + A_{12}B_{21} & A_{11}B_{12} + A_{12}B_{22} \\\\ A_{21}B_{11} + A_{22}B_{21} & A_{21}B_{12} + A_{22}B_{22} \\end{pmatrix}$$</div>' +
                    '<p class="text-sm mt-2">This requires <strong>8 multiplications</strong> of size $n/2$.</p>' +
                    '<p class="text-sm font-mono opacity-80">Recurrence: $T(n) = 8T(n/2) + n^2 \\implies \\Theta(n^3)$ (No improvement).</p>' +
                '</div>' +

                // --- STRASSEN'S IMPROVEMENT ---
                '<div class="glass p-4 rounded-lg border-l-4 border-green-500">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Strassen\'s Insight</h4>' +
                    '<p class="text-sm">Volker Strassen (1969) discovered a way to compute the product using only <strong>7 recursive multiplications</strong> (instead of 8) by using clever algebraic combinations (additions/subtractions).</p>' +
                '</div>' +

                // --- MASTER THEOREM DERIVATION ---
                '<div>' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Deriving Complexity (Master Theorem)</h4>' +
                    '<p class="text-sm mb-2">The recurrence relation for Strassen is:</p>' +
                    '<div class="latex-output text-center">$$T(n) = 7T(n/2) + \\Theta(n^2)$$</div>' +
                    
                    '<div class="bg-black/30 p-4 rounded-lg mt-3 font-mono text-sm space-y-2">' +
                        '<p>1. Identify parameters:</p>' +
                        '<ul class="list-disc pl-5 opacity-80">' +
                            '<li>$a = 7$ (7 recursive calls)</li>' +
                            '<li>$b = 2$ (Split size by 2)</li>' +
                            '<li>$f(n) = n^2 \\implies d = 2$ (Matrix addition is quadratic)</li>' +
                        '</ul>' +
                        '<p class="mt-2">2. Compare $a$ vs $b^d$:</p>' +
                        '<p class="text-center">$7 \\quad \\text{vs} \\quad 2^2 (=4)$</p>' +
                        '<p class="text-center text-red-300 font-bold">$7 > 4$</p>' +
                        '<p class="mt-2">3. Case 3 Applies (Roots dominate):</p>' +
                        '<p>$$T(n) = \\Theta(n^{\\log_b a}) = \\Theta(n^{\\log_2 7})$$</p>' +
                        '<p>$$\\log_2 7 \\approx 2.807$$</p>' +
                    '</div>' +
                    '<p class="text-sm mt-2 text-center font-bold text-green-400">Final Complexity: $\\Theta(n^{2.81})$</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">STRASSEN ALGORITHM</div>' +
                    
                    '<span class="code-label">Pseudocode Logic</span>' +
                    '<div class="code-box">' +
                        'Algorithm Strassen(A, B)\n' +
                        '  If n is small, use standard O(n^3) multiplication\n' +
                        '  \n' +
                        '  // 1. Calculate 10 helper matrices (Add/Sub)\n' +
                        '  S1 = B12 - B22\n' +
                        '  S2 = A11 + A12\n' +
                        '  ... (up to S10)\n' +
                        '  \n' +
                        '  // 2. Recursive Multiplications (Only 7 calls!)\n' +
                        '  P1 = Strassen(A11, S1)\n' +
                        '  P2 = Strassen(S2, B22)\n' +
                        '  ... (up to P7)\n' +
                        '  \n' +
                        '  // 3. Combine P1..P7 to get C quadrants\n' +
                        '  C11 = P5 + P4 - P2 + P6\n' +
                        '  C12 = P1 + P2\n' +
                        '  C21 = P3 + P4\n' +
                        '  C22 = P5 + P1 - P3 - P7\n' +
                        '  \n' +
                        '  return C' +
                    '</div>' +

                    '<span class="code-label">Analysis Comparison</span>' +
                    '<div class="code-box">' +
                        '// Standard Algo:\n' +
                        '// T(n) = 8T(n/2) + O(n^2) => O(n^3) = O(n^3.00)\n' +
                        '\n' +
                        '// Strassen Algo:\n' +
                        '// T(n) = 7T(n/2) + O(n^2) => O(n^2.81)\n' +
                        '\n' +
                        '// Note: Strassen has a large hidden constant due to \n' +
                        '// the 18 matrix additions. It is only faster for n > ~100.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: GEOMETRIC D&C
    // ============================================
    'div_geom': {
        title: "Geometric D&C: Closest Pair & QuickHull",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Closest Pair (D&C)</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Beats Brute Force ($O(n^2)$) by sorting points by X-coordinate and dividing the plane in half.' +
                    '</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Divide points into Left and Right sets by vertical line.</li>' +
                        '<li>Solve recursively: $d = \\min(d_{left}, d_{right})$.</li>' +
                        '<li><strong>Straddle Zone:</strong> Check points within distance $d$ of the line. (Only need to check next 5-7 points sorted by Y).</li>' +
                        '<li><strong>Efficiency:</strong> $\\Theta(n \\log n)$.</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">QuickHull</span>' +
                    '<p class="text-sm">Finds Convex Hull using strategy similar to QuickSort.</p>' +
                    '<ol class="list-decimal pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Find left-most ($P_1$) and right-most ($P_2$) points. Draw line $P_1P_2$.</li>' +
                        '<li>Find point $P_{max}$ furthest from line.</li>' +
                        '<li>Points inside triangle $P_1 P_{max} P_2$ are ignored.</li>' +
                        '<li>Recursively process regions to the left/right of the new lines.</li>' +
                    '</ol>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">QUICKHULL ALGORITHM</div>' +
                    
                    '<span class="code-label">Pseudocode Logic</span>' +
                    '<div class="code-box">' +
                        'Algorithm QuickHull(S, P1, P2)\n' +
                        '  if S is empty return\n' +
                        '  Find Pmax in S furthest from line P1-P2\n' +
                        '  Add Pmax to Hull\n' +
                        '  S1 = points to left of P1-Pmax\n' +
                        '  S2 = points to left of Pmax-P2\n' +
                        '  QuickHull(S1, P1, Pmax)\n' +
                        '  QuickHull(S2, Pmax, P2)' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Average Case: Theta(n log n)\n' +
                        '// Worst Case: Theta(n^2) (if points form a circle)\n' +
                        '// Much faster than Brute Force O(n^3).' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: INSTANCE SIMPLIFICATION (PRE-SORTING)
    // ============================================
    'trans_presort': {
        title: "Instance Simplification: Pre-sorting",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Concept</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Instance Simplification transforms an instance of a problem into a "simpler" or "more convenient" version of the same problem. A classic example is <strong>Pre-sorting</strong>.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Why Sort First?</span>' +
                    '<p class="text-sm">Many problems are harder on unsorted lists ($O(n^2)$) but trivial on sorted lists ($O(n)$ or $O(1)$).</p>' +
                    '<p class="text-sm mt-2"><strong>Total Cost =</strong> Cost to Sort + Cost to Solve</p>' +
                    '<p class="text-sm font-mono mt-1">Total = $O(n \\log n) + O(n) = O(n \\log n)$</p>' +
                    '<p class="text-sm mt-1 text-green-300">This is often better than the $O(n^2)$ Brute Force approach.</p>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-center text-accent">Examples</h4>' +
                    '<ul class="list-disc pl-5 space-y-1 text-sm">' +
                        '<li><strong>Element Uniqueness:</strong> Sort, then check adjacent elements only.</li>' +
                        '<li><strong>Mode (Frequency):</strong> Sort, then longest run of adjacent equal numbers.</li>' +
                        '<li><strong>Finding Median:</strong> Sort, then take $A[n/2]$.</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">ELEMENT UNIQUENESS</div>' +
                    
                    '<span class="code-label">Pseudocode (Pre-sorting)</span>' +
                    '<div class="code-box">' +
                        'Algorithm UniqueElements(A[0..n-1])\n' +
                        '  Sort(A) // Cost: n log n\n' +
                        '  for i <- 0 to n-2 do\n' +
                        '    if A[i] == A[i+1] return false // Cost: n\n' +
                        '  return true' +
                    '</div>' +

                    '<span class="code-label">Comparison vs Brute Force</span>' +
                    '<div class="code-box">' +
                        '// Brute Force:\n' +
                        '// Compare every element with every other element.\n' +
                        '// Complexity: O(n^2)\n\n' +
                        '// Transform & Conquer (Pre-sorting):\n' +
                        '// Sort (n log n) + Linear Scan (n)\n' +
                        '// Complexity: O(n log n)\n' +
                        '// Result: Much faster for large n.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: HORNER'S RULE (REPRESENTATION CHANGE)
    // ============================================
    'trans_horner': {
        title: "Representation Change: Horner's Rule",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Evaluating Polynomials</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Problem: Evaluate $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_0$ for a specific $x$.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">The Transformation</span>' +
                    '<p class="text-sm mb-2">Brute force requires $O(n^2)$ multiplications (or $2n$ with an accumulator). Horner\'s rule factorizes the polynomial to use exactly $n$ multiplications and $n$ additions.</p>' +
                    '<div class="latex-output text-center">$$P(x) = (\\dots((a_n x + a_{n-1})x + a_{n-2})x + \\dots)x + a_0$$</div>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Example Trace</h4>' +
                    '<p class="text-sm font-mono">P(x) = 2x^3 - 6x^2 + 2x - 1 for x=3</p>' +
                    '<ul class="list-decimal pl-5 mt-2 space-y-1 text-sm opacity-80">' +
                        '<li>Start with coeff $a_n = 2$</li>' +
                        '<li>$2 \\cdot 3 + (-6) = 0$</li>' +
                        '<li>$0 \\cdot 3 + 2 = 2$</li>' +
                        '<li>$2 \\cdot 3 + (-1) = 5$</li>' +
                        '<li>Result = 5</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">HORNER\'S RULE ALGORITHM</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Horner(P[0..n], x)\n' +
                        '  // P contains coefficients, P[n] is highest degree\n' +
                        '  result <- P[n]\n' +
                        '  for i <- n-1 downto 0 do\n' +
                        '    result <- result * x + P[i]\n' +
                        '  return result' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'double horner(double[] coeffs, double x) {\n' +
                        '    int n = coeffs.length - 1;\n' +
                        '    double res = coeffs[n];\n' +
                        '    // Iterate downwards from second highest term\n' +
                        '    for (int i = n - 1; i >= 0; i--) {\n' +
                        '        res = (res * x) + coeffs[i];\n' +
                        '    }\n' +
                        '    return res;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Efficiency Analysis</span>' +
                    '<div class="code-box">' +
                        '// Number of Multiplications: n\n' +
                        '// Number of Additions: n\n' +
                        '// Complexity: Theta(n)\n' +
                        '// This is theoretically optimal.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: BINARY EXPONENTIATION
    // ============================================
    'trans_expo': {
        title: "Binary Exponentiation",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Computing $a^n$</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'This is an application of Representation Change. We change $n$ into its binary representation to compute the power in logarithmic time.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Left-to-Right (Horner Application)</span>' +
                    '<p class="text-sm">Based on the factorization of the exponent. If binary of $n$ is $b_I \\dots b_0$:</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Start with the leading 1.</li>' +
                        '<li>For every bit, <strong>Square</strong> the current value.</li>' +
                        '<li>If the bit is 1, also <strong>Multiply</strong> by $a$.</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Right-to-Left (Common)</span>' +
                    '<p class="text-sm">Often easier to code. While $n > 0$, if $n$ is odd, multiply result by current base. Always square the base and halve $n$.</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">BINARY EXPONENTIATION (Right-to-Left)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm BinaryPower(a, n)\n' +
                        '  res <- 1\n' +
                        '  while n > 0 do\n' +
                        '    if (n mod 2 == 1) // n is odd\n' +
                        '      res <- res * a\n' +
                        '    a <- a * a\n' +
                        '    n <- floor(n / 2)\n' +
                        '  return res' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'long power(long a, long n) {\n' +
                        '    long res = 1;\n' +
                        '    while (n > 0) {\n' +
                        '        if ((n & 1) == 1) res = res * a;\n' +
                        '        a = a * a;\n' +
                        '        n = n >> 1; // Bitwise divide by 2\n' +
                        '    }\n' +
                        '    return res;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Trace Example: 3^13</span>' +
                    '<div class="code-box">' +
                        '// 13 in binary: 1101\n' +
                        '// n=13 (odd): res = 1*3 = 3, a = 3*3=9\n' +
                        '// n=6 (even): res = 3, a = 9*9=81\n' +
                        '// n=3 (odd):  res = 3*81=243, a = 81^2\n' +
                        '// n=1 (odd):  res = 243*81^2...\n' +
                        '// Complexity: Theta(log n)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: PROBLEM REDUCTION
    // ============================================
    'trans_red': {
        title: "Problem Reduction: LCM & Optimization",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'If a problem $P$ can be transformed into a problem $Q$, solvable by algorithm $A$, then we can solve $P$ by: $P \\to Q \\to A(Q) \\to \\text{Solution}(P)$.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Example: Least Common Multiple (LCM)</span>' +
                    '<p class="text-sm">Calculating the LCM of $u$ and $v$ can be <strong>reduced</strong> to the problem of finding the Greatest Common Divisor (GCD).</p>' +
                    '<p class="text-sm font-mono bg-black/20 p-2 mt-2 rounded text-center">LCM(u, v) = (u * v) / GCD(u, v)</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Example: Maximization to Minimization</span>' +
                    '<p class="text-sm">Standard optimization libraries often only solve minimization. We reduce maximization to minimization by negating the function.</p>' +
                    '<p class="text-sm font-mono bg-black/20 p-2 mt-2 rounded text-center">max f(x) = - [ min ( -f(x) ) ]</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">LCM via REDUCTION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm LCM(u, v)\n' +
                        '  // Reduces the problem to GCD\n' +
                        '  g <- EuclidGCD(u, v)\n' +
                        '  return (u * v) / g' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int gcd(int a, int b) {\n' +
                        '    return b == 0 ? a : gcd(b, a % b);\n' +
                        '}\n\n' +
                        'int lcm(int u, int v) {\n' +
                        '    if (u == 0 || v == 0) return 0;\n' +
                        '    return (u * v) / gcd(u, v);\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: SPACE-TIME TRADEOFF INTRO & COUNTING SORT
    // ============================================
    'spa_intro': {
        title: "Space-Time Tradeoff: Counting Sort",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Concept</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'We can reduce the running time of an algorithm by using more memory (space). This is called <strong>Input Enhancement</strong> (preprocessing the input to store info) or <strong>Prestructuring</strong> (hashing, indexing).' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Sorting by Counting</span>' +
                    '<p class="text-sm">Sorts a list of integers falling within a restricted range $[L..U]$ (e.g., numbers 1 to 10).</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li><strong>Frequency Table:</strong> Counts occurrences of each value.</li>' +
                        '<li><strong>Distribution Table:</strong> Accumulates counts to determine the final index positions.</li>' +
                        '<li><strong>Linear Time:</strong> $\\Theta(n)$. Much faster than comparison sorts ($\\{Theta(n \\log n)$), but consumes extra memory.' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">COUNTING SORT</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm CountingSort(A[0..n-1], k)\n' +
                        '  // k is the range of values (0 to k-1)\n' +
                        '  D[0..k-1] initialized to 0 (Frequencies)\n' +
                        '  S[0..n-1] (Result array)\n' +
                        '  \n' +
                        '  // 1. Compute Frequencies\n' +
                        '  for i <- 0 to n-1 do D[A[i]]++\n' +
                        '  \n' +
                        '  // 2. Compute Distribution (Prefix Sums)\n' +
                        '  for j <- 1 to k-1 do D[j] <- D[j] + D[j-1]\n' +
                        '  \n' +
                        '  // 3. Place elements (Reverse order for stability)\n' +
                        '  for i <- n-1 downto 0 do\n' +
                        '    j <- A[i]\n' +
                        '    S[D[j] - 1] <- A[i]\n' +
                        '    D[j]--\n' +
                        '  return S' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int[] countingSort(int[] arr, int maxVal) {\n' +
                        '    int[] count = new int[maxVal + 1];\n' +
                        '    int[] output = new int[arr.length];\n' +
                        '\n' +
                        '    // Frequencies\n' +
                        '    for (int num : arr) count[num]++;\n' +
                        '\n' +
                        '    // Distribution (Prefix Sum)\n' +
                        '    for (int i = 1; i <= maxVal; i++)\n' +
                        '        count[i] += count[i - 1];\n' +
                        '\n' +
                        '    // Placement\n' +
                        '    for (int i = arr.length - 1; i >= 0; i--) {\n' +
                        '        output[count[arr[i]] - 1] = arr[i];\n' +
                        '        count[arr[i]]--;\n' +
                        '    }\n' +
                        '    return output;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Time Complexity: Theta(n + k)\n' +
                        '// Space Complexity: Theta(n + k)\n' +
                        '// If k is small (~n), this is linear Theta(n).\n' +
                        '// If k is huge (e.g. range 1 to 1 billion), this is terrible.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: HORSPOOL'S ALGORITHM
    // ============================================
    'spa_horspool': {
        title: "Horspool's Algorithm (String Matching)",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Input Enhancement Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Instead of shifting by 1 on mismatch (Brute Force), we pre-compute a <strong>Shift Table</strong> based on the pattern to shift as far as possible.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">How it works</span>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li>Align pattern with text. Scan from <strong>Right to Left</strong>.</li>' +
                        '<li>If mismatch, look at the character in the <strong>Text</strong> aligned with the <strong>Last</strong> character of pattern.</li>' +
                        '<li>Shift according to the table value for that text character.</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Shift Table Logic</h4>' +
                    '<p class="text-sm">For a pattern of length $m$ and character $c$:</p>' +
                    '<ul class="list-disc pl-5 mt-1 space-y-1 text-sm font-mono opacity-80">' +
                        '<li>If c is not in pattern: Shift = m</li>' +
                        '<li>If c is in pattern: Shift = m - 1 - (rightmost index of c)</li>' +
                        '<li>(Note: We ignore the very last character of the pattern for the calculation)</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">HORSPOOL\'S ALGORITHM</div>' +
                    
                    '<span class="code-label">Example Trace</span>' +
                    '<div class="code-box">' +
                        'Pattern: BARBER (Length m=6)\n' +
                        'Table Construction (excluding last R):\n' +
                        'B: m - 1 - 3 = 2 (index 3 is second B)\n' +
                        'A: m - 1 - 1 = 4\n' +
                        'R: m - 1 - 2 = 3 (index 2 is middle R)\n' +
                        'E: m - 1 - 4 = 1\n' +
                        'Others: 6\n\n' +
                        'Text:    JIM_SAW_ME_IN_A_BARBER_SHOP\n' +
                        'Pattern: BARBER\n' +
                        '1. Match R vs _ (underscore). _ not in pattern. Shift 6.\n' +
                        '2. ... continues shifting by large jumps ...' +
                    '</div>' +

                    '<span class="code-label">Java Implementation (Shift Table)</span>' +
                    '<div class="code-box">' +
                        'int[] shiftTable(String p) {\n' +
                        '    int m = p.length();\n' +
                        '    int[] table = new int[256]; // ASCII\n' +
                        '    \n' +
                        '    // 1. Initialize all to m\n' +
                        '    for (int i = 0; i < 256; i++) table[i] = m;\n' +
                        '    \n' +
                        '    // 2. Update for chars in pattern (except last)\n' +
                        '    for (int j = 0; j < m - 1; j++) {\n' +
                        '        table[p.charAt(j)] = m - 1 - j;\n' +
                        '    }\n' +
                        '    return table;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Java Implementation (Search)</span>' +
                    '<div class="code-box">' +
                        'int horspoolSearch(String t, String p) {\n' +
                        '    int n = t.length(), m = p.length();\n' +
                        '    int[] table = shiftTable(p);\n' +
                        '    int i = m - 1; // Align end of pattern\n' +
                        '    \n' +
                        '    while (i < n) {\n' +
                        '        int k = 0;\n' +
                        '        // Compare right to left\n' +
                        '        while (k < m && p.charAt(m-1-k) == t.charAt(i-k))\n' +
                        '            k++;\n' +
                        '        if (k == m) return i - m + 1; // Match found\n' +
                        '        else i += table[t.charAt(i)]; // Shift\n' +
                        '    }\n' +
                        '    return -1;\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: BOYER-MOORE ALGORITHM
    // ============================================
    'spa_boyer': {
        title: "Boyer-Moore Algorithm",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Advanced String Matching</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Boyer-Moore improves on Horspool by using two heuristics to determine the maximum safe shift. It is the standard for matching in many systems (like grep).' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">1. Bad Symbol Shift</span>' +
                    '<p class="text-sm">Similar to Horspool, but calculation is slightly different. Upon mismatch at index $k$ (from back):</p>' +
                    '<p class="text-sm font-mono bg-black/20 p-2 mt-1 rounded">Shift = max(T[c] - k, 1)</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">2. Good Suffix Shift</span>' +
                    '<p class="text-sm">If we matched a suffix (e.g., "AB") before failing, we can shift to align the next occurrence of "AB" in the pattern.</p>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<p class="text-sm"><strong>Efficiency:</strong> $\\Theta(n/m)$ in best case (skipping large chunks). $\\Theta(nm)$ worst case (rare). Generally faster than Horspool.</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">BOYER-MOORE CONCEPTS</div>' +
                    
                    '<span class="code-label">Bad Symbol vs Horspool</span>' +
                    '<div class="code-box">' +
                        '// Text:    ... T A N S E R ...\n' +
                        '// Pattern:     B A R B E R\n' +
                        '\n' +
                        '// Horspool looks at the character in Text aligned with\n' +
                        '// the END of the pattern (S).\n' +
                        '// Boyer-Moore looks at the character that CAUSED\n' +
                        '// the mismatch (S) and shifts to align S with an S in pattern.\n' +
                        '// Since S is not in BARBER, it shifts past it.' +
                    '</div>' +

                    '<span class="code-label">Java Code (Bad Symbol Heuristic)</span>' +
                    '<div class="code-box">' +
                        '// Simplified Bad Character Heuristic\n' +
                        'int max(int a, int b) { return (a > b) ? a : b; }\n' +
                        '\n' +
                        'void search(char txt[], char pat[]) {\n' +
                        '    int m = pat.length;\n' +
                        '    int n = txt.length;\n' +
                        '    int badChar[] = new int[256];\n' +
                        '\n' +
                        '    // Initialize badChar array like Horspool\n' +
                        '    for (int i = 0; i < 256; i++) badChar[i] = -1;\n' +
                        '    for (int i = 0; i < m; i++) badChar[pat[i]] = i;\n' +
                        '\n' +
                        '    int s = 0;\n' +
                        '    while (s <= (n - m)) {\n' +
                        '        int j = m - 1;\n' +
                        '        while (j >= 0 && pat[j] == txt[s + j])\n' +
                        '            j--;\n' +
                        '        if (j < 0) {\n' +
                        '            System.out.println("Found at: " + s);\n' +
                        '            s += (s + m < n) ? m - badChar[txt[s + m]] : 1;\n' +
                        '        } else {\n' +
                        '            s += max(1, j - badChar[txt[s + j]]);\n' +
                        '        }\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: GREEDY INTRO & CHANGE MAKING
    // ============================================
    'gre_intro': {
        title: "Greedy: Intro & Change Making",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Greedy Principle</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'A greedy algorithm constructs a solution through a sequence of steps. At each step, it makes the choice that looks <strong>best at the moment</strong> (locally optimal), hoping this leads to a globally optimal solution.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Three Characteristics</span>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li><strong>Feasible:</strong> Satisfies problem constraints.</li>' +
                        '<li><strong>Locally Optimal:</strong> Best choice among current options.</li>' +
                        '<li><strong>Irrevocable:</strong> Once made, a choice cannot be changed (no backtracking).</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Change Making Problem</h4>' +
                    '<p class="text-sm">Give change for amount $n$ using the least number of coins.</p>' +
                    '<p class="text-sm mt-2"><strong>Greedy Strategy:</strong> Repeatedly choose the largest coin denomination $d$ such that $d \\le \\text{remaining amount}$.</p>' +
                    '<div class="warn-box mt-2">' +
                        '<strong>Warning:</strong> Optimal for standard currencies (US, SA), but fails for arbitrary sets (e.g., Coins {1, 3, 4}, Target 6). Greedy gives {4, 1, 1} (3 coins). Optimal is {3, 3} (2 coins).' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">GREEDY CHANGE MAKING</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm MakeChange(Coins D[1..m], Amount n)\n' +
                        '  Sort D from largest to smallest\n' +
                        '  Solution S <- empty\n' +
                        '  for i <- 1 to m do\n' +
                        '    while n >= D[i] do\n' +
                        '      n <- n - D[i]\n' +
                        '      S.add(D[i])\n' +
                        '  if n > 0 return "No solution"\n' +
                        '  return S' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'List<Integer> getChange(int[] denominations, int amount) {\n' +
                        '    // Assume denominations sorted descending\n' +
                        '    List<Integer> result = new ArrayList<>();\n' +
                        '    for (int coin : denominations) {\n' +
                        '        while (amount >= coin) {\n' +
                        '            amount -= coin;\n' +
                        '            result.add(coin);\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return result;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Time Efficiency: O(n) in worst case (if we mostly use 1s)\n' +
                        '// or O(m) if we can use modulo division.\n' +
                        '// Note: It is fast, but not always optimal.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: HUFFMAN CODING
    // ============================================
    'gre_huff': {
        title: "Huffman Coding",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Variable Length Encoding</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Assigns shorter bit patterns to characters that occur more frequently. Used for file compression (ZIP, MP3).' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Prefix-Free Codes</span>' +
                    '<p class="text-sm">No code is a prefix of another (e.g., if A=0, B=01 is invalid because B starts with A). This ensures unambiguous decoding without separators.</p>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">The Algorithm</h4>' +
                    '<ol class="list-decimal pl-5 space-y-1 text-sm opacity-80">' +
                        '<li>Create leaf nodes for all characters with their frequencies (weights).</li>' +
                        '<li>Put all nodes in a priority queue.</li>' +
                        '<li>While queue size > 1:</li>' +
                        '<ul class="list-disc pl-5">' +
                            '<li>Remove two smallest nodes ($T_1, T_2$).</li>' +
                            '<li>Create new parent with weight $T_1+T_2$.</li>' +
                            '<li>Insert parent back into queue.</li>' +
                        '</ul>' +
                    '</ol>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">HUFFMAN TREE CONSTRUCTION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Huffman(C)\n' +
                        '  PQ <- PriorityQueue(C) // Ordered by frequency\n' +
                        '  for i <- 1 to n-1 do\n' +
                        '    z <- AllocateNode()\n' +
                        '    x <- PQ.extractMin()\n' +
                        '    y <- PQ.extractMin()\n' +
                        '    z.left <- x\n' +
                        '    z.right <- y\n' +
                        '    z.freq <- x.freq + y.freq\n' +
                        '    PQ.insert(z)\n' +
                        '  return PQ.extractMin() // Root of tree' +
                    '</div>' +

                    '<span class="code-label">Java Concepts</span>' +
                    '<div class="code-box">' +
                        'PriorityQueue<Node> pq = new PriorityQueue<>();\n' +
                        '// ... fill pq ...\n' +
                        '\n' +
                        'while (pq.size() > 1) {\n' +
                        '    Node left = pq.poll();\n' +
                        '    Node right = pq.poll();\n' +
                        '    \n' +
                        '    // Combine weights\n' +
                        '    Node parent = new Node(left.freq + right.freq);\n' +
                        '    parent.left = left;\n' +
                        '    parent.right = right;\n' +
                        '    \n' +
                        '    pq.add(parent);\n' +
                        '}\n' +
                        '// Tree built. 0 = Left Edge, 1 = Right Edge.' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Time Efficiency: O(n log n)\n' +
                        '// n: Number of characters\n' +
                        '// Heap operations (insert/extract) take log n.\n' +
                        '// We do this 2n - 2 times.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
};

