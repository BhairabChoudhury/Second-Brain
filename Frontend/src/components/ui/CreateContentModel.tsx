
// it code of submission  title and link 
import { CrossIcon } from "../../icons/CrossIcon"; 
import { Button } from "./Button";
import {Input} from "./Input";
//import { BACKEND_URL } from "../config";
import { useRef, useState,useEffect } from "react";
 import axios from "axios";
 //@ts-ignore
enum ContenType {
  Youtube = "youtube",
  Twitter = "twitter"
}

export function CreateContentModel({ open, onClose }) {

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  // ⬇ MUST be before any conditional return!
  const [type, setType] = useState(ContenType.Youtube);
 const [message , setmessage] = useState("") ;


   useEffect(()=>{
    setmessage("") ; 
   } ,[open]) // when createContendmodel open and close that time message " " ; 
  if (!open) {
    return null
  } ;

   async function addContent() {
    const title = titleRef.current?.value;  
    const link = linkRef.current?.value;
    
    const  responce:string =  await axios .post(" http://localhost:3000/api/v1/content",{
     link , 
      title,
      type
     } , {
      headers :{
          "Authorization":localStorage.getItem("token") 
      }
     })
   //@ts-ignore
    //  onclose();
      setmessage(responce.data?.message) ;
  }

  return (
    <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0  flex justify-center items-center ">
      <div className="flex flex-col justify-center">
        <span className="bg-white opacity-100 p-10 rounded">
          <div className="flex justify-end">
            <div onClick={onClose} className="cursor-pointer">
              <CrossIcon />
            </div>
          </div>

          <div className="gap-4">
            <Input reference={titleRef} placeholder="Title" />
            <Input reference={linkRef} placeholder="Link" />
          </div>
   
          <div>
            <h1>Type</h1>
            <div className="flex gap-1 p-4">
              <Button
                title="YouTube"
                variant={type === ContenType.Youtube ? "primary" : "secondary"}
                onClick={() => setType(ContenType.Youtube)}
              />

              <Button
                title="Twitter"
                variant={type === ContenType.Twitter ? "primary" : "secondary"}
                onClick={() => setType(ContenType.Twitter)}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={addContent} variant="primary" size="lg" title="Submit" />
          </div>
            <h1 className="text-2xl text-blue-600 flex justify-center">
             {message}
            </h1>
        </span>
      </div>
    </div>
  );
}
  
// function Input ({onChange,placeholder}:{onChange:()=>void}){
//      return (

//       <div className="mb-2">
//           <input placeholder={placeholder} type={"text"} className="px-4 py-2  border-3 rounded-md"></input>
//       </div>

//      )
// }