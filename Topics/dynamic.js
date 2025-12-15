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
      // --- WARSHALL PRINCIPLE & EXPLANATION (INSERT BEFORE TRACE) ---
'<div class="space-y-6">' +

  '<div>' +
    '<h3 class="text-xl font-bold text-accent mb-2">Warshall’s Algorithm — Core Principle</h3>' +
    '<p class="text-sm md:text-base leading-relaxed">' +
      'Warshall’s Algorithm computes the <strong>transitive closure</strong> of a directed graph. ' +
      'The transitive closure tells us <em>which vertices are reachable from which other vertices</em>, ' +
      'possibly using intermediate vertices.' +
    '</p>' +
  '</div>' +

  '<div class="glass p-4 rounded-lg border border-white/10">' +
    '<p class="font-semibold mb-2 text-accent">Key Idea</p>' +
    '<p class="text-sm leading-relaxed">' +
      'If there is a way to go from <strong>A → B</strong>, and also from <strong>B → C</strong>, ' +
      'then there must be a way to go from <strong>A → C</strong>. ' +
      'Warshall’s Algorithm repeatedly applies this idea to all vertices.' +
    '</p>' +
  '</div>' +

  '<div>' +
    '<p class="font-semibold mb-1 text-accent">Adjacency Matrix Representation</p>' +
    '<ul class="list-disc pl-5 text-sm space-y-1 opacity-90">' +
      '<li>The graph is represented using an <strong>adjacency matrix</strong>.</li>' +
      '<li>If there is a directed edge from vertex <code>i</code> to <code>j</code>, then the entry is <code>1</code>.</li>' +
      '<li>If there is no direct edge, the entry is <code>0</code>.</li>' +
    '</ul>' +
  '</div>' +

  '<div>' +
    '<p class="font-semibold mb-1 text-accent">Building Partial Solutions</p>' +
    '<p class="text-sm leading-relaxed">' +
      'Rather than checking all possible paths at once, the algorithm <strong>builds up partial solutions</strong>. ' +
      'It considers whether paths can be formed using only a limited set of intermediate vertices.' +
    '</p>' +
    '<ul class="list-disc pl-5 mt-2 text-sm space-y-1 opacity-90">' +
      '<li>First, only direct edges are allowed.</li>' +
      '<li>Then paths using vertex 1 as an intermediate.</li>' +
      '<li>Then vertices 1 and 2.</li>' +
      '<li>Then vertices 1, 2, and 3.</li>' +
      '<li>Eventually, all vertices are allowed.</li>' +
    '</ul>' +
  '</div>' +

  '<div class="glass p-4 rounded-lg border border-white/10">' +
    '<p class="font-semibold mb-2 text-accent">Formal Path Definition</p>' +
    '<p class="text-sm leading-relaxed">' +
      'A path exists between vertices <code>i</code> and <code>j</code> if and only if:' +
    '</p>' +
    '<ul class="list-disc pl-5 mt-2 text-sm space-y-1 opacity-90">' +
      '<li>There is a direct edge from <code>i</code> to <code>j</code>, or</li>' +
      '<li>There exists an intermediate vertex <code>k</code> such that:' +
        '<ul class="list-circle pl-5 mt-1">' +
          '<li>There is a path from <code>i</code> to <code>k</code>, and</li>' +
          '<li>There is a path from <code>k</code> to <code>j</code>.</li>' +
        '</ul>' +
      '</li>' +
    '</ul>' +
  '</div>' +

  '<div>' +
    '<p class="font-semibold mb-1 text-accent">Matrix Evolution</p>' +
    '<p class="text-sm leading-relaxed">' +
      'We define a sequence of matrices <strong>R(0), R(1), ..., R(n)</strong> where:' +
    '</p>' +
    '<ul class="list-disc pl-5 mt-2 text-sm space-y-1 opacity-90">' +
      '<li><strong>R(0)</strong> is the adjacency matrix.</li>' +
      '<li><strong>R(k)</strong> allows paths that use only vertices <code>1 … k</code> as intermediates.</li>' +
      '<li><strong>R(n)</strong> is the transitive closure of the graph.</li>' +
    '</ul>' +
  '</div>' +

  '<div class="glass p-4 rounded-lg border border-white/10">' +
    '<p class="font-semibold mb-2 text-accent">Recurrence Relation (Core Logic)</p>' +
    '<p class="text-sm leading-relaxed">' +
      'At stage <code>k</code>, we decide whether to include vertex <code>k</code> in paths between <code>i</code> and <code>j</code>.' +
    '</p>' +
    '<ul class="list-disc pl-5 mt-2 text-sm space-y-1 opacity-90">' +
      '<li>If a path already exists from <code>i</code> to <code>j</code>, nothing changes.</li>' +
      '<li>Otherwise, check if there is a path from <code>i</code> to <code>k</code> and from <code>k</code> to <code>j</code>.</li>' +
      '<li>If both exist, a new valid path <code>i → k → j</code> is formed.</li>' +
    '</ul>' +
    '<p class="mt-2 font-mono text-xs bg-black/30 p-2 rounded">' +
      'R[i][j] = R[i][j] OR ( R[i][k] AND R[k][j] )' +
    '</p>' +
  '</div>' +

