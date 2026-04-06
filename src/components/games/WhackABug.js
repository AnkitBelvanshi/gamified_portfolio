"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import GameLayout from "./GameLayout";

export default function WhackABug() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
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
      setScore((s) => {
        const newScore = s + 1;
        if (newScore > highScore) setHighScore(newScore);
        return newScore;
      });
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

  const healthPercentage = (timeLeft / 30) * 100;

  return (
    <GameLayout 
      title="BUG_SQUASH"
      themeColor="#D32F2F"
      score={score}
      hiScore={highScore}
      level={(score > 0 ? Math.floor(score / 10) + 1 : 1)}
      speed="1x"
    >
      <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between font-headline font-bold uppercase text-sm px-2">
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

        <div className="relative pixel-border bg-stone-800 p-2 w-full aspect-square shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] mx-auto max-h-[400px]">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-full">
            {[...Array(16)].map((_, index) => (
              <div
                key={index}
                className="bg-[#4d362e] border-t-4 border-[#006e1c] cursor-crosshair overflow-hidden relative flex items-center justify-center shadow-[inset_0px_6px_0px_0px_rgba(76,175,80,0.2)]"
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
              <p className="text-white font-headline text-center max-w-[200px] mb-4 drop-shadow-md">
                Squash as many bugs as you can in 30 seconds!
              </p>
              <button
                onClick={startGame}
                className="px-6 py-3 bg-red-600 text-white font-headline font-bold uppercase voxel-button-shadow pixel-border hover:bg-red-500 hover:-translate-y-1 active:translate-y-0 transition-transform"
              >
                START GAME
              </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 gap-6">
              <div className="flex flex-col items-center gap-2">
                 <span className="text-stone-300 font-headline font-bold text-sm uppercase">SESSION COMPLETE</span>
                 <span className="text-red-500 font-headline font-black text-3xl uppercase text-center leading-none">
                   {score} BUGS<br/>SQUASHED
                 </span>
              </div>
              <button
                onClick={startGame}
                className="px-6 py-3 bg-stone-700 text-white font-headline font-bold uppercase voxel-button-shadow pixel-border hover:bg-stone-600 hover:-translate-y-1 active:translate-y-0 transition-transform mt-2"
              >
                PLAY AGAIN
              </button>
            </div>
          )}
        </div>
      </div>
    </GameLayout>
  );
}
