import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image
} from 'react-native'
import * as actions from '../../reducers/app/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as utils from "../../utils/utils";
import CategoriesSearch from "./CategoriesSearch";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {List, ListItem, CheckBox} from "react-native-elements";

const fetchSuccessName = "categories_selected_" + utils.randomString();
const fetchFailedName = "categories_selected_" + utils.randomString();

//define data
const data = [
    {
        id: 1,
        name: 'Hot Dog',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subTitle: '$7.86'
    },
    {
        id: 2,
        name: 'Nachos',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subTitle: '$7.86'
    },
    {
        id: 3,
        name: 'Hamburger',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subTitle: '$7.86'
    },
    {
        id: 4,
        name: 'Drinks',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subTitle: '$7.86'
    },
]
const subData = [
    {
        id: 1,
        name: 'Small',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subTitle: '$7.86'
    },
    {
        id: 2,
        name: 'Medium',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subTitle: '$8.50'
    },
]

class CategoriesSelected extends Component {
    static navigatorButtons = {
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
        this.state = {
            isCheck: true
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
            } else if (event.id === 'nextPage') {
                console.log('clicked');
                this.props.navigator.push({
                    screen: "exp.CategoriesSearchList",
                    title: "Search"
                });
            }
        }
    }

    _keyExtractor = (item, idx) => item.id
    onPressItem = (item, idx) => {
        console.log("on press item")
        return null;
    }

    renderRow(item, i, idx) {
        let subRowData, rightIconRender;
        rightIconRender = (
            <View>
                <Icon name="add" color={"#6AE1C4"} size={30}/>
            </View>
        )
        subRowData = item.subTitle;
        i = item.id;
        if (i) {
            i = i - 1;
        }
        if (i === 1 || i === 2) {
            if (i === 1) {
                subRowData = (
                    <List containerStyle={{marginBottom: 10}}>
                        {
                            subData.map((l, i) => (
                                <ListItem
                                    roundAvatar
                                    avatar={{uri: l.avatar_url}}
                                    key={i}
                                    title={l.name}
                                    subtitle={l.subTitle}
                                    rightIcon={rightIconRender}
                                    containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: 'white'}}
                                />
                            ))
                        }
                    </List>
                )
            } else {
                subRowData = (
                    <View style={styles.subCheckboxView}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkboxLeft}>
                                <CheckBox
                                    title='Cheese +$.50'
                                    checkedColor="#6AE1C4"
                                    checked={this.state.isCheck}
                                />
                            </View>
                            <View style={styles.checkboxRight}>
                                <CheckBox
                                    title='Mayo'
                                    checkedColor="#6AE1C4"
                                    checked={this.state.isCheck}
                                />
                            </View>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkboxLeft}>
                                <CheckBox
                                    title='Lettuce'
                                    checkedColor='red'
                                />
                            </View>
                            <View style={styles.checkboxRight}>
                                <CheckBox
                                    title='Ketchup'
                                    checkedColor='red'
                                />
                            </View>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkboxLeft}>
                                <CheckBox
                                    title='Tomato'
                                    checkedColor='red'
                                />
                            </View>
                            <View style={styles.checkboxRight}>
                                <CheckBox
                                    title='Mustard'
                                    checkedColor='red'
                                />
                            </View>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkboxLeft}>
                                <CheckBox
                                    title='Onion'
                                    checkedColor='red'
                                />
                            </View>
                            <View style={styles.checkboxRight}>
                                <CheckBox
                                    title='Pickle'
                                    checkedColor='red'
                                />
                            </View>
                        </View>
                    </View>
                )
            }
            rightIconRender = (
                <View>
                    <Ionicons name="ios-arrow-down" color="#6AE1C4" size={30} style={{marginRight: 5}}/>
                </View>
            )
        } else {
            console.log("here " + i);
        }
        return (
            <ListItem
                roundAvatar
                avatar={{uri: item.avatarUrl}}
                key={i}
                title={item.name}
                subtitle={subRowData}
                onPress={this.onPressItem.bind(this, item, i)}
                rightIcon={rightIconRender}
                containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: 'white'}}
            />
        )
    }

    renderSubRow() {

    }

    render() {
        return (
            <View style={styles.container}>
                <CategoriesSearch
                    placeholder="Search Food"
                />
                <FlatList
                    data={data}
                    extraData={this.state}
                    renderItem={({item, idx}) => this.renderRow(item, idx)}
                    keyExtractor={this._keyExtractor.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    subtitleView: {
        flexDirection: 'row',
    },
    subViewLeft: {
        flex: 1
    },
    subCheckboxView: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 15
    },
    checkboxRow: {
        flex: 1,
        flexDirection: 'row',
    },
    checkboxLeft: {
        flex: 1
    },
    checkboxRight: {
        flex: 1
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSelected)