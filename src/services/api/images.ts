import axios from "axios";

const Images = {
	fetch: (): Promise<any> => axios.get("/images").then((res) => res.data),
	upload: (file: File, caption: string) => {
		let formData = new FormData();

		formData.append("file", file);
		formData.append("caption", caption);

		return axios.post("/upload", formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	}
};

export default Images;
