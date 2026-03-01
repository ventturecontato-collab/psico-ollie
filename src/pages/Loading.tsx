import { useState, useEffect } from 'react';
import Ollie from '../components/Ollie';
import { loadingMessages } from '../data/ollieMessages';

export default function Loading() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % loadingMessages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <Ollie size="lg" />

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-[#6c5ce7] rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <p
          key={messageIndex}
          className="text-[#a3a3a3] text-lg text-center animate-fade-in max-w-md"
        >
          {loadingMessages[messageIndex]}
        </p>
      </div>
    </div>
  );
}
