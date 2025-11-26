import { useLoaderData } from "react-router-dom"

export default function TodoDetails() {
    const todo = useLoaderData();

    return(
        <section>
            {todo.done && 
                <p className="has-text-success">
                    Выполнено
                </p>
            }
            <h1>{todo.title}</h1>
            <p>{todo.createdAt}</p>
            {todo.desc && <p>{todo.desc}</p>}
            {todo.image && <p><img src={todo.image} alt="Иллюстраниция"/></p>}
        </section>
    );
}