import React, { Component } from 'react'
import ProductsList from "./ProductsList"
import Search from "./SearchBar"

class Home extends Component {
    render() {
        return (
            <section>
                {data => <Search {...data} />}
                <div className="container my-4">
                    <h1>Welcome on our marketplace</h1>
                    <br />
                    <ProductsList />
                </div>
            </section>
        )
    }
}

export default Home
