import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TouchableHighlight, Image, Platform } from 'react-native'

const styles = StyleSheet.create({
    row: {
        height: 48,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)'
    },
    text: {
        fontSize: 16
    },
    score: {
        marginLeft: 10,
        marginRight:10,
        fontWeight: 'bold'
    },
    team: {
    },
    flagLeft: {
        marginLeft: 5,
        height: 20,
        width: 20
    },
    flagRight: {
        marginRight: 5,
        height: 20,
        width: 20
    }
});

class Row extends Component {

    tapOnRow = () => {
        console.log('hello world');
    };

    render() {
        return(
            <TouchableHighlight onPress={this.tapOnRow} activeOpacity={0.1} underlayColor="transparent">
                <View style={styles.row}>
                    <Text style={[styles.text, styles.team]}>Hello world</Text>

                </View>
            </TouchableHighlight>
        );
    }
}

export default Row;