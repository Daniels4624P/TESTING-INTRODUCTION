test('test obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'molina';
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined(); // undefined no tiene nada pero por el contrario null si cuenta como valor valido
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  const booleanTrue = true;
  const booleanFalse = false;

  expect(booleanTrue).toEqual(true);
  expect(booleanFalse).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).toBeTruthy();
});

test('strings', () => {
  expect('Christoph').toMatch(/stop/);
})

test('Arrays or lists', () => {
  expect([1, 2, 3, 4, 5]).toContain(3);
})

test('Comparing Numbers', () => {
  const sum = 2 + 2

  expect(sum).toBeGreaterThan(3)
  expect(sum).toBeGreaterThanOrEqual(3.5)

  expect(sum).toBeLessThan(5)
  expect(sum).toBeLessThanOrEqual(4.5)

  expect(sum).toBe(4)
  expect(sum).toEqual(4)
})

test('Comparing Float', () => {
  const value = 3.5 + 4.2

  expect(value).toBeCloseTo(7.7) // Con floats es mejor usar toBeCloseTo que toEqual
});

const formComplete = () => {
  throw new Error('You are not completed the form')
}

test('Exception Error', () => {
  expect(() => formComplete()).toThrow() // Si la funcion usa un throw
  expect(() => formComplete()).toThrow(Error) // Si la funcion tira un Error de la clase Error

  expect(() => formComplete()).toThrow('You are not completed the form') // Si el error de la funcion es este
  expect(() => formComplete()).toThrow(/not completed/) // si el error de la funcion contiene este texto
})
