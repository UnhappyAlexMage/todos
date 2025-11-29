import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import App from "./App.js";
import TodoList from "./TodoList.js";
import TodoAdd from "./TodoAdd.js";
import { getTodos, addTodo, getTodo, actTodo, register, login, logout, onlyLoggedOut } from "./api.js";
import TodoDetails from "./TodoDetail.js";
import Error404 from "./Error404.js";
import Register from "./Register.js";
import Login from "./Login.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} element={<TodoList />} loader={ getTodos } />
            <Route path="add" element={<TodoAdd />} action={ addTodo } />
            <Route path=':key' element={<TodoDetails />} loader={ getTodo } action={ actTodo } errorElement={<Error404 />} />
            <Route path="register" element={<Register />} action={ register }  loader={ onlyLoggedOut } />
            <Route path="login" element={<Login />} action={ login } loader={ onlyLoggedOut } />
            <Route path="logout" loader={ logout } />
            {/* <Route path="*" element={<ErrorPageNotFound/>}/> */}
        </Route>
    )
);
export default router;