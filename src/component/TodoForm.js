import react, { useState} from "react";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const TodoForm = ({ setTodos, todos}) => {
    const [input, setInput] = useState('');
    const [deadline, setDeadline] = useState('');
    const [title, setTitle] = useState('');
    const inputTextHandler = (e) => {
        e.preventDefault()

        if (!input || /^\s$/.test(input) ||!deadline) {
            if (!deadline) {
                document.getElementById("Deadline").style.border = "1px solid red"
            }
            document.getElementById("notice").innerHTML = "*Todo and Deadline is not empty"
            document.getElementById("todo").style.border = "1px solid red"
            document.getElementById("notice").innerHTML = "*Todo and Deadline is not empty"
            document.getElementById("todo").setAttribute("error","")
            return
        }
        document.getElementById("notice").innerHTML = ""
        document.getElementById("todo").style.border = ""
        document.getElementById("Deadline").style.border = ""
        // setInputText(input)
        // setDeadl(deadline)
        // if (!input || /^\s$/.test(input) || !deadline) {
        //     return
        // }
        setTodos([{
                id: Math.floor(Math.random() * 1000),
                text: input,
            isComplete: false,
            deadline: deadline,
                title: title
            },
            ...todos
        ])
        setInput('')
        setDeadline('')
        setTitle('')
        // console.log(deadline)
    }
    return (
        <form onSubmit={inputTextHandler}>

            {/* <input
                className="Title_form"
                id="title"
                type='text'
                placeholder="Add Title "
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                    // console.log(e.target.value)
                }}

            ></input>
            <div>
                <input
                className="Input_form"
                id="todo"
                type='text'
                placeholder="Add Todo "
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                    // console.log(e.target.value)
                }}
            ></input>
                <input
                    className="Deadline_form"
                type={'date'}
                id="Deadline"
                onChange={(e) => {
                    setDeadline(e.target.value)
                }}
                value={deadline}
            /> */}
            <TextField
                className="Title_form"
                id="title"
                type='text'
                placeholder="Add Title "
                label='Title'
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                    // console.log(e.target.value)
                }}
            ></TextField>

                <TextField
                    multiline
                className="Input_form"
                id="todo"
                type='text'
                    placeholder="Add Todo "
                    label='Todo'
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                    // console.log(e.target.value)
                }}
                ></TextField>

            <TextField
                label="Deadline"
                className="Deadline_form"
                type='date'
                id="Deadline"
                // label='Deadline'
                onChange={(e) => {
                    setDeadline(e.target.value)
                }}
                value={deadline}
                InputLabelProps={{
          shrink: true,
        }}
                ></TextField>
            {/* <IconButton edge='start'
                onClick={inputTextHandler}
            ><AddBoxIcon/></IconButton> */}
            <Button className="addbtn_form" onClick={inputTextHandler}><AddBoxIcon style={{fontSize:"40px", color:"#2F2F2F"}}/></Button>

            <div id="notice" style={{color: "red", fontSize:"70%"}}></div>
        </form>
    )
}