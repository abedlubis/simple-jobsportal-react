import React, { Component } from 'react';
import  { BrowserRouter as Router,
          Route,
          Switch
        } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import {PrivateRoute} from './helpers/privateRoute'
//containers
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import DetailJob from './containers/DetailJob'
import Dashboard from './containers/Dashboard'

//componennts
import Navbar from './components/Navbar';
import CustomProvider from './ContextProvider'

//css
import './App.css';

class App extends Component {
  render() {
    // console.log("didalam render")
    return (
      <CustomProvider>
        <Provider store={store}>
          <Router>
            <div className="App" id="App">
              <div>
                <Navbar />
              </div>
              <Switch>
                <Route exact path="/"  component={Dashboard} />
                <PrivateRoute exact path="/jobs"  component={Home} />
                <Route exact path="/about/" component={About} />
                <Route exact path="/contact/" component={Contact} />
                <PrivateRoute path='/jobs/:id' component={DetailJob} />
                <Route component={() => <h1>404 Not Found</h1>} />
              </Switch>
            </div>
          </Router>        
        </Provider>
      </CustomProvider>
    );
  }
}

export default App;
