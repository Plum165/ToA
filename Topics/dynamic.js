export const dynamic = {
// ============================================
    // TOPIC: DP INTRO & FIBONACCI
    // ============================================
    'dyn_intro': {
        title: "Dynamic Programming: Introduction",
        notes: 
            '<div class="space-y-8">' +
                // --- DEFINITION ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Principle</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Dynamic Programming (DP) solves problems by breaking them into overlapping sub-problems. Unlike Divide & Conquer, these sub-problems happen repeatedly. We solve each sub-problem <strong>once</strong> and store the result in a table.' +
                    '</p>' +
                    '<div class="mt-2 p-2 border border-purple-500/30 bg-purple-500/10 rounded text-center text-sm">' +
                        '<strong>Principle of Optimality:</strong> An optimal solution to the problem contains optimal solutions to its sub-problems.' +
                    '</div>' +
                '</div>' +

                // --- BRUTE FORCE VS DP (FIBONACCI) ---
                '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
                    // Brute Force
                    '<div class="bg-red-900/20 p-4 rounded-lg border border-red-500/30">' +
                        '<h4 class="font-bold text-red-300 mb-2">Brute Force (Recursion)</h4>' +
                        '<p class="text-xs mb-2">Calculates same values repeatedly.</p>' +
                        '<div class="font-mono text-xs text-center leading-loose">' +
                            'F(5)<br>' +
                            '/   \\<br>' +
                            'F(4)   F(3)<br>' +
                            '/  \\   /  \\<br>' +
                            'F(3) F(2) F(2) F(1)' +
                        '</div>' +
                        '<p class="text-xs mt-2 text-red-400 font-bold">Complexity: Exponential $O(2^n)$</p>' +
                    '</div>' +
                    
                    // DP
                    '<div class="bg-green-900/20 p-4 rounded-lg border border-green-500/30">' +
                        '<h4 class="font-bold text-green-300 mb-2">Dynamic Programming</h4>' +
                        '<p class="text-xs mb-2">Store results in an array (Memoization).</p>' +
                        '<div class="flex gap-1 justify-center mt-4 font-mono text-sm">' +
                            '<div class="p-2 border border-green-500">0</div>' +
                            '<div class="p-2 border border-green-500">1</div>' +
                            '<div class="p-2 border border-green-500">1</div>' +
                            '<div class="p-2 border border-green-500">2</div>' +
                            '<div class="p-2 border border-green-500">3</div>' +
                            '<div class="p-2 border border-green-500">5</div>' +
                        '</div>' +
                        '<p class="text-xs mt-4 text-green-400 font-bold">Complexity: Linear $\\Theta(n)$</p>' +
                    '</div>' +
                '</div>' +

                // --- MEMORY FUNCTIONS ---
                '<div class="step-card">' +
                    '<span class="step-title">Approaches</span>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong>Bottom-Up:</strong> Fill table iteratively starting from base cases. (Standard DP).</li>' +
                        '<li><strong>Top-Down (Memoization):</strong> Use recursion, but check the table first. If value exists, return it; otherwise calculate and save.</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">FIBONACCI COMPARISON</div>' +
                    
                    '<span class="code-label">1. Iterative DP (Bottom-Up)</span>' +
                    '<div class="code-box">' +
                        'int fibDP(int n) {\n' +
                        '    int[] F = new int[n + 1];\n' +
                        '    F[0] = 0;\n' +
                        '    F[1] = 1;\n' +
                        '    for (int i = 2; i <= n; i++) {\n' +
                        '        F[i] = F[i-1] + F[i-2];\n' +
                        '    }\n' +
                        '    return F[n];\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">2. Memoization (Top-Down)</span>' +
                    '<div class="code-box">' +
                        'int[] memo = new int[100]; // Init with -1\n\n' +
                        'int fibMemo(int n) {\n' +
                        '    if (n <= 1) return n;\n' +
                        '    if (memo[n] != -1) return memo[n]; // Lookup\n' +
                        '    \n' +
                        '    memo[n] = fibMemo(n-1) + fibMemo(n-2);\n' +
                        '    return memo[n];\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: CHANGE MAKING
    // ============================================
    'dyn_change': {
        title: "Change Making (DP Solution)",
        notes: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Problem</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Find the <strong>minimum number of coins</strong> needed to make amount $n$ using denominations $d_1, d_2, \\dots, d_m$. Unlike Greedy, DP guarantees an optimal solution for <em>any</em> set of coins.' +
                    '</p>' +
                '</div>' +

                // --- RECURRENCE ---
                '<div class="step-card border-l-4 border-blue-500">' +
                    '<span class="step-title">Recurrence Relation</span>' +
                    '<p class="text-sm mb-2">To find $F(n)$ (min coins for $n$), we try taking every possible coin $d_j$ and see which one leaves us with the smallest remainder problem.</p>' +
                    '<div class="latex-output text-center">$$F(n) = \\min_{j: n \\ge d_j} \\{ F(n - d_j) \\} + 1$$</div>' +
                    '<p class="text-xs text-center opacity-70">Base case: $F(0) = 0$</p>' +
                '</div>' +

                // --- VISUAL TRACE ---
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-xs text-center text-accent mb-4">Example: Amount=6, Coins={1, 3, 4}</h4>' +
                    '<div class="grid grid-cols-7 gap-1 text-center font-mono text-sm">' +
                        // Headers
                        '<div class="text-gray-500 text-xs">Amt</div>' +
                        '<div class="text-gray-500 text-xs">0</div>' +
                        '<div class="text-gray-500 text-xs">1</div>' +
                        '<div class="text-gray-500 text-xs">2</div>' +
                        '<div class="text-gray-500 text-xs">3</div>' +
                        '<div class="text-gray-500 text-xs">4</div>' +
                        '<div class="text-gray-500 text-xs">5</div>' +
                        
                        // Row F
                        '<div class="font-bold text-blue-300">F[i]</div>' +
                        '<div class="bg-black/40 rounded">0</div>' +
                        '<div class="bg-black/40 rounded">1</div>' +
                        '<div class="bg-black/40 rounded">2</div>' +
                        '<div class="bg-black/40 rounded">1</div>' +
                        '<div class="bg-black/40 rounded">1</div>' +
                        '<div class="bg-black/40 rounded">2</div>' +
                    '</div>' +
                    
                    // Calculation for F(6)
                    '<div class="mt-4 p-3 bg-white/5 rounded text-sm font-mono">' +
                        '<p class="text-xs text-gray-400 mb-1">Calculating F(6):</p>' +
                        '<ul class="space-y-1">' +
                            '<li>Use 1: F(5) + 1 = 2 + 1 = 3</li>' +
                            '<li>Use 3: F(3) + 1 = 1 + 1 = 2</li>' +
                            '<li>Use 4: F(2) + 1 = 2 + 1 = 3</li>' +
                        '</ul>' +
                        '<p class="mt-2 text-green-400 font-bold">Min is 2. (Coins: 3, 3)</p>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">CHANGE MAKING IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Java Code</span>' +
                    '<div class="code-box">' +
                        'int makeChange(int[] coins, int amount) {\n' +
                        '    int[] F = new int[amount + 1];\n' +
                        '    F[0] = 0;\n' +
                        '    \n' +
                        '    // Fill table from 1 to amount\n' +
                        '    for (int i = 1; i <= amount; i++) {\n' +
                        '        int minCoins = Integer.MAX_VALUE;\n' +
                        '        \n' +
                        '        // Try every coin\n' +
                        '        for (int coin : coins) {\n' +
                        '            if (i >= coin) {\n' +
                        '                int res = F[i - coin];\n' +
                        '                if (res < minCoins) minCoins = res;\n' +
                        '            }\n' +
                        '        }\n' +
                        '        F[i] = minCoins + 1;\n' +
                        '    }\n' +
                        '    return F[amount];\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: WARSHALL'S ALGORITHM
    // ============================================
    'dyn_warshall': {
        title: "Warshall's Algorithm (Transitive Closure)",
        notes: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Reachability</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Given a directed graph, Transitive Closure is a matrix $T$ where $T[i,j] = 1$ if there is <strong>any path</strong> from $i$ to $j$, and 0 otherwise.' +
                    '</p>' +
                '</div>' +

                // --- RECURRENCE ---
                '<div class="step-card">' +
                    '<span class="step-title">The Logic</span>' +
                    '<p class="text-sm mb-2">We construct a series of matrices $R^{(k)}$. $R^{(k)}[i,j]$ means "Is there a path from $i$ to $j$ using only intermediate vertices $\{1, \\dots, k\}$?"</p>' +
                    '<div class="latex-output text-center">$$R^{(k)}[i,j] = R^{(k-1)}[i,j] \\lor (R^{(k-1)}[i,k] \\land R^{(k-1)}[k,j])$$</div>' +
                    '<p class="text-xs text-center opacity-70 mt-2">Basically: Can I go direct OR (can I go i->k AND k->j)?</p>' +
                '</div>' +

                // --- VISUAL MATRIX ---
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-xs text-center text-accent mb-2">Matrix Visualization</h4>' +
                    '<div class="flex items-center justify-center gap-4 font-mono text-sm">' +
                        '<div class="text-center">' +
                            '<p class="mb-1 text-xs">Adjacency</p>' +
                            '<div class="grid grid-cols-3 gap-1 p-2 bg-black/40 rounded">' +
                                '<div>0</div><div>1</div><div>0</div>' +
                                '<div>0</div><div>0</div><div>1</div>' +
                                '<div>0</div><div>0</div><div>0</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="text-2xl text-gray-500">&rarr;</div>' +
                        '<div class="text-center">' +
                            '<p class="mb-1 text-xs">Closure (R)</p>' +
                            '<div class="grid grid-cols-3 gap-1 p-2 bg-black/40 rounded">' +
                                '<div>0</div><div>1</div><div class="text-green-400 font-bold">1</div>' +
                                '<div>0</div><div>0</div><div>1</div>' +
                                '<div>0</div><div>0</div><div>0</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<p class="text-xs text-center mt-2 opacity-60">Path 1->2 and 2->3 creates Path 1->3</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">WARSHALL IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Warshall(A[1..n, 1..n])\n' +
                        '  R(0) <- A\n' +
                        '  for k <- 1 to n do\n' +
                        '    for i <- 1 to n do\n' +
                        '      for j <- 1 to n do\n' +
                        '        // Path exists if direct OR through k\n' +
                        '        R[i, j] <- R[i, j] OR (R[i, k] AND R[k, j])\n' +
                        '  return R' +
                    '</div>' +

                    '<span class="code-label">Complexity</span>' +
                    '<div class="code-box">' +
                        '// 3 Nested Loops\n' +
                        '// Time: Theta(n^3)\n' +
                        '// Space: Theta(n^2) (Matrix)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: FLOYD'S ALGORITHM
    // ============================================
    'dyn_floyd': {
        title: "Floyd's Algorithm (All-Pairs Shortest Path)",
        notes: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Shortest Paths</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Finds the shortest distance between <strong>every pair</strong> of vertices in a weighted graph. It is structurally nearly identical to Warshall\'s algorithm.' +
                    '</p>' +
                '</div>' +

                // --- RECURRENCE ---
                '<div class="step-card border-l-4 border-yellow-500">' +
                    '<span class="step-title">Recurrence Relation</span>' +
                    '<p class="text-sm mb-2">We construct matrices $D^{(k)}$ storing distances using intermediate vertices $\{1, \\dots, k\}$.</p>' +
                    '<div class="latex-output text-center">$$D^{(k)}[i,j] = \\min(D^{(k-1)}[i,j], D^{(k-1)}[i,k] + D^{(k-1)}[k,j])$$</div>' +
                    '<p class="text-xs text-center opacity-70 mt-2">Min of: Current best path VS Path through k.</p>' +
                '</div>' +

                // --- VISUAL ---
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-xs text-center text-accent mb-2">Logic Check</h4>' +
                    '<p class="text-sm font-mono text-center">if (D[i][k] + D[k][j] < D[i][j])</p>' +
                    '<p class="text-sm font-mono text-center text-green-400">Update D[i][j]</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">FLOYD IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Floyd(W[1..n, 1..n])\n' +
                        '  D <- W // Initialize with weights (Inf if no edge)\n' +
                        '  for k <- 1 to n do\n' +
                        '    for i <- 1 to n do\n' +
                        '      for j <- 1 to n do\n' +
                        '        D[i, j] <- min(D[i, j], D[i, k] + D[k, j])\n' +
                        '  return D' +
                    '</div>' +

                    '<span class="code-label">Complexity</span>' +
                    '<div class="code-box">' +
                        '// Time: Theta(n^3)\n' +
                        '// Space: Theta(n^2)\n' +
                        '// Note: Can also extract the Path using a Predecessor matrix.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: KNAPSACK PROBLEM (DP)
    // ============================================
    'dyn_knap': {
        title: "Knapsack Problem (DP Solution)",
        notes: 
            '<div class="space-y-8">' +
                // --- INTRO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Problem</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Given $n$ items with Weights ($w$) and Values ($v$), and a knapsack of capacity $W$, find the most valuable subset that fits.' +
                    '</p>' +
                '</div>' +

                // --- RECURRENCE ---
                '<div class="step-card border-l-4 border-green-500">' +
                    '<span class="step-title">Recurrence Relation</span>' +
                    '<p class="text-sm mb-2">Let $V[i, j]$ be the max value using first $i$ items with capacity $j$.</p>' +
                    '<div class="latex-output text-center">$$V[i, j] = \\max(V[i-1, j], v_i + V[i-1, j-w_i])$$</div>' +
                    '<p class="text-xs text-center opacity-70 mt-2">Max of: (Exclude item i) vs (Include item i + Remaining Capacity value)</p>' +
                '</div>' +

                // --- VISUAL TABLE ---
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-xs text-center text-accent mb-4">DP Table Construction</h4>' +
                    '<p class="text-xs text-center mb-2">Items: {w:2, v:12}, {w:1, v:10}, {w:3, v:20}. Cap: 5</p>' +
                    
                    '<div class="grid grid-cols-7 gap-1 text-center font-mono text-xs">' +
                        // Header
                        '<div class="text-gray-500">i/j</div>' +
                        '<div class="text-gray-500">0</div><div class="text-gray-500">1</div><div class="text-gray-500">2</div>' +
                        '<div class="text-gray-500">3</div><div class="text-gray-500">4</div><div class="text-gray-500">5</div>' +
                        
                        // Row 0
                        '<div class="font-bold text-blue-300">0</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-black/30">0</div><div class="bg-black/30">0</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-black/30">0</div><div class="bg-black/30">0</div>' +

                        // Row 1 (Item 1: 2, 12)
                        '<div class="font-bold text-blue-300">1</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-black/30">0</div>' +
                        '<div class="bg-green-500/20 border border-green-500">12</div><div class="bg-green-500/20">12</div><div class="bg-green-500/20">12</div><div class="bg-green-500/20">12</div>' +

                        // Row 2 (Item 2: 1, 10)
                        '<div class="font-bold text-blue-300">2</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-green-500/20 border border-green-500">10</div><div class="bg-black/30">12</div>' +
                        '<div class="bg-green-500/20 border border-green-500">22</div><div class="bg-green-500/20">22</div><div class="bg-green-500/20">22</div>' +
                    '</div>' +
                    '<p class="text-xs text-center mt-3 opacity-60">At Row 2, Col 3: max(12, 10 + V[1, 2]) = 22</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">KNAPSACK IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int knapSack(int W, int wt[], int val[], int n) {\n' +
                        '    int[][] K = new int[n + 1][W + 1];\n' +
                        '\n' +
                        '    for (int i = 0; i <= n; i++) {\n' +
                        '        for (int w = 0; w <= W; w++) {\n' +
                        '            if (i == 0 || w == 0)\n' +
                        '                K[i][w] = 0;\n' +
                        '            else if (wt[i - 1] <= w)\n' +
                        '                K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], \n' +
                        '                                   K[i - 1][w]);\n' +
                        '            else\n' +
                        '                K[i][w] = K[i - 1][w];\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return K[n][W];\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Time: Theta(n * W)\n' +
                        '// Space: Theta(n * W)\n' +
                        '// Note: This is "Pseudo-Polynomial" because it depends on W.\n' +
                        '// (W is a value, not count of elements).' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
}