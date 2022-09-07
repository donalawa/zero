import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AuthFormHeader from '../components/AuthFormHeader';
import AppForm from '../components/form/AppForm';
import AppFormField from '../components/form/AppFormField';
import SubmitButton from '../components/form/SubmitButton';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email')
})

function ForgotPassword(props) {
    return (
        <Screen >    
            <View style={styles.container}>
            <AuthFormHeader title="ZERO" message="FORGOT PASSWORD ?"/>
            <AppForm 
             initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={values => console.log(values)}
            >
                <AppFormField 
                 icon="email" 
                 placeholder="Email Address"
                 autoCapitalize={false}
                 autoCorrect={false}
                 textContentType="email"
                 name='email'
                />
                <SubmitButton title="Reset Password"/>
            </AppForm>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ForgotPassword;