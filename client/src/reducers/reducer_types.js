import _ from 'lodash';
import { FETCH_TYPES, RECEIVED_TYPES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TYPES:
      return { ...state }
    case RECEIVED_TYPES:
      return _.mapKeys(action.payload, 'id') 
    default:
      return state;
  }
}