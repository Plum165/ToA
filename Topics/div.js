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
    // TOPIC: GEOMETRIC D&C
    // ============================================
    'div_geom': {
        title: "Geometric D&C: Closest Pair & QuickHull",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Closest Pair (D&C)</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Beats Brute Force ($O(n^2)$) by sorting points by X-coordinate and dividing the plane in half.' +
                    '</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Divide points into Left and Right sets by vertical line.</li>' +
                        '<li>Solve recursively: $d = \\min(d_{left}, d_{right})$.</li>' +
                        '<li><strong>Straddle Zone:</strong> Check points within distance $d$ of the line. (Only need to check next 5-7 points sorted by Y).</li>' +
                        '<li><strong>Efficiency:</strong> $\\Theta(n \\log n)$.</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">QuickHull</span>' +
                    '<p class="text-sm">Finds Convex Hull using strategy similar to QuickSort.</p>' +
                    '<ol class="list-decimal pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Find left-most ($P_1$) and right-most ($P_2$) points. Draw line $P_1P_2$.</li>' +
                        '<li>Find point $P_{max}$ furthest from line.</li>' +
                        '<li>Points inside triangle $P_1 P_{max} P_2$ are ignored.</li>' +
                        '<li>Recursively process regions to the left/right of the new lines.</li>' +
                    '</ol>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">QUICKHULL ALGORITHM</div>' +
                    
                    '<span class="code-label">Pseudocode Logic</span>' +
                    '<div class="code-box">' +
                        'Algorithm QuickHull(S, P1, P2)\n' +
                        '  if S is empty return\n' +
                        '  Find Pmax in S furthest from line P1-P2\n' +
                        '  Add Pmax to Hull\n' +
                        '  S1 = points to left of P1-Pmax\n' +
                        '  S2 = points to left of Pmax-P2\n' +
                        '  QuickHull(S1, P1, Pmax)\n' +
                        '  QuickHull(S2, Pmax, P2)' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Average Case: Theta(n log n)\n' +
                        '// Worst Case: Theta(n^2) (if points form a circle)\n' +
                        '// Much faster than Brute Force O(n^3).' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
}