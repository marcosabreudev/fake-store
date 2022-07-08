import axios from 'axios';

const http = axios.create({
  baseURL: 'https://fakestoreapi.com/'
});

export default http;