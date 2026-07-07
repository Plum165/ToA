import React, { useState } from 'react';

export default function ComplexityChart() {
  const [hoverX, setHoverX] = useState<number | null>(null);

  // Plot dimensions
  const width = 500;
  const height = 300;
  const padding = 40;

  // Chart coordinates calculation
  const xScale = (n: number) => padding + (n / 100) * (width - 2 * padding);
  const yScale = (ops: number) => height - padding - (ops / 100) * (height - 2 * padding);

  // Generate SVG Path for functions
  const generatePath = (fn: (n: number) => number) => {
    let d = '';
    for (let n = 1; n <= 100; n += 2) {
      const val = Math.min(100, Math.max(0, fn(n)));
      const x = xScale(n);
      const y = yScale(val);
      if (n === 1) d += `M ${x} ${y}`;
      else d += ` L ${x} ${y}`;
    }
    return d;
  };

  // Complexities definitions
  const curves = [
    { name: 'O(1) Constant', color: '#10b981', strokeDash: '0', fn: () => 10 },
    { name: 'O(log n) Logarithmic', color: '#06b6d4', strokeDash: '4,4', fn: (n: number) => Math.log2(n) * 12 },
    { name: 'O(n) Linear', color: '#3b82f6', strokeDash: '0', fn: (n: number) => n },
    { name: 'O(n log n) Linearithmic', color: '#6366f1', strokeDash: '6,4', fn: (n: number) => n * Math.log2(n) * 0.15 },
    { name: 'O(n²) Quadratic', color: '#f59e0b', strokeDash: '0', fn: (n: number) => (n * n) * 0.012 },
    { name: 'O(2ⁿ) Exponential', color: '#ef4444', strokeDash: '2,2', fn: (n: number) => Math.pow(1.08, n) * 4 },
  ];

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    // Map SVG coordinates back to n [1..100]
    const n = Math.round(((x - padding) / (width - 2 * padding)) * 100);
    if (n >= 1 && n <= 100) {
      setHoverX(n);
    } else {
      setHoverX(null);
    }
  };

  return (
    <div className="glass p-5 rounded-xl border border-white/5 space-y-4 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <h4 className="font-bold text-base text-accent">Asymptotic Growth Plot</h4>
          <p className="text-xs opacity-75">Interactive curve comparison of operations vs input size ($n$).</p>
        </div>
        {hoverX !== null && (
          <div className="bg-white/10 px-3 py-1 rounded text-xs font-mono">
            Input <span className="text-accent font-bold">n = {hoverX}</span>
          </div>
        )}
      </div>

      <div className="relative w-full aspect-[5/3] max-h-[300px]">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoverX(null)}
          id="complexity-curves-svg"
        >
          {/* Grid lines */}
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          
          {/* Y-axis increments */}
          <line x1={padding - 5} y1={yScale(50)} x2={padding} y2={yScale(50)} stroke="rgba(255,255,255,0.3)" />
          <text x={padding - 12} y={yScale(50) + 4} fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">50</text>
          
          <line x1={padding - 5} y1={yScale(100)} x2={padding} y2={yScale(100)} stroke="rgba(255,255,255,0.3)" />
          <text x={padding - 12} y={yScale(100) + 4} fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">100</text>
          
          {/* X-axis increments */}
          <line x1={xScale(50)} y1={height - padding} x2={xScale(50)} y2={height - padding + 5} stroke="rgba(255,255,255,0.3)" />
          <text x={xScale(50)} y={height - padding + 16} fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">50</text>
          
          <line x1={xScale(100)} y1={height - padding} x2={xScale(100)} y2={height - padding + 5} stroke="rgba(255,255,255,0.3)" />
          <text x={xScale(100)} y={height - padding + 16} fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">100</text>

          {/* Plot curves */}
          {curves.map((curve) => (
            <path
              key={curve.name}
              d={generatePath(curve.fn)}
              fill="none"
              stroke={curve.color}
              strokeWidth="2.5"
              strokeDasharray={curve.strokeDash}
              className="transition-all duration-300 hover:stroke-[3.5px]"
            />
          ))}

          {/* Live tracing line & probes */}
          {hoverX !== null && (
            <>
              {/* Vertical tracer line */}
              <line
                x1={xScale(hoverX)}
                y1={padding}
                x2={xScale(hoverX)}
                y2={height - padding}
                stroke="rgba(255,255,255,0.3)"
                strokeDasharray="2,2"
                strokeWidth="1.5"
              />
              {/* Intersection nodes */}
              {curves.map((curve) => {
                const val = Math.min(100, Math.max(0, curve.fn(hoverX)));
                return (
                  <circle
                    key={`probe-${curve.name}`}
                    cx={xScale(hoverX)}
                    cy={yScale(val)}
                    r="4"
                    fill={curve.color}
                    stroke="#000"
                    strokeWidth="1"
                  />
                );
              })}
            </>
          )}

          {/* Title labels */}
          <text x={width / 2} y={height - 6} fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">Input scale (n)</text>
          <text x="12" y={height / 2} fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle" transform={`rotate(-90 12 ${height / 2})`}>Operations</text>
        </svg>
      </div>

      {/* Grid Legend */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 bg-black/10 rounded-lg">
        {curves.map((curve) => {
          let opsVal = '';
          if (hoverX !== null) {
            const raw = curve.fn(hoverX);
            opsVal = `: ${Math.round(raw)}`;
          }
          return (
            <div key={curve.name} className="flex items-center gap-2 text-xs">
              <span className="w-3 h-0.5 inline-block" style={{ backgroundColor: curve.color, borderTop: `1.5px solid ${curve.color}` }} />
              <span className="font-medium text-gray-300 truncate" title={curve.name}>
                {curve.name.split(' ')[0]} {opsVal}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
