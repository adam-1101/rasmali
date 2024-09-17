import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SignupScreen = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Name" 
          placeholderTextColor="#b29a04"
          value={name}
          onChangeText={setName}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Age" 
          keyboardType="numeric" 
          placeholderTextColor="#b29a04"
          value={age}
          onChangeText={setAge}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Birthday" 
          placeholderTextColor="#b29a04"
          value={birthday}
          onChangeText={setBirthday}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          keyboardType="email-address" 
          placeholderTextColor="#b29a04"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry={true} 
          placeholderTextColor="#b29a04"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Next Step</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b29a04',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#b29a04',
    alignSelf: 'flex-start',
    marginTop: 50,
  },
  inputContainer: {
    width: '100%',
    marginTop: 50,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#b29a04',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#b29a04',
    fontSize: 18,
  },
  linkContainer: {
    marginTop: 50,
    alignSelf: 'center',
    marginBottom: 40,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default SignupScreen;

