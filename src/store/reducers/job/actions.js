import axios from 'axios'

export function fetchJobs () {
    return async dispatch => {
        dispatch(loading())
        try {
            const { data } = await axios.get('https://cors.io/?https://jobs.github.com/positions.json')
            // console.log(data)
            dispatch({
                type: 'GET_JOBS_SUCCESS',
                payload: data
            })
        } catch (err) {
            console.log(err,"eerrors")
                dispatch({
                    type: 'GET_JOBS_ERROR',
                })
        }
    }
}

export function fetchJobsByPosition (data) {
    return dispatch => {
        dispatch(loading())
        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${data}&page=1`)
        .then(({data}) => {
          // console.log(data)
            dispatch({
                type: 'GET_JOBS_SUCCESS',
                payload: data
            })
        })
        .catch((err) => {
        //   console.log(err)
            dispatch({
                type: 'GET_JOBS_ERROR',
            })
        })
    }
}

export function fetchJobsByPage (data) {
    return dispatch => {
        dispatch(loading())
        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${data}`)
            .then(({data}) => {
                dispatch({
                    type: 'GET_JOBS_SUCCESS',
                    payload: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'GET_JOBS_ERROR',
                })
            })
    }
}

export function fetchJobsById (id) {
    return dispatch => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
            .then(({data}) => {
                console.log(data,"==")
                dispatch({
                    type: 'GET_JOBS_BY_ID_SUCCESS',
                    payload: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'GET_JOBS_ERROR',
                })
            })
    }
}

export function setNewFilter(jobs) {
    return { 
        type: 'SET_NEW_JOBS', 
        payload: jobs
    }
}

function loading () {
    return {
        type: 'GET_JOBS_LOADING',
    }
}
