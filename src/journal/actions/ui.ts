export const setErrorAction = ( error : string ) => ({
    type: "SET_ERROR",
    payload: error
});

export const removeErrorAction = () => ({
    type: "REMOVE_ERROR",
    payload: "",
});

export const startLoadingAction = () => ({
    type: "START_LOADING",
    payload: true
});

export const stopLoadingAction = () => ({
    type: "STOP_LOADING",
    payload: false
});
