import { REMOVE_PHYSIO_FROM_PATIENT } from "../actions/patientsActions";
import {
  EDIT_BIOGRAPHY,
  GET_MY_PHYSIO_PROFILE,
  GET_PHYSIOTHERAPISTS,
  GET_PHYSIOTHERAPISTS_BY_PATIENT,
  GET_SINGLE_PHYSIO,
  SEND_REQUEST,
  UPLOAD_PHYSIO_IMAGE_PROFILE,
} from "../actions/physiotherapistActions";
import { NEW_REVIEW, REMOVE_REVIEW } from "../actions/reviewsActions";

const initialState = {
  physiotherapistsData: [],
  physioProfile: null,
  linkRequest: null,
  physiosByPatient: [],
  singlePhysio: null,
};

const physiotherapistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHYSIOTHERAPISTS:
      return {
        ...state,
        physiotherapistsData: action.payload,
      };
    case GET_MY_PHYSIO_PROFILE:
      return {
        ...state,
        physioProfile: action.payload,
      };
    case SEND_REQUEST:
      return {
        ...state,
        linkRequest: action.payload,
      };
    case EDIT_BIOGRAPHY:
      return {
        ...state,
        physioProfile: action.payload,
      };
    case GET_PHYSIOTHERAPISTS_BY_PATIENT:
      return {
        ...state,
        physiosByPatient: action.payload,
      };
    case REMOVE_PHYSIO_FROM_PATIENT:
      return {
        ...state,
        physiosByPatient: state.physiosByPatient.filter(
          (physio) => physio.id !== action.payload
        ),
      };
    case GET_SINGLE_PHYSIO:
      return {
        ...state,
        singlePhysio: action.payload,
      };
    case NEW_REVIEW:
      return {
        ...state,
        singlePhysio: {
          ...state.singlePhysio,
          reviews: [...state.singlePhysio.reviews, action.payload],
        },
      };
    case REMOVE_REVIEW:
      return {
        ...state,
        singlePhysio: {
          ...state.singlePhysio,
          reviews: state.singlePhysio.reviews.filter(
            (review) => review.id !== action.payload
          ),
        },
      };
    case UPLOAD_PHYSIO_IMAGE_PROFILE:
      return {
        ...state,
        physioProfile: {
          ...state.physioProfile,
          profilePictureUrl: action.payload,
        },
      };
    default:
      return state;
  }
};

export default physiotherapistsReducer;
