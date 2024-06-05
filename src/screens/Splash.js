import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import splashImage from '../assets/images/SplashScreen.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Splash = ({ navigation }) => {

    async function checkRole() {
        let value = await AsyncStorage.getItem('user');
        if (value != null) {
            value = await JSON.parse(value)
            console.log(value.role);
            if (value.role && (value.role == "65e8a993a054b13412e618ee" || value.role.name == 'ADMIN')) {
                Navigator("Dashboard", value)
            } else {
                Navigator("LoginUser")
            }
        } else {
            Navigator("LoginUser")
        }
    }
    useEffect(() => {
        setTimeout(() => {
            checkRole();
        }, 1500);
    }, []);


    function Navigator(screenName, value = "") {
        setTimeout(() => {
            navigation.replace(`${screenName}`, value);
        }, 1500);
    }
    return (
        <View style={styles.container}>
            <Image source={splashImage} style={styles.splashImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});