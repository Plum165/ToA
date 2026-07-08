import { useState } from 'react';
import { CategoryId, Category } from '../types';
import { Search, Compass, ShieldAlert } from 'lucide-react';

interface SidebarProps {
  activeCategory: CategoryId;
  activeTopicId: string;
  onCategoryChange: (catId: CategoryId) => void;
  onTopicChange: (topicId: string) => void;
}

export const CATEGORIES: Category[] = [
  { id: 'known', name: 'Notations' },
  { id: 'algo', name: 'Efficiency' },
  { id: 'bru', name: 'Brute Force' },
  { id: 'dec', name: 'Decrease & Conquer' },
  { id: 'div', name: 'Divide & Conquer' },
  { id: 'tra', name: 'Transformation' },
  { id: 'spa', name: 'Space/Time' },
  { id: 'gre', name: 'Greedy' },
  { id: 'dyn', name: 'Dynamic Prog.' },
];

export const CURRICULUM = {
  known: [
    { id: 'big', title: 'Big O Notation' },
    { id: 'omega', title: 'Omega Ω' },
    { id: 'theta', title: 'Theta Θ' },
    { id: 'comp', title: 'Comparing Classes' }
  ],
  algo: [
    { id: 'sums', title: 'Summation Loops' },
    { id: 'recurrence', title: 'Recurrence Relations' }
  ],
  bru: [
    { id: 'brute_intro', title: 'Intro & Closest Pair' },
    { id: 'bf_string', title: 'String Matching' },
    { id: 'bf_geom', title: 'Geometric Problems' },
    { id: 'bf_exhaust', title: 'Exhaustive Search' }
  ],
  dec: [
    { id: 'dec_intro', title: 'Intro & Insertion Sort' },
    { id: 'dec_topo', title: 'Topological Sort' },
    { id: 'dec_perm', title: 'Permutations Generation' },
    { id: 'dec_factor', title: 'Decrease by Factor' },
    { id: 'dec_var', title: 'Variable Size Decrease' },
    { id: 'dec_kth', title: 'QuickSelect (k-th Order)' }
  ],
  div: [
    { id: 'div_intro', title: 'Intro & Merge Sort' },
    { id: 'div_quick', title: 'QuickSort' },
    { id: 'div_geom', title: 'Geometric D&C' },
    { id: 'div_strassen', title: 'Strassen\'s Matrix' }
  ],
  tra: [
    { id: 'trans_intro', title: 'Transformation Intro' },
    { id: 'trans_presort', title: 'Pre-sorting (Simplification)' },
    { id: 'trans_horner', title: 'Horner\'s Rule' },
    { id: 'trans_expo', title: 'Binary Exponentiation' },
    { id: 'trans_red', title: 'Problem Reduction (LCM)' }
  ],
  spa: [
    { id: 'spa_intro', title: 'Counting Sort (Tradeoff)' },
    { id: 'spa_horspool', title: 'Horspool\'s Algorithm' },
    { id: 'spa_boyer', title: 'Boyer-Moore Heuristics' }
  ],
  gre: [
    { id: 'gre_intro', title: 'Intro & Change Making' },
    { id: 'gre_huff', title: 'Huffman Compression' }
  ],
  dyn: [
    { id: 'dyn_intro', title: 'Principle & Fibonacci' },
    { id: 'dyn_change', title: 'Change Making (DP)' },
    { id: 'dyn_warshall', title: 'Warshall\'s Algorithm' },
    { id: 'dyn_floyd', title: 'Floyd\'s Algorithm' },
    { id: 'dyn_knap', title: 'Knapsack Problem (DP)' }
  ]
};

export default function Sidebar({
  activeCategory,
  activeTopicId,
  onCategoryChange,
  onTopicChange,
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Get topics for active tab OR filter global list if searching
  const getFilteredTopics = () => {
    if (!searchQuery.trim()) {
      return CURRICULUM[activeCategory] || [];
    }

    // Global search across all categories
    const results: { id: string; title: string; categoryId: CategoryId }[] = [];
    Object.entries(CURRICULUM).forEach(([catId, topicsList]) => {
      topicsList.forEach((topic) => {
        if (topic.title.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({ ...topic, categoryId: catId as CategoryId });
        }
      });
    });
    return results;
  };

  const currentTopics = getFilteredTopics();

  return (
    <aside className="glass p-5 rounded-2xl h-fit space-y-4 border border-white/10">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-accent" />
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">Curriculum Map</h2>
        </div>
        <span className="text-[10px] bg-accent/15 px-2 py-0.5 rounded text-accent font-bold uppercase tracking-wider">
          Theory
        </span>
      </div>

      {/* Dynamic Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search curriculum..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-black/20 border border-white/10 pl-9 pr-4 py-2 rounded-lg text-xs md:text-sm text-white focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Category Grid Tabs */}
      {!searchQuery && (
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-1.5" role="navigation" aria-label="Curriculum sections">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`text-[10px] sm:text-xs py-2 px-1 rounded-lg text-center transition-all duration-200 border cursor-pointer select-none font-bold ${
                activeCategory === cat.id
                  ? 'bg-accent/15 text-accent border-accent/25 shadow-[0_2px_10px_rgba(99,102,241,0.15)]'
                  : 'bg-black/10 text-gray-400 border-transparent hover:bg-white/5 hover:text-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      <div className="solid-divider" />

      {/* Dynamic Topic List */}
      <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
        {currentTopics.length > 0 ? (
          currentTopics.map((topic: any) => {
            const isSelected = activeTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => {
                  if (topic.categoryId) {
                    onCategoryChange(topic.categoryId);
                  }
                  onTopicChange(topic.id);
                }}
                className={`w-full p-2.5 rounded-lg text-left transition-all duration-200 flex items-center gap-2.5 border cursor-pointer ${
                  isSelected
                    ? 'bg-accent/10 border-accent/20 text-accent font-semibold'
                    : 'bg-white/5 border-transparent text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-accent shadow-[0_0_8px_var(--accent)]' : 'bg-gray-500'}`} />
                <span className="text-xs font-semibold truncate leading-none">{topic.title}</span>
              </button>
            );
          })
        ) : (
          <div className="text-center py-6 text-gray-500 text-xs flex flex-col items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-gray-500" />
            No topics matched.
          </div>
        )}
      </div>

    </aside>
  );
}
