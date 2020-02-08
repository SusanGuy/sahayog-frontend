import React, { useEffect } from "react";
import "./causes.css";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux/aux";
import { getCause } from "../../store/actions/causes";
import Donations from "../../components/donations/donations";
import Comments from "../../components/comments/comments";
import Spinner from "../../components/Spinner/spinner";
import CustomActionButton from "../../components/custom-action-button/actionButton";
const Causes = ({ match, loading, cause, getCause }) => {
  useEffect(() => {
    getCause(match.params.id);
  }, [getCause, match]);

  if (!cause && loading) {
    return <Spinner />;
  }

  if (!cause) {
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
        <Donations goal={cause.goal} id={cause._id} />
        <div className="p-campaign-description">
          <div className="campaign-story">
            <span>All,</span>

            {newDescription.map(description =>
              description !== "" ? (
                <Aux key={description}>
                  <br /> <br /> <br /> {description}
                </Aux>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <Comments comments={cause.comments} />
        <div className="p-campaign-report-button">
          <CustomActionButton>Report fundraiser</CustomActionButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.cause.loading,
    cause: state.cause.cause
  };
};

export default connect(mapStateToProps, { getCause })(Causes);
