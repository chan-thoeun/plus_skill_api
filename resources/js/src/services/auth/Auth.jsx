import * as API_SERVICE from "../Service";

const userLogin = async (body) => {
    const response = await API_SERVICE.postData(`login`, body);
    return response;
}
const userRegister = async (body) => {
    const response = await API_SERVICE.postData(`register`, body);
    return response;
}
const logout = async (body) => {
    const response = await API_SERVICE.postData(`${API_URL}/logout`, body);
    return response;
};

export {
    userLogin,
    userRegister,
    logout,
};
