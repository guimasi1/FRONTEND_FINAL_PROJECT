import Cookies from "js-cookie";
import { BASE_URL } from "./assignmentsActions";

export const GET_REVIEWS_BY_PHYSIO = "GET_REVIEWS_BY_PHYSIO";

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
