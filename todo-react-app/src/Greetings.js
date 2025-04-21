import React, {useState} from 'react'

//함수형 컴포넌트의 정의
//컴포넌트의 이름을 정의할 때 대문자로 시작한다.
export function Greeting({name}){
    //JSX문법으로 HTML조각을 반환할 수 있다.
    return (
        //하나의 루트 요소만 반환할 수 있다.
        //여러 요소를 반환할 때는 반드시 하나의 요소로 감싸야 한다.
        <div>
            <h1>Hello, {name}</h1>
        </div>
    )
}

export function Farewell(props){

    //기본적으로 props로 넘어온 데이터들은 읽기 전용이지만
    //수정을 하고 싶다면 state를 이용해서 바꾸면 된다
    const [name, setName] = useState(props.name);

    return(
        <div>
            <h1>Goodbye, {name}!</h1>
            <button onClick={() => setName("박길동")}>Change message</button>
        </div>
    )
}