import React, { Component } from 'react'
import banner1 from '../static/images/banner1.jpg';
import classes from './Header.module.css';
import MyNavBar from './MyNavbar';
export default class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#440000"}}>
            <img className={classes.myimg} src={banner1} />
            <MyNavBar isAuth={this.props.isAuth} />
            </div>
        )
    }
}
