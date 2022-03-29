import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);
  //Delete
  const deleteTask=(deletedTaskId)=>{
    setTasks(tasks.filter((task)=>task.id !==deletedTaskId))
  }
  //Add Task
  const addTask=(newTask)=>{
    const id=Math.floor(Math.random()*100)+1;
    const addNewTask={id, ...newTask}
    setTasks([...tasks,addNewTask])
  }
  //ToggleDone
  const toggleDone=(toggleDoneId)=>{
    setTasks(
      tasks.map((task)=>task.id===toggleDoneId ? {...task, isDone: !task.isDone}:task)
    )
  }
  
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask addTask={addTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTask}  toggleDone={toggleDone}/>
      
    </div>
  );
}

export default App;
