import React, { Component } from 'react';
import { connect } from 'react-redux';
import GetData from "./GetData"
import CardProduct from "./CardProduct"

class ProductsSearchResult extends Component {
  render() {
    const value = typeof window !== "undefined" &&
      window && window.location.href &&
      window.location.href.replace(/%20/g, " ").split("results/")[1].replace("?", "");
    console.log("val", value)
    return (
      <div className="container my-4">
        <div className="my-4">
          <h1 >Results for products search (only full title)</h1>
          <h3>for "{value}"</h3>
        </div>
        <GetData
          productId=""
          productTitle={value} >
          {(data) => data
            .map(item => <CardProduct {...item} key={item.id} />)}
        </ GetData>
        <br />  <br />  <br />  <br />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    products: state.search.value
  }
}

export default connect(mapStateToProps)(ProductsSearchResult);
