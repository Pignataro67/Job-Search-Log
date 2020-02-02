import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
export const FETCH_TASKS = 'FETCH_TASKS';
export const RECEIVED_TASKS = 'RECEIVED_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const FETCH_SELECTED_TASK = 'FETCH_SELECTED_TASK';

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

export function createTask(values, callback) {
  return (dispatch) => {
    fetch(`${ROOT_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
        .then(json => { 
          dispatch({ type: CREATE_TASK, payload: json })
    })
    .then(() => callback())
  };
}

export function fetchSelectedTask(id) {
  return (dispatch) => {
    dispatch({type: FETCH_TASK});
    fetch(`${ROOT_URL}/tasks/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: FETCH_SELECTED_TASK, payload: json })
      })
  };
}