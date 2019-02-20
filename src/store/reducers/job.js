const defaultState = {
    jobs: null,
    newFilter : null,
    loading: false,
    error: false,
    currentDetailJob : {}
}

export default function(state=defaultState, action) {
    const {type, payload} = action
    switch (type) {
        case 'GET_JOBS_SUCCESS':
            return ({
                ...state,
                loading: false,
                jobs: payload,
                newFilter: payload
            })
        case 'GET_JOBS_BY_ID_SUCCESS':
            return ({
                ...state,
                currentDetailJob: payload,
            })
        case 'GET_JOBS_LOADING':
            return ({
                ...state,
                loading: true
            })
        case 'GET_JOBS_ERROR':
            return ({
                ...state,
                loading: false,
                error: true
            })
        case 'SET_NEW_JOBS':
            return ({
                ...state,
                newFilter: payload,
            })
        default:
            return state
    }
    
}