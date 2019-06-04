import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/ArticleReducer';
import ForbiddenWordsMiddleware from "../middleware/ForbiddenWordMiddleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(ForbiddenWordsMiddleware)));

export default store;