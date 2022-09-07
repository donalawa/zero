import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const AppButton = ({ title, onPress, borderColor, radius, icon, color}) => {
    return (
        <TouchableOpacity style={
            [styles.button,
            { backgroundColor: color ? colors[color] : 'transparent' },
            {borderColor: borderColor ? colors[borderColor] : 'transparent', 
            borderWidth: 1,
            borderRadius: radius ? radius : 6
            }
            
            ]
        } 
            onPress={onPress}>
        <View style={styles.container}>
            <Text style={[styles.text, {color: borderColor ? colors.primary : colors.white}]}>{title}</Text>
            {icon && <MaterialCommunityIcons name={icon} size={20} style={[styles.icon, {color: borderColor ? colors.primary : colors.white}]}/>}
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: colors.primary,
        paddingVertical: 5,
        height: 48,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{ 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: colors.white,
        marginLeft: 8
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontWeight: '700'
    }
})
export default AppButton;