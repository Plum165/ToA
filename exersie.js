/* exercise.js - Interactive Logic */

class NotationExercise {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.score = 0;
        this.currentQuestion = null;
    }

    init() {
        this.generateQuestion();
    }

    generateQuestion() {
        // Randomly choose a complexity type to generate code for
        const types = ['O(1)', 'O(n)', 'O(n^2)', 'O(log n)'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        let codeSnippet = '';
        let explanation = '';

        switch(type) {
            case 'O(1)':
                codeSnippet = `function checkFirst(arr) {\n  if (arr[0] === null) return false;\n  return true;\n}`;
                explanation = "There are no loops depending on n. It executes constant operations.";
                break;
            case 'O(n)':
                codeSnippet = `function findMax(arr) {\n  let max = 0;\n  for(let i=0; i<arr.length; i++) {\n    if(arr[i] > max) max = arr[i];\n  }\n  return max;\n}`;
                explanation = "There is a single loop iterating from 0 to n.";
                break;
            case 'O(n^2)':
                codeSnippet = `function bubble(arr) {\n  let n = arr.length;\n  for(let i=0; i<n; i++) {\n    for(let j=0; j<n; j++) {\n      // compare & swap\n    }\n  }\n}`;
                explanation = "There are two nested loops, each dependent on n. n * n = n².";
                break;
            case 'O(log n)':
                codeSnippet = `function unknown(n) {\n  let i = 1;\n  while(i < n) {\n    i = i * 2;\n    console.log(i);\n  }\n}`;
                explanation = "The loop variable 'i' is multiplied by 2 each time. This cuts the problem space in half, resulting in logarithmic time.";
                break;
        }
         const qTypes = [
        {
            q: "What is the complexity of Brute Force String Matching in the worst case?",
            a: "O(nm)",
            options: ["O(n)", "O(nm)", "O(n^2)", "O(log n)"],
            expl: "We check all 'm' characters of the pattern for every 'n' characters of text."
        },
        {
            q: "How many subsets must be checked for the Knapsack problem (Exhaustive)?",
            a: "2^n",
            options: ["n!", "n^2", "2^n", "n"],
            expl: "Every item can either be IN or OUT. 2 choices for n items = 2^n."
        },
        {
            q: "Which algorithm finds the Convex Hull in O(n^3)?",
            a: "Brute Force",
            options: ["QuickHull", "Brute Force", "Graham Scan", "MergeSort"],
            expl: "Brute force checks every line segment against every other point."
        }
    ];

    const randomQ = qTypes[Math.floor(Math.random() * qTypes.length)];
    
    this.currentQuestion = { type: randomQ.a, explanation: randomQ.expl };
    
    this.container.innerHTML = `
        <div class="flex flex-col gap-4">
            <h4 class="text-lg font-bold text-accent">Quiz</h4>
            <p>${randomQ.q}</p>
            <div class="grid grid-cols-2 gap-2 mt-2">
                ${randomQ.options.map(opt => 
                    `<button onclick="exerciseEngine.checkAnswer('${opt}')" class="btn btn-ghost">${opt}</button>`
                ).join('')}
            </div>
            <div id="feedback-area" class="hidden mt-4 p-3 rounded"></div>
        </div>
    `;
        this.currentQuestion = { type, explanation };
        this.renderUI(codeSnippet);
    }

    renderUI(code) {
        this.container.innerHTML = `
            <div class="flex flex-col gap-4">
                <div class="flex justify-between items-center">
                    <h4 class="text-lg font-bold text-accent">Exercise: Determine the Time Complexity</h4>
                    <span class="text-sm bg-white/10 px-2 py-1 rounded">Score: ${this.score}</span>
                </div>
                
                <div class="latex-output font-mono text-sm whitespace-pre text-green-300">
${code}
                </div>

                <p class="text-sm opacity-80">What is the Big O complexity of the code above?</p>

                <div class="grid grid-cols-2 gap-2 mt-2">
                    <button onclick="exerciseEngine.checkAnswer('O(1)')" class="btn btn-ghost">O(1)</button>
                    <button onclick="exerciseEngine.checkAnswer('O(log n)')" class="btn btn-ghost">O(log n)</button>
                    <button onclick="exerciseEngine.checkAnswer('O(n)')" class="btn btn-ghost">O(n)</button>
                    <button onclick="exerciseEngine.checkAnswer('O(n^2)')" class="btn btn-ghost">O(n²)</button>
                </div>

                <div id="feedback-area" class="hidden mt-4 p-3 rounded"></div>
            </div>
        `;
        
        // Retrigger styling if needed
        if(window.MathJax) MathJax.typeset();
    }

    checkAnswer(userAnswer) {
        const feedback = document.getElementById('feedback-area');
        feedback.classList.remove('hidden');
        
        if (userAnswer === this.currentQuestion.type) {
            this.score++;
            feedback.className = "mt-4 p-3 rounded bg-green-500/20 border border-green-500 text-green-200";
            feedback.innerHTML = `<strong>Correct!</strong> <br> ${this.currentQuestion.explanation} <br><br> <button class="btn btn-primary text-xs" onclick="exerciseEngine.generateQuestion()">Next Question</button>`;
        } else {
            feedback.className = "mt-4 p-3 rounded bg-red-500/20 border border-red-500 text-red-200";
            feedback.innerHTML = `<strong>Incorrect.</strong> The answer is ${this.currentQuestion.type}. <br> ${this.currentQuestion.explanation} <br><br> <button class="btn btn-ghost text-xs" onclick="exerciseEngine.generateQuestion()">Try Another</button>`;
        }
    }
}

