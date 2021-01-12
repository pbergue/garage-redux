import { FETCH_GARAGE } from "../actions";

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_GARAGE:
      return action.payload;
    default:
      return state;
  }
}
