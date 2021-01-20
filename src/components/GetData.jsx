import React from "react";
import axios from "axios";
import Loading from "../medias/market.gif"


class GetData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      data: "",
    }
  }
  componentDidMount() {

    axios
      .get(`https://jsonplaceholder.typicode.com/photos`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            _limit: 100
          }

        })
      .then(response => {
        if (response && response.data) {
          console.log('list data', response.data)
          this.setState({ data: response.data, loading: false });
        }
      })
      .catch((error) => {
        this.setState({ loading: false, error });
      });
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
