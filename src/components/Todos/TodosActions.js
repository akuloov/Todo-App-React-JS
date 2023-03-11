import {RiRefreshLine, RiDeleteBin2Line} from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css"

const TodosActions = (props) => {
    const {resetTodos, deleteCompletedTodos, completedTodosCounter} = props

    return (
        <div className={styles.todosActions}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine/>
            </Button>
            <Button
                title="Clear completed Todos"
                onClick={deleteCompletedTodos}
                disabled={completedTodosCounter === 0 && true}>
                <RiDeleteBin2Line/>
            </Button>
        </div>
    )
}

export default TodosActions