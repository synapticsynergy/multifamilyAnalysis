export default function calculateReducer(state = {}, action) {
  if (action.type === 'CALCULATE') {
    return {
      calculations: action.payload,
    };
  }
  return state;
}
