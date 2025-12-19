import React, { useState } from "react"


interface data{
  d:String[]
}

function App() {
  const [d,setd]=useState<string[]>([])
  const [text,setText]=useState<string>("")
  return (
    <div className="w-[100%] h-screen bg-gray-300 flex justify-center items-center">
    <div className="w-[600px] h-[550px] bg-white flex items-center flex-col rounded-md">
      <div className="w-[90%] h-[50px] m-[20px] flex justify-around">
        <input className="w-[60%] h-full p-[20px] rounded-md border-[1px] border-black" placeholder="Enter your todo"
        value={text} 
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
          setText(e.currentTarget.value)
        }}></input>
        <button className="w-[30%] bg-green-200 h-full rounded-md" onClick={()=>{
          setd([...d,text])
          setText("")
        }}> 
          Add todo
        </button>
      </div>
      <div className="h-[80%] w-[95%] overflow-y-scroll overflow-x-hidden flex items-center flex-col">
        {d.map((itm:string,indx:number)=>{
          return (
            <div className="h-auto w-[100%] m-5 white flex items-center border-[1px] border-black rounded-md">
          <p className="m-2">{itm}</p>
        </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default App
