import axios from 'axios';

export const calculateAction = () => (dispatch) => {
  dispatch(loadingCalculation());
  let lambdaCalc = 'https://80x2c5kwle.execute-api.us-east-1.amazonaws.com/dev/calculate';
  axios.get(lambdaCalc).then((data) => {
    dispatch({
      type: 'CALCULATE',
      payload: data.data.message,
      isLoading: false,
    });
  });
};

export function loadingCalculation() {
  return {
    type: 'LOADING_CALCULATION',
    isLoading: true,
  };
}
