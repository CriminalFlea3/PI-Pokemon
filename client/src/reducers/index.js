const initialState = {
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'GET_TYPE':
          return {
              ...state,
              types: action.payload,
          };
          
    default:
      return state;
  }
};

export default rootReducer;
