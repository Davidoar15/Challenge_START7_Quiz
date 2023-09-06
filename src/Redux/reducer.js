import { 
    GET_PROFILE,
    GET_CATEGORIES,
  } from "./actions";
  
  const initialState = {
    profile: [],
    categories: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            };

        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
  
      default:
        return state;
    }
  };
  
  export default reducer;