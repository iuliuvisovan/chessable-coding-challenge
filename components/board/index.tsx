import React from 'react';
import { View, Text } from 'react-native';

import Square from '../square';
import styles from './styles';

export default function Board(props: IBoardProps) {
  function getRankNotations() {
    const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];

    if (props.rotation === BoardOrientation.ForWhite) {
      return ranks.reverse();
    } else {
      return ranks;
    }
  }

  function getFileNotations() {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    if (props.rotation === BoardOrientation.ForWhite) {
      return files;
    } else {
      return files.reverse();
    }
  }

  return (
    <View style={[styles.board, { borderColor: props.theme.darkSquareColor + '44' }]}>
      {[...new Array(8 * 8)].map((_, i) => (
        <Square key={i} index={i} theme={props.theme} />
      ))}
      <View style={styles.rankIndicators}>
        {getRankNotations().map((rank) => (
          <Text style={styles.indicator}>{rank}</Text>
        ))}
      </View>
      <View style={styles.fileIndicators}>
        {getFileNotations().map((file) => (
          <Text style={styles.indicator}>{file.toUpperCase()}</Text>
        ))}
      </View>
    </View>
  );
}

export interface ITheme {
  darkSquareColor: string;
  lightSquareColor: string;
}

export enum BoardOrientation {
  ForWhite,
  ForBlack,
}

interface IBoardProps {
  theme: ITheme;
  rotation: BoardOrientation;
}
