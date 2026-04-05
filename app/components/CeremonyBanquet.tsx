import Section from './Section';
import { weddingData } from '../constants';
import Image from 'next/image';

interface TimelineEvent {
  label: string;
  time: string;
  location?: string;
  address?: string;
  mapsUrl?: string;
  image: string;
  imageAlt: string;
}

const events: TimelineEvent[] = [
  {
    label: 'Recogida',
    time: weddingData.transport.departureTime,
    location: weddingData.transport.pickupPoint,
    image: '/bus.png',
    imageAlt: 'Autobús',
  },
  {
    label: 'Ceremonia',
    time: weddingData.ceremony.time,
    location: weddingData.ceremony.location,
    address: weddingData.ceremony.address,
    mapsUrl: weddingData.ceremony.mapsUrl,
    image: '/church-image.jpg',
    imageAlt: 'Iglesia Santa María Magdalena',
  },
  {
    label: 'Recepción',
    time: weddingData.banquet.time,
    location: weddingData.banquet.location,
    address: weddingData.banquet.address,
    mapsUrl: weddingData.banquet.mapsUrl,
    image: '/RECEPCION.png',
    imageAlt: 'Antigua Fábrica de Harinas',
  },
  {
    label: 'Regreso',
    time: weddingData.transport.returnTimes[0],
    location: weddingData.transport.returnPoint,
    image: '/bus.png',
    imageAlt: 'Autobús',
  },
];

export default function CeremonyBanquet() {
  return (
    <Section title="Itinerario" id="ceremony">
      {/* ── Desktop: horizontal itinerary card ── */}
      <div className="hidden md:block">
        {/* Row 1: Illustrations */}
        <div className="grid grid-cols-4 gap-6 mb-4">
          {events.map((event) => (
            <div key={event.label} className="flex justify-center items-end h-36">
              <Image
                src={event.image}
                alt={event.imageAlt}
                width={120}
                height={120}
                className="object-contain max-h-32 w-auto"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Timeline — line + dots */}
        <div className="relative mb-6">
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px bg-[#696F32]/25 -translate-y-1/2" />
          <div className="grid grid-cols-4">
            {events.map((event) => (
              <div key={event.label} className="flex justify-center py-1.5">
                <div className="w-3 h-3 rounded-full bg-[#65232D] border-2 border-[#E8E3DD] relative z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Text */}
        <div className="grid grid-cols-4 gap-4 text-center">
          {events.map((event) => (
            <div key={event.label}>
              <p className="font-serif text-[#65232D] text-base mb-1">{event.label}</p>
              <p className="text-[#696F32] text-base font-medium mb-2">{event.time}</p>
              {event.location && (
                <p className="text-[#2C2420]/60 text-sm leading-snug">{event.location}</p>
              )}
              {event.address && (
                <p className="text-[#2C2420]/40 text-xs mt-1 leading-snug">{event.address}</p>
              )}
              {event.mapsUrl && (
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] tracking-[0.15em] uppercase text-[#696F32] hover:text-[#65232D] transition-colors mt-2"
                >
                  Ver en Maps →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: vertical timeline ── */}
      <div className="md:hidden">
        <div className="space-y-0">
          {events.map((event, i) => (
            <div key={event.label} className="flex gap-5 items-start">
              {/* Left: icon + connector */}
              <div className="flex flex-col items-center flex-shrink-0 w-16">
                <div className="w-16 h-16 rounded-full bg-white/50 border border-[#AF9983]/30 flex items-center justify-center">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
                {i < events.length - 1 && (
                  <div className="w-px flex-1 bg-[#696F32]/20 my-1 min-h-[24px]" />
                )}
              </div>

              {/* Right: text */}
              <div className="pt-3 pb-8">
                <p className="font-serif text-[#65232D] text-base leading-tight">{event.label}</p>
                <p className="text-[#696F32] text-base mt-0.5">{event.time}</p>
                {event.location && (
                  <p className="text-[#2C2420]/60 text-sm mt-1">{event.location}</p>
                )}
                {event.address && (
                  <p className="text-[#2C2420]/40 text-xs mt-0.5">{event.address}</p>
                )}
                {event.mapsUrl && (
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[10px] tracking-[0.15em] uppercase text-[#696F32] hover:text-[#65232D] transition-colors mt-1.5"
                  >
                    Ver en Maps →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
