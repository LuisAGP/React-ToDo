const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
    return <section className="py-2 px-4 flex justify-between bg-white dark:bg-gray-800 rounded-b-md transition-all duration-150">
        <span className="text-gray-400">{computedItemsLeft} item left</span>
        <button className="text-gray-400" onClick={clearCompleted}>Clear completed</button>
    </section>
}


export default TodoComputed;