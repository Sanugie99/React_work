export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let nextId = 0;
export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
});