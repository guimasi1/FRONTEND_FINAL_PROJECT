import Cookies from "js-cookie";
import { BASE_URL } from "./assignmentsActions";

export const GET_REVIEWS_BY_PHYSIO = "GET_REVIEWS_BY_PHYSIO";
export const NEW_REVIEW = "NEW_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const getReviewsByPhysio = (physio_id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "reviews/byPhysio/" + physio_id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_REVIEWS_BY_PHYSIO,
          payload: data.content,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createReview = (review) => {
  const token = Cookies.get("token");

  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "reviews", {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: NEW_REVIEW,
          payload: data,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const removeReview = (reviewId) => {
  const token = Cookies.get("token");

  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "reviews/" + reviewId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch({
          type: REMOVE_REVIEW,
          payload: reviewId,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
