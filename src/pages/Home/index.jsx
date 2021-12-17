import React, { useEffect, useState } from "react";
import AccountAdditional from "./component/AccountAdditional";
import CurencyAccounts from "./component/CurencyAccounts";
import "./style.scss";
import Balance from "./component/Balance";
import QuickTransactions from "./component/QuickTransactions";
import Form from "./component/Form";
import { useAccounts } from "../../hooks/useAccounts";

const Home = () => {
  const [selectedAccount, setSelectedAccount] = useState({});
  const { accounts } = useAccounts();

  useEffect(() => {
    if (accounts.length) {
      setSelectedAccount(accounts[1]);
    }
  }, [accounts]);
  return (
    <div className="home">
      <div className="account_section">
        <h2 className="account_section_title">Your accounts</h2>
        <CurencyAccounts
          accounts={accounts}
          onSelectAccount={setSelectedAccount}
          selectedId={selectedAccount.id}
        />
        <AccountAdditional />
      </div>
      <div className="account_transaction">
        <Balance selectedAccount={selectedAccount} />
        <QuickTransactions />
        <Form />
      </div>
    </div>
  );
};

export default Home;
