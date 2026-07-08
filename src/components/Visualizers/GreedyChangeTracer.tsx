import { useState, useEffect } from 'react';
import { ArrowRight, RotateCcw, Check, ShieldAlert, Sparkles } from 'lucide-react';

interface CoinSet {
  name: string;
  coins: number[];
  isCanonical: boolean;
  description: string;
}

const COIN_SETS: CoinSet[] = [
  {
    name: 'US Coins (Canonical)',
    coins: [25, 10, 5, 1],
    isCanonical: true,
    description: 'Greedy is guaranteed to find the optimal (minimum) number of coins.',
  },
  {
    name: 'Euro Cent (Canonical)',
    coins: [50, 20, 10, 5, 2, 1],
    isCanonical: true,
    description: 'Canonical system. Greedy choices lead to global optimality.',
  },
  {
    name: 'Alternative (Non-Canonical)',
    coins: [4, 3, 1],
    isCanonical: false,
    description: 'Greedy can fail! For example, making 6¢ with greedy yields three coins [4, 1, 1], but optimal DP is two coins [3, 3].',
  },
  {
    name: 'Stamp Set (Non-Canonical)',
    coins: [12, 5, 1],
    isCanonical: false,
    description: 'Greedy fails for amounts like 15¢ (greedy picks [12, 1, 1, 1] - 4 items; DP picks [5, 5, 5] - 3 items).',
  },
];

