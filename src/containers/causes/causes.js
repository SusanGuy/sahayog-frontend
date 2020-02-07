import React from "react";
import "./causes.css";
import ImageAvatar from "../../components/ppImage/ppImage";
import CustomButton from "../../components/CustomButton/customButton";
import CustomActionButton from "../../components/custom-action-button/actionButton";
import AuthButton from "../../components/authButton/authButton";
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

        <div className="p-campaign-sidebar">
          <aside className="o-campaign-sidebar">
            <div className="o-campaign-sidebar-wrapper">
              <div className="o-campaign-sidebar-progress-meter">
                <progress
                  className="a-progress-bar"
                  value="68.31479999999999"
                  max="100"
                ></progress>
                <h2 className="m-progress-meter-heading">
                  Rs. 341,574
                  <span className="raised-title">
                    raised of Rs. 500,000 goal
                  </span>
                </h2>
              </div>

              <CustomButton>Donate Now</CustomButton>
            </div>

            <div className="donations-campaign-sidebar-wrapper">
              <div className="donation-trending-logo">
                <strong>188 people just donated</strong>
              </div>
              <ul className="campaign-donation-container">
                <li className="o-donation-list-item">
                  <div className="donation-person-info">
                    <ImageAvatar small />
                    <div>
                      <div className="person-info-name">
                        YLHS Baseball Program
                      </div>
                      <div className="person-info-content">
                        <ul className="donation-info-content">
                          <li className="campaign-donation-amount-content">
                            <span className="weight-900">Rs. 1,000 </span>
                          </li>
                          <li className="campaign-donation-amount-content arko-class ">
                            <span className="color-gray">12 mins</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="o-donation-list-item">
                  <div className="donation-person-info">
                    <ImageAvatar small />
                    <div>
                      <div className="person-info-name">
                        YLHS Baseball Program
                      </div>
                      <div className="person-info-content">
                        <ul className="donation-info-content">
                          <li className="campaign-donation-amount-content">
                            <span className="weight-900">Rs. 1,000 </span>
                          </li>
                          <li className="campaign-donation-amount-content arko-class">
                            <span className="color-gray">12 mins</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="o-donation-list-item">
                  <div className="donation-person-info">
                    <ImageAvatar small />
                    <div>
                      <div className="person-info-name">
                        YLHS Baseball Program
                      </div>
                      <div className="person-info-content">
                        <ul className="donation-info-content">
                          <li className="campaign-donation-amount-content">
                            <span className="weight-900">Rs. 1,000 </span>
                          </li>
                          <li className="campaign-donation-amount-content arko-class ">
                            <span className="color-gray">12 mins</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="o-donation-list-item">
                  <div className="donation-person-info">
                    <ImageAvatar small />
                    <div>
                      <div className="person-info-name">
                        YLHS Baseball Program
                      </div>
                      <div className="person-info-content">
                        <ul className="donation-info-content">
                          <li className="campaign-donation-amount-content">
                            <span className="weight-900">Rs. 1,000 </span>
                          </li>
                          <li className="campaign-donation-amount-content arko-class ">
                            <span className="color-gray">12 mins</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="o-donation-list-item">
                  <div className="donation-person-info">
                    <ImageAvatar small />
                    <div>
                      <div className="person-info-name">
                        YLHS Baseball Program
                      </div>
                      <div className="person-info-content">
                        <ul className="donation-info-content">
                          <li className="campaign-donation-amount-content">
                            <span className="weight-900">Rs. 1,000 </span>
                          </li>
                          <li className="campaign-donation-amount-content arko-class ">
                            <span className="color-gray">12 mins</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="see-all-button-container">
              <AuthButton>See All</AuthButton>
            </div>
          </aside>
        </div>

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

        <div className="p-campaign-content">
          <div className="comment-list-header">
            <h2 className="comment-heading-3">Comments (406)</h2>
          </div>
          <div className="comment-ruler-line"></div>
          <ul className="campaigns-comments-list">
            <li className="campaign-comment-list-item">
              <div className="m-comment">
                <ImageAvatar small />
                <header className="m-comment-header">
                  <div className="m-comment-description">
                    jonathan j donated{" "}
                    <strong className="weight-900">Rs. 10</strong>
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

            <li className="campaign-comment-list-item">
              <div className="m-comment">
                <ImageAvatar small />
                <header className="m-comment-header">
                  <div className="m-comment-description">
                    jonathan j donated{" "}
                    <strong className="weight-900">Rs. 10</strong>
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
            <li className="campaign-comment-list-item">
              <div className="m-comment">
                <ImageAvatar small />
                <header className="m-comment-header">
                  <div className="m-comment-description">
                    jonathan j donated{" "}
                    <strong className="weight-900">Rs. 10</strong>
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
            <li className="campaign-comment-list-item">
              <div className="m-comment">
                <ImageAvatar small />
                <header className="m-comment-header">
                  <div className="m-comment-description">
                    jonathan j donated{" "}
                    <strong className="weight-900">Rs. 10</strong>
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
            <li className="campaign-comment-list-item">
              <div className="m-comment">
                <ImageAvatar small />
                <header className="m-comment-header">
                  <div className="m-comment-description">
                    jonathan j donated{" "}
                    <strong className="weight-900">Rs. 10</strong>
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
            <li className="campaign-comment-list-item">
              <div className="m-comment">
                <ImageAvatar small />
                <header className="m-comment-header">
                  <div className="m-comment-description">
                    jonathan j donated{" "}
                    <strong className="weight-900">Rs. 10</strong>
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
            <li className="campaign-comment-list-item">
              <div className="m-comment">
                <ImageAvatar small />
                <header className="m-comment-header">
                  <div className="m-comment-description">
                    jonathan j donated{" "}
                    <strong className="weight-900">Rs. 10</strong>
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
            <li className="campaign-comment-list-item">
              <div className="m-comment">
                <ImageAvatar small />
                <header className="m-comment-header">
                  <div className="m-comment-description">
                    jonathan j donated{" "}
                    <strong className="weight-900">Rs. 10</strong>
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
          </ul>
          <AuthButton>Show more</AuthButton>
        </div>
        <div className="p-campaign-report-button">
          <CustomActionButton>Report fundraiser</CustomActionButton>
        </div>
      </div>
    </div>
  );
};

export default causes;
