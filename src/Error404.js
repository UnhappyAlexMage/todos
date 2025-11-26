import { Link } from "react-router-dom";

export default function Error404() {
    return(
        <section>
            <h1>Дело не существует</h1>
            <p>
                Вернитесь на <Link to="/">перечень дел</Link> иллюстрация
                выберите какое-либо другое.
            </p>
        </section>
    );
}