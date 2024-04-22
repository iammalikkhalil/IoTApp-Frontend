import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native';
import React, { useEffect, useState } from 'react';
import socketServcies from '../utils/SocketService';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';


export default function Dashboard() {
  const navigation = useNavigation();
  useEffect(() => {
    socketServcies.on('mqttRes', msg => {
      console.log('socket io response: ', msg);
      isTrue = msg == 'true';
      setValue(isTrue);
    });
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      colors={['#FEF5EC', '#E1FBFD', '#FEF5EC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.09, 1]}

    >
      {/* <Switch
        style={styles.switch}
        color="#2089dc"
        value={value}
        onValueChange={value => DoorHandler(value)}
      /> */}



      <TouchableOpacity style={styles.iconContainer} onPress={()=>{
        navigation.navigate('Details');
      }}>
        <View style={styles.btnContainer}>
          <Image style={styles.btnIcon} source={require('../assets/images/notification.png')} />
        </View>
      </TouchableOpacity>

      <View style={styles.headingContainer}>
        <Text style={styles.wellcomeText}>Wellcome</Text>
        <Text style={styles.nameText}>Malik,</Text>
      </View>

      <View style={styles.doorContainer}>
        <View style={styles.connectedContainer}>
          <Image style={styles.connectedIcon} source={require('../assets/images/tick.png')} />
          <Text style={styles.connectedText}>Door Connected</Text>
        </View>

        <View style={styles.doorDetailContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>Door Lock</Text>

            <View style={[styles.iconContainer, { justifyContent: "flex-start" }]}>
              <View style={[styles.btnContainer, { width: 40, height: 40 }]}>
                <Image style={[styles.btnIcon]} source={require('../assets/images/video.png')} />
              </View>

              <View style={[styles.btnContainer, { width: 40, height: 40, marginLeft: 22, backgroundColor: "#ffffff" }]}>
                <Image style={[styles.btnIcon]} source={require('../assets/images/mic.png')} />
              </View>
            </View>

            <View style={styles.bigButtonContainer}>
              <TouchableOpacity style={[styles.btnContainer, { width: 60, height: 60 }]}>
                <Image style={[styles.btnIcon]} source={require('../assets/images/open-lock.png')} />
              </TouchableOpacity>

                <Image style={{width: 40, height: 40}} source={require('../assets/images/forward.png')} />
                <Image style={{width: 40, height: 40}} source={require('../assets/images/close-lock.png')} />

            </View>
          </View>
          <View style={styles.asideContainer}>
            <Image style={styles.lockIcon} source={require('../assets/images/lock.png')} />

          </View>
        </View>
      </View>



    </LinearGradient>
  );

  // rgb(254,253,253)
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: "5%",
    marginTop: "7%",
  },
  btnContainer: {
    width: 70,
    height: 70,
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#45C6D4",
    elevation: 2,
  },
  btnIcon: {
    width: "60%",
    height: "60%",
  },
  headingContainer: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
  },
  wellcomeText: {
    fontFamily: "Lato-Bold",
    fontSize: 40,
    color: "black",
  },
  nameText: {
    fontFamily: "Lato-Bold",
    fontSize: 80,
    color: "black",
    marginBottom: 20,
  },
  doorContainer: {
    backgroundColor: 'rgba(200,200,200, 0.27)',
    backdropFilter: 'blur(20px)',
    padding: 15,

    marginHorizontal: 20,
    borderRadius: 25,
  },
  connectedContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    elevation: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  connectedIcon: {
    width: 20,
    height: 20,
    borderColor: "black",
    marginRight: 5,
  },
  connectedText: {
    fontSize: 15,
    fontFamily: "Lato-Regular",
    color: "black"
  },
  doorDetailContainer: {
    flexDirection: "row",
  },
  sectionContainer: {
    width: "70%",
    paddingRight: 20,
  },
  asideContainer: {
    width: "30%",
    justifyContent: "center",
    height: 400
  },
  lockIcon: {
    width: "100%",
    height: "90%",
    borderColor: "white"
  },
  sectionHeading: {
    fontFamily: "Lato-Black",
    fontSize: 50,
    color: "black",
    marginTop: 40,
    marginBottom: 50,
  },
  bigButtonContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
    flexDirection: "row",
    backgroundColor:"rgba(185,190,186, 0.8)",
    borderRadius: 40,
    paddingVertical: 11,
  },
  abcd: {},
  abcd: {},
  abcd: {},
});