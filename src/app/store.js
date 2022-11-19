import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { compose,applyMiddleware,createStore } from '@redux';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';

//array of middlewares
const middleWaresArray=[logger]

//applyMiddleware creates Store enhancers
const appliedMiddlewares=applyMiddleware(middleWaresArray);

//compose
const composedEnhancers=compose(...appliedMiddlewares);

//createStore
export const store= createStore(rootReducer,undefined, composedEnhancers)


// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

/*
Summery:
all of the above code is just to create and return store containing reducers and middleware
 */