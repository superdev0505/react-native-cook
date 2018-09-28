import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import * as actions from '../../reducers/app/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as utils from "../../utils/utils";
// import {Icon} from 'react-native-bucks';
import Categories2 from "./Categories2";

const fetchSuccessName = "categories_" + utils.randomString();
const fetchFailedName = "categories_" + utils.randomString();

class CategoriesScreen extends Component {
    static navigatorButtons = {
        leftButtons: [
            {
                id: 'leftSideMenu',
                title: 'Menu',
                buttonColor: 'blue',
                buttonFontSize: 14,
                buttonFontWeight: '600',
                icon: require('../../../images/menu-ico.png'),
                disableIconTint: true
            }
        ],
        rightButtons: [
            {
                id: "nextPage",
                title: "Next",
                // icon: require('../../../images/ic_add_alert_1x.android.png')
            }
        ],
    };

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'leftSideMenu') {
                console.log('clicked');
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                })
            } else if (event.id === 'nextPage') {
                console.log('clicked');
                this.props.navigator.push({
                    screen: "exp.Categories3",
                    title: "Categories"
                });
            }
        }
    }

    render() {
        return (
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <Categories2/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        position: 'absolute',
        top: 0,
        zIndex: 1
    },
    iconStyle: {
        paddingLeft: 20,
        paddingTop: 30,
        width: 80,
        height: 40,
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen)