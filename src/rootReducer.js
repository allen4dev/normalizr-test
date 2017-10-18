import { combineReducers } from 'redux';

import posts from './modules/posts';

const rootReducer = combineReducers({
  [posts.constants.NAME]: posts.reducer,
});

export default rootReducer;
