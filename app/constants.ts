// Wedding data constants — edit these values to customise the site
export const weddingData = {
  coupleNames: "Daniela & Nelson",
  weddingDate: "2026-10-09", // YYYY-MM-DD format for calculations
  weddingDateDisplay: "9 de octubre de 2026",
  heroTitle: "¡Nos casamos!",
  heroSubtitle: "Daniela & Nelson",
  heroText: "Nuestras historias se cruzaron para no separarse jamás. Queremos que nos acompañen a dar el \u201cSí, quiero\u201d",

  ceremony: {
    title: "La Ceremonia",
    location: "Iglesia Santa María Magdalena",
    address: "Pl. Mayor, 3, 28180 Torrelaguna, Madrid",
    time: "17:00 h",
    mapsUrl: "https://maps.google.com/?q=Pl.+Mayor,+3,+28180+Torrelaguna,+Madrid",
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
    pickupPoint: "Madrid Centro (Por confirmar punto exacto)",
    returnPoint: "Madrid Centro (Por confirmar punto exacto)",
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
    // Colors to visually communicate the restriction — rendered with "no usar" treatment
    avoidColors: [
      { hex: "#696F32", label: "Salvia oscuro" },
      { hex: "#A3A868", label: "Salvia" },
      { hex: "#C8CC90", label: "Salvia claro" },
      { hex: "#FFFFFF", label: "Blanco" },
    ],
  },

  rsvp: {
    title: "Confirmación",
    description: "Tu presencia es nuestro mejor regalo. Por favor, confirma tu asistencia antes del 9 de septiembre.",
    deadline: "9 de septiembre",
    fields: {
      name: "Nombre",
      contact: "Email o teléfono",
      attendance: "Confirmación de asistencia",
      guests: "Pases asignados",
      transport: "¿Harás uso del servicio de transporte?",
      dietary: "Menú especial / alergias / intolerancias / preferencias",
      notes: "Notas adicionales",
    },
    options: {
      attendance: ["Sí, asistiré", "No, no podré asistir"],
      guests: ["1", "2", "3", "4", "5"],
      transport: ["Sí", "No"],
    },
  },

  gifts: {
    title: "El regalo",
    description: "¿Qué mejor regalo que compartir este día con quienes más queremos? Aún así, si quisieras ayudarnos a seguir escribiendo nuestra historia, te dejamos los datos bancarios.",
    iban: "ES00 0000 0000 0000 0000", // Replace with actual IBAN
    holders: "Daniela y Nelson",
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
