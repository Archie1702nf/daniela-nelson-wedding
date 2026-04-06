import Section from './Section';
import { weddingData } from '../constants';

type RecommendationItem = {
  name: string;
  mapsUrl: string;
  type?: string;
  area?: string;
  note?: string;
};

// ── Shared ────────────────────────────────────────────────────────────────────

function SubsectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <p className="text-[10px] tracking-[0.22em] uppercase text-[#696F32] flex-shrink-0">{title}</p>
      <div className="flex-1 h-px bg-[#AF9983]/30" />
    </div>
  );
}

// ── Estilistas: Instagram pill chips ──────────────────────────────────────────
// Flowing wrap of compact chips — feels like a curated social reference list.

function StylistChip({ item }: { item: RecommendationItem }) {
  return (
    <a
      href={item.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-[#AF9983]/40 px-3.5 py-2 text-[11px] tracking-[0.1em] text-[#2C2420]/55 hover:border-[#65232D] hover:text-[#65232D] transition-colors group"
    >
      {/* Instagram outline icon */}
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
      {item.name}
    </a>
  );
}

// ── Restaurants: editorial cards ──────────────────────────────────────────────
// Name + area prominent on first line, cuisine type subdued, italic note at base.

function RestaurantCard({ item }: { item: RecommendationItem }) {
  return (
    <a
      href={item.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-[#AF9983]/30 bg-white/30 px-5 py-5 hover:border-[#65232D]/50 hover:bg-white/50 transition-colors"
    >
      <div className="flex justify-between items-start gap-2 mb-1">
        <p className="font-serif text-[17px] text-[#65232D] leading-tight">{item.name}</p>
        <span className="text-[#AF9983]/40 group-hover:text-[#65232D] transition-colors text-xs flex-shrink-0 mt-1">↗</span>
      </div>

      {item.area && (
        <p className="text-[9px] tracking-[0.18em] uppercase text-[#696F32]/70 mb-1">{item.area}</p>
      )}

      {item.type && (
        <p className="text-[10px] tracking-[0.06em] text-[#2C2420]/40">{item.type}</p>
      )}

      {item.note && (
        <p className="text-[11px] text-[#2C2420]/40 leading-snug mt-2 pt-2 border-t border-[#AF9983]/15 italic">
          {item.note}
        </p>
      )}
    </a>
  );
}

// ── Places: numbered editorial list ───────────────────────────────────────────
// Large muted index number left, name + area right, type below — clean and scannable.

function PlaceRow({ item, index }: { item: RecommendationItem; index: number }) {
  return (
    <a
      href={item.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-5 py-4 border-b border-[#AF9983]/20 last:border-b-0 hover:opacity-75 transition-opacity"
    >
      <span className="font-serif text-3xl text-[#65232D]/15 leading-none w-8 flex-shrink-0 select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline gap-3">
          <p className="font-serif text-base text-[#65232D]">{item.name}</p>
          {item.area && (
            <p className="text-[9px] tracking-[0.18em] uppercase text-[#AF9983] flex-shrink-0">{item.area}</p>
          )}
        </div>
        {item.type && (
          <p className="text-[10px] tracking-[0.06em] text-[#2C2420]/40 mt-0.5">{item.type}</p>
        )}
      </div>
      <span className="text-[#AF9983]/40 group-hover:text-[#65232D] transition-colors text-xs flex-shrink-0 mt-1">↗</span>
    </a>
  );
}

// ── Escapadas: feature cards ───────────────────────────────────────────────────
// Name large and editorial, area as a distance tag, note with breathing room.

function EscapeCard({ item }: { item: RecommendationItem }) {
  return (
    <a
      href={item.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-between items-start gap-4 border border-[#AF9983]/30 bg-white/30 px-6 py-5 hover:border-[#65232D]/50 hover:bg-white/50 transition-colors"
    >
      <div className="flex-1">
        <div className="flex items-baseline gap-3 mb-1.5">
          <p className="font-serif text-xl text-[#65232D] leading-tight">{item.name}</p>
          {item.area && (
            <span className="text-[9px] tracking-[0.18em] uppercase text-[#696F32]/70 border border-[#696F32]/30 px-2 py-0.5 flex-shrink-0">
              {item.area}
            </span>
          )}
        </div>
        {item.type && (
          <p className="text-[10px] tracking-[0.06em] text-[#2C2420]/40 mb-0">{item.type}</p>
        )}
        {item.note && (
          <p className="text-xs text-[#2C2420]/50 leading-relaxed mt-3">{item.note}</p>
        )}
      </div>
      <span className="text-[#AF9983]/40 group-hover:text-[#65232D] transition-colors text-sm flex-shrink-0 mt-0.5">↗</span>
    </a>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function Recommendations() {
  const { recommendations } = weddingData;
  const { stylist, restaurants, places, escapes } = recommendations;

  return (
    <Section title="Recomendaciones" id="recommendations">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm md:text-base text-[#2C2420]/65 leading-relaxed text-center mb-14">
          {recommendations.intro}
        </p>

        <div className="space-y-12">

          {/* Estilistas — pill chips */}
          <div>
            <SubsectionHeader title={stylist.title} />
            <div className="flex flex-wrap gap-2">
              {stylist.items.map((item) => (
                <StylistChip key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Restaurantes — editorial cards */}
          <div>
            <SubsectionHeader title={restaurants.title} />
            {restaurants.intro && (
              <p className="text-sm text-[#2C2420]/50 mb-5">{restaurants.intro}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {restaurants.items.map((item) => (
                <RestaurantCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Lugares — numbered list */}
          <div>
            <SubsectionHeader title={places.title} />
            <div>
              {places.items.map((item, i) => (
                <PlaceRow key={item.name} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Escapadas — feature cards */}
          <div>
            <SubsectionHeader title={escapes.title} />
            {escapes.intro && (
              <p className="text-sm text-[#2C2420]/50 mb-5">{escapes.intro}</p>
            )}
            <div className="space-y-3">
              {escapes.items.map((item) => (
                <EscapeCard key={item.name} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
