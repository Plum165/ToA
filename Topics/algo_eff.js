export const algorithm_eff = {
// ============================================
    // TOPIC: SUMMATION (SEQUENTIAL EFFICIENCY)
    // ============================================
    'sums': {
        title: "Efficiency: Summation (Sequential)",
        notes: 
            '<div class="space-y-6">' +
                // --- INTRO ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Analyzing Loops</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'For non-recursive algorithms (loops), we measure efficiency by counting the <strong>Basic Operation</strong> using summation. We set up a sum representing how many times the loop body executes.' +
                    '</p>' +
                '</div>' +

                // --- EXPANDED RULES (R1 - R5) ---
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-center text-accent">Essential Math Rules</h4>' +
                    '<ul class="space-y-3 text-sm font-mono">' +
                        '<li><strong>R1 (Constant):</strong> $\\sum_{i=l}^{u} 1 = (u - l + 1)$<br><span class="opacity-60 text-xs">// e.g. sum of 1 from 1 to n is n</span></li>' +
                        '<li><strong>R2 (Linear):</strong> $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} \\approx \\frac{1}{2}n^2$<br><span class="opacity-60 text-xs">// Arithmetic Series (1+2+3...+n)</span></li>' +
                        '<li><strong>R3 (Squares):</strong> $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6} \\approx \\frac{1}{3}n^3$</li>' +
                        '<li><strong>R4 (Geometric):</strong> $\\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$<br><span class="opacity-60 text-xs">// Powers of 2 (1+2+4+8...)</span></li>' +
                        '<li><strong>R5 (Additivity):</strong> $\\sum (ca_i + b_i) = c\\sum a_i + \\sum b_i$<br><span class="opacity-60 text-xs">// You can split sums and pull out constants</span></li>' +
                    '</ul>' +
                '</div>' +

                // --- DETAILED STEP-BY-STEP EXAMPLE ---
                '<div class="step-card">' +
                    '<span class="step-title">Worked Example: Dependent Loops</span>' +
                    '<div class="code-box text-xs mb-2">for i = 0 to n-1 do<br>  for j = 0 to i do<br>    print(j)</div>' +
                    '<p class="text-sm mb-2">The inner loop runs $i+1$ times. The outer loop runs $n$ times.</p>' +
                    '<p class="text-sm"><strong>Step 1:</strong> Set up sum.</p>' +
                    '<div class="latex-output text-center">$$ \\sum_{i=0}^{n-1} (i+1) $$</div>' +
                    '<p class="text-sm"><strong>Step 2:</strong> Split using R5.</p>' +
                    '<div class="latex-output text-center">$$ \\sum_{i=0}^{n-1} i + \\sum_{i=0}^{n-1} 1 $$</div>' +
                    '<p class="text-sm"><strong>Step 3:</strong> Apply R2 and R1.</p>' +
                    '<div class="latex-output text-center">$$ \\frac{(n-1)n}{2} + n = \\frac{n^2 - n + 2n}{2} \\approx \\Theta(n^2) $$</div>' +
                '</div>' +

                // --- 3 EXERCISES ---
                '<div>' +
                    '<h4 class="font-bold text-sm mb-4 text-accent">Practice Exercises</h4>' +
                    
                    // Ex 1
                    '<div class="mb-4 border-b border-white/10 pb-4">' +
                        '<p class="font-bold text-sm text-green-400">Exercise 1: Simple Loop</p>' +
                        '<p class="text-sm font-mono mb-2">for k = 1 to n do: x = x + 5</p>' +
                        '<details class="bg-black/20 p-2 rounded cursor-pointer"><summary class="text-xs text-accent opacity-80 hover:opacity-100">Show Solution</summary>' +
                        '<p class="mt-2 text-sm">$\\sum_{k=1}^{n} 1 = n$. <br><strong>Complexity:</strong> $\\Theta(n)$</p></details>' +
                    '</div>' +

                    // Ex 2
                    '<div class="mb-4 border-b border-white/10 pb-4">' +
                        '<p class="font-bold text-sm text-yellow-400">Exercise 2: Independent Loops</p>' +
                        '<p class="text-sm font-mono mb-2">for i = 1 to n do:<br>  for j = 1 to n do:<br>    x++</p>' +
                        '<details class="bg-black/20 p-2 rounded cursor-pointer"><summary class="text-xs text-accent opacity-80 hover:opacity-100">Show Solution</summary>' +
                        '<p class="mt-2 text-sm">$\\sum_{i=1}^{n} \\sum_{j=1}^{n} 1 = \\sum_{i=1}^{n} n = n \\cdot n = n^2$. <br><strong>Complexity:</strong> $\\Theta(n^2)$</p></details>' +
                    '</div>' +

                    // Ex 3
                    '<div class="mb-4">' +
                        '<p class="font-bold text-sm text-red-400">Exercise 3: "Down to" Loop</p>' +
                        '<p class="text-sm font-mono mb-2">for i = n downto 1 do:<br>  for j = 1 to i do:<br>    x++</p>' +
                        '<details class="bg-black/20 p-2 rounded cursor-pointer"><summary class="text-xs text-accent opacity-80 hover:opacity-100">Show Solution</summary>' +
                        '<p class="mt-2 text-sm">Even though i goes down, the logic is the same. <br>When i=n, inner runs n. When i=1, inner runs 1.<br>Sum is $n + (n-1) + ... + 1 = \\frac{n(n+1)}{2}$. <br><strong>Complexity:</strong> $\\Theta(n^2)$</p></details>' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">MATRIX ADDITION ANALYSIS</div>' +
                    
                    '<span class="code-label">Algorithm Code</span>' +
                    '<div class="code-box">' +
                        '// Adding two n x n matrices\n' +
                        'void addMatrix(int[][] A, int[][] B, int n) {\n' +
                        '    for (int i = 0; i < n; i++) {\n' +
                        '        for (int j = 0; j < n; j++) {\n' +
                        '            C[i][j] = A[i][j] + B[i][j]; // Basic Op\n' +
                        '        }\n' +
                        '    }\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Formal Derivation</span>' +
                    '<div class="code-box">' +
                        '// 1. Setup Summation\n' +
                        '// Outer runs 0 to n-1. Inner runs 0 to n-1.\n' +
                        '// Cost is 1 per inner step.\n' +
                        '// Sum(i=0 to n-1) [ Sum(j=0 to n-1) [ 1 ] ]\n\n' +
                        '// 2. Solve Inner\n' +
                        '// Sum(j=0 to n-1) of 1 = (n-1 - 0 + 1) = n\n\n' +
                        '// 3. Solve Outer\n' +
                        '// Sum(i=0 to n-1) of n\n' +
                        '// = n * (n - 0) = n^2\n\n' +
                        '// Conclusion: Theta(n^2)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },


   // ============================================
    // TOPIC: RECURRENCE RELATIONS & MASTER THEOREM
    // ============================================
    'recurrence': {
        title: "Efficiency: Recurrence Relations",
        notes: 
            '<div class="space-y-6">' +
                // --- PART 1: GENERAL THEORY ---
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Analyzing Recursive Algorithms</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'For recursive algorithms, we cannot just use summation. We use <strong>Recurrence Relations</strong> defined by $T(n)$ in terms of itself with smaller inputs.' +
                    '</p>' +
                '</div>' +
                
                // --- MASTER THEOREM DEFINITION ---
                '<div class="step-card">' +
                    '<span class="step-title">The Master Theorem</span>' +
                    '<p class="text-sm mb-2">Used for Divide & Conquer relations of form: $T(n) = aT(n/b) + f(n)$</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-2 text-sm">' +
                        '<li><strong>$a$:</strong> Number of sub-problems (recursive calls).</li>' +
                        '<li><strong>$b$:</strong> Factor by which problem size splits.</li>' +
                        '<li><strong>$d$:</strong> Driver function power ($f(n) \\in \\Theta(n^d)$).</li>' +
                    '</ul>' +
                    '<div class="mt-4 p-3 bg-white/5 rounded text-sm font-mono">' +
                        '1. If $a < b^d$ : $\\Theta(n^d)$ (Driver dominates)<br>' +
                        '2. If $a = b^d$ : $\\Theta(n^d \\log n)$ (Balanced)<br>' +
                        '3. If $a > b^d$ : $\\Theta(n^{\\log_b a})$ (Roots dominate)' +
                    '</div>' +
                '</div>' +

                // --- PART 2: QUESTION 4 SCENARIO ---
                '<div class="glass p-4 rounded-lg border-l-4 border-yellow-500">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Exam Application (Question 4)</h4>' +
                    '<p class="text-sm"><strong>Scenario:</strong> You write a Divide & Conquer algorithm to sum an array of size $n$.</p>' +
                    '<p class="text-sm mt-2"><strong>The Claim:</strong> A classmate argues this runs in $\\log n$ time because it splits in half like Binary Search.</p>' +
                    '<p class="text-sm mt-2 text-red-300"><strong>Task:</strong> Prove them WRONG by solving the recurrence.</p>' +
                '</div>' +

                // --- STEP 1: DEFINE ---
                '<div>' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Step 1: Define Recurrence</h4>' +
                    '<p class="text-sm leading-relaxed">To sum $n$ elements, we split into 2 halves. We solve recursively ($2 \\times A(n/2)$), then perform 1 addition to combine.</p>' +
                    '<div class="latex-output text-center">$$A(n) = 2A(n/2) + 1$$</div>' +
                '</div>' +

                // --- STEP 2: SOLVE ---
                '<div>' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Step 2: Solve (Master Theorem)</h4>' +
                    '<p class="text-sm mt-2 mb-1">Identify parameters from $A(n) = 2A(n/2) + 1$:</p>' +
                    '<ul class="list-disc pl-5 space-y-1 text-sm font-mono">' +
                        '<li>$a = 2$ (2 calls)</li>' +
                        '<li>$b = 2$ (Size / 2)</li>' +
                        '<li>$f(n) = 1 = n^0 \\implies d = 0$</li>' +
                    '</ul>' +

                    '<p class="text-sm mt-3 mb-1"><strong>Compare $a$ vs $b^d$:</strong></p>' +
                    '<div class="latex-output text-center">$$2 \\quad \\text{vs} \\quad 2^0 (=1)$$</div>' +
                    '<p class="text-sm text-center mt-1">Since $2 > 1$, Case 3 applies (Roots dominate).</p>' +
                '</div>' +

                // --- CONCLUSION ---
                '<div class="glass p-4 rounded-lg border border-red-500/30">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Final Calculation</h4>' +
                    '<div class="latex-output text-center">$$A(n) \\in \\Theta(n^{\\log_b a}) = \\Theta(n^{\\log_2 2}) = \\Theta(n^1) = \\Theta(n)$$</div>' +
                    '<p class="text-sm mt-2"><strong>Conclusion:</strong> The complexity is $\\Theta(n)$ (Linear). The classmate is <strong>WRONG</strong>. Splitting the problem doesn\'t help if you still have to process every single element.</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                // --- EXAMPLE 1 ---
                '<div>' +
                    '<div class="code-section-title">1. FACTORIAL (Linear Recursion)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm F(n)\n' +
                        '  if n == 0 return 1\n' +
                        '  return F(n-1) * n' +
                    '</div>' +

                    '<span class="code-label">Java Code</span>' +
                    '<div class="code-box">' +
                        'int factorial(int n) {\n' +
                        '    if (n == 0) return 1;\n' +
                        '    return factorial(n - 1) * n;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">JavaScript Code (Analysis)</span>' +
                    '<div class="code-box">' +
                        '// Recurrence Relation:\n' +
                        '// M(n) = M(n-1) + 1\n' +
                        '// M(0) = 0\n' +
                        '// By Backward Substitution:\n' +
                        '// M(n) = [M(n-2)+1] + 1 = M(n-2) + 2\n' +
                        '// ... = M(n-k) + k\n' +
                        '// At base case k=n: M(0) + n = n\n' +
                        '// Complexity: Theta(n)' +
                    '</div>' +
                '</div>' +

                // --- EXAMPLE 2 ---
                '<div>' +
                    '<div class="code-section-title">2. MERGE SORT (Divide & Conquer)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm MergeSort(A)\n' +
                        '  if A.size > 1\n' +
                        '    copy A[0..n/2] to B\n' +
                        '    copy A[n/2..n] to C\n' +
                        '    MergeSort(B)\n' +
                        '    MergeSort(C)\n' +
                        '    Merge(B, C, A)' +
                    '</div>' +

                    '<span class="code-label">Java Code</span>' +
                    '<div class="code-box">' +
                        'void mergeSort(int[] arr) {\n' +
                        '    if (arr.length < 2) return;\n' +
                        '    int mid = arr.length / 2;\n' +
                        '    // ... split array logic ...\n' +
                        '    mergeSort(left);\n' +
                        '    mergeSort(right);\n' +
                        '    merge(left, right, arr);\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">JavaScript Code (Analysis)</span>' +
                    '<div class="code-box">' +
                        '// Relation: T(n) = 2T(n/2) + c*n\n' +
                        '// Here: a=2, b=2, d=1 (since merge is linear)\n' +
                        '// Compare a vs b^d:\n' +
                        '// 2 vs 2^1  =>  2 = 2\n' +
                        '// Case 2 of Master Theorem applies.\n' +
                        '// Complexity: Theta(n^d log n) = Theta(n log n)' +
                    '</div>' +
                '</div>' +
            '</div>'
    }
}