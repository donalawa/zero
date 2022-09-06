import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppSeperator from '../components/AppSeperator';
import Screen from '../components/Screen';
import colors from '../config/colors';

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.welcome}>WELCOME TO</Text>
                <Text style={styles.title}>ZERO</Text>
                <AppSeperator />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    loginContainer: {

    },
    welcome: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Poppins'
    }
})
export default LoginScreen;