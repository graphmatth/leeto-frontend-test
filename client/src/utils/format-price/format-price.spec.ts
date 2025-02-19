import { expect, test } from 'vitest'
import { formatPrice } from './index'

test('formats number with comma', () => {
  expect(formatPrice(3.11)).toBe(`3,11`)
})

test('rounds number to two decimal', () => {
  expect(formatPrice(3.11116756756765)).toBe(`3,11`)
})

test('removes zeros', () => {
  expect(formatPrice(3.00001111666454)).toBe(`3`)
})