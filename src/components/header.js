import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Navbar } from './Navbar'

import { Call, Mail } from '../images/landing'
import Logo from '../images/logo.png'
import "./header.css"

const Header = ({ siteTitle }) => (

  <div className="header__outer">
    <header
      style={{
        borderBottom: "1px solid #eee",
      }}
    >
      <div className="header__wrapper">
        <div>
          <Link to="/">
            <img className="navbrand__img" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header__email__wrapper">
          <div className="header__email__block"><img src={Mail} className="header__icon" alt="email icon" /> &nbsp;&nbsp;<div className="header__text">sales@marketreportexpert.com</div> &nbsp;&nbsp;</div>
          <div className="header__number__block"> <img src={Call} className="header__icon" alt="email icon" /> &nbsp;&nbsp;&nbsp;<div className="header__text"> +1-816-301-6258</div></div>
        </div>
      </div>

      {/* give colomn gap in mobile view */}
    </header >
    <Navbar />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
