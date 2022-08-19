import React from 'react';
import Renderer from 'react-test-renderer';
/* eslint-disable no-undef */
import Calculator from '../Components/Calculator';

it('renders correctly Calculator Component', () => {
  const tree = Renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
