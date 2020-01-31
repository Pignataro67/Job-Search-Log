import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
export const FETCH_TASKS = 'FETCH_TASKS';
export const RECEIVED_TASKS = 'RECEIVED_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
const ROOT_URL = 'http://localhost:3001/api';

export function fetchTasks() {
  return (dispatch) => {
    dispatch({type: FETCH_TASKS});
    fetch(`${ROOT_URL}/tasks`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch({type: RECEIVED_TASKS, payload: json})
      })
  };
}

export function createTask(values) {
  return (dispatch) => {
    fetch(`${ROOT_URL}/tasks`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
        .then(json => dispatch({ type: CREATE_TASK, payload: json }))
  }
}