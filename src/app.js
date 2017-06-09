
import React, { Component, PropTypes } from 'react';
import {
    StackNavigator,
    TabRouter,
    createNavigator,
    createNavigationContainer,
    addNavigationHelpers,
} from 'react-navigation';

import Layout from './screens';
import Home from './screens/Home';
import Charts from './screens/Charts';
import Category from './screens/Category';
import Fav from './screens/Fav';
import Player from './screens/Player';
import Login from './screens/Login';

const router = TabRouter({
    Home: {
        screen: Home,
    },

    Charts: {
        screen: Charts,
    },

    Fav: {
        screen: Fav,
    },
}, {
    initialRouteName: 'Home'
});

const view = ({ router, navigation }) => {

    const ActiveScreen = router.getComponentForState(navigation.state);

    return (
        <Layout navigation={navigation}>
            <ActiveScreen></ActiveScreen>
        </Layout>
    );
};

const MainNavigator = StackNavigator({

    _HOME: {
        screen: createNavigationContainer(createNavigator(router)(view)),
    },

    Player: {
        screen: ({ navigation }) => {

            return (
                <Layout showFooter={false} navigation={navigation}>
                    <Player></Player>
                </Layout>
            );
        },
    },

    Login: {

        screen: ({ navigation }) => {

            return (
                <Layout showFooter={false} navigation={navigation}>
                    <Login></Login>
                </Layout>
            );
        },
    },
}, {
    mode: 'modal',
    initialRouteName: '_HOME',
    navigationOptions: {
        header: false,
    }
});

export default StackNavigator({

    Category: {
        screen: ({ navigation }) => {

            return (
                <Layout showFooter={false} navigation={navigation}>
                    <Category></Category>
                </Layout>
            );
        },
    },

    _MAIN: {
        screen: MainNavigator,
    },
}, {
    initialRouteName: '_MAIN',

    navigationOptions: {
        header: false,
    },
});
