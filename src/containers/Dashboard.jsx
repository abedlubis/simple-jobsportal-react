import React, { Component } from 'react'
import {Button, Jumbotron} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export class Dashboard extends Component {
    state = {
        images: 
        [
            "https://www.renishaw.com/media/img/gen/d97c552f69544b2486dada2689913da2.jpg",
            "http://blog.edx.org/wp-content/uploads/2017/05/FEWD.jpg",
            "http://sellingout.com/wp-content/uploads/2015/01/LifetimeCustomerValue.jpg", 
            "https://cdn.sstatic.net/careers/Img/social/OG_Facebook_Jobs_home.png?v=37b55fc72141",
            "https://www.costengineering.eu/images/Java-Developer-Wide.jpg",
            "https://coteries.com/wp-content/uploads/2017/10/CTO-job-offer-lausanne-cto-lausanne-software-developer-300x193.png",
            "https://content-static.upwork.com/blog/uploads/sites/3/2016/08/23173933/DEV_SQL-hiring-guide_H.png",
            "https://blog.seedly.sg/wp-content/uploads/2016/09/fresh-grad-101.png" 
        ]
    }
  render() {
      const {images} = this.state 
    return (
      <>
        <Jumbotron style={{backgroundImage: 'url(https://i.ytimg.com/vi/VehD2s9gInc/maxresdefault.jpg', backgroundSize: 'cover'}}>
            <h1>Looking For Job?</h1>
            <p style={{fontSize: '1.5rem','WebkitTextStroke': '1px #d3d3d3'}}>
                We have many jobs for you...
            </p>
            <p>
                <Button as={Link} to="/jobs"  variant="secondary" active>
                    FIND JOBS <span className="ml-2"><i className="fas fa-search-dollar"></i></span>
                </Button>
            </p>
        </Jumbotron>    
        
        <div className="container mt-4 d-flex" style={{overflow: 'hidden', overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap'}}>
            {images.map((i, index) =>{
    return <img style={{maxWidth: "200px", maxHeight: "150px", display:'inline-block', margin: '2px'}} src={i} alt="" key={index}></img>
            })}
        </div>
        <footer className="page-footer font-small pt-4" style={{color: '#fff', backgroundColor: '#6d6d6d'}}>
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-9 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Simple React Application</h5>
                        <p>Use github jobs API</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social Media</h5>

                        <ul className="list-unstyled">
                        <li>
                            <span><i className="fab fa-github-square"></i></span><a style={{marginLeft: '5px', color: '#fff'}} target="_blank" rel="noopener noreferrer" href="https://github.com/abedlubis">Github</a>
                        </li>
                        <li>
                            <span><i className="fab fa-instagram"></i></span><a style={{marginLeft: '5px', color: '#fff'}} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/favestudio/">Instagram</a>
                        </li>
                        <li>
                            <span><i className="fab fa-behance-square"></i></span><a style={{marginLeft: '5px', color: '#fff'}} target="_blank" rel="noopener noreferrer" href="https://www.behance.net/lubisabedned74">Behance</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3" style={{backgroundColor: '#353C42'}}>© 2019 Copyright:
                <a href="https://reactjs.org/"> Made with React and Bootstrap React</a>
            </div>
        </footer>
      </>
    )
  }
}

export default Dashboard
