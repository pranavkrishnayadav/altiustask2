import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, settasks] = useState([]);
  const [newtask, setnewtask] = useState("");
  const [editingtask, seteditingtask] = useState(null);
  const [editingtext, seteditingtext] = useState("");

  const addtask = () => {


    if (newtask.trim() === "") return;

    settasks([...tasks, { id: Date.now(), text: newtask }]);
    setnewtask("");
    seteditingtask((editingtask)=>!editingtask)
  };


  const handledelete = (id)=>{
    settasks(tasks.filter(task => task.id !==id)
    )
  }
  const handleupdate = (id)=>{
    settasks(tasks.map(task=>
        task.id===id? {...tasks,text:editingtext}:task
    ))
  }
  return (
    <div>
      <h>Task Manager</h>
      <input
        type="text"
        value={newtask}
        onChange={(e) => setnewtask(e.target.value)}
        placeholder="Adda new Task"
      />
      <button onClick={addtask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            (editingtask === task.id ?(
            <div>
              <input
                type="text"
                value={editingtext}
                onChange={(e) => seteditingtext((e) => e.target.value)}
              />
            </div>
            <button onClick={()=> handleupdate(task.id)}>Update</button>

            <button onClick={()=> handledelete(task.id)}>Delete</button>
            ))
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
