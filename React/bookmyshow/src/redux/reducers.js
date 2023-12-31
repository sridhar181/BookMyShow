// reducers.js
const initialState = {
  selectedValue: null,
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
