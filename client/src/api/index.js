import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:9000' });



export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);