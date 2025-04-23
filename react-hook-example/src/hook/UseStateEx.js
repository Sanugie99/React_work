import { useState } from 'react'
//컴포넌트 생성하기
//하나의 파일에 하나의 컴포넌트만 만들수도 있지만
//여러개의 컴포넌트를 정의할 수도 있다

let Counter = () => {

    //hook은 항상 함수영 컴포넌트 안에서만 사용할 수 있다
    //useState()는 상태값과 상태값을 바꾸는 함수 두가지를 요소로 갖는 배열을 반환한다
    //반환된 배열을 구조분해할당을 통해서 받는다.
    const [count, setCount] = useState(100);
    console.log(count);
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

//컴포넌트를 외부에서 import하기 위해서는 반드시 export가 선행되어야 한다.
//export default Counter;
//항상 모듈당 1개만 허용 import할때 {}안해도 됨
//마음대로 지정 가능

export {Counter}
//named export
//모듈당 여러개를 내보낼 수 있다.
//import할 때도 export할 떄 쓰던 이름을 {}안에 정확히 맞춰 써야 한다
//as를 써서 별칭(alias)를 붙힐수 있다.