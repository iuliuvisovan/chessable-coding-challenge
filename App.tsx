import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Board from './components/board';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Board theme={{ darkSquareColor: '#b98661', lightSquareColor: '#f4d9b7' }} />
      <StatusBar style="auto" />
    </View>
  );
}
