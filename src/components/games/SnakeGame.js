"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import GameLayout from "./GameLayout";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const GRID_SIZE = 20;

export default function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 10 });
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const canvasRef = useRef(null);

  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setDir({ x: 1, y: 0 });
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
    placeFood([{ x: 10, y: 10 }]);
  }, []);

  const placeFood = (currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // eslint-disable-next-line no-loop-func
      if (!currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)) {
        break;
      }
    }
    setFood(newFood);
  };

  const gameLoop = useCallback(() => {
    if (gameOver || !gameStarted) return;

    setSnake((prev) => {
      const head = prev[0];
      const newHead = { x: head.x + dir.x, y: head.y + dir.y };

      // Wall collision
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameOver(true);
        if (score > highScore) setHighScore(score);
        return prev;
      }

      // Self collision
      if (prev.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        if (score > highScore) setHighScore(score);
        return prev;
      }

      const newSnake = [newHead, ...prev];

      // Eat food
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((s) => s + 10);
        placeFood(newSnake);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [dir, food, gameOver, gameStarted, score, highScore]);

  useInterval(gameLoop, 100);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;
      // Prevent default scrolling for arrow keys if playing
      if (gameStarted && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          if (dir.y === 0) setDir({ x: 0, y: -1 });
          break;
        case "ArrowDown":
        case "s":
        case "S":
          if (dir.y === 0) setDir({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          if (dir.x === 0) setDir({ x: -1, y: 0 });
          break;
        case "ArrowRight":
        case "d":
        case "D":
          if (dir.x === 0) setDir({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dir, gameOver, gameStarted]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const cellWidth = width / GRID_SIZE;
    const cellHeight = height / GRID_SIZE;

    // Clear background
    ctx.fillStyle = "#faf9f9";
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = "#e9e8e8";
    ctx.lineWidth = 1;
    for (let i = 0; i <= width; i += cellWidth) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    for (let i = 0; i <= height; i += cellHeight) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }

    if (gameStarted || gameOver) {
      // Draw food
      ctx.fillStyle = "#87ceeb"; // Light blue / cyan glowy center
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#4caf50";
      ctx.beginPath();
      ctx.arc(
        food.x * cellWidth + cellWidth / 2,
        food.y * cellHeight + cellHeight / 2,
        cellWidth / 2 - 2,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw snake
      ctx.fillStyle = "#4caf50";
      ctx.strokeStyle = "#003c0b";
      ctx.lineWidth = 2;
      snake.forEach((segment) => {
        ctx.fillRect(
          segment.x * cellWidth,
          segment.y * cellHeight,
          cellWidth,
          cellHeight
        );
        ctx.strokeRect(
          segment.x * cellWidth,
          segment.y * cellHeight,
          cellWidth,
          cellHeight
        );
      });
    }
  }, [snake, food, gameStarted, gameOver]);

  const handleDpadControl = (e, newDir, currentAxis) => {
    e.preventDefault();
    if (!gameStarted && !gameOver) resetGame();
    if (gameOver) return;
    // Only allow directional change if not already moving on that axis
    if (currentAxis === "y" && dir.y === 0) setDir(newDir);
    if (currentAxis === "x" && dir.x === 0) setDir(newDir);
  };

  return (
    <GameLayout 
      title="SNAKE.3D"
      themeColor="#4CAF50"
      score={score}
      hiScore={highScore}
      level={Math.floor(score / 50) + 1}
      speed="1x"
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
        
        <div className="relative pixel-border bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            className="w-[300px] h-[300px] max-w-full block bg-white"
          />
          
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-green-600 text-white font-headline font-bold uppercase voxel-button-shadow pixel-border hover:bg-green-500 hover:-translate-y-1 active:translate-y-0 transition-transform"
              >
                START GAME
              </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 gap-4">
              <div className="text-green-400 font-headline font-black text-2xl uppercase">
                GAME OVER
              </div>
              <div className="text-white font-headline font-bold uppercase">
                Score: {score}
              </div>
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-stone-700 text-white font-headline font-bold uppercase voxel-button-shadow pixel-border hover:bg-stone-600 hover:-translate-y-1 active:translate-y-0 transition-transform mt-2"
              >
                TRY AGAIN
              </button>
            </div>
          )}
        </div>

        {/* Mobile D-PAD */}
        <div className="flex flex-col items-center gap-2 md:hidden">
          <button
            onTouchStart={(e) => handleDpadControl(e, { x: 0, y: -1 }, "y")}
            className="w-16 h-16 bg-stone-800 border-4 border-green-600 text-white flex items-center justify-center text-2xl font-bold rounded-none voxel-button-shadow active:bg-stone-700 active:translate-y-1 transition-transform"
          >
            ▲
          </button>
          <div className="flex gap-2">
            <button
              onTouchStart={(e) => handleDpadControl(e, { x: -1, y: 0 }, "x")}
              className="w-16 h-16 bg-stone-800 border-4 border-green-600 text-white flex items-center justify-center text-2xl font-bold rounded-none voxel-button-shadow active:bg-stone-700 active:translate-y-1 transition-transform"
            >
              ◀
            </button>
            <button
              onTouchStart={(e) => handleDpadControl(e, { x: 0, y: 1 }, "y")}
              className="w-16 h-16 bg-stone-800 border-4 border-green-600 text-white flex items-center justify-center text-2xl font-bold rounded-none voxel-button-shadow active:bg-stone-700 active:translate-y-1 transition-transform"
            >
              ▼
            </button>
            <button
              onTouchStart={(e) => handleDpadControl(e, { x: 1, y: 0 }, "x")}
              className="w-16 h-16 bg-stone-800 border-4 border-green-600 text-white flex items-center justify-center text-2xl font-bold rounded-none voxel-button-shadow active:bg-stone-700 active:translate-y-1 transition-transform"
            >
              ▶
            </button>
          </div>
        </div>
        
        <p className="text-xs text-stone-500 font-body uppercase tracking-wider hidden md:block text-center mb-0 mt-auto">
          Use Arrow Keys or WASD to play
        </p>

      </div>
    </GameLayout>
  );
}
