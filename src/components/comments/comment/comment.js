import React from "react";
import ImageAvatar from "../../ppImage/ppImage";

import "./comment.css";
const comment = () => {
  return (
    <li className="campaign-comment-list-item">
      <div className="m-comment">
        <ImageAvatar small />
        <header className="m-comment-header">
          <div className="m-comment-description">
            jonathan j donated <strong className="weight-900">Rs. 10</strong>
          </div>
        </header>
        <div className="m-comment-content">
          <div className="m-read-more">
            <span>good job thanks from jonathan</span>
          </div>
        </div>
        <footer className="m-comment-footer">
          <ul className="list-unstyled m-meta-list m-meta-list--bullet">
            <li className="m-meta-list-item">
              <span className="color-gray">8 hrs</span>
            </li>
          </ul>
        </footer>
      </div>
    </li>
  );
};

export default comment;
