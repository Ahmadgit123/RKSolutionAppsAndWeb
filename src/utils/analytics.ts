/**
 * Safe analytics and conversion tracking utility.
 * Supports Google Analytics 4 (gtag) and Meta Pixel (fbq)
 * when configured via environment variables.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  // Safe console log in dev
  if (import.meta.env.DEV) {
    console.debug(`[Analytics Track] ${eventName}:`, params);
  }

  // Google Analytics 4
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch (e) {
      console.warn('GA tracking error:', e);
    }
  }

  // Meta Pixel (Facebook / Instagram Ads)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (eventName === 'generate_lead') {
        window.fbq('track', 'Lead', params);
      } else if (eventName === 'contact_click') {
        window.fbq('track', 'Contact', params);
      } else {
        window.fbq('trackCustom', eventName, params);
      }
    } catch (e) {
      console.warn('Meta Pixel tracking error:', e);
    }
  }
}

export function trackWhatsAppClick(location: string, details?: Record<string, unknown>) {
  trackEvent('whatsapp_click', {
    channel: 'whatsapp',
    location,
    ...details,
  });
  trackEvent('contact_click', { channel: 'whatsapp', location });
}

export function trackEmailClick(location: string) {
  trackEvent('email_click', {
    channel: 'email',
    location,
  });
  trackEvent('contact_click', { channel: 'email', location });
}

export function trackProjectEnquirySubmission(data: {
  service: string;
  budgetRange: string;
  contactMethod: string;
}) {
  trackEvent('generate_lead', {
    service: data.service,
    budget_range: data.budgetRange,
    preferred_channel: data.contactMethod,
    currency: 'INR',
  });
}
