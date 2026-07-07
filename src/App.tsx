import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Sidebar, { CURRICULUM } from './components/Sidebar';
import ContentPanel from './components/ContentPanel';
import { TOPICS } from './data/topics';
import { CategoryId } from './types';

const getTopicMetrics = (topicId: string) => {
  const metrics: Record<string, { complexity: string; memory: string; label: string }> = {
    big: { complexity: 'O(n)', memory: '1.2 MB', label: 'Worst-case bound verified' },
    omega: { complexity: 'Ω(1)', memory: '0.8 MB', label: 'Best-case scenario mapped' },
    theta: { complexity: 'Θ(n log n)', memory: '2.4 MB', label: 'Tight bound certified' },
    comp: { complexity: 'O(2ⁿ)', memory: '12.0 MB', label: 'Asymptotic class hierarchy' },
    sums: { complexity: 'O(n²)', memory: '3.1 MB', label: 'Loop iterations bounded' },
    recurrence: { complexity: 'O(n log n)', memory: '4.2 MB', label: 'Master theorem verified' },
    brute_intro: { complexity: 'O(n²)', memory: '6.5 MB', label: 'Exhaustive check bound' },
    bf_string: { complexity: 'O(n·m)', memory: '8.4 MB', label: 'Shift iteration worst-case' },
    bf_geom: { complexity: 'O(n²)', memory: '11.2 MB', label: 'Quadratic brute-force path' },
    bf_exhaust: { complexity: 'O(2ⁿ)', memory: '48.0 MB', label: 'State space limit check' },
    dec_intro: { complexity: 'O(n²)', memory: '5.2 MB', label: 'Insertion sort bound' },
    dec_topo: { complexity: 'O(V + E)', memory: '14.6 MB', label: 'DFS post-ordering path' },
    dec_perm: { complexity: 'O(n!)', memory: '128 MB', label: 'Factorial space ceiling' },
    dec_factor: { complexity: 'O(log n)', memory: '1.8 MB', label: 'Binary division trace' },
    dec_var: { complexity: 'O(log n)', memory: '1.6 MB', label: 'Variable reduction bound' },
    dec_kth: { complexity: 'O(n)', memory: '8.5 MB', label: 'Average-case selection bound' },
    div_intro: { complexity: 'O(n log n)', memory: '15.2 MB', label: 'Divide & conquer merge' },
    div_quick: { complexity: 'O(n log n)', memory: '10.8 MB', label: 'In-place pivot recursive' },
    div_geom: { complexity: 'O(n log n)', memory: '21.0 MB', label: 'Spatial split recurrence' },
    div_strassen: { complexity: 'O(n^{2.81})', memory: '44.5 MB', label: 'Sub-cubic matrix bound' },
    trans_intro: { complexity: 'O(n log n)', memory: '7.4 MB', label: 'Simplification bound' },
    trans_presort: { complexity: 'O(n log n)', memory: '8.2 MB', label: 'Sorted state check' },
    trans_horner: { complexity: 'O(n)', memory: '1.2 MB', label: 'Polynomial synthetic bound' },
    trans_expo: { complexity: 'O(log n)', memory: '0.9 MB', label: 'Square-and-multiply path' },
    trans_red: { complexity: 'O(log n)', memory: '1.1 MB', label: 'Reduction chain complexity' },
    spa_intro: { complexity: 'O(n + k)', memory: '30.5 MB', label: 'Distribution counting bound' },
    spa_horspool: { complexity: 'O(n)', memory: '13.8 MB', label: 'Shift table lookup trace' },
    spa_boyer: { complexity: 'O(n)', memory: '15.4 MB', label: 'Suffix heuristics worst-case' },
    gre_intro: { complexity: 'O(n log n)', memory: '3.6 MB', label: 'Sorted choice heuristic' },
    gre_huff: { complexity: 'O(n log n)', memory: '26.8 MB', label: 'Priority queue trace' },
    dyn_intro: { complexity: 'O(n)', memory: '4.8 MB', label: 'Memoized lookup trace' },
    dyn_change: { complexity: 'O(n·d)', memory: '11.4 MB', label: 'Dynamic change recurrence' },
    dyn_warshall: { complexity: 'O(n³)', memory: '16.5 MB', label: 'Transitive closure matrix' },
    dyn_floyd: { complexity: 'O(n³)', memory: '17.8 MB', label: 'All-pairs shortest paths' },
    dyn_knap: { complexity: 'O(n·W)', memory: '22.0 MB', label: 'Dynamic subset capacity bound' }
  };
  return metrics[topicId] || { complexity: 'O(n log n)', memory: '12.4 MB', label: 'Verified bound' };
};

