const initialState = {
  types: [],
  pokemons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TYPE":
      return {
        ...state,
        types: action.payload,
      };
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'GET_NAME':
      return {
        ...state,
        pokemons: action.payload,
      }
    default:
      return state;
  }
};

export default rootReducer;
