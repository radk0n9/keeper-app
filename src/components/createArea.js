import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

export default function(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [isTriggered, setTrigger] = useState(false)

    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevValue)=>{
            return {...prevValue, [name]: value}
        })
    };

    function handleClick(event){
        props.sendNote(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function handleTrigger(){
        setTrigger(true)
    }

    return (
        <div>
            <form className="create-note">
                {isTriggered ? <input 
                    placeholder="Enter a Title"
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                /> : null}
                <textarea 
                    placeholder="Enter a Note"
                    name="content"
                    rows={isTriggered ? "3" : "0"}
                    onChange={handleChange}
                    onClick={handleTrigger}
                    value={note.content}
                />
                <Zoom in={isTriggered}>
                    <button onClick={handleClick}><AddIcon/></button>    
                </Zoom>
            </form>
        </div>
    )
}