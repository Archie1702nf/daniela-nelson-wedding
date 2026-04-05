interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ title, children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-20 w-full ${className}`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-center text-[#65232D] mb-3">
          {title}
        </h2>
        <div className="w-8 h-px bg-[#AF9983] mx-auto mb-12" />
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
