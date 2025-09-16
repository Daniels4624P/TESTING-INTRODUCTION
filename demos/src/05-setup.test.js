describe('Set', () => {

  beforeAll(() => {
    console.log('BeforeAll esto se ejecuta antes de todos los tests')
    // En vez de hacer este log podriamos prender una db
  });

  afterAll(() => {
    console.log('AfterAll esto se ejecuta despues de todos los tests')
    // Se podria usar para apagar la db que prendimos
  })

  beforeEach(() => {
    console.log('BeforeEach corre antes de cada test que haga parte del describe donde se esta ejecutando el beforeEach')
  })

  afterEach(() => {
    console.log('AfterEach corre despues de cada test que haga parte del describe donde se esta ejecutando el afterEach')
  })

  test('Case 1', () => {
    console.log('Estoy en el caso 1')
    expect(1+1).toBe(2);
  });

  test('Case 2', () => {
    console.log('Estoy en el caso 2')
    expect(1+3).toBe(2);
  });

  describe('other group', () => {
    beforeAll(() => {
      console.log('Esto solo se ejecuta para los tests del segundo describe')
    });

    test('Case 3', () => {
      console.log('Estoy en el caso 3')
      expect(1+1).toBe(2);
    });

    test('Case 4', () => {
      console.log('Estoy en el caso 4')
      expect(1+3).toBe(2);
    });
  });
});
