import React from "react";
import "./style.scss";
import MenuTabs from "../../components/MenuTabs";
import Home from "../../pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SendMoney from "../../pages/SendMoney";

const BankAccountLayout = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <MenuTabs />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/send-money" element={<SendMoney />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default BankAccountLayout;
