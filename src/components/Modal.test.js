import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal />, div);
  });
});
