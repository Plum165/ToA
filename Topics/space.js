export const space = {
// ============================================
    // TOPIC: SPACE-TIME TRADEOFF INTRO & COUNTING SORT
    // ============================================
    'spa_intro': {
        title: "Space-Time Tradeoff: Counting Sort",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Concept</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'We can reduce the running time of an algorithm by using more memory (space). This is called <strong>Input Enhancement</strong> (preprocessing the input to store info) or <strong>Prestructuring</strong> (hashing, indexing).' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Sorting by Counting</span>' +
                    '<p class="text-sm">Sorts a list of integers falling within a restricted range $[L..U]$ (e.g., numbers 1 to 10).</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li><strong>Frequency Table:</strong> Counts occurrences of each value.</li>' +
                        '<li><strong>Distribution Table:</strong> Accumulates counts to determine the final index positions.</li>' +
                        '<li><strong>Linear Time:</strong> $\\Theta(n)$. Much faster than comparison sorts ($\\{Theta(n \\log n)$), but consumes extra memory.' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">COUNTING SORT</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm CountingSort(A[0..n-1], k)\n' +
                        '  // k is the range of values (0 to k-1)\n' +
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
                        '    int[] count = new int[maxVal + 1];\n' +
                        '    int[] output = new int[arr.length];\n' +
                        '\n' +
                        '    // Frequencies\n' +
                        '    for (int num : arr) count[num]++;\n' +
                        '\n' +
                        '    // Distribution (Prefix Sum)\n' +
                        '    for (int i = 1; i <= maxVal; i++)\n' +
                        '        count[i] += count[i - 1];\n' +
                        '\n' +
                        '    // Placement\n' +
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
                        '// If k is small (~n), this is linear Theta(n).\n' +
                        '// If k is huge (e.g. range 1 to 1 billion), this is terrible.' +
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
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Input Enhancement Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Instead of shifting by 1 on mismatch (Brute Force), we pre-compute a <strong>Shift Table</strong> based on the pattern to shift as far as possible.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">How it works</span>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li>Align pattern with text. Scan from <strong>Right to Left</strong>.</li>' +
                        '<li>If mismatch, look at the character in the <strong>Text</strong> aligned with the <strong>Last</strong> character of pattern.</li>' +
                        '<li>Shift according to the table value for that text character.</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Shift Table Logic</h4>' +
                    '<p class="text-sm">For a pattern of length $m$ and character $c$:</p>' +
                    '<ul class="list-disc pl-5 mt-1 space-y-1 text-sm font-mono opacity-80">' +
                        '<li>If c is not in pattern: Shift = m</li>' +
                        '<li>If c is in pattern: Shift = m - 1 - (rightmost index of c)</li>' +
                        '<li>(Note: We ignore the very last character of the pattern for the calculation)</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">HORSPOOL\'S ALGORITHM</div>' +
                    
                    '<span class="code-label">Example Trace</span>' +
                    '<div class="code-box">' +
                        'Pattern: BARBER (Length m=6)\n' +
                        'Table Construction (excluding last R):\n' +
                        'B: m - 1 - 3 = 2 (index 3 is second B)\n' +
                        'A: m - 1 - 1 = 4\n' +
                        'R: m - 1 - 2 = 3 (index 2 is middle R)\n' +
                        'E: m - 1 - 4 = 1\n' +
                        'Others: 6\n\n' +
                        'Text:    JIM_SAW_ME_IN_A_BARBER_SHOP\n' +
                        'Pattern: BARBER\n' +
                        '1. Match R vs _ (underscore). _ not in pattern. Shift 6.\n' +
                        '2. ... continues shifting by large jumps ...' +
                    '</div>' +

                    '<span class="code-label">Java Implementation (Shift Table)</span>' +
                    '<div class="code-box">' +
                        'int[] shiftTable(String p) {\n' +
                        '    int m = p.length();\n' +
                        '    int[] table = new int[256]; // ASCII\n' +
                        '    \n' +
                        '    // 1. Initialize all to m\n' +
                        '    for (int i = 0; i < 256; i++) table[i] = m;\n' +
                        '    \n' +
                        '    // 2. Update for chars in pattern (except last)\n' +
                        '    for (int j = 0; j < m - 1; j++) {\n' +
                        '        table[p.charAt(j)] = m - 1 - j;\n' +
                        '    }\n' +
                        '    return table;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Java Implementation (Search)</span>' +
                    '<div class="code-box">' +
                        'int horspoolSearch(String t, String p) {\n' +
                        '    int n = t.length(), m = p.length();\n' +
                        '    int[] table = shiftTable(p);\n' +
                        '    int i = m - 1; // Align end of pattern\n' +
                        '    \n' +
                        '    while (i < n) {\n' +
                        '        int k = 0;\n' +
                        '        // Compare right to left\n' +
                        '        while (k < m && p.charAt(m-1-k) == t.charAt(i-k))\n' +
                        '            k++;\n' +
                        '        if (k == m) return i - m + 1; // Match found\n' +
                        '        else i += table[t.charAt(i)]; // Shift\n' +
                        '    }\n' +
                        '    return -1;\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
    // ============================================
    // TOPIC: BOYER-MOORE ALGORITHM
    // ============================================
    'spa_boyer': {
        title: "Boyer-Moore Algorithm",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Advanced String Matching</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Boyer-Moore improves on Horspool by using two heuristics to determine the maximum safe shift. It is the standard for matching in many systems (like grep).' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">1. Bad Symbol Shift</span>' +
                    '<p class="text-sm">Similar to Horspool, but calculation is slightly different. Upon mismatch at index $k$ (from back):</p>' +
                    '<p class="text-sm font-mono bg-black/20 p-2 mt-1 rounded">Shift = max(T[c] - k, 1)</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">2. Good Suffix Shift</span>' +
                    '<p class="text-sm">If we matched a suffix (e.g., "AB") before failing, we can shift to align the next occurrence of "AB" in the pattern.</p>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<p class="text-sm"><strong>Efficiency:</strong> $\\Theta(n/m)$ in best case (skipping large chunks). $\\Theta(nm)$ worst case (rare). Generally faster than Horspool.</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">BOYER-MOORE CONCEPTS</div>' +
                    
                    '<span class="code-label">Bad Symbol vs Horspool</span>' +
                    '<div class="code-box">' +
                        '// Text:    ... T A N S E R ...\n' +
                        '// Pattern:     B A R B E R\n' +
                        '\n' +
                        '// Horspool looks at the character in Text aligned with\n' +
                        '// the END of the pattern (S).\n' +
                        '// Boyer-Moore looks at the character that CAUSED\n' +
                        '// the mismatch (S) and shifts to align S with an S in pattern.\n' +
                        '// Since S is not in BARBER, it shifts past it.' +
                    '</div>' +

                    '<span class="code-label">Java Code (Bad Symbol Heuristic)</span>' +
                    '<div class="code-box">' +
                        '// Simplified Bad Character Heuristic\n' +
                        'int max(int a, int b) { return (a > b) ? a : b; }\n' +
                        '\n' +
                        'void search(char txt[], char pat[]) {\n' +
                        '    int m = pat.length;\n' +
                        '    int n = txt.length;\n' +
                        '    int badChar[] = new int[256];\n' +
                        '\n' +
                        '    // Initialize badChar array like Horspool\n' +
                        '    for (int i = 0; i < 256; i++) badChar[i] = -1;\n' +
                        '    for (int i = 0; i < m; i++) badChar[pat[i]] = i;\n' +
                        '\n' +
                        '    int s = 0;\n' +
                        '    while (s <= (n - m)) {\n' +
                        '        int j = m - 1;\n' +
                        '        while (j >= 0 && pat[j] == txt[s + j])\n' +
                        '            j--;\n' +
                        '        if (j < 0) {\n' +
                        '            System.out.println("Found at: " + s);\n' +
                        '            s += (s + m < n) ? m - badChar[txt[s + m]] : 1;\n' +
                        '        } else {\n' +
                        '            s += max(1, j - badChar[txt[s + j]]);\n' +
                        '        }\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

}