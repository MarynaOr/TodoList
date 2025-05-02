import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/todoSlice";
// import { deleteTodo } from "../../redux/todoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div className="flex justify-center">
         <ul className="grid grid-cols-2 ">
        {todos.length === 0 ?( <p>Empty</p>) :
        (todos.map((todo,index)=>{
            return (
                <li className="flex gap-4 mr-14 mb-2 max-w-100 " key={todo.id} >
                    <input type="checkbox" />
                    {index+1}. {todo.todo}
                    <button onClick={()=>dispatch(deleteTodo(todo.id))}
                        className="flex text-violet-950 cursor-pointer"
                        >Delete</button>
                </li>
            )
           })
        ) }
      </ul>
    </div>
     
    </>
  );
};

export default TodoList;