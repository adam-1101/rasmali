import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require("../assets/white-top.png")} style={styles.topImage} />
        <Image source={require("../assets/gold-dashes.png")} style={styles.goldDashes} />
      </View>

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          keyboardType="email-address" 
          placeholderTextColor="#b29a04"
          value={email}  // Bind the email input to the email state variable
          onChangeText={setEmail}  // Update the state variable when the input changes
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry={true} 
          placeholderTextColor="#b29a04"
          value={password}  // Bind the password input to the password state variable
          onChangeText={setPassword}  // Update the state variable when the input changes
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b29a04', // Background color
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  topImageContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  topImage: {
    width: '100%',
    height: 200,
  },
  goldDashes : {
    position: 'absolute',
    top: 40, 
    left: 210, 
    width: 139, 
    height: 53, 
  },
  title: {
    top: 20,
    left: 20,
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
    alignSelf:'center',
    marginBottom:40,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default LoginScreen;
