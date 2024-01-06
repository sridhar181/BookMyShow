// reducers.js
const initialState = {
  selectedValue: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_VALUE":
      return {
        ...state,
        selectedValue: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
