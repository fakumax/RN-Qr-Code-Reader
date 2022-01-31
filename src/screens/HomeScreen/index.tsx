import React from 'react';
import { View, StyleSheet } from 'react-native';
//import QrButton from '../../components/QrButton';
import QrButton from '../../components/QrButton/CameraQr';
import MercadoPago from '../../components/MercadoPago/MercadoPago';

const HomeScreen = () => {
  return (
    <View style={styles.vista}>
      <QrButton />
      <MercadoPago />
    </View>
  );
};
const styles = StyleSheet.create({
  vista: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
