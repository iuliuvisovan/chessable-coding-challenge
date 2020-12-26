import React from 'react';
import { create } from 'react-test-renderer';
import Square, { isDark } from './index';

const boardTheme = { darkSquareColor: '#b98661', lightSquareColor: '#f4d9b7' };

const tree = create(<Square index={3} theme={boardTheme} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('calculation of square color', () => {
  expect(isDark(0)).toBeFalsy();
  expect(isDark(1)).toBeTruthy();
  expect(isDark(63)).toBeFalsy();
  expect(isDark(62)).toBeTruthy();
});
