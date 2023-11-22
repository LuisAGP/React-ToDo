import TodoListItem from "./TodoListItem";

const TodoList = ({todos, updateTodo, removeTodo}) => {
    return <div className="bg-white dark:bg-gray-800 transition-all duration-150 rounded-t-md overflow-hidden [&>article]:px-4 [&>article]:py-3 mt-4">
        {
            todos.map(todo => <TodoListItem 
                key={todo.id} 
                todo={todo}
                updateTodo={updateTodo} 
                removeTodo={removeTodo}
            />)
        }
    </div>
}


export default TodoList;