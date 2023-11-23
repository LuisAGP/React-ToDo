import { DragDropContext } from '@hello-pangea/dnd'

import { useEffect, useState } from "react";
import Header from "./componets/Header";
import TodoComputed from "./componets/TodoComputed";
import TodoCreate from "./componets/TodoCreate";
import TodoFilter from "./componets/TodoFilter";
import TodoList from "./componets/TodoList";

const initialStateTodo = JSON.parse(localStorage.getItem('todos')) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

const App = () => {

  const [todos, setTodos] = useState(initialStateTodo);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const createTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: todos.length+1,
        title: title,
        completed: false
      }
    ]);
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => id === todo.id ? {...todo, completed: !todo.completed} : todo));
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => id !== todo.id));
  }

  const computedItemsLeft = todos.filter(todo => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

  const filteredTodos = todos.filter(todo => {
    if(filter === "all"){
      return true;
    }else if(filter === "active"){
      return !todo.completed;
    }else if(filter === "completed"){
      return todo.completed;
    }
  })

  const handlerDragEnd = (result) => {
    const { destination, source } = result;
    if(!destination) return;
    if(source.index === destination.index && source.droppableId === destination.droppableId) return;

    setTodos((todos) => reorder(todos, source.index, destination.index))

  }

  return <div className="
    min-h-[100vh] 
    bg-gray-200 
    dark:bg-gray-900 
    bg-[url('./assets/images/bg-mobile-light.jpg')] 
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
    md:bg-[url('./assets/images/bg-desktop-light.jpg')]
    md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] 
    bg-no-repeat 
    bg-contain
    ">
    
    <Header />

    <main className="container mx-auto px-4 mt-4 md:max-w-xl">
      <TodoCreate createTodo={createTodo}/>
      <DragDropContext onDragEnd={handlerDragEnd}>
        <TodoList todos={filteredTodos} updateTodo={updateTodo} removeTodo={removeTodo}/>
      </DragDropContext>

      <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
      <TodoFilter filter={filter} setFilter={setFilter}/>
    </main>

    <footer className="text-center mt-4 dark:text-gray-400">Drag and drop to reorder list</footer>
  </div>
}


export default App;