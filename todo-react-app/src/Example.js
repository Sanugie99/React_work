import { useState } from "react"

export let Example = () => {

    const [message, setMessage] = useState("Hello, world!");
    const [name, setName] = useState("홍길동!");
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>{message} / {name}</h1>
            {/* 상태는 무조건 setter를 이용하여 변경해야 합니다. */}
            <button onClick={() => setMessage("Hello, React")}>Change message</button>

            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
    )
}