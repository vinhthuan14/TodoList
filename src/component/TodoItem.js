import React, { useState, useEffect} from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export const TodoItem = ({ todo, setTodos, todos, idx }) => {
    const [input, setInput] = useState('');
    const [deadline, setDeadline] = useState('');
    const [title, setTitle] = useState('');
    const [edit, setEdit] = useState({
        id:''
    })
    // console.log(edit)
    const submitEdit = (e) => {
        e.preventDefault()
        console.log("this is input: "+input)
        if (!input || /^\s$/.test(input) ||!deadline) {
            if (!deadline) {
                document.getElementById("deadlineItem").style.border = "1px solid red"
            }
            document.getElementById("noticeItem").innerHTML = "*Todo and Deadline is not empty"
            document.getElementById("todoItem").style.border = "1px solid red"
            return
        }
        document.getElementById("noticeItem").innerHTML = ""
        document.getElementById("todoItem").style.border = ""
        document.getElementById("deadlineItem").style.border = ""

        const newValue = todos
        newValue.map((item) => {
            if (item.id === todo.id) {
                item.title = title;
                item.text = input
                item.deadline = deadline;
            }
        })
        setTodos(newValue)
        setInput('')
        setEdit(0)
    }
    if (edit.id) {
        return (
            <div>
                <form onSubmit={submitEdit}>
                <TextField
                className="title_form"
                id="title"
                type='text'
                placeholder="Add Title "
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                    // console.log(e.target.value)
                }}

            ></TextField>
            <TextField
                id="todoItem"
                type='text'
                value={input}
                onChange={(e) => {
                    // console.log(e.target.value)
                    setInput(e.target.value)
                }}
            ></TextField>
            <TextField
                type={'date'}
                id="deadlineItem"
                onChange={(e) => {
                    setDeadline(e.target.value)
                }}
                value={deadline}
                    />
                <IconButton edge='start' style={{margin: "6px 5px", color: "green"}} onClick={(e) => {
                            submitEdit(e)
                        }}>
                    <CheckIcon/>
                </IconButton>
                {/* <button className="addbtn_form" >Update</button> */}

            <div id="noticeItem" style={{color: "red", fontSize:"70%"}}></div>
        </form>
            </div>
        )
    }
    return (
        <div>
            {/* {!todo.isComplete ? (
                 <span key={todo.id} style={{ margin: "10px" }}> {todo.title} - {todo.text} - {todo.deadline} -{todo.isComplete ? 'Done' : 'Progress'}</span>
            ) :
                 <del key={todo.id} style={{ margin: "10px" }}>{todo.text} - {todo.deadline} -{todo.isComplete ? 'Done' : 'Progress'}</del>
             }

            <button onClick={() => {
                                const newValue = todos.filter(e => e.id != todo.id)
                                todos[idx].isComplete = !todo.isComplete
                                {!todo.isComplete ? setTodos([todos[idx],...newValue]) : setTodos([...newValue,todos[idx]])}
            }}>Check</button>
            <button onClick={() => {
                                const newValue = todos.filter(e => e.id != todo.id)
                                setTodos(newValue)
            }}>Delete</button>
            <button onClick={() => {
                setInput(todo.text)
                setEdit({ id: "1" })
                setTitle(todo.title)
                setDeadline(todo.deadline)
            }
                }>Edit</button> */}

            <ListItem
                key={todo.id}
                secondaryAction={
                    <div>
                        <IconButton edge='start' onClick={() => {
                            setInput(todo.text)
                            setEdit({ id: "1" })
                            setTitle(todo.title)
                            setDeadline(todo.deadline)
                        }}>
                        {/* <CommentIcon/> */}
                            <EditIcon/>
                        </IconButton>
                        <IconButton edge='end' size='large' onClick={()=>{
                            const newValue = todos.filter(e => e.id != todo.id)
                            setTodos(newValue)
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </div>

                 }
                    disablePadding
            >
                 <ListItemButton role={undefined} onClick={() => {
                    const newValue = todos
                                todos[idx].isComplete = !todo.isComplete
                                // {!todo.isComplete ? setTodos([todos[idx],...newValue]) : setTodos([...newValue,todos[idx]])}
                    setTodos([...newValue])
            }} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.isComplete !== false}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': todo.id}}
                />
              </ListItemIcon>
                    {/* <ListItemText id={todo.id} primary={todo.title + " (Deadline: " + todo.deadline + " )"} secondary={todo.text} ></ListItemText> */}
                    <div>
                        <div>
                            {!todo.isComplete ? (<span style={{ fontSize: "25px" }}>{todo.title} </span>) :
                                <del style={{ fontSize: "25px" }}>{todo.title} </del>}
                            <span>(Deadline: {todo.deadline})</span>
                        </div>
                        {!todo.isComplete ? (<span>{todo.text}</span>) : (<del>{todo.text}</del>)}
                    </div>
            </ListItemButton>
            </ListItem>
        </div>


   )
}
