import {Provider} from 'react-redux'
import {Platform} from 'react-native'
import {Navigation} from 'react-native-navigation'
import {registerScreens} from './screens'
import configureStore from "./store/configureStore";
import React, {Component} from 'react';

const store = configureStore();
registerScreens(store, Provider);


//
const navigatorStyle = {
    navBarTranslucent: true,
    drawUnderNavBar: true,
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    statusBarTextColorScheme: 'light',
    drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
    animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
    screen: {
        screen: "exp.Categories",
        title: "PYMT app",
        navigatorStyle: {
            // Android only
            // navigationBarColor: '#000000', // change the background color of the bottom native navigation bar.
            // // navBarTitleTextCentered: true, // default: false. centers the title.
            // statusBarColor: '#000000', // change the color of the status bar.
            // drawUnderStatusBar: false, // default: false, will draw the screen underneath the status bar. Useful together with statusBarColor: transparent
        },
        // navigatorButtons: {}
    },
    drawer: {
        left: {
            screen: 'exp.LeftSideMenu',
            passProps: {},
            fixedWidth: 500
        },
        style: {
            drawerShadow: true,
            contentOverlayColor: 'rgba(0, 0, 0, 0.25)',
            leftDrawerWidth: 80 //percent
        },
        type: 'MMDrawer',
        animationType: 'slide',
        disableOpenGesture: false
    },
});
