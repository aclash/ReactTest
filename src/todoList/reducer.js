//import {combineReducers} from 'redux';

let nextTodoID = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: ++nextTodoID,
    text: text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
})

export const toggleTodo = (id, state) => ({
    type: 'TOGGLE_TODO',
    id: id,
    state: state
})

const rootReducer = () => {};
export default rootReducer
/*
SHOW_ALL
SHOW_COMPLETED
SHOW_ACTIVE
*/