import React from "react";
import { useAccounts } from "../../hooks/useAccounts";
import CurencyAccounts from "../Home/component/CurencyAccounts";
import "./style.scss";
import sendMoneyTitle from "../../assets/icons/send-money-title.svg";
import sendMoneyRed from "../../assets/icons/send-money-red.svg";

const SendMoney = () => {
  const { accounts } = useAccounts();

  return (
    <>
      <div className="send-money-title">
        <img src={sendMoneyTitle} alt="send-money-title" />
        <h2>Send Money From:</h2>
      </div>
      <div className="send_money_wrapper">
        <CurencyAccounts accounts={accounts} />
        <div className="send_money_section">
          <div className="send-money">
            <img src={sendMoneyRed} alt="send-money-red" />
            Send Money
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMoney;
