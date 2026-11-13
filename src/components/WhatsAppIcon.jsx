import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Official WhatsApp vector glyph (speech bubble with telephone handset inside).
 * Uses react-icons FaWhatsapp for 100% brand fidelity.
 */
export default function WhatsAppIcon({
  className = 'w-5 h-5',
  color,
  'aria-label': ariaLabel,
  ...props
}) {
  return (
    <FaWhatsapp
      className={`inline-block shrink-0 ${className}`}
      style={color ? { color } : undefined}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? 'img' : 'presentation'}
      {...props}
    />
  );
}
