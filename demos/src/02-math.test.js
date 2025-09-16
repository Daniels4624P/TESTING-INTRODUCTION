const { sum, multipli, division, generateNumber } = require('./02-math')

describe('Test for Math', () => {
  describe('Test for sum numbers', () => {
      test('Adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3)
      expect(rta).toBe(4)
    })
  })

  describe('Tests for multiply numbers', () => {
    test('Should be 4', () => {
      const rta = multipli(2, 2)
      expect(rta).toBe(4)
    })
  })

  describe('Tests for divide numbers', () => {
    test('Should divide', () => {
      const rta = division(8, 2)
      expect(rta).toBe(4)
      const rta2 = division(5, 2)
      expect(rta2).toBe(2.5)
    })

    test('Should divide for zero', () => {
      const rta = division(8, 0)
      expect(rta).toBeNull()
      const rta2 = division(5, 0)
      expect(rta2).toBeNull()
    })
  })

  test('The function generate a number', () => {
    const number = generateNumber(100)
    expect(number).toBeDefined()
  });
});
