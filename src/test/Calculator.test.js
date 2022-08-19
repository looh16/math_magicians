import React from 'react';
import Renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator.js';

it('renders correctly Calculator Component ', () => {
  const tree = Renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
