import React from 'react';
import Renderer from 'react-test-renderer';
import Home from '../Components/Home.js';

it('renders correctly Home Component', () => {
  const tree = Renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
