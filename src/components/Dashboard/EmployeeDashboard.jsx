import React from 'react'
import Header from '../../others/Header'
import TaskNumber from '../../others/TaskNumber'
import TaskList from '../../others/TaskList'

const EmployeeDashboard = ({userData}) => {
  return (
    <div className='w-full px-20 py-10 h-screen bg-slate-900'>
        <Header userData={userData} />
        <TaskNumber userData={userData} />
        <TaskList userData={userData}/>
    </div>
  )
}

export default EmployeeDashboard
