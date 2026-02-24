"use client";

import { useState, useEffect } from "react";

export function BootScreen() {
  const [isBooted, setIsBooted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    // Only show boot screen once per session
    const hasBooted = sessionStorage.getItem("apex-booted");
    if (hasBooted) {
      setDismissed(true);
      return;
    }

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 100);

    const bootTimer = setTimeout(() => {
      setIsBooted(true);
      sessionStorage.setItem("apex-booted", "1");
      setTimeout(() => setDismissed(true), 400);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearTimeout(bootTimer);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-emerald-500 px-6 transition-opacity duration-400 ${
        isBooted ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-12 h-12 mb-6 border border-emerald-500/30 flex items-center justify-center bg-emerald-500/5 animate-pulse mx-auto">
        <span className="text-emerald-500 font-mono font-black text-xl tracking-tighter">
          AI
        </span>
      </div>
      <p className="text-[10px] tracking-[0.4em] uppercase">
        SYSTEM ONLINE // {time}
      </p>
    </div>
  );
}
