import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';

const RootReducer = combineReducers({
  tasks: TasksReducer
})

export default RootReducer;