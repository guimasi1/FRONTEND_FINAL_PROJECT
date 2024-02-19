import { GET_REVIEWS_BY_PHYSIO } from "../actions/reviewsActions";

const initialState = {
  reviewsByPhysio: [],
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_BY_PHYSIO:
      return { ...state, reviews: action.payload };

    default:
      return state;
  }
};

export default reviewsReducer;
