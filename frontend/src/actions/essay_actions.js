import * as APIUtil from '../util/essay_api_util';

export const RECEIVE_ESSAYS = "RECEIVE_ESSAYS";
export const RECEIVE_ESSAY = "RECEIVE_ESSAY";
export const REMOVE_ESSAY = "REMOVE_ESSAY";
export const RECEIVE_ESSAY_ERRORS = "RECEIVE_ESSAY_ERRORS";

// sync action creators

export const receiveEssays = essays => ({
  type: RECEIVE_ESSAYS,
  essays
});

export const receiveEssay = essay => ({
  type: RECEIVE_ESSAY,
  essay
});

export const removeEssay = essay => ({
  type: REMOVE_ESSAY,
  essay
});

export const receiveErrors = errors => ({
  type: RECEIVE_ESSAY_ERRORS,
  errors
});

// async action creators

export const fetchEssays = () => dispatch => {
  return APIUtil.getEssays().then(
    res => dispatch(receiveEssays(res.data)), 
    err => dispatch(receiveErrors(err.response.data))
  );
};

export const fetchEssay = essayId => dispatch => {
  return APIUtil.getEssay(essayId).then(
    res => dispatch(receiveEssay(res.data)), 
    err => dispatch(receiveErrors(err.response.data))
  );
};

export const createEssay = essay => dispatch => {
  return APIUtil.postEssay(essay).then(
    res => dispatch(receiveEssay(res.data)), 
    err => dispatch(receiveErrors(err.response.data))
  );
};

export const destroyEssay = essayId => dispatch => {
  return APIUtil.deleteEssay(essayId).then(
    res => dispatch(removeEssay(res.data)), 
    err => dispatch(receiveErrors(err.response.data))
  );
};