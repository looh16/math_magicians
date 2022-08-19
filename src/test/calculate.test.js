import calculate from '../logic/calculate';

describe('= button', () => {
  test('press = button with no previous inputs', () => {
    const object = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {};
    const result = calculate(object, '=');
    expect(result).toEqual(expected);
  });

  test('Press a number with no previous operations', () => {
    const expected = {
      total: null,
      next: '5',
      operation: '+',
    };
    const object = {
      total: null,
      next: null,
      operation: '+',
    };

    const result = calculate(object, '5');
    expect(result).toEqual(expected);
  });

  test('press = button with previous inputs', () => {
    const expected = {
      total: '15',
      next: null,
      operation: null,
    };
    const object = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(object, '=');
    expect(result).toEqual(expected);
  });
});

describe('AC btn', () => {
  test('Ac button without  inputs', () => {
    const expected = {
      total: null,
      next: null,
      operation: null,
    };

    const object = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(object, 'AC');
    expect(result).toEqual(expected);
  });
  test('AC button with previous inputs', () => {
    const object = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(object, 'AC');
    expect(result).toEqual(expected);
  });
});

describe('Buttons pressed', () => {
  test('Press a number with no previous inputs', () => {
    const object = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {
      total: null,
      next: '5',
    };
    const result = calculate(object, '5');
    expect(result).toEqual(expected);
  });
});
