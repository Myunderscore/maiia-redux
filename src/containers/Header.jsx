import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from "../actions"
import { Link } from "react-router-dom"
import Logo from "../medias/logo-magasin-sante.jpeg"
import SearchBar from "../components/SearchBar"

class Header extends Component {
    onClickAutentification = () => {
        this.props.setAuthentification(!this.props.isLoggedIn)
    }
    renderAuthentificationLabel = () => {
        if (this.props.isLoggedIn) {
            return "Sign out"
        } else {
            return "Sign in"
        }
    }
    render() {
        const { basket } = this.props
        return (
            <div className="bgColorGreen">
                <nav className="navbar bg-white p-lg-0 fixed-top pb-md-1" >
                    <div className="container">
                        <Link to="/" title="Go to homepage" className="ml-2">
                            <img src={Logo} alt="logo of Health Store" style={{ width: "30%" }} />
                        </Link>
                        <SearchBar />
                    </div>
                </nav>
                <div className="container">
                    <ul
                        className="nav nav-tabs bgColorGreen navbarMarginTop"
                    >
                        <li className="nav-item ">
                            <Link to="/" title="Health Store website" className="nav-link font-weight-bold text-light">Health Store</Link>
                        </li>
                        <li className="nav-item ">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link font-weight-bold text-light"
                                title="Connect to your account"
                                onClick={this.onClickAutentification}
                            >{this.renderAuthentificationLabel()}</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/basket/"
                                title="Your basket with products you have selected"
                                className="nav-link font-weight-bold text-light">
                                Basket <span className="bg-warning m-2 p-1">{basket.length}</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentification.isLoggedIn,
        basket: state.counter.basket,
    }
}

export default connect(mapStateToProps, actions)(Header)
