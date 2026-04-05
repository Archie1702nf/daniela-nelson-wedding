import Section from './Section';
import { weddingData } from '../constants';
import Image from 'next/image';

export default function Transport() {
  return (
    <Section
      title="Transporte"
      id="transport"
      className="bg-gradient-to-b from-[#E8E3DD] to-[#A3A868]/8"
    >
      <div className="flex flex-col items-center gap-8">
        <Image
          src="/bus.png"
          alt="Servicio de autobús"
          width={150}
          height={95}
          className="opacity-80"
        />

        <p className="text-sm md:text-base text-[#2C2420]/65 leading-relaxed text-center max-w-md">
          {weddingData.transport.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl text-center">
          {/* Recogida */}
          <div className="space-y-1">
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#696F32] mb-2">
              Recogida
            </p>
            <p className="font-serif text-2xl text-[#65232D]">
              {weddingData.transport.departureTime.replace(/ h$/, '')}
              <span className="font-sans text-lg"> h</span>
            </p>
            <p className="text-sm text-[#2C2420]/60">{weddingData.transport.pickupPoint}</p>
          </div>

          {/* Regreso */}
          <div className="space-y-1">
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#696F32] mb-2">
              Regreso
            </p>
            <p className="font-serif text-2xl text-[#65232D]">
              {weddingData.transport.returnTimes.map(t => t.replace(/ h$/, '')).join(' · ')}
              <span className="font-sans text-lg"> h</span>
            </p>
            <p className="text-sm text-[#2C2420]/60">{weddingData.transport.returnPoint}</p>
          </div>
        </div>

        <p className="text-xs text-[#2C2420]/40 text-center">
          Próximamente confirmaremos el punto exacto de recogida.
        </p>
      </div>
    </Section>
  );
}
