import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../../components/post/post";

function PostPage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPost("data"));
  }, []);

  return (
    <div>
      <Post />
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.title}>
            {post.id}
            <Link to={`${post.id}`}>info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;
