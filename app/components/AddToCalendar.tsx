import { weddingData } from '../constants';

const googleCalendarUrl = () => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Boda Daniela & Nelson',
    dates: '20261009T170000/20261010T040000',
    location: `${weddingData.ceremony.location}, ${weddingData.ceremony.address}`,
    details: `Ceremonia: ${weddingData.ceremony.location} a las 17:00 h.\nRecepción: ${weddingData.banquet.location} a las 19:00 h.`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export default function AddToCalendar() {
  return (
    <a
      href={googleCalendarUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 inline-flex items-center gap-2 border border-[#AF9983]/50 px-6 py-2.5 text-[10px] tracking-[0.22em] uppercase text-[#2C2420]/60 hover:border-[#65232D] hover:text-[#65232D] transition-colors"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <rect x="0.5" y="1.5" width="11" height="10" rx="1" stroke="currentColor" strokeWidth="1"/>
        <line x1="3" y1="0.5" x2="3" y2="3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <line x1="9" y1="0.5" x2="9" y2="3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <line x1="0.5" y1="4.5" x2="11.5" y2="4.5" stroke="currentColor" strokeWidth="1"/>
      </svg>
      Añadir al calendario
    </a>
  );
}
