import React, { useState, useEffect } from 'react';

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    if (!response) {
                        throw new Error("데이터를 불러오는데 실패했습니다.")
                    }
                    return response.json();
                })
                .then((data) => {
                    setPosts(data);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        };
        fetchData();

    }, []);

    if (loading) {
        return <p>로딩중...</p>
    }

    if (error) {
        return <p>에러발생 : {error}</p>
    }

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};