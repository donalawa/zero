import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
function AppSeperator(props) {
    return (
        <View style={styles.line}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 1,
        width: '100%',
        backgroundColor: colors.primary,
        marginBottom: 40
    }
})

export default AppSeperator;