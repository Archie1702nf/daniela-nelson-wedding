import Countdown from './Countdown';
import AddToCalendar from './AddToCalendar';
import NicknameNames from './NicknameNames';
import { weddingData } from '../constants';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-20 text-center relative overflow-hidden bg-[#E8E3DD]"
    >
      {/* Watercolor background — decorative, hidden from screen readers */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/wedding_watercolor_transparent.png"
          alt=""
          fill
          className="object-contain object-center opacity-[0.18]"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto">
        {/* Monogram */}
        <div className="mb-10">
          <Image
            src="/MONOGRAMA CON FECHA-40.png"
            alt="Monograma Daniela & Nelson"
            width={190}
            height={190}
            className="mx-auto opacity-90"
            priority
          />
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-4xl md:text-6xl uppercase tracking-[0.18em] text-[#65232D] leading-none mb-5">
          {weddingData.heroTitle}
        </h1>

        {/* Names in script */}
        <NicknameNames />

        {/* Date rule */}
        <div className="flex items-center gap-5 mb-7">
          <div className="flex-1 h-px bg-[#AF9983]/60 max-w-[60px]" />
          <p className="text-xs tracking-[0.22em] uppercase text-[#2C2420]/80">
            {weddingData.weddingDateDisplay}
          </p>
          <div className="flex-1 h-px bg-[#AF9983]/60 max-w-[60px]" />
        </div>

        {/* Hero text */}
        <p className="text-sm md:text-base text-[#2C2420]/65 leading-relaxed max-w-sm">
          {weddingData.heroText}
        </p>

        {/* Countdown */}
        <div className="mt-14 w-full">
          <Countdown targetDate={weddingData.weddingDate} />
        </div>

        {/* Add to calendar */}
        <AddToCalendar />
      </div>
    </section>
  );
}
