import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import Header from '../components/Header';
import Ip from '../assets/Ip';
import Colors from '../assets/Colors';
import ShowToast from '../components/ShowToast';
import Toast from 'react-native-toast-message';

export default function LoginUser(props) {
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Introducing isLoading state

  async function PostData() {
    setIsLoading(true);
    const apiEndpoint = Ip + '/user/login';
    try {
      let response = await axios.post(apiEndpoint, {
        username,
        password: userPassword,
      }, {
        'Content-Type': 'application/json',
      });

      const responseData = response.data
      // Handle successful login
      AsyncStorage.setItem('user', JSON.stringify(responseData.data))
        .then(() => {
          console.log('user stored successfully');
        })
        .catch(error => {
          console.error('Error storing value:', error);
        });
      ShowToast({
        type: 'success',
        text1: responseData.message,
      });

      setTimeout(() => {
        // Redirect or navigate to the dashboard
        props.navigation.replace('Dashboard', responseData.data);
      }, 1500);
    } catch (error) {
      handleErrorResponse(error)
    }
    setIsLoading(false);
  }

  function handleErrorResponse(error) {
    ShowToast({
      type: 'error',
      text1: error.response.data.message,
      navigation: props.navigation,
    });

    if (error.response && error.response.data && error.response.data.message === 'OTP sent. Please verify your email.') {
      setTimeout(() => {
        props.navigation.replace('OtpVerify', { name: error.response.data.data.name, email: error.response.data.data.email, userName: error.response.data.data.username });
      }, 1500);
    }
  }



  return (
    <View>
      <Header headerText="Login User" />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerLabel}>Enter username</Text>
          <TextInput
            style={styles.inputContainerInputFeild}
            placeholderTextColor="gray"
            placeholder="example@xyz.com"
            onChangeText={e => {
              setUsername(e);
            }}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerLabel}>Enter Password</Text>
          <TextInput
            style={styles.inputContainerInputFeild}
            placeholderTextColor="gray"
            placeholder="Zx23he.@7"
            onChangeText={e => {
              setUserPassword(e);
            }}
            secureTextEntry={true}
          />
        </View>
        {/* Render the button conditionally based on isLoading */}
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.secondaryBgColor} />
        ) : (
          <TouchableOpacity style={styles.btnContainer} onPress={PostData}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => {
            props.navigation.navigate('RegisterUser');
          }}>
          <Text style={{ width: '100%', textAlign: 'center' }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryBgColor,
    width: '100%',
    flexDirection: 'column',
    height: '90%',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  inputContainerLabel: {
    fontSize: 16,
    width: '40%',
  },
  inputContainerInputFeild: {
    fontSize: 16,
    width: '60%',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderColor: Colors.secondaryBgColor,
  },
  btnContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  btnText: {
    backgroundColor: Colors.secondaryBgColor,
    color: Colors.secondaryFontColor,
    fontWeight: 'bold',
    borderRadius: 10,
    fontSize: 20,
    paddingVertical: 10,
    textAlign: 'center',
    width: 100,
  },
});