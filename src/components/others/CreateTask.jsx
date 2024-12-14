import React, { useState } from 'react'

const CreateTask = () => {
  
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})
  
  const submitHandler = (e)=>{
    e.preventDefault()
    setNewTask({taskTitle,taskDescription,taskDate,assignTo,category,active:false,newTask:true,failed:false,completed:false})
    const data = JSON.parse(localStorage.getItem('employees'))
   
    data.forEach((e) => {
    if(e.firstName == assignTo){
     e.tasks.push(newTask)
     console.log(e);
     
     localStorage.setItem('employees',JSON.stringify(data))
     console.log(data);
     
    }
    setAssignTo('')
    setCategory('')
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    
    });
    
    
  }
  return (
    <div className='w-full bg-[#1c1c1c] mt-5 p-5 rounded'>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} className='flex '>
     <div className='w-[50%]'>
         <h2 className='text-xl'>Task Title</h2>
         <input value={taskTitle} onChange={(e)=>{
          setTaskTitle(e.target.value)
         }} className='w-[80%] bg-transparent border rounded px-3 py-2 mt-2' type="text" placeholder='Make a UI design'/>
         <h2 className='text-xl mt-5'>Date</h2>
         <input value={taskDate} onChange={(e)=>{
          setTaskDate(e.target.value)
         }} className='w-[80%] bg-transparent border rounded px-3 py-2 mt-2' type="date" placeholder='Date'/>
         <h2 className='text-xl mt-5'>Assign To</h2>
         <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} className='w-[80%] bg-transparent border rounded px-3 py-2 mt-2' type="text" placeholder='employee name'/>
         <h2 className='text-xl mt-5'>Category</h2>
         <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='w-[80%] bg-transparent border rounded px-3 py-2 mt-2' type="text" placeholder='design,dev,etc'/>
     </div>
     <div className='w-[50%]'>
     <h2 className='text-xl mt-5'>Discription</h2>
<textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className='w-[80%] bg-transparent border rounded px-3 py-2 mt-2 h-60'placeholder='explain in detail'></textarea>
<button className='w-[80%] bg-emerald-400 rounded-xl py-3 text-xl mt-5'>Create Task</button>
     </div>
    </form>
   </div>
  )
}

export default CreateTask
