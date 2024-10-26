import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import "../App.css";
import { BASE_URL } from "../config";

function UserBlogs() {
  const [blogs, setBlogs] = useState([]);

  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/blog/user-blog/${id}`
      );
      if (data?.success) {
        setBlogs(data.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);
  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))
      ) : (
        <h1 className="heading">You have not created a blog</h1>
      )}
    </div>
  );
}

export default UserBlogs;
