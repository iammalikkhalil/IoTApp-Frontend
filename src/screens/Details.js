import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native';
import React, { useEffect, useState } from 'react';
import socketServcies from '../utils/SocketService';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import Ip from '../assets/Ip';

export default function Details(props) {

  const [dis, setDis] = useState(false)

  async function AdminResponse(status) {
    // setDis(true)
    let data = JSON.stringify({
      requestId: props.route.params.request._id,
      adminId: props.route.params.admin,
      status,
    });
    socketServcies.emit('WSAdminResponse', data);
    props.navigation.navigate("Dashboard", props.route.params.dashboard)
  }


  return (
    <LinearGradient
      style={styles.container}
      colors={['#FEF5EC', '#E1FBFD', '#FEF5EC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.09, 1]}>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.personImage]}
          source={{ uri: `${Ip}/images/${props.route.params.request.user.avatar}` }}
        />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.row1}>
          <View style={[styles.btnContainer, { width: 60, height: 60, backgroundColor: "#ffffff" }]}>
            <Image style={[styles.btnIcon]} source={require('../assets/images/avatar.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textContainerHeading]} >{props.route.params.request.user.name}</Text>
            <Text style={[styles.textContainerSubHeading]} >{props.route.params.request.user.role.name}</Text>
          </View>
        </View>

        <View style={styles.row2}>
          <TouchableOpacity style={[styles.btnContainer, { width: 80, height: 80, backgroundColor: "#666666" }]} onPress={() => { AdminResponse("rejected") }} disabled={dis}>
            <Image style={[styles.btnIcon]} source={require('../assets/images/cross.png')} />
          </TouchableOpacity>
          <View style={styles.bigButtonContainer}>
            <TouchableOpacity style={[styles.btnContainer, { width: 80, height: 80, }]} onPress={() => { AdminResponse("accepted") }} disabled={dis}>
              <Image style={[styles.btnIcon]} source={require('../assets/images/tick.png')} />
            </TouchableOpacity>
            <Text style={[styles.textContainerHeading]} > Open</Text>

            <Image style={{ width: 40, height: 40 }} source={require('../assets/images/forward.png')} />

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
  imageContainer: {
    width: "100%",
    height: "50%",
  },
  personImage: {
    width: "100%",
    height: "103%"
  },
  dataContainer: {
    width: "100%",
    height: "50%",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: 'rgba(200,200,200, 0.4)',
    backdropFilter: 'blur(20px)',
  },
  row1: {
    flexDirection: "row",
    marginHorizontal: 15,
    paddingVertical: 30,
    marginTop: 30,
    borderBottomWidth: 0.8,
    borderBlockColor: "gray"
  },
  textContainer: {
    marginHorizontal: 10,
  },
  textContainerHeading: {
    fontFamily: "Lato-Black",
    fontSize: 20,
    color: "black",
    marginVertical: 5,
  },
  textContainerSubHeading: {
    fontFamily: "Lato-Regular",
    fontSize: 18,
    color: "black",
  },
  row2: {
    marginTop: 30,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},
  abc: {},







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
  bigButtonContainer: {
    width: "70%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#e8f4f4",
    borderRadius: 70,
    paddingVertical: 15,
  },
});