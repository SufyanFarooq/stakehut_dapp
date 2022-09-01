import "./home.css";
import Particles from "react-particles-js";
import logo from "../asset/images/Golden.png";

import blk from "../asset/images/blk1.png";
// import blk13 from "../asset/images/staking.png";
import blk13 from "../asset/images/giff.gif";
import blk14 from "../asset/images/detail.jpg";
import gfx from "../asset/images/gfx.jpeg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/without");
  }
  return (
    <div className="container-fluid">
      <Particles
        style={{
          position: "absolute",
          position: "absolute",
          left: "0px",
          zIndex: "0",
        }}
        height="300%"
        width="100%"
        params={{
          particles: {
            color: { value: "#ffffff" },
            line_linked: { color: { value: "#fff000" } },
            number: { value: 100 },
            size: { value: 3 },
          },
        }}
      ></Particles>
      <div className="container headerDiv ">
        <div className="row">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "3rem 0px 2rem",
            }}
          >
            <h1 className="btechhead">WHAT IS STAKE HUTT PLATFORM</h1>
            <p className="paragraph">
              STH is the cryptocurrency of modern e-commerce platforms and
              potentially the greatest social network of all. STH is a Fly token
              built on Binance Smart Chain – BSC. The primary benefit of this
              staking hutt is that you earn more crypto, and interest rates can
              be very generous. IN Stake Hutt staking policy there are 6
              unlocking plans. In some plans, you can earn more than 100% per
              month. It's potentially a very profitable way to invest your
              money. And, the only thing you need is crypto that uses the
              proof-of-stake model. You can use Staking Reward's calculator to
              estimate your monthly earnings.
            </p>
          </div>
          <div className="col-md-6">
            <div>
              <img src={gfx} className="main-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col btechhead">Blockchain Technology</div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "3rem 0px 2rem",
            }}
          >
            <p className="paragraph">
              <h1> Blockchain / Distributed Ledger Technology </h1>
            </p>
            <p className="paragraph">
              Distributed ledger technology is a digital system that records
              asset transactions at numerous places simultaneously.
            </p>
            <p className="paragraph">
              Distributed ledger technology usually comes with restrictions on
              its access and use. It is called a permissioned technology.
            </p>
            <p className="paragraph">
              It creates ledgers in a decentralized way to obtain consensus from
              all the participants.
            </p>
          </div>
          <div className="col-md-6">
            <img className="main-img" src={blk} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col btechhead">
            Why Blockchain Technology is important?
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h1 className="heading">IMMUTABILITY</h1>
            <p className="paragraph">
              Blockchain is immutable. This opens a lot of opportunities for
              platforms that need immutable traits to make their system more
              functional in a highly competitive market.
            </p>
          </div>
          <div className="col-md-3 offset-md-3">
            <h1 className="heading">TRANSPARENCY</h1>
            <p className="paragraph">
              Public blockchain provides transparency due to its nature. It is
              very useful for different functions of our society, including
              doing elections. Companies can also utilize it to ensure that the
              end-user can interact with the processes with full or partial
              transparency.
            </p>
          </div>
          <div className="col-md-3  offset-md-3">
            <h1 className="heading">DIGITAL FREEDOM</h1>
            <p className="paragraph">
              With blockchain, you get true digital freedom. You are your own
              bank. You can take out your money when you want and do it without
              anyone else authorization. It gives you the digital freedom that
              relies heavily on the backbone of blockchain technology.
            </p>
          </div>
          <div className="col-md-3  offset-md-3">
            <h1 className="heading">IMMUTABILITY</h1>
            <p className="paragraph">
              Decentralized services are the backbone of our futuristic society.
              Be it asset management or energy management; there will be
              decentralized services for every sector out there. This will give
              people unprecedented access to the options that are currently not
              available in the market. Almost every sector will have
              decentralized services.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1 className="btechhead">STAKE HUTT Platform </h1>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "3rem 0px 2rem",
            }}
          >
            <h1 className="heading"> STH Overview </h1>
            <p className="paragraph">
              Combining the industry-recognized domain knowledge in big data
              together with artificial intelligence and reforming it into a
              Staking software platform, Stake Hutt Technology is the pioneer in
              automated data Staking algorithm to transform traditional and
              emerging industries.
            </p>
            <p className="paragraph">
              With overwhelming popularity of leveraging on data to optimize
              data-driven decisions, Stake Hutt takes advantage of the benefits
              of its propriety algorithm and opens limitless opportunities for
              cryptocurrency investors to benefit from the market.
            </p>
          </div>
          <div className="col-md-6">
            <img className="main-img" src={blk13} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="btechhead"> STAKE HUTT Plans </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">The Future of Automated Staking Platform</div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className="main-img" src={blk14} />
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "3rem 0px 2rem",
            }}
          >
            <div className="paragraph-li">
              <p className="paragraph">
                <i class="fa fa-cart-plus fa-2x paragraph-icon"></i> Guaranteed
                Profits
              </p>
            </div>
            <div className="paragraph-li">
              <p className="paragraph">
                <i class="fa fa-calendar fa-2x paragraph-icon"></i> Able to
                operate 24/7 with high speed auto-Staking.
              </p>
            </div>
            <div className="paragraph-li">
              <p className="paragraph">
                <i class="fa fa-exchange fa-2x paragraph-icon"></i> All
                transactions take place in 1 exchange
              </p>
            </div>
            <div className="paragraph-li">
              <p className="paragraph">
                <i class="fa fa-globe fa-2x paragraph-icon"></i>
                No transfer time required; less liquidity tied up.
              </p>
            </div>
            <div className="paragraph-li">
              <p className="paragraph">
                <i class="fa fa-tasks fa-2x paragraph-icon"></i> More markets to
                arbitrage
              </p>
            </div>
            <div className="paragraph-li">
              <p className="paragraph">
                <i class="fa fa-camera-retro fa-2x paragraph-icon"></i>
                High level of concurrency
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 offset-sm-4" id="contacts">
            <a href="https://twitter.com/StakingHutt" target="_blank">
              <button type="button" class="btn btn-outline-warning">
                <i
                  class="fab fa-twitter"
                  style={{
                    margin: "2px",
                  }}
                ></i>
                Twitter
              </button>
            </a>
            <a href="https://t.me/StakeHuttOfficial" target="_blank">
              <button type="button" class="btn btn-outline-warning">
                <i
                  class="fab fa-telegram"
                  style={{
                    margin: "2px",
                  }}
                ></i>
                Telegram
              </button>
            </a>
            <a href="https://medium.com/@StakingHutt" target="_blank">
              <button type="button" class="btn btn-outline-warning">
                <i
                  class="fab fa-medium"
                  style={{
                    margin: "2px",
                  }}
                ></i>
                Medium
              </button>
            </a>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Home;
