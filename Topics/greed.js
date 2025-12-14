export const greedy = {
     // ============================================
    // TOPIC: GREEDY INTRO & CHANGE MAKING
    // ============================================
    'gre_intro': {
        title: "Greedy: Intro & Change Making",
        notes: 
        '<div class="space-y-8">' +
            // --- GREEDY INTRO ---
            '<div>' +
                '<h3 class="text-xl font-bold text-accent mb-2">The Greedy Principle</h3>' +
                '<p class="leading-relaxed text-sm md:text-base">' +
                    'Greedy algorithms repeatedly make the choice that seems best <strong>at the current step</strong>, hoping that these local decisions lead to a globally optimal solution. ' +
                    'They are used to solve <strong>optimization problems</strong> where we want to maximize or minimize a score, cost, or value.' +
                '</p>' +
                '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                    '<li>Feasible: Each choice must satisfy the problem constraints (i.e., be a legal move).</li>' +
                    '<li>Locally Optimal: At each step, pick the option that gives the best immediate benefit.</li>' +
                    '<li>Irrevocable: Once a choice is made, it cannot be undone (no backtracking).</li>' +
                '</ul>' +
                '<p class="mt-2 text-sm">Examples of greedy algorithms:</p>' +
                '<ul class="list-disc pl-5 mt-1 space-y-1 text-sm">' +
                    '<li>Dijkstra\'s shortest path algorithm</li>' +
                    '<li>Change making with canonical coin sets</li>' +
                    '<li>Huffman coding for optimal prefix-free encoding</li>' +
                '</ul>' +
            '</div>' +
             // --- CHANGE MAKING EXPLANATION ---
            '<div class="step-card border-l-4 border-green-500">' +
                '<span class="step-title">Change Making Algorithm Explained</span>' +
                '<p class="text-sm mb-2">' +
                    'Problem: Given coins <code>{d1, d2, ..., dm}</code> and amount <code>n</code>, make change using the <strong>fewest coins</strong>.' +
                '</p>' +
                '<ol class="list-decimal pl-5 space-y-1 text-sm">' +
                    '<li><strong>Sort coins descending:</strong> Start with the largest denomination.</li>' +
                    '<li><strong>Pick largest feasible coin:</strong> Choose a coin ≤ remaining amount.</li>' +
                    '<li><strong>Subtract and repeat:</strong> Reduce remaining amount by chosen coin and repeat selection.</li>' +
                    '<li><strong>Stop:</strong> Repeat until remaining = 0. Coins picked form the solution.</li>' +
                    '<li><strong>No solution:</strong> If remaining > 0 but no coin fits, the greedy method fails.</li>' +
                '</ol>' +
                '<p class="text-sm mt-2">' +
                    'This is greedy because it always makes the best local choice, hoping it leads to global optimality.' +
                '</p>' +
            '</div>' +

            // --- VISUAL TRACE: SUCCESS CASE ---
            '<div class="step-card border-l-4 border-blue-500">' +
                '<span class="step-title">Greedy Change Making: Success Case</span>' +
                '<p class="text-sm mb-4"><strong>Target Amount:</strong> 28. Coins Available: { 10, 5, 2, 1 }</p>' +
                
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<div class="flex flex-col gap-3 font-mono text-xs md:text-sm">' +
                        // Step 1
                        '<div class="flex items-center justify-between bg-black/20 p-2 rounded">' +
                            '<div class="flex items-center gap-2">' +
                                '<span class="text-gray-400">Step 1:</span>' +
                                '<span class="w-8 h-8 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center">10</span>' +
                                '<span>Fits in 28? <span class="text-green-400">YES</span></span>' +
                            '</div>' +
                            '<span class="text-blue-300">Remaining: 18</span>' +
                        '</div>' +

                        // Step 2
                        '<div class="flex items-center justify-between bg-black/20 p-2 rounded">' +
                            '<div class="flex items-center gap-2">' +
                                '<span class="text-gray-400">Step 2:</span>' +
                                '<span class="w-8 h-8 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center">10</span>' +
                                '<span>Fits in 18? <span class="text-green-400">YES</span></span>' +
                            '</div>' +
                            '<span class="text-blue-300">Remaining: 8</span>' +
                        '</div>' +

                        // Step 3 (Try 10, fail, pick 5)
                        '<div class="flex items-center justify-between bg-black/20 p-2 rounded">' +
                            '<div class="flex items-center gap-2">' +
                                '<span class="text-gray-400">Step 3:</span>' +
                                '<span class="w-8 h-8 rounded-full bg-yellow-500/30 text-white flex items-center justify-center border border-yellow-500 line-through decoration-red-500">10</span>' +
                                '<span class="w-8 h-8 rounded-full bg-gray-400 text-black font-bold flex items-center justify-center">5</span>' +
                                '<span>Fits in 8? <span class="text-green-400">YES</span></span>' +
                            '</div>' +
                            '<span class="text-blue-300">Remaining: 3</span>' +
                        '</div>' +

                        // Step 4
                        '<div class="flex items-center justify-between bg-black/20 p-2 rounded">' +
                            '<div class="flex items-center gap-2">' +
                                '<span class="text-gray-400">Step 4:</span>' +
                                '<span class="w-8 h-8 rounded-full bg-orange-700 text-white font-bold flex items-center justify-center border border-orange-400">2</span>' +
                                '<span>Fits in 3? <span class="text-green-400">YES</span></span>' +
                            '</div>' +
                            '<span class="text-blue-300">Remaining: 1</span>' +
                        '</div>' +

                        // Step 5
                        '<div class="flex items-center justify-between bg-black/20 p-2 rounded">' +
                            '<div class="flex items-center gap-2">' +
                                '<span class="text-gray-400">Step 5:</span>' +
                                '<span class="w-8 h-8 rounded-full bg-orange-700 text-white font-bold flex items-center justify-center border border-orange-400">1</span>' +
                                '<span>Fits in 1? <span class="text-green-400">YES</span></span>' +
                            '</div>' +
                            '<span class="text-green-400 font-bold">Remaining: 0 (Done)</span>' +
                        '</div>' +
                    '</div>' +
                    '<div class="mt-3 pt-3 border-t border-white/10 text-center">' +
                        '<span class="opacity-70">Result:</span> <strong class="text-yellow-400">10, 10, 5, 2, 1</strong> (5 Coins)</div>' +
                '</div>' +
            '</div>' +

            // --- FAILURE CASE ---
            '<div class="step-card border-l-4 border-red-500">' +
                '<span class="step-title">Greedy Change Making: Failure Case</span>' +
                '<p class="text-sm mb-2">Not all coin sets are “canonical”. Greedy may fail to find the minimal number of coins.</p>' +
                '<div class="glass p-3 rounded-lg bg-red-900/10">' +
                    '<p class="text-sm font-mono mb-2">Target: 6. Coins: { 4, 3, 1 }</p>' +
                    '<div class="grid grid-cols-2 gap-4 text-center">' +
                        '<div>' +
                            '<div class="text-xs uppercase text-red-300 font-bold mb-1">Greedy Algorithm</div>' +
                            '<p class="text-xs">Picks 4 → Rem: 2</p>' +
                            '<p class="text-xs">Picks 1 → Rem: 1</p>' +
                            '<p class="text-xs">Picks 1 → Rem: 0</p>' +
                            '<div class="mt-1 font-bold text-red-400">Total: 3 Coins</div>' +
                        '</div>' +
                        '<div>' +
                            '<div class="text-xs uppercase text-green-300 font-bold mb-1">Optimal Solution</div>' +
                            '<p class="text-xs">Picks 3 → Rem: 3</p>' +
                            '<p class="text-xs">Picks 3 → Rem: 0</p>' +
                            '<div class="mt-1 font-bold text-green-400">Total: 2 Coins</div>' +
                        '</div>' +
                    '</div>' +
                    '<p class="text-xs mt-2 opacity-70">Greedy fails here because the largest coin choice at the first step leads to a suboptimal solution.</p>' +
                '</div>' +
            '</div>' +

            // --- PRINCIPLE SUMMARY ---
            '<div class="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30 text-center">' +
                '<h4 class="font-bold text-sm text-purple-300 mb-2">Greedy Algorithm Principles</h4>' +
                '<ul class="text-xs text-left space-y-1 font-mono opacity-90">' +
                    '<li>Feasible: Each choice satisfies problem constraints.</li>' +
                    '<li>Locally Optimal: Choose the best option at the current step.</li>' +
                    '<li>Irrevocable: Choices cannot be undone.</li>' +
                    '<li>Approximation possible: Some problems allow near-optimal solutions.</li>' +
                    '<li>Not all optimization problems can be solved greedily.</li>' +
                '</ul>' +
            '</div>'
    ,
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">GREEDY CHANGE MAKING</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm MakeChange(Coins D[1..m], Amount n)\n' +
                        '  // 1. Sort coins largest to smallest\n' +
                        '  Sort D descending\n' +
                        '  Solution S <- empty\n' +
                        '  \n' +
                        '  // 2. Iterate through coins\n' +
                        '  for i <- 1 to m do\n' +
                        '    // 3. Take as many as possible\n' +
                        '    while n >= D[i] do\n' +
                        '      n <- n - D[i]\n' +
                        '      S.add(D[i])\n' +
                        '      \n' +
                        '  if n > 0 return "No solution"\n' +
                        '  return S' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'List<Integer> getChange(int[] coins, int amount) {\n' +
                        '    // Assumes coins array is sorted: {10, 5, 2, 1}\n' +
                        '    List<Integer> result = new ArrayList<>();\n' +
                        '    \n' +
                        '    for (int coin : coins) {\n' +
                        '        // While we can afford this coin, take it\n' +
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
                        '// Time Efficiency: O(n) in worst case (e.g. all 1s)\n' +
                        '// or O(m) if using division/modulo for counts.\n' +
                        '// Optimality: Only optimal for specific coin sets \n' +
                        '// (called Matroids/Canonical sets).' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
   // ============================================
    // TOPIC: HUFFMAN CODING (TEXT ENCODING)
    // ============================================
    'gre_huff': {
        title: "Greedy: Huffman Coding & Compression",
        notes: 
            '<div class="space-y-12">' + // Increased spacing for long content
                
                // --- PART 1: THE PROBLEM (ENCODING) ---
                '<div>' +
                    '<h3 class="text-2xl font-bold text-accent mb-4 border-b border-white/10 pb-2">1. The Problem: Text Encoding</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base mb-4">' +
                        'Computers only understand bits (0s and 1s). To store text, we must map characters to bit patterns. The efficiency of this mapping determines the size of the file.' +
                    '</p>' +
                    
                    '<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">' +
                        // Fixed Length
                        '<div class="bg-black/20 p-5 rounded-xl border border-white/10">' +
                            '<h4 class="font-bold text-blue-300 text-lg mb-2">Option A: Fixed-Length</h4>' +
                            '<p class="text-sm opacity-80 mb-3">Every character uses the same number of bits.</p>' +
                            '<ul class="list-disc pl-5 text-sm space-y-2 font-mono text-xs">' +
                                '<li><strong>Standard:</strong> ASCII (8 bits per char).</li>' +
                                '<li><strong>Example:</strong> "ABAC"<br>A=00, B=01, C=10<br>00 01 00 10 (8 bits)</li>' +
                                '<li><strong>Pros:</strong> Easy to parse (just slice every 8 bits).</li>' +
                                '<li><strong>Cons:</strong> Wastes space. \'Z\' uses as much space as \'E\', even if \'Z\' appears once and \'E\' appears 1000 times.</li>' +
                            '</ul>' +
                        '</div>' +

                        // Variable Length
                        '<div class="bg-black/20 p-5 rounded-xl border border-white/10">' +
                            '<h4 class="font-bold text-green-300 text-lg mb-2">Option B: Variable-Length</h4>' +
                            '<p class="text-sm opacity-80 mb-3">Frequent characters use fewer bits. Rare characters use more.</p>' +
                            '<ul class="list-disc pl-5 text-sm space-y-2 font-mono text-xs">' +
                                '<li><strong>Standard:</strong> Huffman, Morse Code.</li>' +
                                '<li><strong>Example:</strong> "ABAC"<br>A=0 (Frequent), B=10, C=11<br>0 10 0 11 (5 bits)</li>' +
                                '<li><strong>Pros:</strong> Significant compression (20-80%).</li>' +
                                '<li><strong>Cons:</strong> Harder to decode. Need a "Prefix-Free" rule.</li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- PART 2: PREFIX FREE CODES ---
                '<div class="step-card border-l-4 border-purple-500">' +
                    '<span class="step-title">2. The "Prefix-Free" Constraint</span>' +
                    '<p class="text-sm mb-4">' +
                        'In variable-length coding, we cannot use separators (spaces) between bits. We need to know <em>exactly</em> when a character ends.' +
                    '</p>' +
                    
                    '<div class="glass p-4 rounded-lg mb-4">' +
                        '<h5 class="font-bold text-xs text-red-300 uppercase mb-2">The Ambiguity Problem</h5>' +
                        '<p class="text-sm font-mono mb-2">Suppose: A=0, B=1, C=01</p>' +
                        '<p class="text-sm">If we receive <strong>01</strong>, is it:</p>' +
                        '<ul class="list-disc pl-5 text-sm opacity-80">' +
                            '<li>"A" then "B"? (0, 1)</li>' +
                            '<li>Or just "C"? (01)</li>' +
                        '</ul>' +
                        '<p class="text-sm mt-2 text-red-400 font-bold">This is ambiguous because "A" (0) is a prefix of "C" (01).</p>' +
                    '</div>' +

                    '<div class="glass p-4 rounded-lg">' +
                        '<h5 class="font-bold text-xs text-green-300 uppercase mb-2">The Huffman Solution</h5>' +
                        '<p class="text-sm">Huffman codes satisfy the <strong>Prefix Property</strong>: No code is a prefix of another.</p>' +
                        '<p class="text-sm mt-2"><strong>How?</strong> By placing characters only at the <strong>leaves</strong> of a binary tree.</p>' +
                        '<ul class="list-disc pl-5 mt-2 text-sm opacity-80">' +
                            '<li>Left child = 0</li>' +
                            '<li>Right child = 1</li>' +
                            '<li>Only stop when you hit a leaf.</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +

                // --- PART 3: THE ALGORITHM ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-4">3. The Huffman Algorithm (Greedy)</h3>' +
                    '<p class="text-sm mb-4">We build the tree from the <strong>Bottom-Up</strong>. We want characters with low frequency deep in the tree (long codes), and high frequency near the root (short codes).</p>' +
                    
                    '<div class="space-y-2 font-mono text-sm bg-black/30 p-4 rounded border border-white/5">' +
                        '<p>1. Count frequency of all characters.</p>' +
                        '<p>2. Create a Leaf Node for each character.</p>' +
                        '<p>3. Insert all nodes into a <strong class="text-yellow-400">Priority Queue</strong> (Min-Heap).</p>' +
                        '<p class="opacity-50 pl-4">// While Queue size > 1:</p>' +
                        '<p class="pl-4">4. Extract the two smallest nodes ($x, y$).</p>' +
                        '<p class="pl-4">5. Create a new internal node $z$.</p>' +
                        '<p class="pl-8 text-blue-300">z.frequency = x.freq + y.freq</p>' +
                        '<p class="pl-8">z.left = x; z.right = y;</p>' +
                        '<p class="pl-4">6. Insert $z$ back into the Queue.</p>' +
                        '<p>7. The remaining node is the Root.</p>' +
                    '</div>' +
                '</div>' +

                // --- PART 4: DETAILED TRACE ---
                '<div class="step-card">' +
                    '<span class="step-title">4. Master Example Trace</span>' +
                    '<p class="text-sm mb-4">Let\'s trace the example from your notes: <strong>Sum 0.4 and 0.15...</strong></p>' +
                    '<p class="text-xs font-mono bg-white/5 p-2 rounded mb-4">Input: A(0.15), B(0.45), C(0.40)</p>' +

                    // STEP 1
                    '<div class="mb-6 relative pl-6 border-l-2 border-white/10">' +
                        '<div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>' +
                        '<h4 class="font-bold text-blue-300 text-sm">Step 1: Initialization</h4>' +
                        '<p class="text-xs mb-2">Priority Queue (Sorted by Probability):</p>' +
                        '<div class="flex gap-2">' +
                            '<div class="px-3 py-2 bg-black/40 border border-white/20 rounded text-center min-w-[60px]">' +
                                '<span class="block text-xs text-gray-500">Node</span>' +
                                '<span class="font-bold text-accent">A</span>' +
                                '<span class="block text-xs text-green-400">0.15</span>' +
                            '</div>' +
                            '<div class="px-3 py-2 bg-black/40 border border-white/20 rounded text-center min-w-[60px]">' +
                                '<span class="block text-xs text-gray-500">Node</span>' +
                                '<span class="font-bold text-accent">C</span>' +
                                '<span class="block text-xs text-green-400">0.40</span>' +
                            '</div>' +
                            '<div class="px-3 py-2 bg-black/40 border border-white/20 rounded text-center min-w-[60px]">' +
                                '<span class="block text-xs text-gray-500">Node</span>' +
                                '<span class="font-bold text-accent">B</span>' +
                                '<span class="block text-xs text-green-400">0.45</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    // STEP 2
                    '<div class="mb-6 relative pl-6 border-l-2 border-white/10">' +
                        '<div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-500"></div>' +
                        '<h4 class="font-bold text-yellow-300 text-sm">Step 2: Merge Smallest (A & C)</h4>' +
                        '<p class="text-xs mb-2">Pop A(0.15) and C(0.40). Create new Node sum = 0.55.</p>' +
                        
                        '<div class="flex items-center gap-4 bg-yellow-500/10 p-3 rounded">' +
                            // Tree Visual
                            '<div class="flex flex-col items-center">' +
                                '<div class="w-10 h-10 rounded-full border border-yellow-500 flex items-center justify-center font-bold text-xs bg-black">0.55</div>' +
                                '<div class="flex w-16 justify-between text-[10px] text-gray-400"><span>0</span><span>1</span></div>' +
                                '<div class="flex w-16 justify-between">' +
                                    '<div class="flex flex-col items-center">' +
                                        '<div class="h-4 w-px bg-gray-500"></div>' +
                                        '<div class="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs">A</div>' +
                                        '<span class="text-[9px]">0.15</span>' +
                                    '</div>' +
                                    '<div class="flex flex-col items-center">' +
                                        '<div class="h-4 w-px bg-gray-500"></div>' +
                                        '<div class="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs">C</div>' +
                                        '<span class="text-[9px]">0.40</span>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="text-xs opacity-70">Insert 0.55 back into Queue...</div>' +
                        '</div>' +
                    '</div>' +

                    // STEP 3
                    '<div class="mb-6 relative pl-6 border-l-2 border-white/10">' +
                        '<div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>' +
                        '<h4 class="font-bold text-green-300 text-sm">Step 3: Final Merge</h4>' +
                        '<p class="text-xs mb-2">Queue now: B(0.45), New(0.55). Merge them. Sum = 1.0.</p>' +
                        
                        '<div class="flex justify-center bg-green-500/10 p-4 rounded">' +
                             // Final Tree Visual
                            '<div class="flex flex-col items-center">' +
                                '<div class="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center font-bold text-sm bg-black">1.0</div>' +
                                '<div class="flex w-32 justify-between text-[10px] text-gray-400 px-4"><span>0</span><span>1</span></div>' +
                                '<div class="flex w-32 justify-between">' +
                                    // Left Child (B)
                                    '<div class="flex flex-col items-center">' +
                                        '<div class="h-6 w-px bg-gray-500"></div>' +
                                        '<div class="w-10 h-10 rounded-full border border-white flex items-center justify-center text-sm font-bold bg-blue-900">B</div>' +
                                        '<span class="text-[10px]">0.45</span>' +
                                    '</div>' +
                                    // Right Child (Previous 0.55)
                                    '<div class="flex flex-col items-center">' +
                                        '<div class="h-6 w-px bg-gray-500"></div>' +
                                        '<div class="w-10 h-10 rounded-full border border-yellow-500 flex items-center justify-center text-sm bg-black">0.55</div>' +
                                        '<div class="flex w-16 justify-between text-[8px] text-gray-400"><span>0</span><span>1</span></div>' +
                                        '<div class="flex w-16 justify-between">' +
                                            '<div class="flex flex-col items-center"><div class="h-3 w-px bg-gray-500"></div><span class="font-bold">A</span></div>' +
                                            '<div class="flex flex-col items-center"><div class="h-3 w-px bg-gray-500"></div><span class="font-bold">C</span></div>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    // STEP 4: CODES
                    '<div class="relative pl-6 border-l-2 border-white/10">' +
                        '<div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white"></div>' +
                        '<h4 class="font-bold text-white text-sm">Step 4: Generate Codes</h4>' +
                        '<p class="text-xs mb-3">Trace from Root to Leaf. Left=0, Right=1.</p>' +
                        '<div class="grid grid-cols-3 gap-2 text-center text-xs font-mono">' +
                            '<div class="bg-blue-500/20 p-2 rounded border border-blue-500">B<br><strong class="text-lg">0</strong></div>' +
                            '<div class="bg-yellow-500/20 p-2 rounded border border-yellow-500">A<br><strong class="text-lg">10</strong></div>' +
                            '<div class="bg-yellow-500/20 p-2 rounded border border-yellow-500">C<br><strong class="text-lg">11</strong></div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- PART 5: ANALYSIS & COMPRESSION RATIO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-4">5. Compression Analysis</h3>' +
                    
                    '<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">' +
                        // Formula Card
                        '<div class="bg-black/20 p-4 rounded-xl border border-white/10">' +
                            '<h4 class="font-bold text-sm text-gray-300 mb-2">Formula</h4>' +
                            '<div class="text-center">' +
                                '<p class="text-xs opacity-60 mb-1">Compression Ratio (CR)</p>' +
                                '<div class="text-lg font-mono text-green-300 bg-black/40 p-2 rounded">' +
                                    'CR = (1 - size_compressed / size_original) * 100%' +
                                '</div>' +
                            '</div>' +
                        '</div>' +

                        // Calculation Example
                        '<div class="bg-black/20 p-4 rounded-xl border border-white/10">' +
                            '<h4 class="font-bold text-sm text-gray-300 mb-2">Calculation for Example</h4>' +
                            '<p class="text-xs mb-1"><strong>Original (Fixed):</strong> 3 chars $\\times$ 2 bits = 6 bits avg (if uniform).</p>' +
                            '<p class="text-xs mb-1"><strong>Huffman (Weighted):</strong></p>' +
                            '<ul class="text-xs font-mono pl-4 opacity-80">' +
                                '<li>B: 1 bit * 0.45 = 0.45</li>' +
                                '<li>A: 2 bits * 0.15 = 0.30</li>' +
                                '<li>C: 2 bits * 0.40 = 0.80</li>' +
                                '<li><strong>Avg Length:</strong> 1.55 bits per char</li>' +
                            '</ul>' +
                            '<p class="text-xs mt-2 text-green-400 font-bold">1.55 is much better than 2.0!</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- PART 6: DECODING EXAMPLE ---
                '<div class="step-card">' +
                    '<span class="step-title">6. Decoding Example</span>' +
                    '<p class="text-sm mb-2">Decode bitstream: <strong class="font-mono text-accent">01011</strong></p>' +
                    '<div class="font-mono text-xs md:text-sm bg-black/30 p-3 rounded space-y-2">' +
                        '<p><span class="text-blue-400">0</span> &rarr; Left from Root &rarr; Leaf <strong>B</strong>. (Restart)</p>' +
                        '<p><span class="text-yellow-400">1</span> &rarr; Right. <span class="text-yellow-400">0</span> &rarr; Left &rarr; Leaf <strong>A</strong>. (Restart)</p>' +
                        '<p><span class="text-yellow-400">1</span> &rarr; Right. <span class="text-yellow-400">1</span> &rarr; Right &rarr; Leaf <strong>C</strong>.</p>' +
                        '<p class="mt-2 text-green-400 font-bold">Result: BAC</p>' +
                    '</div>' +
                '</div>' +

            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">HUFFMAN IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">1. Node Structure (Java)</span>' +
                    '<div class="code-box">' +
                        'class Node implements Comparable<Node> {\n' +
                        '    char ch;\n' +
                        '    double freq;\n' +
                        '    Node left, right;\n' +
                        '\n' +
                        '    // Constructor for Leaf\n' +
                        '    Node(char c, double f) { ch=c; freq=f; }\n' +
                        '\n' +
                        '    // Constructor for Internal\n' +
                        '    Node(Node l, Node r) {\n' +
                        '        this.freq = l.freq + r.freq;\n' +
                        '        this.left = l;\n' +
                        '        this.right = r;\n' +
                        '    }\n' +
                        '\n' +
                        '    // PriorityQueue Sorts by Frequency\n' +
                        '    public int compareTo(Node other) {\n' +
                        '        return Double.compare(this.freq, other.freq);\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">2. Tree Construction Logic</span>' +
                    '<div class="code-box">' +
                        'Node buildHuffman(char[] chars, double[] freqs) {\n' +
                        '    int n = chars.length;\n' +
                        '    PriorityQueue<Node> pq = new PriorityQueue<>();\n' +
                        '\n' +
                        '    // 1. Create Leaves\n' +
                        '    for (int i = 0; i < n; i++) {\n' +
                        '        pq.add(new Node(chars[i], freqs[i]));\n' +
                        '    }\n' +
                        '\n' +
                        '    // 2. Greedy Loop\n' +
                        '    while (pq.size() > 1) {\n' +
                        '        Node x = pq.poll(); // Smallest\n' +
                        '        Node y = pq.poll(); // 2nd Smallest\n' +
                        '\n' +
                        '        Node z = new Node(x, y); // Merge\n' +
                        '        pq.add(z);\n' +
                        '    }\n' +
                        '\n' +
                        '    return pq.poll(); // Root\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">3. Code Generation (DFS)</span>' +
                    '<div class="code-box">' +
                        'void generateCodes(Node root, String code) {\n' +
                        '    if (root == null) return;\n' +
                        '\n' +
                        '    // Found a leaf (Character)\n' +
                        '    if (root.left == null && root.right == null) {\n' +
                        '        System.out.println(root.ch + ": " + code);\n' +
                        '        return;\n' +
                        '    }\n' +
                        '\n' +
                        '    // Recurse Left (Append 0)\n' +
                        '    generateCodes(root.left, code + "0");\n' +
                        '\n' +
                        '    // Recurse Right (Append 1)\n' +
                        '    generateCodes(root.right, code + "1");\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Complexity Analysis</span>' +
                    '<div class="code-box">' +
                        '// Time Complexity: O(n log n)\n' +
                        '// - Sorting/PQ Operations: n insertions/deletions\n' +
                        '// - Each PQ op is log n\n' +
                        '// Space Complexity: O(n) to store the tree.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
}