import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/index';
import { Redirect } from 'react-router'


class SearchBar extends Component {
    state = { click: false }

    handleClick() {
        this.setState({ click: !this.state.click})
    }
    render() {
        const { search, value } = this.props;
        return (
            <div>
                <form className="mr-0">
                    <input className="form-control me-2"
                        type="search"
                        placeholder="Find a product"
                        aria-label="Search"
                        onChange={(e) => search(e.target.value)}
                        value={value} />
                    <button
                        className="btn btn-outline-success"
                        type="Submit"
                        onClick={() => this.handleClick()}
                    >
                        Search
                    </button>
                    {this.state.click &&
                        <Redirect to={{
                            pathname: `/results/${value}`,
                            state: { referrer: "hello" }
                        }} />
                    }
                </form>

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