import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="bodySmall">Open up App.tsx to start working on your app! {Platform.OS === 'web' ? 'Web': 'IOS'} </Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
