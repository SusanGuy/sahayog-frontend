import React, { useState } from "react";
import "./comment.css";
import CustomButton from "../../../components/CustomButton/customButton";
import CustomActionButton from "../../../components/custom-action-button/actionButton";
import Image from "../../../components/ppImage/ppImage";
import { Link, Redirect } from "react-router-dom";
const Comment = ({ donation }) => {
  const [state, setState] = useState({
    comment: ""
  });

  const { comment } = state;
  return (
    <div className="comment-after-donation-container">
      <div className="comment-white-box">
        <h1 className="comment-white-box-header">Donation Summary</h1>
        <div className="comment-after-donation-row">
          <div className="comment-after-donation-tile">
            <Link to="https://www.gofundme.com/a-courageous-7-gunshot-survivor">
              <div className="comment-tile-img-contain">
                <img
                  className="comment-tile-img"
                  alt="cause_image"
                  src="https://d2g8igdw686xgo.cloudfront.net/25103728_1509690597.9007.jpg"
                />
                <div className="comment-tile-shadow"></div>
                <div className="comment-tile-content">
                  A courageous 8 gunshot survivor
                </div>
              </div>
            </Link>
            <div className="comment-tile-footer">
              <h4 className="comment-underline">
                Donation Details<span className="comment-float-right"></span>
              </h4>
              <p>$10 donated on 11/5/2017</p>

              <h4 className="comment-underline">Comment</h4>
              <div className="comment-box-wrapper-row">
                <div className="comment-avatar-contain">
                  <Image />
                </div>
                <div className="comment-box-text-contain">
                  <div>
                    <strong>Susan Subedi</strong>
                  </div>
                  <textarea
                    className="textarea-comment-box"
                    name="comment"
                    placeholder="Add a comment"
                    value={comment}
                    onChange={e =>
                      setState({
                        ...state,
                        [e.target.name]: e.target.value
                      })
                    }
                  />
                </div>
                <div className="comment-save-button">
                  {comment !== "" && <CustomButton>Save</CustomButton>}
                </div>
              </div>

              <h4 className="comment-underline">
                Share the Campaign<span className="float-right"></span>
              </h4>
              <div className="comment-box-share-social">
                <div className="comment-box-social">
                  <CustomButton facebook="true" />
                </div>
                <div className="comment-box-social">
                  <CustomButton twitter="true" />
                </div>
              </div>
              <CustomActionButton>View Campaign</CustomActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
