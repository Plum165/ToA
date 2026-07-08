import { useState, useEffect } from 'react';
import { RotateCcw, HelpCircle, Check, Info } from 'lucide-react';

interface HuffmanNode {
  id: string;
  char?: string;
  freq: number;
  left?: HuffmanNode;
  right?: HuffmanNode;
  code?: string;
}

const PRESETS = [
  'ABACABA',
  'HELLO',
  'CURRICULUM',
  'EERIE_SQUEAK',
];

export default function HuffmanTracer() {
  const [inputText, setInputText] = useState(PRESETS[0]);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<any[]>([]);

  // Build the complete step-by-step trace of building the Huffman tree
  useEffect(() => {
    const traceSteps: any[] = [];
    
    // Step 1: Count frequencies
    const freqs: Record<string, number> = {};
    for (const char of inputText) {
      freqs[char] = (freqs[char] || 0) + 1;
    }
    
    const totalChars = inputText.length;
    const initialNodes: HuffmanNode[] = Object.entries(freqs).map(([char, count], idx) => ({
      id: `leaf-${char}-${idx}`,
      char,
      freq: count / totalChars,
    })).sort((a, b) => a.freq - b.freq);

    traceSteps.push({
      phase: 'init',
      pq: [...initialNodes],
      tree: null,
      log: `Frequency distribution counted. Created ${initialNodes.length} leaf nodes, sorted into the Priority Queue (Min-Heap).`,
    });

    // Step 2: Merge nodes iteratively
    let pq: HuffmanNode[] = [...initialNodes];
    let nodeIdCounter = 0;

    while (pq.length > 1) {
      // Sort PQ by frequency
      pq.sort((a, b) => a.freq - b.freq);
      
      const left = pq.shift()!;
      const right = pq.shift()!;
      
      const parent: HuffmanNode = {
        id: `internal-${nodeIdCounter++}`,
        freq: left.freq + right.freq,
        left,
        right,
      };

      pq.push(parent);
      
      traceSteps.push({
        phase: 'merge',
        pq: [...pq].sort((a, b) => a.freq - b.freq),
        merged: { left, right, parent },
        log: `Extracted two lowest frequency nodes: '${left.char || 'Internal'}' (${left.freq.toFixed(2)}) and '${right.char || 'Internal'}' (${right.freq.toFixed(2)}). Merged them under a new parent with weight ${parent.freq.toFixed(2)}.`,
      });
    }

    const finalTree = pq[0] || null;

    // Helper to generate codes from tree
    const codes: Record<string, string> = {};
    const assignCodes = (node?: HuffmanNode, codeStr: string = '') => {
      if (!node) return;
      if (node.char) {
        node.code = codeStr;
        codes[node.char] = codeStr;
        return;
      }
      assignCodes(node.left, codeStr + '0');
      assignCodes(node.right, codeStr + '1');
    };

    assignCodes(finalTree);

    traceSteps.push({
      phase: 'codes',
      pq: [...pq],
      tree: finalTree,
      codes,
      log: `Completed tree construction! Traversed from root to leaves (Left = 0, Right = 1) to derive unique, prefix-free binary codes.`,
    });

    setSteps(traceSteps);
    setCurrentStep(0);
  }, [inputText]);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  const currentTrace = steps[currentStep] || { pq: [], log: '', phase: 'init' };

  // Calculate compression statistics
  const getStats = () => {
    if (steps.length === 0) return null;
    const finalStep = steps[steps.length - 1];
    const codes = finalStep.codes || {};
    
    let originalBits = inputText.length * 8; // 8-bit ASCII
    let compressedBits = 0;
    
    for (const char of inputText) {
      compressedBits += (codes[char] || '').length;
    }

    const ratio = (1 - (compressedBits / originalBits)) * 100;
    const avgLen = Object.entries(codes).reduce((acc, [char, code]) => {
      const charFreq = (inputText.split(char).length - 1) / inputText.length;
      return acc + (charFreq * (code as string).length);
    }, 0);

    return {
      originalBits,
      compressedBits,
      ratio: ratio.toFixed(1),
      avgLen: avgLen.toFixed(2),
    };
  };

  const stats = getStats();

  // Simple recursive layout engine for SVG tree visualization
  const renderSVGTree = (node?: HuffmanNode, x: number = 150, y: number = 25, spacing: number = 65) => {
    if (!node) return null;

    const elements: any[] = [];

    if (node.left) {
      elements.push(
        <g key={`line-l-${node.id}`}>
          <line
            x1={x}
            y1={y}
            x2={x - spacing}
            y2={y + 35}
            className="stroke-gray-400"
            strokeWidth="1.5"
          />
          <text
            x={x - spacing / 2 - 5}
            y={y + 18}
            className="fill-accent text-[9px] font-mono font-bold"
            textAnchor="middle"
          >
            0
          </text>
        </g>
      );
      elements.push(...(renderSVGTree(node.left, x - spacing, y + 35, spacing * 0.5) || []));
    }

    if (node.right) {
      elements.push(
        <g key={`line-r-${node.id}`}>
          <line
            x1={x}
            y1={y}
            x2={x + spacing}
            y2={y + 35}
            className="stroke-gray-400"
            strokeWidth="1.5"
          />
          <text
            x={x + spacing / 2 + 5}
            y={y + 18}
            className="fill-accent text-[9px] font-mono font-bold"
            textAnchor="middle"
          >
            1
          </text>
        </g>
      );
      elements.push(...(renderSVGTree(node.right, x + spacing, y + 35, spacing * 0.5) || []));
    }

    // Node bubble
    const isLeaf = !!node.char;
    elements.push(
      <g key={`node-${node.id}`}>
        <circle
          cx={x}
          cy={y}
          r={isLeaf ? 11 : 9}
          className={`${
            isLeaf ? 'fill-green-500 stroke-green-300' : 'fill-slate-800 stroke-gray-500'
          } stroke-1.5`}
        />
        <text
          x={x}
          y={y + 3}
          className="fill-white text-[9px] font-extrabold"
          textAnchor="middle"
        >
          {isLeaf ? node.char : node.freq.toFixed(2)}
        </text>
        {isLeaf && (
          <text
            x={x}
            y={y + 20}
            className="fill-gray-400 text-[8px] font-mono"
            textAnchor="middle"
          >
            {(node.freq * 100).toFixed(0)}%
          </text>
        )}
      </g>
    );

    return elements;
  };

  return (
    <div className="glass p-5 rounded-xl border border-white/5 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h4 className="font-bold text-base text-accent">Huffman Coding Tracer</h4>
          <p className="text-xs opacity-75">Learn lossless prefix compression step-by-step.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-400 uppercase font-bold mb-0.5">Input Text:</span>
            <div className="flex items-center gap-1.5">
              <input
                type="text"
                maxLength={18}
                value={inputText}
                onChange={(e) => setInputText(e.target.value.toUpperCase().replace(/\s/g, '_'))}
                className="bg-black/40 border border-white/10 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-accent w-28 uppercase font-mono"
              />
              <select
                onChange={(e) => setInputText(e.target.value)}
                value={PRESETS.includes(inputText) ? inputText : ''}
                className="bg-black/40 border border-white/10 rounded px-1 py-1 text-xs text-white focus:outline-none"
              >
                <option value="" disabled>Presets</option>
                {PRESETS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Tree Map & Step log */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex flex-col justify-between min-h-[120px]">
            <div className="space-y-1">
              <span className="text-[10px] text-accent uppercase font-mono font-bold">
                Trace log &bull; Phase {currentTrace.phase.toUpperCase()}
              </span>
              <p className="text-xs text-gray-100 leading-relaxed font-sans">{currentTrace.log}</p>
            </div>
          </div>

          {/* Stepper Controllers */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleReset}
              className="btn btn-ghost py-2 px-3 text-xs"
              disabled={currentStep === 0}
            >
              <RotateCcw className="w-3.5 h-3.5" /> Restart
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="btn btn-ghost py-2 px-3 text-xs"
                disabled={currentStep === 0}
              >
                Prev Step
              </button>
              <button
                onClick={handleNext}
                className="btn btn-active py-2 px-4 text-xs"
                disabled={currentStep === steps.length - 1}
              >
                Next Step
              </button>
            </div>
          </div>

          {/* Visual SVG Tree Canvas */}
          <div className="bg-black/20 rounded-xl border border-white/10 p-4 flex flex-col items-center">
            <h5 className="text-[10px] font-mono text-gray-400 uppercase mb-2">Assembled Prefix Tree</h5>
            <div className="w-full max-w-[320px] h-[180px] bg-black/40 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center">
              {currentStep === steps.length - 1 && steps[steps.length - 1]?.tree ? (
                <svg className="w-full h-full" viewBox="0 0 300 180">
                  {renderSVGTree(steps[steps.length - 1].tree)}
                </svg>
              ) : (
                <div className="text-center p-4 text-xs text-gray-500 italic">
                  Complete all merging steps to visualize the compiled binary tree.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Code Book & Priority Queue States */}
        <div className="lg:col-span-5 space-y-4">
          {/* Priority Queue Container */}
          <div className="bg-black/20 p-4 rounded-xl border border-white/10">
            <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-3">
              Min-Heap Priority Queue (PQ) State
            </h5>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {currentTrace.pq.map((node: HuffmanNode, idx: number) => (
                <div
                  key={node.id}
                  className="px-2.5 py-1.5 bg-slate-800 border border-white/10 rounded-lg text-center flex flex-col items-center min-w-[50px]"
                >
                  <span className="text-[11px] font-bold text-accent font-sans">
                    {node.char ? `'${node.char}'` : 'Internal'}
                  </span>
                  <span className="text-[9px] font-mono text-gray-400 mt-0.5">
                    {node.freq.toFixed(2)}
                  </span>
                </div>
              ))}
              {currentTrace.pq.length === 0 && (
                <span className="text-xs text-gray-500">Queue is empty</span>
              )}
            </div>
          </div>

          {/* Code table / compression output */}
          {currentStep === steps.length - 1 && stats && (
            <div className="bg-black/25 p-4 rounded-xl border border-white/10 space-y-4">
              <div>
                <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-2">
                  Generated Codebook
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {Object.entries(steps[steps.length - 1].codes || {}).map(([char, code]: any) => (
                    <div key={char} className="flex justify-between p-1.5 bg-white/5 rounded px-2.5">
                      <span className="text-gray-400">Char '{char}'</span>
                      <span className="text-green-400 font-extrabold">{code}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Average Codeword Length:</span>
                  <span className="font-bold text-white font-mono">{stats.avgLen} bits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uncompressed Size (ASCII):</span>
                  <span className="font-bold text-white font-mono">{stats.originalBits} bits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Compressed Size (Huffman):</span>
                  <span className="font-bold text-green-400 font-mono">{stats.compressedBits} bits</span>
                </div>
                <div className="flex justify-between text-sm pt-1.5 border-t border-dashed border-white/5">
                  <span className="text-accent font-bold">Space Savings:</span>
                  <span className="font-extrabold text-green-400 font-mono">{stats.ratio}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
