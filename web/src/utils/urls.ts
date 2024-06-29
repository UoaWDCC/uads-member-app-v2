let apiURL: string = import.meta.env.VITE_API_URL || "http://localhost:4000";

if (apiURL.endsWith("/")) {
	apiURL = apiURL.slice(0, -1);
}

export default apiURL;
