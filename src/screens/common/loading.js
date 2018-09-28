/**
 * Created by vuinguyen on 07/11/2017.
 */
import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, FlatList, AsyncStorage} from 'react-native'
import Spinner from "react-native-loading-spinner-overlay";

class Loading extends Component {
    render() {
        const {isLoad, text} = this.props;
        return (
            <Spinner visible={isLoad} textContent={text} textStyle={{color: '#FFF'}}/>
        );
    }
}

export default Loading;