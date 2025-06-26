import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'


const AdminDashboard = ({userData}) => {
  return (
    <div className='w-screen h-screen bg-black px-20 py-10' >
        <Header userData={userData}/>
        <CreateTask userData={userData}/>
        
        
        

    </div>
  )
}

export default AdminDashboard
