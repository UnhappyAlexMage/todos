import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import App from "./App.js";
import TodoList from "./TodoList.js";
import TodoAdd from "./TodoAdd.js";
import getTodos, { addTodo, getTodo, actTodo } from "./api.js";
import TodoDetails from "./TodoDetail.js";
import Error404 from "./Error404.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} element={<TodoList />} loader={ getTodos } />
            <Route path="add" element={<TodoAdd />} action={ addTodo } />
            <Route path=':key' element={<TodoDetails />} loader={ getTodo } action={ actTodo } errorElement={<Error404 />} />
            {/* <Route path="*" element={<ErrorPageNotFound/>}/> */}
        </Route>
    )
);
export default router;