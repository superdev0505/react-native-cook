import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native'
import * as actions from '../../reducers/app/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as utils from "../../utils/utils";
import {Icon, FormLogin, Button} from 'react-native-bucks';
import CategoriesSearch from "./CategoriesSearch";


const fetchSuccessName = "categories_3_screen_" + utils.randomString();
const fetchFailedName = "categories_3_screen_" + utils.randomString();

class Categories3Screen extends Component {
    static navigatorButtons = {
        rightButtons: [
            {
                id: "nextPage",
                title: "Next",
            }
        ],
    };

    constructor(props) {
        super(props);
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
                    screen: "exp.CategoriesSelected",
                    title: "Category Name"
                });
            }
        }
    }

    onPress = () => {
        this.props.navigator.push({
            screen: "exp.CategoriesSelected",
            title: "Selected Category"
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <CategoriesSearch/>
                <View style={[styles.groupCat, styles.groupFirstCat]}>
                    <View style={styles.catSlide}>
                        <TouchableHighlight
                            onPress={this.onPress}
                            style={styles.bgIcon}
                            underlayColor='#fff'>
                            <Image source={require("../../../images/output/cat2_1_transport.png")}
                                   style={[styles.icon, styles.icon1]}/>
                        </TouchableHighlight>
                        <Text style={styles.subTitle}>Transport</Text>
                    </View>
                    <View style={styles.catSlide}>
                        <TouchableHighlight
                            onPress={this.onPress}
                            style={[styles.bgIcon, styles.bgIcon2]}
                            underlayColor='#fff'>
                            <Image source={require("../../../images/output/cat2_2_food.png")}
                                   style={[styles.icon, styles.icon2]}/>
                        </TouchableHighlight>
                        <Text style={styles.subTitle}>Food</Text>
                    </View>
                    <View style={styles.catSlide}>
                        <TouchableHighlight
                            onPress={this.onPress}
                            style={[styles.bgIcon, styles.bgIcon3]}
                            underlayColor='#fff'>
                            <Image source={require("../../../images/output/cat2_3_bill.png")}
                                   style={[styles.icon, styles.icon3]}/>
                        </TouchableHighlight>
                        <Text style={styles.subTitle}>Bills</Text>
                    </View>
                </View>
                <View style={styles.groupCat}>
                    <View style={styles.catSlide}>
                        <TouchableHighlight
                            style={[styles.bgIcon, styles.bgIcon4]}
                            underlayColor='#fff'>
                            <Image source={require("../../../images/output/cat2_4_home.png")}
                                   style={[styles.icon, styles.icon4]}/>
                        </TouchableHighlight>
                        <Text style={styles.subTitle}>Home</Text>
                    </View>
                    <View style={styles.catSlide}>
                        <TouchableHighlight
                            style={[styles.bgIcon, styles.bgIcon5]}
                            underlayColor='#fff'>
                            <Image source={require("../../../images/output/cat2_5_pets.png")}
                                   style={[styles.icon, styles.icon5]}/>
                        </TouchableHighlight>
                        <Text style={styles.subTitle}>Pets</Text>
                    </View>
                    <View style={styles.catSlide}>
                        <TouchableHighlight
                            style={[styles.bgIcon, styles.bgIcon6]}
                            underlayColor='#fff'>
                            <Image source={require("../../../images/output/cat2_6_edu.png")}
                                   style={[styles.icon, styles.icon6]}/>
                        </TouchableHighlight>
                        <Text style={styles.subTitle}>Education</Text>
                    </View>
                </View>
                <View style={styles.groupCat}>
                    <View style={styles.catSlide}>
                        <TouchableHighlight
                            style={[styles.bgIcon, styles.bgIcon7]}
                            underlayColor='#fff'>
                            <Image source={require("../../../images/output/cat2_7_beauty.png")}
                                   style={[styles.icon, styles.icon7]}/>
                        </TouchableHighlight>
                        <Text style={styles.subTitle}>Beauty</Text>
                    </View>
                    <View style={styles.catSlide}>
                        <TouchableHighlight
                            style={[styles.bgIcon, styles.bgIcon8]}
                            underlayColor='#fff'>
                            <Image source={require("../../../images/output/cat2_8_kids.png")}
                                   style={[styles.icon, styles.icon8]}/>
                        </TouchableHighlight>
                        <Text style={styles.subTitle}>Kids</Text>
                    </View>
                    <View style={styles.catSlide}>
                        <TouchableHighlight
                            style={[styles.bgIcon, styles.bgIcon9]}
                            underlayColor='#fff'>
                            <Image source={require("../../../images/output/cat2_9_health.png")}
                                   style={[styles.icon, styles.icon9]}/>
                        </TouchableHighlight>
                        <Text style={styles.subTitle}>Healthcare</Text>
                    </View>
                </View>
                <View style={styles.groupCat}></View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // width: '90%'
    },
    header: {
        // height: 110,
        // paddingTop: 30,
        // height: 20,
        // paddingBottom: 20
    },
    mainTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'normal'
    },
    subTitle: {
        fontSize: 16,
        // color: '#fff',
        fontWeight: 'normal',
        paddingTop: 10,
        paddingBottom: 10
    },
    groupCat: {
        flex: 1,
        flexDirection: 'row',
        // paddingTop: 10
        // backgroundColor: 'red'
    },
    groupFirstCat: {
        paddingTop: 40
    },
    catSlide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingBottom: 20,
        height: 70,
        width: 70,
    },
    buttonStyle: {
        flexDirection: 'row',
        height: 20,
        width: 300,
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 28,
        width: 300,
        height: 55,
        marginTop: 20,
        backgroundColor: '#fff'
    },
    textSocial: {
        color: '#595F66',
        fontWeight: 'normal',
        fontSize: 12,
        paddingLeft: 20
    },
    searchIcon: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        padding: 10,
        backgroundColor: '#6AE1C4',
        borderRadius: 22,
    },
    bgIcon: {
        backgroundColor: '#4A90E2',
        borderRadius: 50,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
    },
    bgIcon2: {
        backgroundColor: '#23CC97',
    },
    bgIcon3: {
        backgroundColor: '#FFA349',
    },
    bgIcon4: {
        backgroundColor: '#FF6868',
    },
    bgIcon5: {
        backgroundColor: '#BF7756',
    },
    bgIcon6: {
        backgroundColor: '#8E8FFF',
    },
    bgIcon7: {
        backgroundColor: '#FF638F',
    },
    bgIcon8: {
        backgroundColor: '#73C849',
    },
    bgIcon9: {
        backgroundColor: '#FF5050',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon1: {
        width: 42,
        height: 19,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon2: {
        width: 28,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon3: {
        width: 26,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon4: {
        width: 28,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon5: {
        width: 33,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon6: {
        width: 32,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon7: {
        width: 29,
        height: 29,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon8: {
        width: 29,
        height: 29,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon9: {
        width: 18,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories3Screen)