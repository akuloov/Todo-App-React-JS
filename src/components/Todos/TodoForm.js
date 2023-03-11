import {useState} from "react";
import styles from './TodoForm.module.css'
import Button from "../UI/Button";


const TodoForm = (props) => {
    const {addTodo} = props
    const [text, setText] = useState('')
    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (text.length !== 0) {
            addTodo(text)
            setText('')
        }
    }

    return (
        <form className={styles.todoForm} onSubmit={onSubmitHandler}>
            <input
                id="TodoInput"
                className={styles.todoFormInput}
                placeholder="Enter new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit" title="Submit">Submit</Button>
        </form>
    )
}

export default TodoForm