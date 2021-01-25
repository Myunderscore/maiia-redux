import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import GetData from "./GetData"
import CardProduct from "./CardProduct"



class ProductsList extends Component {
    constructor(props, context) {
        super(props, context)
    }
    
    render() {
        const { value } = this.props;
        console.log(value)
        return (
            <GetData productId="" productTitle={value}>
              
                {(data) => data
                    .map(item => <CardProduct {...item} />)}
            </GetData>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        value: state.search.value
    }
}

ProductsList.propTypes = {
    value: PropTypes.string
};

export default connect(mapStateToProps)(ProductsList);