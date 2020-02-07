import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TasksReducer from './reducer_tasks';
import TypesReducer from './reducer_types';

const RootReducer = combineReducers({
  types: TypesReducer,
  tasks: TasksReducer,
  form: formReducer
});

export default RootReducer;