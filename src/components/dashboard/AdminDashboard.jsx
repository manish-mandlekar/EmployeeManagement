import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
    
    <div className='w-full h-screen p-10'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
