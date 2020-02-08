import React from "react";
import ImageAvatar from "../../ppImage/ppImage";
import Moment from "react-moment";
import "./comment.css";
const comment = ({ date, comment, avatar, name }) => {
  return (
    <li className="campaign-comment-list-item">
      <div className="m-comment">
        <ImageAvatar avatar={avatar} small />
        <header className="m-comment-header">
          <div className="m-comment-description">{name}</div>
        </header>
        <div className="m-comment-content">
          <div className="m-read-more">
            <span>{comment}</span>
          </div>
        </div>
        <footer className="m-comment-footer">
          <ul className="list-unstyled m-meta-list m-meta-list--bullet">
            <li className="m-meta-list-item">
              <span className="color-gray">
                <Moment fromNow>{date}</Moment>
              </span>
            </li>
          </ul>
        </footer>
      </div>
    </li>
  );
};

export default comment;
