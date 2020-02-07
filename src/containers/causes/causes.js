import React from "react";
import "./causes.css";
import Donations from "../../components/donations/donations";
import Comments from "../../components/comments/comments";
import CustomActionButton from "../../components/custom-action-button/actionButton";
const causes = ({ match }) => {
  return (
    <div className="campaign-body-wrapper">
      <div className="campaign-grid-body">
        <div className="p-campaign-collage">
          <ul className="campaign-images">
            <li>
              <button className="campaign-image-button" type="button">
                <div className="campaign-image-background"></div>
              </button>
            </li>
          </ul>
        </div>
        <header className="p-campaign-header">
          <h1 className="a-campaign-title">Support for the Altobelli Family</h1>
        </header>
        <Donations />
        <div className="p-campaign-description">
          <div className="campaign-story">
            <span>All,</span>
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            As many of you have read by now, a helicopter crash on January 26,
            2020 in Calabasas, CA has claimed the lives of nine people. John,
            Keri and Alyssa Altobelli were among the nine victims. Most
            devastating to our Red Sox family, John, Keri, and Alyssa were the
            father, stepmother and younger sister of one of our scouts, J.J.
            Altobelli.
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            As J.J. and his sister Lexi cope with the immense sadness stemming
            from this accident, we want to rally to raise money for them.
            Ensuring that J.J. and Lexi don’t have to worry about financial
            insecurity moving forward is the least we can do.
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            While the Red Sox and its Foundation will be providing financial and
            emotional support, we understand that opening this up to the public
            can provide the Altobelli Family with the most security moving
            forward. These funds will help J.J. and Lexi as they are faced with
            funeral costs, Lexi’s future education, as well as other general
            living costs. Please join us in contributing – no amount is too
            small. <br />
            <br />
            &nbsp;
            <br />
            <br />
            From the bottom of our hearts, thank you in advance for your
            generosity.
          </div>
        </div>
        <Comments />
        <div className="p-campaign-report-button">
          <CustomActionButton>Report fundraiser</CustomActionButton>
        </div>
      </div>
    </div>
  );
};

export default causes;
