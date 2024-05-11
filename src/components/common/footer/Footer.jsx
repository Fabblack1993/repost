import React from "react"
import "./footer.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/repost5.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <i className="fa fa-envelope"></i>
            <span>  Repost@gmail.com</span> <br />
            <i className="fa fa-headphones"></i>
            <span> +237 656593984</span>
          </div>
          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src="../images/R.jpg" alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className="item">
              <img src="../images/R.jpg" alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
          </div>
          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src="../images/R.jpg" alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className="item">
              <img src="../images/R.jpg" alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
          </div>
          <div className="box">
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span><label >(5)</label>
              </li>
              <li>
                <span>Fashion</span><label >(6)</label>
              </li>
              <li>
                <span>Health</span>
                <label >(7)</label>
                </li>
              <li>
                <span>Nature</span><label >(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="legal">
        <div className="container flexSB">
          <p>all rights reserved</p>
          <p>made by Fabblack</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
