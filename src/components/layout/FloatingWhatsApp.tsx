import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    trackWhatsAppClick('floating_button');
    window.open(getWhatsAppUrl({ source: 'floating_widget' }), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <button
        onClick={handleClick}
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm rounded-full shadow-lg shadow-emerald-950/60 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
        aria-label="Chat directly with developer on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="whitespace-nowrap font-semibold hidden sm:inline">Chat on WhatsApp</span>
        <span className="whitespace-nowrap font-semibold sm:hidden">WhatsApp</span>
      </button>
    </div>
  );
};
