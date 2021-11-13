import axios from "axios";

const Images = {
	fetch: (): Promise<any> => axios.get("/images").then((res) => res.data),
	upload: (file: File) => {
		let formData = new FormData();

		formData.append("file", file);

		return axios.post("/upload", formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	}
};

export default Images;
