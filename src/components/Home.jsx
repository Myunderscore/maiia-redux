import React, { Component } from 'react'
import ProductsList from "./ProductsList"
import Search from "./SearchBar"
import ProductsSearchResult from "./ProductsSearchResult"

class Home extends Component {
    render() {
        return (
            <section>
                <div className="container my-4">
                    <h1>Welcome on our marketplace</h1>
                    <Search />
                    <ProductsSearchResult />
                    <br />
                    <ProductsList />
                </div>
            </section>
        )
    }
}


export default Home
