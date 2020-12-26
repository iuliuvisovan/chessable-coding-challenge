import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Board, { BoardRotation } from './components/board';
import { THEMES } from './constants';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Board rotation={BoardRotation.ForWhite} theme={THEMES.chessableMasters} />
      <StatusBar style="auto" />
    </View>
  );
}
