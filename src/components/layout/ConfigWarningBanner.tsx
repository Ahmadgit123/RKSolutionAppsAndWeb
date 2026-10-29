import React, { useState } from 'react';
import { AlertCircle, X, ExternalLink } from 'lucide-react';
import { isPlaceholderWhatsAppNumber } from '../../utils/whatsapp';
import { siteConfig } from '../../config/siteConfig';

export const ConfigWarningBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const isPlaceholder = isPlaceholderWhatsAppNumber();

  if (!isPlaceholder || dismissed) {
    return null;
  }

  return (
    <div className="bg-amber-950/70 border-b border-amber-500/30 text-amber-200 px-4 py-2 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Owner Setup Note:</strong> WhatsApp number is currently set to placeholder (<code>{siteConfig.contact.whatsappNumber}</code>). Update <code>VITE_WHATSAPP_NUMBER</code> in <code>.env</code> with your real phone number before launching Instagram ads.
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-amber-300 hover:text-white p-1 rounded transition-colors"
          aria-label="Dismiss setup notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
