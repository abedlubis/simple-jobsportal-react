import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

//actions
import {fetchJobsById} from '../store/reducers/job/actions'

//components
import CardJobSide from '../components/CardJobSide';
import CardJobDesc from '../components/CardJobDesc';

export class DetailJob extends Component {

  componentDidMount(){
    this.props.fetchJobsById(this.props.match.params.id)
  }
  // componentWillUpdate() {
  //   this.props.fetchJobsById(this.props.match.params.id)
  // }

  render() {
    const {detailJob} = this.props
    return (
      <div className="mt-4 container">
        <div className="row">
          <CardJobSide detailJob={detailJob}></CardJobSide>
          <CardJobDesc detailJob={detailJob}></CardJobDesc>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  jobs: state.job.newFilter,
  detailJob: state.job.currentDetailJob
})

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
                                            fetchJobsById
                                          }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailJob)
