import React, { Component } from 'react'
import Todo from './containers/todo/Todo'
import {connect} from 'react-redux'
import { autoLoginCheck } from './store/actions';
import {Switch, Route, Redirect} from 'react-router'
import {NavLink} from 'react-router-dom'
import Login from './containers/auth/Login'
import Signup from './containers/auth/Signup'
import Logout from './containers/auth/Logout';
import TodoDetails from './containers/todo/TodoDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoUpdate from './containers/todo/TodoUpdate';

class App extends Component {
  componentDidMount(){
    this.props.autoLoginCheck();
  }
  render() {
    let routes = <>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Redirect to="/login"/>         
    </>;    
    if(this.props.isAuth){
      routes = <>
            <Route path='/todos' exact component={Todo}/>   
            <Route path='/todos/:id' exact component={TodoDetails}/>   
            <Route path='/todos/edit/:id' exact component={TodoUpdate}/>   
            <Route path='/logout' exact component={Logout}/>
            <Redirect to="/todos"/>         
      </>;      
    }


    return (
      <div>
              {/* <NavLink activeClassName="act" to='/logout'>Logout</NavLink> */}
              <Header isAuth={this.props.isAuth} />
              <div style={{margin:0}}  style={{backgroundColor: '#ffffdd'}}>
              <Switch>
              {routes}
            </Switch>
              </div>
            <Footer />

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.token != null,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    autoLoginCheck: () => {dispatch(autoLoginCheck())},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
