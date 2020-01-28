import _ from 'lodash';
import { FETCH_TASKS, RECEIVED_TASKS } from '../actions';

export default function(state = { 
  
  list: {}, 
  loading: false
}, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return {...state, loading: true}
    case RECEIVED_TASKS:
      return {...state, list: _.mapKeys(action.payload, 'id'),
        loading: false
    };
    default:
      return state;
  }
}