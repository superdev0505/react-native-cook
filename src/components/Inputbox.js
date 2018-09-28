import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList, AsyncStorage} from 'react-native';
import {Button, List, ListItem, Tabs, Tab, FormInput} from "react-native-elements";

class Inputbox extends Component {
    render() {
        const {isLoad, text} = this.props;
        return (
            <Spinner visible={isLoad} textContent={text} textStyle={{color: '#FFF'}}/>
        );
    }
}

export default Inputbox;