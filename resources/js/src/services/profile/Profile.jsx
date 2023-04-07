import * as API_SERVICE from "../Service";

const updateProfile = async (id, body) => {
    const response = await API_SERVICE.updateData(`profile/${id}`, body);
    return response;
}
const getProfileById = async (id) => {
    const response = await API_SERVICE.getData(`profile/${id}/edit`);
    return response;
}
const uploadPhoto = async (id, body) => {
    const response = await API_SERVICE.postData(`photo/${id}`, body);
    return response;
}
export {
	updateProfile,
    getProfileById,
    uploadPhoto
};
