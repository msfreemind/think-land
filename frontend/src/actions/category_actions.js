import * as APIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

// sync action creators

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

// async action creators

export const fetchCategories = () => dispatch => {
  return APIUtil.getCategories().then(
    res => dispatch(receiveCategories(res.data))
  );
};