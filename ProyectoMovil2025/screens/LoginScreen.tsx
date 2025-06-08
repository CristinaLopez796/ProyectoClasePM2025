// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { validateEmail } from '../utils/validations';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    let valid = true;
    setEmailError('');
    setPasswordError('');

    if (!email || !validateEmail(email)) {
      setEmailError('Correo inválido. Debe contener @');
      valid = false;
    }

    if (!password) {
      setPasswordError('La contraseña es obligatoria');
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>RoomyDuty</Text>
        <CustomInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          error={emailError}
        />
        <CustomInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={passwordError}
        />
        <CustomButton
          title="Iniciar Sesión"
          onPress={handleLogin}
          loading={loading}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec', // Rosa muy claro
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#ba68c8', // Morado
  },
  button: {
    backgroundColor: '#ba68c8', // Rosa-morado
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
