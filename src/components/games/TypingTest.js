"use client";

import { useState, useEffect, useRef } from "react";

const SNIPPETS = [
  'const model = new Transformer(config);',
  'def train(model, optimizer, loss_fn):',
  'SELECT * FROM skills WHERE level > 80;',
  'git commit -m "fix: squashed another bug"',
  'npm run build && vercel --prod'
];

export default function TypingTest() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetText, setTargetText] = useState("");
  const [inputText, setInputText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  
  const inputRef = useRef(null);

  const initGame = () => {
    const randomSnippet = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
    setTargetText(randomSnippet);
    setInputText("");
    setStartTime(null);
    setEndTime(null);
    setIsFinished(false);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 100);
  };

  useEffect(() => {
    if (isOpen && !targetText) {
      initGame();
    }
  }, [isOpen, targetText]);

  const handleChange = (e) => {
    if (isFinished) return;
    const val = e.target.value;
    
    if (!startTime) {
      setStartTime(Date.now());
    }

    setInputText(val);

    if (val.length === targetText.length) {
      setEndTime(Date.now());
      setIsFinished(true);
    }
  };

  const calculateStats = () => {
    if (!startTime || !endTime) return { wpm: 0, accuracy: 0, time: 0, xp: 0 };
    
    const timeMs = endTime - startTime;
    const timeSeconds = timeMs / 1000;
    const timeMinutes = timeMs / 60000;
    
    let correctChars = 0;
    for (let i = 0; i < targetText.length; i++) {
      if (inputText[i] === targetText[i]) {
        correctChars++;
      }
    }
    
    // Standard WPM formula: (Characters / 5) / time in minutes
    // But since the snippets are very short, real WPM might be very fast or slow. We'll stick to standard math.
    const wordsTyped = (inputText.length / 5);
    const wpm = Math.round(wordsTyped / timeMinutes);
    const accuracy = Math.round((correctChars / targetText.length) * 100);
    const xp = wpm * 5;

    return {
      wpm: isNaN(wpm) || wpm === Infinity ? 0 : wpm,
      accuracy: isNaN(accuracy) ? 0 : accuracy,
      time: timeSeconds.toFixed(1),
      xp: isNaN(xp) ? 0 : xp
    };
  };

  const getCharColor = (char, index) => {
    if (index >= inputText.length) return "text-stone-400";
    if (char === inputText[index]) return "text-green-500 bg-green-500/10";
    return "text-red-500 bg-red-500/10 underline";
  };

  const stats = calculateStats();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-14 h-14 flex flex-col items-center justify-center gap-1 font-headline uppercase tracking-tighter font-bold text-[10px] cursor-pointer transition-transform duration-100 text-stone-600 hover:bg-stone-100 hover:translate-y-0.5 active:translate-y-1"
      >
        <span className="text-xl">⌨️</span>
        <span>TYPE//RUN</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-stone-200 border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(40,40,40,1)] p-6 max-w-2xl w-full flex flex-col gap-6 relative">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-4 right-4 w-8 h-8 bg-stone-700 text-white flex items-center justify-center hover:bg-red-700 active:translate-y-0.5 transition-all duration-100 cursor-pointer voxel-button-shadow"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <h2 className="font-headline font-black text-2xl text-stone-800 uppercase flex items-center gap-2">
              ⌨️ TYPE//RUN
            </h2>

            {!isFinished ? (
              <div className="flex flex-col gap-6">
                <div className="bg-stone-800 pixel-border p-6 font-mono text-xl leading-relaxed tracking-wide font-bold break-all">
                  {targetText.split("").map((char, i) => (
                    <span key={i} className={getCharColor(char, i)}>
                      {char}
                    </span>
                  ))}
                  {/* Blinking cursor effect at the current position */}
                  <span className="animate-pulse bg-stone-400 opacity-50 w-2 h-6 inline-block align-middle ml-1 -mt-1"></span>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="type-input" className="font-headline font-bold uppercase text-xs text-stone-500">
                    Terminal Input
                  </label>
                  <input
                    ref={inputRef}
                    id="type-input"
                    type="text"
                    value={inputText}
                    onChange={handleChange}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    className="w-full bg-white pixel-border p-4 font-mono text-xl focus:outline-none focus:ring-4 focus:ring-green-600/30 text-stone-800"
                    placeholder="Start typing to begin timer..."
                  />
                </div>
              </div>
            ) : (
               <div className="flex flex-col items-center gap-6 p-4">
                  <div className="bg-stone-800 w-full pixel-border p-6 flex flex-col items-center gap-4 text-center">
                    <h3 className="text-secondary font-headline font-bold text-lg uppercase tracking-widest">
                      QUEST COMPLETE — CODE RUNNER
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-4 w-full mt-2">
                      <div className="bg-stone-700 p-4 pixel-border flex-1 min-w-[120px]">
                        <div className="text-stone-400 font-headline text-xs uppercase mb-1">Speed</div>
                        <div className="text-white font-mono text-2xl font-bold flex items-center justify-center gap-2">
                          ⚡ {stats.wpm} <span className="text-sm">WPM</span>
                        </div>
                      </div>
                      <div className="bg-stone-700 p-4 pixel-border flex-1 min-w-[120px]">
                        <div className="text-stone-400 font-headline text-xs uppercase mb-1">Accuracy</div>
                        <div className="text-green-400 font-mono text-2xl font-bold flex items-center justify-center gap-2">
                          🎯 {stats.accuracy}%
                        </div>
                      </div>
                      <div className="bg-stone-700 p-4 pixel-border flex-1 min-w-[120px]">
                        <div className="text-stone-400 font-headline text-xs uppercase mb-1">Time</div>
                        <div className="text-white font-mono text-2xl font-bold flex items-center justify-center gap-2">
                          ⏱️ {stats.time}s
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t-4 border-stone-700 w-full">
                       <span className="text-green-400 font-headline font-black text-2xl uppercase">
                         +{stats.xp} XP EARNED
                       </span>
                    </div>
                  </div>

                  <button
                    onClick={initGame}
                    className="px-8 py-4 bg-green-600 text-white font-headline font-black uppercase tracking-widest voxel-button-shadow pixel-border hover:bg-green-500 w-full max-w-sm"
                  >
                    RETRY
                  </button>
               </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
