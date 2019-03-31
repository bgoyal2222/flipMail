export const thread = () => dispatch => {
    dispatch({
      type: "THREAD",
    });
};
  
export const nonthread = () => dispatch => {
    dispatch({
      type: "NONTHREAD",
    });
};