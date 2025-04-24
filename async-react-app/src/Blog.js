//블로그 만들기
//3. 개시물 리스트
//2. 게시물 추가 기능
//3. 게시물 삭제기능

//제목과 내용을 입력할 수 있는 입력필드 2개와 옆에 추가버튼
//입력필드 밑에는 게시물 리스트 출력
//각각의 게시물은 삭제버튼이 옆에 있어야함.

import { useState, useEffect } from "react";
import axios from 'axios';

export const BlogEx = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPost, setNewPost] = useState({ title: '', body: '' })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    //개시물 추가
    //jsonPlaceholder에 추가를 요청한다고 해서 진짜 추가되는건 아님
    //state에 새 게시물 추가하기
    const addPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then((response) => {
                setPosts([response.data, ...posts]);
                setNewPost({ title: '', body: '' });
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    //게시물 삭제
    //필터링해서 다시 렌더링 하기
    const removePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(() => {
                setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
            })
            .catch((err) => {
                setError(err.message);
            });
    };


    if (loading) {
        return <p>로딩중...</p>
    }

    if (error) {
        return <p>에러발생 : {error}</p>
    }

    return (
        <div>
            <h1>블로그 게시물</h1>
            <h2>새 게시물 추가</h2>
            <input
                type="text"
                placeholder="제목"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <br/>
            <textarea
                placeholder="내용"
                value={newPost.body}
                onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            />
            {/* 게시물 리스트 */}
            <button onClick={() => addPost}>추가</button>
            <div>
                <h2>게시물 리스트</h2>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => removePost(post.id)}>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    )


}