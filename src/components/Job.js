import React, { Component } from 'react'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'

//actions


import { Card } from 'react-bootstrap'
import { Link  } from 'react-router-dom'

class Job extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urlImage: 'https://cdn.ymaws.com/www.amwa.org/resource/resmgr/career/career_post_a_job.jpg'
        }
    }

    render() {
        const {detailJob} = this.props
        const {urlImage} = this.state
        // console.log(this.props.detailJob)
        return (
            <Card className="col-md-3 m-2">
                 <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title style={{height: '50px'}} as={Link} to={`/jobs/${detailJob.id}`}>{detailJob.title}</Card.Title>
                    <Card.Img className="img-fluid" variant="top" src={detailJob.company_logo || urlImage } style={{height: '200px', objectFit: 'contain'}} />
                    <Card.Subtitle className="my-2 text-muted">{detailJob.type}</Card.Subtitle>
                    <div>
                        <Card.Text dangerouslySetInnerHTML={{__html: detailJob.description.slice(0,150)+ '...'}}>
                        </Card.Text>
                    </div>
                    <div>
                        {  detailJob.company_url && 
                            <Card.Link href={detailJob.company_url}>company site</Card.Link>
                        }
                        <Card.Link as={Link} to={`/jobs/${detailJob.id}`}>see more</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Job