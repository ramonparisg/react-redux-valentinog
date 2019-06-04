import {ADD_ARTICLE} from "../constants/action-types";
import {BAD_WORD} from "../constants/action-types";

const forbiddenWords  = ["spam", "money"];

export default function ForbiddenWordsMiddleware({ dispatch }) {
    return function(next){
        return function(action){
            switch (action.type) {
                case ADD_ARTICLE:
                    const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));
                    if (foundWord.length){
                        return dispatch({type: BAD_WORD});
                    }
                    break;
                default:
                    break;

            }
            return next(action);
        }
    }
}