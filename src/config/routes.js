import { About } from "../component/About";
import { TodoForm } from "../component/TodoForm";
import { TodoList } from "../component/TodoList";

export const routes = [
    {
        path: "/about",
        component: About,
        label: 'ABOUT'
    },
    {
        path: "/todolist",
        component: TodoList,
        label: 'TODO'
    }

]