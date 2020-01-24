import fetch from 'isomorphic-fetch';
export const FETCH_TASKS = 'fetch_tasks';
const ROOT_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export function fetchTasks() {
  return (dispatch) => {
    dispatch({type: FETCH_TASKS});
    fetch(`${ROOT_URL}/tasks`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch({type: RECEIVED_TASKS, payload: json.tasks})
      })
  };
}