import React from "react";
import "./style.scss";
import cardIcon from "../../../../assets/icons/card.svg";
import earnIcon from "../../../../assets/icons/earn.svg";
import arrowIcon from "../../../../assets/icons/arrow-right.svg";

const AccountAdditional = () => {
  return (
    <div className="account_section_features">
      <div className="request">
        <div className="request_item">
          <div className="request_item_img">
            <img src={cardIcon} alt="" />
          </div>
          <div className="request_item_info">
            <h3 className="request_item_info_title">
              <span>Request a Card</span>
              <a href="#">
                <img src={arrowIcon} alt="arrow-right" />
              </a>
            </h3>
            <p className="request_item_description">Get a debit card for free</p>
          </div>
        </div>
        <div className="request_item">
          <div className="request_item_img">
            <img src={earnIcon} alt="" />
          </div>
          <div className="request_item_info">
            <h3 className="request_item_info_title">
              <span>Earn £ 25 for free</span>
              <a href="#">
                <img src={arrowIcon} alt="arrow-right" />
              </a>
            </h3>
            <p className="request_item_description">Apply for pension</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountAdditional;
