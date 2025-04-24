//fetch를 사용하여, 외부 api를 가져와 화면에 렌더링하는 프로그램 만들기

//외부 api를 호출하여 데이터를 가져온다. (https://jsonplaceholder.typicode.com/users)
//데이터를 가져오는 동안 로딩상태를 표시한다
//api요청 실패시, 에러 메시지를 표시해야한다
//가져온 데이터를 화면에 목록 형태로 출력한다
//사용자의 이름과 이메일 주소를 출력해주세요

import { useState, useEffect } from "react";

export const UserListEx = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userData = async () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    if (!response) {
                        throw new Error("데이터를 불러오는데 실패했습니다.")
                    }
                    return response.json();
                })
                .then((data) => {
                    setUsers(data);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
        userData();
    }, [])

    //게시물 추가

    //게시글 삭제

    if(loading){
        return <p>로딩중...</p>
    }

    if(error){
        return <p>에러 발생 : {error}</p>
    }

    return(
        <div>
            <h1>유저 목록</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>이름 : {user.name}, 이메일 : {user.email}</li>
                ))}
            </ul>
        </div>
    )
}