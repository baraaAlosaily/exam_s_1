import React, { Component } from 'react'

export class CrudUpdateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.updateItem}>
          <input onChange={this.props.updateDescriptionChange} type='text' value={this.props.criditLine} />
          <input type="submit" value="update data" />
        </form>
      </div>
    )
  }
}

export default CrudUpdateForm