class EfficiencyExercise {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.score = 0;
        this.currentQuestion = null;
    }

    init() {
        this.generateQuestion();
    }

    generateQuestion() {
        // Randomly decide between Summation (Loop) or Recurrence (Master Theorem)
        const mode = Math.random() > 0.5 ? 'sum' : 'recurrence';
        
        if (mode === 'sum') {
            this.generateSumQuestion();
        } else {
            this.generateRecurrenceQuestion();
        }
        
    }

    generateSumQuestion() {
        // Generate a loop structure
        const scenarios = [
            { code: "for(i=0; i<n; i++)", complexity: "O(n)", explanation: "Single loop from 0 to n." },
            { code: "for(i=0; i<n; i+=2)", complexity: "O(n)", explanation: "Stepping by 2 still touches n/2 items, which is O(n)." },
            { code: "for(i=0; i<n; i++) {\n  for(j=0; j<n; j++) { ... } \n}", complexity: "O(n^2)", explanation: "Nested loops: n * n operations." },
            { code: "for(i=1; i<n; i=i*2)", complexity: "O(log n)", explanation: "The loop variable doubles each time (1, 2, 4, 8...), reaching n in log steps." }
        ];

        const q = scenarios[Math.floor(Math.random() * scenarios.length)];
        this.currentQuestion = { ...q, type: 'Summation' };
        
        this.renderUI(q.code, ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)']);
    }

    generateRecurrenceQuestion() {
        // Generate T(n) = aT(n/b) + n^d
        // Case 1: a < b^d -> O(n^d)
        // Case 2: a = b^d -> O(n^d log n)
        // Case 3: a > b^d -> O(n^log_b(a))
        
        const scenarios = [
            { text: "T(n) = 2T(n/2) + n", ans: "O(n log n)", exp: "Master Theorem: a=2, b=2, d=1. 2 = 2^1. Case 2." }, // Merge Sort
            { text: "T(n) = 1T(n/2) + 1", ans: "O(log n)", exp: "Binary Search: a=1, b=2, d=0. 1 = 2^0. Case 2." }, // Binary Search
            { text: "T(n) = 4T(n/2) + n", ans: "O(n^2)", exp: "a=4, b=2, d=1. 4 > 2^1. Roots dominate: n^(log2 4) = n^2." },
            { text: "T(n) = 1T(n/2) + n", ans: "O(n)", exp: "a=1, b=2, d=1. 1 < 2^1. Driver dominates: n^1." }
        ];

        const q = scenarios[Math.floor(Math.random() * scenarios.length)];
        this.currentQuestion = { code: q.text, complexity: q.ans, explanation: q.exp, type: 'Recurrence' };

        this.renderUI(q.text, ['O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)']);
    }

    renderUI(problemText, options) {
        this.container.innerHTML = `
            <div class="flex flex-col gap-4">
                <div class="flex justify-between items-center">
                    <h4 class="text-lg font-bold text-accent">Efficiency Analysis: ${this.currentQuestion.type}</h4>
                    <span class="text-sm bg-white/10 px-2 py-1 rounded">Score: ${this.score}</span>
                </div>
                
                <div class="code-box border-l-4 border-blue-500 text-white whitespace-pre text-base">
${problemText}
                </div>

                <p class="text-sm opacity-80">Determine the Time Complexity:</p>

                <div class="grid grid-cols-2 gap-2 mt-2">
                    ${options.map(opt => 
                        `<button onclick="exerciseEngine.checkAnswer('${opt}')" class="btn btn-ghost">${opt}</button>`
                    ).join('')}
                </div>

                <div id="feedback-area" class="hidden mt-4 p-3 rounded"></div>
            </div>
        `;
    }

    checkAnswer(userAnswer) {
        const feedback = document.getElementById('feedback-area');
        feedback.classList.remove('hidden');
        
        if (userAnswer === this.currentQuestion.complexity) {
            this.score++;
            feedback.className = "mt-4 p-3 rounded bg-green-500/20 border border-green-500 text-green-200";
            feedback.innerHTML = `<strong>Correct!</strong> <br> ${this.currentQuestion.explanation} <br><br> <button class="btn btn-primary text-xs" onclick="exerciseEngine.generateQuestion()">Next Question</button>`;
        } else {
            feedback.className = "mt-4 p-3 rounded bg-red-500/20 border border-red-500 text-red-200";
            feedback.innerHTML = `<strong>Incorrect.</strong> The answer is ${this.currentQuestion.complexity}. <br> ${this.currentQuestion.explanation} <br><br> <button class="btn btn-ghost text-xs" onclick="exerciseEngine.generateQuestion()">Try Another</button>`;
        }
    }
}

// Global instance to be accessed by onclick events
let exerciseEngine;

