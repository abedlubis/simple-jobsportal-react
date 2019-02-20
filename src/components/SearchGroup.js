import React, { Component } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
// import Form from 'react-bootstrap/FormGroup';

class SearchGroup extends Component {

    searchJob = (e) => {
        // console.log(e.target.value,"hasil onchange")
        this.props.handleSearch(e.target.value)
    }

    render() {
        return (
            <Form>
                <InputGroup className="mt-4 mb-3">
                    <FormControl onChange={this.searchJob}
                        placeholder="Search Job..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-info">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        )
    }
}

export default SearchGroup