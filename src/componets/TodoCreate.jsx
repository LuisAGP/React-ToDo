import { useState } from "react";

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();

        if(!title.trim()) return setTitle("");

        createTodo(title.trim());
        setTitle("");
    }

    return <form className="bg-white dark:bg-gray-800 rounded-md transition-all duration-150 overflow-hidden py-3 px-4 flex gap-4 items-center" onSubmit={handlerSubmit}>
        <span className="inline-block border-2 rounded-full w-5 h-5"></span>
        <input 
            className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-150"
            type="text"
            placeholder="Create a new Todo"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />
    </form>
}


export default TodoCreate;