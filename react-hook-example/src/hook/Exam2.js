import { useState } from "react";

//컴포넌트명은 Sol1
let Sol1 = ({add}) => {
    
    const [menu, setMenu] = useState(["초콜릿","사탕"]);
    const [value, setValue] = useState("");

    const onInputChange = (e) =>{
        setValue(e.target.value );
    }

    const onButtonClick = () => {
        setMenu(prev => [value, ...prev]);
    }

    return(
        <div>
            <input placeholder="Add menu here" onChange={onInputChange}></input>
            <button  onClick={onButtonClick}>추가</button>
            <ul>
                {menu.map((item,idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    )

}

export default Sol1;