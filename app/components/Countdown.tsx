'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // YYYY-MM-DD
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    };
    calculate();
    const timer = setInterval(calculate, 60000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
  ];

  return (
    <div className="flex items-center justify-center">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-center">
          {i > 0 && (
            <div className="w-px h-8 bg-[#AF9983]/50 mx-6 md:mx-10" />
          )}
          <div className="text-center min-w-[52px]">
            <p className="font-serif text-4xl md:text-5xl text-[#65232D] leading-none tabular-nums">
              {String(value).padStart(2, '0')}
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#AF9983] mt-2">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
