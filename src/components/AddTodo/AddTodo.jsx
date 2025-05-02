import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { useState } from "react";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) {
      return 
    }

    const newTodo = {
      id: Date.now(),
      todo: input,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setInput("");
  };

  return (
    <>
      <div className="flex justify-center gap-4 mt-6 mb-6">
        <input
        
          maxLength='20'
          className="border-1 px-2 py-1 focus:outline-0 "
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className="cursor-pointer text-amber-800 bg-gray-400 w-20"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddTodo;
