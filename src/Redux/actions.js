import axios from "axios";
import { 
    GET_PRODUCTS_REQ,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    SORT_PRODUCTS,
    GET_CLICKED_PRODUCTS_REQ,
    GET_CLICKED_PRODUCTS_SUCCESS,
    GET_CLICKED_PRODUCTS_FAILURE,
} from "./actionTypes"

// action for get products request
export const getProductsReq = () => ({type:  GET_PRODUCTS_REQ});

// action for get products success

export const getProductsSuccess = (payload) => ({type: GET_PRODUCTS_SUCCESS, payload});

// action for get products failure

export const getProductsFailure = () => ({type: GET_PRODUCTS_FAILURE});

// thunk call to fetch products  list
export const getproductsData = () => {
  return (dispatch) => {
    dispatch(getProductsReq());
    axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch(() => {
      dispatch(getProductsFailure());
    });
  }
};

export const getClickedProductReq = () => ({
  type: GET_CLICKED_PRODUCTS_REQ,
});

export const getClickedProductSuccess = (payload) => {
  return {
    type: GET_CLICKED_PRODUCTS_SUCCESS,
    payload,
  };
};
export const getClickedProductFailure = () => ({
  type: GET_CLICKED_PRODUCTS_FAILURE,
});

export const getClickedSingleProduct=(id)=>{
  return (dispatch) => {
    dispatch(getClickedProductReq());
    axios
      .get(`https://movie-fake-server.herokuapp.com/products/${id}`)
      .then((res) => {
        dispatch(getClickedProductSuccess(res.data));
      })
      .catch((err) => {
        console.log(err)
        dispatch(getClickedProductFailure());
      });
  };
}
// action object for sort  feature

export const sortProducts = (payload) => ({type: SORT_PRODUCTS, payload});
