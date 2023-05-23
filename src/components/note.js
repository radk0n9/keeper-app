import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

export default function(props){

    function handleDelete(){
        props.deleteNote(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab onClick={handleDelete}><DeleteIcon/></Fab>
        </div>
    )
}