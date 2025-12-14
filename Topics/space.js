export const space = {
  // ============================================
    // TOPIC: SPACE-TIME TRADEOFF INTRO & COUNTING SORT
    // ============================================
    'spa_intro': {
        title: "Space-Time Tradeoff: Intro & Counting Sort",
        notes: 
            '<div class="space-y-8">' +
                // --- INTRO & DEFINITION ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Principle</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'The Space-Time Tradeoff states that we can reduce the running time of an algorithm by consuming more memory (space). In modern computing, memory is cheap, so we often trade space to gain speed.' +
                    '</p>' +
                    '<div class="mt-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded text-sm">' +
                        '<strong class="text-purple-300">Did you know?</strong> <strong>Dynamic Programming</strong> is a classic Space-Time Tradeoff. We store solutions to sub-problems (Space) to avoid re-calculating them (Time).' +
                    '</div>' +
                '</div>' +

                // --- PROS & CONS (SPACE TIME) ---
                '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
                    '<div class="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">' +
                        '<h4 class="font-bold text-green-300 mb-2 border-b border-green-500/20 pb-2">Advantages</h4>' +
                        '<ul class="list-disc pl-5 text-sm space-y-1 opacity-90">' +
                            '<li><strong>Linear Time:</strong> $\\Theta(n+k)$ is much faster than comparison sorts ($\\Theta(n \\log n)$) when $k$ is small.</li>' +
                            '<li><strong>Stable:</strong> Preserves the relative order of equal elements (vital for Radix Sort).</li>' +
                        '</ul>' +
                    '</div>' +
                    '<div class="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">' +
                        '<h4 class="font-bold text-red-300 mb-2 border-b border-red-500/20 pb-2">Weaknesses</h4>' +
                        '<ul class="list-disc pl-5 text-sm space-y-1 opacity-90">' +
                            '<li><strong>Memory Usage:</strong> If range $k$ is large (e.g. 1 to $10^9$), the frequency array is too big.</li>' +
                            '<li><strong>Restricted:</strong> Only works on integers or data that maps to integer keys.</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
                

                // --- DEEP DIVE: EXAMPLE FROM SLIDES ---
                '<div class="step-card">' +
                    '<span class="step-title">Deep Dive: Sorting by Counting</span>' +
                    '<p class="text-sm mb-4">Let\'s trace the algorithm with the array $A = [13, 11, 12, 13, 12, 12]$.</p>' +

                    // 1. FREQUENCIES & DISTRIBUTION
                    '<div class="glass p-4 rounded-lg border border-white/10 mb-6">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-2">Step 1 & 2: Frequency & Distribution</h4>' +
                        '<div class="grid grid-cols-4 gap-2 text-center text-sm font-mono">' +
                            '<div class="text-gray-400 border-b border-white/10">Value</div>' +
                            '<div class="font-bold">11</div><div class="font-bold">12</div><div class="font-bold">13</div>' +
                            
                            '<div class="text-gray-400 text-left pl-2">Frequency</div>' +
                            '<div class="bg-blue-500/20 rounded">1</div>' +
                            '<div class="bg-blue-500/20 rounded">3</div>' +
                            '<div class="bg-blue-500/20 rounded">2</div>' +

                            '<div class="text-gray-400 text-left pl-2">Distribution</div>' +
                            '<div class="bg-yellow-500/20 rounded text-yellow-200">1</div>' +
                            '<div class="bg-yellow-500/20 rounded text-yellow-200">4</div>' +
                            '<div class="bg-yellow-500/20 rounded text-yellow-200">6</div>' +
                        '</div>' +
                        '<p class="text-xs text-center mt-2 opacity-60">Distribution (Cumulative) tells us the last possible position for each value.</p>' +
                    '</div>' +

                    // 2. PLACEMENT TRACE
                    '<div class="glass p-4 rounded-lg border border-white/10">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-2">Step 3: Placement (Backwards)</h4>' +
                        '<div class="space-y-2 font-mono text-xs md:text-sm">' +
                            
                            // A[5]
                            '<div class="flex items-center justify-between border-b border-white/5 pb-1">' +
                                '<span>A[5] = <strong>12</strong></span>' +
                                '<span class="text-gray-400">Dist[12] is 4</span>' +
                                '<span class="text-green-400">Place at S[3]</span>' +
                                '<span class="text-yellow-500">Dist[12] &rarr; 3</span>' +
                            '</div>' +

                            // A[4]
                            '<div class="flex items-center justify-between border-b border-white/5 pb-1">' +
                                '<span>A[4] = <strong>12</strong></span>' +
                                '<span class="text-gray-400">Dist[12] is 3</span>' +
                                '<span class="text-green-400">Place at S[2]</span>' +
                                '<span class="text-yellow-500">Dist[12] &rarr; 2</span>' +
                            '</div>' +

                            // A[3]
                            '<div class="flex items-center justify-between border-b border-white/5 pb-1">' +
                                '<span>A[3] = <strong>13</strong></span>' +
                                '<span class="text-gray-400">Dist[13] is 6</span>' +
                                '<span class="text-green-400">Place at S[5]</span>' +
                                '<span class="text-yellow-500">Dist[13] &rarr; 5</span>' +
                            '</div>' +

                            // A[2]
                            '<div class="flex items-center justify-between border-b border-white/5 pb-1">' +
                                '<span>A[2] = <strong>12</strong></span>' +
                                '<span class="text-gray-400">Dist[12] is 2</span>' +
                                '<span class="text-green-400">Place at S[1]</span>' +
                                '<span class="text-yellow-500">Dist[12] &rarr; 1</span>' +
                            '</div>' +

                            // A[1]
                            '<div class="flex items-center justify-between border-b border-white/5 pb-1">' +
                                '<span>A[1] = <strong>11</strong></span>' +
                                '<span class="text-gray-400">Dist[11] is 1</span>' +
                                '<span class="text-green-400">Place at S[0]</span>' +
                                '<span class="text-yellow-500">Dist[11] &rarr; 0</span>' +
                            '</div>' +

                            // A[0]
                            '<div class="flex items-center justify-between">' +
                                '<span>A[0] = <strong>13</strong></span>' +
                                '<span class="text-gray-400">Dist[13] is 5</span>' +
                                '<span class="text-green-400">Place at S[4]</span>' +
                                '<span class="text-yellow-500">Dist[13] &rarr; 4</span>' +
                            '</div>' +
                        '</div>' +
                        
                        // FINAL ARRAY
                        '<div class="mt-4 pt-2 border-t border-white/20 text-center">' +
                            '<p class="text-xs mb-1 font-bold">Final Sorted Array S:</p>' +
                            '<div class="flex justify-center gap-1 font-mono text-sm">' +
                                '<div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">11</div>' +
                                '<div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">12</div>' +
                                '<div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">12</div>' +
                                '<div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">12</div>' +
                                '<div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">13</div>' +
                                '<div class="px-2 py-1 bg-green-500/20 rounded border border-green-500">13</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">COUNTING SORT IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm CountingSort(A[0..n-1], k)\n' +
                        '  // k is the range of values\n' +
                        '  D[0..k-1] initialized to 0 (Frequencies)\n' +
                        '  S[0..n-1] (Result array)\n' +
                        '  \n' +
                        '  // 1. Compute Frequencies\n' +
                        '  for i <- 0 to n-1 do D[A[i]]++\n' +
                        '  \n' +
                        '  // 2. Compute Distribution (Prefix Sums)\n' +
                        '  for j <- 1 to k-1 do D[j] <- D[j] + D[j-1]\n' +
                        '  \n' +
                        '  // 3. Place elements (Reverse order for stability)\n' +
                        '  for i <- n-1 downto 0 do\n' +
                        '    j <- A[i]\n' +
                        '    S[D[j] - 1] <- A[i]\n' +
                        '    D[j]--\n' +
                        '  return S' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int[] countingSort(int[] arr, int maxVal) {\n' +
                        '    // Tradeoff: We allocate extra memory "count" based on maxVal\n' +
                        '    int[] count = new int[maxVal + 1];\n' +
                        '    int[] output = new int[arr.length];\n' +
                        '\n' +
                        '    // 1. Count Frequencies\n' +
                        '    for (int num : arr) count[num]++;\n' +
                        '\n' +
                        '    // 2. Accumulate (Prefix Sum)\n' +
                        '    for (int i = 1; i <= maxVal; i++)\n' +
                        '        count[i] += count[i - 1];\n' +
                        '\n' +
                        '    // 3. Build Output\n' +
                        '    for (int i = arr.length - 1; i >= 0; i--) {\n' +
                        '        output[count[arr[i]] - 1] = arr[i];\n' +
                        '        count[arr[i]]--;\n' +
                        '    }\n' +
                        '    return output;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Time Complexity: Theta(n + k)\n' +
                        '// Space Complexity: Theta(n + k)\n' +
                        '// Tradeoff: If k is small (~n), it is Linear Theta(n).\n' +
                        '// If k is huge (e.g. 1 billion), we run out of memory.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: HORSPOOL'S ALGORITHM
    // ============================================
    'spa_horspool': {
        title: "Horspool's Algorithm (String Matching)",
        notes: 
            '<div class="space-y-8">' +
                // --- INTRO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Input Enhancement Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Brute Force shifts by 1 on a mismatch. Horspool pre-computes a <strong>Shift Table</strong> to skip as many characters as possible. It matches from <strong>Right to Left</strong>.' +
                    '</p>' +
                '</div>' +

                // --- SHIFT TABLE LOGIC ---
                '<div class="step-card border-l-4 border-blue-500">' +
                    '<span class="step-title">1. Constructing the Shift Table</span>' +
                    '<p class="text-sm mb-4">Formula: $Shift(c) = m - 1 - index(c)$. <br><span class="text-xs opacity-70">(Where index is the position of the rightmost occurrence of c, excluding the last character).</span></p>' +
                    
                    '<div class="glass p-4 rounded-lg border border-white/10">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-2">Example: Pattern "BARBER" (m=6)</h4>' +
                        
                        // TABLE VISUAL
                        '<table class="w-full text-center text-sm font-mono border-collapse">' +
                            '<thead>' +
                                '<tr class="bg-blue-900/30 text-blue-200">' +
                                    '<th class="p-2 border border-blue-500/30">Char</th>' +
                                    '<th class="p-2 border border-blue-500/30">Formula ($6-1-k$)</th>' +
                                    '<th class="p-2 border border-blue-500/30">Shift</th>' +
                                '</tr>' +
                            '</thead>' +
                            '<tbody>' +
                                '<tr>' +
                                    '<td class="p-2 border border-white/10">A</td>' +
                                    '<td class="p-2 border border-white/10">6 - 1 - 1</td>' +
                                    '<td class="p-2 border border-white/10 font-bold text-yellow-400">4</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td class="p-2 border border-white/10">R</td>' +
                                    '<td class="p-2 border border-white/10">6 - 1 - 2 <span class="text-xs opacity-50">(Middle R)</span></td>' +
                                    '<td class="p-2 border border-white/10 font-bold text-yellow-400">3</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td class="p-2 border border-white/10">B</td>' +
                                    '<td class="p-2 border border-white/10">6 - 1 - 3 <span class="text-xs opacity-50">(2nd B)</span></td>' +
                                    '<td class="p-2 border border-white/10 font-bold text-yellow-400">2</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td class="p-2 border border-white/10">E</td>' +
                                    '<td class="p-2 border border-white/10">6 - 1 - 4</td>' +
                                    '<td class="p-2 border border-white/10 font-bold text-yellow-400">1</td>' +
                                '</tr>' +
                                '<tr class="bg-red-900/10">' +
                                    '<td class="p-2 border border-white/10">Others</td>' +
                                    '<td class="p-2 border border-white/10">Not in pattern</td>' +
                                    '<td class="p-2 border border-white/10 font-bold text-red-400">6 (m)</td>' +
                                '</tr>' +
                            '</tbody>' +
                        '</table>' +
                    '</div>' +
                '</div>' +

                // --- SEARCH TRACE ---
                '<div class="step-card">' +
                    '<span class="step-title">2. Searching Step-by-Step</span>' +
                    '<p class="text-sm mb-4">Text: <code>JIM_SAW_ME_IN_A_BARBER_SHOP</code></p>' +

                    // TRACE BOX
                    '<div class="space-y-4 font-mono text-sm">' +
                        
                        // STEP 1
                        '<div class="bg-black/30 p-3 rounded">' +
                            '<div class="flex justify-between mb-1">' +
                                '<span class="text-xs text-gray-400">Step 1</span>' +
                                '<span class="text-xs text-red-300">Mismatch on \'_\'</span>' +
                            '</div>' +
                            '<div class="tracking-widest">' +
                                'JIM_SA<span class="text-red-400 font-bold">W</span>_ME...<br>' +
                                'BARBE<span class="text-red-400 font-bold">R</span>' +
                            '</div>' +
                            '<p class="text-xs mt-2 text-blue-300">Look at Text char aligned with last Pattern char: <strong>\'W\'</strong>.<br>Table[\'W\'] = 6. <strong>Shift 6.</strong></p>' +
                        '</div>' +

                        // STEP 2
                        '<div class="bg-black/30 p-3 rounded">' +
                            '<div class="flex justify-between mb-1">' +
                                '<span class="text-xs text-gray-400">Step 2</span>' +
                                '<span class="text-xs text-red-300">Mismatch on \'I\'</span>' +
                            '</div>' +
                            '<div class="tracking-widest">' +
                                '......W_ME_<span class="text-red-400 font-bold">I</span>N_A...<br>' +
                                '      BARBE<span class="text-red-400 font-bold">R</span>' +
                            '</div>' +
                            '<p class="text-xs mt-2 text-blue-300">Aligned Text char: <strong>\'I\'</strong>. Not in pattern.<br>Table[\'I\'] = 6. <strong>Shift 6.</strong></p>' +
                        '</div>' +

                        // STEP 3
                        '<div class="bg-black/30 p-3 rounded">' +
                            '<div class="flex justify-between mb-1">' +
                                '<span class="text-xs text-gray-400">Step 3</span>' +
                                '<span class="text-xs text-red-300">Mismatch on \'R\'</span>' +
                            '</div>' +
                            '<div class="tracking-widest">' +
                                '...........IN_A_B<span class="text-red-400 font-bold">A</span>R...<br>' +
                                '            BARBE<span class="text-red-400 font-bold">R</span>' +
                            '</div>' +
                            '<p class="text-xs mt-2 text-blue-300">Aligned Text char: <strong>\'A\'</strong>.<br>Table[\'A\'] = 4. <strong>Shift 4.</strong></p>' +
                        '</div>' +

                        // STEP 4 (MATCH)
                        '<div class="bg-green-900/20 border border-green-500/30 p-3 rounded">' +
                            '<div class="flex justify-between mb-1">' +
                                '<span class="text-xs text-gray-400">Step 4</span>' +
                                '<span class="text-xs text-green-400 font-bold">MATCH!</span>' +
                            '</div>' +
                            '<div class="tracking-widest">' +
                                '...............<span class="text-green-400 font-bold">BARBER</span>_SHOP<br>' +
                                '                <span class="text-green-400 font-bold">BARBER</span>' +
                            '</div>' +
                        '</div>' +

                    '</div>' +
                '</div>' +
            '</div>'+
            // --- HIDDEN RULES & INSIGHTS ---
'<div class="step-card border-l-4 border-purple-500">' +
    '<span class="step-title">3. Hidden Rules & Important Insights</span>' +
    '<ul class="list-disc list-inside text-sm space-y-2 leading-relaxed">' +
        '<li><strong>Only the last aligned text character matters.</strong> Horspool ignores where the mismatch occurs — the shift is decided solely by the character aligned with the <em>last</em> pattern character.</li>' +
        '<li><strong>The last pattern character is never used in the table.</strong> This prevents zero shifts and guarantees progress.</li>' +
        '<li><strong>Matching is right-to-left.</strong> This allows early mismatches to skip large sections of text.</li>' +
        '<li><strong>No Good Suffix Rule.</strong> Horspool is a simplified Boyer–Moore variant and does NOT exploit matched suffixes.</li>' +
        '<li><strong>Alphabet size matters.</strong> Larger alphabets increase average shift distance.</li>' +
    '</ul>' +
'</div>' +

 // --- WHY IT WORKS WELL ---
'<div class="step-card border-l-4 border-green-500">' +
    '<span class="step-title">4. Why Horspool Is Efficient in Practice</span>' +
    '<p class="text-sm leading-relaxed mb-3">' +
        'In typical text, mismatches occur early and the character aligned with the pattern’s last position often does not appear in the pattern. ' +
        'This causes shifts of length <strong>m</strong>, skipping entire windows at once.' +
    '</p>' +
    '<p class="text-sm leading-relaxed">' +
        'This makes Horspool very fast for natural language, source code, and random data — often outperforming brute force by a large margin.' +
    '</p>' +
'</div>' +

 // --- WORST CASE ---
'<div class="step-card border-l-4 border-red-500">' +
    '<span class="step-title">5. Worst-Case Behavior (Fully Explained)</span>' +

    '<p class="text-sm mb-3"><strong>Worst-case time complexity:</strong> Θ(nm)</p>' +

    '<p class="text-sm leading-relaxed mb-4">' +
        'The worst case occurs when the shift table repeatedly produces a shift of <strong>1</strong> and almost the entire pattern matches before failing.' +
    '</p>' +

    '<div class="glass p-4 rounded-lg border border-white/10">' +
        '<h4 class="font-bold text-xs text-accent mb-2">Worst-Case Construction</h4>' +
        '<p class="font-mono text-sm mb-2">Pattern: <strong>AAAAAB</strong></p>' +
        '<p class="font-mono text-sm mb-2">Text: <strong>AAAAAAAAAAAAAAAA</strong></p>' +
        '<p class="text-sm leading-relaxed">' +
            'The rightmost character in the pattern is <code>B</code>. Every comparison matches all the <code>A</code>s and fails at the last character. ' +
            'The aligned text character is <code>A</code>, which appears at position <code>m-2</code>, producing a shift of <strong>1</strong>.' +
        '</p>' +
    '</div>' +

    '<p class="text-sm leading-relaxed mt-4">' +
        'As a result, the algorithm performs almost <strong>m</strong> comparisons at each of the <strong>n</strong> alignments — identical to brute force.' +
    '</p>' +
'</div>' +
// ============================================
// VISUAL + ANIMATION EXTENSIONS
// ============================================

'<div class="space-y-10">' +

/* =====================================================
   🎞 ANIMATED SHIFT MOVEMENT (HORSPOOL)
   ===================================================== */
'<div class="step-card border-l-4 border-cyan-500">' +
  '<span class="step-title">🎞 Animated Shift Movement (Horspool)</span>' +
  '<p class="text-sm mb-4">' +
    'The frames below show how Horspool skips characters by shifting the pattern based on the last aligned text character.' +
  '</p>' +

  '<div class="space-y-4 font-mono text-sm">' +

    '<div class="bg-black/30 p-3 rounded">' +
      '<span class="text-xs text-gray-400">Frame 1</span>' +
      '<pre>TEXT:    J I M _ S A W _ M E\nPATTERN:        B A R B E R</pre>' +
      '<p class="text-xs text-blue-300">Mismatch → aligned char = W → Shift = 6</p>' +
    '</div>' +

    '<div class="bg-black/30 p-3 rounded">' +
      '<span class="text-xs text-gray-400">Frame 2</span>' +
      '<pre>TEXT:    J I M _ S A W _ M E _ I N\nPATTERN:                    B A R B E R</pre>' +
      '<p class="text-xs text-blue-300">Mismatch → aligned char = I → Shift = 6</p>' +
    '</div>' +

    '<div class="bg-black/30 p-3 rounded">' +
      '<span class="text-xs text-gray-400">Frame 3</span>' +
      '<pre>TEXT:    _ I N _ A _ B A R B E R\nPATTERN:            B A R B E R</pre>' +
      '<p class="text-xs text-green-400">All characters match → PATTERN FOUND</p>' +
    '</div>' +

  '</div>' +
'</div>' +

/* =====================================================
   🧠 GOOD SUFFIX ANIMATION (BOYER–MOORE)
   ===================================================== */
'<div class="step-card border-l-4 border-purple-500">' +
  '<span class="step-title">🧠 Good Suffix Rule — Animated Cases</span>' +
  '<p class="text-sm mb-4">' +
    'The Good Suffix Rule shifts the pattern based on how much of the suffix matched before a mismatch.' +
  '</p>' +

  '<div class="space-y-6 font-mono text-sm">' +

    // CASE 1
    '<div class="bg-black/30 p-3 rounded">' +
      '<span class="text-xs text-gray-400">Case 1: Suffix occurs elsewhere</span>' +
      '<pre>TEXT:    A B A B A B A B\nPATTERN:     A B A B\nMATCHED SUFFIX: "AB"</pre>' +
      '<p class="text-xs text-blue-300">Shift pattern to align next occurrence of suffix.</p>' +
    '</div>' +

    // CASE 2
    '<div class="bg-black/30 p-3 rounded">' +
      '<span class="text-xs text-gray-400">Case 2: Prefix matches suffix</span>' +
      '<pre>TEXT:    A B A B A B\nPATTERN:     A B A B\nPREFIX = SUFFIX = "AB"</pre>' +
      '<p class="text-xs text-blue-300">Shift so prefix aligns with suffix.</p>' +
    '</div>' +

    // CASE 3
    '<div class="bg-black/30 p-3 rounded">' +
      '<span class="text-xs text-gray-400">Case 3: No match</span>' +
      '<pre>TEXT:    X X X X X X\nPATTERN:     A B C D</pre>' +
      '<p class="text-xs text-red-300">Shift entire pattern by m.</p>' +
    '</div>' +

  '</div>' +
'</div>' +

/* =====================================================
   📈 PERFORMANCE INTUITION GRAPH (ACTUAL GRAPH)
   ===================================================== */
'<div class="step-card border-l-4 border-green-500">' +
  '<span class="step-title">📈 Performance Intuition Graph</span>' +
  '<p class="text-sm mb-4">' +
    'This graph compares character comparisons as text size increases.' +
  '</p>' +

  '<div class="bg-black/30 p-4 rounded">' +

    '<svg width="100%" height="260" viewBox="0 0 600 260">' +

      // Axes
      '<line x1="50" y1="20" x2="50" y2="220" stroke="white" />' +
      '<line x1="50" y1="220" x2="560" y2="220" stroke="white" />' +

      // Labels
      '<text x="10" y="30" fill="white" font-size="12">Comparisons</text>' +
      '<text x="480" y="245" fill="white" font-size="12">Text Size (n)</text>' +

      // Brute Force Line
      '<polyline points="50,200 150,170 250,140 350,110 450,80 550,50" ' +
      'fill="none" stroke="red" stroke-width="3"/>' +
      '<text x="420" y="90" fill="red" font-size="12">Brute Force Θ(nm)</text>' +

      // Horspool Line
      '<polyline points="50,200 150,185 250,170 350,160 450,150 550,140" ' +
      'fill="none" stroke="cyan" stroke-width="3"/>' +
      '<text x="420" y="160" fill="cyan" font-size="12">Horspool Avg Θ(n)</text>' +

      // Boyer-Moore Line
      '<polyline points="50,200 150,190 250,185 350,182 450,180 550,178" ' +
      'fill="none" stroke="lime" stroke-width="3"/>' +
      '<text x="420" y="185" fill="lime" font-size="12">Boyer–Moore Best</text>' +

    '</svg>' +

    '<p class="text-xs text-gray-300 mt-3">' +
      'Key insight: skipping strategies flatten the curve — fewer comparisons as n grows.' +
    '</p>' +

  '</div>' +
'</div>' +

'</div>' +

 // --- COMPARISON INSIGHT ---
'<div class="step-card border-l-4 border-yellow-500">' +
    '<span class="step-title">6. Horspool vs Boyer–Moore (Key Insight)</span>' +
    '<table class="w-full text-sm border-collapse text-center">' +
        '<tr class="bg-yellow-900/30">' +
            '<th class="p-2 border border-yellow-500/30">Feature</th>' +
            '<th class="p-2 border border-yellow-500/30">Horspool</th>' +
            '<th class="p-2 border border-yellow-500/30">Boyer–Moore</th>' +
        '</tr>' +
        '<tr>' +
            '<td class="p-2 border border-white/10">Bad Character Rule</td>' +
            '<td class="p-2 border border-white/10">✔ (Simplified)</td>' +
            '<td class="p-2 border border-white/10">✔</td>' +
        '</tr>' +
        '<tr>' +
            '<td class="p-2 border border-white/10">Good Suffix Rule</td>' +
            '<td class="p-2 border border-white/10">✘</td>' +
            '<td class="p-2 border border-white/10">✔</td>' +
        '</tr>' +
        '<tr>' +
            '<td class="p-2 border border-white/10">Implementation</td>' +
            '<td class="p-2 border border-white/10">Simple</td>' +
            '<td class="p-2 border border-white/10">Complex</td>' +
        '</tr>' +
        '<tr>' +
            '<td class="p-2 border border-white/10">Worst Case</td>' +
            '<td class="p-2 border border-white/10">Θ(nm)</td>' +
            '<td class="p-2 border border-white/10">Θ(nm)</td>' +
        '</tr>' +
    '</table>' +
'</div>',

        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">HORSPOOL IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm ShiftTable(P[0..m-1])\n' +
                        '  Initialize Table with m\n' +
                        '  for j <- 0 to m-2 do\n' +
                        '    Table[P[j]] <- m - 1 - j\n' +
                        '  return Table\n\n' +
                        'Algorithm Horspool(T[0..n-1], P[0..m-1])\n' +
                        '  ShiftTable(P)\n' +
                        '  i <- m - 1\n' +
                        '  while i < n do\n' +
                        '    k <- 0\n' +
                        '    while k < m AND P[m-1-k] == T[i-k]\n' +
                        '      k++\n' +
                        '    if k == m return i - m + 1\n' +
                        '    else i <- i + Table[T[i]]\n' +
                        '  return -1' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int horspoolSearch(String t, String p) {\n' +
                        '    int n = t.length(), m = p.length();\n' +
                        '    int[] table = new int[256];\n' +
                        '    \n' +
                        '    // 1. Build Table\n' +
                        '    for(int i=0; i<256; i++) table[i] = m;\n' +
                        '    for(int j=0; j<m-1; j++) \n' +
                        '        table[p.charAt(j)] = m - 1 - j;\n' +
                        '        \n' +
                        '    // 2. Search\n' +
                        '    int i = m - 1;\n' +
                        '    while (i < n) {\n' +
                        '        int k = 0;\n' +
                        '        while (k < m && p.charAt(m-1-k) == t.charAt(i-k))\n' +
                        '            k++;\n' +
                        '        if (k == m) return i - m + 1;\n' +
                        '        i += table[t.charAt(i)]; // Shift\n' +
                        '    }\n' +
                        '    return -1;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Complexity Analysis</span>' +
                    '<div class="code-box">' +
                        '// Best Case: Theta(n/m) (Always shifting by m)\n' +
                        '// Average Case: Theta(n)\n' +
                        '// Worst Case: Theta(nm) (Same as brute force)\n' +
                        '// Space Complexity: Theta(sigma) (Size of alphabet)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

  // ============================================
// TOPIC: BOYER-MOORE ALGORITHM (DETAILED)
// ============================================
'spa_boyer': {
    title: "Boyer-Moore Algorithm (Deep Dive)",
    notes:
        '<div class="space-y-8">' +

            // --- INTRO ---
            '<div>' +
                '<h3 class="text-xl font-bold text-accent mb-2">The "Smartest" Search</h3>' +
                '<p class="leading-relaxed text-sm md:text-base">' +
                    'Boyer-Moore matches from <strong>Right to Left</strong>. Unlike Horspool, it uses TWO heuristics to determine how far to jump. It calculates both, and chooses the <strong>Larger Shift</strong>.' +
                '</p>' +
                '<div class="mt-2 p-3 bg-purple-500/10 border border-purple-500/30 rounded text-center font-mono text-sm">' +
                    'Shift = max( Bad_Symbol_Shift, Good_Suffix_Shift )' +
                '</div>' +
            '</div>' +

            // --- 1. BAD SYMBOL SHIFT (DETAILED) ---
            '<div class="step-card border-l-4 border-blue-500">' +
                '<span class="step-title">1. Bad Symbol Shift (The Math)</span>' +
                '<p class="text-sm mb-4">' +
                    'This rule answers the question: <em>"Where should the mismatched character in the text align next in the pattern?"</em>' +
                '</p>' +

                '<div class="bg-black/30 p-4 rounded-lg font-mono text-sm mb-4">' +
                    '<p class="text-gray-400 mb-2">// Formula:</p>' +
                    '<p class="text-blue-300 text-lg font-bold">d1 = max( T(c) - k, 1 )</p>' +
                    '<ul class="mt-3 list-disc pl-4 opacity-80 space-y-1 text-xs">' +
                        '<li><strong>c:</strong> Mismatched character in the text.</li>' +
                        '<li><strong>T(c):</strong> Bad Symbol Table value.</li>' +
                        '<li><strong>k:</strong> Characters already matched from the right.</li>' +
                        '<li><strong>1:</strong> Ensures forward progress.</li>' +
                    '</ul>' +
                '</div>' +

                // --- NEW: BAD SYMBOL TABLE CONSTRUCTION ---
                '<div class="glass p-4 rounded-lg border border-white/10 mb-6">' +
                    '<h4 class="font-bold text-xs text-accent mb-3">Building the Bad Symbol Table (Step-by-Step)</h4>' +

                    '<p class="text-xs mb-3 opacity-80">' +
                        'The Bad Symbol table stores how far the pattern can shift when a mismatch occurs. ' +
                        'It is based on the <strong>rightmost occurrence</strong> of each character in the pattern.' +
                    '</p>' +

                    '<div class="bg-black/20 p-3 rounded font-mono text-sm text-center mb-4">' +
                        '<p class="opacity-70">Pattern:</p>' +
                        '<p class="text-lg tracking-widest text-green-400 font-bold">B A R B E R</p>' +
                        '<p class="text-xs mt-1 opacity-60">Index: 0 1 2 3 4 5</p>' +
                    '</div>' +

                    '<div class="overflow-x-auto">' +
                        '<table class="w-full text-xs border border-white/10">' +
                            '<thead>' +
                                '<tr class="bg-white/5">' +
                                    '<th class="p-2 border border-white/10">Character</th>' +
                                    '<th class="p-2 border border-white/10">Rightmost Index</th>' +
                                    '<th class="p-2 border border-white/10">T(c) = m − 1 − index</th>' +
                                '</tr>' +
                            '</thead>' +
                            '<tbody class="font-mono">' +
                                '<tr><td class="p-2 border">B</td><td class="p-2 border">3</td><td class="p-2 border text-blue-300">2</td></tr>' +
                                '<tr><td class="p-2 border">A</td><td class="p-2 border">1</td><td class="p-2 border text-blue-300">4</td></tr>' +
                                '<tr><td class="p-2 border">R</td><td class="p-2 border">5</td><td class="p-2 border text-blue-300">0</td></tr>' +
                                '<tr><td class="p-2 border">E</td><td class="p-2 border">4</td><td class="p-2 border text-blue-300">1</td></tr>' +
                                '<tr><td class="p-2 border text-red-400">S</td><td class="p-2 border">Not Found</td><td class="p-2 border text-red-400">m = 6</td></tr>' +
                            '</tbody>' +
                        '</table>' +
                    '</div>' +

                    '<p class="text-xs mt-3 opacity-80">' +
                        '<strong>Rule:</strong> If the mismatched character does NOT exist in the pattern, ' +
                        'shift the entire pattern past the mismatch (T(c) = m).' +
                    '</p>' +
                '</div>' +

                // --- EXAMPLE TRACE ---
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-xs text-center text-accent mb-3">Example Trace: "TANSER" vs "BARBER"</h4>' +

                    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
                        '<div class="text-center font-mono text-sm tracking-widest">' +
                            '<div class="opacity-70">T A N S <span class="text-green-400 font-bold">E R</span></div>' +
                            '<div>B A R B <span class="text-green-400 font-bold">E R</span></div>' +
                            '<div class="text-xs mt-1 text-red-400">^ Mismatch at S vs B</div>' +
                        '</div>' +

                        '<div class="text-xs space-y-1">' +
                            '<p><strong>Matched (k):</strong> "ER" → k = 2</p>' +
                            '<p><strong>Mismatch character:</strong> S</p>' +
                            '<p><strong>Lookup:</strong> S ∉ BARBER → T(S) = 6</p>' +
                            '<div class="mt-2 border-t border-white/10 pt-1">' +
                                '<p>d1 = max( 6 − 2 , 1 )</p>' +
                                '<p class="text-lg font-bold text-blue-300">d1 = 4</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            // --- ANIMATED STEP-BY-STEP SHIFT (CONCEPTUAL) ---
'<div class="step-card border-l-4 border-cyan-400">' +
    '<span class="step-title">Visual Trace: How the Pattern Shifts</span>' +
    '<p class="text-sm mb-4">' +
        'Instead of jumping straight to the answer, let’s <strong>watch the pattern move</strong> step by step ' +
        'using the Bad Symbol rule. Each frame shows one alignment.' +
    '</p>' +

    '<div class="space-y-4 font-mono text-sm">' +

        // FRAME 1
        '<div class="glass p-3 rounded border border-white/10">' +
            '<p class="text-xs opacity-70 mb-1">Frame 1: Initial Alignment</p>' +
            '<div class="tracking-widest">' +
                '<p class="opacity-60">T A N S E R</p>' +
                '<p>B A R B E R</p>' +
            '</div>' +
            '<p class="text-xs text-red-400 mt-2">Mismatch at S vs B</p>' +
        '</div>' +

        // FRAME 2
        '<div class="glass p-3 rounded border border-white/10">' +
            '<p class="text-xs opacity-70 mb-1">Frame 2: Apply Bad Symbol Shift</p>' +
            '<p class="text-xs mb-2">' +
                'S is not in the pattern → T(S) = m = 6, matched k = 2 → shift = 4' +
            '</p>' +
            '<div class="tracking-widest">' +
                '<p class="opacity-60">T A N S E R</p>' +
                '<p class="pl-16">B A R B E R</p>' +
            '</div>' +
        '</div>' +

        // FRAME 3
        '<div class="glass p-3 rounded border border-white/10">' +
            '<p class="text-xs opacity-70 mb-1">Frame 3: New Comparison Window</p>' +
            '<div class="tracking-widest">' +
                '<p class="opacity-60">T A N S E R</p>' +
                '<p class="pl-16 text-green-400 font-bold">B A R B E R</p>' +
            '</div>' +
            '<p class="text-xs text-green-400 mt-2">Search continues from new position</p>' +
        '</div>' +

    '</div>' +

    '<div class="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs">' +
        '<strong>Key Insight:</strong> We skipped 4 positions without checking them individually. ' +
        'This is where Boyer-Moore gains its power.' +
    '</div>' +
'</div>' +

// =====================================================
// ADVANCED INSIGHT: GOOD SUFFIX ANIMATION + WORST CASE +
// PERFORMANCE INTUITION
// =====================================================
'<div class="space-y-10">' +

    // =================================================
    // GOOD SUFFIX — ANIMATED CASES
    // =================================================
    '<div class="step-card border-l-4 border-emerald-400">' +
        '<span class="step-title">Good Suffix Rule — Animated Cases</span>' +
        '<p class="text-sm mb-6">' +
            'The Good Suffix rule activates <strong>after characters have matched</strong>. ' +
            'Below, we simulate each case as <em>frames</em> so you can see how the pattern moves.' +
        '</p>' +

        '<div class="space-y-6 font-mono text-sm">' +

            // -------------------------------
            // CASE 1
            // -------------------------------
            '<div class="glass p-4 rounded border border-white/10">' +
                '<p class="font-bold text-emerald-300 mb-2">Case 1: Suffix Does NOT Recur</p>' +
                '<p class="text-xs opacity-80 mb-3">' +
                    'The matched suffix appears only once — at the end.' +
                '</p>' +

                '<p class="text-xs mb-1 opacity-70">Frame 1</p>' +
                '<div class="tracking-widest mb-2">' +
                    '<p class="opacity-60">T E X T B A B</p>' +
                    '<p>M A O <span class="text-green-400 font-bold">B A B</span></p>' +
                '</div>' +

                '<p class="text-xs text-yellow-300 mb-1">' +
                    'Matched suffix = "BAB" (k = 3)' +
                '</p>' +

                '<p class="text-xs mb-1 opacity-70">Frame 2: Shift</p>' +
                '<div class="tracking-widest">' +
                    '<p class="opacity-60">T E X T B A B</p>' +
                    '<p class="pl-16">M A O B A B</p>' +
                '</div>' +

                '<p class="text-xs text-green-400 mt-2">' +
                    'Shift = m (entire pattern moves past suffix)' +
                '</p>' +
            '</div>' +

            // -------------------------------
            // CASE 2
            // -------------------------------
            '<div class="glass p-4 rounded border border-white/10">' +
                '<p class="font-bold text-yellow-300 mb-2">Case 2: Suffix DOES Recur</p>' +
                '<p class="text-xs opacity-80 mb-3">' +
                    'The matched suffix appears earlier in the pattern.' +
                '</p>' +

                '<p class="text-xs mb-1 opacity-70">Frame 1</p>' +
                '<div class="tracking-widest mb-2">' +
                    '<p class="opacity-60">O B A B O B A B</p>' +
                    '<p>O <span class="text-yellow-400 font-bold">B A B</span> O <span class="text-green-400 font-bold">B A B</span></p>' +
                '</div>' +

                '<p class="text-xs mb-1 opacity-70">Frame 2: Align Rightmost Occurrence</p>' +
                '<div class="tracking-widest">' +
                    '<p class="opacity-60">O B A B O B A B</p>' +
                    '<p class="pl-8">O B A B O B A B</p>' +
                '</div>' +

                '<p class="text-xs text-yellow-300 mt-2">' +
                    'Shift aligns the two "BAB" suffixes.' +
                '</p>' +
            '</div>' +

            // -------------------------------
            // CASE 3
            // -------------------------------
            '<div class="glass p-4 rounded border border-white/10">' +
                '<p class="font-bold text-red-300 mb-2">Case 3: Prefix Matches Suffix</p>' +
                '<p class="text-xs opacity-80 mb-3">' +
                    'Suffix does not recur fully, but a prefix matches its end.' +
                '</p>' +

                '<p class="text-xs mb-1 opacity-70">Frame 1</p>' +
                '<div class="tracking-widest mb-2">' +
                    '<p class="opacity-60">A B C B A B</p>' +
                    '<p><span class="text-red-400 font-bold">A B</span> C B <span class="text-green-400 font-bold">A B</span></p>' +
                '</div>' +

                '<p class="text-xs mb-1 opacity-70">Frame 2: Shift to Prefix</p>' +
                '<div class="tracking-widest">' +
                    '<p class="opacity-60">A B C B A B</p>' +
                    '<p class="pl-8">A B C B A B</p>' +
                '</div>' +

                '<p class="text-xs text-red-300 mt-2">' +
                    'Shift aligns prefix "AB" with suffix "AB".' +
                '</p>' +
            '</div>' +

        '</div>' +
    '</div>' +

    // =================================================
    // WORST-CASE CONSTRUCTION
    // =================================================
    '<div class="step-card border-l-4 border-red-500">' +
        '<span class="step-title">Worst-Case Construction</span>' +
        '<p class="text-sm mb-4">' +
            'Even smart algorithms can degrade. Let’s see <strong>why</strong>.' +
        '</p>' +

        '<div class="glass p-4 rounded border border-white/10 font-mono text-sm">' +
            '<p class="mb-2 text-red-300">Pattern:</p>' +
            '<p class="mb-4">AAAAAB</p>' +

            '<p class="mb-2 text-red-300">Text:</p>' +
            '<p class="mb-4">AAAAAAAAAAAAAAAA</p>' +

            '<p class="text-xs opacity-80">' +
                'The pattern nearly matches everywhere. ' +
                'Bad symbol shifts are small, and good suffix shifts provide little help.' +
            '</p>' +

            '<p class="mt-3 text-sm text-yellow-300">' +
                'Result: Many comparisons → Worst-case behavior.' +
            '</p>' +
        '</div>' +

        '<div class="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-xs">' +
            '<strong>Important:</strong> Boyer–Moore still guarantees O(n + m), ' +
            'but only with both heuristics correctly implemented.' +
        '</div>' +
    '</div>' +

    // =================================================
    // PERFORMANCE INTUITION (TEXT GRAPH)
    // =================================================
    '<div class="step-card border-l-4 border-indigo-400">' +
        '<span class="step-title">Performance Intuition</span>' +
        '<p class="text-sm mb-4">' +
            'Think of pattern matching cost visually:' +
        '</p>' +

        '<div class="font-mono text-xs space-y-2">' +
            '<p>Naive Search:</p>' +
            '<p class="opacity-70">||||||||||||||||||||||||||||||||||||</p>' +

            '<p>Horspool:</p>' +
            '<p class="opacity-70">|||||   |||||   |||||   |||||</p>' +

            '<p>Boyer–Moore:</p>' +
            '<p class="opacity-70">|        |        |        |</p>' +
        '</div>' +

        '<ul class="mt-4 text-xs space-y-2">' +
            '<li><strong>Naive:</strong> Checks almost every position.</li>' +
            '<li><strong>Horspool:</strong> Skips based on last mismatched char.</li>' +
            '<li><strong>Boyer–Moore:</strong> Skips using BOTH mismatch and matched info.</li>' +
        '</ul>' +

        '<div class="mt-4 p-3 bg-indigo-500/10 border border-indigo-500/30 rounded text-xs">' +
            '<strong>Mental Model:</strong> Boyer–Moore does less work by remembering what it already learned.' +
        '</div>' +
    '</div>' +

'</div>'+


// --- HORSPOOL vs BOYER-MOORE COMPARISON ---
'<div class="step-card border-l-4 border-yellow-400">' +
    '<span class="step-title">Horspool vs Boyer–Moore</span>' +
    '<p class="text-sm mb-4">' +
        'Both algorithms search right-to-left, but Boyer–Moore is strictly more powerful.' +
    '</p>' +

    '<div class="overflow-x-auto">' +
        '<table class="w-full text-xs border border-white/10">' +
            '<thead>' +
                '<tr class="bg-white/5">' +
                    '<th class="p-2 border border-white/10">Feature</th>' +
                    '<th class="p-2 border border-white/10 text-yellow-300">Horspool</th>' +
                    '<th class="p-2 border border-white/10 text-purple-300">Boyer-Moore</th>' +
                '</tr>' +
            '</thead>' +
            '<tbody class="font-mono">' +
                '<tr>' +
                    '<td class="p-2 border">Scan Direction</td>' +
                    '<td class="p-2 border">Right → Left</td>' +
                    '<td class="p-2 border">Right → Left</td>' +
                '</tr>' +
                '<tr>' +
                    '<td class="p-2 border">Bad Symbol Rule</td>' +
                    '<td class="p-2 border">✔ Yes</td>' +
                    '<td class="p-2 border">✔ Yes (Adjusted by k)</td>' +
                '</tr>' +
                '<tr>' +
                    '<td class="p-2 border">Good Suffix Rule</td>' +
                    '<td class="p-2 border text-red-400">✘ No</td>' +
                    '<td class="p-2 border text-green-400">✔ Yes</td>' +
                '</tr>' +
                '<tr>' +
                    '<td class="p-2 border">Shift Choice</td>' +
                    '<td class="p-2 border">Single Rule</td>' +
                    '<td class="p-2 border font-bold">max(Bad, Good)</td>' +
                '</tr>' +
                '<tr>' +
                    '<td class="p-2 border">Worst Case</td>' +
                    '<td class="p-2 border">O(nm)</td>' +
                    '<td class="p-2 border">O(n + m)</td>' +
                '</tr>' +
                '<tr>' +
                    '<td class="p-2 border">Preprocessing</td>' +
                    '<td class="p-2 border">Simple</td>' +
                    '<td class="p-2 border">More Complex</td>' +
                '</tr>' +
            '</tbody>' +
        '</table>' +
    '</div>' +

    '<div class="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs">' +
        '<strong>Exam Tip:</strong> Horspool is a simplification of Boyer-Moore. ' +
        'Boyer-Moore dominates because it can exploit both mismatches AND matched suffixes.' +
    '</div>' +
'</div>' +


            // --- SUMMARY ---
            '<div class="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30 text-center">' +
                '<h4 class="font-bold text-sm text-purple-300 mb-2">Bad Symbol Rule – Key Insight</h4>' +
                '<p class="text-xs font-mono opacity-90">' +
                    'When a mismatch happens, shift the pattern so the mismatched text character ' +
                    'aligns with its LAST occurrence in the pattern — or skip the pattern entirely if it doesn’t exist.' +
                '</p>' +
            '</div>' +

        '</div>',
        


        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">BOYER-MOORE LOGIC</div>' +
                    
                    '<span class="code-label">Pseudocode (The Search Loop)</span>' +
                    '<div class="code-box">' +
                        'Algorithm BoyerMoore(T[0..n-1], P[0..m-1])\n' +
                        '  // Preprocessing\n' +
                        '  badTable <- BuildBadSymbolTable(P)\n' +
                        '  goodTable <- BuildGoodSuffixTable(P)\n' +
                        '  \n' +
                        '  i <- m - 1 // Align end of pattern\n' +
                        '  \n' +
                        '  while i < n do\n' +
                        '    k <- 0 // Number of matched chars\n' +
                        '    // Scan Right-to-Left\n' +
                        '    while k < m AND P[m-1-k] == T[i-k]\n' +
                        '      k++\n' +
                        '    \n' +
                        '    if k == m return (i - m + 1) // Found!\n' +
                        '    \n' +
                        '    // Mismatch Logic\n' +
                        '    charMismatch <- T[i-k]\n' +
                        '    \n' +
                        '    // 1. Bad Symbol Shift\n' +
                        '    d1 <- max(badTable[charMismatch] - k, 1)\n' +
                        '    \n' +
                        '    // 2. Good Suffix Shift\n' +
                        '    d2 <- goodTable[k]\n' +
                        '    \n' +
                        '    // Choose the largest shift\n' +
                        '    i <- i + max(d1, d2)\n' +
                        '  return -1' +
                    '</div>' +

                    '<span class="code-label">Java Implementation (Bad Symbol)</span>' +
                    '<div class="code-box">' +
                        '// Note: Implementing Good Suffix table is complex.\n' +
                        '// This shows the search structure + Bad Symbol heuristic.\n\n' +
                        'public int search(char[] text, char[] pat) {\n' +
                        '    int m = pat.length;\n' +
                        '    int n = text.length;\n' +
                        '    int[] badChar = new int[256];\n' +
                        '\n' +
                        '    // Preprocess: T(c) = m - 1 - index\n' +
                        '    // (Standard Horspool-style preprocessing)\n' +
                        '    for (int i = 0; i < 256; i++) badChar[i] = -1;\n' +
                        '    for (int i = 0; i < m; i++) badChar[pat[i]] = i;\n' +
                        '\n' +
                        '    int s = 0; // Shift\n' +
                        '    while (s <= (n - m)) {\n' +
                        '        int j = m - 1;\n' +
                        '        \n' +
                        '        // Scan Right-to-Left\n' +
                        '        while (j >= 0 && pat[j] == text[s + j])\n' +
                        '            j--;\n' +
                        '\n' +
                        '        if (j < 0) {\n' +
                        '            return s; // Found\n' +
                        '        } else {\n' +
                        '            // k (matches) = m - 1 - j\n' +
                        '            // shift = max(1, j - badChar[text[s+j]])\n' +
                        '            s += Math.max(1, j - badChar[text[s + j]]);\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return -1;\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

}