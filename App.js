import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppButton from './app/components/AppButton';
import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
      <LoginScreen />
  );
}

const styles = StyleSheet.create({

});
