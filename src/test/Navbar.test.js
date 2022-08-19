/* eslint-disable no-undef */
import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function MockHeader() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

it('Renders correctly Navbar Component', () => {
  const tree = Renderer
    .create(<MockHeader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
