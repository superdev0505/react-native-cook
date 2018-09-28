import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native'
import * as actions from '../../reducers/app/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as utils from "../../utils/utils";
import Icon from "react-native-vector-icons/MaterialIcons";
import {ListItem} from "react-native-elements";
import CategoriesSearch from "./CategoriesSearch";

const fetchSuccessName = "categories_selected_" + utils.randomString();
const fetchFailedName = "categories_selected_" + utils.randomString();

//define data
const data = [
    {
        id: 1,
        name: 'Drink 1',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subTitle: '$7.86'
    },
    {
        id: 2,
        name: 'Drink 2',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subTitle: '$7.86'
    },
    {
        id: 3,
        name: 'Drink 3',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subTitle: '$7.86'
    },
]

class CategoriesSearchList extends Component {
    static navigatorButtons = {
        rightButtons: [
            {
                id: "nextPage",
                title: "Next",
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
                    screen: "exp.CategoriesBarcode",
                    title: "Barcode"
                });
            }
        }
    }

    _keyExtractor = (item, idx) => item.id
    onPressItem = (item, idx) => {
        console.log("on press item")
        return null;
    }

    renderRow(item, i) {
        let rightIconRender;
        rightIconRender = (
            <View>
                <Icon name="add" color={"#6AE1C4"} size={30}/>
            </View>
        )
        return (
            <ListItem
                roundAvatar
                avatar={{uri: item.avatarUrl}}
                key={i}
                title={item.name}
                subtitle={item.subTitle}
                onPress={this.onPressItem.bind(this, item, i)}
                rightIcon={rightIconRender}
                containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: 'white'}}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <CategoriesSearch
                    placeholder="Drink"
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
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'column',
        // width: '90%'
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSearchList)