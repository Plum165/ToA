import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, Award } from 'lucide-react';
import { QuizQuestion } from '../types';

interface ExercisePanelProps {
  topicId: string;
}

const TOPIC_QUESTIONS: Record<string, QuizQuestion[]> = {
  big: [
    {
      question: 'What does the assertion f(n) ∈ O(g(n)) mathematically represent?',
      options: [
        'An asymptotic tight bound on f(n)',
        'An asymptotic lower bound on f(n)',
        'An asymptotic upper bound on f(n)',
        'The exact running time of f(n) for all n'
      ],
      answer: 'An asymptotic upper bound on f(n)',
      explanation: 'Big O represents the asymptotic upper bound. There exist positive constants c and n₀ such that f(n) ≤ c * g(n) for all n ≥ n₀.'
    },
    {
      question: 'Determine the correct Big O complexity of the polynomial f(n) = 3n² + 5n + 100:',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
      answer: 'O(n²)',
      explanation: 'For any polynomial, the highest-degree term dominates its growth rate as n approaches infinity. Thus, 3n² + 5n + 100 ∈ O(n²).'
    }
  ],
  omega: [
    {
      question: 'What does the assertion f(n) ∈ Ω(g(n)) mathematically represent?',
      options: [
        'An asymptotic lower bound on f(n)',
        'An asymptotic upper bound on f(n)',
        'A tight bound on f(n)',
        'That f(n) grows strictly slower than g(n)'
      ],
      answer: 'An asymptotic lower bound on f(n)',
      explanation: 'Omega (Ω) represents the asymptotic lower bound. There exist positive constants c and n₀ such that f(n) ≥ c * g(n) for all n ≥ n₀.'
    },
    {
      question: 'If an algorithm has a running time of Ω(n log n), this implies:',
      options: [
        'It will run in at most n log n operations for large inputs',
        'It will run in at least some constant multiple of n log n operations in the worst/average case for large inputs',
        'It runs in exactly n log n operations for all inputs',
        'It has an upper bound of O(n)'
      ],
      answer: 'It will run in at least some constant multiple of n log n operations in the worst/average case for large inputs',
      explanation: 'Ω(n log n) represents an asymptotic lower bound, meaning the algorithm requires at least a constant factor times n log n steps for sufficiently large n.'
    }
  ],
  theta: [
    {
      question: 'Under what condition is the relation f(n) ∈ Θ(g(n)) mathematically valid?',
      options: [
        'Only when f(n) ∈ O(g(n))',
        'Only when f(n) ∈ Ω(g(n))',
        'When f(n) ∈ O(g(n)) AND f(n) ∈ Ω(g(n)) simultaneously',
        'When f(n) is strictly smaller than g(n)'
      ],
      answer: 'When f(n) ∈ O(g(n)) AND f(n) ∈ Ω(g(n)) simultaneously',
      explanation: 'Theta (Θ) represents a tight asymptotic bound, which is true if and only if g(n) serves as both an upper bound (O) and lower bound (Ω) with positive constant factors.'
    },
    {
      question: 'Determine the tight asymptotic bound Θ for the function f(n) = 15n + log₂ n:',
      options: ['Θ(log n)', 'Θ(n)', 'Θ(n log n)', 'Θ(1)'],
      answer: 'Θ(n)',
      explanation: 'As n approaches infinity, the linear term 15n grows significantly faster than the logarithmic term log₂ n, making the tight asymptotic bound Θ(n).'
    }
  ],
  comp: [
    {
      question: 'Sort these standard complexity classes in order of increasing rate of growth (slowest to fastest):',
      options: [
        'O(log n) < O(n) < O(n log n) < O(n²)',
        'O(n) < O(log n) < O(n log n) < O(n²)',
        'O(log n) < O(n log n) < O(n) < O(n²)',
        'O(n²) < O(n log n) < O(n) < O(log n)'
      ],
      answer: 'O(log n) < O(n) < O(n log n) < O(n²)',
      explanation: 'Logarithmic growth is slowest, followed by linear, linearithmic (n log n), and quadratic.'
    },
    {
      question: 'Which of the following growth rate functions grows the fastest as n approaches infinity?',
      options: ['O(n³)', 'O(2ⁿ)', 'O(n!)', 'O(100ⁿ)'],
      answer: 'O(n!)',
      explanation: 'Factorial growth (n!) grows much faster than exponential growth (2ⁿ or 100ⁿ) or polynomial growth (n³).'
    }
  ],
  sums: [
    {
      question: 'What is the sum value of the linear arithmetic series ∑_{i=1}^{n} i ?',
      options: ['n', 'n(n+1)/2', 'n(n+1)(2n+1)/6', '2ⁿ - 1'],
      answer: 'n(n+1)/2',
      explanation: 'The sum of the first n integers is given by the formula n(n+1)/2, which asymptotically belongs to Θ(n²).'
    },
    {
      question: 'What is the tight bound asymptotic complexity of a nested loop structure where the outer loop runs n times and the inner loop runs i times?',
      options: ['Θ(n)', 'Θ(n log n)', 'Θ(n²)', 'Θ(n³)'],
      answer: 'Θ(n²)',
      explanation: 'The total operations represent the summation ∑_{i=1}^{n} i = n(n+1)/2, which evaluates to a tight bound of Θ(n²).'
    }
  ],
  recurrence: [
    {
      question: 'Using the Master Theorem, solve the recurrence relation: T(n) = 2T(n/2) + n',
      options: ['Θ(log n)', 'Θ(n)', 'Θ(n log n)', 'Θ(n²)'],
      answer: 'Θ(n log n)',
      explanation: 'Here a=2, b=2, and f(n)=n (so d=1). Since a = bᵈ (2 = 2¹), Case 2 of the Master Theorem applies, yielding Θ(nᵈ log n) = Θ(n log n).'
    },
    {
      question: 'Solve the recurrence relation: T(n) = T(n-1) + n with T(1) = 1:',
      options: ['Θ(n)', 'Θ(n log n)', 'Θ(n²)', 'Θ(2ⁿ)'],
      answer: 'Θ(n²)',
      explanation: 'Expanding the recurrence yields T(n) = n + (n-1) + (n-2) + ... + 1, which sums to n(n+1)/2. This gives a tight bound of Θ(n²).'
    }
  ],
  brute_intro: [
    {
      question: 'What is the key characteristic of a Brute Force approach to solving problems?',
      options: [
        'It works by dividing problems into smaller subproblems recursively',
        'It solves a problem in a direct, straightforward manner based on problem definitions',
        'It always requires a memoization table to cache intermediate states',
        'It selects the locally optimal choice at every decision point'
      ],
      answer: 'It solves a problem in a direct, straightforward manner based on problem definitions',
      explanation: 'Brute force directly implements the problem constraints and definitions in the most intuitive, direct manner without sophisticated optimization shortcuts.'
    },
    {
      question: 'In the brute-force closest-pair algorithm, what is the complexity of checking all pairs of n points in a plane?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
      answer: 'O(n²)',
      explanation: 'To check all pairs, we evaluate n(n-1)/2 unique combinations. This results in an asymptotic complexity of O(n²).'
    }
  ],
  bf_string: [
    {
      question: 'What is the worst-case time complexity of Brute Force String Matching with text of length n and pattern of length m?',
      options: ['O(n)', 'O(m)', 'O(n + m)', 'O(nm)'],
      answer: 'O(nm)',
      explanation: 'In the worst case (e.g., matching "AAAAAA" and "AAAB"), we perform m comparisons for almost every one of the n-m+1 positions, leading to O(nm) complexity.'
    },
    {
      question: 'What is the best-case time complexity of brute-force string matching on a mismatch on the first character?',
      options: ['O(n)', 'O(m)', 'O(nm)', 'O(1)'],
      answer: 'O(n)',
      explanation: 'If the first character of the pattern always mismatches immediately, the algorithm performs exactly 1 comparison per shift, shifting n-m+1 times, yielding linear Θ(n) complexity.'
    }
  ],
  bf_geom: [
    {
      question: 'In brute-force convex hull (extreme points), how do we determine if a line segment between points Pi and Pj forms a boundary of the hull?',
      options: [
        'We check if Pi and Pj are the closest points',
        'We check if all other points lie on the same side of the line containing Pi and Pj',
        'We check if the distance between Pi and Pj is maximized',
        'We check if the line segment passes through the origin'
      ],
      answer: 'We check if all other points lie on the same side of the line containing Pi and Pj',
      explanation: 'A line segment connects two extreme points of a convex hull if and only if all other points of the set lie on the same side of the infinite straight line passing through those two points.'
    },
    {
      question: 'What is the time complexity of the brute-force convex hull algorithm for n points?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
      answer: 'O(n³)',
      explanation: 'There are O(n²) pairs of points. For each pair, we check the other n-2 points to see if they lie on the same side of the line, giving O(n³) total operations.'
    }
  ],
  bf_exhaust: [
    {
      question: 'Which of the following optimization problems is typically solved by Exhaustive Search checking all permutations?',
      options: ['Binary Search', 'Traveling Salesman Problem (TSP)', 'Merge Sort', 'Fibonacci sequence'],
      answer: 'Traveling Salesman Problem (TSP)',
      explanation: 'TSP requires finding the shortest path visiting n cities exactly once. Exhaustive search evaluates all (n-1)! permutations of tours to find the absolute minimum.'
    },
    {
      question: 'What is the complexity of exhaustive search for the Knapsack problem with n items?',
      options: ['O(n)', 'O(n log n)', 'O(2ⁿ)', 'O(n!)'],
      answer: 'O(2ⁿ)',
      explanation: 'For the knapsack problem, each item can either be included or excluded from the knapsack. With 2 choices per item, there are 2ⁿ subsets to check, giving a complexity of O(2ⁿ).'
    }
  ],
  dec_intro: [
    {
      question: 'What is the fundamental mechanism of the Decrease-and-Conquer strategy?',
      options: [
        'Splitting the problem into multiple equal-sized subproblems',
        'Reducing a problem instance of size n to a smaller instance of the same problem',
        'Mapping the problem onto a different representation domain',
        'Iteratively taking the local maximum of a reward function'
      ],
      answer: 'Reducing a problem instance of size n to a smaller instance of the same problem',
      explanation: 'Decrease-and-Conquer reduces the size of a problem instance to a smaller sub-instance (e.g., size n-1, n/2, or variable), solves the sub-instance, and extends the solution.'
    },
    {
      question: 'What is the worst-case time complexity of Insertion Sort?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
      answer: 'O(n²)',
      explanation: 'In the worst case (reverse sorted array), each element i must be compared with all i-1 preceding elements, resulting in a sum of 1 + 2 + ... + n-1 ≈ n²/2 comparisons, which is O(n²).'
    }
  ],
  dec_topo: [
    {
      question: 'Topological sorting is a linear ordering of vertices possible only for which graph type?',
      options: [
        'Undirected Graphs',
        'Directed Acyclic Graphs (DAGs)',
        'Complete Bipartite Graphs',
        'Graphs containing directed cycles'
      ],
      answer: 'Directed Acyclic Graphs (DAGs)',
      explanation: 'Topological sorting requires ordering vertices such that for every directed edge u → v, u comes before v. This is impossible if the graph has cycles, hence the graph must be a DAG.'
    },
    {
      question: 'Using DFS to perform topological sort, how are vertices recorded into the final order?',
      options: [
        'In order of when they are first discovered (pre-order)',
        'In reverse order of when they become dead-ends / are finished (post-order)',
        'By sorting vertices by their indegrees',
        'By scanning levels starting from the root'
      ],
      answer: 'In reverse order of when they become dead-ends / are finished (post-order)',
      explanation: 'Running DFS and recording the vertices as they finish (become dead-ends with no unvisited descendants), then reversing that list, yields a valid topological sort.'
    }
  ],
  dec_perm: [
    {
      question: 'In the Johnson-Trotter permutation algorithm, how is a mobile element defined?',
      options: [
        'An element whose arrow points to an adjacent larger element',
        'An element whose arrow points to an adjacent smaller element',
        'The largest element in the array',
        'The element at index 0'
      ],
      answer: 'An element whose arrow points to an adjacent smaller element',
      explanation: 'An integer k is mobile in Johnson-Trotter if its directed arrow points to an adjacent smaller element.'
    },
    {
      question: 'How many permutations of n unique elements exist?',
      options: ['2ⁿ', 'n²', 'n!', 'n log n'],
      answer: 'n!',
      explanation: 'There are n! (n factorial) possible unique arrangements of n distinct elements.'
    }
  ],
  dec_factor: [
    {
      question: 'Which of the following is the best example of a decrease-by-a-constant-factor algorithm?',
      options: ['Insertion Sort', 'Depth-First Search', 'Binary Search', 'Bubble Sort'],
      answer: 'Binary Search',
      explanation: 'Binary Search reduces the size of the search space by a constant factor of 1/2 on every step, yielding logarithmic O(log n) time.'
    },
    {
      question: 'How many comparisons are performed in Binary Search in the worst case for an array of size n?',
      options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
      answer: 'O(log n)',
      explanation: 'Since the array size is halved repeatedly, the number of steps is bounded by log₂ n, making the worst-case complexity O(log n).'
    }
  ],
  dec_var: [
    {
      question: 'Euclid\'s Greatest Common Divisor (GCD) algorithm is classified as which strategy?',
      options: [
        'Decrease by a constant amount (n-1)',
        'Decrease by a constant factor (n/2)',
        'Variable-size-decrease',
        'Divide and conquer'
      ],
      answer: 'Variable-size-decrease',
      explanation: 'Euclid\'s algorithm uses gcd(m, n) = gcd(n, m mod n). The decrease in argument sizes varies on each step depending on the remainders, making it a variable-size-decrease.'
    },
    {
      question: 'What is the average-case time complexity of Euclid\'s algorithm?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      answer: 'O(log n)',
      explanation: 'Though the reduction size varies, it decreases rapidly. In the worst case (adjacent Fibonacci numbers), the number of steps is proportional to the number of digits in the smaller number, giving O(log n).'
    }
  ],
  dec_kth: [
    {
      question: 'What is the average-case time complexity of the QuickSelect algorithm for finding the k-th smallest element in an array of size n?',
      options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'],
      answer: 'O(n)',
      explanation: 'On average, partitioning takes linear O(n) time and divides the problem in half. Since we only recurse into one half, the recurrence is T(n) = T(n/2) + O(n), which solves to Θ(n).'
    },
    {
      question: 'What is the worst-case time complexity of QuickSelect?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
      answer: 'O(n²)',
      explanation: 'In the worst case (e.g. highly unbalanced partitions), QuickSelect repeatedly partitions arrays of size n, n-1, n-2, resulting in a total of Θ(n²) comparisons.'
    }
  ],
  div_intro: [
    {
      question: 'What is the time complexity of the merge step in Merge Sort for two sorted subarrays of total size n?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      answer: 'O(n)',
      explanation: 'Merging two pre-sorted subarrays of size n/2 into a single sorted array of size n requires a single linear pass comparing pointers, which takes O(n) time.'
    },
    {
      question: 'Merge Sort uses which algorithmic design paradigm?',
      options: ['Decrease and Conquer', 'Divide and Conquer', 'Dynamic Programming', 'Transform and Conquer'],
      answer: 'Divide and Conquer',
      explanation: 'Merge Sort divides the array in half, conquers each half recursively, and merges the sorted halves back together.'
    }
  ],
  div_quick: [
    {
      question: 'What is the worst-case input configuration for QuickSort when using the first element as the pivot?',
      options: [
        'An array of randomly distributed elements',
        'An array that is already sorted or reverse sorted',
        'An array with unique floating-point numbers',
        'An array of size less than 10'
      ],
      answer: 'An array that is already sorted or reverse sorted',
      explanation: 'When the array is sorted, choosing the first element as pivot yields highly unbalanced partitions (one of size 0 and one of size n-1), leading to O(n²) worst-case complexity.'
    },
    {
      question: 'What is the average-case time complexity of QuickSort?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
      answer: 'O(n log n)',
      explanation: 'On average, the pivot divides the array nearly in half at each level of recursion, leading to the recurrence T(n) = 2T(n/2) + O(n), which solves to Θ(n log n).'
    }
  ],
  div_geom: [
    {
      question: 'In the Divide-and-Conquer Closest Pair algorithm, why do we sort points by Y coordinate in the combining phase?',
      options: [
        'To split the plane vertically',
        'To limit the number of comparisons in the vertical strip to a constant (at most 7 points)',
        'To compute the convex hull boundary',
        'To run in O(log n) time'
      ],
      answer: 'To limit the number of comparisons in the vertical strip to a constant (at most 7 points)',
      explanation: 'Within the vertical strip of width 2d around the dividing line, sorting points by Y coordinate ensures we only need to compare each point with at most 7 succeeding points to find closer pairs, maintaining O(n log n).'
    },
    {
      question: 'What is the time complexity of the Divide-and-Conquer Closest Pair algorithm for n points?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
      answer: 'O(n log n)',
      explanation: 'The plane is split into two halves (2T(n/2)) and points are merged in linear O(n) time after sorting, giving the recurrence T(n) = 2T(n/2) + O(n), which is O(n log n).'
    }
  ],
  div_strassen: [
    {
      question: 'What is the asymptotic time complexity of Strassen\'s matrix multiplication algorithm?',
      options: ['O(n³)', 'O(n^{2.81})', 'O(n² log n)', 'O(n²)'],
      answer: 'O(n^{2.81})',
      explanation: 'Strassen\'s recurrence relation is T(n) = 7T(n/2) + O(n²). Using the Master Theorem, this solves to Θ(n^{log_2 7}) ≈ O(n^{2.81}).'
    },
    {
      question: 'How many recursive multiplications of block matrices does Strassen\'s algorithm perform compared to standard multiplication?',
      options: ['7 multiplications instead of 8', '8 multiplications instead of 7', '4 multiplications instead of 8', '14 multiplications instead of 16'],
      answer: '7 multiplications instead of 8',
      explanation: 'By using algebraic combinations of submatrices, Strassen reduces the number of multiplications from 8 to 7, achieving a sub-cubic time complexity.'
    }
  ],
  trans_intro: [
    {
      question: 'What is the core principle of the Transform-and-Conquer design paradigm?',
      options: [
        'Dividing a problem into smaller identical instances',
        'Transforming the problem into a simpler or more convenient form before solving',
        'Using dynamic programming tables to save intermediate results',
        'Evaluating random subsets of the solution space'
      ],
      answer: 'Transforming the problem into a simpler or more convenient form before solving',
      explanation: 'Transform-and-Conquer operates in two stages: first, transform the problem instance into a form that is easier to solve, and then solve/conquer it.'
    },
    {
      question: 'Which of the following is NOT a type of transformation used in Transform-and-Conquer?',
      options: [
        'Instance simplification (e.g. sorting)',
        'Representation change (e.g. Binary Search Trees, Heaps)',
        'Problem reduction (e.g. mapping to a different problem)',
        'Divide-and-Conquer recursive splits'
      ],
      answer: 'Divide-and-Conquer recursive splits',
      explanation: 'Divide-and-Conquer recursively splits the problem, whereas Transform-and-Conquer simplifies instances, changes representations, or reduces problems.'
    }
  ],
  trans_presort: [
    {
      question: 'How does pre-sorting simplify the problem of finding duplicates in an array?',
      options: [
        'Duplicates must be adjacent in a sorted array, reducing lookup to O(n) after sorting',
        'It removes duplicates automatically',
        'It allows binary search to find duplicates',
        'It reduces the array size'
      ],
      answer: 'Duplicates must be adjacent in a sorted array, reducing lookup to O(n) after sorting',
      explanation: 'Once sorted in O(n log n), any duplicate elements must lie next to each other. We can find them in a single linear pass of O(n) comparisons, giving a total of O(n log n).'
    },
    {
      question: 'What is the total time complexity of finding the mode (most frequent element) of an array of size n using pre-sorting?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(1)'],
      answer: 'O(n log n)',
      explanation: 'Sorting the array takes O(n log n) time. Finding the longest contiguous run of identical elements takes O(n) linear time, resulting in O(n log n) total complexity.'
    }
  ],
  trans_horner: [
    {
      question: 'How many multiplications are performed by Horner\'s rule to evaluate a polynomial of degree n?',
      options: ['n multiplications', 'n(n+1)/2 multiplications', '2n multiplications', 'log n multiplications'],
      answer: 'n multiplications',
      explanation: 'Horner\'s rule rewrites the polynomial in a nested parenthesized form, performing exactly n multiplications and n additions.'
    },
    {
      question: 'What is the traditional, naive time complexity of evaluating a polynomial of degree n at a point x?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(1)'],
      answer: 'O(n²)',
      explanation: 'The naive approach computes x^i separately for each term, performing i-1 multiplications per term, which sums to O(n²) total multiplications.'
    }
  ],
  trans_expo: [
    {
      question: 'What is the key optimization of Left-to-Right Binary Exponentiation?',
      options: [
        'It multiplies the base by itself n times',
        'It uses the binary representation of exponent n to square and conditionally multiply',
        'It converts the base to binary',
        'It runs in O(n) time'
      ],
      answer: 'It uses the binary representation of exponent n to square and conditionally multiply',
      explanation: 'By scanning the binary bits of n, we square the current result and multiply by the base if the bit is 1, achieving a complexity of O(log n) multiplications.'
    },
    {
      question: 'How many multiplications are needed to compute x¹⁶ using binary exponentiation?',
      options: ['16', '8', '4', '5'],
      answer: '4',
      explanation: '16 is a power of 2: x -> x² -> x⁴ -> x⁸ -> x¹⁶, taking exactly 4 squaring operations.'
    }
  ],
  trans_red: [
    {
      question: 'How is the Least Common Multiple (LCM) of two integers m and n computed using problem reduction?',
      options: [
        'By prime factorization',
        'By reducing to the GCD: LCM(m, n) = (m * n) / GCD(m, n)',
        'By listing all multiples',
        'By dividing m by n'
      ],
      answer: 'By reducing to the GCD: LCM(m, n) = (m * n) / GCD(m, n)',
      explanation: 'We reduce the problem of computing LCM to the known problem of computing GCD, which can be solved efficiently in logarithmic time using Euclid\'s algorithm.'
    },
    {
      question: 'Which of the following is a classic example of problem reduction?',
      options: [
        'Solving a system of linear equations using Gaussian elimination',
        'Finding the shortest path in a graph',
        'Linear Programming reductions',
        'All of the above'
      ],
      answer: 'All of the above',
      explanation: 'Many complex problems are solved by reducing them to standard known algorithms like Gaussian elimination, shortest paths, or Linear Programming.'
    }
  ],
  spa_intro: [
    {
      question: 'What is the primary trade-off of Counting Sort?',
      options: [
        'Trade space (extra arrays of size equal to range of values) to achieve linear time complexity',
        'Trade time to save memory',
        'Using heaps to save comparisons',
        'Avoiding recursion by using loops'
      ],
      answer: 'Trade space (extra arrays of size equal to range of values) to achieve linear time complexity',
      explanation: 'Counting Sort achieves O(n + k) time by using an auxiliary frequency array of size k (where k is the range of values), demonstrating a classic Space-Time trade-off.'
    },
    {
      question: 'Under what condition is Counting Sort highly efficient?',
      options: [
        'When the range of values k is much larger than the number of elements n',
        'When the range of values k is small and comparable to n (k ∈ O(n))',
        'When the input array is already sorted',
        'When elements are floating-point numbers'
      ],
      answer: 'When the range of values k is small and comparable to n (k ∈ O(n))',
      explanation: 'If k is small (e.g., k ≤ n), the complexity is O(n), which is extremely fast and outperforms comparison-based sorting algorithms.'
    }
  ],
  spa_horspool: [
    {
      question: 'In Horspool\'s string matching algorithm, what determines the shift distance when a mismatch occurs?',
      options: [
        'The mismatched character in the text',
        'The character in the text aligned with the last character of the pattern',
        'The length of the text',
        'The first character of the pattern'
      ],
      answer: 'The character in the text aligned with the last character of the pattern',
      explanation: 'Horspool aligns the pattern and looks at the text character corresponding to the pattern\'s rightmost character to determine the shift value from its pre-computed shift table.'
    },
    {
      question: 'What is the shift value for character \'c\' in a pattern of length m, if \'c\' is not present in the pattern?',
      options: ['1', 'm', 'm - 1', '0'],
      answer: 'm',
      explanation: 'If the character does not appear in the pattern, the pattern can be safely shifted past this character, which is a shift distance of m.'
    }
  ],
  spa_boyer: [
    {
      question: 'Boyer-Moore algorithm uses which two heuristics to determine shift distances?',
      options: [
        'Bad-Character and Good-Suffix Heuristics',
        'Linear Scan and Binary Pivot',
        'Hashing and Suffix Trees',
        'Greedy Choice and Divide Step'
      ],
      answer: 'Bad-Character and Good-Suffix Heuristics',
      explanation: 'Boyer-Moore combines the bad-character rule (shifting based on mismatched text character) and the good-suffix rule (shifting to align matching suffixes) to achieve sub-linear average search time.'
    },
    {
      question: 'Boyer-Moore compares characters of the pattern against the text in which direction?',
      options: ['Left-to-right', 'Right-to-left', 'Alternating', 'From the center outwards'],
      answer: 'Right-to-left',
      explanation: 'Boyer-Moore matches the pattern characters starting from the rightmost character of the pattern and moving backwards to the left.'
    }
  ],
  gre_intro: [
    {
      question: 'Which of the following is the key characteristic of Greedy algorithms?',
      options: [
        'They explore all subproblem solutions',
        'They make a locally optimal choice at each step with the hope that it leads to a global optimum',
        'They use recursion and backtrack',
        'They always guarantee the optimal solution for all problems'
      ],
      answer: 'They make a locally optimal choice at each step with the hope that it leads to a global optimum',
      explanation: 'Greedy algorithms make irrevocable local choices that are best at the moment, without checking future choices or backtracking.'
    },
    {
      question: 'For which set of coins does the Greedy Change-making algorithm fail to find the minimum number of coins for 6 cents?',
      options: ['{25, 10, 5, 1}', '{50, 20, 10, 5, 1}', '{4, 3, 1}', '{10, 5, 1}'],
      answer: '{4, 3, 1}',
      explanation: 'For {4, 3, 1}, Greedy makes 6¢ using [4, 1, 1] (3 coins), but the optimal solution is [3, 3] (2 coins).'
    }
  ],
  gre_huff: [
    {
      question: 'What property of the codes generated by Huffman coding ensures they can be decoded unambiguously?',
      options: [
        'Fixed-length property',
        'Prefix-free property (no code is a prefix of another)',
        'Symmetric property',
        'Even parity property'
      ],
      answer: 'Prefix-free property (no code is a prefix of another)',
      explanation: 'Huffman codes are prefix-free, meaning no code is a prefix of another code. This ensures unique, unambiguous left-to-right decoding without separators.'
    },
    {
      question: 'Huffman tree construction uses which data structure to repeatedly extract the two nodes with the lowest frequencies?',
      options: ['Stack', 'Queue', 'Min-Priority Queue (Min-Heap)', 'Binary Search Tree'],
      answer: 'Min-Priority Queue (Min-Heap)',
      explanation: 'A min-priority queue allows us to efficiently extract the two nodes with the minimum weights/frequencies in logarithmic time.'
    }
  ],
  dyn_intro: [
    {
      question: 'What are the two key requirements/properties a problem must have to be solved using Dynamic Programming?',
      options: [
        'Divide and conquer splits',
        'Overlapping subproblems and Optimal substructure',
        'Greedy choice property and Sorting',
        'Linear recursion and constant space'
      ],
      answer: 'Overlapping subproblems and Optimal substructure',
      explanation: 'Optimal substructure means an optimal solution contains optimal solutions to subproblems. Overlapping subproblems mean the same subproblems are solved repeatedly.'
    },
    {
      question: 'What is the main difference between Memoization (Top-down) and Tabulation (Bottom-up)?',
      options: [
        'Memoization is iterative; Tabulation is recursive',
        'Memoization is recursive and fills the table on-demand; Tabulation is iterative and fills the table systematically from base cases',
        'Memoization uses more time; Tabulation uses more space',
        'They have different asymptotic time complexities'
      ],
      answer: 'Memoization is recursive and fills the table on-demand; Tabulation is iterative and fills the table systematically from base cases',
      explanation: 'Memoization is a top-down recursive lookup-cached approach. Tabulation is a bottom-up iterative approach filling a table from base cases onwards.'
    }
  ],
  dyn_change: [
    {
      question: 'In DP Change-making, what does the recurrence value F(i) represent?',
      options: [
        'The sum of coin values',
        'The minimum number of coins needed to make amount i',
        'The number of ways to make amount i',
        'The weight of the coins'
      ],
      answer: 'The minimum number of coins needed to make amount i',
      explanation: 'F(i) stores the minimum number of coins required to make change for amount i, computed as min_{j} { F(i - d_j) } + 1.'
    },
    {
      question: 'What is the time complexity of the dynamic programming solution for change-making with n cents and m coin denominations?',
      options: ['O(n)', 'O(m)', 'O(nm)', 'O(2ⁿ)'],
      answer: 'O(nm)',
      explanation: 'We have n+1 entries in our table. For each entry, we iterate over the m coin denominations, yielding a complexity of O(nm).'
    }
  ],
  dyn_warshall: [
    {
      question: 'What does Warshall\'s algorithm compute?',
      options: [
        'All-pairs shortest paths',
        'Transitive closure of a directed graph',
        'Minimum spanning tree',
        'Single-source shortest paths'
      ],
      answer: 'Transitive closure of a directed graph',
      explanation: 'Warshall\'s algorithm computes the transitive closure, determining reachability between all pairs of vertices in a directed graph.'
    },
    {
      question: 'In Warshall\'s recurrence, R^{(k)}[i][j] is true if:',
      options: [
        'There is a path from i to j using only vertices 1..k as intermediates',
        'There is a direct edge from i to j',
        'There is a path of length at most k',
        'The distance from i to j is at most k'
      ],
      answer: 'There is a path from i to j using only vertices 1..k as intermediates',
      explanation: 'R^{(k)}[i][j] is true if a path exists from vertex i to vertex j using only vertices from the set {1, 2, ..., k} as intermediate vertices.'
    }
  ],
  dyn_floyd: [
    {
      question: 'What does Floyd\'s algorithm compute?',
      options: [
        'Transitive closure',
        'All-pairs shortest path distances in a weighted graph',
        'Single-source shortest paths',
        'Minimum spanning tree weights'
      ],
      answer: 'All-pairs shortest path distances in a weighted graph',
      explanation: 'Floyd\'s algorithm computes the shortest path distances between all pairs of vertices in a weighted graph (with positive or negative edge weights).'
    },
    {
      question: 'What is the update formula for the distance matrix at stage k of Floyd\'s algorithm?',
      options: [
        'D[i][j] = D[i][k] + D[k][j]',
        'D[i][j] = min( D[i][j], D[i][k] + D[k][j] )',
        'D[i][j] = min( D[i][j], D[i][j-1] )',
        'D[i][j] = D[i][j] OR ( D[i][k] AND D[k][j] )'
      ],
      answer: 'D[i][j] = min( D[i][j], D[i][k] + D[k][j] )',
      explanation: 'The update (relaxation) step compares the current shortest distance from i to j against the distance of the path going via intermediate vertex k.'
    }
  ],
  dyn_knap: [
    {
      question: 'In the 0/1 Knapsack dynamic programming table, what does V[i][j] represent?',
      options: [
        'The maximum value of subset of first i items that fit in capacity j',
        'The minimum weight of items with value j',
        'The total number of items in capacity j',
        'The optimal subset ratio'
      ],
      answer: 'The maximum value of subset of first i items that fit in capacity j',
      explanation: 'V[i][j] is the maximum value of a subset of the first i items that can fit inside a knapsack of capacity j.'
    },
    {
      question: 'What is the recurrence relation for the 0/1 Knapsack problem?',
      options: [
        'V[i, j] = V[i-1, j]',
        'V[i, j] = max( V[i-1, j], val[i] + V[i-1, j-wt[i]] )',
        'V[i, j] = V[i-1, j] + val[i]',
        'V[i, j] = max( V[i-1, j], val[i] + V[i, j-wt[i]] )'
      ],
      answer: 'V[i, j] = max( V[i-1, j], val[i] + V[i-1, j-wt[i]] )',
      explanation: 'For item i, we take the maximum of excluding it (V[i-1, j]) and including it (val[i] + V[i-1, j-wt[i]] if capacity allows).'
    }
  ]
};

// Global fallback questions just in case
const DEFAULT_QUESTIONS: QuizQuestion[] = [
  {
    question: 'Which of the following describes an optimal substructure in algorithms?',
    options: [
      'An optimal solution to the problem contains optimal solutions to its sub-problems',
      'The running time is linear in the size of the input',
      'The problem can be solved by greedy choices exclusively',
      'The algorithm does not require any additional space'
    ],
    answer: 'An optimal solution to the problem contains optimal solutions to its sub-problems',
    explanation: 'Optimal substructure is a defining property of dynamic programming and greedy algorithms, where optimal solutions to subproblems combine to solve the main problem optimally.'
  }
];

export default function ExercisePanel({ topicId }: ExercisePanelProps) {
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);

    // Fetch the set of questions for this specific topic
    const qList = TOPIC_QUESTIONS[topicId] || DEFAULT_QUESTIONS;
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
