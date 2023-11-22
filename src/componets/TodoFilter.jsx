const TodoFilter = ({filter, setFilter}) => {
    return <section className="container mx-auto">
        <div className="bg-white mt-4 dark:bg-gray-800 transition-all duration-150 flex gap-4 justify-center px-4 py-2 rounded-md">
            <button 
                className={filter === 'all' ? "text-blue-600" : "hover:text-blue-600 text-gray-400"}
                onClick={() => setFilter('all')}
            >All</button>
            <button 
                className={filter === 'active' ? "text-blue-600" : "hover:text-blue-600 text-gray-400"}
                onClick={() => setFilter('active')}
            >Active</button>
            <button 
                className={filter === 'completed' ? "text-blue-600" : "hover:text-blue-600 text-gray-400"} 
                onClick={() => setFilter('completed')}
            >Completed</button>
        </div>
    </section> 
}


export default TodoFilter;