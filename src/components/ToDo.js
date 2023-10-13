import React,{useState} from "react";

const ToDo= () =>{
    const[text,setText] = useState("");
    const [tasks,setTasks] = useState([]);

    function addTodo(){
        setTasks([...tasks,text]);
        setText("");
    }


    function deleteTask(i){
        const newArr = tasks.filter((ele,ind)=> ind!==i)
        setTasks(newArr);
    }
    

    return(
        <div className="to-do">
           <h1>To-Do List</h1>
           <input onChange={e=>setText(e.target.value)} value={text}/>
           <button onClick={addTodo}>Add Todo</button>
           <ul>
            {
                tasks.map((task,index)=>(
                    <li key={index}>
                        <p>{task}</p>
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                    </li>
                ))
            }
           </ul>
        </div>
    )
}

export default ToDo;