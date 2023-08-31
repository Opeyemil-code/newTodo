import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMusic, faRadio, faVideo, faPerson, faSignIn, faRocket, faList, faDeleteLeft, faRecycle, faTrash} from '@fortawesome/free-solid-svg-icons'
//import {nanoid} from 'nanoid'


function App() {


  

/* THIS WHOLE FUNCTIONS IS FOR THE FORM  */
  const [form,setform] = React.useState({
       title : '',
       description : '',
       stats : '',
  })

  
   
  /** handles the single checkbox form */
  const [checkingBox, setCheckingBox] = React.useState(false)

  function HandleCheckbox(item) {
      setCheckingBox(prev => !prev)
  } 



  /** THIS FUNCTIONS COLLECTS ALL DATA AND VALUE FROM THE INPUT FORM */

  function HandleForm(event) {

        setform(prev => {
          
          return {
            ...prev, [event.target.name] : event.target.value
          }
        })

        
  }


  


  /** THIS CREATE A TODO DIV AND HANDLES ITS FUNCTIONALITY */

  const [alltodo, setalltdo] = React.useState([])
  const [errorMsg, seterrorMsg] = React.useState(false)
  

 
 /* DELETE functions */
 const handleDeleteTodo = (item) => {
     let del = [...alltodo]
     del.splice(item);
     setalltdo(del)
     console.log('one div gone')
 }



 const [count, setCount] = React.useState(0)
 
  function HandleTodo(item) {
    
    setCount(prev => prev + 1)

    let newTodoItem = {
      title : form.title,
      description : form.description,
      stats : form.stats,
      id : count
    }
    
    

    const letters = /^[A-Za-z]+$/
    const space = /\s/g
    

    if (newTodoItem.title.match(letters) || newTodoItem.title.match(letters && space) && newTodoItem.description.match(letters ) || newTodoItem.description.match(letters && space )) {
    
      
     

     let updatedTodoArr = [...alltodo]
      updatedTodoArr.push(newTodoItem)
      setalltdo(updatedTodoArr)
      AddClosetask()

      console.log(alltodo)
    
    } else if ( newTodoItem.title == null || newTodoItem.description == '') {
       seterrorMsg(prev => !prev)
    }



}



/** PREVENT FORM FRO AUTO RELOAD */
 function Submit(event) {
     event.preventDefault()
 }



/* CONTROL MODAL, OVERLAY AND HELP CLOSE MODAL */////////////////////////////////////////

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



      <section className='bg-gray-90 lg:p-16 lg:mt-1 mt-16 '>
        
      
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



           {/**TODO BOXES. THIS IS FOR THE TODO  BOXES */}
          
           <div className='flex flex-col space-y-4 lg:flex-row mx-auto bg-red-90 lg:mt-12 lg:space-x-3 bg-red-8 lg:space-y-0 flex-wra'>
           {
              alltodo.map(
                (item) => {
                  return (
                    <div className={
                      checkingBox ? 'mx-auto flex  flex-col space-y-3 bg-red-900 text-white shadow-2xl lg:w-96 rounded-xl lg:h-52 lg:mx-0 w-80 justify-around lg:p-0 h-40' : 'mx-auto flex  flex-col space-y-3 bg-gray-300 shadow-2xl lg:w-96 shadow-white text-red-700 rounded-xl lg:h-52 lg:mx-0 w-80 justify-around lg:p-0 h-40'
                    } key={item.id}>

                    <div className='flex flex-col justify-content'>
                      <h1 className='ml-8 text-2xl lg:mt-4 mt-3 justify-content m'>{item.title}</h1>
    
                    </div>
    
                    <div className=''>
                    <p className='text-sm text-start bg-red-90 w-10/12 lg:w-11/12 mx-auto ml- lg:text-center justify-content'>{item.description}</p>
                    </div>
                    
                   
    
                    <div className='flex flex-row space-x- justify-around ml- '>
                       <label className='rounded-full px- py- relative p-1 mb-3 pointer text'>
                          <input className='bg-black rounded-full text-black z-50 ml-1' type="checkbox" name="checkbox" id="" checked={checkingBox} onChange={HandleCheckbox} key={item.id}/>
                          <span className={
                          checkingBox ? 'absolute top-0 left-0 rounded-full h-7 w-7 bg-red-30 border-2 border-black mt-0.5' : 'absolute top-0 left-0 rounded-full h-7 w-7 bg-gray-300 border-2 border-black mt-0.5'
                          }></span>
    
                       </label>
    
                       <div className='border-'>
                        {
                         checkingBox ? <h2 className='border-2 px-3 rounded-lg bg-white text-red-900'>completed</h2> : <h2 className='border-2 px-3 rounded-lg bg-red-900 text-white'>active</h2>
                        }
                       </div>
                      
                       <button>
                        <FontAwesomeIcon icon={faTrash} className='' onClick={()=>handleDeleteTodo(item.id)} key={item.id}/>
                       </button>
    
    
                    </div>
    
                   
    
                 </div>
                  )
                }
              )
             }
             

           </div>

         

     </section>

     


      <section className={
        add ? 'bg-gray-100 p-1 flex font-montserrat lg:w-2/4 mx-auto w-10/12 absolute left-0 right-0 bottom-0 lg:top-40 top-20 lg:h-2/3 hidde rounded-lg shadow-lg z-50 h-3/4' : 'bg-gray-100 p-10 flex font-montserrat w-2/4 mx-auto absolute left-0 right-0 bottom-0 top-40 h-2/3 hidden rounded-lg shadow-lg z-50'
      }>

        <form action="" className='flex mx-auto w-2/3 flex-col bg-yellow-90 space-y-3' onSubmit={Submit}>

          <h2 className='font-bold'>Add task</h2>

     
          <label htmlFor="title">Title</label>
          <input className='rounded-lg text-black'
           type="text"
           name='title'
           id='title'
           value={form.title}
           onChange={HandleForm} />

          <label htmlFor="description">Description</label>
          <textarea 
          name="description"
          id="description"
          cols="30"
          rows="10"
          className='rounded-lg'
          value={form.description}
          onChange={HandleForm}/>


          <label htmlFor="stats">Status</label>
          <select name="stats"
           id="stats"
           value={form.stats}
           onChange={HandleForm}
           className='rounded-lg
           '>
            <option value="">----</option>
            <option value="all task">all task</option>
            <option value="completed">completed</option>

          </select>
    

          <div>
            <p className={errorMsg ? 'block' : 'hidden'} onChange={HandleTodo}>the title cannot be left blank</p>
          </div>
          
        
          <div className="flex justify-between bg-whit px-2 py-1 rounded-sm">
            <button className='text-xl border border-purple-400 border-2 font-bold text-black px-2 py-1 rounded-lg hover:bg-purple-400' onClick={HandleTodo}>Add task</button>
            <button className='text-xl bg-blue-400  px-2 py-1 rounded-lg border-2 hover:bg-white' onClick={AddClosetask}>close</button>



            
            
          </div>

           
          

        </form>
      </section>


      <div className={
        add ? "absolute w-full h-full top-0 left-0 bg-blackrgba  hidde  backdrop-blur-sm z-20" : "absolute w-full h-full top-0 left-0 bg-blackrgba  hidden  backdrop-blur-sm z-20"
      } onClick={AddClosetask}></div>


    </div>




  )
}

