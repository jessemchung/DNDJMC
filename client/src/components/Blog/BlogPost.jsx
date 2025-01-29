"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BlogPost = function (_a) {
    var title = _a.title, date = _a.date, author = _a.author, content = _a.content, image = _a.image, tags = _a.tags;
    return (<div className="blog-post">
      <h2>{title}</h2>
      <p>{date} by {author}</p>
      {image && <img src={image} alt={title}/>}
      <div>{content}</div>
      {tags && (<div className="tags">
          Tags: {tags.map(function (tag, index) { return (<span key={index} className="tag">{tag}</span>); })}
        </div>)}
    </div>);
};
exports.default = BlogPost;
//# sourceMappingURL=BlogPost.jsx.map