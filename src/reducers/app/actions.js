import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as utils from "../../utils/utils";
import * as FakeData from "../../config/fakeData";
import * as Constant from "../../config/constant";
import * as Api from "../../config/api";

export function fetchData(fetchUrl = null, params = null, fetchSuccessName = null, fetchFailedName = null, method = null) {
    console.log("fetch action with params");
    console.log(params);
    if (!method) {
        method = "post"; //post, get, put, delete ...
    }
    let result, headers = {}, accessToken;
    if (accessToken) {
        headers.accessToken = accessToken;
    }
    console.log("header info " + JSON.stringify(headers));
    //check connection before fetch
    return function (dispatch, getState) {
        // const {isConnected} = getState();
        let msg, isConnected, settingInfo;
        console.log("[action]settingInfo " + JSON.stringify(settingInfo))
        if (settingInfo) {
            isConnected = settingInfo.isConnected;
        }
        isConnected = true;
        msg = "Network status at action " + isConnected;
        console.log(msg);
        // utils.showToast(msg);
        result = axios({
            method,
            url: fetchUrl,
            data: params,
            headers,
        })
        //check acc root
        if (params.phone === Constant.phoneRoot) {
            //acc root will access
            return dispatch(fetchSuccess(FakeData.successLoginData, fetchSuccessName));
        } else {
            if (isConnected) {
                return result
                    .then((res) => {
                        console.log("fetch action success with fetch name: " + fetchSuccessName);
                        dispatch(fetchSuccess(res, fetchSuccessName))
                    })
                    .catch((err) => {
                        console.log("fetch action failed with fetch name: " + fetchFailedName);
                        dispatch(fetchFailed(err, fetchFailedName))
                    })
            } else {
                if(fetchUrl === Api.listHotel){
                    //fake data hotel case offline
                    return dispatch(fetchSuccess(FakeData.successHotelData, fetchSuccessName));
                }else{
                    utils.showToast("Your network is offline, pls check network info")
                    //process save db to local

                    //return failed
                    const err = {
                        msg: "Network failed",
                        code: -1
                    }
                    return dispatch(fetchFailed(err, fetchFailedName));
                }
            }
        }
    }
    // return function (dispatch) {
    //     return null;
    // };
}

export function fetchSuccess(res, fetchSuccessName = null) {
    if (!fetchSuccessName) {
        fetchSuccessName = actionTypes.FETCH_SUCCESS;
    }
    return {
        type: fetchSuccessName,
        result: res.data ? res.data : res
    }
}

export function fetchFailed(res, fetchFailedName = null) {
    if (!fetchFailedName) {
        fetchFailedName = actionTypes.FETCH_FAILED;
    }
    let result = res;
    //handle case 401
    if (res && res.response && res.response.status === "401") {
        result = {
            data: '',
            status: {
                code: -1,
                msg: res.message
            }
        }
    }
    return {
        type: fetchFailedName,
        result: result
    }
}

export function connectionState({status}) {
    return {
        type: "CHANGE_CONNECTION_STATUS",
        isConnected: status
    };
}
