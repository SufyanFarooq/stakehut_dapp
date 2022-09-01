import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  contractAddress,
  abi,
  tokenAddres,
  tokenAbi,
  refDefaultAddress,
} from "../../../utils/constant";
import "./bannerendplan.css";
import { ToastContainer, toast } from "react-toastify";

// import logo from "../../asset/images/logo.png";
import logo from "../../../asset/images/logo.png";
import menuIcon from "../../../asset/images/menuIcon.png";
import { Container } from "react-bootstrap";
function BannerEndPlan() {
  let accountAd;
  const [account, setAccount] = useState("Connect");
  const [upline, setUpline] = useState(refDefaultAddress);

  const [dailyProfit1, set1dailyProfit] = useState(60);
  const [totalReturn1, set1TotalReturn] = useState(100);
  const [withdrawn1, set1withdrawn] = useState(0);
  const [withdrawnAble1, set1withdrawAble] = useState(0);
  const [enterAmount1, set1EnterAmount] = useState(0);
  const [fourteenDaysReward1, set1fourteenDaysReward] = useState(0);
  const [days1, set1days] = useState(120);

  const [dailyProfit2, set2dailyProfit] = useState(72);
  const [totalReturn2, set2TotalReturn] = useState(100);
  const [withdrawn2, set2withdrawn] = useState(0);
  const [withdrawnAble2, set2withdrawAble] = useState(0);
  const [enterAmount2, set2EnterAmount] = useState(0);
  const [fourteenDaysReward2, set2fourteenDaysReward] = useState(0);
  const [days2, set2days] = useState(240);

  const [dailyProfit3, set3dailyProfit] = useState(96);
  const [totalReturn3, set3TotalReturn] = useState(100);
  const [withdrawn3, set3withdrawn] = useState(0);
  const [withdrawnAble3, set3withdrawAble] = useState(0);
  const [enterAmount3, set3EnterAmount] = useState(0);
  const [fourteenDaysReward3, set3fourteenDaysReward] = useState(0);
  const [days3, set3days] = useState(365);

  const getData = async () => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let users = await contract.methods.Users(accountAd).call();

      if (users.lockableDays == days1) {
        let dailyprofit1 = await contract.methods.allocation(days1).call();
        let daily = dailyprofit1 / 365;
        let treturn = daily * days1;
        set3TotalReturn(treturn);
        set1withdrawn(users.WithdrawReward);
        set1dailyProfit(daily);
      } else if (users.lockableDays == days2) {
        let dailyprofit2 = await contract.methods.allocation(days2).call();
        let daily = dailyprofit2 / 365;
        let treturn = daily * days2;
        set3TotalReturn(treturn);
        set2withdrawn(users.WithdrawReward);
        set2dailyProfit(daily);
      } else if (users.lockableDays == days3) {
        let dailyprofit3 = await contract.methods.allocation(days3).call();
        let daily = dailyprofit3 / 365;
        let treturn = daily * days3;
        set3TotalReturn(treturn);
        set3withdrawn(users.WithdrawReward);
        set3dailyProfit(daily);
      }
    } catch (error) {
      console.log("Error while checking locked account", error);
    }
  };

  const Deposite = async (e) => {
    try {
      const name = e.target.name;
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      let checkuser = await contract.methods._chakUpline(upline).call();
      if (checkuser) {
        if (name === "planone") {
          if (enterAmount1 >= 100) {
            await tokenContract.methods
              .approve(contractAddress, web3.utils.toWei(enterAmount1))
              .send({
                from: account,
              })
              .then(async (output) => {
                let dailyprofit1 = await contract.methods
                  .Deposite(web3.utils.toWei(enterAmount1), days1, upline)
                  .send({
                    from: account,
                  })
                  .then(async (output) => {
                    toast.success("Transaction Completed");
                  })
                  .catch((e) => {
                    console.log("response", e);
                    toast.error(e.message);
                  });
              })
              .catch((e) => {
                console.log("response", e);
                toast.error(e.message);
              });
          } else {
            toast("Minimum amount is 100 SMS");
          }
        } else if (name === "plantwo") {
          if (enterAmount2 >= 100) {
            await tokenContract.methods
              .approve(contractAddress, web3.utils.toWei("" + enterAmount2))
              .send({
                from: account,
              })
              .then(async (output) => {
                let dailyprofit2 = await contract.methods
                  .Deposite(web3.utils.toWei("" + enterAmount2), days2, upline)
                  .send({
                    from: account,
                  })
                  .then(async (output) => {
                    toast.success("Transaction Completed");
                  })
                  .catch((e) => {
                    console.log("response", e);
                    toast.error(e.message);
                  });
              })
              .catch((e) => {
                console.log("response", e);
                toast.error(e.message);
              });
          } else {
            toast("Minimum amount is 100 SMS");
          }
        } else if (name === "planthree") {
          if (enterAmount3 >= 100) {
            await tokenContract.methods
              .approve(contractAddress, web3.utils.toWei("" + enterAmount3))
              .send({
                from: account,
              })
              .then(async (output) => {
                let dailyprofit3 = await contract.methods
                  .Deposite(web3.utils.toWei("" + enterAmount3), days3, upline)
                  .send({
                    from: account,
                  })
                  .then(async (output) => {
                    toast.success("Transaction Completed");
                  })
                  .catch((e) => {
                    console.log("response", e);
                    toast.error(e.message);
                  });
              })
              .catch((e) => {
                console.log("response", e);
                toast.error(e.message);
              });
          } else {
            toast("Minimum amount is 100 SMS");
          }
        }
      } else {
        toast("Refferal Address is not Correct");
        console.log("Refferal Address is not Correct");
      }
    } catch (error) {
      console.log("response", error);
    }
  };
  const unstake = async () => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let users = await contract.methods.Users(account).call();
      if (users.withrawableDepositeAmount > 0) {
        if (users.WithdrawAbleReward <= 0) {
          let dailyprofit1 = await contract.methods
            .Withdraw_Staking_Amount()
            .send({
              from: account,
            })
            .then(async (output) => {
              toast.success("Transaction Completed");
            })
            .catch((e) => {
              console.log("response", e);
              toast.error(e.message);
            });
        } else {
          toast("withdraw reward first");
        }
      } else {
        toast("No Claim available");
      }
    } catch (error) {
      console.log("response", error);
    }
  };
  const checkReward = async (e) => {
    try {
      const name = e.target.name;
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let rewards = await contract.methods
        .Rewards()
        .send({
          from: account,
        })
        .then(async (output) => {
          toast.success("Transaction Completed");
        })
        .catch((e) => {
          console.log("response", e);
          toast.error(e.message);
        });
    } catch (error) {
      console.log("response", error);
    }
  };

  const enter1AmountCall = async (e) => {
    try {
      const name = e.target.name;
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);

      if (name === "first_input") {
        set1EnterAmount(e.target.value);
        let check_reward = await contract.methods
          .check_reward(days1, web3.utils.toWei(e.target.value))
          .call();
        set1withdrawAble(formatThousands(web3.utils.fromWei(check_reward)));
      } else if (name === "second_input") {
        set2EnterAmount(e.target.value);
        let check_reward = await contract.methods
          .check_reward(days2, web3.utils.toWei(e.target.value))
          .call();
        set2withdrawAble(formatThousands(web3.utils.fromWei(check_reward)));
      } else if (name === "third_input") {
        set3EnterAmount(e.target.value);
        let check_reward = await contract.methods
          .check_reward(days3, web3.utils.toWei(e.target.value))
          .call();
        set3withdrawAble(formatThousands(web3.utils.fromWei(check_reward)));
      }
    } catch (error) {
      console.log("Error while checking locked account", error);
    }
  };
  function formatThousands(num) {
    var numbr = parseFloat(parseFloat(num).toFixed(2));
    var values = numbr.toString().split(".");
    return (
      values[0].replace(/.(?=(?:.{3})+$)/g, "$&,") +
      (values.length == 2 ? "." + values[1] : "")
    );
  }

  const loadWeb3 = async () => {
    let isConnected = false;
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        isConnected = true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        isConnected = true;
      } else {
        isConnected = false;
      }
      if (isConnected === true) {
        let accounts = await getAccounts();
        accountAd = accounts[0];
        setAccount(accountAd);
        let accountDetails = null;
        window.ethereum.on("accountsChanged", function (accounts) {
          accountAd = accounts[0];
          setAccount(accountAd);
        });
      }
      getData();
    } catch (error) {
      console.log("Error while connecting metamask", error);
    }
  };

  const getAccounts = async () => {
    const web3 = window.web3;
    try {
      let accounts = await web3.eth.getAccounts();
      return accounts;
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
      return null;
    }
  };

  // eslint-disable-next-line
  const isLockedAccount = async () => {
    try {
      let accounts = await getAccounts();
      if (accounts.length > 0) {
      } else {
        console.log("Metamask is locked");
      }
    } catch (error) {
      // alert("Error while checking locked account");
    }
  };

  useEffect(() => {
    setInterval(() => {
      loadWeb3();
    }, 1500);
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="bannerendcard">
              <div className="col-md-12" id="plan1">
                <span>Plan D</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">Daily Profit</span>
                  <span className="bannerendvalue">{dailyProfit1}%</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">Total Return</span>
                  <span className="bannerendvalue">{totalReturn1}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">Withdraw time</span>
                  <span className="bannerendvalue">{withdrawn1}</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">Days</span>
                  <span className="bannerendvalue">{days1}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">Enter Amount</span>
                  <input
                    name="first_input"
                    className="stakeinput form-control mx-3"
                    placeholder="0"
                    type="Number"
                    onChange={enter1AmountCall}
                  />
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">
                    In 14 days you will get
                  </span>
                  <span className="bannerendvalue1 py-2">{withdrawnAble1}</span>
                </div>
              </div>
              <div class="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-gradd1 btn-block"
                  onClick={checkReward}
                >
                  STAKE HUTT
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bannerendcard">
              <div className="col-md-12" id="plan1">
                <span>Plan E</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">Daily Profit</span>
                  <span className="bannerendvalue">{dailyProfit2}%</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">Total Return</span>
                  <span className="bannerendvalue">{totalReturn2}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">Withdrawn time</span>
                  <span className="bannerendvalue">{withdrawn2}</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">Days</span>
                  <span className="bannerendvalue">{days2}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">Enter Amount</span>
                  <input
                    name="second_input"
                    className="stakeinput form-control mx-3"
                    placeholder="0"
                    type="Number"
                    onChange={enter1AmountCall}
                  />
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">
                    In 21 days you will get
                  </span>
                  <span className="bannerendvalue1 py-2">{withdrawnAble2}</span>
                </div>
              </div>
              <div class="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-gradd1 btn-block"
                  onClick={checkReward}
                >
                  STAKE HUTT
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bannerendcard">
              <div className="col-md-12" id="plan1">
                <span>Plan F</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">Daily Profit</span>
                  <span className="bannerendvalue">{dailyProfit3}%</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">Total Return</span>
                  <span className="bannerendvalue">{totalReturn3}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">Withdrawn time</span>
                  <span className="bannerendvalue">{withdrawn3}</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">Days</span>
                  <span className="bannerendvalue">{days3}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">Enter Amount</span>
                  <input
                    name="third_input"
                    className="stakeinput btn-secondary form-control  mx-3"
                    placeholder="0"
                    type="Number"
                    onChange={enter1AmountCall}
                  />
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">
                    In 28 days you will get
                  </span>
                  <span className="bannerendvalue1 py-2">{withdrawnAble3}</span>
                </div>
              </div>
              <div class="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-gradd1 btn-block"
                  onClick={checkReward}
                >
                  STAKE HUTT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <span className="bannerendnwarnings">
            1. Important: Plans return are float and Daily Profit for a new
            deposit will increase by 0.5% daily
          </span>
          <span className="bannerendnwarnings">
            2. Minimum deposit amount is 0.05 STH and you can have multiple
            deposits
          </span>
          <span className="bannerendnwarnings">
            3. Earnings every moment, withdraw instantly any time (if you did
            not use capitalization of interest in Plan 4, Plan 5 and Plan 6)
          </span>
        </div>
      </div>
    </div>
  );
}

export default BannerEndPlan;
