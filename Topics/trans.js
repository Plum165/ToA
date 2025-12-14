export const transform = {
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
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Evaluating Polynomials</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Problem: Evaluate $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_0$ for a specific $x$.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">The Transformation</span>' +
                    '<p class="text-sm mb-2">Brute force requires $O(n^2)$ multiplications (or $2n$ with an accumulator). Horner\'s rule factorizes the polynomial to use exactly $n$ multiplications and $n$ additions.</p>' +
                    '<div class="latex-output text-center">$$P(x) = (\\dots((a_n x + a_{n-1})x + a_{n-2})x + \\dots)x + a_0$$</div>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Example Trace</h4>' +
                    '<p class="text-sm font-mono">P(x) = 2x^3 - 6x^2 + 2x - 1 for x=3</p>' +
                    '<ul class="list-decimal pl-5 mt-2 space-y-1 text-sm opacity-80">' +
                        '<li>Start with coeff $a_n = 2$</li>' +
                        '<li>$2 \\cdot 3 + (-6) = 0$</li>' +
                        '<li>$0 \\cdot 3 + 2 = 2$</li>' +
                        '<li>$2 \\cdot 3 + (-1) = 5$</li>' +
                        '<li>Result = 5</li>' +
                    '</ul>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">HORNER\'S RULE ALGORITHM</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Horner(P[0..n], x)\n' +
                        '  // P contains coefficients, P[n] is highest degree\n' +
                        '  result <- P[n]\n' +
                        '  for i <- n-1 downto 0 do\n' +
                        '    result <- result * x + P[i]\n' +
                        '  return result' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'double horner(double[] coeffs, double x) {\n' +
                        '    int n = coeffs.length - 1;\n' +
                        '    double res = coeffs[n];\n' +
                        '    // Iterate downwards from second highest term\n' +
                        '    for (int i = n - 1; i >= 0; i--) {\n' +
                        '        res = (res * x) + coeffs[i];\n' +
                        '    }\n' +
                        '    return res;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Efficiency Analysis</span>' +
                    '<div class="code-box">' +
                        '// Number of Multiplications: n\n' +
                        '// Number of Additions: n\n' +
                        '// Complexity: Theta(n)\n' +
                        '// This is theoretically optimal.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: BINARY EXPONENTIATION
    // ============================================
    'trans_expo': {
        title: "Binary Exponentiation",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Computing $a^n$</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'This is an application of Representation Change. We change $n$ into its binary representation to compute the power in logarithmic time.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Left-to-Right (Horner Application)</span>' +
                    '<p class="text-sm">Based on the factorization of the exponent. If binary of $n$ is $b_I \\dots b_0$:</p>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li>Start with the leading 1.</li>' +
                        '<li>For every bit, <strong>Square</strong> the current value.</li>' +
                        '<li>If the bit is 1, also <strong>Multiply</strong> by $a$.</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Right-to-Left (Common)</span>' +
                    '<p class="text-sm">Often easier to code. While $n > 0$, if $n$ is odd, multiply result by current base. Always square the base and halve $n$.</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">BINARY EXPONENTIATION (Right-to-Left)</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm BinaryPower(a, n)\n' +
                        '  res <- 1\n' +
                        '  while n > 0 do\n' +
                        '    if (n mod 2 == 1) // n is odd\n' +
                        '      res <- res * a\n' +
                        '    a <- a * a\n' +
                        '    n <- floor(n / 2)\n' +
                        '  return res' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'long power(long a, long n) {\n' +
                        '    long res = 1;\n' +
                        '    while (n > 0) {\n' +
                        '        if ((n & 1) == 1) res = res * a;\n' +
                        '        a = a * a;\n' +
                        '        n = n >> 1; // Bitwise divide by 2\n' +
                        '    }\n' +
                        '    return res;\n' +
                        '}' +
                    '</div>' +

                    '<span class="code-label">Trace Example: 3^13</span>' +
                    '<div class="code-box">' +
                        '// 13 in binary: 1101\n' +
                        '// n=13 (odd): res = 1*3 = 3, a = 3*3=9\n' +
                        '// n=6 (even): res = 3, a = 9*9=81\n' +
                        '// n=3 (odd):  res = 3*81=243, a = 81^2\n' +
                        '// n=1 (odd):  res = 243*81^2...\n' +
                        '// Complexity: Theta(log n)' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: PROBLEM REDUCTION
    // ============================================
    'trans_red': {
        title: "Problem Reduction: LCM & Optimization",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Definition</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'If a problem $P$ can be transformed into a problem $Q$, solvable by algorithm $A$, then we can solve $P$ by: $P \\to Q \\to A(Q) \\to \\text{Solution}(P)$.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Example: Least Common Multiple (LCM)</span>' +
                    '<p class="text-sm">Calculating the LCM of $u$ and $v$ can be <strong>reduced</strong> to the problem of finding the Greatest Common Divisor (GCD).</p>' +
                    '<p class="text-sm font-mono bg-black/20 p-2 mt-2 rounded text-center">LCM(u, v) = (u * v) / GCD(u, v)</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Example: Maximization to Minimization</span>' +
                    '<p class="text-sm">Standard optimization libraries often only solve minimization. We reduce maximization to minimization by negating the function.</p>' +
                    '<p class="text-sm font-mono bg-black/20 p-2 mt-2 rounded text-center">max f(x) = - [ min ( -f(x) ) ]</p>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">LCM via REDUCTION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm LCM(u, v)\n' +
                        '  // Reduces the problem to GCD\n' +
                        '  g <- EuclidGCD(u, v)\n' +
                        '  return (u * v) / g' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'int gcd(int a, int b) {\n' +
                        '    return b == 0 ? a : gcd(b, a % b);\n' +
                        '}\n\n' +
                        'int lcm(int u, int v) {\n' +
                        '    if (u == 0 || v == 0) return 0;\n' +
                        '    return (u * v) / gcd(u, v);\n' +
                        '}' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

}