import { useState } from 'react';
import { ArrowRight, RotateCcw, Backpack, Check, Info } from 'lucide-react';

interface Item {
  id: number;
  weight: number;
  value: number;
}

export default function KnapsackTracer() {
  const [capacity, setCapacity] = useState(5);
  const [currentItem, setCurrentItem] = useState(0); // 0 to 4 items

  const items: Item[] = [
    { id: 1, weight: 2, value: 12 },
    { id: 2, weight: 1, value: 10 },
    { id: 3, weight: 3, value: 20 },
    { id: 4, weight: 2, value: 15 },
  ];

  const maxItems = items.length;

  // Generate complete DP table V[i][j] based on the active capacity W
  const generateDPTable = (iBound: number) => {
    const V = Array.from({ length: maxItems + 1 }, () => Array(capacity + 1).fill(0));

    // Fill table up to the current item constraint row iBound
    for (let i = 1; i <= maxItems; i++) {
      const item = items[i - 1];
      for (let j = 0; j <= capacity; j++) {
        // If row is above the processed step boundary, keep as 0 (not computed yet)
        if (i > iBound) {
          V[i][j] = 0;
          continue;
        }

        if (j >= item.weight) {
          V[i][j] = Math.max(V[i - 1][j], item.value + V[i - 1][j - item.weight]);
        } else {
          V[i][j] = V[i - 1][j];
        }
      }
    }
    return V;
  };

  const V = generateDPTable(currentItem);

  // Compute backtracking path for items selected (only valid if table is fully solved, currentItem === 4)
  const getBacktrackPath = () => {
    if (currentItem < maxItems) return { selected: [], path: [] };

    const selected: number[] = [];
    const path: string[] = []; // stores "i-j" coords in path
    let j = capacity;

    for (let i = maxItems; i > 0; i--) {
      const item = items[i - 1];
      path.push(`${i}-${j}`);
      if (V[i][j] !== V[i - 1][j]) {
        selected.push(i); // Item i (1-based) is selected
        j -= item.weight;
      }
    }
    path.push(`0-${j}`); // final stop at 0 row
    return { selected, path };
  };

  const { selected: selectedItems, path: backtrackCells } = getBacktrackPath();

  const handleNext = () => {
    setCurrentItem((prev) => Math.min(maxItems, prev + 1));
  };

  const handlePrev = () => {
    setCurrentItem((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setCurrentItem(0);
  };

  const getStepLog = () => {
    if (currentItem === 0) {
      return 'Base Row (i = 0): No items are allowed yet. Therefore, the maximum possible value for any knapsack capacity is 0.';
    }
    if (currentItem === maxItems) {
      const itemsSelectedStr = selectedItems.length > 0 
        ? selectedItems.sort((a,b) => a - b).map(idx => `Item ${idx}`).join(', ')
        : 'none';
      return `Matrix fully constructed. Backtracking from V[4,${capacity}] = ${V[maxItems][capacity]} reveals that the optimal subset consists of: ${itemsSelectedStr}. (Total Value: $${V[maxItems][capacity]}, Weight used: ${capacity - parseInt(backtrackCells[backtrackCells.length-1].split('-')[1])}kg).`;
    }

    const item = items[currentItem - 1];
    return `Row i = ${currentItem}: Processing Item ${currentItem} (Weight: ${item.weight}kg, Value: $${item.value}). For each capacity column j, we check: if we can afford the item (j ≥ ${item.weight}), we choose the maximum of excluding it (value above) or including it (its value + leftover capacity value from previous row).`;
  };

  return (
    <div className="glass p-5 rounded-xl border border-white/5 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h4 className="font-bold text-base text-accent">0/1 Knapsack DP Tracer</h4>
          <p className="text-xs opacity-75">Configure capacity and step through the row-by-row tabulation.</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-gray-400">Capacity (W):</label>
          <input
            type="range"
            min="2"
            max="8"
            value={capacity}
            onChange={(e) => {
              setCapacity(parseInt(e.target.value));
              setCurrentItem(0); // reset stepper when capacity changes
            }}
            className="w-20 accent-accent cursor-pointer"
          />
          <span className="text-xs font-mono font-bold bg-white/10 px-2 py-0.5 rounded text-accent">
            {capacity}kg
          </span>
        </div>
      </div>

      {/* Items list card */}
      <div className="bg-black/25 p-3 rounded-lg border border-white/5">
        <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-3">
          Items Available
        </h5>
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          {items.map((item, idx) => {
            const isProcessing = idx + 1 === currentItem;
            const isSelected = selectedItems.includes(item.id);
            return (
              <div
                key={item.id}
                className={`p-2 rounded-lg border transition-all duration-300 ${
                  isProcessing
                    ? 'border-accent bg-accent/10 shadow-[0_0_8px_rgba(56,189,248,0.2)]'
                    : isSelected
                    ? 'border-green-500/40 bg-green-500/10'
                    : 'border-white/5 bg-white/5 opacity-70'
                }`}
              >
                <div className="font-bold text-gray-300">Item {item.id}</div>
                <div className="font-mono text-[11px] opacity-80">{item.weight}kg / ${item.value}</div>
                {isSelected && (
                  <div className="mt-1 flex items-center justify-center text-[10px] text-green-400 gap-0.5">
                    <Check className="w-3 h-3" /> Included
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* DP Matrix Layout */}
      <div className="bg-black/10 p-4 rounded-lg overflow-x-auto">
        <h5 className="text-xs uppercase font-mono text-gray-400 mb-3 text-center">
          DP Matrix state V[i, j]
        </h5>

        <div
          className="grid gap-1 text-center font-mono text-xs max-w-md mx-auto"
          style={{ gridTemplateColumns: `repeat(${capacity + 2}, minmax(32px, 1fr))` }}
        >
          {/* Header row capacities */}
          <div className="text-gray-500 font-bold py-1 border-b border-white/5">i/j</div>
          {Array.from({ length: capacity + 1 }).map((_, j) => (
            <div key={`col-hdr-${j}`} className="text-gray-500 font-bold py-1 border-b border-white/5">
              {j}
            </div>
          ))}

          {/* Rows representing items */}
          {Array.from({ length: maxItems + 1 }).map((_, i) => (
            <div key={`row-group-${i}`} className="contents">
              {/* Row index label */}
              <div className={`font-bold py-1.5 flex items-center justify-center ${i === currentItem ? 'text-accent border-r border-accent' : 'text-blue-300'}`}>
                {i}
              </div>

              {/* Capacities cells */}
              {Array.from({ length: capacity + 1 }).map((_, j) => {
                const val = V[i][j];
                const key = `${i}-${j}`;
                const isCurrentRow = i === currentItem;
                const isBacktrackCell = backtrackCells.includes(key);

                // Styling logic
                let cellClass = 'py-1.5 rounded transition-all duration-300 text-center font-bold ';

                if (isBacktrackCell) {
                  // Backtrack route styling
                  cellClass += ' bg-green-500/20 text-green-300 border border-green-500/40 shadow-[0_0_6px_rgba(74,222,128,0.2)]';
                } else if (isCurrentRow && i > 0 && val > 0) {
                  // Active computation styling
                  cellClass += ' bg-accent/20 text-yellow-300 border border-accent/30 scale-105';
                } else if (i > 0 && i <= currentItem) {
                  // Computed rows
                  cellClass += ' bg-white/5 text-slate-300 border border-white/5';
                } else {
                  // Uncomputed or base cases
                  cellClass += ' opacity-30 text-gray-500';
                }

                return (
                  <div key={`cell-${i}-${j}`} className={cellClass} title={`V[${i}, ${j}] = ${val}`}>
                    {val}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {currentItem === maxItems && (
          <p className="text-[10px] text-center text-green-400 font-mono mt-3 flex items-center justify-center gap-1">
            <Info className="w-3.5 h-3.5" /> Backtracking path highlighted in <span className="font-bold underline">green</span>.
          </p>
        )}
      </div>

      {/* Step Log Text */}
      <div className="bg-white/5 p-4 rounded-lg text-xs md:text-sm leading-relaxed border-l-2 border-accent font-sans">
        <strong>Trace Logic:</strong> {getStepLog()}
      </div>

      {/* Nav Controls */}
      <div className="flex gap-2 justify-center">
        <button
          onClick={handleReset}
          className="btn btn-ghost text-xs py-2 px-3"
          disabled={currentItem === 0}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
        <button
          onClick={handlePrev}
          className="btn btn-ghost text-xs py-2 px-4"
          disabled={currentItem === 0}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="btn btn-primary text-xs py-2 px-4"
          disabled={currentItem >= maxItems}
        >
          {currentItem === maxItems ? 'Completed!' : 'Next Item ▶'}
        </button>
      </div>
    </div>
  );
}
