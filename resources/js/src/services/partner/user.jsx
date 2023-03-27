import * as API_SERVICE from "../Service";

const getUserById = async (body) => {
    const response = await await API_SERVICE.getData(`profile-teacher/${id}/edit`);
    return response;
}

export {
	getUserById
};
