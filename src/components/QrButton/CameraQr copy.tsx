import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

let camera: Camera;
const CameraQr = () => {
  const [startCamera, setStartCamera] = useState(false);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    console.log(status);
    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert('Access denied');
    }
  };

  return (
    <View style={styles.container}>
      {startCamera ? (
        <View style={{ flex: 1, width: '100%' }}>
          <Camera
            style={{ flex: 1, width: '100%' }}
            ref={(r) => {
              camera = r;
            }}
          ></Camera>
        </View>
      ) : (
        <View style={styles.buttonContainers}>
          <TouchableOpacity style={styles.button} onPress={__startCamera}>
            <Text style={styles.text}> Read QR </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  buttonContainers: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#E81A68',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default CameraQr;
