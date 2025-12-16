export const notations = {
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
                    '<div class="latex-output text-center">$c_2 g(n) \\le t(n) \\le c_1 g(n) \\quad \\forall n \\ge n_0$</div>' +
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
    }

}