"use client";

import { useState, useEffect, useRef } from "react";
import GameLayout from "./GameLayout";

const SNIPPETS = [
  'const model = new Transformer(config);',
  'def train(model, optimizer, loss_fn):',
  'SELECT * FROM skills WHERE level > 80;',
  'git commit -m "fix: squashed another bug"',
  'npm run build && vercel --prod'
];

export default function TypingTest() {
  const [targetText, setTargetText] = useState("");
  const [inputText, setInputText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [xp, setXp] = useState(0);
  
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
    if (!targetText) {
      initGame();
    }
  }, [targetText]);

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
    if (!startTime || (!endTime && !isFinished)) return { wpm: 0, accuracy: 0, time: 0, currentXp: 0 };
    
    const timeMs = (endTime || Date.now()) - startTime;
    const timeSeconds = timeMs / 1000;
    const timeMinutes = timeMs / 60000;
    
    let correctChars = 0;
    for (let i = 0; i < targetText.length; i++) {
      if (inputText[i] === targetText[i]) {
        correctChars++;
      }
    }
    
    const wordsTyped = (inputText.length / 5);
    const wpm = Math.round(wordsTyped / timeMinutes);
    const accuracy = Math.round((correctChars / targetText.length) * 100);
    const currentXp = wpm * 5;

    return {
      wpm: isNaN(wpm) || wpm === Infinity ? 0 : wpm,
      accuracy: isNaN(accuracy) ? 0 : accuracy,
      time: timeSeconds.toFixed(1),
      currentXp: isNaN(currentXp) ? 0 : currentXp
    };
  };

  useEffect(() => {
    if (isFinished) {
      const stats = calculateStats();
      setXp(prev => prev + stats.currentXp);
    }
  }, [isFinished]); // eslint-disable-line react-hooks/exhaustive-deps

  const getCharColor = (char, index) => {
    if (index >= inputText.length) return "text-stone-400";
    if (char === inputText[index]) return "text-green-400 bg-green-500/10";
    return "text-red-500 bg-red-500/10 underline";
  };

  const stats = calculateStats();

  return (
    <GameLayout 
      title="TYPE//RUN"
      themeColor="#0097A7"
      score={xp}
      hiScore={xp} // To simplify, max xp earned is high score
      level={1}
      speed={stats.wpm > 0 ? `${stats.wpm}WPM` : "0WPM"}
    >
      <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto items-center p-4">
        
        {!isFinished ? (
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-stone-900 border-4 border-[#0097A7] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] p-6 md:p-10 font-mono text-xl md:text-3xl leading-relaxed tracking-wide font-bold break-all min-h-[160px] flex items-center justify-center">
              <div>
                {targetText.split("").map((char, i) => (
                  <span key={i} className={getCharColor(char, i)}>
                    {char}
                  </span>
                ))}
                {/* Blinking cursor effect at the current position */}
                <span className="animate-pulse bg-stone-400 opacity-50 w-2 md:w-3 h-6 md:h-8 inline-block align-middle ml-1 -mt-1"></span>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-xl mx-auto">
              <label htmlFor="type-input" className="font-headline font-bold uppercase text-xs text-stone-500 text-center">
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
                className="w-full bg-white border-4 border-stone-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 font-mono text-xl text-center focus:outline-none focus:ring-4 focus:ring-[#0097A7]/30 text-stone-900"
                placeholder="Start typing..."
              />
            </div>
          </div>
        ) : (
           <div className="flex flex-col items-center gap-6 p-4 w-full max-w-2xl">
              <div className="bg-[#002f34] border-4 border-[#0097A7] w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] p-6 md:p-10 flex flex-col items-center gap-6 text-center">
                <h3 className="text-[#00e5ff] font-headline font-black text-2xl md:text-3xl uppercase tracking-widest drop-shadow-md">
                  ACCESS GRANTED
                </h3>
                
                <div className="flex flex-wrap justify-center gap-4 w-full">
                  <div className="bg-stone-900 p-4 border-2 border-[#0097A7] flex-1 min-w-[120px]">
                    <div className="text-stone-400 font-headline text-xs uppercase mb-1">Speed</div>
                    <div className="text-white font-mono text-2xl md:text-4xl font-bold flex items-center justify-center gap-2">
                      ⚡ {stats.wpm} <span className="text-sm">WPM</span>
                    </div>
                  </div>
                  <div className="bg-stone-900 p-4 border-2 border-[#006e1c] flex-1 min-w-[120px]">
                    <div className="text-stone-400 font-headline text-xs uppercase mb-1">Accuracy</div>
                    <div className="text-green-400 font-mono text-2xl md:text-4xl font-bold flex items-center justify-center gap-2">
                      🎯 {stats.accuracy}%
                    </div>
                  </div>
                  <div className="bg-stone-900 p-4 border-2 border-stone-700 flex-1 min-w-[120px]">
                    <div className="text-stone-400 font-headline text-xs uppercase mb-1">Time</div>
                    <div className="text-white font-mono text-2xl md:text-4xl font-bold flex items-center justify-center gap-2">
                      ⏱️ {stats.time}s
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 w-full">
                   <span className="text-[#00e5ff] font-headline font-black text-3xl uppercase drop-shadow-md">
                     +{stats.currentXp} XP EARNED
                   </span>
                </div>
              </div>

              <button
                onClick={initGame}
                className="px-8 py-4 bg-[#0097A7] text-white font-headline font-black text-xl uppercase tracking-widest voxel-button-shadow border-4 border-stone-800 hover:bg-[#00838f] w-full max-w-sm hover:-translate-y-1 active:translate-y-0 transition-transform mt-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                NEXT TERMINAL
              </button>
           </div>
        )}
      </div>
    </GameLayout>
  );
}
