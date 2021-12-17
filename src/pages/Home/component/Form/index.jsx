import React from "react";
import accountType from "../../../../assets/icons/account-type.svg";
import currency from "../../../../assets/icons/currency.svg";
import passiveSavings from "../../../../assets/icons/passive-savings.svg";
import formIconFirst from "../../../../assets/icons/form-icon-first.svg";
import formIconSecond from "../../../../assets/icons/form-icon-second.svg";
import formIconThird from "../../../../assets/icons/form-icon-third.svg";
// import formIconEtc from "../../../../assets/icons/form-icon-etc.svg";
import "./style.scss";

const Form = () => {
  return (
    <div>
      <form action="#">
        <div className="forms_together">
          <div className="form form_input_top">
            <img className="form_img" src={accountType} alt="account-type" />
            <input
              className="form_input"
              type="text"
              placeholder="Account Type:"
            />
            <div className="form_input_text">Personal</div>
          </div>

          <div className="form form_input_bot">
            <img className="form_img" src={currency} alt="currency" />
            <input className="form_input" type="text" placeholder="Currency" />
            <div className="form_input_text">
              Euro <b>EUR</b>
            </div>
          </div>
        </div>
        <div className="forms_together">
          <div className="form form_input_top">
            <img
              className="form_img"
              src={passiveSavings}
              alt="pasive-savings"
            />
            <input
              className="form_input"
              type="text"
              placeholder="Passive Saving"
            />
            <div className="form_input_text">
              Enabled <b>20%</b>
            </div>
          </div>

          <div className="form form_input_bot">
            <input
              className="form_input"
              type="text"
              placeholder="Share Account"
            />
            <div className="form_input_text">
              <div className="wrapper_img">
                <img src={formIconFirst} alt="first-from-icon" />
                <img src={formIconSecond} alt="second-from-icon" />
                <img src={formIconThird} alt="third-from-icon" />

                {/* <img
                  className="form_input_text_etc"
                  src={formIconEtc}
                  alt="from-icon-etc"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