'</div>' +

'<div class="space-y-8" id="warshall-root">' +

  // ===== HEADER =====
  '<div class="text-center">' +
    '<h3 class="text-xl font-bold text-accent mb-2">Warshall’s Algorithm — Step Trace</h3>' +
    '<span id="k-indicator" class="k-badge">Current k = 1</span>' +
  '</div>' +

  // ===== GRAPH =====
  '<div class="glass p-4 rounded-lg text-center">' +
    '<svg id="warshall-graph" viewBox="0 0 300 120" class="w-full h-32">' +

      '<defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="18" refY="3" orient="auto">' +
      '<path d="M0,0 L0,6 L9,3 z" fill="#fff"/></marker></defs>' +

      '<line x1="50" y1="60" x2="150" y2="30" stroke="#fff" stroke-width="2" marker-end="url(#arrow)" />' +
      '<line x1="150" y1="30" x2="250" y2="60" stroke="#fff" stroke-width="2" marker-end="url(#arrow)" />' +
      '<line x1="250" y1="60" x2="150" y2="90" stroke="#fff" stroke-width="2" marker-end="url(#arrow)" />' +

      '<circle data-node="4" cx="50" cy="60" r="15" fill="#1e293b"/>' +
      '<text x="50" y="65" text-anchor="middle" fill="#fff" font-weight="bold">4</text>' +

      '<circle data-node="1" cx="150" cy="30" r="15" fill="#1e293b"/>' +
      '<text x="150" y="35" text-anchor="middle" fill="#fff" font-weight="bold">1</text>' +

      '<circle data-node="2" cx="250" cy="60" r="15" fill="#1e293b"/>' +
      '<text x="250" y="65" text-anchor="middle" fill="#fff" font-weight="bold">2</text>' +

      '<circle data-node="3" cx="150" cy="90" r="15" fill="#1e293b"/>' +
      '<text x="150" y="95" text-anchor="middle" fill="#fff" font-weight="bold">3</text>' +

    '</svg>' +
    '<p class="text-xs opacity-70 mt-2">Highlighted node = current k</p>' +
  '</div>' +

  // ===== MATRIX =====
  '<div class="glass p-4 rounded-lg">' +
    '<div id="warshall-matrix" class="grid grid-cols-5 text-center font-mono text-xs gap-1"></div>' +
    '<p class="text-[11px] text-center mt-3 opacity-80">' +
      'Row <strong>k</strong> and Column <strong>k</strong> are highlighted because we are testing paths through node k.' +
    '</p>' +
  '</div>' +

  // ===== CONTROLS =====
  '<div class="warshall-controls">' +
    '<button id="prev-k" class="warshall-btn">◀ Previous k</button>' +
    '<button id="next-k" class="warshall-btn">▶ Next k</button>' +
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

    // ============================================
    // 1. CORE IDEA (INTUITION)
    // ============================================
    '<div>' +
        '<h3 class="text-xl font-bold text-accent mb-2">Floyd’s Algorithm – Core Principle</h3>' +
        '<p class="leading-relaxed text-sm md:text-base">' +
            'Floyd’s Algorithm computes the <strong>shortest path between every pair of vertices</strong> in a weighted graph. ' +
            'It is the weighted version of <strong>Warshall’s Algorithm</strong>.' +
        '</p>' +
        '<div class="bg-black/30 p-3 rounded text-sm border border-white/10 mt-3">' +
            '<strong class="text-yellow-300">Key Question:</strong> ' +
            '"Is the direct path from <em>i</em> to <em>j</em> cheaper, or is it cheaper to go via vertex <em>k</em>?"' +
        '</div>' +
    '</div>' +

    // ============================================
    // 2. RELATION TO WARSHALL
    // ============================================
    '<div class="step-card border-l-4 border-purple-500">' +
        '<span class="step-title">Relation to Warshall’s Algorithm</span>' +
        '<ul class="list-disc pl-6 text-sm space-y-2">' +
            '<li>Warshall answers: <em>"Is there a path?"</em> (Boolean)</li>' +
            '<li>Floyd answers: <em>"What is the cheapest path?"</em> (Numeric weights)</li>' +
            '<li>Both algorithms build solutions incrementally using intermediate vertices</li>' +
            '<li>The only difference is the update rule</li>' +
        '</ul>' +
    '</div>' +

    // ============================================
    // 3. MEANING OF D(k)
    // ============================================
    '<div class="step-card">' +
        '<span class="step-title">Meaning of D(k)</span>' +
        '<p class="text-sm mb-2">' +
            '<strong>D(k)[i][j]</strong> represents the <strong>shortest distance</strong> from vertex <em>i</em> to <em>j</em> ' +
            'using only intermediate vertices from the set <strong>{1, 2, ..., k}</strong>.' +
        '</p>' +
        '<ul class="list-disc pl-6 text-sm space-y-1">' +
            '<li>D(0): Only direct edges are allowed</li>' +
            '<li>D(1): Paths may go through vertex 1</li>' +
            '<li>D(2): Paths may go through vertices 1 or 2</li>' +
            '<li>...</li>' +
            '<li>D(n): Paths may go through any vertex → final result</li>' +
        '</ul>' +
    '</div>' +

    // ============================================
    // 4. RELAXATION LOGIC
    // ============================================
    '<div class="step-card border-l-4 border-green-500">' +
        '<span class="step-title">Relaxation Step (The Heart of Floyd)</span>' +
        '<p class="text-sm mb-3">' +
            'At each stage <strong>k</strong>, we decide whether vertex <em>k</em> helps improve the shortest path from <em>i</em> to <em>j</em>.' +
        '</p>' +
        '<div class="bg-black/30 p-3 rounded border border-white/10 text-sm">' +
            '<p class="font-mono text-center">' +
                'D[i][j] = min( D[i][j], D[i][k] + D[k][j] )' +
            '</p>' +
        '</div>' +
        '<ul class="list-disc pl-6 text-sm space-y-1 mt-3">' +
            '<li>If the current path is already cheaper → no change</li>' +
            '<li>If going via k is cheaper → update the matrix</li>' +
            '<li>Each update improves future paths</li>' +
        '</ul>' +
    '</div>' +

    // ============================================
    // 5. WHY THE ALGORITHM WORKS
    // ============================================
    '<div class="step-card border-l-4 border-yellow-500">' +
        '<span class="step-title">Why Floyd’s Algorithm Works</span>' +
        '<p class="text-sm">' +
            'Floyd’s Algorithm works because it systematically considers <strong>every possible intermediate vertex</strong> ' +
            'and guarantees that once vertex <em>k</em> is processed, all shortest paths using vertices up to <em>k</em> ' +
            'are correct and final.' +
        '</p>' +
        '<ul class="list-disc pl-6 text-sm space-y-1 mt-2">' +
            '<li>Earlier updates enable better later updates</li>' +
            '<li>No path is missed</li>' +
            '<li>Dynamic programming ensures optimal substructure</li>' +
        '</ul>' +
    '</div>' +

    // ============================================
    // 6. SUMMARY
    // ============================================
    '<div class="bg-blue-500/10 p-3 rounded border border-blue-500/30 text-sm">' +
        '<p class="font-bold text-blue-200 mb-1">Summary</p>' +
        '<ul class="list-disc pl-6 space-y-1">' +
            '<li>Floyd computes all-pairs shortest paths</li>' +
            '<li>Uses weighted adjacency matrix</li>' +
            '<li>Builds solutions in k stages</li>' +
            '<li>Each stage improves path quality</li>' +
        '</ul>' +
    '</div>' +

