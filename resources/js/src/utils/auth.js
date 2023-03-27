import axios from "axios";
// import { history } from "../store/configureStore";

export const isAuthenticated = () => {
	if (localStorage.app) {
		axios.defaults.headers.common.Authorization = "Bearer " + JSON.parse(localStorage.app).token;
		return true;
	}
	clearCurrentUser();
	return false;
};

export const setCurrentUser = (data) => {
	localStorage.app = JSON.stringify(data);
	console.log('====================================');
	console.log('localStorage.app',localStorage.app);
	console.log('====================================');
};

export const getCurrentUser = () => {
	if (localStorage.app) {
		return JSON.parse(localStorage.app);
	}
	// return history.push("/login");
};

export const clearCurrentUser = () => {
	axios.defaults.headers.common.Authorization = "";
	localStorage.app = null;
	delete localStorage.app;
	localStorage.clear();
	return;
};
