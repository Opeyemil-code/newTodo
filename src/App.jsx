import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMusic, faRadio, faVideo, faPerson, faSignIn, faRocket, faList} from '@fortawesome/free-solid-svg-icons'


function App() {

/** for the from submit */
 function Submit(event) {
     event.preventDefault()
 }


 const [add, setadd] = React.useState(false)

 function AddClosetask(params) {
     setadd(prev => !prev)
 }
 


  return (

    <div className='font-montserrat'>

      <div className='bg-black lg:p-28 font-montserrat pb-28 p-8'>

       <section className='bg-red-900 lg:w-80 mx-auto flex space-x-8 lg:p-2 rounded-full w-60 '>

         <div>
           <FontAwesomeIcon icon={faRocket} className='h-12 bg-whit mx-auto ml-8 '/>
         </div>

         <div className='mt-1'>
            <span className='text-4xl text-white font-bolder tracking-wider'>T0</span>
            <span className='text-4xl tracking-wide'>DO</span>
          </div>
        
       </section>
  
        <section className=''>
           <button className='bg-white w-48 mx-auto px-2 py-4 text-center absolute left-0 right-0 mt-20 rounded-tl-xl rounded-br-xl shadow-md shadow-gray-900' onClick={AddClosetask}>Add Task</button>
        </section>

      </div>



      <section className='bg-gray-90 lg:p-20 lg:mt-4 mt-10 '>
        
      
          <div className='flex flex-row lg:w-3/4 mx-auto bg-green-90 w-2/ justify-center lg:space-x-96 space-x-16'>

          <div className='flex justify-star bg-yellow-90 flex-row space-x-2'>
          <h1 className='lg:text-xl lg:mt-0 mt-1'>All task</h1>
          <p className='py-1 px-3 rounded-full bg-black text-white '>0</p>
          </div>

         <div className='flex flex-row justify-end bg-blue-90 ml-9 space-x-4 font-thin'>
         <h1 className='lg:text-xl lg:ml-96 lg:mt-0 mt-1'>completed task</h1>
          <p className='py-1 px-3 rounded-full bg-black text-white'>0</p>
          </div>


           </div>

           <hr className='mt-8 border-black'/>



          
          
           <div className='flex flex-col mx-auto bg-red-90 mt-12 space-y-5 bg-red-80'>
             <FontAwesomeIcon icon={faList}  className='h-20 mx-auto'/>

             <h1 className='mx-auto bg-white lg:w-96 text-center text-xl'>
             You don't have any tasks registered yet.
           Create tasks and organize your to-do items.
             </h1>
           </div>

         

     </section>

     


      <section className={
        add ? 'bg-gray-100 p-1 flex font-montserrat lg:w-2/4 mx-auto w-10/12 absolute left-0 right-0 bottom-0 lg:top-40 top-20 lg:h-2/3 hidde rounded-lg shadow-lg z-50 h-3/4' : 'bg-gray-100 p-10 flex font-montserrat w-2/4 mx-auto absolute left-0 right-0 bottom-0 top-40 h-2/3 hidden rounded-lg shadow-lg z-50'
      }>

        <form action="" className='flex mx-auto w-2/3 flex-col bg-yellow-90 space-y-3' onSubmit={Submit}>

          <h2 className='font-bold'>Add task</h2>

     
          <label htmlFor="">Title</label>
          <input className='rounded-lg' type="text" />

          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" rows="10" className='rounded-lg'/>

          <label htmlFor="">Status</label>
          <select name="" id="" className='rounded-lg'>
            <option value="">----</option>
            <option value="">all task</option>
            <option value="">completed</option>

          </select>
    


          
        
          <div class="flex justify-between bg-whit px-2 py-1 rounded-sm">
            <button className='text-xl border border-purple-400 border-2 font-bold text-black px-2 py-1 rounded-lg hover:bg-purple-400'>Add task</button>
            <button className='text-xl bg-blue-400  px-2 py-1 rounded-lg border-2 hover:bg-white' onClick={AddClosetask}>close</button>
            
          </div>

           
          

        </form>
      </section>


      <div class={
        add ? "absolute w-full h-full top-0 left-0 bg-blackrgba  hidde  backdrop-blur-sm z-20" : "absolute w-full h-full top-0 left-0 bg-blackrgba  hidden  backdrop-blur-sm z-20"
      } onClick={AddClosetask}></div>


    </div>




  )
}

export default App



