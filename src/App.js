import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Main} from './components/Main';


import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
 
import Portfolio from './components/Portfolio';
import Error from './components/Error';
import {EmailModal} from './components/EmailModal';
 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {emailModalShow : false}
  }

  viewEmailModal() {
    this.setState({
        emailModalShow: true
    })
  }

  render() {
    let emailModalClose =() => this.setState({emailModalShow:false});

    return (
      <>
       <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/portfolio" component={Portfolio} />
            <Route component={Error}/>
          </Switch>
        </div> 
      </BrowserRouter>

      <EmailModal show={this.state.emailModalShow} onHide={emailModalClose} />
      </>
    );
  }
}
 
export default App;