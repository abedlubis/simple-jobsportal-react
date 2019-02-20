import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Image} from 'react-bootstrap'

//components
import SearchGroup from '../components/SearchGroup'
import Position from '../components/Position'
import Loading from '../components/Loading'
import ListJobs from '../components/ListJobs'
import Paginations from '../components/Pagination'

//actions
import {fetchJobs, setNewFilter, fetchJobsByPosition, fetchJobsByPage} from '../store/reducers/job/actions'

export class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        jobs : null,
        dataFilter: null,
        loading: true
      }
    }
    
    componentDidMount() {
      this.props.fetchJobs()
    } 
      
    handleSearch = (data) => {
      let {jobs, setNewFilter} = this.props
      var keyword = new RegExp(data.toLowerCase())
      let newJobs = jobs.filter(e =>{
        return e.title.toLowerCase().match(keyword)
      })
      setNewFilter(newJobs)
    }
    handleSearchPosition = (data) => {
      let {fetchJobsByPosition} = this.props
      if(data === 'all') data = ''
      fetchJobsByPosition(data)
    }
    handlePage = (data) => {
      let {fetchJobsByPage} = this.props
      fetchJobsByPage(data)
    } 
    render() {
      const {newFilter, loading, error} = this.props
      return (
      <div>
        <Image src="http://www.thejobsportal.co.uk/assets/img/Logo@2x.png" rounded />
        <div className="container"> 
            <SearchGroup handleSearch={this.handleSearch}></SearchGroup>
            <Position handleSearchPosition={this.handleSearchPosition}></Position>
        </div>
        {error && <h1>Oops... something wrong</h1>}
        <Loading loading={loading}></Loading>
        <ListJobs dataJobs={newFilter}></ListJobs>
        <Paginations handlePage={this.handlePage}></Paginations>
      </div>
      ) 
    }
}
const mapStateToProps = (state) =>  ({
                                      jobs: state.job.jobs,
                                      newFilter: state.job.newFilter,
                                      loading: state.job.loading,
                                      error: state.job.error
                                    })  
const mapDispatchToProps = (dispatch) => bindActionCreators(
                                        {
                                          fetchJobs, 
                                          setNewFilter, 
                                          fetchJobsByPosition, 
                                          fetchJobsByPage
                                        }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home) 
