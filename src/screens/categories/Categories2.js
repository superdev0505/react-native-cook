import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import * as actions from '../../reducers/app/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as utils from "../../utils/utils";
// import {Icon, FormLogin, Button} from 'react-native-bucks';
import CategoriesSearch from "./CategoriesSearch";

const fetchSuccessName = "categories_2_screen_" + utils.randomString();
const fetchFailedName = "categories_2_screen_" + utils.randomString();

class Categories2Screen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <CategoriesSearch/>
                <View style={styles.navGroupCat}>
                    <ScrollView>
                        <View style={styles.catSlide}>
                            <Image source={require("../../../images/output/cat1_dessert.png")}/>
                        </View>
                        <View style={styles.catSlide}>
                            <Image source={require("../../../images/output/cat1_drinks.png")}/>
                        </View>
                        <View style={styles.catSlide}>
                            <Image source={require("../../../images/output/cat1_entree.png")}/>
                        </View>
                        <View style={styles.catSlide}>
                            <Image source={require("../../../images/output/cat1_french_toast.png")}/>
                        </View>
                    </ScrollView>
                </View>
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
    },
    mainTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'normal'
    },
    subTitle: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'normal'
    },
    navGroupCat: {
        flex: 1,
        flexDirection: 'column',
    },
    catSlide: {
        flex: 1,
        flexDirection: 'column',
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories2Screen)