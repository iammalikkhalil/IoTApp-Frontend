import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../assets/Colors';

export default function DashboardCard({cardData}) {
  return (
    <View style={styles.cardContainer}>
      <Icon name={cardData.iconName} size={30} color={cardData.iconColor} />
      <Text style={[styles.cardText, {color: cardData.textColor}]}>{cardData.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.secondaryBgColor,
    paddingVertical: 10,
    height: 110,
  },
  cardText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    textTransform: 'uppercase',
    paddingHorizontal: 5,
  },
});
