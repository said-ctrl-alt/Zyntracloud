import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactHref } from '../src/js/utils/contact.js';

test('el contacto sin configurar no genera un destino ficticio', () => {
  for (const email of ['', '  ', null, undefined]) {
    assert.equal(createContactHref(email, 'Proyecto'), null);
  }
});

test('genera un mailto para un destinatario confirmado y codifica el asunto', () => {
  assert.equal(
    createContactHref(' equipo+web@example.com ', 'Proyecto cloud & software'),
    'mailto:equipo+web@example.com?subject=Proyecto%20cloud%20%26%20software',
  );
});

test('rechaza parámetros, cabeceras, múltiples destinatarios y esquemas', () => {
  for (const email of [
    'test@example.com?bcc=another@example.com',
    'test@example.com\r\nBcc:another@example.com',
    'test%0d%0a@example.com',
    'one@example.com,two@example.com',
    'javascript:alert(1)',
    'mailto:test@example.com',
    'test#fragment@example.com',
  ]) assert.equal(createContactHref(email, 'Proyecto'), null, email);
});

test('rechaza direcciones incompletas o con puntos vacíos', () => {
  for (const email of ['hola', 'hola@', 'hola@local', '.hola@example.com', 'hola..web@example.com', 'hola.@example.com', 'hola@example..com']) {
    assert.equal(createContactHref(email, 'Proyecto'), null, email);
  }
});

test('acepta subdominios y funciona sin asunto', () => {
  assert.equal(createContactHref('equipo@cloud.example.com'), 'mailto:equipo@cloud.example.com?subject=');
});
