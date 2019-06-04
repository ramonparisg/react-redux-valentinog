import {BAD_WORD} from "../constants/action-types";

export function badWordAction(payloads){
    return { type: BAD_WORD, payloads}
}