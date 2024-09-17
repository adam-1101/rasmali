import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const LandingScreen = ({navigation}) => {
  return (

    <View style={styles.container}>
      <View style={styles.topImageContainer}>
            <Image source={require("../assets/top-gold.png")} style={styles.topImage}/>
      </View>
      <View style={styles.logotop}>
            <Image source={require("../assets/logo.png")} style={styles.logo}/>
      </View>


      <View style={styles.middleContainer}>

            <Text style={styles.tagline}>Turn your savings into passive income</Text>

            
            <TouchableOpacity style={styles.loginButton}   onPress={() =>  navigation.navigate('Login')}>
                  <Text style={styles.loginText}>Login</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or</Text>

            <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('Explorer')}>
                  <Text style={styles.googleText}>
                        Continue with <Image source={require("../assets/google-icon.png")} style={styles.googleIcon} />
                  </Text>

            </TouchableOpacity>

      </View>

      <Text style={styles.footerText}>Powered by Wep.ma</Text>

    </View>
  )  
}

export default LandingScreen

const styles = StyleSheet.create({
      container: {
            backgroundColor : "#FFFFFF",
            flex:1 ,
            alignItems : 'center',
      },

      topImageContainer : {
            height : 50,
            width : '100%',
            position : 'relative',

      },

      topImage : {
            width : "100%",
            height : 210,
      },

      logotop: {
            position: 'absolute', 
            top: 10,              
            left: 10,          
      },
        
      logo: {
            width: 170,           
            height: 170,          
            resizeMode: 'contain', 
      },


      middleContainer: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 70,
            flexGrow: 1,

      },
  
      tagline: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 30,
            textAlign: 'center',
      },
  
      loginButton: {
            backgroundColor: '#b29a04',
            paddingVertical: 15,
            paddingHorizontal: 60,
            borderRadius: 25,
            marginBottom: 15,
            width: '100%',
            alignItems: 'center',
      },
  
      loginText: {
            color: '#FFFFFF',
            fontSize: 16,
      },
  
      signUpButton: {
            backgroundColor: '#FFFFFF',
            paddingVertical: 15,
            paddingHorizontal: 60,
            borderRadius: 25,
            marginBottom: 15,
            width: '100%',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#b29a04',
      },
  
      signUpText: {
            color: '#b29a04',
            fontSize: 16,
      },
  
      orText: {
            fontSize: 14,
            marginBottom: 15,
            color: '#888',
      },
  
      googleButton: {
            backgroundColor: '#FFFFFF',
            paddingVertical: 15,
            paddingHorizontal: 60,
            borderRadius: 25,
            width: '100%',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#888',
            flexDirection: 'row',
            justifyContent: 'center',
      },
  
      googleText: {
            color: '#888',
            fontSize: 16,
      },
  
      googleIcon: {
            width: 20,
            height: 20,
            resizeMode : 'contain',
      },
  
      footerText: {
            position: 'absolute',
            bottom: 20,
            textAlign: 'center',
            width: '100%',
            fontSize: 12,
            color: '#888',
      },

  
})