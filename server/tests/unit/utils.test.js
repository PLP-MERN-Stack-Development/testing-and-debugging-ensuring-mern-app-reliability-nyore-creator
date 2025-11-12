import { calculateTotal } from '../../src/utils/calculateTotal.js';

describe('calculateTotal', () => {
  it('calculates total correctly', () => {
    const items = [
      { price: 100, qty: 2 },
      { price: 50, qty: 1 }
    ];
    expect(calculateTotal(items)).toBe(250);
  });
});
