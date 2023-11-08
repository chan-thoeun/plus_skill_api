import * as API_SERVICE from "../Service";

const updateUser = async (id, body) => {
    return await API_SERVICE.updateData(`user/${id}`, body);
}
const getUserById = async (id) => {
    return await API_SERVICE.getData(`user/${id}/edit`);
}
const uploadImage = async (body) => {
    const res =  await API_SERVICE.postData(`upload/image`, body);
    console.log('res1', res);
    return res;
}
export {
	updateUser,
    getUserById,
    uploadImage
};
