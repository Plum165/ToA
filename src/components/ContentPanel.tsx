import { useState, useEffect } from 'react';
import { Topic } from '../types';
import { BookOpen, Code, Lightbulb, PlayCircle } from 'lucide-react';
import ComplexityChart from './Visualizers/ComplexityChart';
import WarshallTracer from './Visualizers/WarshallTracer';
import FloydTracer from './Visualizers/FloydTracer';
import KnapsackTracer from './Visualizers/KnapsackTracer';
import ExercisePanel from './ExercisePanel';

interface ContentPanelProps {
  topic: Topic;
}

type TabId = 'notes' | 'code' | 'visualizer' | 'exercise';

export default function ContentPanel({ topic }: ContentPanelProps) {
  const [activeTab, setActiveTab] = useState<TabId>('notes');

  // Trigger MathJax typesetting whenever the topic or selected tab changes
  useEffect(() => {
    const triggerMathJax = () => {
      const mj = (window as any).MathJax;
      if (mj && typeof mj.typesetPromise === 'function') {
        try {
          mj.typesetClear();
          mj.typesetPromise();
        } catch (e) {
          console.warn('MathJax typesetting error:', e);
        }
      }
    };

    // Delay slightly to allow DOM elements to fully render in React
    const timer = setTimeout(triggerMathJax, 100);
    return () => clearTimeout(timer);
  }, [topic.id, activeTab]);

  // Reset tab to "notes" when switching topics
  useEffect(() => {
    setActiveTab('notes');
  }, [topic.id]);

  // Helper to determine if the active topic has a custom tracer
  const getTracerComponent = () => {
    switch (topic.id) {
      case 'big':
      case 'omega':
      case 'theta':
      case 'comp':
        return <ComplexityChart />;
      case 'dyn_warshall':
        return <WarshallTracer />;
      case 'dyn_floyd':
        return <FloydTracer />;
      case 'dyn_knap':
        return <KnapsackTracer />;
      default:
        return null;
    }
  };

  const tracer = getTracerComponent();

  return (
    <section className="glass p-6 rounded-2xl border border-white/10 min-h-[600px] flex flex-col justify-between space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>

      <div className="space-y-4 relative z-10">
        {/* Topic Title */}
        <div className="border-b border-white/10 pb-3 flex flex-col gap-1 items-start">
          <span className="px-2 py-1 bg-accent/10 border border-accent/30 text-accent text-[10px] font-bold rounded uppercase tracking-tighter">
            Topic {topic.id.toUpperCase().replace('_', ' ')}
          </span>
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mt-1">
            {topic.title}
          </h2>
        </div>

        {/* Tab Controllers */}
        <div className="flex flex-wrap gap-2" role="tablist">
          <button
            onClick={() => setActiveTab('notes')}
            className={`btn text-xs py-2.5 px-4 cursor-pointer select-none ${
              activeTab === 'notes' ? 'btn-active' : 'btn-ghost'
            }`}
            role="tab"
            aria-selected={activeTab === 'notes'}
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            Curriculum Notes
          </button>
          
          {topic.code && (
            <button
              onClick={() => setActiveTab('code')}
              className={`btn text-xs py-2.5 px-4 cursor-pointer select-none ${
                activeTab === 'code' ? 'btn-active' : 'btn-ghost'
              }`}
              role="tab"
              aria-selected={activeTab === 'code'}
            >
              <Code className="w-3.5 h-3.5 shrink-0" />
              Source Code
            </button>
          )}

          {tracer && (
            <button
              onClick={() => setActiveTab('visualizer')}
              className={`btn text-xs py-2.5 px-4 cursor-pointer select-none ${
                activeTab === 'visualizer' ? 'btn-active' : 'btn-ghost'
              }`}
              role="tab"
              aria-selected={activeTab === 'visualizer'}
            >
              <PlayCircle className="w-3.5 h-3.5 shrink-0" />
              Interactive Tracer
            </button>
          )}

          <button
            onClick={() => setActiveTab('exercise')}
            className={`btn text-xs py-2.5 px-4 cursor-pointer select-none ${
              activeTab === 'exercise' ? 'btn-active' : 'btn-ghost'
            }`}
            role="tab"
            aria-selected={activeTab === 'exercise'}
          >
            <Lightbulb className="w-3.5 h-3.5 shrink-0" />
            Practice Quiz
          </button>
        </div>

        {/* Tab Contents */}
        <div className="pt-2">
          {activeTab === 'notes' && (
            <div className="tab-content text-sm md:text-base leading-relaxed text-gray-300 font-sans">
              <div 
                dangerouslySetInnerHTML={{ __html: topic.notes }} 
                className="space-y-4"
              />
            </div>
          )}

          {activeTab === 'code' && topic.code && (
            <div className="tab-content space-y-4">
              <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>Language bindings: Java / JavaScript</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">Syntax-highlighted</span>
              </div>
              <pre className="code-box select-all">
                <code>{topic.code}</code>
              </pre>
            </div>
          )}

          {activeTab === 'visualizer' && tracer && (
            <div className="tab-content">
              {tracer}
            </div>
          )}

          {activeTab === 'exercise' && (
            <div className="tab-content">
              <ExercisePanel topicId={topic.id} />
            </div>
          )}
        </div>
      </div>

      {/* Footer hint */}
      <div className="pt-4 border-t border-white/10 text-[11px] text-gray-400 font-mono flex items-center justify-between relative z-10">
        <span>Active ID: {topic.id}</span>
        <span>Render Engine: HTML5 + LaTeX (MathJax)</span>
      </div>
    </section>
  );
}
