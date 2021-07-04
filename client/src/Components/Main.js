import React, { Component } from 'react'
import axios from 'axios'
import ApiData from "./ApiData"
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_SERVER_URL,
      apiData: [],
      show: false,
      showApiMassage: false,
      message: ''
    }
  }
  favoriteItem = async (dataObj) => {
    const postReq = await axios.post(`http://localhost:8080/art/favorite`, dataObj)
    this.setState({
      message: postReq.data,
      showApiMassage: true

    })
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/art`)
    this.setState({
      apiData: request.data,
      show: true
    })
  }
  render() {
    return (
      <>
        {this.state.show &&
          <ApiData
            apiData={this.state.apiData}
            favoriteItem={this.favoriteItem} />
        }
      </>

    )
  }
}

export default Main
