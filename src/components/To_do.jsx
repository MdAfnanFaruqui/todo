import React, { useState } from 'react'

function To_do() {
    const [task,setTask]=useState(["Hello"])
    const [value,setValue]=useState()
function addmytask(){
    if(value){
        setTask([...task,value])
        setValue("")
    }
}
function removeElement(toRemove){
    console.log(toRemove)
 const filtered =task.filter((data,index)=>index!=toRemove)
 setTask(filtered)
}
  return (
    <div > 
      <div style={{backgroundColor:'white',padding:'40px',borderRadius:'5px'}}>  
        <h1 style={{color:'black'}}>TO-DO List</h1>
        <input style={{backgroundColor:'darkblue',padding:'20px',borderRadius:'5px'}} onChange={(e)=>{setValue(e.target.value)}} value={value} placeholder='Enter your task'></input>

        <button style={{backgroundColor:'lightskyblue',padding:'20px',borderRadius:'5px'}} onClick={addmytask} >submit</button>

         <div style={{marginTop:'20px'}}>
            {
                task.map((data,index)=>(
                    <div style={{padding:'5px 20px',borderRadius:'5px',backgroundColor:'red',display:'flex',justifyContent:'space-between'}}>

                        <p key={index}>{data} </p>

                         <button style={{backgroundColor:'black',fontSize:'20px',margin:'15px',borderRadius:'5px'}}onClick={()=> removeElement(index)}>
                            x</button>
                    </div>
                ))
            }
         </div>
       </div>  
    </div>

  )
}

export default To_do