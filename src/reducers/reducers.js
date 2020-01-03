import { combineReducers } from 'redux';
import { getArticles } from './articles';

export const rootReducer = combineReducers({
  articles: getArticles
});

export default rootReducer;