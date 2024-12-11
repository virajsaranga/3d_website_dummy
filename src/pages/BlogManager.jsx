import React, { useState } from "react";
import "./BlogManager.css";

const BlogManager = () => {
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState({
        title: "",
        content: "",
        author: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value });
    };

    const handleAddBlog = () => {
        if (blog.title && blog.content && blog.author) {
            setBlogs([...blogs, blog]);
            setBlog({ title: "", content: "", author: "" });
        } else {
            alert("Please fill all fields.");
        }
    };

    return (
        <div className="blog-container">
            <h1>Manage Your Blog Articles</h1>
            <div className="blog-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Blog Title"
                    value={blog.title}
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    placeholder="Write your blog content here..."
                    value={blog.content}
                    onChange={handleChange}
                ></textarea>
                <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={blog.author}
                    onChange={handleChange}
                />
                <button onClick={handleAddBlog}>Add Blog</button>
            </div>
            <div className="blog-list">
                <h2>Your Blog Articles</h2>
                {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <div key={index} className="blog-item">
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                            <span><strong>Author:</strong> {blog.author}</span>
                        </div>
                    ))
                ) : (
                    <p>No blogs added yet.</p>
                )}
            </div>
        </div>
    );
};

export default BlogManager;
