import React, {useState} from "react";
import { Item } from "../item/Item"
import { Button } from "../ui/button";

interface Todo {
  id: number,
  text: string,
}

export function Main() {
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1, text: "Do code" },
    {id: 2, text: "Go to college"},
  ]);

  const [newTodoText, setNewTodoText] = useState<string>("")


  const onDelete = (id: number) =>{
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const onCreateToDo = () => {
    if (newTodoText.trim() !== ""){
        const newTodo: Todo = {
          id: todos.length + 1,
          text: newTodoText.trim()
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
        setNewTodoText("");
    }

  }

  return (
    <main>
        <div className="bg-gray-500 p-6 m-5 border-solid border-2 border-blue-600  rounded-xl flex flex-col items-center justify-center text-center gap-4">
            <h1 className="font-bold text-3xl">My List</h1>
            <input type="text" placeholder="Create Item" className=" flex border-2 border-blue-500 rounded-xl p-3" onChange={e => setNewTodoText(e.target.value)}/>
            <Button variant="default" onClick={onCreateToDo}>Add Task</Button>
            {todos.map(todo => (
            <Item key={todo.id} todo={todo} onDelete={onDelete}  />
            ))}
        </div>
    </main>
  )
}
