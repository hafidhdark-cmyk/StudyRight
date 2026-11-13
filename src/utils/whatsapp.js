/**
 * Formats international phone number and pre-filled message for WhatsApp click-to-chat
 */
export function buildWhatsAppLink(phoneNumber, message = '') {
  const cleanNumber = (phoneNumber || '').replace(/[^0-9]/g, '');
  if (!message) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
