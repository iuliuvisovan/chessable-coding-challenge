import React from 'react';
import { create } from 'react-test-renderer';
import Square from './index';

const boardTheme = { darkSquareColor: '#b98661', lightSquareColor: '#f4d9b7' };

const tree = create(<Square index={3} theme={boardTheme} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
