import * as API_SERVICE from "../Service";

const userSignIn = async (body) => {
    const response = await await API_SERVICE.postData(`login`, body);
    return response;
}
const userSignUp = async (body) => {
    const response = await await API_SERVICE.postData(`register`, body);
    console.log('response',response);
    return response;
}
const logout = async (body) => {
    const response = await API_SERVICE.postData(`${API_URL}/logout`, body);
    return response;
};

export {
    userSignIn,
    userSignUp,
    logout,
};
