import  { GET_IMAGES } from '../actions';
import { combineReducers } from 'redux';


const imageReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_IMAGES :
            return {...state, images: action.payload};
        
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    imagesData: imageReducer,
  });
  
  export default rootReducer;