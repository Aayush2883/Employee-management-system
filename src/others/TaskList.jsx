import React from 'react'

const TaskList = ({userData}) => {
  return (
    <>
      <div id="tasklist" className='w-full overflow-x-auto h-[60%] flex flex-nowrap gap-5 mt-10'>
        {userData.tasks.map((elem, idx) => {
          let color = "";
          
          if (elem.active) {
            color = "bg-blue-500";
          } else if (elem.completed) {
            color = "bg-green-500";
          } else if (elem.failed) {
            color = "bg-red-500";
          } else if (elem.newTask) {
            color = "bg-yellow-500";
          }

          return (
            <div key={idx} className={`h-[99%] ${color} aspect-square rounded-xl p-6`}>
              <div className='w-full flex justify-between items-start'>
                <span className='text-l bg-red-700 px-3 py-1 rounded-lg'> {elem.category} </span>
                <span> {elem.taskDate} </span>
              </div>

              <div className='mt-5'>
                <h1 className='text-2xl font-bold'>{elem.taskTitle}</h1>
              </div>

              <div className='mt-5'>
                <p>{elem.taskDescription}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TaskList