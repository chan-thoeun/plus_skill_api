import axios from "axios";
export async function getData(url) {
	return await axios.get(`${url}`).then(({ data }) => data);
}
export async function postData(url, body) {
	return await axios.post(`${url}`, body).then(({ data }) => data);
}
export async function updateData(url, body) {
	return await axios.put(`${url}`, body).then(({ data }) => data);
}
export async function deleteData(url) {
	return await axios.delete(`${url}`).then(({ data }) => data);
}
