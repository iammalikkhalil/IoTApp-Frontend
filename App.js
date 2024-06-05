import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import socketServcies from './src/utils/SocketService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './src/components/Navigation';


export default function App() {
  useEffect(() => {
    socketServcies.initializeSocket();
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Navigation />
    </View>
  );
}