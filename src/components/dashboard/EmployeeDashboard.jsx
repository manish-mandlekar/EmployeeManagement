import React from 'react'
import Header from '../others/Header'
import TaskNumbers from '../others/TaskNumbers'
import TaskList from '../tasklist/TaskList'

const EmployeeDashboard = (props) => {
  
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      
     <Header changeUser={props.changeUser} data={props.data} />
     <TaskNumbers data={props.data} />
     <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
