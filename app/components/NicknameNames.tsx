function NicknameName({ realName, nickname }: { realName: string; nickname: string }) {
  const spacer = realName.length >= nickname.length ? realName : nickname;

  return (
    <span className="relative inline-block group cursor-default">
      {/* Mobile: ghost nickname sitting above the name, always visible at low opacity */}
      <span className="md:hidden absolute -top-5 left-1/2 -translate-x-1/2 font-sans text-[9px] tracking-[0.2em] uppercase text-[#AF9983] opacity-25 whitespace-nowrap pointer-events-none select-none">
        {nickname}
      </span>

      {/* Mobile: real name rendered normally */}
      <span className="md:hidden">{realName}</span>

      {/* Desktop: invisible spacer holds the width of the longer name */}
      <span className="hidden md:inline invisible select-none" aria-hidden="true">
        {spacer}
      </span>

      {/* Desktop: real name — fades out on hover */}
      <span className="hidden md:flex absolute inset-0 justify-center items-center transition-opacity duration-300 group-hover:opacity-0">
        {realName}
      </span>

      {/* Desktop: nickname — fades in on hover */}
      <span className="hidden md:flex absolute inset-0 justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        {nickname}
      </span>
    </span>
  );
}

export default function NicknameNames() {
  return (
    <h2 className="font-script text-3xl md:text-[2.6rem] text-[#696F32] leading-tight mb-7">
      <NicknameName realName="Daniela" nickname="Nani" />
      {' & '}
      <NicknameName realName="Nelson" nickname="Archie" />
    </h2>
  );
}
