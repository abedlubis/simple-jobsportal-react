import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

class CardJobDesc extends Component {
  render() {
      const {detailJob} = this.props
    return (
      <div className="col-md-6">
        <Card>
          <Card.Body dangerouslySetInnerHTML={{__html: detailJob.description}}></Card.Body>
        </Card>
      </div>
    )
  }
}

export default CardJobDesc
