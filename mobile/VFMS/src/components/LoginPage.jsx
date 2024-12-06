import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.79.250.165:5000/check', {
        email,
        password,
      });

      const { user } = response.data; // Destructure user from response
      Alert.alert('Login Successful', `Welcome, ${user.name}!`);
      navigation.navigate('Dashboard', { user });
    } catch (error) {
      if (error.response) {
        Alert.alert('Login Failed', error.response.data.message);
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/vfmsIMGBlack.png')} style={styles.logo} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Driver Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 250, // Adjust the logo width
    height: 250, // Adjust the logo height
    resizeMode: 'contain', // Ensure the logo maintains its aspect ratio
  },
  title: {
    flex:0.2,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffa500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: '100px'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
