import operate from '../logic/operate.js';

describe('Addition', () => {
  test('Adding two positive nums', () => {
    const rst = operate('1', '2', '+');
    expect(rst).toBe('3');
  });
  test('Adding two negative nums', () => {
    const rst = operate('-1', '-2', '+');
    expect(rst).toBe('-3');
  });
  test('Adding a plus and a negative', () => {
    const rst = operate('1', '-2', '+');
    expect(rst).toBe('-1');
  });
});

describe('Subtraction', () => {
  test('Subtracting two nums', () => {
    const rst = operate('4', '2', '-');
    expect(rst).toBe('2');
  });
  test('Subtracting two negatives', () => {
    const rst = operate('-4', '-2', '-');
    expect(rst).toBe('-2');
  });
  test('Subtracting negative and positive', () => {
    const rst = operate('-4', '2', '-');
    expect(rst).toBe('-6');
  });
});

describe('Multiplication', () => {
  test('multplying two positive nums', () => {
    const rst = operate('2', '2', 'x');
    expect(rst).toBe('4');
  });
  test('multiplying two negative nums', () => {
    const rst = operate('-2', '-2', 'x');
    expect(rst).toBe('4');
  });
  test('multiplying a positive num and a negative num', () => {
    const rst = operate('-2', '2', 'x');
    expect(rst).toBe('-4');
  });
  test('multiplying with zero', () => {
    const rst = operate('0', '2', 'x');
    expect(rst).toBe('0');
  });
});

describe('Dividing', () => {
  test('Division of positive nums', () => {
    const rst = operate('4', '2', '÷');
    expect(rst).toBe('2');
  });
  test('Division with negative nums', () => {
    const rst = operate('-4', '-2', '÷');
    expect(rst).toBe('2');
  });
  test('Division with negative and positive nums', () => {
    const rst = operate('-4', '2', '÷');
    expect(rst).toBe('-2');
  });
  test('Division by 0', () => {
    const rst = operate('2', '0', '÷');
    expect(rst).toBe('Can\'t divide by 0.');
  });
});

describe('Modulus', () => {
  test('Modulus of two postivie nums', () => {
    const rst = operate('4', '3', '%');
    expect(rst).toBe('1');
  });
  test('Modulus of two negative nums', () => {
    const rst = operate('-4', '-3', '%');
    expect(rst).toBe('-1');
  });
  test('Modulus of a positive and a negative nums', () => {
    const rst = operate('-4', '3', '%');
    expect(rst).toBe('-1');
  });
  test('Division by 0', () => {
    const rst = operate('2', '0', '%');
    expect(rst).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
