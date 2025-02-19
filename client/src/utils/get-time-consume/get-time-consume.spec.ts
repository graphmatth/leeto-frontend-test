import { expect, test } from 'vitest';
import { getTimeConsume } from './index'; // Remplacez par le chemin correct

test('returns days ago', () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - 5);
  const formattedEndDate = endDate.toISOString();

  const result = getTimeConsume(formattedEndDate);
  expect(result).toBe('Cloturée il y a 5 jours');
});

test('returns months agos', () => {
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() - 5);
  const formattedEndDate = endDate.toISOString();

  const result = getTimeConsume(formattedEndDate);
  expect(result).toBe('Cloturée il y a 5 mois');
});

test('returns years ago', () => {
  const endDate = new Date();
  endDate.setFullYear(endDate.getFullYear() - 3); // 3 ans avant aujourd'hui
  const formattedEndDate = endDate.toISOString();

  const result = getTimeConsume(formattedEndDate);
  expect(result).toBe('Cloturée il y a 3 ans');
});
