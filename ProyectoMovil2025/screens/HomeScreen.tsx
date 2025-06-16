// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={['#33acff', '#33ecff']} // degradado azulado
      style={styles.gradient}
    >
      <View style={styles.card}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.heading}>¿Lista para iniciar tus tareas de hoy?</Text>
        <Text style={styles.subtext}>
          Organiza tu día, disfruta de una jornada productiva 💪
        </Text>

        <CustomButton
          title="Agregar Tarea"
          onPress={() => navigation.navigate('Agregar')}
          style={styles.button}
        />
      </View>
    </LinearGradient>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: { // Cuadro principal // Blanco
    backgroundColor: '#ffffffee', // blanco semi-transparente
    borderRadius: 32,
    padding: 75,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
    width: width * 0.9,
    alignItems: 'center',
  },
  image: { // tamaño de la imagen
    width: 160,
    height: 160,
    marginBottom: 30,
    borderRadius: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#263238',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: '#455a64',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00bcd4',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
});
