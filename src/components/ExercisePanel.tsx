import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, Award } from 'lucide-react';
import { QuizQuestion } from '../types';

interface ExercisePanelProps {
  topicId: string;
}

export default function ExercisePanel({ topicId }: ExercisePanelProps) {
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate question bank dynamically based on category/topicId
  const generateQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);

    // Question lists sorted by topic context
    const notationQuestions: QuizQuestion[] = [
      {
        question: 'Determine the time complexity of the following code snippet:',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        answer: 'O(n)',
        explanation: 'The function has a single linear loop executing arr.length times, making it strictly O(n) (Linear) time complexity.',
      },
      {
        question: 'Determine the complexity of the following nested loop block:',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
        answer: 'O(n²)',
        explanation: 'There are two nested loops, each dependent on n. Since the inner loop executes up to n times for each of the outer loop’s n cycles, we perform n * n = n² operations.',
      },
      {
        question: 'What is the Big O complexity of Brute Force String Matching in the worst case?',
        options: ['O(n)', 'O(log n)', 'O(n²)', 'O(nm)'],
        answer: 'O(nm)',
        explanation: 'In the worst case, we compare all m characters of the pattern for each of the n - m + 1 alignments of the text, giving O(nm) complexity.',
      },
      {
        question: 'How many subsets must be checked in an exhaustive search of the 0/1 Knapsack problem?',
        options: ['n!', 'n²', '2ⁿ', 'log n'],
        answer: '2ⁿ',
        explanation: 'Each item can either be included or excluded from the knapsack. With 2 choices per item and n total items, there are 2 * 2 * ... * 2 = 2ⁿ possible subsets.',
      },
      {
        question: 'Which notation represents an asymptotic tight bound on an algorithm\'s running time?',
        options: ['Big O (O)', 'Omega (Ω)', 'Theta (Θ)', 'Little o (o)'],
        answer: 'Theta (Θ)',
        explanation: 'Theta (Θ) represents the tight bound, sandwiching the running time from both above (upper bound) and below (lower bound) with positive constants.',
      }
    ];

    const efficiencyQuestions: QuizQuestion[] = [
      {
        question: 'Solve the recurrence relation using the Master Theorem: T(n) = 2T(n/2) + n',
        options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'],
        answer: 'O(n log n)',
        explanation: 'Here a=2, b=2, d=1. Since a = bᵈ (2 = 2¹ = 2), Case 2 applies. The complexity is Θ(nᵈ log n) = Θ(n log n). This matches MergeSort!',
      },
      {
        question: 'Solve the recurrence relation: T(n) = T(n/2) + 1 (Binary Search)',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        answer: 'O(log n)',
        explanation: 'Here a=1, b=2, d=0. Since a = bᵈ (1 = 2⁰ = 1), Case 2 of the Master Theorem applies, yielding Θ(n⁰ log n) = Θ(log n).',
      },
      {
        question: 'What is the sum value of the linear arithmetic series: ∑_{i=1}^{n} i ?',
        options: ['n', 'n(n+1)/2', 'n(n+1)(2n+1)/6', '2ⁿ - 1'],
        answer: 'n(n+1)/2',
        explanation: 'According to arithmetic progression series rules, the sum is n(n+1)/2, which asymptotically is Θ(n²).',
      },
      {
        question: 'Solve the recurrence relation: T(n) = 4T(n/2) + n',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
        answer: 'O(n²)',
        explanation: 'Here a=4, b=2, d=1. Compare a vs bᵈ: 4 > 2¹ = 2. Since a > bᵈ, Case 3 applies. The complexity is Θ(n^{log_b a}) = Θ(n^{log_2 4}) = Θ(n²).',
      }
    ];

    const algorithmQuestions: QuizQuestion[] = [
      {
        question: 'What is the best-case time complexity of Insertion Sort?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        answer: 'O(n)',
        explanation: 'If the input array is already sorted, the inner loop comparison fails instantly on every step, performing exactly n-1 comparisons, which is linear Θ(n).',
      },
      {
        question: 'What is the average-case time complexity of QuickSort?',
        options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'],
        answer: 'O(n log n)',
        explanation: 'On average, the pivot divides the array nearly in half at each recursion level, yielding the recurrence T(n) = 2T(n/2) + n, which is Θ(n log n).',
      },
      {
        question: 'How many multiplications are performed in Strassen\'s matrix multiplication algorithm?',
        options: ['4 multiplications', '7 multiplications', '8 multiplications', '14 multiplications'],
        answer: '7 multiplications',
        explanation: 'Strassen\'s key contribution was using algebraic manipulation to multiply 2x2 matrices using 7 multiplications instead of the traditional 8, reducing complexity to O(n^{2.81}).',
      },
      {
        question: 'What is the average-case time complexity of Horspool\'s String Matching algorithm?',
        options: ['O(log n)', 'O(n)', 'O(nm)', 'O(m)'],
        answer: 'O(n)',
        explanation: 'In practical natural-language text, mismatches occur early and shift sizes are large, resulting in a highly efficient linear Θ(n) search time.',
      },
      {
        question: 'Why can Dynamic Programming solve the change-making problem optimally when Greedy sometimes fails?',
        options: ['DP uses random coins', 'DP sorts denominations', 'DP solves and tables all sub-problems', 'DP uses fewer comparisons'],
        answer: 'DP solves and tables all sub-problems',
        explanation: 'Greedy makes irrevocable local choices, which fail for non-canonical coin sets. DP solves all sub-amounts bottom-up, proving and caching the absolute optimal path for any set.',
      }
    ];

    // Pick a list based on active topicId prefix/category
    let qList = algorithmQuestions;
    if (topicId === 'big' || topicId === 'omega' || topicId === 'theta' || topicId === 'comp') {
      qList = notationQuestions;
    } else if (topicId === 'sums' || topicId === 'recurrence') {
      qList = efficiencyQuestions;
    }

    const randomIndex = Math.floor(Math.random() * qList.length);
    setCurrentQuestion(qList[randomIndex]);
  };

  useEffect(() => {
    generateQuestion();
  }, [topicId]);

  const handleSubmit = () => {
    if (!selectedOption || !currentQuestion) return;
    setIsSubmitted(true);
    setTotalAnswered((prev) => prev + 1);
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  if (!currentQuestion) return null;

  // Code snippets for specific questions to make the quiz look incredibly premium
  const renderCodeSnippet = () => {
    if (currentQuestion.question.includes('linear loop')) {
      return (
        <pre className="bg-black/30 p-3 rounded font-mono text-xs text-green-400 border border-white/5 mb-3">
{`function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}`}
        </pre>
      );
    }
    if (currentQuestion.question.includes('nested loop block')) {
      return (
        <pre className="bg-black/30 p-3 rounded font-mono text-xs text-green-400 border border-white/5 mb-3">
{`function checkDuplicates(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] === arr[j]) return true;
        }
    }
    return false;
}`}
        </pre>
      );
    }
    return null;
  };

  return (
    <div className="glass p-5 rounded-xl border border-white/5 space-y-5">
      <div className="flex justify-between items-center border-b border-white/5 pb-3">
        <h4 className="font-bold text-base text-accent flex items-center gap-2">
          <Award className="w-4 h-4 text-accent" />
          Interactive Quiz & Practice
        </h4>
        <span className="text-xs bg-white/10 px-2.5 py-1 rounded font-mono font-bold text-accent">
          Score: {score} / {totalAnswered}
        </span>
      </div>

      <div className="space-y-3">
        <p className="text-sm md:text-base font-semibold leading-relaxed">
          {currentQuestion.question}
        </p>

        {renderCodeSnippet()}

        {/* Options */}
        <div className="grid grid-cols-1 gap-2">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOption === opt;
            const isCorrect = opt === currentQuestion.answer;

            let btnClass = 'w-full text-left p-3 rounded-lg border text-sm font-medium transition-all duration-200 flex items-center justify-between ';
            if (isSubmitted) {
              if (isCorrect) {
                btnClass += 'border-green-500/50 bg-green-500/10 text-green-300';
              } else if (isSelected) {
                btnClass += 'border-red-500/50 bg-red-500/10 text-red-300';
              } else {
                btnClass += 'border-white/5 bg-white/5 opacity-50 cursor-not-allowed';
              }
            } else {
              btnClass += isSelected
                ? 'border-accent bg-accent/15 text-accent shadow-[0_0_8px_rgba(56,189,248,0.15)]'
                : 'border-white/5 bg-white/5 hover:border-accent/40 hover:bg-white/10';
            }

            return (
              <button
                key={opt}
                onClick={() => !isSubmitted && setSelectedOption(opt)}
                disabled={isSubmitted}
                className={btnClass}
              >
                <span>{opt}</span>
                {isSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />}
                {isSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanations & Next Button */}
      {isSubmitted && (
        <div className={`p-4 rounded-lg text-xs md:text-sm leading-relaxed border-l-2 ${
          selectedOption === currentQuestion.answer
            ? 'bg-green-500/5 border-green-500 text-green-200'
            : 'bg-red-500/5 border-red-500 text-red-200'
        }`}>
          <div className="font-bold mb-1">
            {selectedOption === currentQuestion.answer ? '✓ Correct Answer!' : '✗ Incorrect Option'}
          </div>
          {currentQuestion.explanation}
        </div>
      )}

      <div className="flex justify-end pt-2">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="btn btn-primary text-xs py-2 px-5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={generateQuestion}
            className="btn btn-primary text-xs py-2 px-5"
          >
            Next Question
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
