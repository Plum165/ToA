export const greedy = {
 // ============================================
    // TOPIC: GREEDY INTRO & CHANGE MAKING
    // ============================================
    'gre_intro': {
        title: "Greedy: Intro & Change Making",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">The Greedy Principle</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'A greedy algorithm constructs a solution through a sequence of steps. At each step, it makes the choice that looks <strong>best at the moment</strong> (locally optimal), hoping this leads to a globally optimal solution.' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Three Characteristics</span>' +
                    '<ul class="list-disc pl-5 mt-2 space-y-1 text-sm">' +
                        '<li><strong>Feasible:</strong> Satisfies problem constraints.</li>' +
                        '<li><strong>Locally Optimal:</strong> Best choice among current options.</li>' +
                        '<li><strong>Irrevocable:</strong> Once made, a choice cannot be changed (no backtracking).</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">Change Making Problem</h4>' +
                    '<p class="text-sm">Give change for amount $n$ using the least number of coins.</p>' +
                    '<p class="text-sm mt-2"><strong>Greedy Strategy:</strong> Repeatedly choose the largest coin denomination $d$ such that $d \\le \\text{remaining amount}$.</p>' +
                    '<div class="warn-box mt-2">' +
                        '<strong>Warning:</strong> Optimal for standard currencies (US, SA), but fails for arbitrary sets (e.g., Coins {1, 3, 4}, Target 6). Greedy gives {4, 1, 1} (3 coins). Optimal is {3, 3} (2 coins).' +
                    '</div>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">GREEDY CHANGE MAKING</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm MakeChange(Coins D[1..m], Amount n)\n' +
                        '  Sort D from largest to smallest\n' +
                        '  Solution S <- empty\n' +
                        '  for i <- 1 to m do\n' +
                        '    while n >= D[i] do\n' +
                        '      n <- n - D[i]\n' +
                        '      S.add(D[i])\n' +
                        '  if n > 0 return "No solution"\n' +
                        '  return S' +
                    '</div>' +

                    '<span class="code-label">Java Implementation</span>' +
                    '<div class="code-box">' +
                        'List<Integer> getChange(int[] denominations, int amount) {\n' +
                        '    // Assume denominations sorted descending\n' +
                        '    List<Integer> result = new ArrayList<>();\n' +
                        '    for (int coin : denominations) {\n' +
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
                        '// Time Efficiency: O(n) in worst case (if we mostly use 1s)\n' +
                        '// or O(m) if we can use modulo division.\n' +
                        '// Note: It is fast, but not always optimal.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },

    // ============================================
    // TOPIC: HUFFMAN CODING
    // ============================================
    'gre_huff': {
        title: "Huffman Coding",
        notes: 
            '<div class="space-y-6">' +
                '<div>' +
                    '<h3 class="text-xl font-bold text-accent mb-2">Variable Length Encoding</h3>' +
                    '<p class="leading-relaxed text-sm md:text-base">' +
                        'Assigns shorter bit patterns to characters that occur more frequently. Used for file compression (ZIP, MP3).' +
                    '</p>' +
                '</div>' +
                '<div class="step-card">' +
                    '<span class="step-title">Prefix-Free Codes</span>' +
                    '<p class="text-sm">No code is a prefix of another (e.g., if A=0, B=01 is invalid because B starts with A). This ensures unambiguous decoding without separators.</p>' +
                '</div>' +
                '<div class="glass p-4 rounded-lg">' +
                    '<h4 class="font-bold text-sm mb-2 text-accent">The Algorithm</h4>' +
                    '<ol class="list-decimal pl-5 space-y-1 text-sm opacity-80">' +
                        '<li>Create leaf nodes for all characters with their frequencies (weights).</li>' +
                        '<li>Put all nodes in a priority queue.</li>' +
                        '<li>While queue size > 1:</li>' +
                        '<ul class="list-disc pl-5">' +
                            '<li>Remove two smallest nodes ($T_1, T_2$).</li>' +
                            '<li>Create new parent with weight $T_1+T_2$.</li>' +
                            '<li>Insert parent back into queue.</li>' +
                        '</ul>' +
                    '</ol>' +
                '</div>' +
            '</div>',
        code: 
            '<div class="space-y-8">' +
                '<div>' +
                    '<div class="code-section-title">HUFFMAN TREE CONSTRUCTION</div>' +
                    
                    '<span class="code-label">Pseudocode</span>' +
                    '<div class="code-box">' +
                        'Algorithm Huffman(C)\n' +
                        '  PQ <- PriorityQueue(C) // Ordered by frequency\n' +
                        '  for i <- 1 to n-1 do\n' +
                        '    z <- AllocateNode()\n' +
                        '    x <- PQ.extractMin()\n' +
                        '    y <- PQ.extractMin()\n' +
                        '    z.left <- x\n' +
                        '    z.right <- y\n' +
                        '    z.freq <- x.freq + y.freq\n' +
                        '    PQ.insert(z)\n' +
                        '  return PQ.extractMin() // Root of tree' +
                    '</div>' +

                    '<span class="code-label">Java Concepts</span>' +
                    '<div class="code-box">' +
                        'PriorityQueue<Node> pq = new PriorityQueue<>();\n' +
                        '// ... fill pq ...\n' +
                        '\n' +
                        'while (pq.size() > 1) {\n' +
                        '    Node left = pq.poll();\n' +
                        '    Node right = pq.poll();\n' +
                        '    \n' +
                        '    // Combine weights\n' +
                        '    Node parent = new Node(left.freq + right.freq);\n' +
                        '    parent.left = left;\n' +
                        '    parent.right = right;\n' +
                        '    \n' +
                        '    pq.add(parent);\n' +
                        '}\n' +
                        '// Tree built. 0 = Left Edge, 1 = Right Edge.' +
                    '</div>' +

                    '<span class="code-label">Analysis</span>' +
                    '<div class="code-box">' +
                        '// Time Efficiency: O(n log n)\n' +
                        '// n: Number of characters\n' +
                        '// Heap operations (insert/extract) take log n.\n' +
                        '// We do this 2n - 2 times.' +
                    '</div>' +
                '</div>' +
            '</div>'
    },
}