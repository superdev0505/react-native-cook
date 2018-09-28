import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, AsyncStorage, TouchableOpacity} from 'react-native';

class LeftSideMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: ""
        }
    }

    componentDidMount() {
    }

    onHomePage() {
        this.props.navigator.push({
            screen: "exp.Categories",
            title: "Pymt app"
        });
        //close slide bar
        this.closeDrawer();
    }

    onLoginPage() {
        this.props.navigator.push({
            screen: "exp.Login1",
            title: "Login app"
        });
        //close slide bar
        this.closeDrawer();
    }

    onCat3Page() {
        this.props.navigator.push({
            screen: "exp.Categories3",
            title: "Categories"
        });
        //close slide bar
        this.closeDrawer();
    }

    closeDrawer() {
        this.props.navigator.toggleDrawer({
            side: 'left',
            to: 'closed'
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo_view}>
                    <TouchableOpacity onPress={this.onHomePage.bind(this)}>
                        <Image source={require("../../images/logo/logo.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <Text>Account Name admin@gmail.com</Text>
                    <TouchableOpacity onPress={this.onLoginPage.bind(this)}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onHomePage.bind(this)}>
                        <Text>Category</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onCat3Page.bind(this)}>
                        <Text>Category 2</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "80%",
        backgroundColor: '#78AEF9',
        padding: 20
    },
    logo: {
        width: 140,
        height: 70
        //backgroundColor: '#00008b'
    },
    logo_view: {
        //backgroundColor: '#f0f8ff',
        height: 100,
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        height: 50
    },
    item_small: {
        paddingBottom: 10
    }
});
export default LeftSideMenu;