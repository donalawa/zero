import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AuthFormHeader from '../components/AuthFormHeader';
import AppInput from '../components/form/AppInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import SubmitButton from '../components/form/SubmitButton';
import routes from './routes';
import AppForm from '../components/form/AppForm';
import AppFormField from '../components/form/AppFormField';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    username: Yup.string().required().min(3).label('Username'),
    password: Yup.string().required().min(4).label('Password'),
    confirmPassword: Yup.string().required().min(4).label('Confirm Password')
})

function RegisterScreen({ navigation }) {
    return (
        <Screen>
            <AppForm 
                initialValues={{email: '', username: '', password: '', confirmPassword: ''}}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                <View style={styles.container}>
                    <AuthFormHeader title="SIGN UP" message="DON'T HAVE AN ACCOUNT ?"/>
                    <AppFormField
                    icon="email" 
                    placeholder="Email Address"
                    autoCapitalize={false}
                    autoCorrect={false}
                    textContentType="email"
                    name='email'

                    />
                    <AppFormField
                    icon="account" 
                    placeholder="Username"
                    autoCapitalize={false}
                    autoCorrect={false}
                    textContentType="text"
                    name='username'
                    />
                    <AppFormField 
                    icon="lock" 
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize={false}
                    autoCorrect={false}
                    textContentType="password"
                    name='password'
                    />
                    <AppFormField 
                    icon="lock" 
                    placeholder="Confirm Password"
                    secureTextEntry
                    autoCapitalize={false}
                    autoCorrect={false}
                    textContentType="password"
                    name='confirmPassword'
                    />
                    <View style={styles.btnContainer}>
                        <SubmitButton title="Sign up" />
                    </View>
                    <View style={styles.btnContainer}>
                        <AppButton title="Log in" onPress={() => navigation.navigate(routes.LOGIN)} icon="arrow-right" borderColor="primary"/>
                    </View>

                </View>
                </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 14
    },
    btnContainer: {
        width: '100%',
        marginVertical: 10
    }
})
export default RegisterScreen;