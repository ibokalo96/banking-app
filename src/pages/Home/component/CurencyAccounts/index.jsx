import React from "react";
import "./style.scss";

const CurencyAccounts = ({ accounts, onSelectAccount, selectedId }) => {
  const renderAccount = (account) => {
    const { title, balance, currencyColor, currencySign } = account;

    return (
      <div className="wrapper-btn">
        {account.id === selectedId ? <div className="marker"></div> : null}
        <button
          className={
            account.id === selectedId
              ? "active_currency_account_btn"
              : "currency_account_btn"
          }
          onClick={() => onSelectAccount(account)}
        >
          <div className="currency_name">
            <div
              className="currency_icon"
              style={{
                backgroundColor: currencyColor,
              }}
            >
              {currencySign}
            </div>
            <span className="title">{title}</span>
          </div>
          <div className="currency_title">
            <span className="curency">
              <b>{currencySign}</b>
            </span>
            <span className="balance">
              <b>{balance}</b>
            </span>
          </div>
        </button>
      </div>
    );
  };
  return (
    <div className="account_section_curency">{accounts.map(renderAccount)}</div>
  );
};

export default CurencyAccounts;
