import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Spinner from "../../components/Spinner/spinner";
import { connect } from "react-redux";
import Moment from "react-moment";
import { createAlert } from "../../store/actions/alert";
import "./comment.css";
import CustomButton from "../../components/CustomButton/customButton";
import CustomActionButton from "../../components/custom-action-button/actionButton";
import Image from "../../components/ppImage/ppImage";
import { Link } from "react-router-dom";

const CommentContainer = ({
  match: {
    params: { id }
  },
  history,
  user
}) => {
  const [state, setState] = useState({
    comment: ""
  });

  const [donations, setDonations] = useState({
    donation: {},
    loading: false,
    error: {}
  });

  useEffect(() => {
    const getDonation = async id => {
      try {
        setDonations({
          donation: {},
          error: {},
          loading: true
        });
        const { data } = await axios.get(`/donations/${id}`);
        setDonations({
          error: {},
          loading: false,
          donation: data
        });
      } catch (err) {
        setDonations({
          donation: {},
          loading: false,
          error: err.response ? err.response.data.errMessage : err.message
        });
      }
    };
    getDonation(id);
  }, [id]);

  const { donation, loading } = donations;
  const { comment } = state;

  if (loading || Object.keys(donation).length === 0 || !user) {
    return <Spinner />;
  }

  const {
    donation: {
      cause: { _id, title, images },
      amount,
      date
    }
  } = donations;

  const handleCommentPost = async () => {
    try {
      await axios.post(`/causes/comment/${_id}`, { text: comment });
      createAlert("Comment Posted Succesfully", "success");
      history.push(`/cause/${_id}`);
    } catch (err) {
      createAlert(
        err.response ? err.response.data.errMessage : err.message,
        "failure"
      );
    }
  };

  return (
    <div className="comment-after-donation-container">
      <div className="comment-white-box">
        <h1 className="comment-white-box-header">Donation Summary</h1>
        <div className="comment-after-donation-row">
          <div className="comment-after-donation-tile">
            <Link to={`/cause/${_id}`}>
              <div className="comment-tile-img-contain">
                <img
                  className="comment-tile-img"
                  alt="cause_image"
                  src={`http://localhost:3000${images[0].image}`}
                />
                <div className="comment-tile-shadow"></div>
                <div className="comment-tile-content">{title}</div>
              </div>
            </Link>
            <div className="comment-tile-footer">
              <h4 className="comment-underline">
                Donation Details<span className="comment-float-right"></span>
              </h4>
              <p>
                Rs. {amount} donated on{" "}
                <Moment format="MM/DD/YYYY">{date}</Moment>
              </p>

              <h4 className="comment-underline">Comment</h4>
              <div className="comment-box-wrapper-row">
                <div className="comment-avatar-contain">
                  <Image />
                </div>
                <div className="comment-box-text-contain">
                  <div>
                    <strong>{user.name}</strong>
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
                  {comment !== "" && (
                    <CustomButton onClick={() => handleCommentPost()}>
                      Save
                    </CustomButton>
                  )}
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
              <CustomActionButton onClick={() => history.push(`/cause/${_id}`)}>
                View Campaign
              </CustomActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { createAlert })(CommentContainer);
