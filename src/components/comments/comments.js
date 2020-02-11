import React, { useEffect } from "react";
import "./comments.css";
import Comment from "./comment/comment";
import Spinner from "../Spinner/spinner";
import { connect } from "react-redux";
import { getComments } from "../../store/actions/comments";
import ErrorBox from "../errorMessage/errorMessage";
import Aux from "../../hoc/Aux/aux";
import AuthButton from "../authButton/authButton";
const Comments = ({ comments, loading, id, match, history, getComments }) => {
  useEffect(() => {
    getComments(id);
  }, [getComments]);

  return (
    <div className="p-campaign-content">
      {comments.length === 0 ? (
        <ErrorBox>No comments made yet ...</ErrorBox>
      ) : (
        <Aux>
          <div className="comment-list-header">
            <h2 className="comment-heading-3">Comments ({comments.length})</h2>
          </div>
          <div className="comment-ruler-line"></div>
          {loading ? (
            <Spinner />
          ) : (
            <Aux>
              <ul className="campaigns-comments-list">
                {comments.map(({ _id, date, text, user: { avatar, name } }) => (
                  <Comment
                    key={_id}
                    date={date}
                    comment={text}
                    avatar={avatar}
                    name={name}
                  />
                ))}
              </ul>
              <AuthButton>Show more</AuthButton>
            </Aux>
          )}
        </Aux>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.donation.loading,
    comments: state.comment.comments
  };
};

export default connect(mapStateToProps, { getComments })(Comments);
