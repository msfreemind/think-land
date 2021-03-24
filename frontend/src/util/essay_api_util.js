import axios from 'axios';

export const getEssays = () => {
  return axios.get('/api/essays');
};

export const getEssay = essayId => {
  return axios.get(`/api/essays/${essayId}`);
};

export const postEssay = essay => {
  return axios.post('/api/essays', essay);
};

export const putEssay = essay => {
  return axios.put(`/api/essays/${essay.id}`, essay);
};

export const deleteEssay = essayId => {
  return axios.delete(`/api/essays/${essayId}`);
};