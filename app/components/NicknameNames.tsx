'use client';

import { useState } from 'react';

function NicknameName({ realName, nickname }: { realName: string; nickname: string }) {
  const [revealed, setRevealed] = useState(false);
  // Spacer keeps layout stable regardless of which name is shown
  const spacer = realName.length >= nickname.length ? realName : nickname;

  return (
    <span className="inline-flex items-center gap-1">
      {/* Crossfade container */}
      <span className="relative inline-block group cursor-default">
        {/* Invisible spacer — holds width of the longer name */}
        <span className="invisible select-none" aria-hidden="true">
          {spacer}
        </span>

        {/* Real name — fades out on desktop hover or mobile reveal */}
        <span
          className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-0 ${
            revealed ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {realName}
        </span>

        {/* Nickname — fades in on desktop hover or mobile reveal */}
        <span
          className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-100 ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {nickname}
        </span>
      </span>

      {/* Mobile-only tap icon — hidden on desktop */}
      <button
        className="md:hidden inline-flex items-center justify-center w-4 h-4 -translate-y-1 text-[#AF9983]/30 active:text-[#AF9983]/70 transition-colors"
        onClick={() => setRevealed((v) => !v)}
        aria-label={`Ver apodo de ${realName}`}
      >
        <svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
          <path d="M4 0 L4.6 2.8 L7.6 2 L5.6 4 L7.6 6 L4.6 5.2 L4 8 L3.4 5.2 L0.4 6 L2.4 4 L0.4 2 L3.4 2.8 Z" />
        </svg>
      </button>
    </span>
  );
}

export default function NicknameNames() {
  return (
    <h2 className="font-script text-3xl md:text-[2.6rem] text-[#696F32] leading-tight mb-7">
      <NicknameName realName="Daniela" nickname="Nani" />
      {' & '}
      <NicknameName realName="Nelson" nickname="Archie" />
    </h2>
  );
}
