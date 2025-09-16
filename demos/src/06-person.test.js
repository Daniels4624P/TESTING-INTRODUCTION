// AAA
const Person = require('./06-person')

describe('Test for class Person', () => {
  let person
  // Arrange / Given
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7)
  });

  test('Should return down', () => {
    // Arrange / Given
    person.weight = 45;

    // Act / When
    const imc = person.calcIMC();

    // Assert / Then
    expect(imc).toBe('down');
  })

  test('Should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();

    expect(imc).toBe('normal')
  })
});
