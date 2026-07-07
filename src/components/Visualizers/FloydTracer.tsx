import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

export default function FloydTracer() {
  const [step, setStep] = useState(0); // 0 (D0) to 4 (D4)
  const size = 4;
  const INF = 9999;

  // Initial Adjacency Matrix
  const adjMatrix = [
    [0, 3, INF, 7],
    [8, 0, 2, INF],
    [5, INF, 0, 1],
    [2, INF, INF, 0],
  ];

  // Precompute matrices D0 to D4
  const getMatrixForStep = (kStep: number) => {
    let D = adjMatrix.map((r) => [...r]);
    const history = [D.map((r) => [...r])];

    for (let k = 0; k < kStep; k++) {
      let nextD = D.map((r) => [...r]);
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const direct = D[i][j];
          const viaK = D[i][k] + D[k][j];
          if (viaK < direct) {
            nextD[i][j] = viaK;
          }
        }
      }
      D = nextD;
      history.push(D.map((r) => [...r]));
    }
    return history[kStep];
  };

  const currentMatrix = getMatrixForStep(step);
  const previousMatrix = step > 0 ? getMatrixForStep(step - 1) : adjMatrix;

  // Node positions
  const nodes = [
    { id: 1, cx: 150, cy: 30 },
    { id: 2, cx: 250, cy: 60 },
    { id: 3, cx: 150, cy: 90 },
    { id: 4, cx: 50, cy: 60 },
  ];

  const getStepLog = () => {
    switch (step) {
      case 0:
        return 'D^{(0)}: Initial direct edge weights. Cells with infinity (∞) represent node pairs that currently have no direct paths between them.';
      case 1:
        return 'k = 1: Allowing paths via Node 1. The path 4 → 1 (weight 2) + 1 → 2 (weight 3) costs 5. This is cheaper than 4 → 2 (∞), so D[4,2] relaxes to 5. Also, D[3,2] becomes 8 (via 1).';
      case 2:
        return 'k = 2: Allowing paths via Node 2. We can now combine existing shortcuts. For example, 4 → 2 (cost 5) + 2 → 3 (cost 2) costs 7, which relaxes D[4,3] to 7. Also, 1 → 2 → 3 relaxes D[1,3] to 5!';
      case 3:
        return 'k = 3: Allowing paths via Node 3. Since we established cheaper paths to Node 3, we can now use it. For example, 4 → 3 (cost 7) + 3 → 4 (cost 1) is not used because 4->4 is 0. But 2 → 3 (cost 2) + 3 → 4 (cost 1) costs 3, relaxing D[2,4] to 3!';
      case 4:
        return 'k = 4: Allowing paths via Node 4. Final relaxation D^{(4)} complete. We have successfully mapped the optimal shortest path costs between all node pairs in the graph.';
      default:
        return '';
    }
  };

  return (
    <div className="glass p-5 rounded-xl border border-white/5 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h4 className="font-bold text-base text-accent">Floyd's Shortest Path Tracer</h4>
          <p className="text-xs opacity-75">Watch path weights relax dynamically as $k$ progresses.</p>
        </div>
        <span className="k-badge">Current k = {step}</span>
      </div>

      {/* Graph Visual */}
      <div className="bg-black/20 p-4 rounded-lg flex justify-center">
        <svg viewBox="0 0 300 120" className="w-full max-w-sm h-36">
          <defs>
            <marker id="arrow-weight" markerWidth="6" markerHeight="6" refX="17" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 Z" fill="rgba(255,255,255,0.7)" />
            </marker>
          </defs>

          {/* Render directed weighted edges */}
          {/* Node 1 -> 2 (weight 3) */}
          <line x1="150" y1="30" x2="250" y2="60" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.4" markerEnd="url(#arrow-weight)" />
          <text x="210" y="42" fill="rgba(255,255,255,0.7)" fontSize="9" fontWeight="bold" textAnchor="middle">3</text>

          {/* Node 2 -> 3 (weight 2) */}
          <line x1="250" y1="60" x2="150" y2="90" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.4" markerEnd="url(#arrow-weight)" />
          <text x="205" y="80" fill="rgba(255,255,255,0.7)" fontSize="9" fontWeight="bold" textAnchor="middle">2</text>

          {/* Node 3 -> 4 (weight 1) */}
          <line x1="150" y1="90" x2="50" y2="60" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.4" markerEnd="url(#arrow-weight)" />
          <text x="95" y="80" fill="rgba(255,255,255,0.7)" fontSize="9" fontWeight="bold" textAnchor="middle">1</text>

          {/* Node 4 -> 1 (weight 2) */}
          <line x1="50" y1="60" x2="150" y2="30" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.4" markerEnd="url(#arrow-weight)" />
          <text x="95" y="42" fill="rgba(255,255,255,0.7)" fontSize="9" fontWeight="bold" textAnchor="middle">2</text>

          {/* Node 3 -> 1 (weight 5) */}
          <line x1="150" y1="90" x2="150" y2="30" stroke="#fff" strokeWidth="1.2" strokeOpacity="0.3" markerEnd="url(#arrow-weight)" />
          <text x="142" y="62" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="end">5</text>

          {/* Node 1 -> 4 (weight 7) */}
          <line x1="150" y1="30" x2="50" y2="60" stroke="#fff" strokeWidth="1.2" strokeOpacity="0.3" markerEnd="url(#arrow-weight)" />
          <text x="90" y="55" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="end">7</text>

          {/* Nodes */}
          {nodes.map((node) => {
            const isK = node.id === step;
            return (
              <g key={`fnode-${node.id}`}>
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r="13"
                  fill="var(--bg2)"
                  stroke={isK ? 'var(--accent)' : 'rgba(255,255,255,0.4)'}
                  strokeWidth={isK ? '3' : '1.5'}
                  className={isK ? 'k-active-node' : ''}
                />
                <text
                  x={node.cx}
                  y={node.cy + 4}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="10"
                  fontWeight="bold"
                >
                  {node.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Floyd Matrix Grid */}
      <div className="bg-black/10 p-4 rounded-lg">
        <h5 className="text-xs uppercase font-mono text-gray-400 mb-3 text-center">
          Distance Matrix D<sup>({step})</sup>
        </h5>
        
        <div className="grid grid-cols-5 text-center font-mono text-xs gap-1 max-w-xs mx-auto">
          {/* Header Row */}
          <div className="text-gray-500 font-bold py-1">i/j</div>
          {[1, 2, 3, 4].map((j) => (
            <div key={`fh-col-${j}`} className={`text-gray-400 font-bold py-1 ${step > 0 && j === step ? 'text-accent border-b-2 border-accent' : ''}`}>
              {j}
            </div>
          ))}

          {/* Rows */}
          {[1, 2, 3, 4].map((i) => (
            <g key={`frow-group-${i}`} className="contents">
              {/* Row index label */}
              <div className={`text-gray-400 font-bold py-2 flex items-center justify-center ${step > 0 && i === step ? 'text-accent border-r-2 border-accent' : ''}`}>
                {i}
              </div>
              
              {/* Cells */}
              {[1, 2, 3, 4].map((j) => {
                const val = currentMatrix[i - 1][j - 1];
                const prevVal = previousMatrix[i - 1][j - 1];
                const isRelaxed = val < prevVal;

                // Value string formatting
                const valStr = val === INF ? '∞' : val;

                // Style logic
                let cellClass = 'py-2 rounded bg-white/5 border border-white/5 transition-all duration-300 flex items-center justify-center';
                if (isRelaxed) {
                  cellClass += ' new-edge-pulse border-accent';
                } else if (val !== INF && val !== 0) {
                  cellClass += ' text-accent font-semibold bg-accent/5 border-accent/15';
                } else if (val === 0) {
                  cellClass += ' text-gray-300 font-bold';
                } else {
                  cellClass += ' opacity-40 text-gray-400';
                }

                // Col and row highlighters
                if (step > 0 && !isRelaxed) {
                  if (i === step) cellClass += ' bg-indigo-500/10 border-indigo-500/15';
                  if (j === step) cellClass += ' border-teal-500/15';
                }

                return (
                  <div key={`fcell-${i}-${j}`} className={cellClass}>
                    {valStr}
                  </div>
                );
              })}
            </g>
          ))}
        </div>
      </div>

      {/* Explain Log */}
      <div className="bg-white/5 p-4 rounded-lg text-xs md:text-sm leading-relaxed border-l-2 border-accent font-sans">
        <strong>Relaxation Step:</strong> {getStepLog()}
      </div>

      {/* Control Actions */}
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setStep(0)}
          className="btn btn-ghost text-xs py-2 px-3"
          disabled={step === 0}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
        <button
          onClick={() => setStep((prev) => Math.max(0, prev - 1))}
          className="btn btn-ghost text-xs py-2 px-4"
          disabled={step === 0}
        >
          Back
        </button>
        <button
          onClick={() => setStep((prev) => Math.min(4, prev + 1))}
          className="btn btn-primary text-xs py-2 px-5"
          disabled={step === 4}
        >
          Next Step
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
