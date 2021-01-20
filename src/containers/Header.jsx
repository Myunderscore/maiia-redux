import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from "../actions"
import { Link } from "react-router-dom"
import Logo from "../medias/logo-magasin-sante.jpeg"

class Header extends Component {
    onClickAutentification = () => {
        this.props.setAuthentification(!this.props.isLoggedIn)
    }
    renderAuthentificationLabel = () => {
        if (this.props.isLoggedIn) {
            return "Déconnexion"
        } else {
            return "Connexion"
        }
    }
    render() {
        return (
            <div className="bgColorGreen">
                <nav className="navbar navbar-light bg-white p-0">
                    <div className="container">
                        <div className="ml-2"><img src={Logo} alt="logo of Health Store" style={{width:"30%"}}/></div>
                        <form className="mr-0">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="container">
                    <ul className="nav nav-tabs bgColorGreen " >
                        <li className="nav-item ">
                            <Link to="/" className="nav-link font-weight-bold text-light">Health Store</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/products/1234" className="nav-link font-weight-bold text-light">Products</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link font-weight-bold text-light"
                                onClick={this.onClickAutentification}
                            >{this.renderAuthentificationLabel()}</a>
                        </li>
                        <li className="nav-item ">
                            <Link to="/basket/" className="nav-link font-weight-bold text-light">Basket</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentification.isLoggedIn
    }
}

export default connect(mapStateToProps, actions)(Header)
