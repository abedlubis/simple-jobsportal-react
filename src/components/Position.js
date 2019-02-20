import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'

class Position extends Component {
    constructor(props){
        super(props)
        this.state = {
            position : ['all', 'javascript', 'php', 'python', 'golang', 'ruby', 'c#', 'devops', 'fullstack', 'frontend', 'backend', 'database engineer', 'software engineer', 'vue', 'react', 'angular',  ]
        }
    }
    searchPosition (p) {    
        this.props.handleSearchPosition(p)
    }
    render() {
        const {position} = this.state
        return (
            <div className="d-flex">
                {
                    position.map((p, index) => {
                       return <Badge onClick={() => this.searchPosition(p)} className="mr-2" style={{cursor: 'pointer'}} value={p} variant="light" key={index}>{p}</Badge>
                    })
                }
            </div>
        )
    }
}

export default Position