'</div>'+
'<div class="space-y-10">' +

    // =====================================================
    // 1. HOW FLOYD EVOLVES FROM WARSHALL
    // =====================================================
    '<div>' +
        '<h3 class="text-xl font-bold text-accent mb-3">From Warshall to Floyd</h3>' +
        '<p class="text-sm md:text-base leading-relaxed">' +
            'Floyd’s Algorithm is a <strong>direct extension of Warshall’s Algorithm</strong>. ' +
            'Warshall tells us whether a path exists. Floyd tells us the <strong>shortest distance</strong>.' +
        '</p>' +
        '<div class="bg-black/30 p-4 rounded border border-white/10 mt-3 text-sm">' +
            '<p><strong>Warshall update:</strong></p>' +
            '<p class="font-mono text-center">R[i][j] = R[i][j] OR (R[i][k] AND R[k][j])</p>' +
            '<p class="mt-2"><strong>Floyd update:</strong></p>' +
            '<p class="font-mono text-center">D[i][j] = min(D[i][j], D[i][k] + D[k][j])</p>' +
        '</div>' +
        '<p class="text-sm mt-3 opacity-90">' +
            'Same structure. Same k-stages. Different values.' +
        '</p>' +
    '</div>' +

    // =====================================================
    // 2. D(0): INITIAL MATRIX
    // =====================================================
    '<div class="step-card border-l-4 border-blue-500">' +
        '<span class="step-title">D(0) — Initial Distance Matrix</span>' +
        '<ul class="list-disc pl-6 text-sm space-y-1">' +
            '<li>Copy the weighted adjacency matrix</li>' +
            '<li>∞ if no directed edge exists</li>' +
            '<li>0 on the diagonal (distance to itself)</li>' +
        '</ul>' +
        '<div class="bg-black/30 p-3 rounded border border-white/10 mt-3 text-sm">' +
            '<strong>Interpretation:</strong> Only direct edges are allowed. No intermediate vertices yet.' +
        '</div>' +
    '</div>' +

    // =====================================================
    // 3. ANIMATED K-PROGRESSION EXPLANATION
    // =====================================================
    '<div class="step-card border-l-4 border-purple-500">' +
        '<span class="step-title">Animated k-Progression (What Changes Each Step)</span>' +
        '<p class="text-sm mb-3">' +
            'Each step k asks the same question:' +
        '</p>' +
        '<div class="bg-black/30 p-3 rounded border border-white/10 text-sm font-mono text-center">' +
            'Is going i → k → j cheaper than going i → j directly?' +
        '</div>' +
        '<ul class="list-disc pl-6 text-sm space-y-2 mt-3">' +
            '<li><strong>k = 1:</strong> Allow paths through vertex 1</li>' +
            '<li><strong>k = 2:</strong> Allow paths through vertices {1,2}</li>' +
            '<li><strong>k = 3:</strong> Allow paths through vertices {1,2,3}</li>' +
            '<li><strong>k = 4:</strong> Allow paths through vertices {1,2,3,4}</li>' +
        '</ul>' +
    '</div>' +

   '<div class="space-y-4">' +
    // Buttons & indicator
    '<div class="flex items-center gap-4 mb-2">' +
        '<button id="floyd-prev-k" class="btn btn-primary btn-sm">Prev k</button>' +
        '<button id="floyd-next-k" class="btn btn-primary btn-sm">Next k</button>' +
        '<span id="floyd-k-indicator" class="ml-4 font-bold">Current k = 0</span>' +
    '</div>' +

    // Matrix container
    '<div id="floyd-matrix" class="grid grid-cols-5 gap-1 font-mono text-sm mb-4"></div>' +

    // Log container
    '<div id="floyd-log" class="space-y-3 text-sm"></div>' +
