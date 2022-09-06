import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';


const AppButton = ({ title, onPress, color = 'primary'}) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: colors.primary,
        paddingVertical: 5,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 17,
        colors: colors.white
    }
})
export default AppButton;