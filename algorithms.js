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
    // TOPIC 3: THETA (TIGHT BOUND)
    // ============================================
    'theta': {
        title: "Theta Notation Θ (Tight Bound)",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'A function $t(n) \\in \\Theta(g(n))$ iff there are constants $c_1, c_2$ and $n_0$ such that <span class="font-bold text-green-400 whitespace-nowrap">$c_2 g(n) \\le t(n) \\le c_1 g(n)$</span> for all $n \\ge n_0$.' +
                    '</p>' +
                    '<p class="mt-2 text-sm opacity-80">' +
                        'This sandwiches the function. It means the algorithm behaves <strong>exactly</strong> proportional to $g(n)$ in all cases.' +
                    '</p>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-center text-accent">Visualizing Theta</h4>' +
                    '<div class="h-64"><canvas id="chart-theta"></canvas></div>' +
                '</div>' +
            '</div>',
        code: `
// ==========================================
// 1. LINEAR SEARCH
// ==========================================
// NOT typically Θ(n) because runtime varies based on 
// where the item is. 
// It is Θ(n) ONLY if we assume worst-case always.


// ==========================================
// 2. SORTING (Selection Sort)
// ==========================================
// Unlike Bubble Sort, Selection Sort always scans the 
// remaining array to find the min, sorted or not.
// Best Case: n^2
// Worst Case: n^2
// Efficiency: Θ(n^2)
function selectionSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) min = j;
        }
        if (min != i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
}

// ==========================================
// 3. FIBONACCI (Memoized)
// ==========================================
// With caching, we solve each sub-problem exactly once.
// Efficiency: Θ(n)
const memo = {};
function fibMemo(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
    return memo[n];
}

// ==========================================
// 4. POWERSETS
// ==========================================
// Generating subsets always takes 2^n steps.
// Efficiency: Θ(2^n)
`
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
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Analyzing Sequential Algorithms</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'For non-recursive algorithms (loops), we measure efficiency by counting the <strong>Basic Operation</strong> using summation.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">3 Steps for Calculation</span>' +
                    '<ol class="list-decimal pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong>Identify Basic Operation:</strong> The operation executed most frequently (e.g., comparison inside the innermost loop).</li>' +
                        '<li><strong>Set up Summation:</strong> Write an equation $C(n)$ summing the number of times the op runs.</li>' +
                        '<li><strong>Solve:</strong> Simplify the sum using mathematical rules to find the Big O class.</li>' +
                    '</ol>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-center text-accent">Essential Math Tools</h4>' +
                    '<ul class="space-y-2 text-sm font-mono">' +
                        '<li>1. $\\sum_{i=1}^{n} 1 = n$</li>' +
                        '<li>2. $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} \\approx \\frac{1}{2}n^2 \\in \\Theta(n^2)$</li>' +
                        '<li>3. $\\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- EXAMPLE 1 ---
                '<div>' +
                    '<div class="code-section-title">1. FIND MAX ELEMENT (Linear)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm MaxElement(A[0..n-1])\n' +
                        '  maxVal <- A[0]\n' +
                        '  for i <- 1 to n-1 do\n' +
                        '    if A[i] > maxVal\n' +
                        '      maxVal <- A[i]\n' +
                        '  return maxVal' +
                    '</div>' +

                    '<span class="code-label">Java Code</span>' +
                    '<div class="code-box">' +
                        'int maxElement(int[] A) {\n' +
                        '    int maxVal = A[0];\n' +
                        '    for (int i = 1; i < A.length; i++) {\n' +
                        '        if (A[i] > maxVal) { // Basic Op\n' +
                        '             maxVal = A[i];\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return maxVal;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">JavaScript Code (Analysis)</span>' +
                    '<div class="code-box">' +
                        '// Summation Setup:\n' +
                        '// Loop runs from 1 to n-1.\n' +
                        '// Sigma i=1 to n-1 of (1)\n' +
                        '// = (n - 1) - 1 + 1 \n' +
                        '// = n - 1\n' +
                        '// Complexity: Theta(n)' +
                    '</div>' +
                '</div>' +

                // --- EXAMPLE 2 ---
                '<div>' +
                    '<div class="code-section-title">2. CHECK DUPLICATES (Quadratic)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm UniqueElements(A[0..n-1])\n' +
                        '  for i <- 0 to n-2 do\n' +
                        '    for j <- i+1 to n-1 do\n' +
                        '      if A[i] == A[j] return false\n' +
                        '  return true' +
                    '</div>' +

                    '<span class="code-label">Java Code</span>' +
                    '<div class="code-box">' +
                        'boolean isUnique(int[] A) {\n' +
                        '    int n = A.length;\n' +
                        '    for (int i = 0; i < n - 1; i++) {\n' +
                        '        for (int j = i + 1; j < n; j++) {\n' +
                        '            if (A[i] == A[j]) return false;\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return true;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">JavaScript Code (Analysis)</span>' +
                    '<div class="code-box">' +
                        '// Summation Setup:\n' +
                        '// Outer: i=0 to n-2. Inner: j=i+1 to n-1\n' +
                        '// We sum the inner loop execution.\n' +
                        '// Sum(i=0 to n-2) of [ (n-1) - (i+1) + 1 ]\n' +
                        '// = Sum(n - 1 - i)\n' +
                        '// = (n-1) + (n-2) + ... + 1\n' +
                        '// = n(n-1)/2\n' +
                        '// Complexity: Theta(n^2)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: RECURRENCE RELATIONS (RECURSIVE)
    // ============================================
    'recurrence': {
        title: "Efficiency: Recurrence Relations",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Analyzing Recursive Algorithms</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'For recursive algorithms, we cannot just use summation. We use <strong>Recurrence Relations</strong> defined by $T(n)$.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">The Master Theorem</span>' +
                    '<p class="text-sm mb-2">Used for Divide & Conquer relations of form: $T(n) = aT(n/b) + f(n)$</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong>$a$:</strong> Number of sub-problems.</li>' +
                        '<li><strong>$b$:</strong> Factor by which problem size splits.</li>' +
                        '<li><strong>$d$:</strong> Driver function power ($f(n) \\in \\Theta(n^d)$).</li>' +
                    '</ul>' +
                    '<div class="mt-4 p-3 bg-white/5 rounded text-sm font-mono">' +
                        'If $a < b^d$ : $\\Theta(n^d)$ (Driver dominates)<br>' +
                        'If $a = b^d$ : $\\Theta(n^d \\log n)$ (Balanced)<br>' +
                        'If $a > b^d$ : $\\Theta(n^{\\log_b a})$ (Roots dominate)' +
                    '</div>' +
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
};

