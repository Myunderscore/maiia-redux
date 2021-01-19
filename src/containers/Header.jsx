import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from "../actions"
import { Link } from "react-router-dom"

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
                <nav class="navbar navbar-light bg-light ">
                    <div class="container-fluid">
                        <form class="mx-auto">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="container">
                    <ul className="nav nav-tabs bgColorGreen " >
                        <li className="nav-item ">
                            <Link to="/" className="nav-link font-weight-bold text-light">eStore</Link>
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
