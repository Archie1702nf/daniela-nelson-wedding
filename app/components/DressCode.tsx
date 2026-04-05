import Section from './Section';
import { weddingData } from '../constants';
import Image from 'next/image';

export default function DressCode() {
  const pinterestUrl = weddingData.dressCode.pinterestLink;
  const hasPinterestLink =
    typeof pinterestUrl === 'string' && pinterestUrl.startsWith('http');

  return (
    <Section
      title={weddingData.dressCode.title}
      id="dresscode"
      className="bg-gradient-to-b from-[#E8E3DD] to-[#AF9983]/8"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Main description */}
        <p className="text-sm md:text-base text-[#2C2420]/70 leading-relaxed text-center max-w-md">
          {weddingData.dressCode.description}
        </p>

        <Image
          src="/ChatGPT%20Image%205%20abr%202026%2C%2019_48_09.png"
          alt="Ilustración de dress code"
          width={160}
          height={160}
          className="object-contain w-full max-w-[160px]"
        />

        {/* Recommendations card */}
        <div className="w-full max-w-lg border border-[#AF9983]/30 rounded-sm bg-white/30 px-8 py-6 text-center">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#696F32] mb-3">
            Recomendaciones
          </p>
          <p className="text-sm text-[#2C2420]/65 leading-relaxed">
            {weddingData.dressCode.recommendations}
          </p>
        </div>

        {/* Sage green + white restriction */}
        <div className="w-full max-w-lg text-center space-y-5">
          <p className="text-sm text-[#2C2420]/70 leading-relaxed">
            {weddingData.dressCode.restriction}
          </p>

          {/* "No usar" swatches */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#65232D]/60">
              No usar
            </p>
            <div className="flex justify-center gap-6">
              {weddingData.dressCode.avoidColors.map((color) => (
                <div key={color.hex} className="flex flex-col items-center gap-2">
                  {/* Swatch with × overlay */}
                  <div className="relative w-9 h-9">
                    <div
                      className="w-9 h-9 rounded-full border border-[#AF9983]/50 shadow-sm opacity-60"
                      style={{ backgroundColor: color.hex }}
                      aria-hidden="true"
                    />
                    {/* Diagonal cross */}
                    <svg
                      viewBox="0 0 36 36"
                      className="absolute inset-0 w-full h-full"
                      aria-hidden="true"
                    >
                      <line x1="8" y1="8" x2="28" y2="28" stroke="#65232D" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="28" y1="8" x2="8" y2="28" stroke="#65232D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-[10px] text-[#2C2420]/35 tracking-wide">{color.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pinterest link — only rendered when a real URL is provided */}
        {hasPinterestLink && (
          <div className="text-center">
            <p className="text-xs text-[#2C2420]/50 mb-2">{weddingData.dressCode.inspiration}</p>
            <a
              href={pinterestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-[#696F32] hover:text-[#65232D] underline underline-offset-4 transition-colors"
            >
              Ver tablero en Pinterest →
            </a>
          </div>
        )}
      </div>
    </Section>
  );
}
