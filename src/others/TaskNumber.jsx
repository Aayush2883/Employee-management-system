import React from 'react'

const TaskNumber = ({userData}) => {
  return (
    <div className=' flex gap-5 w-full  mt-8'>
      <div className='bg-red-500 h-[100px] w-[50%] rounded-xl text-2xl flex flex-col justify-center px-10'>
        <h1>{userData.newTasks}</h1>
        <h1>New Task</h1>
      </div>

      <div className='bg-green-500 h-30 w-[50%] rounded-xl text-2xl flex flex-col justify-center px-10'>
        <h1>{userData.campletedTasks} </h1>
        <h1>Completed Task</h1>
      </div>

      <div className='bg-blue-500 h-30 w-[50%] rounded-xl text-2xl flex flex-col justify-center px-10'>
        <h1>{userData.activeTasks} </h1>
        <h1>Active Task</h1>
      </div>

      <div className='bg-yellow-500 h-30 w-[50%] rounded-xl text-2xl flex flex-col justify-center px-10'>
        <h1>{userData.failedTasks} </h1>
        <h1>Failed Task</h1>
      </div>
    </div>
  )
}

export default TaskNumber
