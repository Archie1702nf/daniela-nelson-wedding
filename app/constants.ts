// Wedding data constants — edit these values to customise the site
export const weddingData = {
  coupleNames: "Daniela & Nelson",
  weddingDate: "2026-10-09", // YYYY-MM-DD format for calculations
  weddingDateDisplay: "9 de octubre, 2026",
  heroTitle: "¡Nos casamos!",
  heroSubtitle: "Daniela & Nelson",
  heroText: "Nuestras historias se cruzaron para no separarse jamás. Queremos que nos acompañen a dar el \u201cSí, quiero\u201d",

  ceremony: {
    title: "La Ceremonia",
    location: "Iglesia de Santa María Magdalena",
    address: "Pl. Mayor, 3, 28180 Torrelaguna, Madrid",
    time: "17:00 h",
    mapsUrl: "https://maps.app.goo.gl/GXciasmtw2KDK6By7",
  },

  banquet: {
    title: "El Banquete",
    location: "Antigua Fábrica de Harinas",
    address: "Ctra. M-128, Km 1.3, 28189 Torremocha de Jarama, Madrid",
    time: "19:00 h",
    mapsUrl: "https://maps.google.com/?q=Ctra.+M-128,+Km+1.3,+28189+Torremocha+de+Jarama,+Madrid",
  },

  transport: {
    description: "Queremos que disfruten al máximo y se olviden del coche. Pondremos a su disposición un servicio de transporte.",
    pickupPoint: "Madrid Centro",
    returnPoint: "Madrid Centro",
    departureTime: "15:30 h",
    returnTimes: ["04:00 h"],
  },

  dressCode: {
    title: "Código de vestimenta",
    description: "Queremos verlos brillar. El dress code es formal.",
    inspiration: "Si necesitas ideas, puedes echar un vistazo a nuestro tablero de referencia en Pinterest aquí:",
    pinterestLink: "[Link a Pinterest]", // Replace with actual Pinterest link
    recommendations: "Para las invitadas, les recomendamos evitar tacones excesivamente finos ya que hay césped y traer algo de abrigo para la noche. Lo más importante es que se sientan cómodos para bailar toda la noche.",
    restriction: "Por favor, abstenerse de usar verde salvia.",
    avoidColors: [
      { hex: "#696F32", label: "Salvia oscuro" },
      { hex: "#A3A868", label: "Salvia" },
      { hex: "#C8CC90", label: "Salvia claro" },
      { hex: "#FFFFFF", label: "Blanco" },
    ],
  },

  gifts: {
    title: "Regalos",
    description: "¿Qué mejor regalo que compartir este día con quienes más queremos? Aún así, si quisieran ayudarnos a seguir escribiendo nuestra historia, les dejamos nuestros datos.",
    transferencia: {
      titular: "Daniela Jaspe Mijares",
      iban: "ES5601820915140201573447",
    },
    bizum: {
      number: "+34 627152648",
      name: "Daniela Jaspe Mijares",
    },
  },

  recommendations: {
    intro: "Hemos reunido algunos de nuestros favoritos para quienes quieran disfrutar un poco más de Madrid.",

    stylist: {
      title: "Estilistas",
      intro: null as string | null,
      placeholder: null as string | null,
      items: [
        { name: "@rrojasduran",        mapsUrl: "https://www.instagram.com/rrojasduran/" },
        { name: "@carlosgarciabeauty", mapsUrl: "https://www.instagram.com/carlosgarciabeauty/" },
        { name: "@byorlandodelgado",   mapsUrl: "https://www.instagram.com/byorlandodelgado/" },
        { name: "@mafebeauty",         mapsUrl: "https://www.instagram.com/mafebeauty/" },
        { name: "@rubartellibeauty",   mapsUrl: "https://www.instagram.com/rubartellibeauty/" },
        { name: "@palomabarbaa",       mapsUrl: "https://www.instagram.com/palomabarbaa/" },
        { name: "@robertoramosmakeup", mapsUrl: "https://www.instagram.com/robertoramosmakeup/" },
        { name: "@risabellaa_",        mapsUrl: "https://www.instagram.com/risabellaa_/" },
        { name: "@juliomatamoros_",    mapsUrl: "https://www.instagram.com/juliomatamoros_/" },
        { name: "@jorge_matamoros",    mapsUrl: "https://www.instagram.com/jorge_matamoros/" },
      ] as Array<{ name: string; mapsUrl: string; type?: string; area?: string; note?: string }>,
    },

    restaurants: {
      title: "Restaurantes",
      intro: "Estos son algunos de nuestros favoritos." as string | null,
      placeholder: null as string | null,
      items: [
        {
          name: "Robata",
          mapsUrl: "https://maps.google.com/?q=Robata+Calle+Lagasca+Madrid",
          type: "Japonesa contemporánea",
          area: "Salamanca",
          note: "Parrilla robata y ambiente elegante.",
        },
        {
          name: "Filandón",
          mapsUrl: "https://maps.google.com/?q=Filand%C3%B3n+El+Pardo+Madrid",
          type: "Mediterránea · producto · parrilla",
          area: "El Pardo",
          note: "Ideal para disfrutar de buen producto en un entorno especial.",
        },
        {
          name: "Aranjuez Steak House",
          mapsUrl: "https://maps.google.com/?q=Aranjuez+Steak+House+Madrid",
          type: "Carnes · parrilla",
          area: "Cuzco",
          note: "Un pedacito de Caracas en España.",
        },
        {
          name: "Bakan",
          mapsUrl: "https://maps.google.com/?q=Bakan+restaurante+Madrid",
          type: "Mexicana",
          area: "Salamanca",
          note: "Cocina mexicana con mucha personalidad.",
        },
        {
          name: "Fismuler",
          mapsUrl: "https://maps.google.com/?q=Fismuler+Madrid",
          type: "Cocina de autor · producto",
          area: "Chamberí",
          note: "Muy famoso por su tarta de queso.",
        },
        {
          name: "Numa Pompilio",
          mapsUrl: "https://maps.google.com/?q=Numa+Pompilio+Madrid",
          type: "Italiana",
          area: "Salamanca",
          note: "Un espacio espectacular con cocina italiana refinada.",
        },
      ] as Array<{ name: string; mapsUrl: string; type?: string; area?: string; note?: string }>,
    },

    places: {
      title: "Lugares para visitar",
      intro: null as string | null,
      placeholder: null as string | null,
      items: [
        {
          name: "Museo del Prado",
          mapsUrl: "https://maps.google.com/?q=Museo+del+Prado+Madrid",
          type: "Museo de arte",
          area: "Retiro",
          note: "Uno de los grandes museos de arte del mundo.",
        },
        {
          name: "Parque El Retiro",
          mapsUrl: "https://maps.google.com/?q=Parque+El+Retiro+Madrid",
          type: "Parque",
          area: "Retiro",
          note: "El parque más emblemático de Madrid.",
        },
        {
          name: "Plaza Mayor",
          mapsUrl: "https://maps.google.com/?q=Plaza+Mayor+Madrid",
          type: "Plaza histórica",
          area: "Centro",
          note: "Corazón histórico de la ciudad.",
        },
        {
          name: "Palacio Real",
          mapsUrl: "https://maps.google.com/?q=Palacio+Real+Madrid",
          type: "Monumento",
          area: "Centro",
          note: "El palacio real más grande de Europa occidental.",
        },
        {
          name: "Museo Reina Sofía",
          mapsUrl: "https://maps.google.com/?q=Museo+Reina+Sof%C3%ADa+Madrid",
          type: "Arte contemporáneo",
          area: "Atocha",
          note: "Hogar del Guernica de Picasso.",
        },
        {
          name: "Mercado de San Miguel",
          mapsUrl: "https://maps.google.com/?q=Mercado+de+San+Miguel+Madrid",
          type: "Mercado gastronómico",
          area: "Centro",
          note: "Perfecto para tapas y gastronomía madrileña.",
        },
      ] as Array<{ name: string; mapsUrl: string; type?: string; area?: string; note?: string }>,
    },

    escapes: {
      title: "Escapadas cerca de la ceremonia",
      intro: "Segovia, Ávila y Patones están a menos de dos horas de Madrid y muy cerca de la iglesia. Un plan perfecto para aprovechar el viaje." as string | null,
      placeholder: null as string | null,
      items: [
        {
          name: "Segovia",
          mapsUrl: "https://maps.google.com/?q=Segovia+Espa%C3%B1a",
          type: "Ciudad histórica · Patrimonio UNESCO",
          area: "1h desde Madrid",
          note: "Acueducto romano, Alcázar medieval y cochinillo. Imprescindible.",
        },
        {
          name: "Ávila",
          mapsUrl: "https://maps.google.com/?q=%C3%81vila+Espa%C3%B1a",
          type: "Ciudad amurallada · Patrimonio UNESCO",
          area: "1h 30min desde Madrid",
          note: "La muralla medieval mejor conservada de Europa.",
        },
        {
          name: "Patones de Arriba",
          mapsUrl: "https://maps.google.com/?q=Patones+de+Arriba+Madrid",
          type: "Pueblo medieval de pizarra",
          area: "Muy cerca de la ceremonia",
          note: "Un pueblo con mucho encanto, a pocos minutos de Torrelaguna.",
        },
      ] as Array<{ name: string; mapsUrl: string; type?: string; area?: string; note?: string }>,
    },
  },
};

// Color palette
export const colors = {
  background: "#E8E3DD",
  accent1: "#AF9983",
  accent2: "#696F32", // Olive green — main accent
  accent3: "#65232D",
  accent4: "#A3A868", // Light olive
  accent5: "#804F5A",
  accent6: "#AA9283",
};
