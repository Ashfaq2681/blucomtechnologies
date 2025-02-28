import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { marked } from "marked";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("/data/posts.json") // Replace with API URL if using backend
      .then(response => {
        const foundPost = response.data.find(p => p.id === parseInt(id));
        setPost(foundPost);
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </div>
  );
};

export default BlogPost;
