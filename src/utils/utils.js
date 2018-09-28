/**
 * Created by vuinguyen on 22/10/2017.
 */
import React, {Component} from 'react'
// import Toast from "react-native-simple-toast"; //both android, ios
import Toast from "react-native-toast";
import {AsyncStorage, View, Text} from "react-native"; //both android, ios
import I18n, {getLanguages} from 'react-native-i18n';
import Numeral from "numeral";

//localize
I18n.translations = {
    en: {
        "welcome": "Welcome to Login Screen",
        "btn_login": "Login",
        "txt_dont_have_account_register": "Don't have account? Register",
        "valid_pls_input_phone_number": "Please input phone number"
    },
    fr: {
        "welcome": "Bienvenue dans l'écran de connexion",
        "btn_login": "S'identifier",
        "txt_dont_have_account_register": "Vous n'avez pas de compte? Registre",
        "valid_pls_input_phone_number": "S'il vous plaît entrer de téléphone"
    }
}

export function randomString() {
    return Math.random().toString().slice(2);
}

export function showToast(text = null, duration = null, position = null) {
    if (duration) {
        // duration = Toast.SHORT;
        Toast.showShortBottom(text);
    } else {
        Toast.showLongBottom(text);
    }
    // Toast.show(text, duration);
}

export async function getToken() {
    let accessToken;
    accessToken = await AsyncStorage.getItem("accessToken")
    console.log("get token util " + accessToken);
    return accessToken;
}

export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function translate(key = null, lang = null) {
    getLanguages()
        .then(lang => {
            console.log("current lang: " + lang);
        })
    if (!key) {
        return
    }
    if (!lang) {
        lang = "en";
    }
    return I18n.t(key);
}
export function formatCurrency(number = null, symbol = null, options = []) {
    if(!number) return;
    // number = parseInt(number);
    if(symbol){
        return Numeral(number).format(symbol+"0,0[.]00")
    }
    return Numeral(number).format("$0,0[.]00");
}
export function formatNumber(number = null, symbol = null, options = []) {
    if(!number) return;
    // number = parseInt(number);
    if(symbol){
        return Numeral(number).format(symbol+"0,0")
    }
    return Numeral(number).format("0,0.00");
}