import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

import MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px';
import * as MercadoPagoService from './mercadopago-service';

import { MP_PUBLIC_KEY } from '@env';

const MercadoPago = () => {
  const [paymentResult, setPaymentResult] = useState(null);

  const startCheckout = async () => {
    try {
      const preferenceId = await MercadoPagoService.getPreferenceId(
        'payer@email.com',
        {
          title: 'Dummy Item Title',
          description: 'Dummy Item Description',
          quantity: 1,
          currency_id: 'ARS',
          unit_price: 10.0,
        }
      );
      //console.log(preferenceId);
      const payment = await MercadoPagoCheckout.createPayment({
        publicKey: MP_PUBLIC_KEY,
        preferenceId,
      });
      setPaymentResult(payment);
    } catch (err) {
      Alert.alert('Something went wrong', err.message);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={startCheckout}>
        <Text>Start Payment</Text>
      </TouchableOpacity>
      <Text>Payment: {JSON.stringify(paymentResult)}</Text>
    </View>
  );
};
export default MercadoPago;
