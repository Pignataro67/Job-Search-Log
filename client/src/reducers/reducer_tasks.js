import _ from 'lodash';
import { FETCH_TASKS, RECEIVED_TASKS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TASKS:
      return [...state]
    case RECEIVED_TASKS:
      return [...state, action.payload]
    default:
      return state;
  }
}