import Section from './Section';
import { weddingData } from '../constants';

export default function Gifts() {
  const { transferencia, bizum } = weddingData.gifts;

  return (
    <Section title={weddingData.gifts.title} id="gifts">
      <div className="flex flex-col items-center gap-8 max-w-md mx-auto text-center">
        <p className="text-sm md:text-base text-[#2C2420]/65 leading-relaxed">
          {weddingData.gifts.description}
        </p>

        <div className="w-full border border-[#696F32]/25 bg-white/30 px-8 py-8 space-y-6">
          {/* Transferencia */}
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#696F32] mb-4">
              Transferencia
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#2C2420]/40 mb-1">Titular</p>
                <p className="font-serif text-base text-[#65232D]">{transferencia.titular}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#2C2420]/40 mb-1">IBAN</p>
                <p className="font-mono text-sm tracking-wider text-[#2C2420]/70">
                  {transferencia.iban}
                </p>
              </div>
            </div>
          </div>

          <div className="w-10 h-px bg-[#AF9983]/40 mx-auto" />

          {/* Bizum */}
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#696F32] mb-4">
              Bizum
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#2C2420]/40 mb-1">Titular</p>
                <p className="font-serif text-base text-[#65232D]">{bizum.name}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#2C2420]/40 mb-1">Teléfono</p>
                <p className="font-mono text-sm tracking-wider text-[#2C2420]/70">{bizum.number}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
