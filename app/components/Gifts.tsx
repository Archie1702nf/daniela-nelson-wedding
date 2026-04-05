import Section from './Section';
import { weddingData } from '../constants';

export default function Gifts() {
  return (
    <Section title={weddingData.gifts.title} id="gifts">
      <div className="flex flex-col items-center gap-8 max-w-md mx-auto text-center">
        <p className="text-sm md:text-base text-[#2C2420]/65 leading-relaxed">
          {weddingData.gifts.description}
        </p>

        <div className="w-full border border-[#696F32]/25 bg-white/30 px-8 py-8 space-y-6">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#696F32] mb-2">
              Titulares
            </p>
            <p className="font-serif text-xl text-[#65232D]">{weddingData.gifts.holders}</p>
          </div>

          <div className="w-10 h-px bg-[#AF9983]/40 mx-auto" />

          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#696F32] mb-2">
              IBAN
            </p>
            <p className="font-mono text-base tracking-wider text-[#2C2420]/70">
              {weddingData.gifts.iban}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
