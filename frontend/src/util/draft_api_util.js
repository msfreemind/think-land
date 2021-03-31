import axios from 'axios';

export const getDrafts = () => {
  return axios.get('/api/drafts');
};

export const getDraft = draftId => {
  return axios.get(`/api/drafts/${draftId}`);
};

export const postDraft = draft => {
  return axios.post('/api/drafts', draft);
};

export const putDraft = draft => {
  return axios.put(`/api/drafts/${draft.id}`, draft);
};

export const deleteDraft = draftId => {
  return axios.delete(`/api/drafts/${draftId}`);
};