import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button";

interface Todo {
  id: number;
  text: string;
}

interface TodoItemProps{
  todo: Todo;
  onDelete: (id: number) => void;
}


export function Item({todo, onDelete}: TodoItemProps) {
  const {id, text} = todo;


  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div className='flex rounded-xl justify-center text-center items-center bg-gray-400 p-6 w-1/4 border-solid border-2 border-blue-500 gap-4'>
        <span className="font-serif text-lg m-4">{text}</span>
        <Button onClick={handleDelete} variant="destructive">Delete</Button>
        <Checkbox />
    </div>
  );
}
