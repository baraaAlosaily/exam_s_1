import React, { Component } from 'react'
import ApiCurdData from './ApiCurdData'
import axios from 'axios'
import CrudUpdateForm from "./CrudUpdateForm"
export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_SERVER_URL,
      apiCrudData: [],
      showCrud: false,
      showApiApiMassage: false,
      criditLine: '',
      slugName: '',
      showUpdateForm: false
    }
  }

  showUpdateForm = (criditLine, slug) => {
    this.setState({
      criditLine: criditLine,
      slugName: slug,
      showUpdateForm: true
    })
  }

  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/art/favorite`);
    this.setState({
      apiCrudData: request.data,
      showCrud: true
    })
  }
  deleteItem = async (slug) => {
    await axios.delete(`http://localhost:8080/art/favorite/:slug`);
    const newCrudData = this.state.apiCrudData.filter(obj => obj.slug !== slug)
    this.setState({
      apiCrudData: newCrudData
    })
  }
  updateDescriptionChange = (e) => this.setState({ criditLine: e.target.value })
  updateItem = async (e) => {
    e.preventDefault();
    const request = await axios.put(`http://localhost:8080/art/favorite/${this.state.slugName}`, { criditLine: this.state.criditLine });
    this.setState({
      apiCrudData: request.data
    })
  }
  render() {
    return (
      <>
        {
          this.state.showUpdateForm &&
          <CrudUpdateForm
            updateDescriptionChange={this.updateDescriptionChange}
            updateItem={this.updateItem}
            criditLine={this.state.criditLine}
          />
        }
        {this.state.showCrud &&
          <ApiCurdData
            apiCrudData={this.state.apiCrudData}
            deleteItem={this.deleteItem}
            showUpdateForm={this.showUpdateForm} />
        }

      </>
    )
  }
}

export default Favorite
