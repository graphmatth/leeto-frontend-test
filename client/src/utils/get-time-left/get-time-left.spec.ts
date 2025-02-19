import { expect, test } from 'vitest';
import { getTimeLeft } from './index'; // Remplacez par le chemin correct

test('returns days left', () => {
  const closingDate = new Date();
  closingDate.setDate(closingDate.getDate() + 5); // 5 jours après aujourd'hui
  const formattedClosingDate = closingDate.toISOString();

  const result = getTimeLeft(formattedClosingDate);
  expect(result).toBe('Se cloture dans 5 jours');
});

test('returns months left', () => {
  const closingDate = new Date();
  closingDate.setMonth(closingDate.getMonth() + 5); // 5 mois après aujourd'hui
  const formattedClosingDate = closingDate.toISOString();

  const result = getTimeLeft(formattedClosingDate);
  expect(result).toBe('Se cloture dans 5 mois');
});

test('returns years left', () => {
  const closingDate = new Date();
  closingDate.setFullYear(closingDate.getFullYear() + 3); // 3 ans après aujourd'hui
  const formattedClosingDate = closingDate.toISOString();

  const result = getTimeLeft(formattedClosingDate);
  expect(result).toBe('Se cloture dans 3 ans');
});