import React from 'react';
import { View } from 'react-native';

import Square from '../square';
import styles from './styles';

export default function Board(props: IBoardProps) {
  return (
    <View style={[styles.board, { borderColor: props.theme.darkSquareColor }]}>
      {[...new Array(8 * 8)].map((_, i) => (
        <Square key={i} index={i} theme={props.theme} />
      ))}
    </View>
  );
}

export interface ITheme {
  darkSquareColor: string;
  lightSquareColor: string;
}

interface IBoardProps {
  theme: ITheme;
}
