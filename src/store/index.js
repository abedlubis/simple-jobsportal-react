import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers
import job from './reducers/job'
import auth from './reducers/auth'

const RootReducers = combineReducers({job, auth})

const store =   createStore(RootReducers, {}, 
                    composeWithDevTools(applyMiddleware(thunk))
                );

export default store
