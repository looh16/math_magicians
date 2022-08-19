import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Calculator, calculatorClickHandle } from './mock_Calculator';

it('test onclick events', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByRole('button', { name: '5' }));
  fireEvent.click(screen.getByRole('button', { name: 'x' }));
  fireEvent.click(screen.getByRole('button', { name: '6' }));
  fireEvent.click(screen.getByRole('button', { name: '=' }));

  expect(calculatorClickHandle).toBeCalledTimes(4);
});
