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
import {Icon, FormLogin} from 'react-native-bucks';

const fetchSuccessName = "categories_search_" + utils.randomString();
const fetchFailedName = "categories_search_" + utils.randomString();

class CategoriesSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchBoxPlaceholder: this.props.placeholder || "SEARCH"
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <FormLogin
                        label=''
                        placeholder={this.state.searchBoxPlaceholder}
                    />
                    <Icon
                        color='#fff'
                        name='search'
                        size={18}
                        style={styles.searchIcon}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // width: '90%'
    },
    header: {
        // height: 130,
        // paddingTop: 50,
    },
    searchIcon: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        padding: 10,
        backgroundColor: '#6AE1C4',
        borderRadius: 22,
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSearch)