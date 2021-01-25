import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/index';

class SearchBar extends Component {
    render() {
        const { search, value } = this.props;
        return (
            <div>
                <input
                    className="form-control"
                    placeholder="Find a product"
                    onChange={(e) => search(e.target.value)}
                    value={value} />
            </div>);
    }
}

function mapStateToProps(products) {
console.log("products", products && products)
    return { value: products.search.value };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);