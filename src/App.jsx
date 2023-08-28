import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMusic, faRadio, faVideo, faPerson, faSignIn, faRocket, faList} from '@fortawesome/free-solid-svg-icons'


function App() {

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
           <button className='bg-white w-48 mx-auto px-2 py-4 text-center absolute left-0 right-0 mt-20 rounded-tl-xl rounded-br-xl shadow-md shadow-gray-900'>opeyemil</button>
        </section>

      </div>



      <section className='bg-gray-90 lg:p-20 mt-'>
        
      
          <div className='flex flex-row lg:w-3/4 lg:mx-auto bg-green-90 justify-center lg:space-x-96'>

          <div className='flex justify-star bg-yellow-90 flex-row space-x-2'>
          <h1 className='text-xl'>All task</h1>
          <p className='py-1 px-3 rounded-full bg-black text-white'>0</p>
          </div>

         <div className='flex flex-row justify-end bg-blue-90 ml-9 space-x-4 font-thin'>
         <h1 className='text-xl ml-96'>completed task</h1>
          <p className='py-1 px-3 rounded-full bg-black text-white'>0</p>
          </div>



           </div>

           <hr className='mt-8 border-black'/>



          
          <div className='flex flex-col mx-auto bg-red-90 mt-12 space-y-5'>
             <FontAwesomeIcon icon={faList}  className='h-20 mx-auto'/>

             <h1 className='mx-auto bg-white w-96 text-center text-xl'>
             You don't have any tasks registered yet.
           Create tasks and organize your to-do items.
             </h1>
          </div>


     </section>

     




    </div>




  )
}

export default App
