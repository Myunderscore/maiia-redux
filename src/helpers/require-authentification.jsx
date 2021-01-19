import React, { Component } from 'react'
import { connect } from "react-redux"

export default function (ChildComponent) {
    class RequireAuthentification extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isLoggedIn: this.props.isLoggedIn,
            }
        }
        render() {
            if (!this.props.isLoggedIn) {
                this.props.history.push("/")
            }
            return <ChildComponent />
        }
    }
    const mapStateToProps = state => {
        return { isLoggedIn: state.authentification.isLoggedIn }
    }
    return connect(mapStateToProps)(RequireAuthentification);
}



