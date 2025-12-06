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

// Global instance to be accessed by onclick events
let exerciseEngine;