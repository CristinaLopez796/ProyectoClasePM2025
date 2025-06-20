// screens/TasksScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📋 Pantalla de tareas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0f5',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
