import React, { Component } from 'react';
import Job from './Job';

class ListJobs extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render() {
        const {dataJobs} = this.props
        // console.log(dataJobs)
        return(
            <div className="row justify-content-center">
                { 
                    dataJobs && dataJobs.map((job, index) => 
                     (<Job detailJob={job} key={index}></Job>)
                    ) 
                }  
            </div>
        )
    }

}

export default ListJobs