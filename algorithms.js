/* algorithms.js - Content Database */

const ALGO_CONTENT = {
    // --- BIG O (UPPER BOUND) ---
    'big': {
        title: "Big O Notation (Upper Bound)",
        notes: `
            <div class="space-y-6">
                <!-- Definition -->
                <div>
                    <h3 class="text-xl font-bold text-accent mb-2">Definition</h3>
                    <p class="leading-relaxed">
                        A function $t(n) \\in O(g(n))$ if and only if there is a positive constant $c$ and an integer $n_0$ such that 
                        $t(n) \\le c \\cdot g(n)$ for all $n \\ge n_0$.
                    </p>
                    <p class="mt-2 text-sm opacity-80">
                        This is the <strong>Worst Case</strong> scenario (Upper Bound).
                    </p>
                </div>

                <!-- Graph -->
                <div class="glass p-4 rounded-lg">
                    <h4 class="font-bold text-sm mb-2 text-center text-accent">Visualizing Big O</h4>
                    <div class="h-64">
                        <canvas id="chart-big"></canvas>
                    </div>
                </div>

                <!-- Proof Steps -->
                <div class="step-card">
                    <span class="step-title">Proof: $100n + 5 \\in O(n)$</span>
                    <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
                        <li>We need $100n + 5 \\le c \\cdot n$.</li>
                        <li>Divide by $n$: $100 + \\frac{5}{n} \\le c$.</li>
                        <li>If we pick $n_0 = 5$, then $100 + 1 = 101$.</li>
                        <li>Set <strong>$c = 101$</strong>. Condition holds for all $n \\ge 5$.</li>
                    </ul>
                </div>
            </div>
        `,
        code: `
// 1. O(n) - Linear Time
// We look at every element once.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === target) return i;
    }
    return -1;
}

// 2. O(n^2) - Quadratic Time
// Nested loops typically result in n * n
function printPairs(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {         
        for (let j = 0; j < n; j++) {     
            console.log(arr[i], arr[j]);
        }
    }
}
        `
    },

    // --- OMEGA (LOWER BOUND) ---
    'omega': {
        title: "Omega Notation Ω (Lower Bound)",
        notes: `
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold text-accent mb-2">Definition</h3>
                    <p class="leading-relaxed">
                        A function $t(n) \\in \\Omega(g(n))$ if there is a positive constant $c$ and integer $n_0$ such that 
                        $t(n) \\ge c \\cdot g(n)$ for all $n \\ge n_0$.
                    </p>
                    <p class="mt-2 text-sm opacity-80">
                        This is the <strong>Best Case</strong> scenario (Lower Bound).
                    </p>
                </div>

                <!-- Graph -->
                <div class="glass p-4 rounded-lg">
                    <h4 class="font-bold text-sm mb-2 text-center text-accent">Visualizing Omega</h4>
                    <div class="h-64">
                        <canvas id="chart-omega"></canvas>
                    </div>
                </div>
            </div>
        `,
        code: `
// Best Case Analysis: Linear Search
function linearSearch(arr, target) {
    // If target is at arr[0], this loop runs only once.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// Worst Case: O(n)
// Best Case: Ω(1) (Constant time)
        `
    },

    // --- THETA (TIGHT BOUND) ---
    'theta': {
        title: "Theta Notation Θ (Tight Bound)",
        notes: `
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold text-accent mb-2">Definition</h3>
                    <p class="leading-relaxed">
                        A function $t(n) \\in \\Theta(g(n))$ iff there are constants $c_1, c_2$ and $n_0$ such that 
                        $c_2 g(n) \\le t(n) \\le c_1 g(n)$ for all $n \\ge n_0$.
                    </p>
                    <p class="mt-2 text-sm opacity-80">
                        This is an <strong>Exact Bound</strong>. The function is sandwiched between the upper and lower limits.
                    </p>
                </div>

                <!-- Graph -->
                <div class="glass p-4 rounded-lg">
                    <h4 class="font-bold text-sm mb-2 text-center text-accent">Visualizing Theta</h4>
                    <div class="h-64">
                        <canvas id="chart-theta"></canvas>
                    </div>
                </div>
            </div>
        `,
        code: `
// Summing an Array
// This is strictly Θ(n) because it always runs n times.

function sum(arr) {
    let total = 0;
    for(let i=0; i<arr.length; i++) {
        total += arr[i];
    }
    return total;
}
        `
    },

    // --- COMPARISONS (The Table) ---
    'comp': {
        title: "Comparing Efficiency Classes",
        notes: `
            <div class="space-y-6">
                <!-- Explanation -->
                <div>
                    <p class="mb-4">We compare how the number of operations grows as input $n$ increases.</p>
                    
                    <div class="glass p-4 rounded-lg border-l-4 border-green-500">
                        <h4 class="font-bold text-lg mb-2">Efficiency Hierarchy</h4>
                        <ul class="space-y-2 text-sm">
                            <li class="flex items-center gap-2">
                                <span class="badge bg-green-500/20 text-green-400 px-2 rounded text-xs uppercase">Best</span>
                                <span><strong>Logarithmic</strong> <span class="whitespace-nowrap">($\\log_2 n$)</span></span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="badge bg-blue-500/20 text-blue-400 px-2 rounded text-xs uppercase">Good</span>
                                <span><strong>Linear</strong> <span class="whitespace-nowrap">($n$)</span></span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="badge bg-cyan-500/20 text-cyan-400 px-2 rounded text-xs uppercase">Typical</span>
                                <span><strong>Log-Linear</strong> <span class="whitespace-nowrap">($n \\log n$)</span></span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="badge bg-orange-500/20 text-orange-400 px-2 rounded text-xs uppercase">Evil</span>
                                <span><strong>Quadratic</strong> <span class="whitespace-nowrap">($n^2$)</span></span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="badge bg-red-500/20 text-red-400 px-2 rounded text-xs uppercase">Worst</span>
                                <span><strong>Exponential</strong> <span class="whitespace-nowrap">($2^n$)</span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Table Container with Overflow Protection -->
                <div class="w-full overflow-x-auto rounded-lg border border-white/10 bg-black/20">
                    <table class="w-full text-center text-xs md:text-sm font-mono whitespace-nowrap">
                        <thead>
                            <tr class="bg-white/10 text-white font-bold">
                                <th class="p-3">n</th>
                                <th class="p-3 text-green-400">log₂n</th>
                                <th class="p-3 text-blue-400">n</th>
                                <th class="p-3 text-cyan-400">nlog₂n</th>
                                <th class="p-3 text-orange-400">n²</th>
                                <th class="p-3 text-orange-500">n³</th>
                                <th class="p-3 text-red-400">2ⁿ</th>
                                <th class="p-3 text-red-600">n!</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-white/5 opacity-90">
                            <tr><td class="p-2 font-bold">10</td><td class="p-2">3.3</td><td class="p-2">10</td><td class="p-2">33</td><td class="p-2">100</td><td class="p-2">1,000</td><td class="p-2">1,024</td><td class="p-2">3.6M</td></tr>
                            <tr><td class="p-2 font-bold">100</td><td class="p-2">6.6</td><td class="p-2">100</td><td class="p-2">664</td><td class="p-2">10,000</td><td class="p-2">1M</td><td class="p-2">1E+30</td><td class="p-2">Huge</td></tr>
                            <tr><td class="p-2 font-bold">1k</td><td class="p-2">10</td><td class="p-2">1k</td><td class="p-2">9.9k</td><td class="p-2">1M</td><td class="p-2">1B</td><td class="p-2">Huge</td><td class="p-2">Huge</td></tr>
                            <tr><td class="p-2 font-bold">10k</td><td class="p-2">13</td><td class="p-2">10k</td><td class="p-2">130k</td><td class="p-2">100M</td><td class="p-2">1T</td><td class="p-2">-</td><td class="p-2">-</td></tr>
                        </tbody>
                    </table>
                </div>
                <p class="text-xs text-center opacity-60 mt-2">Values approximate. "Huge" exceeds standard computation limits.</p>
            </div>
        `,
        code: `
// Comparison: Sorting 100 Million Items (n=10^8)
// Assume 1 billion ops/sec

// 1. O(n log n) - Merge Sort
// Time = 30 seconds
// Great!

// 2. O(n^2) - Bubble Sort
// Time = 3.5 Years
// Impractical!

// 3. O(n!) - Factorial
// Time = Heat death of the universe
// Impossible.
        `
    }
};