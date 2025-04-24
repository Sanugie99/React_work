import axios from "axios";
export const Fetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())//json형식으로 응답을 반환
        .then(data => console.log(data))//데이터의 출력
        .catch(error => console.log('Error : ', error));//에러 처리
}

//response
//응답에 대한 메타정보와 본문이 들어있다.
//status : http 상태코드
//headers : 응답 헤더를 담고있는 객체
//ok : status가 200~299사이면 true
//url : 요청을 보낸 최종 url

//본문
//response의 body는 ReadbleStream이기 때문에
//직접 읽어서 파싱해야한다
//json() => json문자열을 파싱하여 객체로 반환

export const Axios = () => {
    axios.length('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log(response.data))
        .catch(error => console.log('Error : ', error));
}