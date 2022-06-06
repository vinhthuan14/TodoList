import logo from './logo.svg';
import './App.css';
import { Menu } from './component/Menu';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { About } from './component/About';
import { TodoList } from './component/TodoList';
import { routes } from './config/routes';
import { TodoForm } from './component/TodoForm';
import react, { useState} from 'react';
import { TodoItem } from './component/TodoItem';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
function App() {
  const [inputText, setInputText] = useState('');
  const [deadl, setDeadl] = useState('')
  const [todos, setTodos] = useState([]);
  // console.log(todos)
  return (
    <div className="App">
      <h1>My's Todo list</h1>
      {/* <TodoForm setInputText={setInputText} setTodos={setTodos} todos={todos} setDeadl={ setDeadl}/> */}
        <TodoForm  setTodos={setTodos} todos={todos}/>
      <div className='MyTodo'>
      <TodoList todos={todos} setTodos={setTodos} />
      </div>
      {/* <div className='MyTimeline'> */}
        <VerticalTimeline>
        {todos.map((item) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={item.deadline}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
              <p>
                {item.text}
              </p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
      </div>

    // </div>

  );

}

export default App;
