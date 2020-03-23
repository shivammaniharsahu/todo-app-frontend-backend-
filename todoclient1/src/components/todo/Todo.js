import React, { useState } from 'react'
import ImgMediaCard from '../UI/ImgMediaCard';

export default function Todo(props) {

    const [title, settitle] = useState(props.t1.title)
    
    const onCompHand = () => {
        props.completeTodo(props.t1);
    }
    const onDelHand = () => {
        props.deleteTodo(props.t1);
    }
    const onUpHand = () => { 
        props.t1.title = title
        props.updateTodo(props.t1);
    }
    return (
        <div>
            <ImgMediaCard title={props.t1.title} 
            description={props.t1.description} 
            img={ require('static/images/uploaded/a1.jpg') }
            titleimg="Title for image"   
            detailslink={"/todos/"+props.t1._id}         
            />
            {/* <p>{props.t1.title}
            <input value={title} onChange={(e)=>{settitle(e.target.value)}} />
            <button onClick={onUpHand}>Update</button>
            <button onClick={onCompHand}>Complete</button>
            <button onClick={onDelHand}>Delete</button>
            </p> */}
        </div>
    )
}
