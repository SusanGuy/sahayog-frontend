import React from "react";
import "./comments.css";
import Comment from "./comment/comment";
import AuthButton from "../authButton/authButton";
const comments = () => {
  return (
    <div className="p-campaign-content">
      <div className="comment-list-header">
        <h2 className="comment-heading-3">Comments (406)</h2>
      </div>
      <div className="comment-ruler-line"></div>
      <ul className="campaigns-comments-list">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </ul>
      <AuthButton>Show more</AuthButton>
    </div>
  );
};

export default comments;
