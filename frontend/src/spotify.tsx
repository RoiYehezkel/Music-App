import axios from "axios";

const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${process.env.REACT_APP_AUTH_ENDPOINT}client_id=${
  process.env.REACT_APP_CLIENT_ID
}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token: string) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
