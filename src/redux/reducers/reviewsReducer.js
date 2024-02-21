import { GET_REVIEWS_BY_PHYSIO, NEW_REVIEW } from "../actions/reviewsActions";

const initialState = {
  reviewsByPhysio: [],
  newReview: null,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_BY_PHYSIO:
      return { ...state, reviews: action.payload };
    case NEW_REVIEW:
      return { ...state, newReview: action.payload };

    default:
      return state;
  }
};

export default reviewsReducer;
