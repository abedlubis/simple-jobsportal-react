import React, { Component } from 'react'
// First way to import
import { ClipLoader } from 'react-spinners';

class Loading extends Component {
    render(){
        return (
            <div className='mt-4 sweet-loading d-flex justify-content-center'>
              <ClipLoader
                css={JSON.stringify(
                    {
                        display: 'block',
                        margin: '0 auto',
                        borderColor: 'red'
                    })
                }
                sizeUnit={"px"}
                size={35}
                color={'#2acdd6'}
                loading={this.props.loading}
              />
            </div> 
        )
    }
}

export default Loading