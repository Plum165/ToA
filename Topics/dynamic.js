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

                // --- PROS & CONS ---
                '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
                    // Strengths
                    '<div class="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">' +
                        '<h4 class="font-bold text-green-300 mb-2 border-b border-green-500/20 pb-2">Strengths (Pros)</h4>' +
                        '<ul class="list-disc pl-5 text-sm space-y-2 opacity-90">' +
                            '<li><strong>Guaranteed Optimality:</strong> Unlike Greedy, DP checks all possibilities (smartly) and guarantees the best result.</li>' +
                            '<li><strong>Efficiency:</strong> Reduces Exponential time complexities ($2^n$) to Polynomial time ($n^2$ or $n$).</li>' +
                        '</ul>' +
                    '</div>' +
                    
                    // Weaknesses
                    '<div class="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">' +
                        '<h4 class="font-bold text-red-300 mb-2 border-b border-red-500/20 pb-2">Weaknesses (Cons)</h4>' +
                        '<ul class="list-disc pl-5 text-sm space-y-2 opacity-90">' +
                            '<li><strong>Space Complexity:</strong> Requires memory to store the table of results (Space-Time Tradeoff).</li>' +
                            '<li><strong>Complexity:</strong> Harder to implement than Recursion or Greedy.</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +

                // --- CRITICAL LIMITATION ---
                '<div class="step-card border-l-4 border-red-500">' +
                    '<span class="step-title">Critical Limitation: State Explosion</span>' +
                    '<p class="text-sm mb-2">The biggest limitation of Dynamic Programming is the <strong>number of partial solutions</strong> we must keep track of.</p>' +
                    '<div class="bg-black/30 p-3 rounded text-sm text-red-200">' +
                        'If the objects or states are <strong>not ordered</strong> (e.g., TSP with arbitrary cities), we may have an <strong>exponential number</strong> of possible partial solutions to store, making DP infeasible.' +
                    '</div>' +
                '</div>' +

                // --- BRUTE FORCE VS DP (FIBONACCI) ---
                '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
                    // Brute Force
                    '<div class="bg-black/20 p-4 rounded-lg border border-white/10">' +
                        '<h4 class="font-bold text-gray-400 mb-2">Brute Force (Recursion)</h4>' +
                        '<div class="font-mono text-xs text-center leading-loose opacity-70">' +
                            'F(5)<br>' +
                            '/   \\<br>' +
                            'F(4)   F(3)<br>' +
                            '/  \\   /  \\<br>' +
                            'F(3) F(2) F(2) F(1)' +
                        '</div>' +
                        '<p class="text-xs mt-2 text-red-400 font-bold text-center">Complexity: $O(2^n)$</p>' +
                    '</div>' +
                    
                    // DP
                    '<div class="bg-black/20 p-4 rounded-lg border border-white/10">' +
                        '<h4 class="font-bold text-gray-400 mb-2">Dynamic Programming</h4>' +
                        '<div class="flex gap-1 justify-center mt-4 font-mono text-sm">' +
                            '<div class="p-2 border border-green-500 text-green-400">0</div>' +
                            '<div class="p-2 border border-green-500 text-green-400">1</div>' +
                            '<div class="p-2 border border-green-500 text-green-400">1</div>' +
                            '<div class="p-2 border border-green-500 text-green-400">2</div>' +
                            '<div class="p-2 border border-green-500 text-green-400">3</div>' +
                            '<div class="p-2 border border-green-500 text-green-400">5</div>' +
                        '</div>' +
                        '<p class="text-xs mt-4 text-green-400 font-bold text-center">Complexity: $\\Theta(n)$</p>' +
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

                // --- ALGORITHM EXPLANATION (Based on your notes) ---
                '<div class="step-card">' +
                    '<span class="step-title">Understanding the Algorithm Logic</span>' +
                    '<p class="text-sm mb-3">Here is how the loops described in your notes actually work:</p>' +
                    '<ul class="list-none space-y-3 text-sm font-mono bg-black/20 p-4 rounded border border-white/10">' +
                        '<li><strong class="text-blue-300">1. "Iterate 1 to n":</strong><br><span class="opacity-70 font-sans">We build the solution Bottom-Up. First solve for 1 cent, then 2 cents, etc., up to $n$.</span></li>' +
                        '<li><strong class="text-blue-300">2. "temp stores current max":</strong><br><span class="opacity-70 font-sans">We initialize a temporary variable to Infinity (or a large number). We want to find the <strong>minimum</strong>, so we start high and lower it.</span></li>' +
                        '<li><strong class="text-blue-300">3. "Iterate j over denominations":</strong><br><span class="opacity-70 font-sans">For the current amount, we try every available coin type (e.g., try 1c, then try 3c, then try 4c).</span></li>' +
                        '<li><strong class="text-blue-300">4. "Check... less than current temp":</strong><br><span class="opacity-70 font-sans">We look back in our table. If using coin $d_j$ results in fewer total coins than our current best (`temp`), we update `temp`.</span></li>' +
                        '<li><strong class="text-green-300">5. "Update by adding 1":</strong><br><span class="opacity-70 font-sans">The $+1$ accounts for the coin we just decided to use. Total = (Best way to make remainder) + 1.</span></li>' +
                    '</ul>' +
                '</div>' +

                // --- RECURRENCE ---
                '<div class="step-card border-l-4 border-blue-500">' +
                    '<span class="step-title">The Math Formula</span>' +
                    '<p class="text-sm mb-2">To find $F(n)$, we try taking every possible coin $d_j$ and check the remainder.</p>' +
                    '<div class="latex-output text-center">$$F(n) = \\min_{j: n \\ge d_j} \\{ F(n - d_j) \\} + 1$$</div>' +
                    '<p class="text-xs text-center opacity-70">Base case: $F(0) = 0$</p>' +
                '</div>' +

                // --- VISUAL TRACE ---
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-xs text-center text-accent mb-4">Trace: Amount=6, Coins={1, 3, 4}</h4>' +
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
                        '<p class="text-xs text-gray-400 mb-1">Calculating F(6): (We try all j coins)</p>' +
                        '<ul class="space-y-1">' +
                            '<li>Try 1: F(6-1) + 1 = F(5)+1 = 2+1 = 3</li>' +
                            '<li>Try 3: F(6-3) + 1 = F(3)+1 = 1+1 = 2</li>' +
                            '<li>Try 4: F(6-4) + 1 = F(2)+1 = 2+1 = 3</li>' +
                        '</ul>' +
                        '<p class="mt-2 text-green-400 font-bold">Min is 2. (Resulting Coins: 3, 3)</p>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">CHANGE MAKING IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Java Code (Matches Logic)</span>' +
                    '<div class="code-box">' +
                        'int makeChange(int[] coins, int amount) {\n' +
                        '    int[] F = new int[amount + 1];\n' +
                        '    F[0] = 0; // Base case\n' +
                        '    \n' +
                        '    // 1. Iterate 1 to n (Outer loop)\n' +
                        '    for (int i = 1; i <= amount; i++) {\n' +
                        '        int temp = Integer.MAX_VALUE; // Start with "infinity"\n' +
                        '        \n' +
                        '        // 2. Iterate over denominations (j)\n' +
                        '        for (int coin : coins) {\n' +
                        '            // Check if coin fits\n' +
                        '            if (i >= coin) {\n' +
                        '                int res = F[i - coin]; // Look back in table\n' +
                        '                // Update temp if this path is better\n' +
                        '                if (res != Integer.MAX_VALUE && res < temp)\n' +
                        '                    temp = res;\n' +
                        '            }\n' +
                        '        }\n' +
                        '        // 3. Add 1 (the coin we just used)\n' +
                        '        F[i] = (temp == Integer.MAX_VALUE) ? Integer.MAX_VALUE : temp + 1;\n' +
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
                // --- 1. CORE CONCEPTS (USER NOTES) ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Core Idea</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base mb-2">' +
                        'If there is a way to go from <strong>A to B</strong>, and also from <strong>B to C</strong>, then there is a way to get from <strong>A to C</strong>.' +
                    '</p>' +
                    '<ul class="list-disc pl-5 space-y-1 text-sm opacity-90">' +
                        '<li><strong>Goal:</strong> Build up partial solutions to create a Transitive Closure.</li>' +
                        '<li><strong>Adjacency Matrix:</strong> If there is a directed edge between two vertices, they are directly reachable ($1$), otherwise ($0$).</li>' +
                        '<li><strong>Process:</strong> Check each vertex in turn ($k$) and see if it can act as a bridge to connect other vertices.</li>' +
                    '</ul>' +
                '</div>' +

                // --- 2. INITIAL GRAPH VISUAL ---
                '<div class="step-card border-l-4 border-blue-500">' +
                    '<span class="step-title">Initial Directed Graph</span>' +
                    '<div class="glass p-4 rounded-lg border border-white/10 text-center">' +
                        '<svg viewBox="0 0 300 120" class="w-full h-32">' +
                            '<defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="18" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#fff" /></marker></defs>' +
                            
                            // Edges
                            '<line x1="50" y1="60" x2="150" y2="30" stroke="#fff" stroke-width="2" marker-end="url(#arrow)" />' + // 4->1
                            '<line x1="150" y1="30" x2="250" y2="60" stroke="#fff" stroke-width="2" marker-end="url(#arrow)" />' + // 1->2
                            '<line x1="250" y1="60" x2="150" y2="90" stroke="#fff" stroke-width="2" marker-end="url(#arrow)" />' + // 2->3
                            
                            // Nodes
                            '<circle cx="50" cy="60" r="15" fill="#1e293b" stroke="#3b82f6" stroke-width="2" /><text x="50" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">4</text>' +
                            '<circle cx="150" cy="30" r="15" fill="#1e293b" stroke="#3b82f6" stroke-width="2" /><text x="150" y="35" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">1</text>' +
                            '<circle cx="250" cy="60" r="15" fill="#1e293b" stroke="#3b82f6" stroke-width="2" /><text x="250" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">2</text>' +
                            '<circle cx="150" cy="90" r="15" fill="#1e293b" stroke="#3b82f6" stroke-width="2" /><text x="150" y="95" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">3</text>' +
                        '</svg>' +
                        '<p class="text-xs mt-2 opacity-70">Direct Edges: 4→1, 1→2, 2→3</p>' +
                    '</div>' +
                '</div>' +

                // --- 3. MATRIX TRACE ---
                '<div class="step-card">' +
                    '<span class="step-title">Matrix Evolution (Full Example)</span>' +
                    '<p class="text-sm mb-4">We update the matrix by iterating $k$ from 1 to 4. We ask: "Can we connect $i \\to j$ by going through $k$?"</p>' +

                    // ROW 1: R0 and R1
                    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">' +
                        // R0
                        '<div>' +
                            '<p class="text-xs font-bold text-center mb-1 text-gray-400">R(0) - Adjacency</p>' +
                            '<div class="grid grid-cols-5 text-center font-mono text-xs gap-1">' +
                                '<div></div><div>1</div><div>2</div><div>3</div><div>4</div>' + // Headers
                                '<div>1</div><div class="bg-black/40">0</div><div class="bg-blue-500/20 text-blue-300">1</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div>' +
                                '<div>2</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-blue-500/20 text-blue-300">1</div><div class="bg-black/40">0</div>' +
                                '<div>3</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div>' +
                                '<div>4</div><div class="bg-blue-500/20 text-blue-300">1</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div>' +
                            '</div>' +
                        '</div>' +
                        
                        // R1
                        '<div>' +
                            '<p class="text-xs font-bold text-center mb-1 text-accent">k=1 (Through Node 1)</p>' +
                            '<div class="grid grid-cols-5 text-center font-mono text-xs gap-1">' +
                                '<div></div><div>1</div><div>2</div><div>3</div><div>4</div>' +
                                '<div>1</div><div class="bg-black/40">0</div><div class="bg-blue-500/20">1</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div>' +
                                '<div>2</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-blue-500/20">1</div><div class="bg-black/40">0</div>' +
                                '<div>3</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div>' +
                                '<div>4</div><div class="bg-blue-500/20">1</div><div class="bg-green-500/20 text-green-400 font-bold border border-green-500">1</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div>' +
                            '</div>' +
                            '<p class="text-[10px] text-center mt-1 text-green-300">New: 4->1->2 implies 4->2</p>' +
                        '</div>' +
                    '</div>' +

                    // ROW 2: R2
                    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
                        // R2
                        '<div>' +
                            '<p class="text-xs font-bold text-center mb-1 text-accent">k=2 (Through Node 2)</p>' +
                            '<div class="grid grid-cols-5 text-center font-mono text-xs gap-1">' +
                                '<div></div><div>1</div><div>2</div><div>3</div><div>4</div>' +
                                '<div>1</div><div class="bg-black/40">0</div><div class="bg-blue-500/20">1</div><div class="bg-green-500/20 text-green-400 font-bold border border-green-500">1</div><div class="bg-black/40">0</div>' +
                                '<div>2</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-blue-500/20">1</div><div class="bg-black/40">0</div>' +
                                '<div>3</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div><div class="bg-black/40">0</div>' +
                                '<div>4</div><div class="bg-blue-500/20">1</div><div class="bg-blue-500/20">1</div><div class="bg-green-500/20 text-green-400 font-bold border border-green-500">1</div><div class="bg-black/40">0</div>' +
                            '</div>' +
                            '<p class="text-[10px] text-center mt-1 text-green-300">New: 1->2->3 & 4->2->3</p>' +
                        '</div>' +
                        
                        // LOGIC BOX
                        '<div class="flex flex-col justify-center text-sm">' +
                            '<p class="font-bold text-gray-400 mb-2">Algorithm Logic:</p>' +
                            '<p class="font-mono text-xs bg-black/30 p-2 rounded">R[i,j] = R[i,j] OR (R[i,k] AND R[k,j])</p>' +
                            '<p class="mt-2 text-xs opacity-80">We found that 4 connects to 3 because:</p>' +
                            '<ul class="list-disc pl-5 mt-1 text-xs opacity-70">' +
                                '<li>4 connects to 2 (from previous step)</li>' +
                                '<li>2 connects to 3</li>' +
                                '<li>Therefore 4 -> 3</li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">WARSHALL IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Warshall(A[1..n, 1..n])\n' +
                        '  R <- A // Copy Adjacency Matrix\n' +
                        '  \n' +
                        '  // The 3 Nested Loops\n' +
                        '  for k <- 1 to n do         // Intermediate Vertex\n' +
                        '    for i <- 1 to n do       // Source Vertex\n' +
                        '      for j <- 1 to n do     // Destination Vertex\n' +
                        '        \n' +
                        '        // If direct path exists OR path through k exists\n' +
                        '        R[i, j] <- R[i, j] OR (R[i, k] AND R[k, j])\n' +
                        '        \n' +
                        '  return R' +
                    '</div>' +

                    '<span class="code-label">Complexity</span>' +
                    '<div class="code-box">' +
                        '// Time: Theta(n^3) - Three nested loops of size n\n' +
                        '// Space: Theta(n^2) - To store the matrix\n' +
                        '// Note: Very simple to implement but slow for large graphs.' +
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
                // --- 1. CORE CONCEPT ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Shortest Paths</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base mb-2">' +
                        'Finds the shortest distance between <strong>every pair</strong> of vertices. It works like Warshall\'s but uses <strong>Weights</strong> (Distances) instead of Booleans (Reachability).' +
                    '</p>' +
                    '<div class="bg-black/30 p-3 rounded text-sm border border-white/10">' +
                        '<strong class="text-yellow-300">The Question:</strong> "Is it cheaper to go from $i$ to $j$ directly, or by taking a detour through node $k$?"' +
                    '</div>' +
                '</div>' +

                // --- 2. INITIAL GRAPH VISUAL ---
                '<div class="step-card border-l-4 border-blue-500">' +
                    '<span class="step-title">Initial Weighted Graph</span>' +
                    '<div class="glass p-4 rounded-lg border border-white/10 text-center">' +
                        '<svg viewBox="0 0 300 130" class="w-full h-32">' +
                            '<defs><marker id="arrowF" markerWidth="10" markerHeight="10" refX="18" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#fff" /></marker></defs>' +
                            
                            // Edges
                            '<line x1="250" y1="90" x2="150" y2="30" stroke="#fff" stroke-width="2" marker-end="url(#arrowF)" />' + // 2->1
                            '<text x="210" y="50" fill="#aaa" font-size="12">4</text>' +

                            '<line x1="150" y1="30" x2="50" y2="90" stroke="#fff" stroke-width="2" marker-end="url(#arrowF)" />' + // 1->3
                            '<text x="90" y="50" fill="#aaa" font-size="12">2</text>' +

                            '<line x1="250" y1="90" x2="50" y2="90" stroke="#fff" stroke-width="2" marker-end="url(#arrowF)" />' + // 2->3
                            '<text x="150" y="110" fill="#aaa" font-size="12">9</text>' +
                            
                            // Nodes
                            '<circle cx="150" cy="30" r="15" fill="#1e293b" stroke="#3b82f6" stroke-width="2" /><text x="150" y="35" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">1</text>' +
                            '<circle cx="250" cy="90" r="15" fill="#1e293b" stroke="#3b82f6" stroke-width="2" /><text x="250" y="95" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">2</text>' +
                            '<circle cx="50" cy="90" r="15" fill="#1e293b" stroke="#3b82f6" stroke-width="2" /><text x="50" y="95" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">3</text>' +
                        '</svg>' +
                        '<div class="text-xs mt-2 opacity-70 flex justify-center gap-4">' +
                            '<span>2&rarr;1: 4</span>' +
                            '<span>1&rarr;3: 2</span>' +
                            '<span>2&rarr;3: 9 (Direct)</span>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- 3. MATRIX EVOLUTION ---
                '<div class="step-card">' +
                    '<span class="step-title">Matrix Evolution (Relaxation)</span>' +
                    '<p class="text-sm mb-4">We compare $D[i,j]$ against $(D[i,k] + D[k,j])$.</p>' +

                    // ROW: D0 and D1
                    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">' +
                        // D0
                        '<div>' +
                            '<p class="text-xs font-bold text-center mb-1 text-gray-400">D(0) - Initial Weights</p>' +
                            '<div class="grid grid-cols-4 text-center font-mono text-xs gap-1">' +
                                '<div></div><div>1</div><div>2</div><div>3</div>' + // Headers
                                '<div>1</div><div class="bg-black/40">0</div><div class="bg-black/40">∞</div><div class="bg-black/40">2</div>' +
                                '<div>2</div><div class="bg-black/40">4</div><div class="bg-black/40">0</div><div class="bg-blue-500/20 text-blue-300 border border-blue-500/50">9</div>' +
                                '<div>3</div><div class="bg-black/40">∞</div><div class="bg-black/40">∞</div><div class="bg-black/40">0</div>' +
                            '</div>' +
                            '<p class="text-[10px] text-center mt-2 opacity-60">2&rarr;3 is currently 9.</p>' +
                        '</div>' +
                        
                        // D1
                        '<div>' +
                            '<p class="text-xs font-bold text-center mb-1 text-accent">k=1 (Through Node 1)</p>' +
                            '<div class="grid grid-cols-4 text-center font-mono text-xs gap-1">' +
                                '<div></div><div>1</div><div>2</div><div>3</div>' +
                                '<div>1</div><div class="bg-black/40">0</div><div class="bg-black/40">∞</div><div class="bg-black/40">2</div>' +
                                '<div>2</div><div class="bg-black/40">4</div><div class="bg-black/40">0</div><div class="bg-green-500/20 text-green-400 font-bold border border-green-500">6</div>' +
                                '<div>3</div><div class="bg-black/40">∞</div><div class="bg-black/40">∞</div><div class="bg-black/40">0</div>' +
                            '</div>' +
                            '<div class="text-[10px] text-center mt-2 text-green-300 font-bold">' +
                                'Update 2&rarr;3: min(9, 4+2) = 6' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    // LOGIC BOX
                    '<div class="bg-yellow-500/10 p-3 rounded border border-yellow-500/30 text-sm">' +
                        '<p class="font-bold text-yellow-200 mb-1">The Logic ($k=1$):</p>' +
                        '<p class="opacity-90">We check path $2 \\to 3$.</p>' +
                        '<ul class="list-disc pl-5 mt-1 font-mono text-xs opacity-80">' +
                            '<li>Direct Cost: 9</li>' +
                            '<li>Detour via 1: D[2,1] + D[1,3] = 4 + 2 = 6</li>' +
                            '<li>6 < 9, so we update the value.</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">FLOYD IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Floyd(W[1..n, 1..n])\n' +
                        '  D <- W // Copy weights (D[i,i]=0, NoEdge=∞)\n' +
                        '  \n' +
                        '  for k <- 1 to n do       // Intermediate\n' +
                        '    for i <- 1 to n do     // Source\n' +
                        '      for j <- 1 to n do   // Destination\n' +
                        '        \n' +
                        '        // Relaxation Step\n' +
                        '        if (D[i, k] + D[k, j] < D[i, j])\n' +
                        '          D[i, j] <- D[i, k] + D[k, j]\n' +
                        '          \n' +
                        '  return D' +
                    '</div>' +

                    '<span class="code-label">Complexity</span>' +
                    '<div class="code-box">' +
                        '// Time: Theta(n^3) (Three nested loops)\n' +
                        '// Space: Theta(n^2) (Distance Matrix)\n' +
                        '// Note: Works with negative edges (but not negative cycles).' +
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

                // --- VISUAL TABLE (FROM PDF) ---
                '<div class="glass p-4 rounded-lg border border-white/10 overflow-x-auto">' +
                    '<h4 class="font-bold text-xs text-center text-accent mb-4">Exam Table: Capacity W=6</h4>' +
                    '<div class="grid grid-cols-8 gap-1 text-center font-mono text-xs min-w-[400px]">' +
                        // Header
                        '<div class="text-gray-500">i/j</div>' +
                        '<div class="text-gray-500">0</div><div class="text-gray-500">1</div><div class="text-gray-500">2</div>' +
                        '<div class="text-gray-500">3</div><div class="text-gray-500">4</div><div class="text-gray-500">5</div><div class="text-gray-500">6</div>' +
                        
                        // Row 0
                        '<div class="font-bold text-blue-300">0</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-black/30">0</div><div class="bg-black/30">0</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-black/30">0</div><div class="bg-black/30">0</div><div class="bg-black/30">0</div>' +

                        // Row 1 (w=3, v=25)
                        '<div class="font-bold text-blue-300">1</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-black/30">0</div><div class="bg-black/30">0</div>' +
                        '<div class="bg-green-500/20">25</div><div class="bg-green-500/20">25</div><div class="bg-green-500/20">25</div><div class="bg-green-500/20">25</div>' +

                        // Row 2 (w=2, v=20)
                        '<div class="font-bold text-blue-300">2</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-black/30">0</div><div class="bg-green-500/20">20</div>' +
                        '<div class="bg-black/30">25</div><div class="bg-black/30">25</div><div class="bg-green-500/20">45</div><div class="bg-green-500/20">45</div>' +

                        // Row 3 (w=1, v=15)
                        '<div class="font-bold text-blue-300">3</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-green-500/20 text-yellow-300 font-bold border border-yellow-500">15</div><div class="bg-black/30">20</div>' +
                        '<div class="bg-black/30">35</div><div class="bg-black/30">40</div><div class="bg-green-500/20 text-yellow-300 font-bold border border-yellow-500">45</div><div class="bg-black/30">60</div>' +

                        // Row 4 (w=4, v=40)
                        '<div class="font-bold text-blue-300">4</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-black/30">15</div><div class="bg-black/30">20</div>' +
                        '<div class="bg-black/30">35</div><div class="bg-black/30">40</div><div class="bg-green-500/20 text-yellow-300 font-bold border border-yellow-500">55</div><div class="bg-black/30">60</div>' +

                        // Row 5 (w=5, v=50)
                        '<div class="font-bold text-blue-300">5</div>' +
                        '<div class="bg-black/30">0</div><div class="bg-black/30">15</div><div class="bg-black/30">20</div>' +
                        '<div class="bg-black/30">35</div><div class="bg-black/30">40</div><div class="bg-green-500/20 text-yellow-300 font-bold border border-yellow-500">55</div><div class="bg-black/30">65</div>' +
                    '</div>' +
                '</div>' +

                // --- BACKTRACKING EXERCISE ---
                '<div class="step-card">' +
                    '<span class="step-title">Exam Question: Determining Items (W\'=5)</span>' +
                    '<p class="text-sm mb-3"><strong>Task:</strong> Determine the optimal items for capacity 5. Show reasoning.</p>' +
                    
                    '<div class="space-y-2 font-mono text-xs md:text-sm bg-black/30 p-4 rounded border border-white/10">' +
                        '<div class="flex items-center gap-2">' +
                            '<span class="text-gray-400">Step 1:</span>' +
                            '<span>Start at T(5,5) = 55. Compare with T(4,5) = 55.</span>' +
                            '<span class="text-red-400 font-bold">Equal -> Item 5 NOT in knapsack.</span>' +
                        '</div>' +
                        '<div class="flex items-center gap-2">' +
                            '<span class="text-gray-400">Step 2:</span>' +
                            '<span>At T(4,5) = 55. Compare with T(3,5) = 45.</span>' +
                            '<span class="text-green-400 font-bold">Unequal -> Item 4 IS in knapsack.</span>' +
                        '</div>' +
                        '<div class="pl-12 opacity-70">' +
                            'Move left by weight of Item 4 (w4=4). New col = 5 - 4 = 1.' +
                        '</div>' +
                        '<div class="flex items-center gap-2">' +
                            '<span class="text-gray-400">Step 3:</span>' +
                            '<span>At T(3,1) = 15. Compare with T(2,1) = 0.</span>' +
                            '<span class="text-green-400 font-bold">Unequal -> Item 3 IS in knapsack.</span>' +
                        '</div>' +
                        '<div class="pl-12 opacity-70">' +
                            'Move left by weight of Item 3 (w3=1). New col = 1 - 1 = 0.' +
                        '</div>' +
                        '<div class="flex items-center gap-2">' +
                            '<span class="text-gray-400">Step 4:</span>' +
                            '<span>At T(2,0) = 0. Value is 0.</span>' +
                            '<span class="text-blue-300 font-bold">Terminate.</span>' +
                        '</div>' +
                        '<div class="mt-2 pt-2 border-t border-white/20 font-bold text-accent text-center">' +
                            'Solution Set: { Item 4, Item 3 }' +
                        '</div>' +
                    '</div>' +
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