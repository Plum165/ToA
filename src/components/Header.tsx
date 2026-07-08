import { Theme } from '../types';
import { BookOpen, GraduationCap, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
}

export const THEMES: Theme[] = [
  { id: 'professional-polish', name: 'Professional Polish', color: '#6366f1' },
  { id: 'sapphire-steel', name: 'Sapphire & Steel', color: '#3E92CC' },
  { id: 'cat-noir', name: 'Cat Noir', color: '#81e733' },
  { id: 'blood-red', name: 'Blood Red', color: '#b30000' },
  { id: 'emerald-charcoal', name: 'Emerald & Charcoal', color: '#009B77' },
  { id: 'digital-twilight', name: 'Digital Twilight', color: '#E94560' },
  { id: 'coral-aqua', name: 'Coral & Aqua', color: '#4ECDC4' },
  { id: 'electric-citrus', name: 'Electric Citrus', color: '#F7B801' },
  { id: 'artisan-clay', name: 'Artisan Clay', color: '#E07A5F' },
  { id: 'forest-canopy', name: 'Forest Canopy', color: '#2D6A4F' },
  { id: 'ocean-depth', name: 'Ocean Depth', color: '#07575B' },
  { id: 'desert-sunset', name: 'Desert Sunset', color: '#B56576' },
  { id: 'monochrome-focus', name: 'Monochrome Focus', color: '#737373' },
  { id: 'soft-nordic', name: 'Soft Nordic', color: '#88c0d0' },
  { id: 'neutral-peach', name: 'Neutral Peach', color: '#e5b299' },
  { id: 'retro-pop', name: 'Retro Pop', color: '#D95F43' },
  { id: 'cyberpunk-glow', name: 'Cyberpunk Glow', color: '#00ffcc' },
  { id: 'plum-gold', name: 'Plum & Gold', color: '#FDB833' },
  { id: 'red-blue', name: 'Red & Blue', color: '#ef233c' },
  { id: 'purple-black', name: 'Purple & Black', color: '#8e44ad' },
  { id: 'dark-emerald', name: 'Dark Emerald', color: '#10b981' },
  { id: 'emerald-red', name: 'Emerald & Red', color: '#ef4444' },
  { id: 'dark-blue-indigo', name: 'Dark Blue & Indigo', color: '#6366f1' },
];

export default function Header({ currentTheme, onThemeChange }: HeaderProps) {
  const activeThemeColor = THEMES.find(t => t.id === currentTheme)?.color || '#6366f1';

  return (
    <header className="max-w-7xl mx-auto p-4 md:p-6 pb-2">
      <div className="glass rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent shadow-lg shadow-accent/10">
            <BookOpen className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">Theory of ALogrithms</h1>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://automark-code-judge.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-accent/15 border border-accent/25 hover:bg-accent/25 transition-all text-accent hover:text-accent font-bold text-xs rounded-lg shadow-md hover:shadow-accent/5 cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Practice Test</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <div className="flex items-center gap-2 bg-black/25 rounded-lg p-1.5 pr-3 border border-white/10 shadow-inner">
            <span
              id="theme-chip"
              className="w-3.5 h-3.5 rounded-full ml-2 transition-transform duration-300 scale-100 hover:scale-110"
              style={{ backgroundColor: activeThemeColor }}
            />
            <select
              value={currentTheme}
              onChange={(e) => onThemeChange(e.target.value)}
              className="bg-transparent text-xs font-semibold border-none outline-none cursor-pointer text-white/95"
              aria-label="Select color theme"
            >
              {THEMES.map((theme) => (
                <option key={theme.id} value={theme.id} className="bg-[#121212] text-white">
                  {theme.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
