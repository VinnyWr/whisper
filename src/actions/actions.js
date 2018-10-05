//accept a secret object and add to the cart

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CREATE_SECRET,
  LOAD_SECRETS
} from "./types";
import axios from "axios";

let apiUrl = "https://whisperserver.herokuapp.com/api/secrets";

let nextCartId = 0;

export const AddToCart = secret => ({
  type: ADD_TO_CART,
  item: secret,
  cartId: nextCartId++
});

export const RemoveFromCart = id => ({
  type: REMOVE_FROM_CART,
  id: id
});

export const CreateSecret = (title, price) => {
  return dispatch => {
    return axios.post(apiUrl, { title, price }).then(response => {
      dispatch(createSecretSuccess(response.data));
    });
  };
};

export const createSecretSuccess = data => ({
  type: CREATE_SECRET,
  data
});

export const FetchSecrets = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => dispatch(fetchSecretsSuccess(response.data)));
  };
};

export const fetchSecretsSuccess = secrets => {
  return {
    type: LOAD_SECRETS,
    secrets
  };
};
