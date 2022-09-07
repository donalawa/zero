import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import AppSeperator from './AppSeperator';
import colors from '../config/colors';

function AuthFormHeader({ title, message}) {
    return (
        <>
        <Text style={styles.welcome}>{message}</Text>
        <Text style={styles.title}>{title}</Text>
        <AppSeperator />
        </>
    );
}

const styles = StyleSheet.create({
    welcome: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
    title: {
        color: colors.primary,
        fontSize: 55,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 4
    }
})
export default AuthFormHeader;