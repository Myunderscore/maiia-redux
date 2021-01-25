import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProductsSearchResult extends Component {
  render() {
    const { products } = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
    );
  }
}


function mapStateToProps(products) {
  return {
    products: products.search.products
  }
}

export default connect(mapStateToProps)(ProductsSearchResult);
