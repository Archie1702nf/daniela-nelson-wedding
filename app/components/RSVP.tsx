'use client';

import { useState } from 'react';
import Section from './Section';
import { weddingData } from '../constants';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    attendance: '',
    guests: '1',
    transport: '',
    dietary: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with Formspree or backend
    console.log('RSVP submitted:', formData);
    alert('¡Gracias por confirmar! (Funcionalidad completa próximamente)');
  };

  const inputClass =
    'w-full border-b border-[#AF9983]/60 bg-transparent py-2.5 text-sm text-[#2C2420] focus:outline-none focus:border-[#65232D] transition-colors placeholder:text-[#2C2420]/30';
  const labelClass =
    'block text-[10px] tracking-[0.18em] uppercase text-[#696F32] mb-1.5';

  return (
    <Section
      title={weddingData.rsvp.title}
      id="rsvp"
      className="bg-gradient-to-b from-[#E8E3DD] to-[#65232D]/5"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Description */}
        <div className="text-center max-w-md">
          <p className="text-sm md:text-base text-[#2C2420]/65 leading-relaxed">
            {weddingData.rsvp.description}
          </p>
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#696F32] mt-3">
            Fecha límite: {weddingData.rsvp.deadline}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white/35 border border-white/60 px-8 py-10 space-y-8"
        >
          <div>
            <label htmlFor="rsvp-name" className={labelClass}>
              {weddingData.rsvp.fields.name}
            </label>
            <input
              id="rsvp-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="rsvp-contact" className={labelClass}>
              {weddingData.rsvp.fields.contact}
            </label>
            <input
              id="rsvp-contact"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="rsvp-attendance" className={labelClass}>
              {weddingData.rsvp.fields.attendance}
            </label>
            <select
              id="rsvp-attendance"
              name="attendance"
              value={formData.attendance}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Seleccionar…</option>
              {weddingData.rsvp.options.attendance.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="rsvp-guests" className={labelClass}>
              {weddingData.rsvp.fields.guests}
            </label>
            <select
              id="rsvp-guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={inputClass}
            >
              {weddingData.rsvp.options.guests.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="rsvp-transport" className={labelClass}>
              {weddingData.rsvp.fields.transport}
            </label>
            <select
              id="rsvp-transport"
              name="transport"
              value={formData.transport}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Seleccionar…</option>
              {weddingData.rsvp.options.transport.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="rsvp-dietary" className={labelClass}>
              {weddingData.rsvp.fields.dietary}
            </label>
            <textarea
              id="rsvp-dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              rows={2}
              className={`${inputClass} resize-none`}
              placeholder="Alergias, intolerancias, preferencias…"
            />
          </div>

          <div>
            <label htmlFor="rsvp-notes" className={labelClass}>
              {weddingData.rsvp.fields.notes}
            </label>
            <textarea
              id="rsvp-notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={2}
              className={`${inputClass} resize-none`}
              placeholder="Cualquier nota adicional…"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#65232D] text-[#E8E3DD] text-[11px] tracking-[0.22em] uppercase hover:bg-[#804F5A] transition-colors"
          >
            Confirmar asistencia
          </button>
        </form>
      </div>
    </Section>
  );
}
