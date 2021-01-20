import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/index';

class SearchBar extends Component {
    render() {
        const { search, value } = this.props;

        return (
            <input
                className="form-control"
                placeholder="Find a product"
                onChange={(e) => search(e.target.value)}
                value={value} />
        );
    }
}

function mapStateToProps({ products }) {
    return { value: products.value };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);