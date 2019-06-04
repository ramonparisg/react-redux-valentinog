import { createStore } from "redux";
import rootReducer from '../reducers/ArticleReducer';

const store = createStore(rootReducer);

export default store;