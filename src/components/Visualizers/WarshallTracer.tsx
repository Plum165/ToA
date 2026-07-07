import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

export default function WarshallTracer() {
  const [step, setStep] = useState(0); // 0 (R0) to 4 (R4)
  const size = 4;

  // Initial Adjacency Matrix (1-based: 1->2, 2->3, 4->1)
  const R0 = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
  ];

  // Precompute matrices R(0) to R(4)
  const getMatrixForStep = (kStep: number) => {
    let R = R0.map((r) => [...r]);
    const history = [R.map((r) => [...r])];

    for (let k = 0; k < kStep; k++) {
      let nextR = R.map((r) => [...r]);
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if (R[i][j] === 0 && R[i][k] && R[k][j]) {
            nextR[i][j] = 1;
          }
        }
      }
      R = nextR;
      history.push(R.map((r) => [...r]));
    }
    return history[kStep];
  };

  const currentMatrix = getMatrixForStep(step);
  const previousMatrix = step > 0 ? getMatrixForStep(step - 1) : R0;

  // Graph nodes positions
  const nodes = [
    { id: 1, cx: 150, cy: 30 },
    { id: 2, cx: 250, cy: 60 },
    { id: 3, cx: 150, cy: 90 },
    { id: 4, cx: 50, cy: 60 },
  ];

  // Help log messages based on steps
  const getStepLog = () => {
    switch (step) {
      case 0:
        return 'Initial Adjacency Matrix R^{(0)}. Only direct, single-hop edges are recorded in the system.';
      case 1:
        return 'k = 1: Checking paths via Node 1. Since we can go 4 → 1 and 1 → 2, we establish a new transitive path: 4 → 2 (recorded as a shortcut in green).';
      case 2:
        return 'k = 2: Checking paths via Node 2. We can go 1 → 2 and 2 → 3, forming 1 → 3. Also, since we had 4 → 2, we can now do 4 → 2 → 3, establishing 4 → 3!';
      case 3:
        return 'k = 3: Checking paths via Node 3. No new paths can be established because Node 3 is a dead-end with no outgoing edges.';
      case 4:
        return 'k = 4: Checking paths via Node 4. Final closure R^{(4)} is reached. Transitive connectivity is fully mapped out.';
      default:
        return '';
    }
  };

  return (
    <div className="glass p-5 rounded-xl border border-white/5 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h4 className="font-bold text-base text-accent">Warshall's Step Tracer</h4>
          <p className="text-xs opacity-75">Observe Transitive Closure matrix updates step by step.</p>
        </div>
        <span className="k-badge">Current k = {step}</span>
      </div>

      {/* SVG graph */}
      <div className="bg-black/20 p-4 rounded-lg flex justify-center">
        <svg viewBox="0 0 300 120" className="w-full max-w-sm h-36">
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="16" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 Z" fill="rgba(255,255,255,0.7)" />
            </marker>
            <marker id="arrow-new" markerWidth="6" markerHeight="6" refX="16" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 Z" fill="var(--accent)" />
            </marker>
          </defs>

          {/* Render directed edges */}
          {/* Node 1 -> 2 */}
          <line x1="150" y1="30" x2="250" y2="60" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.4" markerEnd="url(#arrow)" />
          {/* Node 2 -> 3 */}
          <line x1="250" y1="60" x2="150" y2="90" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.4" markerEnd="url(#arrow)" />
          {/* Node 4 -> 1 */}
          <line x1="50" y1="60" x2="150" y2="30" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.4" markerEnd="url(#arrow)" />

          {/* Transitive shortcuts rendered based on active step */}
          {step >= 1 && (
            <path
              d="M 50 60 Q 150 15 250 60"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeDasharray="4,2"
              markerEnd="url(#arrow-new)"
            />
          )}
          {step >= 2 && (
            <>
              <path
                d="M 150 30 Q 200 60 150 90"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="4,2"
                markerEnd="url(#arrow-new)"
              />
              <path
                d="M 50 60 Q 150 105 150 90"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="4,2"
                markerEnd="url(#arrow-new)"
              />
            </>
          )}

          {/* Nodes */}
          {nodes.map((node) => {
            const isK = node.id === step;
            return (
              <g key={node.id}>
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r="14"
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
                  fontSize="11"
                  fontWeight="bold"
                >
                  {node.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Grid Matrix Table */}
      <div className="bg-black/10 p-4 rounded-lg">
        <h5 className="text-xs uppercase font-mono text-gray-400 mb-3 text-center">
          R<sup>({step})</sup> Matrix state
        </h5>
        
        <div className="grid grid-cols-5 text-center font-mono text-xs gap-1 max-w-xs mx-auto">
          {/* Header Row */}
          <div className="text-gray-500 font-bold">i/j</div>
          {[1, 2, 3, 4].map((j) => (
            <div key={`h-col-${j}`} className={`text-gray-400 font-bold py-1 ${step > 0 && j === step ? 'text-accent border-b-2 border-accent' : ''}`}>
              {j}
            </div>
          ))}

          {/* Rows */}
          {[1, 2, 3, 4].map((i) => (
            <g key={`row-group-${i}`} className="contents">
              {/* Row index label */}
              <div className={`text-gray-400 font-bold py-2 flex items-center justify-center ${step > 0 && i === step ? 'text-accent border-r-2 border-accent' : ''}`}>
                {i}
              </div>
              
              {/* Cells */}
              {[1, 2, 3, 4].map((j) => {
                const val = currentMatrix[i - 1][j - 1];
                const prevVal = previousMatrix[i - 1][j - 1];
                const isNew = val === 1 && prevVal === 0;

                // Style logic
                let cellClass = 'py-2 rounded bg-white/5 border border-white/5 transition-all duration-300';
                if (isNew) {
                  cellClass += ' new-edge-pulse';
                } else if (val === 1) {
                  cellClass += ' text-accent font-bold bg-accent/10 border-accent/25';
                } else {
                  cellClass += ' opacity-50';
                }

                // If k matches either row or col, emphasize matching coordinates (except when cell is empty/new)
                if (step > 0 && !isNew) {
                  if (i === step) cellClass += ' bg-indigo-500/10 border-indigo-500/20';
                  if (j === step) cellClass += ' border-teal-500/20';
                }

                return (
                  <div key={`cell-${i}-${j}`} className={cellClass}>
                    {val}
                  </div>
                );
              })}
            </g>
          ))}
        </div>
      </div>

      {/* Explanation Log */}
      <div className="bg-white/5 p-4 rounded-lg text-xs md:text-sm leading-relaxed border-l-2 border-accent font-sans">
        <strong>Trace Logic:</strong> {getStepLog()}
      </div>

      {/* Control Buttons */}
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
