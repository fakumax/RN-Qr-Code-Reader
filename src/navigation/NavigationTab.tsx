import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="QR Code Reader by Fakumax"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          //headerTitle: () => <ImageHeader />,
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
