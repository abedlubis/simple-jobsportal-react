import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

class CardJobSide extends Component {
    state = {
        urlImage: 'https://cdn.ymaws.com/www.amwa.org/resource/resmgr/career/career_post_a_job.jpg'
    }
    render() {
        const {detailJob} = this.props
        const {urlImage} = this.state
        return (
        <div className="col-md-4">
            <Card style={{textAlign: 'left'}}>
                <Card.Img variant="top" src={detailJob.company_logo || urlImage} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>{detailJob.title || '-'}</Card.Title>
                    <Card.Text>
                    {detailJob.type || '-'}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Company: {detailJob.company || '-'}  </ListGroupItem>
                    <ListGroupItem>City   : {detailJob.location || '-'} </ListGroupItem>
                </ListGroup>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Link href={detailJob.company_url || '#'}>Company site</Card.Link>
                </Card.Body>
            </Card>
        </div>
        )
    }
}

export default CardJobSide
