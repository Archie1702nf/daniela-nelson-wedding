'use client';

import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '#ceremony', label: 'Ceremonia' },
  { href: '#transport', label: 'Transporte' },
  { href: '#dresscode', label: 'Vestimenta' },
  { href: '#gifts', label: 'Regalo' },
  { href: '#recommendations', label: 'Madrid' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#E8E3DD]/95 backdrop-blur-sm z-20 border-b border-[#AF9983]/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/monogram.png"
            alt="Daniela & Nelson"
            width={34}
            height={34}
          />
          <span className="font-serif text-sm tracking-[0.2em] uppercase text-[#65232D]">
            D &amp; N
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xs tracking-[0.18em] uppercase text-[#2C2420]/70 hover:text-[#65232D] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span
            className={`block w-full h-px bg-[#65232D] transition-transform origin-center ${
              open ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-full h-px bg-[#65232D] transition-opacity ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-full h-px bg-[#65232D] transition-transform origin-center ${
              open ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav className="md:hidden border-t border-[#AF9983]/30 bg-[#E8E3DD]/98 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-xs tracking-[0.18em] uppercase text-[#2C2420]/70 hover:text-[#65232D] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
