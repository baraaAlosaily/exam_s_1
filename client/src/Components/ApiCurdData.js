import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class ApiCurdData extends Component {
  render() {
    return (
      this.props.apiCrudData.map((obj, idx) => {
        return (
          <div key={idx}>
            {/* <h2>{obj.title}</h2>
            <img src={obj.thumbnail} alt='' />
            <p>{obj.criditLine}</p> */}

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={obj.thumbnail} />
              <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>
                  {obj.criditLine}
                </Card.Text>
                <Button onClick={e => this.props.deleteItem(obj.slug)} variant="primary">Delete</Button>
                <Button onClick={e => this.props.showUpdateForm(obj.criditLine, obj.slug)} variant="primary">show update form</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })
    )
  }
}

export default ApiCurdData
