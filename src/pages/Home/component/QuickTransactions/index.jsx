import React from "react";
import "./style.scss";
import sendMoney from "../../../../assets/icons/send-money-btn.svg";
import leo from "../../../../assets/img/leo.png";
import moniaca from "../../../../assets/img/monica.png";

const QuickTransactions = () => {
  return (
    <div>
      <p className="transaction_title">Quick Transaction</p>
      <div className="transaction_items">
        <div className="transaction_item">
          <button className="transaction_item_btn send-money-btn">
            <img src={sendMoney} alt="send-money-btn" />
            <span className="transaction_item_text">Send Money</span>
          </button>
        </div>
        <div className="transaction_item">
          <button className="transaction_item_btn">
            <img src={leo} alt="leo" />
            <span>Leo W.</span>
          </button>
        </div>
        <div className="transaction_item">
          <button className="transaction_item_btn">
            <img src={moniaca} alt="monica" />
            <span>Monica L.</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransactions;
