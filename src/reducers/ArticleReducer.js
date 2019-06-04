import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action){
    if (action.type === ADD_ARTICLE){
        return Object.assign({},state, {articles: state.articles.concat(action.payload)}); //TODO: Qué pasa si no dejo el primer state?
    }

    return state;
}

export default rootReducer;
