import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import ShowToast from '../components/ShowToast';
import Toast from 'react-native-toast-message';
import Header from '../components/Header';
import Colors from '../assets/Colors';
import Ip from '../assets/Ip';
import axios from 'axios';

export default function OtpVerify(props) {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Introducing isLoading state

  async function PostData() {
    setIsLoading(true)

    const apiEndpoint = Ip + '/user/verifyotp';
    try {
      const response = await axios.post(apiEndpoint, { username: props.route.params.userName, otp });
      console.log(response.data.data);
      await AsyncStorage.setItem('user', JSON.stringify(response.data.data));
      ShowToast({
        type: 'success',
        text1: response.data.message,
      });
      setTimeout(() => {
        props.navigation.replace('Dashboard')
      }, 1500)
    } catch (error) {
      console.log(error.response.data.message || error.response.data.error || error.response || error);
      ShowToast({
        type: 'error',
        text1: error.response.data.message || error.response.data.error || error.response || error,
      });
    }
    setIsLoading(false)
  }

  return (
    <View style={styles.container}>
      <Header headerText="Verify OTP" />

      <View style={styles.inputContainer}>
        <Text style={styles.inputContainerLabel}>
          Hi {props.route.params.name} we sended you OTP on the email {props.route.params.email} please
          Verify your OTP.
        </Text>
        <TextInput
          style={styles.inputContainerInputFeild}
          placeholderTextColor="gray"
          placeholder="000 000"
          onChangeText={e => {
            setOtp(e);
          }}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.btnContainer} onPress={PostData}>
          {isLoading ? (
            <ActivityIndicator size="large" color={Colors.secondaryBgColor} />
          ) : (
            <Text style={styles.btnText}>Submit</Text>
          )}
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
    height: '100%',
    flexDirection: 'column',
  },
  inputContainer: {
    width: '100%',
    height: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainerLabel: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainerInputFeild: {
    width: '60%',
    fontSize: 16,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderColor: Colors.secondaryBgColor,
    textAlign: 'center',
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