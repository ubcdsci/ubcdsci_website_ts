// Library imports.
import axios from 'axios';


const API_URL = '/api/events/';

const fetchAllEventPosts = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};

const createEventPost = async (postData : EventPostFormData) => {
  const res = await axios.post(API_URL, postData);

  return res.data;
};

const getEventPost = async (id : string) => {
  const res = await axios.get(`${API_URL}/${id}`);

  return res.data;
};

const updateEventPost = async (postData : EventPostFormData) => {
  const res = await axios.put(`${API_URL}/${postData.id}`, postData);
  
  return res.data;
};

const deleteEventPost = async (id : string) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  
  return res.data;
};

const eventPostsService = {
  fetchAllEventPosts,
  createEventPost,
  getEventPost,
  updateEventPost,
  deleteEventPost,
};

export default eventPostsService;
