import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import customerReducer from '../Reducers/customerReducer';
// import imagesReducer from '../Reducers/imageReducer';

// const rootReducer = combineReducers({
//     customer:customerReducer,
//     images: imagesReducer,
//   });

//craeting global store
export const store = createStore(customerReducer, applyMiddleware(thunk));




