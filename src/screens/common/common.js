/**
 * Created by vuinguyen on 07/11/2017.
 */
import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, FlatList, AsyncStorage} from 'react-native'
import Spinner from "react-native-loading-spinner-overlay";

class Common extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Spinner visible={isLoad} textContent={text} textStyle={{color: '#FFF'}}/>
            </View>
        );
    }
}

export default Common;