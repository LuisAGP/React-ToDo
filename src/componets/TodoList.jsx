import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, updateTodo, removeTodo}) => {
    return <Droppable droppableId="todos">
    {
        (droppableProvider) => (
            <div 
                ref={droppableProvider.innerRef}
                {...droppableProvider.droppableProps}
                className="bg-white dark:bg-gray-800 transition-all duration-150 rounded-t-md overflow-hidden [&>article]:px-4 [&>article]:py-3 mt-4"
            >
                {
                    todos.map((todo, index) => 
                        <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                            {
                                (draggableProvider) => (
                                    <TodoListItem 
                                        todo={todo}
                                        updateTodo={updateTodo} 
                                        removeTodo={removeTodo}
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.dragHandleProps}
                                        {...draggableProvider.draggableProps}
                                    />
                                )
                            }
                        </Draggable>
                    )
                }
                {droppableProvider.placeholder}
            </div>
        )
    }
    </Droppable>
}


export default TodoList;