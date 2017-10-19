import { combineReducers } from 'redux';

import posts from './modules/posts';
import users from './modules/users';

const rootReducer = combineReducers({
  [posts.constants.NAME]: posts.reducer,
  [users.constants.NAME]: users.reducer,
});

export default rootReducer;
