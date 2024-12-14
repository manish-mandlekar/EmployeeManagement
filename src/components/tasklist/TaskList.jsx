import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import Complete from './Complete'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full mt-10 flex justify-start gap-5 flex-nowrap py-10'>
      {data.tasks.map((e,idx)=>{
       if(e.active){
       return <AcceptTask key={idx} data={e}/>
        
        
       }
       if(e.newTask){
        return <NewTask key={idx} data={e}/>
       }
       if(e.failed){
        return <FailedTask key={idx} data={e} />
       }
       if(e.completed){
        return <Complete key={idx} data={e}/>
       }
      })}
      
    </div>
  )
}

export default TaskList
