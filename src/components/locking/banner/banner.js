import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  contractAddress,
  abi,
  tokenAddres,
  tokenAbi,
  refDefaultAddress,
} from "../../../utils/constant";
import "./banner.css";
import { toast } from "react-toastify";

// import logo from "../../asset/images/logo.png";
import logo from "../../../asset/images/logo.png";
import menuIcon from "../../../asset/images/menuIcon.png";
import { Container } from "react-bootstrap";
function Banner() {
  let accountAd;
  const [account, setAccount] = useState("Connect");
  const [upline, setUpline] = useState(refDefaultAddress);

  const [dailyProfit1, set1dailyProfit] = useState(2.33);
  const [totalReturn1, set1TotalReturn] = useState(7);
  const [withdrawn1, set1withdrawn] = useState(0);
  const [withdrawnAble1, set1withdrawAble] = useState(0);
  const [enterAmount1, set1EnterAmount] = useState(0);
  const [fourteenDaysReward1, set1fourteenDaysReward] = useState(0);
  const [days1, set1days] = useState(0);

  const [dailyProfit2, set2dailyProfit] = useState(2.4);
  const [totalReturn2, set2TotalReturn] = useState(12);
  const [withdrawn2, set2withdrawn] = useState(0);
  const [withdrawnAble2, set2withdrawAble] = useState(0);
  const [enterAmount2, set2EnterAmount] = useState(0);
  const [fourteenDaysReward2, set2fourteenDaysReward] = useState(0);
  const [days2, set2days] = useState(1);

  const [dailyProfit3, set3dailyProfit] = useState(1.5);
  const [totalReturn3, set3TotalReturn] = useState(18);
  const [withdrawn3, set3withdrawn] = useState(0);
  const [withdrawnAble3, set3withdrawAble] = useState(0);
  const [enterAmount3, set3EnterAmount] = useState(0);
  const [fourteenDaysReward3, set3fourteenDaysReward] = useState(0);
  const [days3, set3days] = useState(2);

  const getData = async () => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let users = await contract.methods.Users(accountAd).call();

      if (users.lockableDays == days1) {
        let dailyprofit1 = await contract.methods.allocation(days1).call();
        let daily = dailyprofit1 / 365;
        let treturn = daily * days1;
        set1TotalReturn(treturn);

        set1withdrawn(users.WithdrawReward);
        set1dailyProfit(daily);
      } else if (users.lockableDays == days2) {
        let dailyprofit2 = await contract.methods.allocation(days2).call();
        let daily = dailyprofit2 / 365;
        let treturn = daily * days2;
        set2TotalReturn(treturn);
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
      // set3withdrawAble
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

      if (name === "planone") {
        if (enterAmount1 >= 1) {
          await tokenContract.methods
            .approve(contractAddress, web3.utils.toWei("" + enterAmount1))
            .send({
              from: account,
            })
            .then(async (output) => {
              let dailyprofit1 = await contract.methods
                .invest(upline, days1, web3.utils.toWei("" + enterAmount1))
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
          toast("Minimum amount is 1 STH");
        }
      } else if (name === "plantwo") {
        if (enterAmount2 >= 1) {
          await tokenContract.methods
            .approve(contractAddress, web3.utils.toWei("" + enterAmount2))
            .send({
              from: account,
            })
            .then(async (output) => {
              let dailyprofit2 = await contract.methods
                .invest(upline, days2, web3.utils.toWei("" + +enterAmount2))
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
          toast("Minimum amount is 1 STH");
        }
      } else if (name === "planthree") {
        if (enterAmount3 >= 1) {
          await tokenContract.methods
            .approve(contractAddress, web3.utils.toWei("" + enterAmount3))
            .send({
              from: account,
            })
            .then(async (output) => {
              let dailyprofit3 = await contract.methods
                .invest(upline, days3, web3.utils.toWei("" + +enterAmount3))
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
            });
        } else {
          toast("Minimum amount is 1 STH");
        }
      }
    } catch (error) {
      console.log("response", error);
      toast.error("Error while checking locked account");
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
              toast.error(e.message);
            });
        } else {
          console.log("response");
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
          .getResult(days1, web3.utils.toWei(e.target.value))
          .call();
        set1withdrawAble(
          formatThousands(web3.utils.fromWei(check_reward.profit))
        );
      } else if (name === "second_input") {
        set2EnterAmount(e.target.value);
        let check_reward = await contract.methods
          .getResult(days2, web3.utils.toWei(e.target.value))
          .call();
        set2withdrawAble(
          formatThousands(web3.utils.fromWei(check_reward.profit))
        );
      } else if (name === "third_input") {
        set3EnterAmount(e.target.value);
        let check_reward = await contract.methods
          .getResult(days3, web3.utils.toWei(e.target.value))
          .call();
        set3withdrawAble(
          formatThousands(web3.utils.fromWei(check_reward.profit))
        );
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
      // getData();
    } catch (error) {
      console.log("Error while connecting metamask", error);
      // alert("Error while connecting metamask");
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
        // console.log("Metamask is unlocked");
      } else {
        console.log("Metamask is locked");
      }
    } catch (error) {
      console.log("Error while checking locked account");
    }
  };

  useEffect(() => {
    setInterval(() => {
      loadWeb3();
    }, 1000);
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="bannercard1">
              <div className="col-md-12" id="plan">
                <span>Plan A</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerprofit">Daily Profit</span>
                  <span className="bannervalue">{dailyProfit1}%</span>
                </div>
                <div className="col-6">
                  <span className="bannerprofit">Total Return</span>
                  <span className="bannervalue">{totalReturn1}%</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerprofit">Withdraw time</span>
                  <span className="bannervalue">Any Time</span>
                </div>
                <div className="col-6">
                  <span className="bannerprofit">Days</span>
                  <span className="bannervalue">3{/* {days1} */}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerprofit">Enter Amount</span>

                  <input
                    className="stakeinput"
                    placeholder="0"
                    name="first_input"
                    type="number"
                    onChange={enter1AmountCall}
                  />
                </div>
                <div className="col-6">
                  <span className="bannerprofit">In 14 days you will get</span>
                  <span className="bannervalue1 py-2">{withdrawnAble1}</span>
                </div>
              </div>

              <div class="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-gradd btn-block"
                  name="planone"
                  onClick={Deposite}
                >
                  STAKE HUTT
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bannercard1">
              <div className="col-md-12" id="plan">
                <span>Plan B</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerprofit">Daily Profit</span>
                  <span className="bannervalue">{dailyProfit2}%</span>
                </div>
                <div className="col-6">
                  <span className="bannerprofit">Total Return</span>
                  <span className="bannervalue">{totalReturn2}%</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerprofit">Withdraw time</span>
                  <span className="bannervalue">Any Time</span>
                </div>
                <div className="col-6">
                  <span className="bannerprofit">Days</span>
                  <span className="bannervalue">5</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerprofit">Enter Amount</span>

                  <input
                    className="stakeinput"
                    placeholder="0"
                    name="second_input"
                    type="number"
                    onChange={enter1AmountCall}
                  />
                </div>
                <div className="col-6">
                  <span className="bannerprofit">In 21 days you will get</span>
                  <span className="bannervalue1 py-2">{withdrawnAble2}</span>
                </div>
              </div>

              <div class="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-gradd btn-block"
                  name="plantwo"
                  onClick={Deposite}
                >
                  STAKE HUTT
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bannercard1">
              <div className="col-md-12" id="plan">
                <span>Plan C</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerprofit">Daily Profit</span>
                  <span className="bannervalue">{dailyProfit3}%</span>
                </div>
                <div className="col-6">
                  <span className="bannerprofit">Total Return</span>
                  <span className="bannervalue">{totalReturn3}%</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerprofit">Withdraw time</span>
                  <span className="bannervalue">Any Time</span>
                </div>
                <div className="col-6">
                  <span className="bannerprofit">Days</span>
                  <span className="bannervalue">12</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerprofit">Enter Amount</span>

                  <input
                    className="stakeinput"
                    placeholder="0"
                    name="third_input"
                    type="number"
                    onChange={enter1AmountCall}
                  />
                </div>
                <div className="col-6">
                  <span className="bannerprofit">In 28 days you will get</span>
                  <span className="bannervalue1 py-2">{withdrawnAble3}</span>
                </div>
              </div>

              <div class="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-gradd btn-block"
                  name="planthree"
                  onClick={Deposite}
                >
                  STAKE HUTT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
