import React from "react";
import "./style.scss";
import MenuTabItem from "../MenuTabItem";
import profileIcon from "../../assets/img/profile-icon.png";
import homeIcon from "../../assets/icons/home.svg";
import sendMoneyIcon from "../../assets/icons/send-money.svg";
import topUpIcon from "../../assets/icons/top-up.svg";
import accounts from "../../assets/icons/accounts.svg";
import activeHome from "../../assets/icons/home-red.svg";
import activeSendMoney from "../../assets/icons/send-money-red.svg";
import activeTopUp from "../../assets/icons/top-up-red.svg";
import activeAccounts from "../../assets/icons/accounts-red.svg";

const MenuTabs = () => {
  const tabs = [
    {
      to: "/",
      name: "Home",
      image: homeIcon,
      activeImage: activeHome,
    },
    {
      to: "/send-money",
      name: "Send Money",
      image: sendMoneyIcon,
      activeImage: activeSendMoney,
    },
    {
      to: "/top-up",
      name: "Top Up",
      image: topUpIcon,
      activeImage: activeTopUp,
    },
    {
      to: "/accounts",
      name: "Accounts",
      image: accounts,
      activeImage: activeAccounts,
    },
  ];

  return (
    <div className="nav_section">
      <div className="nav_section_block">
        <ul className="nav_list">
          {tabs.map((tab) => (
            <MenuTabItem {...tab} />
          ))}
        </ul>
      </div>
      <div className="nav_section_profile">
        <div className="profile_logo">
          <img src={profileIcon} alt="profile-icon" />
        </div>
        <span className="profile_text">Profile</span>
      </div>
    </div>
  );
};

export default MenuTabs;
