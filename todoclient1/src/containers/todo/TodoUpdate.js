import React, { useState, Component } from 'react'
import { useHistory } from 'react-router-dom';
import * as actions from '../../store/actions'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom'
import { Grid, TextField } from '@material-ui/core';

  
const TodoUpdate = (props) => {

  const [title, settitle] = useState(props.t1.title);
  const [description, setdescription] = useState(props.t1.description)

    let history = useHistory();
        const onUpHand = () => {
            const newt1 = {...props.t1, title: title, description:description, id: props.t1._id} 
            console.log(newt1);
            props.updateTodo(newt1);
            history.push("/todos");
         }
        return (
            <Grid 
            container
  direction="row"
  justify="center"
  alignItems="center"
>
            <Card  style={{width: "400px", margin: '50px  0px', padding: "10px"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={"Title for image"}
                height="140"
                image={require('static/images/uploaded/a1.jpg')}
                title={"Title for image"}
              />
              <CardContent>

              <TextField 
            size="small"                        
            name="title" value={title} onChange={(e)=>settitle(e.target.value)} 
            id="title" label="Title" variant="outlined" style={{marginBottom: "10px"}} />
      
            <TextField 
            size="small"                        
            name="description" value={description} onChange={(e)=>setdescription(e.target.value)} 
            id="description" label="Description" variant="outlined" />


                {/* <Typography gutterBottom variant="h5" component="h2">
                  {props.t1.title}
                </Typography>
                <TextField id="title" label="Title" />
                <Typography variant="body2" color="textSecondary" component="p">
                {props.t1.description}
                </Typography> */}
              
              
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" onClick={onUpHand} size="small" 
              style={{margin: "0 10px", backgroundColor: "#006600", color: "white"
            }}
            >
              Update
              </Button>
            </CardActions>
          </Card>
            </Grid>
        )    
    }

const mapStateToProps = (state, ownProps) => {
    let selTodo = state.todo.todos.find(t1 => {
        return t1._id === ownProps.match.params.id;
    })
    return {
      t1: selTodo,
    }
  }  
const mapDispatchToProps = dispatch => {
    return {
      updateTodo: (t1) => dispatch(actions.updateTodo(t1)),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoUpdate)
