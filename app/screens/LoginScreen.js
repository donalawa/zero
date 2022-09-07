import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Yup from 'yup';


import AuthFormHeader from '../components/AuthFormHeader';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppInput from '../components/form/AppInput';
import routes from './routes';
import SubmitButton from '../components/form/SubmitButton';
import AppButton from '../components/AppButton';
import AppFormField from '../components/form/AppFormField';
import AppForm from '../components/form/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen({ navigation }) {

    return (
        <Screen style={styles.container}>
         <AppForm 
           initialValues={{email: '', password: ''}}
           onSubmit={values => console.log(values)}
           validationSchema={validationSchema}
         >
            <View style={styles.loginContainer}>
                <AuthFormHeader title="ZERO" message="WELCOME TO"/>
                    <AppFormField
                    icon="email" 
                    placeholder="Email Address"
                    autoCapitalize={false}
                    autoCorrect={false}
                    textContentType="email"
                    name="email"
                    />
                    <AppFormField 
                    icon="lock" 
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize={false}
                    autoCorrect={false}
                    textContentType="password"
                    name="password"
                    />
                    <View style={styles.btnContainer}>
                        <SubmitButton title="Log in" />
                    </View>
                    <Text style={styles.forgotText}>Forgot password</Text>
                    <View style={styles.btnContainer}>
                        <AppButton title="Sign up" onPress={() => navigation.navigate(routes.REGISTER)} icon="arrow-right" borderColor="primary"/>
                    </View>
                </View>
         </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14
    },
    forgotText: {
        color: colors.medium
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        marginVertical: 30,
        width: '100%'
    },
 
})
export default LoginScreen;