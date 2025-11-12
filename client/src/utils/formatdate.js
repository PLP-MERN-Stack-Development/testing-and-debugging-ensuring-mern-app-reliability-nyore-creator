export const formatDate = (date) => new Date(date).toLocaleDateString();
import { formatDate } from '../utils/formatDate';

test('formats date correctly', () => {
  expect(formatDate('2025-11-11')).toBe('11/11/2025');
});
