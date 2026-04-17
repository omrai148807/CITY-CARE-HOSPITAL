import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#1DA851] hover:scale-105 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16.982 11.443c-.499 -.5 -1.258 -.5 -1.756 0l-1.144 1.143c-.22 .22 -.567 .22 -.787 0c-1.34 -1.34 -2.484 -2.484 -3.434 -3.434c-.22 -.22 -.22 -.567 0 -.787l1.143 -1.144c.5 -.5 .5 -1.257 0 -1.756l-2.286 -2.286c-.5 -.5 -1.257 -.5 -1.756 0l-1.143 1.143c-.88 .88 -1.14 2.14 -.78 3.34c.88 2.94 2.68 5.44 5.38 8.14c2.7 2.7 5.2 4.5 8.14 5.38c1.2 .36 2.46 .1 3.34 -.78l1.143 -1.143c.5 -.5 .5 -1.257 0 -1.756l-2.286 -2.286z" />
        <path d="M12 2c5.523 0 10 4.477 10 10c0 1.764 -.456 3.423 -1.26 4.87l1.218 4.446a1 1 0 0 1 -1.213 1.213l-4.446 -1.218a9.96 9.96 0 0 1 -4.299 .989c-5.523 0 -10 -4.477 -10 -10s4.477 -10 10 -10zm0 2a8 8 0 1 0 3.86 15.015l.176 -.093l3.14 .86l-.86 -3.14l.093 -.176a8 8 0 0 0 -6.409 -12.466z" />
      </svg>
    </a>
  );
}
