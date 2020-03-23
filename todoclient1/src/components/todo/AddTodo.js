import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import './MyStyle.css'

export default class componentName extends Component {
    state = {
        title: '',
        description: ''
    }
    onChangeHand = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onAddHand = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.description);
        this.setState({
            title: '',
            description: ''
        })
    }
    render() {
        return (
            <div class="flexbox">
            <TextField 
            size="small"                        
            name="title" value={this.state.title} onChange={this.onChangeHand} 
            id="title" label="Title" variant="outlined" />
            <TextField 
            size="small"                        
            name="description" value={this.state.description} onChange={this.onChangeHand} 
            id="description" label="Description" variant="outlined" />
            <Button onClick={this.onAddHand} variant="contained" color="primary">
  Add
</Button>
            </div>
        )
    }
}
