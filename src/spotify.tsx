import axios from "axios";

const scopes = ["user-library-read", "playlist-read-private"];
const redirectUri = "https://music-app-a37eb.web.app/";

export const loginEndpoint = `${process.env.REACT_APP_AUTH_ENDPOINT}client_id=${
  process.env.REACT_APP_CLIENT_ID
}&redirect_uri=${redirectUri}&scope=${scopes.join(
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
