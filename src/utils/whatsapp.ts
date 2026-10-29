import { siteConfig } from '../config/siteConfig';

/**
 * Checks if the configured WhatsApp number is the default placeholder.
 */
export function isPlaceholderWhatsAppNumber(number?: string): boolean {
  const target = (number || siteConfig.contact.whatsappNumber).trim();
  return (
    !target ||
    target.includes('X') ||
    target.includes('x') ||
    target === '91XXXXXXXXXX' ||
    target.length < 10
  );
}

/**
 * Sanitizes phone number by removing any non-digit characters.
 */
export function sanitizePhoneNumber(number: string): string {
  return number.replace(/\D/g, '');
}

export interface WhatsAppMessageOptions {
  serviceName?: string;
  projectName?: string;
  packageName?: string;
  customMessage?: string;
  source?: string;
}

/**
 * Generates an encoded WhatsApp click-to-chat URL with a contextual prefilled message.
 */
export function getWhatsAppUrl(options: WhatsAppMessageOptions = {}): string {
  const rawNumber = siteConfig.contact.whatsappNumber;
  const sanitized = sanitizePhoneNumber(rawNumber);

  let message = 'Hello RK Solution, I am interested in your development services. I would like to discuss a project.';

  if (options.customMessage) {
    message = options.customMessage;
  } else if (options.projectName) {
    message = `Hello RK Solution, I viewed your project "${options.projectName}" on your website. I would like to discuss building something similar for my business.`;
  } else if (options.serviceName) {
    message = `Hello RK Solution, I am interested in your "${options.serviceName}" service. I would like to discuss requirements and get a quote.`;
  } else if (options.packageName) {
    message = `Hello RK Solution, I am interested in your "${options.packageName}" package. I would like to discuss my project requirements.`;
  }

  if (options.source) {
    message += ` (Ref: ${options.source})`;
  }

  // If number is a placeholder, still return a valid link structure, but the UI should show a configuration notice if needed
  const phone = isPlaceholderWhatsAppNumber(rawNumber) ? '919876543210' : sanitized;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
