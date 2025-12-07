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
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'For a Directed Acyclic Graph (DAG), list the vertices in an order such that for every edge $u \\to v$, $u$ appears before $v$ in the list.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Source Removal Method (Decrease by 1)</span>' +
                    '<ol class="list-decimal pl-5 mt-2 space-y-2 text-sm">' +
                        '<li>Identify a <strong>Source</strong> vertex (a vertex with no incoming edges).</li>' +
                        '<li>Add it to the sorted list.</li>' +
                        '<li>"Remove" it and all its outgoing edges from the graph.</li>' +
                        '<li>Repeat until the graph is empty.</li>' +
                    '</ol>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<p class="text-sm"><strong>Note:</strong> If at any point there are vertices but no source, the graph has a cycle (not a DAG).</p>' +
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
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Johnson-Trotter Algorithm</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'An algorithm to generate all $n!$ permutations without recursion. It uses the concept of <strong>Mobile Integers</strong>.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Rules</span>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li>Each number has a direction (arrow). Initially: $\\leftarrow 1~ \\leftarrow 2~ \\dots~ \\leftarrow n$.</li>' +
                        '<li>A number $k$ is <strong>Mobile</strong> if its arrow points to a smaller adjacent neighbor.</li>' +
                        '<li><strong>Step 1:</strong> Find the largest mobile integer $k$.</li>' +
                        '<li><strong>Step 2:</strong> Swap $k$ with the neighbor it points to.</li>' +
                        '<li><strong>Step 3:</strong> Reverse the direction of all elements larger than $k$.</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">JOHNSON-TROTTER</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm JohnsonTrotter(n)\n' +
                        '  Initialize array with arrows pointing left\n' +
                        '  while there exists a mobile integer do\n' +
                        '    k <- largest mobile integer\n' +
                        '    swap k and its neighbor in arrow direction\n' +
                        '    reverse direction of all elements > k\n' +
                        '    print current permutation' +
                    '</div>' +

                    '<span class="code-label">Trace Example (n=3)</span>' +
                    '<div class="code-box">' +
                        '1. <-1 <-2 <-3  (3 is mobile, swap left)\n' +
                        '2. <-1 <-3 <-2  (3 is mobile, swap left)\n' +
                        '3. <-3 <-1 <-2  (3 stuck. 2 is mobile, swap left)\n' +
                        '4. <-3 <-2 <-1  (Flip 3 > 2. Now: ->3 <-2 <-1)\n' +
                        '5. ->3 <-2 <-1  (3 mobile right, swap)\n' +
                        '   ...' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Efficiency: Theta(n!)\n' +
                        '// It generates every permutation exactly once.' +
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
    // TOPIC: DIVIDE & CONQUER INTRO (MERGE SORT)
    // ============================================
    'div_intro': {
        title: "Divide & Conquer: Merge Sort",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Divide and Conquer involves three steps: <strong>Divide</strong> the problem into smaller sub-problems, <strong>Conquer</strong> them recursively, and <strong>Combine</strong> the results to solve the original problem.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Merge Sort Logic</span>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong>Divide:</strong> Split array $A[0..n-1]$ in half into $B$ and $C$.</li>' +
                        '<li><strong>Conquer:</strong> Recursively sort $B$ and $C$.</li>' +
                        '<li><strong>Combine:</strong> Merge sorted arrays $B$ and $C$ back into $A$.</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Efficiency</h4>' +
                    '<p class="text-sm">Recurrence: $T(n) = 2T(n/2) + c \\cdot n$</p>' +
                    '<p class="text-sm mt-1"><strong>Complexity:</strong> $\\Theta(n \\log n)$ in all cases (Best, Average, Worst).</p>' +
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
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Partitioning Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Unlike MergeSort which divides by position (index), QuickSort divides by <strong>value</strong> using a pivot.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Algorithm Steps</span>' +
                    '<ol class="list-decimal pl-5 mt-2 space-y-2 text-sm">' +
                        '<li>Select a <strong>Pivot</strong> (e.g., first element, or median).</li>' +
                        '<li><strong>Partition:</strong> Rearrange list so elements < pivot are on left, elements > pivot are on right.</li>' +
                        '<li>Exchange pivot with last element of first sublist.</li>' +
                        '<li>Recursively QuickSort the two sublists.</li>' +
                    '</ol>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Efficiency Analysis</h4>' +
                    '<ul class="space-y-1 text-sm font-mono">' +
                        '<li>Best/Avg: $\\Theta(n \\log n)$ (Split in middle)</li>' +
                        '<li>Worst: $\\Theta(n^2)$ (Sorted array, bad pivot)</li>' +
                        '<li>Space: In-place (unlike MergeSort).</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">QUICKSORT</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm QuickSort(A[l..r])\n' +
                        '  if l < r\n' +
                        '    s <- Partition(A, l, r) // s is split position\n' +
                        '    QuickSort(A, l, s - 1)\n' +
                        '    QuickSort(A, s + 1, r)' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'void quickSort(int[] arr, int low, int high) {\n' +
                        '    if (low < high) {\n' +
                        '        int pi = partition(arr, low, high);\n' +
                        '        quickSort(arr, low, pi - 1);\n' +
                        '        quickSort(arr, pi + 1, high);\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Partition Logic (Hoare/Lomuto)</span>' +
                    '<div class="code-box">' +
                        '// Scans from left (i) finding > pivot\n' +
                        '// Scans from right (j) finding < pivot\n' +
                        '// Swaps them until i and j cross.' +
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
};

