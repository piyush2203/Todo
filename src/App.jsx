/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("");
  const [description, setdescription] = useState('');


  const [mainTask, setmainTask] = useState([])
  const submitHandler =(e)=>{
    e.preventDefault();
    // console.log(title);
    // console.log(description);
    

    setmainTask([...mainTask, {title,description}])
    settitle("");
    setdescription("");
    console.log(mainTask);
  }

  let renderTask  = <h1>No Task Available</h1>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between mb-5'>
      <div className='flex justify-between  w-2/3'>
        <h5 className='text-2xl font-semibold '>{t.title}</h5>
        <h6 className='text-lg '>{t.description}</h6>
      </div>
      <button onClick={(i)=>{deleteHandler(i)}} className='bg-red-400 text-white px-4 py-2 font-bold rounded'>Delete</button>
    </li> 
  })
  }

  const deleteHandler=(i)=>{
    let CopyTask = [...mainTask];
    CopyTask.splice(i,1);
    setmainTask(CopyTask)
  }
  

  return (
    <>
      <h1 className='bg-blue-800 text-7xl text-center font-bold p-10 text-white' >My Todo List</h1>

      <form action="" className='flex justify-center ' onSubmit={submitHandler}>
        <input type="text" className='border-zinc-600 text-xl border-2 m-5 px-4 py-2' placeholder='Enter Task Here....'   value={title} onChange={(e)=>{settitle(e.target.value)}}/>

        <input type="text" className='border-zinc-600 text-xl border-2 m-5 px-4 py-2' placeholder='Enter Description Here....' value={description} onChange={(e)=>{setdescription(e.target.value)}}/>

        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded border-2 border-gray-200 m-5' >Add Task</button>
      </form>


      <hr />
      <div className='p-8 bg-slate-500 '>
          <ul>{renderTask}</ul>
      </div>

    </>
    
  )
}

export default App
