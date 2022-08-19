import React from 'react';
import Renderer from 'react-test-renderer';
/* eslint-disable no-undef */
import Quote from '../Components/Quote';

it('renders correctly Quote Component', () => {
  const tree = Renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
