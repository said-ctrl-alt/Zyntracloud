/** Solo acepta un destinatario de correo sencillo, sin parámetros ni cabeceras. */
export function createContactHref(email, subject) {
  if (typeof email !== 'string') return null;
  const address = email.trim();
  if (!/^[a-zA-Z0-9.!#$%&'*+/=_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(address)) return null;
  const [localPart] = address.split('@');
  if (localPart.startsWith('.') || localPart.endsWith('.') || localPart.includes('..') || localPart.length > 64) return null;
  // '%' permitiría introducir saltos codificados y '#' truncaría el URI.
  if (/[\r\n%#]/.test(address) || address.length > 254) return null;
  return `mailto:${address}?subject=${encodeURIComponent(subject ?? '')}`;
}
