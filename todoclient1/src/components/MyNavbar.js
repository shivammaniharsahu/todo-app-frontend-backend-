import React, { Component } from 'react'
import  './MyNavBar.css';
import {NavLink} from 'react-router-dom'

export default class componentName extends Component {  
    render() {
      let links = <>      
      <NavLink activeClassName="act" to='/login'>Login</NavLink>
              <NavLink activeClassName="act" to='/signup'>Signup</NavLink>
      </>;    
      if(this.props.isAuth){
        links = <>
        <NavLink activeClassName="act" to='/logout'>Logout</NavLink>
        <NavLink activeClassName="act" to='/todos'>Todo List</NavLink>
        </>;      
      }
  
  
        return (
<div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
      Todo
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
  {links}
  </div>
</div>            
        )
    }
}
