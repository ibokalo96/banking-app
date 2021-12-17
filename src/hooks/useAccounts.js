import { useEffect, useState } from "react";
import axios from "axios";

export const useAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  let config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      common: {
        "X-API-Key": "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59",
      },
    },
  };
  const fetchAccounts = () => {
    axios
      .get(
        "https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data",
        config
      )
      .then(function (response) {
        const { accounts } = response.data.body;
        const getCurrency = (currency) => {
          switch (currency) {
            case "eur":
              return {
                currencySign: "€",
                currencyColor: "#42507F",
              };

            case "gbp":
              return {
                currencySign: "£",
                currencyColor: "#008000",
              };

            case "usd":
              return {
                currencySign: "$",
                currencyColor: "#F5855C",
              };

            case "krw":
              return {
                currencySign: "W",
                currencyColor: "#FFAC30",
              };

            default:
              alert("none");
          }
        };
        const accountsWithIds = accounts.map((acc, i) => {
          return {
            ...acc,
            id: i + 1,
            ...getCurrency(acc.currency),
          };
        });
        setAccounts(accountsWithIds);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAccounts();
  }, []);
  return {
    accounts,
  };
};
