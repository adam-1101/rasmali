import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

const SignupScreen_first_step = ({ navigation }) => {
      const [selectedOption, setSelectedOption] = useState(null);

      const handleOptionSelect = (option) => {
            setSelectedOption(option);
            Toast.show({
                  type: 'success',
                  text1: `Selected: ${option}`,
                  position: 'bottom',
            });
      };

      const handleNextPress = () => {
            if (selectedOption) {
                  navigation.navigate('Signup_two_step');
            } else {
                  Toast.show({
                        type: 'error',
                        text1: 'Please select an option before proceeding',
                        position: 'bottom',
                  });
            }
      };


      return (
            <View style={styles.container}>
                  <View style={styles.topImageContainer}>
                        <Image source={require("../assets/white-top.png")} style={styles.topImage} />
                        <Image source={require("../assets/gold-dashes.png")} style={styles.goldDashes} />

                  </View>

                  <View style={styles.titleContainer}>
                        <Text style={styles.title}>Let's Get</Text>
                        <Text style={styles.subtitle}>Started</Text>
                  </View>

                  <View style={styles.middleContainer}>
                        <View style={styles.whiteSquare}>

                              <Text style={styles.question}>What is your investment experience level?</Text>
                              
                              <TouchableOpacity style={[styles.optionButton, selectedOption === 'Beginner' && styles.selectedButton]}
                              onPress={() => handleOptionSelect('Beginner')}>
                                    <Text style={styles.optionText}>Beginner</Text>
                              
                              </TouchableOpacity>

                              <TouchableOpacity style={[styles.optionButton, selectedOption === 'Intermediate' && styles.selectedButton]}
                              onPress={() => handleOptionSelect('Intermediate')}>
                                    <Text style={styles.optionText}>Intermediate</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={[styles.optionButton, selectedOption === 'Expert' && styles.selectedButton]}
                              onPress={() => handleOptionSelect('Expert')}>
                                    <Text style={styles.optionText}>Expert</Text>
                              </TouchableOpacity>

                              <TouchableOpacity onPress={handleNextPress}>
                                    <Image source={require("../assets/next.png")} style={styles.nextImage}/>
                              </TouchableOpacity>

                        </View>
                  </View>
                  <View style={styles.bottomContainer}>

                       
                        <Image source={require("../assets/logo.png")} style={styles.logo} />
                  </View>
      </View>
  );
};

export default SignupScreen_first_step;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#b29a04', // Background color

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
      titleContainer: {
            top: 20,
            left:20,

      },
      title: {
            fontSize: 36,
            fontWeight: 'bold',
            color: '#000000',
      },
      subtitle: {
            fontSize: 36,
            fontWeight: 'bold',
            color: '#b29a04',
      },
      middleContainer: {
            width: '90%',
            left:30,
            top:50,
            paddingHorizontal:0,
            alignItems: 'center',
      },
      whiteSquare: {
            backgroundColor: '#FFFFFF',
            paddingVertical: 50,
            paddingHorizontal: 10,
            borderRadius: 20,
            width: '80%',
            height: 400,
            alignItems: 'center',
            elevation: 5, 
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          },
      question: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 30,
            color: '#000000',
      },
      optionButton: {
            backgroundColor: '#b29a04',
            paddingVertical: 15,
            paddingHorizontal: 60,
            borderRadius: 25,
            marginBottom: 15,
            width: '100%',
            alignItems: 'center',
      },
      selectedButton: {
            backgroundColor: '#000000',
      },
      optionText: {
            color: '#FFFFFF',
            fontSize: 16,
      },

      nextImage: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
            marginLeft: 150,
            marginTop: 20,
      },

      bottomContainer: {
            width: '100%',
            alignItems: 'center',
            paddingBottom: 5,
      },
      logo: {
            width: 170,
            height: 170,
            resizeMode: 'contain',
            marginBottom: 0,
      },
      nextText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
      },
});



