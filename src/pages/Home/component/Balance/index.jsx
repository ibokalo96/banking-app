import React from "react";
import "./style.scss";
import topUp from "../../../../assets/icons/top-up-btn.svg";

const Balance = ({ selectedAccount }) => {
  return (
    <div>
      <p className="transaction_section_title">Balance</p>
      <div className="transaction_section_header">
        <div className="balance_amount">
          <h2 className="balance_amount_title">
            {selectedAccount
              ? `${selectedAccount.currencySign} ${selectedAccount.balance}`
              : ""}
          </h2>
        </div>
        <div className="top_up_item">
          <button className="top_up_item_btn">
            <img src={topUp} alt="" />
            <span className="top_up_item_text">Top up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Balance;
