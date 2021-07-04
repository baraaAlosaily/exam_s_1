import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class ApiData extends Component {
  render() {
    return (
      this.props.apiData.map((obj, idx) => {
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
                <Button onClick={e => this.props.favoriteItem(obj)} variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })
    )
  }
}

export default ApiData
