"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function WhackABug() {
  const [isOpen, setIsOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [activeBugIndex, setActiveBugIndex] = useState(null);

  const timerRef = useRef(null);
  const bugTimerRef = useRef(null);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setGameStarted(true);
    setActiveBugIndex(Math.floor(Math.random() * 16));
  };

  const endGame = useCallback(() => {
    setGameOver(true);
    setGameStarted(false);
    setActiveBugIndex(null);
    clearInterval(timerRef.current);
    clearInterval(bugTimerRef.current);
  }, []);

  const handleBugClick = (index, e) => {
    e.stopPropagation();
    if (!gameStarted || gameOver) return;
    if (index === activeBugIndex) {
      setScore((s) => s + 1);
      setActiveBugIndex(null); // hide immediately
      
      // Reschedule next bug faster if clicked
      clearInterval(bugTimerRef.current);
      setTimeout(() => {
        if (gameStarted && !gameOver) {
          setActiveBugIndex(Math.floor(Math.random() * 16));
          bugTimerRef.current = setInterval(() => {
            setActiveBugIndex(Math.floor(Math.random() * 16));
          }, 800);
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (gameStarted && !gameOver) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      bugTimerRef.current = setInterval(() => {
        setActiveBugIndex(Math.floor(Math.random() * 16));
      }, 800);
    }

    return () => {
      clearInterval(timerRef.current);
      clearInterval(bugTimerRef.current);
    };
  }, [gameStarted, gameOver, endGame]);

  // Ensure cleanup on modal close
  useEffect(() => {
    if (!isOpen) {
      setGameStarted(false);
      setGameOver(false);
      clearInterval(timerRef.current);
      clearInterval(bugTimerRef.current);
    }
  }, [isOpen]);

  const healthPercentage = (timeLeft / 30) * 100;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-14 h-14 flex flex-col items-center justify-center gap-1 font-headline uppercase tracking-tighter font-bold text-[10px] cursor-pointer transition-transform duration-100 text-stone-600 hover:bg-stone-100 hover:translate-y-0.5 active:translate-y-1"
      >
        <span className="text-xl">🐛</span>
        <span>DEBUG</span>
      </button>

      {isOpen && (
        <>
          <div 
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9998 }}
            className="bg-black/80 backdrop-blur-sm" 
          />
          <div 
            style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(700px, 90vw)', height: 'min(600px, 85vh)', overflowY: 'auto', padding: '40px 32px 32px 32px', zIndex: 9999, borderRadius: '0px' }}
            className="bg-stone-200 border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(40,40,40,1)] flex flex-col gap-6 relative custom-scrollbar"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-stone-700 text-white flex items-center justify-center hover:bg-red-700 active:translate-y-0.5 transition-all duration-100 cursor-pointer voxel-button-shadow"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex flex-col gap-2 pt-2">
              <h2 className="font-headline font-black text-2xl text-stone-800 uppercase flex items-center gap-2">
                🐛 Whack-A-Bug
              </h2>
              <div className="flex justify-between font-headline font-bold uppercase text-sm">
                <span className="text-stone-600 tracking-wider">BUGS FIXED: {score}</span>
                <span className="text-stone-600 tracking-wider">TIME: {timeLeft}s</span>
              </div>
              
              {/* Draining Health/Time bar */}
              <div className="w-full h-4 bg-stone-300 pixel-border overflow-hidden">
                <div
                  className="h-full transition-all duration-1000 ease-linear shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.2)]"
                  style={{
                    width: `${healthPercentage}%`,
                    backgroundColor: healthPercentage > 50 ? "#4caf50" : healthPercentage > 20 ? "#facc15" : "#ba1a1a",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative pixel-border bg-stone-800 p-2 w-full aspect-square max-h-[400px] max-w-[400px]">
                <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-full">
                  {[...Array(16)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-[#4d362e] border-t-4 border-[#006e1c] cursor-crosshair overflow-hidden relative flex items-center justify-center shadow-[inset_0px_6px_0px_0px_rgba(76,175,80,0.2)]"
                      // onClick to miss (just click ground)
                    >
                      <div
                        onClick={(e) => handleBugClick(index, e)}
                        className={`text-4xl sm:text-5xl md:text-6xl absolute transition-transform duration-100 select-none ${
                          activeBugIndex === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        }`}
                      >
                        🐛
                      </div>
                    </div>
                  ))}
                </div>
                
                {!gameStarted && !gameOver && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 gap-4">
                    <p className="text-white font-headline text-center max-w-[200px] mb-4">
                      Squash as many bugs as you can in 30 seconds!
                    </p>
                    <button
                      onClick={startGame}
                      className="px-6 py-3 bg-green-600 text-white font-headline font-bold uppercase voxel-button-shadow pixel-border hover:bg-green-500"
                    >
                      START GAME
                    </button>
                  </div>
                )}

                {gameOver && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 gap-6">
                    <div className="flex flex-col items-center gap-2">
                       <span className="text-secondary font-headline font-bold text-sm uppercase">SESSION COMPLETE</span>
                       <span className="text-green-400 font-headline font-black text-2xl uppercase text-center leading-none">
                         {score} BUGS<br/>SQUASHED
                       </span>
                    </div>
                    <button
                      onClick={startGame}
                      className="px-6 py-3 bg-stone-700 text-white font-headline font-bold uppercase voxel-button-shadow pixel-border hover:bg-stone-600 mt-2"
                    >
                      PLAY AGAIN
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
