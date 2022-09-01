import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  contractAddress,
  abi,
  tokenAddres,
  tokenAbi,
  refDefaultAddress,
} from "../../../utils/constant";
import { ToastContainer, toast } from "react-toastify";
function Header() {
  let accountAd;
  const [account, setAccount] = useState("Connect");
  const [upline, setUpline] = useState(refDefaultAddress);

  const [showLinks, setShowLinks] = useState(false);
  const [dailyProfit, setdailyProfit] = useState(24);
  const [totalReturn, setTotalReturn] = useState(200);
  const [withdrawn, setwithdrawn] = useState(0);
  const [withdrawAble, setwithdrawAble] = useState(0);
  const [enterAmount, setEnterAmount] = useState(0);
  const [fourteenDaysReward, setfourteenDaysReward] = useState(0);
  const [days, setdays] = useState(0);
  const [dailyreward, setdailyreward] = useState(0);

  const getData = async () => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let users = await contract.methods.UsersWithoutlocking(accountAd).call();

      if (users.lockableDays == days && users.DepositeToken > 0) {
        let dailyprofit = await contract.methods.allocation(days).call();
        let daily = dailyprofit / 365;
        let treturn = daily * days;
        setTotalReturn(web3.utils.fromWei(treturn));
        setwithdrawAble(web3.utils.fromWei(users.WithdrawAbleReward));
        setwithdrawn(web3.utils.fromWei(users.WithdrawReward));
        setdailyProfit(formatThousands(web3.utils.fromWei(daily)));
      }
    } catch (error) {
      console.log("Error while checking locked account");
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
        if (enterAmount >= 200) {
          await tokenContract.methods
            .approve(contractAddress, web3.utils.toWei(enterAmount))
            .send({
              from: account,
            })
            .then(async (output) => {
              let dailyprofit = await contract.methods
                .Deposite_WithoutLocking(web3.utils.toWei(enterAmount))
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
          toast("Minimum amount is 200 SMS");
        }
      } else {
        toast("Refferal Address is not Correct");
        console.log("Refferal Address is not Correct");
      }
    } catch (error) {
      console.log("response", error);
    }
  };

  const Withdraw = async (e) => {
    try {
      const name = e.target.name;
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      let checkuser = await contract.methods
        .UsersWithoutlocking(accountAd)
        .call();
      let time_to_next_withraw = checkuser.Time_to_next_withraw;
      if (withdrawAble > 0) {
        let today = new Date().getTime();
        if (today >= time_to_next_withraw) {
          let dailyprofit = await contract.methods
            .WithdrawReward_withlocking(web3.utils.toWei(enterAmount))
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
          toast("Next Reward will be available in 24 hours");
        }
      } else {
        toast("Reward not Available");
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
            .Withdraw_without_Staking_Amount()
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
        .Reward_without_locking()
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

  const enterAmountCall = async (e) => {
    try {
      const name = e.target.name;

      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      if (name == "stake") {
        setEnterAmount(e.target.value);
        let daly = ((24 / 365) * e.target.value) / 100;
        setdailyreward(formatThousands(daly));
      } else if (name == "withdraw") {
        // setEnterAmount(e.target.value);
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
        // console.log("Metamask is unlocked");
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
    }, 1000);
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="myrefferaltable">
              <div className="row">
                <div className="col-3">
                  <span className="refferaltext">Est. APY</span>
                  <span className="bannervalue">{dailyProfit}%</span>
                </div>
                <div className="col-3">
                  <span className="refferaltext">Min. Lock Amount</span>
                  <span className="bannervalue">{totalReturn}</span>
                </div>
                <div className="col-3">
                  <span className="refferaltext">Withdrawn</span>
                  <span className="bannervalue">{withdrawn}</span>
                </div>
                <div className="col-3">
                  <span className="refferaltext">Withdrawble</span>
                  <span className="bannervalue">{withdrawAble}</span>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <span className="bannervalue">No Days Limit</span>
                </div>
                <div className="col-sm-3">
                  <input
                    placeholder="Enter Amount to withdraw"
                    type="number"
                    onChange={enterAmountCall}
                    name="withdraw"
                  />
                </div>
                <div className="col-sm-3">
                  <div class="d-grid gap-2">
                    <button
                      type="button"
                      className="btn btn-grad"
                      id="ImageColor"
                      name="planone"
                      onClick={Withdraw}
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <input
                    className="stakeinput"
                    placeholder="Enter Amount"
                    type="number"
                    name="stake"
                    onChange={enterAmountCall}
                  />
                </div>
                <div className="col-3">
                  <span className="bannerprofit">Daily Reward</span>
                  <span className="bannervalue">{dailyreward}</span>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-sm">
                      <button
                        type="button"
                        className="btn btn-grad"
                        id="ImageColor"
                        name="planone"
                        onClick={Deposite}
                      >
                        Stake SMS
                      </button>
                    </div>

                    <div className="col-sm">
                      <button
                        type="button"
                        className="btn btn-grad btn-block"
                        style={{
                          margin: "10px",
                          padding: "0.8rem 0rem",
                        }}
                        onClick={checkReward}
                      >
                        Check Reward
                      </button>
                    </div>

                    <div className="col-sm">
                      <button
                        type="button"
                        className="btn btn-grad"
                        id="ImageColor"
                        onClick={unstake}
                      >
                        Claim SMS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
