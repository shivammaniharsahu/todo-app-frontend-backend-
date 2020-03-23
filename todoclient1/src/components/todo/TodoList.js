import React, { useState } from 'react'
import classes from './TodoList.module.css';
import AddTodo from './AddTodo';
import Todo from './Todo'
import {
    Grid, TextField, Box
} from '@material-ui/core/'
export default function TodoList(props) {
    const [si, setsi] = useState("")
    return (
        <Box p={3}>        
        <div>
        <div>
        <h1 className={classes.myHead}>Todo List</h1>
        <div style={{display: "flex", marginTop: 20}}>
        <div style={{flexGrow: 3}}>
        <AddTodo  addTodo={props.addTodo} userid={props.userid} />
        </div>
        <div style={{flexGrow: 1}}>
        <TextField 
            size="small"                        
            type={si} onChange={(e)=>{setsi(e.target.value)}}
            id="si" label="Search" variant="outlined" />
        </div>
        </div>        
        </div>
            <Grid container spacing={24}>
            {
                props.todos
                ? props.todos.map(t1 => 
                    {
                        if(t1.title.match(si)){
                            return <Grid item md={3} style={{margin: 30}} key={t1.id}><Todo completeTodo={props.completeTodo} deleteTodo={props.deleteTodo} 
                            updateTodo={props.updateTodo}           t1 = {t1}/></Grid>    
                        }
                        else {
                            return null;
                        }
                    })
                : <h1>Loading....</h1>
            }
            </Grid>
        </div>
        </Box>
    )
}