export const transform = {
   // ============================================
    // TOPIC: TRANSFORM & CONQUER INTRO
    // ============================================
    'trans_intro': {
        title: "Transform and Conquer: Introduction",
        notes: 
            '<div class="space-y-8">' +
                // --- DEFINITION ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Strategy</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'This strategy works by transforming the problem into a state that is easier to solve, solving the transformed version, and then (if necessary) transforming the solution back.' +
                    '</p>' +
                '</div>' +

                // --- THE DIAGRAM ---
                '<div class="glass p-6 rounded-xl border border-white/10 overflow-x-auto">' +
                    '<h4 class="font-bold text-xs text-center text-accent mb-4 uppercase tracking-widest">Transformation Process</h4>' +
                    
                    '<div class="flex items-center justify-between min-w-[500px] gap-2 text-sm font-bold text-center">' +
                        
                        // Box 1: Input
                        '<div class="w-32 p-3 bg-blue-500/20 border border-blue-500 rounded flex items-center justify-center h-24">' +
                            'Problem\'s<br>Instance' +
                        '</div>' +

                        // Arrow
                        '<div class="text-2xl text-gray-400">⟶</div>' +

                        // Box 2: The Transformation (Central)
                        '<div class="flex-1 p-6 bg-purple-500/20 border border-purple-500 rounded flex flex-col justify-center gap-3 h-64 shadow-lg shadow-purple-500/20">' +
                            '<div class="p-3 bg-black/40 rounded border border-white/5 text-purple-200">Simpler Instance</div>' +
                            '<div class="text-xs text-gray-400 font-mono">-- OR --</div>' +
                            '<div class="p-3 bg-black/40 rounded border border-white/5 text-purple-200">Another Representation</div>' +
                            '<div class="text-xs text-gray-400 font-mono">-- OR --</div>' +
                            '<div class="p-3 bg-black/40 rounded border border-white/5 text-purple-200">Another Problem\'s Instance</div>' +
                        '</div>' +

                        // Arrow
                        '<div class="text-2xl text-gray-400">⟶</div>' +

                        // Box 3: Output
                        '<div class="w-32 p-3 bg-green-500/20 border border-green-500 rounded flex items-center justify-center h-24">' +
                            'Problem\'s<br>Solution' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- 3 VARIATIONS ---
                '<div class="step-card">' +
                    '<span class="step-title">The 3 Major Approaches</span>' +
                    '<div class="space-y-4 mt-2">' +
                        '<div>' +
                            '<strong class="text-accent">1. Instance Simplification</strong>' +
                            '<p class="text-sm opacity-80">Transform into a more convenient instance of the <em>same</em> problem.</p>' +
                            '<ul class="list-disc pl-5 text-xs mt-1 text-gray-300">' +
                                '<li>Pre-sorting (e.g., finding duplicates is easier if sorted).</li>' +
                                '<li>Gaussian Elimination (simplify matrix equations).</li>' +
                            '</ul>' +
                        '</div>' +
                        '<div>' +
                            '<strong class="text-accent">2. Representation Change</strong>' +
                            '<p class="text-sm opacity-80">Transform into a different representation of the <em>same</em> instance.</p>' +
                            '<ul class="list-disc pl-5 text-xs mt-1 text-gray-300">' +
                                '<li>Horner\'s Rule (Polynomials).</li>' +
                                '<li>Binary Exponentiation ($n \\to$ binary bits).</li>' +
                                '<li>Heaps (Array $\\to$ Heap structure).</li>' +
                            '</ul>' +
                        '</div>' +
                        '<div>' +
                            '<strong class="text-accent">3. Problem Reduction</strong>' +
                            '<p class="text-sm opacity-80">Transform into a <em>completely different</em> problem for which we already have an algorithm.</p>' +
                            '<ul class="list-disc pl-5 text-xs mt-1 text-gray-300">' +
                                '<li>LCM $\\to$ GCD.</li>' +
                                '<li>Linear Programming reductions.</li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- STRENGTHS AND WEAKNESSES ---
                '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
                    // Strengths
                    '<div class="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">' +
                        '<h4 class="font-bold text-green-300 mb-2 border-b border-green-500/20 pb-2">Strengths</h4>' +
                        '<ul class="list-disc pl-5 text-sm space-y-2 opacity-90">' +
                            '<li>Allows <strong>powerful data structures</strong> to be applied (e.g., Heaps, AVL Trees).</li>' +
                            '<li>Effective in <strong>Complexity Theory</strong> (reducing hard problems to known solvable ones).</li>' +
                        '</ul>' +
                    '</div>' +
                    
                    // Weaknesses
                    '<div class="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">' +
                        '<h4 class="font-bold text-red-300 mb-2 border-b border-red-500/20 pb-2">Weaknesses</h4>' +
                        '<ul class="list-disc pl-5 text-sm space-y-2 opacity-90">' +
                            '<li>Can be <strong>difficult to derive</strong> the transformation (especially for problem reduction).</li>' +
                            '<li>Overhead of transformation might exceed savings for small inputs.</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">CONCEPTUAL EXAMPLES</div>' +
                    
                    // Example 1
                    '<span class="code-label">1. Instance Simplification (Pre-sorting)</span>' +
                    '<div class="code-box">' +
                        '// Problem: Find if array has unique elements.\n' +
                        '// 1. Transform: Sort the array (O(n log n))\n' +
                        '// 2. Solve: Check neighbors (O(n))\n' +
                        'boolean unique(arr) {\n' +
                        '   sort(arr);\n' +
                        '   for(i=0 to n-2) if arr[i] == arr[i+1] return false;\n' +
                        '   return true;\n' +
                        '}' +
                    '</div>' +

                    // Example 2
                    '<span class="code-label">2. Representation Change (Horner\'s Rule)</span>' +
                    '<div class="code-box">' +
                        '// Problem: Evaluate Polynomial\n' +
                        '// 1. Transform: Change algebra form to nested brackets\n' +
                        '// 2. Solve: Linear scan\n' +
                        'p = (...((a_n*x + a_n-1)*x + ...)*x + a_0' +
                    '</div>' +

                    // Example 3
                    '<span class="code-label">3. Problem Reduction (LCM)</span>' +
                    '<div class="code-box">' +
                        '// Problem: Find LCM(u, v)\n' +
                        '// 1. Transform: Reduce to GCD problem\n' +
                        '// 2. Solve: (u * v) / GCD(u, v)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
// ============================================
    // TOPIC: INSTANCE SIMPLIFICATION (PRE-SORTING)
    // ============================================
    'trans_presort': {
        title: "Instance Simplification: Pre-sorting",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Concept</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Instance Simplification transforms an instance of a problem into a "simpler" or "more convenient" version of the same problem. A classic example is <strong>Pre-sorting</strong>.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Why Sort First?</span>' +
                    '<p class="text-sm">Many problems are harder on unsorted lists ($O(n^2)$) but trivial on sorted lists ($O(n)$ or $O(1)$).</p>' +
                    '<p class="text-sm mt-2"><strong>Total Cost =</strong> Cost to Sort + Cost to Solve</p>' +
                    '<p class="text-sm font-mono mt-1">Total = $O(n \\log n) + O(n) = O(n \\log n)$</p>' +
                    '<p class="text-sm mt-1 text-green-300">This is often better than the $O(n^2)$ Brute Force approach.</p>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-center text-accent">Examples</h4>' +
                    '<ul class="list-disc pl-5 space-y-1 text-sm">' +
                        '<li><strong>Element Uniqueness:</strong> Sort, then check adjacent elements only.</li>' +
                        '<li><strong>Mode (Frequency):</strong> Sort, then longest run of adjacent equal numbers.</li>' +
                        '<li><strong>Finding Median:</strong> Sort, then take $A[n/2]$.</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">ELEMENT UNIQUENESS</div>' +
                    
                    '<span class="code-label">Pseudocode (Pre-sorting)</span>' +
                    '<div class="code-box">' +
                        'Algorithm UniqueElements(A[0..n-1])\n' +
                        '  Sort(A) // Cost: n log n\n' +
                        '  for i <- 0 to n-2 do\n' +
                        '    if A[i] == A[i+1] return false // Cost: n\n' +
                        '  return true' +
                    '</div>' +

                    '<span class="code-label">Comparison vs Brute Force</span>' +
                    '<div class="code-box">' +
                        '// Brute Force:\n' +
                        '// Compare every element with every other element.\n' +
                        '// Complexity: O(n^2)\n\n' +
                        '// Transform & Conquer (Pre-sorting):\n' +
                        '// Sort (n log n) + Linear Scan (n)\n' +
                        '// Complexity: O(n log n)\n' +
                        '// Result: Much faster for large n.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

   // ============================================
    // TOPIC: HORNER'S RULE (REPRESENTATION CHANGE)
    // ============================================
    'trans_horner': {
        title: "Representation Change: Horner's Rule",
        notes: 
            '<div class="space-y-8">' +
                // --- 1. INTRO & WHY ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">1. Why Horner’s Method?</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base mb-2">' +
                        'Naively evaluating a polynomial $2x^3 - 6x^2 + 2x - 1$ requires computing powers ($x^3, x^2$), which is expensive and messy.' +
                    '</p>' +
                    '<ul class="list-disc pl-5 text-sm opacity-90">' +
                        '<li><strong>Naive:</strong> $\\Theta(n^2)$ multiplications.</li>' +
                        '<li><strong>Horner:</strong> Rewrite to nested form. Linear $\\Theta(n)$ time.</li>' +
                    '</ul>' +
                '</div>' +

                // --- 2. REWRITE STEP ---
                '<div class="step-card">' +
                    '<span class="step-title">2. Rewrite (The Key Step)</span>' +
                    '<p class="text-sm mb-2">Factor out $x$ repeatedly from the highest power.</p>' +
                    '<div class="bg-black/30 p-3 rounded text-center font-mono text-sm mb-2">' +
                        '<span class="opacity-50">Original:</span> $2x^3 - 6x^2 + 2x - 1$' +
                    '</div>' +
                    '<div class="bg-green-900/20 border border-green-500/50 p-3 rounded text-center font-mono text-lg text-green-300">' +
                        '$((2x - 6)x + 2)x - 1$' +
                    '</div>' +
                    '<p class="text-xs text-center mt-2 opacity-70">Coefficients: [ 2, -6, 2, -1 ]</p>' +
                '</div>' +

                // --- 3. TRACE TABLE ---
                '<div class="glass p-4 rounded-lg border border-white/10">' +
                    '<h4 class="font-bold text-xs text-center text-accent mb-4 uppercase tracking-widest">3. Trace: P(3)</h4>' +
                    '<table class="w-full text-sm text-left border-collapse">' +
                        '<tr class="border-b border-white/10 text-gray-400"><th>Step</th><th>Current Val</th><th>Operation (x=3)</th></tr>' +
                        '<tr><td class="py-2">Start</td><td class="font-bold">2</td><td class="opacity-50">First Coeff</td></tr>' +
                        '<tr><td class="py-2">1</td><td>$2 \\times 3 = 6$</td><td class="text-yellow-300">Multiply by x</td></tr>' +
                        '<tr><td class="py-2"></td><td>$6 + (-6) = \mathbf{0}$</td><td class="text-green-300">Add next coeff</td></tr>' +
                        '<tr><td class="py-2">2</td><td>$0 \\times 3 = 0$</td><td class="text-yellow-300">Multiply</td></tr>' +
                        '<tr><td class="py-2"></td><td>$0 + 2 = \mathbf{2}$</td><td class="text-green-300">Add next coeff</td></tr>' +
                        '<tr><td class="py-2">3</td><td>$2 \\times 3 = 6$</td><td class="text-yellow-300">Multiply</td></tr>' +
                        '<tr><td class="py-2">End</td><td>$6 + (-1) = \mathbf{5}$</td><td class="text-green-300 font-bold">Result</td></tr>' +
                    '</table>' +
                '</div>' +

                // --- 4. VISUAL FLOW ---
                '<div class="step-card border-l-4 border-blue-500">' +
                    '<span class="step-title">4. Visual Flow (The Waterfall)</span>' +
                    '<div class="flex flex-col items-center gap-1 font-mono text-sm mt-4">' +
                        
                        // Start
                        '<div class="bg-gray-700 px-4 py-2 rounded-full font-bold border border-white/20">2</div>' +
                        
                        // Link
                        '<div class="h-6 w-0.5 bg-gray-500"></div>' +
                        '<div class="text-xs text-yellow-400">x 3</div>' +
                        '<div class="h-6 w-0.5 bg-gray-500"></div>' +
                        
                        // Step 1
                        '<div class="bg-black/40 px-4 py-2 rounded border border-white/10">' +
                            '6 <span class="text-green-400"> + (-6)</span> = 0' +
                        '</div>' +

                        // Link
                        '<div class="h-6 w-0.5 bg-gray-500"></div>' +
                        '<div class="text-xs text-yellow-400">x 3</div>' +
                        '<div class="h-6 w-0.5 bg-gray-500"></div>' +

                        // Step 2
                        '<div class="bg-black/40 px-4 py-2 rounded border border-white/10">' +
                            '0 <span class="text-green-400"> + 2</span> = 2' +
                        '</div>' +

                        // Link
                        '<div class="h-6 w-0.5 bg-gray-500"></div>' +
                        '<div class="text-xs text-yellow-400">x 3</div>' +
                        '<div class="h-6 w-0.5 bg-gray-500"></div>' +

                        // Final
                        '<div class="bg-green-900/30 px-6 py-3 rounded border border-green-500 font-bold text-lg text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]">' +
                            '6 + (-1) = 5' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- 5. EXAM INSIGHT ---
                '<div class="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">' +
                    '<h4 class="font-bold text-sm text-blue-300 mb-2">Exam Insight</h4>' +
                    '<p class="text-sm opacity-90 mb-2">Horner\'s Method is a classic example of:</p>' +
                    '<ul class="list-disc pl-5 text-xs space-y-1 opacity-80">' +
                        '<li><strong>Transformation:</strong> Changing the representation.</li>' +
                        '<li><strong>Simplification:</strong> Reducing powers to multiply-add cycles.</li>' +
                        '<li><strong>Space-Time Tradeoff:</strong> Less computation time.</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">HORNER\'S RULE IMPLEMENTATION</div>' +
                    
                    '<span class="code-label">Pseudocode (Matches the Math)</span>' +
                    '<div class="code-box">' +
                        '// Coefficients A[n] ... A[0]\n' +
                        'result = A[n]  // Start with highest degree coeff\n' +
                        '\n' +
                        'for i = n-1 downto 0 do\n' +
                        '   result = result * x + A[i]\n' +
                        '   \n' +
                        'return result' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'double horner(double[] A, double x) {\n' +
                        '    int n = A.length - 1;\n' +
                        '    double result = A[n];\n' +
                        '    \n' +
                        '    // Start from second coefficient\n' +
                        '    for (int i = n - 1; i >= 0; i--) {\n' +
                        '        result = (result * x) + A[i];\n' +
                        '    }\n' +
                        '    return result;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Complexity Analysis</span>' +
                    '<div class="code-box">' +
                        '// Loop runs n times.\n' +
                        '// Each iteration: 1 Multiply, 1 Add.\n' +
                        '// Total Operations: 2n\n' +
                        '// Complexity: Theta(n)\n' +
                        '// (Compared to Naive which is Theta(n^2))' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: BINARY EXPONENTIATION (HORNER'S METHOD)
    // ============================================
    'trans_expo': {
        title: "Binary Exponentiation (Horner's Method)",
        notes: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Concept</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'To compute $a^n$, we treat the exponent $n$ as a polynomial evaluated at $x=2$ using Horner\'s Rule. This is a <strong>Left-to-Right</strong> approach reducing complexity to $\\Theta(\\log n)$.' +
                    '</p>' +
                '</div>' +

                // --- EXAM EXAMPLE: a^13 ---
                '<div class="step-card border-l-4 border-yellow-500">' +
                    '<span class="step-title">Exam Question: Compute $a^{13}$</span>' +
                    '<p class="text-sm mb-4"><strong>Task:</strong> Use Horner’s algorithm to compute the number of multiplies needed for $a^{13}$. Show all work.</p>' +
                    
                    // 1. BINARY CONVERSION
                    '<div class="mb-4 bg-black/20 p-3 rounded font-mono text-sm">' +
                        '<span class="text-gray-400">// Step 1: Binary Rep (1 Mark)</span><br>' +
                        '13 = 8 + 4 + 1 = <strong class="text-yellow-400">1 1 0 1</strong>' +
                    '</div>' +

                    // 2. THE TABLE
                    '<div class="glass p-4 rounded-lg border border-white/10">' +
                        '<h4 class="font-bold text-xs text-center text-accent mb-3">Horner\'s Trace Table</h4>' +
                        
                        '<div class="grid grid-cols-4 gap-2 text-center text-xs md:text-sm font-mono">' +
                            // Headers
                            '<div class="text-gray-400 border-b border-white/10 pb-1">Bit Sequence</div>' +
                            '<div class="text-gray-400 border-b border-white/10 pb-1">1 (Start)</div>' +
                            '<div class="text-gray-400 border-b border-white/10 pb-1">1</div>' +
                            '<div class="text-gray-400 border-b border-white/10 pb-1">0</div>' +
                            '<div class="text-gray-400 border-b border-white/10 pb-1">1</div>' +

                            // Row 2: Current P
                            '<div class="text-left text-blue-300">Action</div>' +
                            '<div>Init $p=a$</div>' +
                            '<div>Square, Mult</div>' +
                            '<div>Square</div>' +
                            '<div>Square, Mult</div>' +

                            // Row 3: Calculation
                            '<div class="text-left text-gray-400">Value</div>' +
                            '<div>$a$</div>' +
                            '<div>$(a)^2 \\cdot a = a^3$</div>' +
                            '<div>$(a^3)^2 = a^6$</div>' +
                            '<div>$(a^6)^2 \\cdot a = a^{13}$</div>' +

                            // Row 4: Counts
                            '<div class="text-left text-green-400 font-bold">Mult Count</div>' +
                            '<div class="opacity-50">-</div>' +
                            '<div class="bg-red-500/20 rounded font-bold">2</div>' +
                            '<div class="bg-red-500/20 rounded font-bold">1</div>' +
                            '<div class="bg-red-500/20 rounded font-bold">2</div>' +
                        '</div>' +
                    '</div>' +

                    // 3. FINAL TOTAL
                    '<div class="mt-4 bg-green-500/10 border border-green-500/30 p-3 rounded text-center">' +
                        '<p class="text-sm"><strong>Total Multiplications:</strong> 2 + 1 + 2 = <span class="text-xl font-bold text-green-400">5</span></p>' +
                        '<p class="text-xs opacity-70 mt-1">(3 Marks for showing the counts in columns)</p>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">LEFT-TO-RIGHT ALGORITHM</div>' +
                    
                    '<span class="code-label">Pseudocode (Horner\'s Logic)</span>' +
                    '<div class="code-box">' +
                        'Algorithm Power(a, n)\n' +
                        '  // Let b_k ... b_0 be binary bits of n\n' +
                        '  p <- a  // Start with leading 1\n' +
                        '  \n' +
                        '  // Iterate from second bit (k-1) down to 0\n' +
                        '  for i <- k-1 downto 0 do\n' +
                        '    p <- p * p        // SQUARE (Always)\n' +
                        '    if b_i == 1\n' +
                        '      p <- p * a      // MULTIPLY (If bit is 1)\n' +
                        '  return p' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'long power(long a, int n) {\n' +
                        '    // Get binary string (e.g., "1101")\n' +
                        '    String bin = Integer.toBinaryString(n);\n' +
                        '    long p = a;\n' +
                        '    \n' +
                        '    // Start loop from index 1 (skip leading "1")\n' +
                        '    for (int i = 1; i < bin.length(); i++) {\n' +
                        '        p = p * p; // Square\n' +
                        '        if (bin.charAt(i) == \'1\') {\n' +
                        '            p = p * a; // Multiply\n' +
                        '        }\n' +
                        '    }\n' +
                        '    return p;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Efficiency Analysis</span>' +
                    '<div class="code-box">' +
                        '// Loop runs log(n) times (number of bits)\n' +
                        '// Multiplications: \n' +
                        '//   Best Case: log(n) (all zeros)\n' +
                        '//   Worst Case: 2*log(n) (all ones)\n' +
                        '// Complexity: Theta(log n)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
// ============================================
    // TOPIC: PROBLEM REDUCTION
    // ============================================
    'trans_red': {
        title: "Problem Reduction: LCM & State-Space Graphs",
        notes: 
            '<div class="space-y-8">' +
                // --- DEFINITION ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'If a problem $P$ can be transformed into a problem $Q$, solvable by algorithm $A$, then we can solve $P$ by: $P \\to Q \\to A(Q) \\to \\text{Solution}(P)$.' +
                    '</p>' +
                '</div>' +

                // --- 1. ARITHMETIC REDUCTION ---
                '<div class="step-card">' +
                    '<span class="step-title">1. Arithmetic Reductions</span>' +
                    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">' +
                        '<div class="bg-black/20 p-3 rounded border border-white/5">' +
                            '<strong class="text-xs text-blue-300 uppercase">LCM Problem</strong>' +
                            '<p class="text-sm mt-1">Reduce finding Least Common Multiple to GCD.</p>' +
                            '<p class="text-xs font-mono mt-2 bg-black/40 p-1 rounded text-center">LCM(u, v) = (u * v) / GCD(u, v)</p>' +
                        '</div>' +
                        '<div class="bg-black/20 p-3 rounded border border-white/5">' +
                            '<strong class="text-xs text-blue-300 uppercase">Optimization</strong>' +
                            '<p class="text-sm mt-1">Reduce Maximization to Minimization (standard libraries).</p>' +
                            '<p class="text-xs font-mono mt-2 bg-black/40 p-1 rounded text-center">max f(x) = - [ min ( -f(x) ) ]</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                // --- 2. GRAPH REDUCTION (STATE SPACE) ---
                '<div class="step-card border-l-4 border-purple-500">' +
                    '<span class="step-title">2. Reduction to Graph Problems</span>' +
                    '<p class="text-sm mb-4">Many puzzles (River Crossing, 8-Puzzle) can be <strong>reduced</strong> to finding the shortest path in a graph. This is widely used in AI.</p>' +
                    
                    // VISUAL GRAPH DIAGRAM
                    '<div class="glass p-4 rounded-lg border border-white/10 text-center mb-4">' +
                        '<h4 class="font-bold text-xs text-accent mb-2 uppercase tracking-widest">State-Space Graph Representation</h4>' +
                        '<svg viewBox="0 0 400 120" class="w-full h-32">' +
                            '<defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#555" /></marker></defs>' +
                            
                            // Edges (Transitions)
                            '<line x1="50" y1="60" x2="150" y2="30" stroke="#555" stroke-width="2" marker-end="url(#arrow)" />' +
                            '<line x1="50" y1="60" x2="150" y2="90" stroke="#22c55e" stroke-width="2" />' + // Correct path start
                            '<line x1="150" y1="30" x2="250" y2="30" stroke="#555" stroke-width="2" marker-end="url(#arrow)" />' +
                            '<line x1="150" y1="90" x2="250" y2="60" stroke="#22c55e" stroke-width="2" />' + // Correct path mid
                            '<line x1="250" y1="60" x2="350" y2="60" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow)" />' + // Correct path end
                            
                            // Nodes (States)
                            '<circle cx="50" cy="60" r="20" fill="#3b82f6" stroke="white" stroke-width="2" />' +
                            '<text x="50" y="64" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Start</text>' +
                            
                            '<circle cx="150" cy="30" r="15" fill="#334155" />' +
                            '<text x="150" y="34" text-anchor="middle" fill="white" font-size="9">State A</text>' +
                            
                            '<circle cx="150" cy="90" r="15" fill="#334155" stroke="#4ade80" stroke-width="2" />' +
                            '<text x="150" y="94" text-anchor="middle" fill="white" font-size="9">State B</text>' +
                            
                            '<circle cx="250" cy="30" r="15" fill="#334155" />' +
                            '<text x="250" y="34" text-anchor="middle" fill="white" font-size="9">State C</text>' +
                            
                            '<circle cx="250" cy="60" r="15" fill="#334155" stroke="#4ade80" stroke-width="2" />' +
                            '<text x="250" y="64" text-anchor="middle" fill="white" font-size="9">State D</text>' +
                            
                            '<circle cx="350" cy="60" r="20" fill="#ef4444" stroke="white" stroke-width="2" />' +
                            '<text x="350" y="64" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Goal</text>' +
                        '</svg>' +
                        '<div class="flex justify-center gap-4 text-xs mt-2">' +
                            '<span class="flex items-center gap-1"><span class="w-2 h-2 bg-blue-500 rounded-full"></span> Initial State</span>' +
                            '<span class="flex items-center gap-1"><span class="w-2 h-2 bg-gray-600 rounded-full"></span> Intermediate</span>' +
                            '<span class="flex items-center gap-1"><span class="w-2 h-2 bg-red-500 rounded-full"></span> Solved State</span>' +
                        '</div>' +
                    '</div>' +

                    '<ul class="list-disc pl-5 space-y-2 text-sm opacity-90">' +
                        '<li><strong>Vertices:</strong> Represent <em>States</em> (e.g., configuration of a puzzle board).</li>' +
                        '<li><strong>Edges:</strong> Represent <em>Valid Transitions</em> (e.g., sliding a tile, moving a boat).</li>' +
                        '<li><strong>Goal:</strong> Find shortest path from Start to Goal (fewest moves).</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- 1. LCM CODE ---
                '<div>' +
                    '<div class="code-section-title">1. LCM via GCD REDUCTION</div>' +
                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int gcd(int a, int b) {\n' +
                        '    return b == 0 ? a : gcd(b, a % b);\n' +
                        '}\n\n' +
                        'int lcm(int u, int v) {\n' +
                        '    if (u == 0 || v == 0) return 0;\n' +
                        '    // Reduction Step:\n' +
                        '    // Transform LCM problem into GCD problem\n' +
                        '    return (u * v) / gcd(u, v);\n' +
                        '}' +
                    '</div>' +
                '</div>' +

                // --- 2. STATE SPACE SEARCH CODE ---
                '<div>' +
                    '<div class="code-section-title">2. STATE-SPACE SEARCH (BFS)</div>' +
                    '<span class="code-label">Pseudocode Logic</span>' +
                    '<div class="code-box">' +
                        '// BFS finds the shortest path (minimum moves)\n' +
                        'Algorithm SolvePuzzle(InitialState)\n' +
                        '  Queue Q\n' +
                        '  Set Visited\n' +
                        '  \n' +
                        '  Q.enqueue(InitialState)\n' +
                        '  Visited.add(InitialState)\n' +
                        '  \n' +
                        '  while Q is not empty do\n' +
                        '    current <- Q.dequeue()\n' +
                        '    \n' +
                        '    if current == GoalState\n' +
                        '      return ReconstructPath(current)\n' +
                        '      \n' +
                        '    // Explore all valid moves (Transitions)\n' +
                        '    for nextState in GetValidMoves(current) do\n' +
                        '      if nextState not in Visited\n' +
                        '        Visited.add(nextState)\n' +
                        '        Parent[nextState] <- current\n' +
                        '        Q.enqueue(nextState)\n' +
                        '  \n' +
                        '  return "No Solution"' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
}