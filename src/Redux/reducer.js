import { 
    GET_PROFILE,
    GET_CATEGORIES,
    GET_SPORTS
  } from "./actions";
  
  const initialState = {
    profile: [],
    categories: [],
    sports: [],
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

        case GET_SPORTS:
            return {
                ...state,
                sports: action.payload
            };
  
      default:
        return state;
    }
  };
  
  export default reducer;