export default App


































/**
 *  const [alltodo, setalltdo] = React.useState(false)
  const [newTitle, setNewTitle] = React.useState('')
  const [newDescription, setnewDescription] = React.useState('')


  <FontAwesomeIcon icon={faList}  className='h-20 mx-auto'/>

             <h1 className='mx-auto bg-white lg:w-96 text-center text-xl'>
             You don't have any tasks registered yet.
           Create tasks and organize your to-do items.
             </h1>



             {
              alltodo.map(
                (item,index) => {
                  return (
                    <div>
                       
                    </div>
                  )
                }
              )
             }


             <div className='mx-aut flex flex-col space-y-8 bg-purple-400 w-72 ml-  rounded-lg'>

                <div className='flex flex-col space-y'>
                  <h1 className='ml-6 text-2xl mt-4'>opeyemil</h1>

                  
                </div>

                <div>
                <p className='ml-6 text-md'>Akinbayo</p>
                </div>

                <div className='flex flex-row space-x- justify-around ml-'>
                   <label className='rounded-full px- py- relative p-1 mb-3 pointer text'>
                      <input className='bg-black rounded-full text-black z-50 ml-0.5' type="checkbox" name="" id="" />
                      <span className='absolute top-0 left-0 rounded-full h-6 w-6 bg-gray-30 border border-black mt-0.5'></span>

                   </label>

                   <div className='border-'>
                    <h2 className='border-2 px-3 rounded-lg bg-blue-400'>active</h2>
                   </div>
                  
                   <div>
                    <FontAwesomeIcon icon={faTrash} className=''/>
                   </div>


                </div>

               

             </div>



             if (form.title == letters ) {
       let updatedTodoArr = [...alltodo]
       updatedTodoArr.push(newTodoItem)
       setalltdo(updatedTodoArr);
    } else if (form.title == null || form.description == "") {
        console.log('opeyemil')
    }


    let newTodoItem = {
      title: form.title,
      description: form.description,
      stats : form.stats
    }
 */