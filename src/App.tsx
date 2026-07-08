import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Sidebar, { CURRICULUM } from './components/Sidebar';
import ContentPanel from './components/ContentPanel';
import { TOPICS } from './data/topics';
import { CategoryId } from './types';



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
      </div>

      {/* Global Footer */}
      <footer className="max-w-7xl mx-auto px-6 pt-12 pb-4 text-center text-xs opacity-60 font-medium">
        <p>&copy; {new Date().getFullYear()} Theory of Algorithms. Developed for CSC3003S.</p>
        <p className="mt-1 font-mono text-[10px] text-gray-500">
          Build v5.1.0 • Designed with Swiss Precision & Offline-First Integrity • Made by Moegamat Samsodien
        </p>
      </footer>
    </div>
  );
}
