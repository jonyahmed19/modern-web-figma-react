import React from "react";
import "./Article.css";

const Article = ({ date, title, imgUrl }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div className="gpt3__article-content">
        <div className="gpt3__article__groupa">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p className="gpt__article-readmore">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
