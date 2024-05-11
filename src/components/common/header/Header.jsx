import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
    const [navbar, setNavbar] = useState(false)
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
          <img src="../images/repost5.png"alt="" />
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
            
                   
                  
                   
                 
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/musique">Musique</Link>
              </li>
              <li>
                <Link to="/cinéma">Cinéma</Link>
              </li>
              <li>
                <Link to="/art">Art</Link>
              </li>
              <li>
                <Link to="/Focus">Focus</Link>
              </li>
              <li>
                <Link to="/entrepreneuriat">Entrepreneuriat</Link>
              </li>
              <li>
                <Link to="/rdv">RDV</Link>
              </li>
              <li>
                <Link to="/replay">Replay</Link>
              </li>
            </ul>
            <button className="barIco" onClick={() => setNavbar (!navbar)}>
             {navbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }
 h           </button>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
