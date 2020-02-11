import React, { useEffect, useState } from "react";
import "./cause.css";
import axios from "../../../axios";
import Aux from "../../../hoc/Aux/aux";
import Donations from "../../../components/donations/donations";
import Comments from "../../../components/comments/comments";
import Spinner from "../../../components/Spinner/spinner";
import CustomActionButton from "../../../components/custom-action-button/actionButton";
const Cause = ({ match, history }) => {
  const {
    params: { id }
  } = match;
  const [causes, setCauses] = useState({
    cause: {},
    loading: false,
    error: {}
  });

  useEffect(() => {
    const getCause = async id => {
      try {
        setCauses({
          cause: {},
          error: {},
          loading: true
        });
        const { data } = await axios.get(`/causes/${id}`);
        setCauses({
          error: {},
          loading: false,
          cause: data
        });
      } catch (err) {
        setCauses({
          cause: {},
          loading: false,
          error: err.response ? err.response.data.errMessage : err.message
        });
      }
    };
    getCause(id);
  }, [id]);

  const { cause, loading } = causes;

  if (loading || Object.keys(cause).length === 0) {
    return <Spinner />;
  }

  if (Object.keys(cause).length === 0) {
    return <p> No such cause found</p>;
  }

  const newDescription = cause.description.split("\n");

  return (
    <div className="campaign-body-wrapper">
      <div className="campaign-grid-body">
        <div className="p-campaign-collage">
          <ul className="campaign-images">
            <li>
              <button className="campaign-image-button" type="button">
                <div
                  className="campaign-image-background"
                  style={{
                    backgroundImage: `url(http://localhost:3000${cause.images[0].image})`
                  }}
                ></div>
              </button>
            </li>
          </ul>
        </div>
        <header className="p-campaign-header">
          <h1 className="a-campaign-title">{cause.title}</h1>
        </header>
        <Donations
          history={history}
          match={match}
          goal={cause.goal}
          id={cause._id}
        />
        <div className="p-campaign-description">
          <div className="campaign-story">
            <span>All,</span>
            <br />
            {newDescription.map(description =>
              description !== "" ? (
                <Aux key={description}>
                  <br /> {description}
                </Aux>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <Comments id={cause._id} />
        <div className="p-campaign-report-button">
          <CustomActionButton>Report fundraiser</CustomActionButton>
        </div>
      </div>
    </div>
  );
};

export default Cause;
