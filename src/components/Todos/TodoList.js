import Todo from "./Todo";

const TodoList = (props) => {
    const {todos, deleteTodo, toggleTodo} = props
    return (
        <>
            {!todos.length && <h2>Todo list is empty</h2>}
            {
                todos.map((todo) => <Todo
                    deleteTodo={deleteTodo}
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                />)
            }
        </>
    )
}

export default TodoList