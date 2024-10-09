import { useState } from "react";

function App() {
 const [counter, setCounter]=useState(0)
  const HandleIncreaseCounter=()=>{
   setCounter(counter+1)
  }
  const HandleDecrease=()=>{
   
    if(counter>0)
    {
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1 className="text-5xl
      font-bold text-center my-4">
        Counter Apllication
      </h1>
      
      <div className="flex justify-center my-2">
      <div className={"bg-gray-400 h-[100px] rounded-md text-center text-white text-4xl flex items-center justify-center w-[150px]"}>
        <p>{counter}</p>
      </div>

      </div>
     <div className="flex gap-2 items-center justify-center">
     <button
 onClick={HandleIncreaseCounter} 
 className=" border-2 p-2 bg-green-500 text-white rounded-full">
        Increase
      </button>
      <button onClick={HandleDecrease} className="  
      border-2 p-2 bg-red-500 text-white rounded-full">
        Decrease
      </button>
     
     </div>
    </>
  );
}

export default App;
