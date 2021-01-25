import React from 'react';
import { connect } from 'react-redux';

class AddRemoveProduct extends React.Component {

  add = () => {
    const value = this.props.toBasket
    this.props.dispatch({ type: 'ADD', value });
    console.log(this.props.toBasket)
  }

  remove = () => {
    const value = this.props.toBasket
    this.props.dispatch({ type: 'REMOVE', value });
  }

  renderBasket = () => {
    if (this.props.toBasket) {
      return "Sign in"
    } else {
      return "Sign out"
    }
  }

  render() {

    return (
      <span className="text-center">
        <button className="btn btn-primary font-weight-bold pr-0"
          onClick={this.remove}>Remove</button>
        <span className="text-dark "> / </span>
        <button className="btn btn-primary font-weight-bold pl-0"
          onClick={this.add}>Add</button>
      </span>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.counter.value,

  };
}


export default connect(mapStateToProps)(AddRemoveProduct);


