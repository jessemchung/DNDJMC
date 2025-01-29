"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BlogPost_1 = __importDefault(require("./BlogPost"));
var MyBlogStuff_1 = require("./MyBlogStuff");
var Blog = function () {
    return (<div className="blog">
      {MyBlogStuff_1.MyBlogStuff.map(function (post, index) { return (<BlogPost_1.default key={index} title={post.title} date={post.date} author={post.author} content={post.content} tags={post.tags}/>); })}
    </div>);
};
exports.default = Blog;
//# sourceMappingURL=BlogPostList.jsx.map