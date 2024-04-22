import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  ActivityIndicator
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Colors from '../assets/Colors';
import Ip from '../assets/Ip';
import axios from 'axios';
import ShowToast from '../components/ShowToast';
import Toast from 'react-native-toast-message';


import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

export default function RegisterUser({ navigation }) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [cnic, setCnic] = useState('');
  const [cell1, setCell1] = useState('');
  const [cell2, setCell2] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [role, setRole] = useState('65e8a993a054b13412e618ee');
  const [selectedImageName, setSelectedImageName] = useState("")

  const [isLoading, setIsLoading] = useState(false); // Introducing isLoading state


  async function PostData(props) {
    setIsLoading(true)
    if (name && userName && email && cnic && cell1 && address && password && confirmPassword && avatar) {
      if (password === confirmPassword) {
        if (password.trim() !== "") {
          const apiEndpoint = Ip + '/user/postuser';
          try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('username', userName);
            formData.append('email', email);
            formData.append('cnic', cnic);
            formData.append('cell1', cell1);
            formData.append('cell2', cell2);
            formData.append('address', address);
            formData.append('password', password);
            formData.append('confirmPassword', confirmPassword);
            formData.append('avatar', avatar);
            formData.append('role', role);

            const response = await axios.post(apiEndpoint, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            // Handle successful response
            console.log('Response:', response.data);
            navigation.replace('OtpVerify', { name, email, userName });
          } catch (error) {
            console.log(error.response.data.message || error.response.data.error || error.response || error);
            ShowToast({
              type: 'error',
              text1: error.response.data.message || error.response.data.error || error.response || error,
            });
          }
          finally {
            setIsLoading(false)
          }
        } else {
          ShowToast({
            type: 'error',
            text1: "Password cannot be empty",
          });
        }
      } else {
        ShowToast({
          type: 'error',
          text1: "Password did not match",
        });
      }
    } else {
      ShowToast({
        type: 'error',
        text1: "At least one field is empty",
      });
      console.log('At least one field is empty');
    }


    setIsLoading(false)
  }


  async function SelectImage() {
    launchImageLibrary({ mediaType: 'photo', maxFiles: 1 }, async response => {
      if (!response.didCancel && !response.errorCode) {
        setAvatar({
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        });
        setSelectedImageName(response.assets[0].fileName);
      }
    });
  }


  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ paddingBottom: 50, }}
      >
        <Header headerText="Register User" />
        <Text> </Text>
        <Text> </Text>
        <ScrollView>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter Full Name</Text>
            <TextInput
              style={styles.inputContainerInputFeild}
              placeholderTextColor="gray"
              placeholder="John Doe"
              onChangeText={e => {
                setName(e);
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter Username</Text>
            <TextInput
              style={styles.inputContainerInputFeild}
              placeholderTextColor="gray"
              placeholder="john123"
              onChangeText={e => {
                setUserName(e);
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter Email</Text>
            <TextInput
              style={styles.inputContainerInputFeild}
              placeholderTextColor="gray"
              placeholder="example@xyz.com"
              onChangeText={e => {
                setEmail(e);
              }}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter CNIC</Text>
            <TextInput
              style={styles.inputContainerInputFeild}
              placeholderTextColor="gray"
              placeholder="without dashes"
              onChangeText={e => {
                setCnic(e);
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter Password</Text>
            <TextInput
              style={styles.inputContainerInputFeild}
              placeholderTextColor="gray"
              placeholder="Add Special Characters"
              onChangeText={e => {
                setPassword(e);
              }}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Confirm Password</Text>
            <TextInput
              style={styles.inputContainerInputFeild}
              placeholderTextColor="gray"
              placeholder="Same as Upper"
              onChangeText={e => {
                setConfirmPassword(e);
              }}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter Cell #</Text>
            <TextInput
              style={styles.inputContainerInputFeild}
              placeholderTextColor="gray"
              placeholder="03xxxxxxxxx"
              onChangeText={e => {
                setCell1(e);
              }}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter Another Cell (optional)</Text>
            <TextInput
              style={styles.inputContainerInputFeild}
              placeholderTextColor="gray"
              placeholder="03xxxxxxxxx"
              onChangeText={e => {
                setCell1(e);
              }}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter Address</Text>
            <TextInput
              style={styles.inputContainerInputFeild}
              placeholderTextColor="gray"
              placeholder="street 1, ..."
              onChangeText={e => {
                setAddress(e);
              }}
              multiline={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter Address</Text>
            <View style={styles.imagePickerContainer}>
              <TouchableOpacity onPress={SelectImage}>
                <Text style={styles.btnText}>Browse</Text>
              </TouchableOpacity>
              <Text style={styles.imagePickerSelectedImageLabel}>{selectedImageName}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btnContainer} onPress={PostData}>
            {isLoading ? (
              <ActivityIndicator size="large" color={Colors.secondaryBgColor} />
            ) : (
              <Text style={styles.btnText}>Submit</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <Toast />
    </>
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
  imagePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    fontSize: 16,
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