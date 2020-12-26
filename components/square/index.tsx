import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ITheme } from '../board';

export function isDark(index: number): boolean {
  const currentRank: number = Math.floor(index / 8);

  if (currentRank % 2 === 0) {
    return index % 2 !== 0;
  } else {
    return index % 2 == 0;
  }
}

export default function Square(props: SquareProps) {
  return (
    <View
      style={[
        styles.square,
        { backgroundColor: isDark(props.index) ? props.theme.darkSquareColor : props.theme.lightSquareColor },
      ]}
    />
  );
}

interface SquareProps {
  index: number;
  theme: ITheme;
}