'</div>'+

    // =====================================================
    // 8. EXTRACTING SHORTEST PATHS
    // =====================================================
    '<div class="step-card border-l-4 border-yellow-500">' +
        '<span class="step-title">Extracting the Actual Paths</span>' +
        '<p class="text-sm">' +
            'Floyd computes distances, but paths must be extracted using a <strong>predecessor matrix</strong>.' +
        '</p>' +
        '<ul class="list-disc pl-6 text-sm space-y-1 mt-2">' +
            '<li>If shortest path i → j goes via k, set pred[i][j] = k</li>' +
            '<li>If no intermediate vertex is used, pred[i][j] = null</li>' +
        '</ul>' +
        '<div class="bg-black/30 p-3 rounded border border-white/10 text-sm mt-3">' +
            '<p class="font-mono">Path(i, j):</p>' +
            '<ul class="list-disc pl-6 font-mono text-xs">' +
                '<li>If pred[i][j] = null → edge (i, j)</li>' +
                '<li>Else → Path(i, k) + Path(k, j)</li>' +
            '</ul>' +
        '</div>' +
    '</div>' +

    // =====================================================
    // 9. FLOYD VS DIJKSTRA
    // =====================================================
    '<div class="step-card border-l-4 border-red-500">' +
        '<span class="step-title">Floyd vs Dijkstra</span>' +
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">' +

            '<div class="bg-black/30 p-3 rounded border border-white/10">' +
                '<strong>Floyd</strong>' +
                '<ul class="list-disc pl-5 mt-2">' +
                    '<li>All-pairs shortest paths</li>' +
                    '<li>Dynamic Programming</li>' +
                    '<li>Handles negative edges</li>' +
                    '<li>O(n³)</li>' +
                '</ul>' +
            '</div>' +

            '<div class="bg-black/30 p-3 rounded border border-white/10">' +
                '<strong>Dijkstra</strong>' +
                '<ul class="list-disc pl-5 mt-2">' +
                    '<li>Single-source shortest paths</li>' +
                    '<li>Greedy algorithm</li>' +
                    '<li>No negative edges</li>' +
                    '<li>O((V+E) log V)</li>' +
                '</ul>' +
            '</div>' +

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