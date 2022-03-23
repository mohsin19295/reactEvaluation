import {
  GET_PRODUCTS_REQ,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  SORT_PRODUCTS,
  GET_CLICKED_PRODUCTS_FAILURE,
  GET_CLICKED_PRODUCTS_REQ,
  GET_CLICKED_PRODUCTS_SUCCESS,
} from "./actionTypes";

const initState = {
  products: [],
  sortData: [],
  selectedData: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case SORT_PRODUCTS:
      if (payload == "--sort by --")
        return {
          ...state,
          sortData: [...state.products],
        };
      else if (payload == "asc")
        return {
          ...state,
          sortData: [...state.sortData.sort((a, b) => a.price - b.price)],
        };
      else if (payload == "desc")
        return {
          ...state,
          sortData: [...state.sortData.sort((a, b) => b.price - a.price)],
        };
    case GET_PRODUCTS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...payload],
        sortData: [...payload],
        isError: false,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_CLICKED_PRODUCTS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CLICKED_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedData: payload,
        isError: false,
      };
    case GET_CLICKED_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
