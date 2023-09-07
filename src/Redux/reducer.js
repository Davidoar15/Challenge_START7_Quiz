import { 
    GET_PROFILE,
    GET_CATEGORIES,
    GET_SPORTS,
    GET_CHEMISTRY,
    GET_MATH,
    GET_HISTORY,
    GET_BIOLOGICAL,
    GET_GEOGRAPHY
  } from "./actions";
  
  const initialState = {
    profile: [],
    categories: [],
    sports: [],
    chemistry: [],
    math: [],
    history: [],
    biological: [],
    geography: [],
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

        case GET_CHEMISTRY:
            return {
                ...state,
                chemistry: action.payload
            };

        case GET_MATH:
            return {
                ...state,
                math: action.payload
            };

        case GET_HISTORY:
            return {
                ...state,
                history: action.payload
            };

        case GET_BIOLOGICAL:
            return {
                ...state,
                biological: action.payload
            };

        case GET_GEOGRAPHY:
            return {
                ...state,
                geography: action.payload
            };
  
      default:
        return state;
    }
  };
  
  export default reducer;