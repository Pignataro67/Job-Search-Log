import _ from 'lodash';
import { FETCH_TASKS, RECEIVED_TASKS, FETCH_SELECTED_TASK } from '../actions';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_SELECTED_TASK:
      console.log(state)
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_TASKS:
      return {...state}
    case RECEIVED_TASKS:
      return  _.mapKeys(action.payload, 'id')
    default:
      return state;
  }
}