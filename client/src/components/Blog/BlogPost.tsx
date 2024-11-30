import React from 'react';

type BlogPostProps = {
  title: string;
  date: string;
  author: string;
  content: string;
  image?: string;
  tags?: string[];
};

const BlogPost: React.FC<BlogPostProps> = ({ title, date, author, content, image, tags }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{date} by {author}</p>
      {image && <img src={image} alt={title} />}
      <div>{content}</div>
      {tags && (
        <div className="tags">
          Tags: {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPost;