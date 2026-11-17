// Eigene, schlichte Linien-Icons (SVG) für Touch-Buttons und Hinweise. Keine Emojis in der Oberfläche.
const svg = (d, extra = '') => `<svg viewBox="0 0 24 24" aria-hidden="true" ${extra}>${d}</svg>`;

export const ICONS = {
  // offene Hand: benutzen / aufheben / schließen
  use: svg('<path d="M8 12.5V6a1.4 1.4 0 0 1 2.8 0v5.5"/><path d="M10.8 11V4.4a1.4 1.4 0 0 1 2.8 0V11"/><path d="M13.6 11V5.6a1.4 1.4 0 0 1 2.8 0V12"/><path d="M16.4 9.4a1.4 1.4 0 0 1 2.8 0V15a6.6 6.6 0 0 1-6.6 6.6h-.9a6.6 6.6 0 0 1-5.3-2.7l-3-4.1a1.5 1.5 0 0 1 2.3-1.9L8 15"/>'),
  jump: svg('<path d="M12 18V5"/><path d="M6.5 10.5 12 5l5.5 5.5"/><path d="M5 21h14"/>'),
  crouch: svg('<path d="M12 3v12"/><path d="M6.5 9.5 12 15l5.5-5.5"/><path d="M5 20h14"/>'),
  // Glühbirne: Licht / Taschenlampe
  flash: svg('<path d="M9.2 18h5.6M10.2 21h3.6"/><path d="M12 3a6 6 0 0 0-3.7 10.7c.8.7 1.2 1.5 1.2 2.5h5c0-1 .4-1.8 1.2-2.5A6 6 0 0 0 12 3z"/>'),
  phone: svg('<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M10.8 18.5h2.4"/>'),
  map: svg('<path d="M9 4.5 3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5z"/><path d="M9 4.5v13M15 6.5v13"/>'),
  chat: svg('<path d="M4.5 5h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H10l-4.5 3.5V16h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>'),
  menu: svg('<path d="M4.5 7h15M4.5 12h15M4.5 17h15"/>'),
  close: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
  stick: svg('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/>'),
};
export const icon = (k) => ICONS[k] || '';
