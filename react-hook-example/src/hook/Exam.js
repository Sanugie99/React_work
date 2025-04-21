import { useState } from "react";

let ShowHide = () => {

    const [showHide, setshowHide] = useState(true);

    const handleClick = () => {
        //     //버튼을 눌렀을 때 글씨를 보이게 안보이게 하는 if문
        //     if(ShowHide === true){
        //         setshowHide(false);
        //     } else{
        //         setshowHide(true);
        //     }
        //   };

        //위에 if문을 아래처럼 간결하게 할 수 있음
        //!showHide : 현재 상태값을 반대로 뒤집음 현제 boolean 이라 true or false로 변경됨.
        setshowHide(!showHide)
    }

    return (
        <div>
            {/* 조건부 렌더링으로 && 앞이 참일경우 뒤까지 출력 앞이 거짓이면 뒤를 출력하지 않음. */}
            {showHide && <h1>Hello, world!</h1>}
            {/* 3항 연산자로 showHide의 boolean 값이 true면 숨기기 false면 보이기로 보이게 함  */}
            <button onClick={handleClick}>{showHide ? "숨기기" : "보이기"}</button>
        </div>
    );
}

export { ShowHide }


