import Cookies from "js-cookie";
export const GET_PHYSIOTHERAPISTS = "GET_PHYSIOTHERAPISTS";

export const getPhysiotherapists = () => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/physiotherapists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_PHYSIOTHERAPISTS,
          payload: data,
        });

        console.log(data);
        console.log("ciao");
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