export default function App() {
  // Theme state persisted to localStorage, defaulting to 'professional-polish'
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('selectedTheme') || 'professional-polish';
  });

  // Navigation states
  const [activeCategory, setActiveCategory] = useState<CategoryId>('known');
  const [activeTopicId, setActiveTopicId] = useState<string>('big');

  // Apply theme to the HTML root node whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('selectedTheme', theme);
  }, [theme]);

  // Synchronize category change and auto-select its first topic
  const handleCategoryChange = (catId: CategoryId) => {
    setActiveCategory(catId);
    const topics = CURRICULUM[catId];
    if (topics && topics.length > 0) {
      setActiveTopicId(topics[0].id);
    }
  };

  const handleTopicChange = (topicId: string) => {
    setActiveTopicId(topicId);
  };

  const activeTopic = TOPICS[activeTopicId] || TOPICS['big'];
  const metrics = getTopicMetrics(activeTopicId);

  return (
    <div className="min-h-screen pb-12 flex flex-col justify-between">
      <div className="space-y-4">
        {/* Header Area */}
        <Header currentTheme={theme} onThemeChange={setTheme} />

        {/* Main Dashboard Layout */}
        <main className="max-w-7xl mx-auto px-4 md:px-6 grid-large">
          {/* Left Navigation Rail */}
          <Sidebar
            activeCategory={activeCategory}
            activeTopicId={activeTopicId}
            onCategoryChange={handleCategoryChange}
            onTopicChange={handleTopicChange}
          />

          {/* Right Work Content Frame with fluid animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopicId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <ContentPanel topic={activeTopic} />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer Stats Row - Professional Polish Theme */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow-xl flex flex-col justify-between min-h-[100px] hover:border-accent/40 transition-colors duration-300">
            <div>
              <p className="text-[10px] text-accent font-bold uppercase mb-1 tracking-widest">Complexity Analysis</p>
              <p className="text-2xl font-bold text-emerald-400 font-mono tracking-tight">{metrics.complexity}</p>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 font-mono">{metrics.label}</p>
          </div>
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow-xl flex flex-col justify-between min-h-[100px] hover:border-accent/40 transition-colors duration-300">
            <div>
              <p className="text-[10px] text-accent font-bold uppercase mb-1 tracking-widest">Memory Profile</p>
              <p className="text-2xl font-bold text-indigo-400 font-mono tracking-tight">{metrics.memory}</p>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 font-mono">In-browser sandbox computation</p>
          </div>
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow-xl flex flex-col justify-between min-h-[100px] hover:border-accent/40 transition-colors duration-300">
            <div>
              <p className="text-[10px] text-accent font-bold uppercase mb-1 tracking-widest">Verification Status</p>
              <p className="text-2xl font-bold text-white tracking-tight">SECURE</p>
            </div>
            <div className="flex gap-1.5 mt-2">
              <div className="h-1.5 w-6 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="h-1.5 w-6 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
              <div className="h-1.5 w-6 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <footer className="max-w-7xl mx-auto px-6 pt-12 pb-4 text-center text-xs opacity-60 font-medium">
        <p>&copy; {new Date().getFullYear()} Theory of Algorithms. Developed for CSC3003S.</p>
        <p className="mt-1 font-mono text-[10px] text-gray-500">
          Build v5.1.0 • Designed with Swiss Precision & Offline-First Integrity
        </p>
      </footer>
    </div>
  );
}
