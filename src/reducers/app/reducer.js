const initialState = {};

export default function app(state = initialState, action = {}) {
    console.log("[Reducer] Action name: " + action.type);
    switch (action.type) {
        case "CHANGE_CONNECTION_STATUS":
            return Object.assign({}, state, {
                isConnected: action.isConnected
            })
        default:
            return {
                ...state,
                result: action.result,
                type: action.type
            }
    }
}