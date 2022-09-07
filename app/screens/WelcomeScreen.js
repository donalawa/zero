import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import AppButton from '../components/AppButton';
import routes from './routes';
import Screen from '../components/Screen';
import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.headContainer}>
                    <Image style={styles.image} source={require('../../assets/zerowelcome.png')}/>
                    
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Welcome to zero planner</Text>
                    <Text style={styles.description}>Best way to improve your productivity rate and also monitor how much time you spent working every single day.</Text>
                    <View style={styles.buttonContainer}>
                    <AppButton title="Get Started" onPress={() => navigation.navigate(routes.LOGIN)} radius={15} color="primary"/>
                    </View>
                    </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 25,
        width: '100%'
    },
    container: {
        alignItems: 'center'
    },
    contentContainer:{
        paddingVertical: 25,
        paddingHorizontal:28,
        height: '35%',
        // backgroundColor: colors.light,
        alignItems: 'center',
        width: '90%'
    },

    description: {
        color: colors.medium,
        textAlign: 'center',
        width: 250,
        marginTop: 10
    },
    headContainer:{
        width: '100%',
        height: '65%',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width:300,
        height: 300
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.light,
        textAlign: 'center'
    }
})

export default WelcomeScreen;