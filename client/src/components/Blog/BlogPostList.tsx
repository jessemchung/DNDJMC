import React from 'react';
import BlogPost from './BlogPost';
import { MyBlogStuff } from './MyBlogStuff';

const Blog = () => {
  return (
    <div className="blog">
      {MyBlogStuff.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          date={post.date}
          author={post.author}
          content={post.content}
          tags={post.tags}
        />
      ))}
    </div>
  );
};

export default Blog;
