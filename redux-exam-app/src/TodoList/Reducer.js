//1. Todo 리스트 관리하기
//Redux를 사용하여 Todo리스트를 관리하는 리듀서를 작성하라
//각 Todo 항목은 id와 text 속성을 가진 객체로 구성된다
//사용자는 새로운 Todo항목을 추가할 수 있으며 특정Todo항목을 삭제할 수 있어야한다
//<<    조건    >>
//1.ADD_TODO 액션으로 새로운 TOdo항목을 추가한다
//2.REMOVE_TODO 액션으로 특정 Todo 항목을 삭제한다
//3.각 Todo항목은 고유한 id를 가져야 한다.
//4. App.js에서 UI를 다음과 같이 구성한다

import { ADD_TODO, REMOVE_TODO } from "./action";

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            };
        case REMOVE_TODO:
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
}

export default todoReducer;