import React from "react"
import { Link } from "gatsby"

import "./Navbar.css"

class Navbar extends React.Component {
    state = {
        navbarDropdown: false,
        width: 0,
        height: 0,
    }

    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener("resize", this.updateWindowDimensions)
        // this.targetElement = document.querySelector('.navbar__mobile__wrapper');
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
        // clearAllBodyScrollLocks();
    }

    updateWindowDimensions = () => {
        this.setState(
            { width: window.innerWidth, height: window.innerHeight },
            () => {
                if (this.state.width > 768) {
                    this.setState({ navbarDropdown: false }, () => {
                        var body = document.querySelector("body")
                        body.style.overflow = "auto"
                    })
                }
            }
        )
    }

    handleChangeLanguage = e => {
        const { value: lang } = e.target

        this.props.i18n.changeLanguage(lang, err => {
            if (err) {
                throw err
            }


            setTimeout(() => {
                this.forceUpdate()
            }, 300)
        })
    }
    handleRouteUpdate = () => {
        this.setState({ navbarDropdown: false }, () => {
            var body = document.querySelector("body")
            body.style.overflow = "auto"
        })
    }

    toggleNavbarDropdown = () => {
        this.setState({ navbarDropdown: !this.state.navbarDropdown }, () => {
            if (this.state.navbarDropdown) {
                var body = document.querySelector("body")
                body.style.overflow = "hidden"
            } else {
                var body = document.querySelector("body")
                body.style.overflow = "auto"
            }
        })
    }

    render() {
        let {
            navbarDropdown,
            // width
        } = this.state

        return (
            <nav className="navbar__wrapper">
                {navbarDropdown ? (
                    <div className="navbar__mobile__wrapper">
                        {/* <div className="navbar__mobile__"></div> */}
                        <div
                            className="navbar__mobile__close__button"
                            onClick={this.toggleNavbarDropdown}
                        >
                            <div className="navbar__mobile__close__button__dash" />
                            <div className="navbar__mobile__close__button__dash" />
                            <div className="navbar__mobile__close__button__dash" />
                        </div>

                        <div className="navbar__mobile__links__container">

                            <Link
                                className="navbar__mobile__link__item"
                                to="/"
                                onClick={this.handleRouteUpdate}
                                activeStyle={{ opacity: 1 }}
                            >
                                Why us?
                          </Link>
                            <Link
                                className="navbar__mobile__link__item "
                                to="/"
                                onClick={this.handleRouteUpdate}
                                activeStyle={{ opacity: 1 }}
                            >
                                Upcoming Reports
              </Link>
                            <Link
                                className="navbar__mobile__link__item"
                                to="/"
                                onClick={this.handleRouteUpdate}
                                activeStyle={{ opacity: 1 }}
                            >
                                Latest Publication
              </Link>
                            <Link
                                className="navbar__mobile__link__item"
                                to="/"
                                onClick={this.handleRouteUpdate}
                                activeStyle={{ opacity: 1 }}
                            >
                                Press Release
              </Link>
                            <Link
                                className="navbar__mobile__link__item"
                                to="/"
                                onClick={this.handleRouteUpdate}
                                activeStyle={{ opacity: 1 }}
                            >
                                Report Category
              </Link>

                            <Link
                                className="navbar__mobile__link__item contact__us"
                                to="/"
                                onClick={this.handleRouteUpdate}
                                activeStyle={{ opacity: 1 }}
                            >
                                About us
              </Link>


                        </div>
                    </div>
                ) : (

                        <div className="navbar__link__wrapper__list">
                            <div>
                                <ul className="navbar__links__container">
                                    <li>
                                        <Link
                                            className="navbar__link__item"
                                            to="/"
                                            activeStyle={{ opacity: 1 }}
                                        >
                                            Home
                                    </Link>
                                    </li>
                                    <li>
                                        <Link className="navbar__link__item" to="/about_us"
                                            activeStyle={{ opacity: 1 }}>
                                            About us
                                    </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="navbar__link__item"
                                            // onClick={() => scrollTo("#about_ext_link")}
                                            to="/our_service"
                                            activeStyle={{ opacity: 1 }}
                                        >
                                            Our Services
                                    </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="navbar__link__item"
                                            to="/categories"
                                            activeStyle={{ opacity: 1 }}
                                        >
                                            Categories
                                </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="navbar__link__item"
                                            to="/#publisher__ext__link"
                                            activeStyle={{ opacity: 1 }}
                                        >
                                            Publishers
                                </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="navbar__link__item"
                                            to="/#press__ext__link"
                                            activeStyle={{ opacity: 1 }}
                                        >
                                            Press releases
                                    </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="navbar__link__item"
                                            to="/contact"
                                            activeStyle={{ opacity: 1 }}
                                        >
                                            Contact us
                                    </Link>
                                    </li>
                                    {/* <li className="navbar__link__item">
            <Link to="/loan/">
              <div className="navbar__link__item__button">Loan</div>
            </Link>
          </li> */}
                                    {/* <li>
                                    <Link
                                        className="navbar__link__item navbar__blog__link"
                                        to="/blog/"
                                        activeStyle={{ opacity: 1 }}
                                    >
                                        Blog
                </Link>
                                </li> */}
                                    {/* <li className="navbar__link__item ">
                                    <a >
                                        <div className="navbar__link__item__button">
                                            Log In / Sign Up
                  </div>
                                    </a>
                                </li> */}
                                    {/*
              <select
                className="form-control"
                name="Language"
                value={lang}
                onChange={this.handleChangeLanguage}
              >
                <option value="en" className="form-control">
                  English
                </option>
                <option value="mr" className="form-control">
                  Marathi
                </option>
              </select> */}
                                    <div
                                        className="navbar__link__ham__button"
                                        onClick={this.toggleNavbarDropdown}
                                    >
                                        <span className="navbar__link__ham__button__dash" />
                                        <span className="navbar__link__ham__button__dash" />
                                        <span className="navbar__link__ham__button__dash" />
                                    </div>
                                </ul>
                            </div>
                        </div>

                    )}
            </nav>
        )
    }
}

export default Navbar
