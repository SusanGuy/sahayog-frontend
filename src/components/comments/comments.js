import React, { useEffect, useState } from "react";
import "./comments.css";
import Comment from "./comment/comment";
import Spinner from "../Spinner/spinner";
import axios from "../../axios";
import ErrorBox from "../errorMessage/errorMessage";
import Aux from "../../hoc/Aux/aux";
import AuthButton from "../authButton/authButton";
const Comments = ({ id }) => {
  const [comment, setComment] = useState({
    comments: [],
    loading: false,
    error: {}
  });

  useEffect(() => {
    const getComments = async id => {
      try {
        setComment({
          loading: true,
          comments: [],
          error: {}
        });
        const { data: comments } = await axios.get(`/causes/${id}/comments`);
        setComment({
          loading: false,
          comments,
          error: {}
        });
      } catch (err) {
        setComment({
          loading: false,
          comments: [],
          error: err.response ? err.response.data : err.errMessage
        });
      }
    };
    getComments(id);
  }, [id]);

  const { comments, loading } = comment;

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

export default Comments;
