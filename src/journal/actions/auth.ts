
export const login = ( uid : string, name : string ) => ({
    type: "LOGIN",
    payload: {
        uid,
        name
    }
});
