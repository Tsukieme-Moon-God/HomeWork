import React, { useState, useEffect, useNavigate, useParams } from "react";

function Info() {
  const params = useParams();
  const [post, setPost] = useState({});
  const navigane = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPost("data"));
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={goBack}>back</button>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
}

export default Info;
