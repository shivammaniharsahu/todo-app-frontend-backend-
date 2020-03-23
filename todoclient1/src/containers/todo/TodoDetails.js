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
import { Grid } from '@material-ui/core';

  
const TodoDetails = (props) => {
    let history = useHistory();
        const onCompHand = () => {
           props.completeTodo(props.t1);
           history.push("/todos");
        }
        const onDelHand = () => {
            props.deleteTodo(props.t1);
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
                <Typography gutterBottom variant="h5" component="h2">
                  {props.t1.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.t1.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" onClick={onCompHand} size="small" 
              style={{margin: "0 10px", backgroundColor: "#006600", color: "white"
            }}
            >
              Complete
              </Button>
              <NavLink style={{textDecoration: "none"}} to={"/todos/edit/"+props.t1._id}>
              <Button variant="contained" size="small"
                style={{margin: "0 10px", backgroundColor: "orange", color: "white"}}
              >
                Update
              </Button>
              </NavLink>
              <Button variant="contained" onClick={onDelHand} size="small"              style={{margin: "0 10px", backgroundColor: "#660000", color: "white"}}
              >
              Delete
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
        completeTodo: (t1) => dispatch(actions.completeTodo(t1)),
        deleteTodo: (t1) => dispatch(actions.deleteTodo(t1)),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails)
