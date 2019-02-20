import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'

class Paginations extends Component {
    state = {
        active: 1
    }

    goToPage (number) {
        this.setState({
            active: number
        })
        this.props.handlePage(number)
    }

    render() {
        const {active} = this.state
        let items = [];
        for (let number = 1; number <= 6; number++) {
        items.push(
            <Pagination.Item href="#App" onClick={() => this.goToPage(number)} key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
        }
        return(
            <div className="mt-4 d-flex justify-content-center">
                <Pagination>{items}</Pagination>
            </div>   
        )   
    }

}

export default Paginations