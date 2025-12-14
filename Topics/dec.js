export const decrease = {
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
            '<div class="space-y-8">' +
                // --- INTRO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'In these algorithms, the size of the instance is reduced by a constant factor (usually divided by 2) at each step. This typically results in logarithmic complexity $\\Theta(\\log n)$.' +
                    '</p>' +
                '</div>' +

                // --- 1. FAKE COIN VISUAL ---
                '<div class="step-card">' +
                    '<span class="step-title">1. Fake Coin Problem</span>' +
                    '<p class="text-sm mb-4">Identify one lighter fake coin among $n$ coins using a balance scale.</p>' +
                    
                    '<div class="glass p-4 rounded-lg border border-white/10">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-2">Visual Trace: 8 Coins</h4>' +
                        '<div class="flex flex-col gap-3 font-mono text-xs">' +
                            // Step 1
                            '<div class="flex items-center gap-2">' +
                                '<span class="text-blue-300 w-12">Step 1</span>' +
                                '<div class="flex-1 text-center border-b border-white/10 pb-1">' +
                                    'Scale: [10,10,10,9] vs [10,10,10,10]<br>' +
                                    '<span class="text-red-400">Left is Lighter!</span> Discard Right.' +
                                '</div>' +
                            '</div>' +
                            // Step 2
                            '<div class="flex items-center gap-2">' +
                                '<span class="text-blue-300 w-12">Step 2</span>' +
                                '<div class="flex-1 text-center border-b border-white/10 pb-1">' +
                                    'Scale: [10,10] vs [10,9]<br>' +
                                    '<span class="text-red-400">Right is Lighter!</span> Discard Left.' +
                                '</div>' +
                            '</div>' +
                            // Step 3
                            '<div class="flex items-center gap-2">' +
                                '<span class="text-blue-300 w-12">Step 3</span>' +
                                '<div class="flex-1 text-center">' +
                                    'Scale: [10] vs [9]<br>' +
                                    '<span class="text-green-400 font-bold">Found Fake: 9g</span>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<p class="text-xs text-right mt-1 opacity-70">Complexity: $\\Theta(\\log_2 n)$</p>' +
                '</div>' +

                // --- 2. RUSSE VISUAL ---
                '<div class="step-card">' +
                    '<span class="step-title">2. Multiplication à la Russe</span>' +
                    '<p class="text-sm mb-4">Russian Peasant Multiplication reduces $n \\times m$ to addition and shifting.</p>' +
                    
                    '<div class="glass p-4 rounded-lg border border-white/10">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-2">Trace: 50 * 20</h4>' +
                        '<table class="w-full text-xs text-center font-mono">' +
                            '<tr class="border-b border-white/20 text-gray-400"><th>n (Halve)</th><th>m (Double)</th><th>Action</th></tr>' +
                            '<tr><td>50</td><td>20</td><td class="opacity-50">Ignore (Even)</td></tr>' +
                            '<tr><td>25</td><td>40</td><td class="text-green-400">Add 40</td></tr>' +
                            '<tr><td>12</td><td>80</td><td class="opacity-50">Ignore (Even)</td></tr>' +
                            '<tr><td>6</td><td>160</td><td class="opacity-50">Ignore (Even)</td></tr>' +
                            '<tr><td>3</td><td>320</td><td class="text-green-400">Add 320</td></tr>' +
                            '<tr><td>1</td><td>640</td><td class="text-green-400">Add 640</td></tr>' +
                            '<tr class="border-t border-white/20 font-bold text-accent"><td>0</td><td></td><td>Sum = 1000</td></tr>' +
                        '</table>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- FAKE COIN CODE ---
                '<div>' +
                    '<div class="code-section-title">1. FAKE COIN ALGORITHM</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm FindFake(Coins[0..n-1])\n' +
                        '  if n == 1 return Coins[0]\n' +
                        '  \n' +
                        '  // Split into 3 parts: Left, Right, Extra (if odd)\n' +
                        '  PileA <- Coins[0 .. n/2 - 1]\n' +
                        '  PileB <- Coins[n/2 .. 2*(n/2) - 1]\n' +
                        '  \n' +
                        '  if Weight(PileA) < Weight(PileB)\n' +
                        '    return FindFake(PileA)\n' +
                        '  else if Weight(PileA) > Weight(PileB)\n' +
                        '    return FindFake(PileB)\n' +
                        '  else\n' +
                        '    return Coins[n-1] // The left over coin is fake' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int findFake(int[] coins, int start, int end) {\n' +
                        '    int n = end - start + 1;\n' +
                        '    if (n == 1) return start; // Found index\n' +
                        '    \n' +
                        '    int half = n / 2;\n' +
                        '    // Calculate weights of two halves\n' +
                        '    int w1 = getWeight(coins, start, start + half - 1);\n' +
                        '    int w2 = getWeight(coins, start + half, start + 2*half - 1);\n' +
                        '    \n' +
                        '    if (w1 < w2) {\n' +
                        '        return findFake(coins, start, start + half - 1);\n' +
                        '    } else if (w1 > w2) {\n' +
                        '        return findFake(coins, start + half, start + 2*half - 1);\n' +
                        '    } else {\n' +
                        '        // Leftover coin (n was odd)\n' +
                        '        return end;\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +
                '</div>' +

                // --- RUSSE CODE ---
                '<div>' +
                    '<div class="code-section-title">2. RUSSIAN PEASANT MULTIPLICATION</div>' +
                    
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

                    '<span class="code-label">Java Implementation (Bitwise)</span>' +
                    '<div class="code-box">' +
                        'int russianMult(int n, int m) {\n' +
                        '    int res = 0;\n' +
                        '    while (n > 0) {\n' +
                        '        if ((n & 1) == 1) { // Check if odd\n' +
                        '            res += m;\n' +
                        '        }\n' +
                        '        n = n >> 1; // Halve (Bit shift right)\n' +
                        '        m = m << 1; // Double (Bit shift left)\n' +
                        '    }\n' +
                        '    return res;\n' +
                        '}' +
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
            '<div class="space-y-8">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Concept</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'In these algorithms, the size reduction pattern <strong>varies</strong> at each step. It depends on the specific values of the data, not just the number of elements.' +
                    '</p>' +
                '</div>' +

                // --- 1. EUCLID VISUAL ---
                '<div class="step-card">' +
                    '<span class="step-title">1. Euclid\'s Algorithm (GCD)</span>' +
                    '<p class="text-sm mb-4">Finds Greatest Common Divisor by repeatedly applying $gcd(m, n) = gcd(n, m \\% n)$.</p>' +
                    
                    '<div class="glass p-4 rounded-lg border border-white/10">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-3">Trace: GCD(60, 24)</h4>' +
                        '<div class="flex flex-col gap-2 font-mono text-sm">' +
                            // Row 1
                            '<div class="flex items-center justify-between bg-black/20 p-2 rounded">' +
                                '<span>Step 1</span>' +
                                '<span class="text-blue-300">60 % 24 = 12</span>' +
                                '<span class="opacity-50">New pair: (24, 12)</span>' +
                            '</div>' +
                            // Row 2
                            '<div class="flex items-center justify-between bg-black/20 p-2 rounded">' +
                                '<span>Step 2</span>' +
                                '<span class="text-blue-300">24 % 12 = 0</span>' +
                                '<span class="opacity-50">New pair: (12, 0)</span>' +
                            '</div>' +
                            // Result
                            '<div class="bg-green-500/20 border border-green-500 p-2 rounded text-center font-bold text-green-400">' +
                                'n is 0. Result is m: 12' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<p class="text-xs text-right mt-1 opacity-70">Complexity: $\\Theta(\\log n)$</p>' +
                '</div>' +

                // --- 2. INTERPOLATION SEARCH VISUAL ---
                '<div class="step-card">' +
                    '<span class="step-title">2. Interpolation Search</span>' +
                    '<p class="text-sm mb-4">Unlike Binary Search (which checks the middle), Interpolation Search "guesses" the position based on the value, like finding a name in a phonebook.</p>' +

                    // --- THE GRAPH VISUALIZATION ---
                    '<div class="glass p-5 rounded-lg border border-white/10 mb-4">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-4">Visual: Probing for Value "30"</h4>' +
                        
                        // Array Bar
                        '<div class="relative h-12 w-full bg-white/5 rounded-lg border border-white/20 mb-2">' +
                            // Low Marker
                            '<div class="absolute left-0 -top-6 text-xs text-gray-400 text-center"><span class="font-bold text-white">0</span><br>↓</div>' +
                            // High Marker
                            '<div class="absolute right-0 -top-6 text-xs text-gray-400 text-center"><span class="font-bold text-white">100</span><br>↓</div>' +
                            
                            // The Probe Bar (30%)
                            '<div class="absolute left-[30%] h-full w-1 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>' +
                            
                            // Probe Label
                            '<div class="absolute left-[30%] -bottom-8 -translate-x-1/2 text-center">' +
                                '<div class="text-yellow-400 text-lg font-bold">↑</div>' +
                                '<div class="text-xs text-yellow-300 font-bold whitespace-nowrap">Probe (30)</div>' +
                            '</div>' +
                        '</div>' +
                        
                        '<div class="mt-10 text-xs font-mono text-center opacity-80">' +
                            'Range: 0 to 100. Target: 30.<br>' +
                            'Probe = 0 + (30-0)/(100-0) * Length ≈ 30%' +
                        '</div>' +
                    '</div>' +

                    // --- STEP BY STEP MATH ---
                    '<div class="bg-black/20 p-3 rounded-lg text-sm">' +
                        '<p class="font-bold text-gray-400 mb-2">Example Trace:</p>' +
                        '<p class="font-mono mb-1">Array: [0, 10, 20, 30, 40, ..., 100]</p>' +
                        '<p class="font-mono mb-1">Target: 30</p>' +
                        '<div class="pl-3 border-l-2 border-yellow-500 mt-2">' +
                            '<p class="text-xs text-gray-400">Formula:</p>' +
                            '<p class="font-mono text-yellow-300 text-xs">pos = lo + ((target - A[lo]) * (hi - lo) / (A[hi] - A[lo]))</p>' +
                            '<p class="font-mono text-xs mt-1">pos = 0 + ((30 - 0) * (10 - 0) / (100 - 0))</p>' +
                            '<p class="font-mono text-xs">pos = 3</p>' +
                        '</div>' +
                        '<p class="mt-2 text-green-400 font-bold">Check A[3]... Found 30 in 1 step!</p>' +
                    '</div>' +
                    
                    '<div class="grid grid-cols-2 gap-2 text-xs text-center mt-3">' +
                        '<div class="p-2 border border-green-500/30 rounded bg-green-500/10 text-green-300"><strong>Avg Case:</strong><br>$\\Theta(\\log \\log n)$<br>(Extremely Fast)</div>' +
                        '<div class="p-2 border border-red-500/30 rounded bg-red-500/10 text-red-300"><strong>Worst Case:</strong><br>$\\Theta(n)$<br>(Bad Distribution)</div>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- EUCLID CODE ---
                '<div>' +
                    '<div class="code-section-title">1. EUCLID GCD</div>' +
                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int gcd(int m, int n) {\n' +
                        '    while (n != 0) {\n' +
                        '        int r = m % n;\n' +
                        '        m = n;\n' +
                        '        n = r;\n' +
                        '    }\n' +
                        '    return m;\n' +
                        '}' +
                    '</div>' +
                '</div>' +

                // --- INTERPOLATION CODE ---
                '<div>' +
                    '<div class="code-section-title">2. INTERPOLATION SEARCH</div>' +
                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int interpolationSearch(int[] arr, int target) {\n' +
                        '    int lo = 0, hi = arr.length - 1;\n' +
                        '\n' +
                        '    while (lo <= hi && target >= arr[lo] && target <= arr[hi]) {\n' +
                        '        if (lo == hi) {\n' +
                        '            if (arr[lo] == target) return lo;\n' +
                        '            return -1;\n' +
                        '        }\n' +
                        '\n' +
                        '        // The Probe Formula\n' +
                        '        int pos = lo + (((hi - lo) * \n' +
                        '            (target - arr[lo])) / (arr[hi] - arr[lo]));\n' +
                        '\n' +
                        '        if (arr[pos] == target) return pos;\n' +
                        '        if (arr[pos] < target) lo = pos + 1;\n' +
                        '        else hi = pos - 1;\n' +
                        '    }\n' +
                        '    return -1;\n' +
                        '}' +
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
    }
}