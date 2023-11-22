import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoListItem = ({todo, updateTodo, removeTodo}) => {

    const {id,title,completed} = todo;

    return <article className="flex gap-2 border-b-gray-200 border-b">
        {
            completed 
                ? <button 
                    className="flex justify-center items-center border-2 rounded-full w-5 h-5 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    onClick={() => updateTodo(id)}
                >
                    <IconCheck />
                </button>
                : <button 
                    className="inline-block border-2 rounded-full w-5 h-5 flex-none"
                    onClick={() => updateTodo(id)}
                ></button>
            }
        
        <p className={`${ completed ? "text-gray-400 dark:text-gray-300 line-through" :"text-gray-600"} text-sm grow`}>{title}</p>
        <button className="flex-none" onClick={() => removeTodo(id)}>
            <IconCross />
        </button>
    </article>
}


export default TodoListItem;