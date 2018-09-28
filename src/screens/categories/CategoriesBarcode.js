import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    Dimensions
} from 'react-native'
import * as actions from '../../reducers/app/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as utils from "../../utils/utils";
import Icon from "react-native-vector-icons/MaterialIcons";
import {ListItem, Button} from "react-native-elements";

const fetchSuccessName = "categories_selected_" + utils.randomString();
const fetchFailedName = "categories_selected_" + utils.randomString();
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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

class CategoriesBarcode extends Component {
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
                    screen: "exp.Login1",
                    title: "Pymt App Login"
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
        const rightIconRender = (
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
                <View style={styles.barCode}>
                    <View style={styles.barImage}>
                        <Image source={require("../../../images/output/barcode.png")} style={{flex: 1}} />
                    </View>
                </View>
                <View>
                    <FlatList
                        data={data}
                        extraData={this.state}
                        renderItem={({item, idx}) => this.renderRow(item, idx)}
                        keyExtractor={this._keyExtractor.bind(this)}
                    />
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerBtn}>
                        <Button
                            large
                            title='Pay $45.17'
                            containerViewStyle={{width: width}}
                            backgroundColor="#6AE1C4"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    barCode: {
        flexDirection: 'row',
        // alignItems: 'stretch'
    },
    barImage: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        bottom: 0,
        // justifyContent: 'space-between'
    },
    footerBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBarcode)