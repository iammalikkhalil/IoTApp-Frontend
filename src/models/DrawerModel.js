import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default DrawerModel = ({ props }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          props.setModelVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeIconContainerParent}>
              <TouchableOpacity
                style={styles.closeIconContainer}
                onPress={() => {
                  props.setModelVisible(false);
                }}>
                <Image style={styles.closeIcon} source={require('../assets/images/cross-white.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.modelContent}>
              <TouchableOpacity
                onPress={() => {
                  props.setModelVisible(false);
                  props.navigation.navigate('EnrollFinger')
                }}
              >
                <View style={styles.modelBtn}>
                  <Text style={styles.btnText}>Enroll Finger</Text>
                  <Image style={styles.btnIconImage} source={require('../assets/images/fingerprint.png')} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.setModelVisible(false);
                  props.navigation.navigate('RegisterUser', { role: "6627b05497079cdf0d4aa8ff" })
                }}
              >
                <View style={styles.modelBtn}>
                  <Text style={styles.btnText}>Add User</Text>
                  <Image style={styles.btnIconImage} source={require('../assets/images/person-white.png')} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  try {
                    await AsyncStorage.setItem('user', "");
                  } catch (error) {
                    console.log('getting error in logout', error);
                  } finally {
                    props.navigation.replace('Splash');
                  }
                }}>
                <View style={styles.modelBtn}>
                  <Text style={styles.btnText}>LogOut</Text>
                  <Image style={styles.btnIconImage} source={require('../assets/images/logout.png')} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    width: '60%',
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between',
  },
  closeIconContainerParent: {
    width: "100%",
    paddingLeft: 180,
  },
  closeIconContainer: {
    borderWidth: 2,
    borderColor: "#45C6D4",
    marginRight: 30,
    marginTop: 20,
    backgroundColor: "#45C6D4",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  closeIcon: {
    height: 45,
    width: 45,
  },
  modelContent: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginBottom: 50,
  },
  modelBtn: {
    backgroundColor: '#45C6D4',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 7,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnIconImage: {
    width: 40,
    height: 40,
  },
});
