export const divide = {
// ============================================
    // TOPIC: DIVIDE & CONQUER INTRO (MERGE SORT)
    // ============================================
    'div_intro': {
        title: "Divide & Conquer: Merge Sort",
        notes: 
            '<div class="space-y-6">' +
                // --- STRATEGY ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Divide and Conquer involves three steps: <strong>Divide</strong> the problem into smaller sub-problems, <strong>Conquer</strong> them recursively, and <strong>Combine</strong> the results.' +
                    '</p>' +
                '</div>' +

                // --- RECURRENCE ANALYSIS (FROM NOTES) ---
                '<div class="step-card">' +
                    '<span class="step-title">Recurrence Analysis</span>' +
                    '<p class="text-sm mb-2">The running time satisfies the recurrence:</p>' +
                    '<div class="latex-output text-center">$$C(n) = 2C(n/2) + C_{merge}(n)$$</div>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm font-mono opacity-80">' +
                        '<li><strong>2C(n/2):</strong> Cost of sorting two halves.</li>' +
                        '<li><strong>C_merge(n):</strong> Cost of merging ($n-1$ comparisons).</li>' +
                    '</ul>' +
                    
                    '<div class="bg-black/30 p-3 rounded mt-3 text-sm">' +
                        '<p class="font-bold text-accent mb-1">Applying Master Theorem:</p>' +
                        '<ul class="list-none space-y-1">' +
                            '<li>$a = 2$ (2 subproblems)</li>' +
                            '<li>$b = 2$ (Split size by 2)</li>' +
                            '<li>$d = 1$ (Merge is linear $n^1$)</li>' +
                            '<li class="mt-2 border-t border-white/10 pt-2">Check: $a$ vs $b^d \\implies 2 = 2^1$</li>' +
                            '<li>Conclusion: Case 2 ($a = b^d$)</li>' +
                            '<li class="text-green-400 font-bold mt-1">Efficiency: $\\Theta(n \\log n)$</li>' +
                        '</ul>' +
                    '</div>' +
                    '<p class="text-xs text-red-300 mt-2"><strong>Note:</strong> Requires $\\Theta(n)$ extra space (not in-place).</p>' +
                '</div>' +

                // --- VISUAL TRACE ---
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-sm mb-4 text-center text-accent">Visual Trace: [7, 2, 1, 6, 4]</h4>' +
                    
                    // LEVEL 1: SPLIT
                    '<div class="mb-4 text-center">' +
                        '<p class="text-xs text-blue-300 uppercase font-bold mb-1">1. Divide (Odd length)</p>' +
                        '<div class="flex justify-center gap-4">' +
                            '<div class="p-2 bg-blue-500/20 border border-blue-500 rounded">[7, 2]</div>' +
                            '<div class="p-2 bg-red-500/20 border border-red-500 rounded">[1, 6, 4]</div>' +
                        '</div>' +
                    '</div>' +

                    // LEVEL 2: RECURSIVE SORTS
                    '<div class="mb-4">' +
                        '<p class="text-xs text-yellow-300 uppercase font-bold mb-1 text-center">2. Conquer (Sort Halves)</p>' +
                        '<div class="grid grid-cols-2 gap-4 text-sm">' +
                            // Left Logic
                            '<div class="bg-black/20 p-2 rounded">' +
                                '<p class="text-xs opacity-50 mb-1">Left Side:</p>' +
                                '<p>Split [7], [2]</p>' +
                                '<p>Merge: 2 < 7</p>' +
                                '<p class="text-blue-300 font-bold">Result: [2, 7]</p>' +
                            '</div>' +
                            // Right Logic
                            '<div class="bg-black/20 p-2 rounded">' +
                                '<p class="text-xs opacity-50 mb-1">Right Side:</p>' +
                                '<p>Split [1], [6, 4]</p>' +
                                '<p>Sort [6, 4] -> [4, 6]</p>' +
                                '<p>Merge [1] & [4, 6]</p>' +
                                '<p class="text-red-300 font-bold">Result: [1, 4, 6]</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    // LEVEL 3: FINAL MERGE
                    '<div class="text-center">' +
                        '<p class="text-xs text-green-300 uppercase font-bold mb-1">3. Final Merge</p>' +
                        '<div class="flex flex-col items-center gap-2">' +
                            '<div class="flex gap-2 text-xs opacity-70">' +
                                '<span>L: [2, 7]</span>' +
                                '<span>vs</span>' +
                                '<span>R: [1, 4, 6]</span>' +
                            '</div>' +
                            '<div class="w-full bg-green-500/10 p-3 rounded border border-green-500 font-mono">' +
                                '[ 1, 2, 4, 6, 7 ]' +
                            '</div>' +
                            '<p class="text-xs opacity-60">1<2, then 2<4, then 4<7, then 6<7, then 7 left</p>' +
                        '</div>' +
                    '</div>' +

                '</div>' +
            '</div>',
       
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">MERGE SORT</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm MergeSort(A[0..n-1])\n' +
                        '  if n > 1\n' +
                        '    copy A[0..n/2-1] to B\n' +
                        '    copy A[n/2..n-1] to C\n' +
                        '    MergeSort(B)\n' +
                        '    MergeSort(C)\n' +
                        '    Merge(B, C, A)' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'void mergeSort(int[] a, int n) {\n' +
                        '    if (n < 2) return;\n' +
                        '    int mid = n / 2;\n' +
                        '    int[] l = new int[mid];\n' +
                        '    int[] r = new int[n - mid];\n' +
                        '    \n' +
                        '    // Fill sub-arrays...\n' +
                        '    mergeSort(l, mid);\n' +
                        '    mergeSort(r, n - mid);\n' +
                        '    merge(a, l, r, mid, n - mid);\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Merge Logic</span>' +
                    '<div class="code-box">' +
                        '// Merge step compares heads of B and C\n' +
                        '// and places the smaller one into A.\n' +
                        '// Efficiency of Merge is Theta(n).' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

   // ============================================
    // TOPIC: QUICKSORT
    // ============================================
    'div_quick': {
        title: "QuickSort",
        notes: 
        '<div class="space-y-6">' +
            // --- INTRO ---
            '<div>' +
                '<h3 class="text-xl font-bold text-accent mb-2">Partitioning Strategy</h3>' +
                '<p class="leading-relaxed text-sm md:text-base">' +
                    'Unlike MergeSort which divides by position (index), QuickSort divides by <strong>value</strong> using a Pivot. It partitions the array so that everything smaller than the pivot is on the left, and everything larger is on the right.' +
                '</p>' +
            '</div>' +

            // --- ALGORITHM STEPS ---
            '<div class="step-card">' +
                '<span class="step-title">The Algorithm</span>' +
                '<ol class="list-decimal pl-5 mt-2 space-y-2 text-sm">' +
                    '<li><strong>Select Pivot:</strong> Choose an element (commonly first or last).</li>' +
                    '<li><strong>Partition:</strong> Reorder array so $Elements &lt; Pivot$ are Left, $Elements &gt; Pivot$ are Right.</li>' +
                    '<li><strong>Place Pivot:</strong> Move pivot to its final sorted position.</li>' +
                    '<li><strong>Recurse:</strong> Apply QuickSort to left and right subarrays.</li>' +
                '</ol>' +
            '</div>' +
            // --- EFFICIENCY ---
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Efficiency Analysis</h4>' +
                    '<ul class="space-y-2 text-sm font-mono">' +
                        '<li><strong>Best Case:</strong> $\\Theta(n \\log n)$ <span class="opacity-60">(Pivot splits array in half)</span></li>' +
                        '<li><strong>Worst Case:</strong> $\\Theta(n^2)$ <span class="opacity-60">(Sorted array, Pivot is Min/Max)</span></li>' +
                        '<li><strong>Average Case:</strong> $\\Theta(n \\log n)$</li>' +
                    '</ul>' +
                '</div>' +

            // --- VISUAL TRACE ---
            '<div class="glass p-4 rounded-lg border border-white/10">' +
                '<h4 class="font-bold text-sm mb-4 text-center text-accent">Visual Trace: QuickSort Tree & Swaps</h4>' +
                '<p class="text-xs text-center mb-4 opacity-70">Array: [5, 3, 8, 4, 2, 7, 1, 6]</p>' +

                // ROOT LEVEL
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Root Pivot: 6</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-white/20">5</div>' +
                        '<div class="p-2 border border-white/20">3</div>' +
                        '<div class="p-2 border border-white/20">8</div>' +
                        '<div class="p-2 border border-white/20">4</div>' +
                        '<div class="p-2 border border-white/20">2</div>' +
                        '<div class="p-2 border border-white/20">7</div>' +
                        '<div class="p-2 border border-white/20">1</div>' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">6</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition left &lt;6, right &gt;6 → Left: [5,3,4,2,1] | Pivot:6 | Right: [8,7]</p>' +
                '</div>' +

                // LEFT SUBARRAY
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Left Subarray Pivot: 1</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">1</div>' +
                        '<div class="p-2 border border-white/20">5</div>' +
                        '<div class="p-2 border border-white/20">3</div>' +
                        '<div class="p-2 border border-white/20">4</div>' +
                        '<div class="p-2 border border-white/20">2</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition → Left: [] | Pivot:1 | Right:[5,3,4,2]</p>' +
                '</div>' +

                // RIGHT OF 1
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Right of 1 Pivot: 2</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-white/20">5</div>' +
                        '<div class="p-2 border border-white/20">3</div>' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">2</div>' +
                        '<div class="p-2 border border-white/20">4</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition → Left: [] | Pivot:2 | Right:[5,3,4]</p>' +
                '</div>' +

                // RIGHT OF 2
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Right of 2 Pivot: 4</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-blue-500 text-blue-300 bg-blue-500/10">3</div>' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">4</div>' +
                        '<div class="p-2 border border-red-500 text-red-300 bg-red-500/10">5</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition → Left:[3] | Pivot:4 | Right:[5]</p>' +
                '</div>' +

                // RIGHT SUBARRAY OF ROOT
                '<div class="mb-4">' +
                    '<p class="text-xs text-center font-bold">Right Subarray Pivot: 7</p>' +
                    '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                        '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">7</div>' +
                        '<div class="p-2 border border-white/20">8</div>' +
                    '</div>' +
                    '<p class="text-xs text-center opacity-70 mt-1">Partition → Left: [] | Pivot:7 | Right:[8]</p>' +
                '</div>' +

                // ... inside your ALGO_CONTENT object ...

// RECURSION TREE VISUALIZATION
'<div class="mb-4 glass p-4 rounded-lg">' +
    '<h4 class="font-bold text-sm text-center text-accent mb-2">Recursive Structure (Tree)</h4>' +
    
    '<div class="tree">' +
        '<ul>' +
            '<li>' +
                '<span class="tree-node pivot">6</span>' + // Root
                '<ul>' +
                    // LEFT BRANCH (1)
                    '<li>' +
                        '<span class="tree-node">1</span>' +
                        '<ul>' +
                            '<li><span class="tree-node null">[]</span></li>' + // Left of 1
                            '<li>' +
                                '<span class="tree-node">2</span>' + // Right of 1
                                '<ul>' +
                                    '<li><span class="tree-node null">[]</span></li>' + // Left of 2
                                    '<li>' +
                                        '<span class="tree-node">4</span>' + // Right of 2
                                        '<ul>' +
                                            '<li><span class="tree-node leaf">3</span></li>' + // Left of 4
                                            '<li><span class="tree-node leaf">5</span></li>' + // Right of 4
                                        '</ul>' +
                                    '</li>' +
                                '</ul>' +
                            '</li>' +
                        '</ul>' +
                    '</li>' +
                    
                    // RIGHT BRANCH (7)
                    '<li>' +
                        '<span class="tree-node">7</span>' +
                        '<ul>' +
                            '<li><span class="tree-node null">[]</span></li>' + // Left of 7
                            '<li><span class="tree-node leaf">8</span></li>' + // Right of 7
                        '</ul>' +
                    '</li>' +
                '</ul>' +
            '</li>' +
        '</ul>' +
    '</div>' +
    
    '<p class="text-xs text-center opacity-70 mt-4 bg-black/20 p-2 rounded inline-block w-full">' +
        '<span class="text-yellow-400 font-bold">Traversal Order:</span> 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8' +
    '</p>' +
'</div>' +

                // INTERACTIVE SWAP DYNAMICS
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-sm mb-4 text-center text-accent">Pivot Swap Dynamics</h4>' +

                    '<div class="mb-4">' +
                        '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                            '<div class="p-2 border border-yellow-500 text-yellow-300 font-bold bg-yellow-500/10">Pivot 6</div>' +
                            '<div class="p-2 border border-red-500 text-red-300 bg-red-500/10">8</div>' +
                            '<div class="p-2 border border-blue-500 text-blue-300 bg-blue-500/10">1</div>' +
                        '</div>' +
                        '<p class="text-xs text-center mt-1 opacity-70">During partition, 8 (> pivot) and 1 (&lt; pivot) swap.</p>' +
                    '</div>' +

                    '<div class="mb-4">' +
                        '<div class="flex justify-center gap-1 font-mono text-sm mb-1">' +
                            '<div class="p-2 border border-green-500 text-green-300 font-bold bg-green-500/20">Pivot placed</div>' +
                            '<div class="p-2 border border-white/20">All left smaller</div>' +
                            '<div class="p-2 border border-white/20">All right larger</div>' +
                        '</div>' +
                        '<p class="text-xs text-center mt-1 opacity-70">Pivot is now in its correct position; recursion continues on left & right subarrays.</p>' +
                    '</div>' +
                '</div>' +
                 

            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">QUICKSORT IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">1. Recursive Structure</span>' +
                    '<div class="code-box">' +
                        'void quickSort(int[] arr, int low, int high) {\n' +
                        '    if (low < high) {\n' +
                        '        // 1. Place pivot in correct spot\n' +
                        '        int pi = partition(arr, low, high);\n' +
                        '\n' +
                        '        // 2. Sort Left of pivot\n' +
                        '        quickSort(arr, low, pi - 1);\n' +
                        '\n' +
                        '        // 3. Sort Right of pivot\n' +
                        '        quickSort(arr, pi + 1, high);\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">2. Partitioning (Hoare Logic)</span>' +
                    '<div class="code-box">' +
                        'int partition(int[] arr, int low, int high) {\n' +
                        '    int pivot = arr[low]; // Pivot at start\n' +
                        '    int i = low + 1; \n' +
                        '    int j = high;\n' +
                        '\n' +
                        '    while (i <= j) {\n' +
                        '        // Find element on left > pivot\n' +
                        '        while (i <= high && arr[i] <= pivot) i++;\n' +
                        '        \n' +
                        '        // Find element on right < pivot\n' +
                        '        while (j >= low && arr[j] > pivot) j--;\n' +
                        '        \n' +
                        '        // Swap if pointers haven\'t crossed\n' +
                        '        if (i < j) swap(arr, i, j);\n' +
                        '    }\n' +
                        '    \n' +
                        '    // Place pivot in correct position (j)\n' +
                        '    swap(arr, low, j);\n' +
                        '    return j;\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: STRASSEN'S ALGORITHM
    // ============================================
    'div_strassen': {
        title: "Strassen's Matrix Multiplication",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Problem</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Multiplying two $n \\times n$ matrices traditionally requires 3 nested loops (row, column, sum). This results in a cubic complexity of $\\Theta(n^3)$.' +
                    '</p>' +
                '</div>' +

                // --- NAIVE D&C ---
                '<div class="step-card">' +
                    '<span class="step-title">Naive Divide & Conquer</span>' +
                    '<p class="text-sm">We can divide each matrix into 4 sub-matrices of size $n/2$.</p>' +
                    '<div class="latex-output text-center">$$C = \\begin{pmatrix} A_{11}B_{11} + A_{12}B_{21} & A_{11}B_{12} + A_{12}B_{22} \\\\ A_{21}B_{11} + A_{22}B_{21} & A_{21}B_{12} + A_{22}B_{22} \\end{pmatrix}$$</div>' +
                    '<p class="text-sm mt-2">This requires <strong>8 multiplications</strong> of size $n/2$.</p>' +
                    '<p class="text-sm font-mono opacity-80">Recurrence: $T(n) = 8T(n/2) + n^2 \\implies \\Theta(n^3)$ (No improvement).</p>' +
                '</div>' +

                // --- STRASSEN'S IMPROVEMENT ---
                '<div class="glass p-4 rounded-lg border-l-4 border-green-500">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Strassen\'s Insight</h4>' +
                    '<p class="text-sm">Volker Strassen (1969) discovered a way to compute the product using only <strong>7 recursive multiplications</strong> (instead of 8) by using clever algebraic combinations (additions/subtractions).</p>' +
                '</div>' +

                // --- MASTER THEOREM DERIVATION ---
                '<div>' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Deriving Complexity (Master Theorem)</h4>' +
                    '<p class="text-sm mb-2">The recurrence relation for Strassen is:</p>' +
                    '<div class="latex-output text-center">$$T(n) = 7T(n/2) + \\Theta(n^2)$$</div>' +
                    
                    '<div class="bg-black/30 p-4 rounded-lg mt-3 font-mono text-sm space-y-2">' +
                        '<p>1. Identify parameters:</p>' +
                        '<ul class="list-disc pl-5 opacity-80">' +
                            '<li>$a = 7$ (7 recursive calls)</li>' +
                            '<li>$b = 2$ (Split size by 2)</li>' +
                            '<li>$f(n) = n^2 \\implies d = 2$ (Matrix addition is quadratic)</li>' +
                        '</ul>' +
                        '<p class="mt-2">2. Compare $a$ vs $b^d$:</p>' +
                        '<p class="text-center">$7 \\quad \\text{vs} \\quad 2^2 (=4)$</p>' +
                        '<p class="text-center text-red-300 font-bold">$7 > 4$</p>' +
                        '<p class="mt-2">3. Case 3 Applies (Roots dominate):</p>' +
                        '<p>$$T(n) = \\Theta(n^{\\log_b a}) = \\Theta(n^{\\log_2 7})$$</p>' +
                        '<p>$$\\log_2 7 \\approx 2.807$$</p>' +
                    '</div>' +
                    '<p class="text-sm mt-2 text-center font-bold text-green-400">Final Complexity: $\\Theta(n^{2.81})$</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">STRASSEN ALGORITHM</div>' +
                    
                    '<span class="code-label">Pseudocode Logic</span>' +
                    '<div class="code-box">' +
                        'Algorithm Strassen(A, B)\n' +
                        '  If n is small, use standard O(n^3) multiplication\n' +
                        '  \n' +
                        '  // 1. Calculate 10 helper matrices (Add/Sub)\n' +
                        '  S1 = B12 - B22\n' +
                        '  S2 = A11 + A12\n' +
                        '  ... (up to S10)\n' +
                        '  \n' +
                        '  // 2. Recursive Multiplications (Only 7 calls!)\n' +
                        '  P1 = Strassen(A11, S1)\n' +
                        '  P2 = Strassen(S2, B22)\n' +
                        '  ... (up to P7)\n' +
                        '  \n' +
                        '  // 3. Combine P1..P7 to get C quadrants\n' +
                        '  C11 = P5 + P4 - P2 + P6\n' +
                        '  C12 = P1 + P2\n' +
                        '  C21 = P3 + P4\n' +
                        '  C22 = P5 + P1 - P3 - P7\n' +
                        '  \n' +
                        '  return C' +
                    '</div>' +

                    '<span class="code-label">Analysis Comparison</span>' +
                    '<div class="code-box">' +
                        '// Standard Algo:\n' +
                        '// T(n) = 8T(n/2) + O(n^2) => O(n^3) = O(n^3.00)\n' +
                        '\n' +
                        '// Strassen Algo:\n' +
                        '// T(n) = 7T(n/2) + O(n^2) => O(n^2.81)\n' +
                        '\n' +
                        '// Note: Strassen has a large hidden constant due to \n' +
                        '// the 18 matrix additions. It is only faster for n > ~100.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: GEOMETRIC D&C (CLOSEST PAIR & QUICKHULL)
    // ============================================
    'div_geom': {
        title: "Geometric D&C: Closest Pair & QuickHull",
        notes: 
            '<div class="space-y-8">' +
                
                // --- 1. CLOSEST PAIR COMPARISON ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">1. Closest Pair: The D&C Improvement</h3>' +
                    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">' +
                        '<div class="bg-red-900/20 p-3 rounded border border-red-500/30">' +
                            '<h4 class="font-bold text-red-300 text-sm">Brute Force</h4>' +
                            '<p class="text-xs mt-1">Calculates distance between <strong>EVERY</strong> pair of points.</p>' +
                            '<p class="font-mono text-xs mt-2">Checks: $n(n-1)/2$<br>Complexity: $\\Theta(n^2)$</p>' +
                        '</div>' +
                        '<div class="bg-green-900/20 p-3 rounded border border-green-500/30">' +
                            '<h4 class="font-bold text-green-300 text-sm">Divide & Conquer</h4>' +
                            '<p class="text-xs mt-1">Splits space in half. Only checks points in a narrow <strong>"Straddle Zone"</strong>.</p>' +
                            '<p class="font-mono text-xs mt-2">Recurrence: $2T(n/2) + O(n)$<br>Complexity: $\\Theta(n \\log n)$</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- CLOSEST PAIR VISUAL ---
                '<div class="step-card">' +
                    '<span class="step-title">Visual Trace: D&C Closest Pair</span>' +
                    '<p class="text-sm mb-4">Input: A set of points sorted by X-coordinate.</p>' +
                    
                    // GRAPH CONTAINER
                    '<div class="relative h-48 w-full bg-black/40 rounded-lg border border-white/10 mb-4 overflow-hidden">' +
                        // Left Section
                        '<div class="absolute left-0 top-0 h-full w-1/2 border-r border-dashed border-white/30 flex items-center justify-center">' +
                            '<span class="text-xs text-blue-300 opacity-50 font-bold">Left (dL)</span>' +
                        '</div>' +
                        // Right Section
                        '<div class="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center">' +
                            '<span class="text-xs text-red-300 opacity-50 font-bold">Right (dR)</span>' +
                        '</div>' +
                        // The Strip
                        '<div class="absolute left-1/2 top-0 h-full w-1/6 -translate-x-1/2 bg-yellow-500/10 border-x border-yellow-500/30"></div>' +
                        '<div class="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-yellow-200">Straddle Zone<br>(Width 2d)</div>' +
                        // Points (Simulated)
                        '<div class="absolute left-[20%] top-[40%] w-2 h-2 bg-blue-400 rounded-full"></div>' +
                        '<div class="absolute left-[35%] top-[70%] w-2 h-2 bg-blue-400 rounded-full"></div>' +
                        '<div class="absolute right-[20%] top-[30%] w-2 h-2 bg-red-400 rounded-full"></div>' +
                        '<div class="absolute right-[30%] top-[60%] w-2 h-2 bg-red-400 rounded-full"></div>' +
                        // The Problematic Pair (In Strip)
                        '<div class="absolute left-[48%] top-[50%] w-2 h-2 bg-green-400 rounded-full shadow-[0_0_5px_#4ade80]"></div>' +
                        '<div class="absolute left-[54%] top-[52%] w-2 h-2 bg-green-400 rounded-full shadow-[0_0_5px_#4ade80]"></div>' +
                        '<div class="absolute left-[49%] top-[51%] w-8 h-8 border border-green-500/50 rounded-full"></div>' +
                    '</div>' +

                    '<ul class="list-decimal pl-5 mt-2 space-y-2 text-sm">' +
                        '<li>Find min distance in Left ($d_L$) and Right ($d_R$). Let $d = \\min(d_L, d_R)$.</li>' +
                        '<li><strong>The Trick:</strong> We only need to check points within distance $d$ of the dividing line.</li>' +
                        '<li><strong>The Optimization:</strong> Sort strip points by Y. For each point, we only check the next <strong>7 points</strong>. This keeps the merge step Linear $O(n)$.</li>' +
                    '</ul>' +
                '</div>' +

                // --- 2. CONVEX HULL COMPARISON ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">2. Convex Hull: The Improvement</h3>' +
                    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">' +
                        '<div class="bg-red-900/20 p-3 rounded border border-red-500/30">' +
                            '<h4 class="font-bold text-red-300 text-sm">Brute Force</h4>' +
                            '<p class="text-xs mt-1">For <strong>EVERY</strong> pair, draw a line. Check if all other points lie on one side.</p>' +
                            '<p class="font-mono text-xs mt-2">Pairs: $n^2$<br>Check each: $n$<br>Total: $O(n^3)$</p>' +
                        '</div>' +
                        '<div class="bg-green-900/20 p-3 rounded border border-green-500/30">' +
                            '<h4 class="font-bold text-green-300 text-sm">QuickHull (D&C)</h4>' +
                            '<p class="text-xs mt-1">Finds extreme points and <strong>discards</strong> internal points (inside triangles).</p>' +
                            '<p class="font-mono text-xs mt-2">Avg: $\\Theta(n \\log n)$<br>Worst: $\\Theta(n^2)$</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- QUICKHULL VISUAL ---
                '<div class="step-card">' +
                    '<span class="step-title">Visual Trace: QuickHull</span>' +
                    '<p class="text-sm mb-4">Works like QuickSort: Pick "pivots" (extreme points) and partition.</p>' +
                    
                    '<div class="glass p-4 rounded-lg border border-white/10 text-center">' +
                        '<h4 class="font-bold text-xs text-accent mb-2">The Partitioning</h4>' +
                        '<svg viewBox="0 0 200 120" class="w-full h-40">' +
                            // Triangle
                            '<polygon points="20,80 180,80 100,20" fill="rgba(34, 197, 94, 0.1)" stroke="none" />' +
                            // Base Line
                            '<line x1="20" y1="80" x2="180" y2="80" stroke="#fff" stroke-width="2" />' +
                            '<text x="20" y="95" fill="white" font-size="10">P1 (Min X)</text>' +
                            '<text x="180" y="95" fill="white" font-size="10">P2 (Max X)</text>' +
                            // Height Line
                            '<line x1="100" y1="20" x2="100" y2="80" stroke="#facc15" stroke-dasharray="4" />' +
                            // Pmax
                            '<circle cx="100" cy="20" r="3" fill="#facc15" />' +
                            '<text x="100" y="15" fill="#facc15" font-size="10" text-anchor="middle">Pmax (Furthest)</text>' +
                            // Sides
                            '<line x1="20" y1="80" x2="100" y2="20" stroke="#22c55e" stroke-width="2" />' +
                            '<line x1="180" y1="80" x2="100" y2="20" stroke="#22c55e" stroke-width="2" />' +
                            // Points Inside (Eliminated)
                            '<circle cx="80" cy="70" r="2" fill="#555" />' +
                            '<circle cx="120" cy="60" r="2" fill="#555" />' +
                            '<circle cx="100" cy="50" r="2" fill="#555" />' +
                            '<text x="100" y="60" fill="#777" font-size="8" text-anchor="middle">Ignored</text>' +
                        '</svg>' +
                        '<div class="text-left mt-3 text-sm font-mono space-y-1">' +
                            '<p>1. Find P1 (Min X) and P2 (Max X).</p>' +
                            '<p>2. Find Pmax (furthest from line P1-P2).</p>' +
                            '<p>3. <span class="text-gray-400">Ignore points inside triangle.</span></p>' +
                            '<p>4. Recurse on left of Green Lines.</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- 1. CLOSEST PAIR CODE ---
                '<div>' +
                    '<div class="code-section-title">1. CLOSEST PAIR (Divide & Conquer)</div>' +
                    
                    '<span class="code-label">Pseudocode Logic</span>' +
                    '<div class="code-box">' +
                        'Algorithm ClosestPair(P)\n' +
                        '  if |P| <= 3 return BruteForce(P)\n' +
                        '  \n' +
                        '  Sort P by X-coordinate\n' +
                        '  Mid <- P[n/2]\n' +
                        '  PL <- Points left of Mid\n' +
                        '  PR <- Points right of Mid\n' +
                        '  \n' +
                        '  dL <- ClosestPair(PL)\n' +
                        '  dR <- ClosestPair(PR)\n' +
                        '  d <- min(dL, dR)\n' +
                        '  \n' +
                        '  // The critical linear merge step\n' +
                        '  Strip <- Points within d of Mid\n' +
                        '  Sort Strip by Y-coordinate\n' +
                        '  \n' +
                        '  for i <- 0 to |Strip|-1\n' +
                        '    // Only check next 7 points!\n' +
                        '    for k <- i+1 to i+7\n' +
                        '      d <- min(d, distance(Strip[i], Strip[k]))\n' +
                        '      \n' +
                        '  return d' +
                    '</div>' +
                '</div>' +

                // --- 2. QUICKHULL CODE ---
                '<div>' +
                    '<div class="code-section-title">2. QUICKHULL ALGORITHM</div>' +
                    
                    '<span class="code-label">Brute Force Logic (The Slow Way)</span>' +
                    '<div class="code-box">' +
                        '// Inefficient O(n^3)\n' +
                        'for i <- 0 to n-1\n' +
                        '  for j <- i+1 to n-1\n' +
                        '    Draw Line (Pi, Pj)\n' +
                        '    Check if all other points are on one side\n' +
                        '    If yes -> Add to Hull' +
                    '</div>' +

                    '<span class="code-label">QuickHull Logic (The Fast Way)</span>' +
                    '<div class="code-box">' +
                        'Algorithm QuickHull(S, P1, P2)\n' +
                        '  // S is set of points to the "left" of line P1->P2\n' +
                        '  if S is empty return\n' +
                        '  \n' +
                        '  // 1. Find Furthest Point (O(n))\n' +
                        '  Pmax <- Point in S with max distance to line P1-P2\n' +
                        '  Add Pmax to Hull\n' +
                        '  \n' +
                        '  // 2. Filter Points (Discard internal ones)\n' +
                        '  S1 <- Points left of line P1->Pmax\n' +
                        '  S2 <- Points left of line Pmax->P2\n' +
                        '  \n' +
                        '  // 3. Recurse\n' +
                        '  QuickHull(S1, P1, Pmax)\n' +
                        '  QuickHull(S2, Pmax, P2)' +
                    '</div>' +

                    '<span class="code-label">Complexity Analysis</span>' +
                    '<div class="code-box">' +
                        '// Average Case: T(n) = 2T(n/2) + O(n) => Theta(n log n)\n' +
                        '// Worst Case: T(n) = T(n-1) + O(n) => Theta(n^2)\n' +
                        '// Worst case happens if points form a circle (all are on hull).' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
}