import axios from 'axios'

const botApi = axios.create({
  baseURL: process.env.REACT_APP_BOT_URL,
});

botApi.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;

  return config;
})

export { botApi };