import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ITheme } from '../board';

export default function Square(props: SquareProps) {
  function isDark(): boolean {
    const currentRank: number = Math.floor(props.index / 8);

    if (currentRank % 2 === 0) {
      return props.index % 2 !== 0;
    } else {
      return props.index % 2 == 0;
    }
  }

  return (
    <View
      style={[
        styles.square,
        { backgroundColor: isDark() ? props.theme.darkSquareColor : props.theme.lightSquareColor },
      ]}
    />
  );
}

interface SquareProps {
  index: number;
  theme: ITheme;
}
