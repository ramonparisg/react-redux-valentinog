import {ADD_ARTICLE} from "../constants/action-types";
import {BAD_WORD} from "../constants/action-types";

const initialState = {
    articles: [],
    badWord: 0
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, {articles: state.articles.concat(action.payload), badWord: 0});
        case BAD_WORD:
            return {...state, badWord: state.badWord + 1};
        default:
            return state
    }
}

export default rootReducer;
