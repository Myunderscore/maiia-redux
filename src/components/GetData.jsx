import React from "react";
import axios from "axios";
import Loading from "../medias/market.gif"



class GetData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      data: {},
      url: `https://jsonplaceholder.typicode.com/photos`,
      id: props.productId.id,
      title: props.productTitle.title
    }
  }

  getProductData = async () => {
    console.log(this.state.title)
    try {
      const { data } = await axios.get(
        this.state.url,
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            _limit: 100,
            id: this.state.id || null,
            title: this.state.title || null,
          }
        });
      return data;
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  async componentDidMount() {
    const productData = await this.getProductData();

    return this.setState({
      data: productData,
      loading: false
    })
  }

  render() {
    const { children } = this.props;
    const { loading, error, data } = this.state;

    if (loading) {
      return (
        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-3 "></div>
            <div className="col-lg-3">
              <img src={Loading} alt="Loading data..." />
            </div>
            <div className="col-lg-3 "></div>
          </div>
        </div>
      );
    } else if (error) {
      console.log(error)
    }
    return children(data)
  }
}

export default GetData;
