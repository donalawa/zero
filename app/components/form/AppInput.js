import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../../config/styles';
import colors from '../../config/colors';

function AppInput({ icon, width = '100%', ...otherProps}) {
    return (
        <View style={[styles.container, { width: width }]}>
            {icon && (<View style={styles.iconContainer}>
                <MaterialCommunityIcons size={40} name={icon} style={styles.icon} color={defaultStyles.colors.white} />
                </View>)}
            <TextInput
             placeholderTextColor={defaultStyles.colors.medium}
             style={defaultStyles.text}
             {...otherProps}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 51,
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 11,
        flexDirection: 'row',
        marginVertical: 10
    },
    icon: {
    
    },
    iconContainer: {
        width: '15%',
        height: '100%',
        backgroundColor: defaultStyles.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11,
        marginRight: 5
    }
})

export default AppInput;