export default function GreedyChangeTracer() {
  const [selectedSetIdx, setSelectedSetIdx] = useState(0);
  const [amount, setAmount] = useState(34);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<any[]>([]);

  const activeSet = COIN_SETS[selectedSetIdx];

  // Helper to calculate DP (Optimal) solution
  const getOptimalSolution = (target: number, coins: number[]) => {
    const dp = Array(target + 1).fill(Infinity);
    const parent = Array(target + 1).fill(-1);
    dp[0] = 0;

    for (let i = 1; i <= target; i++) {
      for (let j = 0; j < coins.length; j++) {
        const coin = coins[j];
        if (i >= coin && dp[i - coin] + 1 < dp[i]) {
          dp[i] = dp[i - coin] + 1;
          parent[i] = coin;
        }
      }
    }

    if (dp[target] === Infinity) return [];
    const result: number[] = [];
    let curr = target;
    while (curr > 0) {
      const coin = parent[curr];
      result.push(coin);
      curr -= coin;
    }
    return result.sort((a, b) => b - a);
  };

  // Run the greedy algorithm and build trace steps
  useEffect(() => {
    const traceSteps: any[] = [];
    let rem = amount;
    const chosenCoins: number[] = [];
    const sortedCoins = [...activeSet.coins].sort((a, b) => b - a);

    traceSteps.push({
      type: 'start',
      remaining: rem,
      coins: [...chosenCoins],
      log: `Starting Greedy Change-making for ${amount}¢ using denominations [${sortedCoins.join(', ')}].`,
    });

    let safety = 0;
    while (rem > 0 && safety < 100) {
      safety++;
      // Find largest coin that fits
      let coinPicked = -1;
      const candidates = sortedCoins.map((coin) => ({
        value: coin,
        fits: coin <= rem,
      }));

      for (const coin of sortedCoins) {
        if (coin <= rem) {
          coinPicked = coin;
          break;
        }
      }

      if (coinPicked === -1) {
        traceSteps.push({
          type: 'failure',
          remaining: rem,
          coins: [...chosenCoins],
          candidates,
          log: `No suitable coin fits in the remaining amount of ${rem}¢. Greedy algorithm fails to find a solution!`,
        });
        break;
      }

      const count = Math.floor(rem / coinPicked);
      rem -= coinPicked;
      chosenCoins.push(coinPicked);

      traceSteps.push({
        type: 'pick',
        coin: coinPicked,
        remaining: rem,
        coins: [...chosenCoins],
        candidates,
        log: `Selected the largest fits-all coin ${coinPicked}¢. Remaining amount is now ${rem}¢.`,
      });
    }

    if (rem === 0) {
      traceSteps.push({
        type: 'success',
        remaining: 0,
        coins: [...chosenCoins],
        log: `Successfully made change! Selected coins: [${chosenCoins.join(', ')}] (${chosenCoins.length} total coins).`,
      });
    }

    setSteps(traceSteps);
    setCurrentStep(0);
  }, [amount, selectedSetIdx]);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  const currentTrace = steps[currentStep] || { remaining: amount, coins: [], log: '', type: 'start' };
  const optimalResult = getOptimalSolution(amount, activeSet.coins);

  return (
    <div className="glass p-5 rounded-xl border border-white/5 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h4 className="font-bold text-base text-accent flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Greedy Change Making Tracer
          </h4>
          <p className="text-xs opacity-75">Observe local greedy choices vs optimal globally calculated DP outcomes.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col">
            <label className="text-[10px] text-gray-400 uppercase font-bold mb-1">Coin Set:</label>
            <select
              value={selectedSetIdx}
              onChange={(e) => setSelectedSetIdx(parseInt(e.target.value))}
              className="bg-black/40 border border-white/10 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-accent"
            >
              {COIN_SETS.map((set, idx) => (
                <option key={idx} value={idx}>
                  {set.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] text-gray-400 uppercase font-bold mb-1">Target (Amount):</label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="1"
                max="99"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                className="w-24 accent-accent cursor-pointer"
              />
              <span className="text-xs font-mono font-bold bg-white/10 px-2 py-0.5 rounded text-accent w-10 text-center">
                {amount}¢
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Panel */}
      <div className="p-3.5 rounded-lg border text-xs bg-white/5 border-white/10 space-y-1">
        <span className="font-bold text-accent">Coin Rules:</span>
        <p className="opacity-85 text-[11px] leading-relaxed">{activeSet.description}</p>
      </div>

      {/* Grid: Left - Interactive steps, Right - Visual Coins Bag */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Step log & Stepper */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-black/30 p-4 rounded-xl border border-white/10 min-h-[140px] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-gray-400 font-mono">
                <span>Step {currentStep} of {steps.length - 1}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                  currentTrace.type === 'success' ? 'bg-green-500/20 text-green-400' :
                  currentTrace.type === 'failure' ? 'bg-red-500/20 text-red-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {currentTrace.type.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-100 font-sans leading-relaxed">{currentTrace.log}</p>
            </div>

            {/* Candidate evaluation visual if available */}
            {currentTrace.candidates && (
              <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-white/5">
                <span className="text-[10px] text-gray-400 font-mono">Evaluation:</span>
                {currentTrace.candidates.map((cand: any, idx: number) => (
                  <span
                    key={idx}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-mono border ${
                      cand.fits
                        ? 'bg-green-500/10 text-green-400 border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border-red-500/20 line-through'
                    }`}
                  >
                    {cand.value}¢ {cand.fits ? 'fits' : "doesn't fit"}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Stepper buttons */}
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
                Previous Step
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
        </div>

        {/* Visualizer Coins Area */}
        <div className="lg:col-span-5 flex flex-col justify-between p-4 bg-black/20 rounded-xl border border-white/10 min-h-[220px]">
          <div>
            <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center mb-3">
              Solution Bags
            </h5>
            <div className="space-y-4">
              {/* Greedy solution Bag */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium">Greedy Coins Selected:</span>
                  <span className="font-mono text-accent">{currentTrace.coins.length} coins</span>
                </div>
                <div className="bg-black/30 border border-white/5 rounded-lg p-2.5 min-h-[50px] flex flex-wrap gap-2 items-center">
                  {currentTrace.coins.map((coin: number, idx: number) => (
                    <span
                      key={idx}
                      className="w-8 h-8 rounded-full bg-yellow-500 text-black font-extrabold flex items-center justify-center text-xs shadow-md border-2 border-yellow-300"
                    >
                      {coin}
                    </span>
                  ))}
                  {currentTrace.coins.length === 0 && (
                    <span className="text-xs text-gray-500 italic">No coins collected yet...</span>
                  )}
                </div>
              </div>

              {/* Optimal Solution Comparison */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium">Optimal DP Solution:</span>
                  <span className="font-mono text-green-400">{optimalResult.length} coins</span>
                </div>
                <div className="bg-black/30 border border-white/5 rounded-lg p-2.5 min-h-[50px] flex flex-wrap gap-2 items-center">
                  {optimalResult.map((coin: number, idx: number) => (
                    <span
                      key={idx}
                      className="w-8 h-8 rounded-full bg-green-500 text-white font-extrabold flex items-center justify-center text-xs shadow-md border-2 border-green-300"
                    >
                      {coin}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Correctness indicators */}
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-2">
            {currentTrace.coins.length === optimalResult.length ? (
              <div className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
                <Check className="w-4 h-4" /> Greedy Matches Global Optimum
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-xs text-yellow-500 font-mono">
                <ShieldAlert className="w-4 h-4" /> Greedy is Suboptimal (DP is better)
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
