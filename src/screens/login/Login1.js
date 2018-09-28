import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import * as actions from '../../reducers/app/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as utils from "../../utils/utils";
import {Icon, Button, FormLogin} from 'react-native-bucks';


// console.log("login screen here");
const fetchSuccessName = "login_1_" + utils.randomString();
const fetchFailedName = "login_1_" + utils.randomString();

class Login1Screen extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = {
            status: 'Not Connected'
        }
    }

    onNavigatorEvent(event) {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'leftSideMenu') {
                console.log('clicked');
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                })
            }
        }
    }

    componentWillMount() {
        //code here
    }

    componentDidMount() {
        //code here
    }

    componentWillUnmount() {
        //code here
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Login</Text>
                    </View>
                    <FormLogin
                        label='Email'
                        placeholder='Your email address'/>

                    <FormLogin
                        label='Password'
                        placeholder='Password'/>

                    <View style={styles.accountInfo}>
                        <Text style={styles.accountDetail}>FORGOT PASSWORD</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Button
                        buttonStyle={{marginTop: 5, height: 40}}
                        title='LOGIN'/>
                    <Text style={styles.footerText}>or login with your social account</Text>

                    <View style={styles.socialButtons}>
                        <Button
                            buttonStyle={styles.buttonMedia1}
                            iconLeft={{name: 'facebook-official', color: '#fff', size: 16}}
                            title='FACEBOOK'
                        />
                        <Button
                            buttonStyle={styles.buttonMedia2}
                            iconLeft={{name: 'twitter', color: '#fff', size: 16}}
                            title='TWITTER'
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    iconStyle: {
        paddingLeft: 20,
        paddingTop: 30,
        width: 80,
        height: 40
    },
    header: {
        borderBottomWidth: 2,
        borderColor: '#78AEF9',
        marginTop: 40,
        marginBottom: 40,
        width: 55,
        paddingBottom: 5,
        marginLeft: 20,
    },
    headerText: {
        color: '#33383D',
        fontSize: 20,
        fontWeight: 'bold',
    },
    accountInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 20,
        height: 72,
    },
    accountDetail: {
        color: '#78AEF9',
        fontSize: 12,
        fontWeight: 'bold',
    },
    footer: {
        marginBottom: 40,
        flexDirection: 'column',
    },
    footerText: {
        margin: 18,
        textAlign: 'center',
        color: '#727D88',
        fontSize: 12,
    },
    socialButtons: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between'
    },

    buttonMedia1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 20,
        width: 160,
        height: 32,
    },
    buttonMedia2: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 20,
        width: 160,
        height: 32,
        backgroundColor: '#65C6F0',
    },
    textSocial: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 10,
    },
});

function mapStateToProps(stage) {
    if (stage.app) {
        if (stage.app.type === fetchSuccessName || stage.app.type === fetchFailedName) {
            return {
                result: stage.app.result
            }
        }
    } else {
        return {};
    }
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login1Screen)