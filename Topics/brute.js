export const brute = {
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
                        'Geometric algorithms deal with points, lines, and polygons. Brute force approaches here are conceptually simple but often computationally expensive.' +
                    '</p>' +
                '</div>' +
                
                // --- CLOSEST PAIR ---
                '<div class="step-card">' +
                    '<span class="step-title">Closest Pair Problem</span>' +
                    '<p class="text-sm">Find the two points that are closest together in a set of $n$ 2D points.</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Calculate distance between <strong>every pair</strong> of distinct points.</li>' +
                        '<li>Compute distance using Euclidean formula: $d = \\sqrt{(x_i-x_j)^2 + (y_i-y_j)^2}$.</li>' +
                        '<li>Keep track of the minimum distance found so far.</li>' +
                    '</ul>' +
                    '<div class="mt-3 p-2 bg-red-500/10 border border-red-500/30 rounded">' +
                        '<p class="text-sm font-mono text-red-300"><strong>Efficiency:</strong> $\\Theta(n^2)$</p>' +
                        '<p class="text-xs opacity-70">Reason: Nested loops checking every pair.</p>' +
                    '</div>' +
                '</div>' +

                // --- CONVEX HULL ---
                '<div class="step-card">' +
                    '<span class="step-title">Convex Hull Problem</span>' +
                    '<p class="text-sm">Find the smallest convex polygon containing all $n$ points (like a rubber band snapped around pegs).</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li><strong>Algorithm:</strong> For every pair of points ($n^2$), draw a line.</li>' +
                        '<li>Check if all <strong>other</strong> points ($n$) lie on the same side of that line.</li>' +
                        '<li>If yes, that line segment is part of the Convex Hull boundary.</li>' +
                    '</ul>' +
                    '<div class="mt-3 p-2 bg-red-500/10 border border-red-500/30 rounded">' +
                        '<p class="text-sm font-mono text-red-300"><strong>Efficiency:</strong> $O(n^3)$</p>' +
                        '<p class="text-xs opacity-70">Reason: $n^2$ pairs $\\times$ $n$ checks per pair.</p>' +
                    '</div>' +
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
            '<div class="space-y-8">' +
                // --- INTRO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Discrete Optimization</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Exhaustive Search generates <strong>every possible candidate solution</strong> (permutations or subsets), evaluates them, and picks the best one.' +
                    '</p>' +
                '</div>' +

                // --- 1. TSP VISUAL & NOTES ---
                '<div class="step-card">' +
                    '<span class="step-title">1. Travelling Salesman Problem (TSP)</span>' +
                    '<p class="text-sm mb-4">Find the shortest tour visiting every city exactly once and returning to start.</p>' +
                    
                    // VISUAL GRAPH
                    '<div class="glass p-4 rounded-lg border border-white/10 mb-4">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-2">Example Graph (4 Cities)</h4>' +
                        '<div class="flex flex-col md:flex-row items-center gap-6">' +
                            // SVG Graph
                            '<svg viewBox="0 0 200 150" class="w-48 h-32">' +
                                '<line x1="50" y1="30" x2="150" y2="30" stroke="#555" stroke-width="2" />' + 
                                '<text x="100" y="25" fill="#aaa" font-size="10">10</text>' +
                                '<line x1="150" y1="30" x2="150" y2="120" stroke="#555" stroke-width="2" />' + 
                                '<text x="155" y="75" fill="#aaa" font-size="10">15</text>' +
                                '<line x1="150" y1="120" x2="50" y2="120" stroke="#555" stroke-width="2" />' + 
                                '<text x="100" y="135" fill="#aaa" font-size="10">20</text>' +
                                '<line x1="50" y1="120" x2="50" y2="30" stroke="#555" stroke-width="2" />' + 
                                '<text x="35" y="75" fill="#aaa" font-size="10">10</text>' +
                                '<line x1="50" y1="30" x2="150" y2="120" stroke="#f87171" stroke-width="1" stroke-dasharray="4" />' + 
                                '<text x="80" y="70" fill="#f87171" font-size="10">35</text>' +
                                // Nodes
                                '<circle cx="50" cy="30" r="12" fill="#1e293b" stroke="#fff" /><text x="50" y="34" text-anchor="middle" fill="#fff" font-size="10">A</text>' +
                                '<circle cx="150" cy="30" r="12" fill="#1e293b" stroke="#fff" /><text x="150" y="34" text-anchor="middle" fill="#fff" font-size="10">B</text>' +
                                '<circle cx="150" cy="120" r="12" fill="#1e293b" stroke="#fff" /><text x="150" y="124" text-anchor="middle" fill="#fff" font-size="10">C</text>' +
                                '<circle cx="50" cy="120" r="12" fill="#1e293b" stroke="#fff" /><text x="50" y="124" text-anchor="middle" fill="#fff" font-size="10">D</text>' +
                            '</svg>' +
                            // Routes Table
                            '<div class="text-xs font-mono">' +
                                '<div class="border-b border-white/10 pb-1 mb-1 font-bold">Routes (Start A)</div>' +
                                '<p>A→B→C→D→A: 10+15+20+10 = <span class="text-green-400">55</span></p>' +
                                '<p>A→B→D→C→A: 10+?+20+35 = 80+</p>' +
                                '<div class="mt-2 text-red-300">Cost: $(n-1)!/2$ permutations</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- 2. KNAPSACK VISUAL & NOTES ---
                '<div class="step-card">' +
                    '<span class="step-title">2. Knapsack Problem</span>' +
                    '<p class="text-sm mb-4">Given items with Weight (w) and Value (v), maximize value in a knapsack of capacity W.</p>' +
                    
                    // VISUAL ITEMS
                    '<div class="glass p-4 rounded-lg border border-white/10">' +
                        '<div class="flex justify-between items-center mb-4">' +
                            '<div class="flex gap-2">' +
                                // Item 1
                                '<div class="bg-blue-900/30 border border-blue-500 rounded p-2 text-center w-20">' +
                                    '<div class="text-xs text-gray-400">Item 1</div><div class="font-bold">2kg</div><div class="text-green-400">$20</div>' +
                                '</div>' +
                                // Item 2
                                '<div class="bg-blue-900/30 border border-blue-500 rounded p-2 text-center w-20">' +
                                    '<div class="text-xs text-gray-400">Item 2</div><div class="font-bold">5kg</div><div class="text-green-400">$30</div>' +
                                '</div>' +
                                // Item 3
                                '<div class="bg-blue-900/30 border border-blue-500 rounded p-2 text-center w-20">' +
                                    '<div class="text-xs text-gray-400">Item 3</div><div class="font-bold">10kg</div><div class="text-green-400">$50</div>' +
                                '</div>' +
                            '</div>' +
                            // Capacity
                            '<div class="border-2 border-dashed border-white/30 rounded p-3 h-24 flex items-center justify-center w-24 text-center">' +
                                '<div><div class="text-xs text-gray-400">Capacity</div><div class="font-bold text-xl">10kg</div></div>' +
                            '</div>' +
                        '</div>' +
                        '<p class="text-xs font-mono text-center text-accent">Process: Try all $2^n$ subsets</p>' +
                        '<ul class="text-xs mt-2 space-y-1 opacity-80 pl-4 list-disc">' +
                            '<li>{1, 2} -> 7kg, $50 (Valid, Best)</li>' +
                            '<li>{3} -> 10kg, $50 (Valid)</li>' +
                            '<li>{1, 3} -> 12kg (Invalid, >10kg)</li>' +
                        '</ul>' +
                    '</div>' +
                    '<p class="text-xs text-red-300 mt-2 text-right">Efficiency: $\\Omega(2^n)$</p>' +
                '</div>' +

                // --- 3. ASSIGNMENT PROBLEM ---
                '<div class="step-card">' +
                    '<span class="step-title">3. Assignment Problem</span>' +
                    '<p class="text-sm mb-4">Assign $n$ people to $n$ jobs (one-to-one) to minimize total cost.</p>' +

                    // MATRIX VISUAL
                    '<div class="glass p-4 rounded-lg border border-white/10 mb-4">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-2">Cost Matrix C[i,j]</h4>' +
                        '<div class="grid grid-cols-4 gap-1 text-center text-xs font-mono items-center">' +
                            // Header
                            '<div></div><div class="text-gray-400">Job1</div><div class="text-gray-400">Job2</div><div class="text-gray-400">Job3</div>' +
                            // P1
                            '<div class="text-gray-400 font-bold">P1</div>' +
                            '<div class="bg-black/20 py-2 rounded">9</div>' +
                            '<div class="bg-green-500/20 text-green-400 border border-green-500 py-2 rounded font-bold">2</div>' + // Selected
                            '<div class="bg-black/20 py-2 rounded">7</div>' +
                            // P2
                            '<div class="text-gray-400 font-bold">P2</div>' +
                            '<div class="bg-green-500/20 text-green-400 border border-green-500 py-2 rounded font-bold">6</div>' + // Selected
                            '<div class="bg-black/20 py-2 rounded">4</div>' +
                            '<div class="bg-black/20 py-2 rounded">3</div>' +
                            // P3
                            '<div class="text-gray-400 font-bold">P3</div>' +
                            '<div class="bg-black/20 py-2 rounded">5</div>' +
                            '<div class="bg-black/20 py-2 rounded">8</div>' +
                            '<div class="bg-green-500/20 text-green-400 border border-green-500 py-2 rounded font-bold">1</div>' + // Selected
                        '</div>' +
                        '<p class="text-xs text-center mt-3">Cost = 2 + 6 + 1 = <span class="text-green-400 font-bold">9</span></p>' +
                    '</div>' +
                    '<p class="text-xs text-red-300 mt-2 text-right">Efficiency: $\\Theta(n!)$ (Permutations)</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- EXAMPLE 1: TSP ---
                '<div>' +
                    '<div class="code-section-title">1. TSP ALGORITHM (Permutations)</div>' +
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm TSP(Cities C)\n' +
                        '  min_dist <- infinity\n' +
                        '  best_path <- null\n' +
                        '  // Generate every possible order\n' +
                        '  foreach permutation P of C do\n' +
                        '    if cost(P) < min_dist\n' +
                        '      min_dist <- cost(P)\n' +
                        '      best_path <- P\n' +
                        '  return best_path' +
                    '</div>' +
                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Cities = n\n' +
                        '// Number of permutations = (n-1)!\n' +
                        '// We divide by 2 because A->B... is same dist as ...B->A\n' +
                        '// Complexity: Theta(n!)' +
                    '</div>' +
                '</div>' +

                // --- EXAMPLE 2: KNAPSACK ---
                '<div>' +
                    '<div class="code-section-title">2. KNAPSACK (Subsets)</div>' +
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Knapsack(Weights W, Values V, Capacity C)\n' +
                        '  max_val <- 0\n' +
                        '  // Iterate 0 to 2^n - 1 (Binary representation of subsets)\n' +
                        '  for i <- 0 to 2^n - 1 do\n' +
                        '    subset <- getItemsFromBinary(i)\n' +
                        '    if weight(subset) <= C\n' +
                        '      if value(subset) > max_val\n' +
                        '        max_val <- value(subset)\n' +
                        '  return max_val' +
                    '</div>' +
                '</div>' +

                // --- EXAMPLE 3: ASSIGNMENT ---
                '<div>' +
                    '<div class="code-section-title">3. ASSIGNMENT (Permutations)</div>' +
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Assignment(CostMatrix C[0..n-1, 0..n-1])\n' +
                        '  min_cost <- infinity\n' +
                        '  // Generate permutations of columns {0, 1, ..., n-1}\n' +
                        '  foreach permutation p of {0...n-1} do\n' +
                        '    current_cost <- 0\n' +
                        '    for i <- 0 to n-1 do\n' +
                        '      // p[i] is the job assigned to person i\n' +
                        '      current_cost <- current_cost + C[i, p[i]]\n' +
                        '    \n' +
                        '    if current_cost < min_cost\n' +
                        '      min_cost <- current_cost\n' +
                        '      best_assignment <- p\n' +
                        '  return best_assignment' +
                    '</div>' +
                    '<div class="code-box">' +
                        '// Note: Exhaustive search is impractical for n > 12.\n' +
                        '// The Hungarian Algorithm solves this in O(n^3).' +
                    '</div>' +
                '</div>' +
            '</div>'
    }
}