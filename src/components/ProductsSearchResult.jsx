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
        <tbody>{products.map((product) => <tr key={product}><td>{product}</td></tr>)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products: products.products
  }
}

export default connect(mapStateToProps)(ProductsSearchResult);
