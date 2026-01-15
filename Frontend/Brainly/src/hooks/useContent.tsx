 import axios from "axios" ;  
 import { useEffect , useState } from "react"
 import { BACKEND_URL } from "../config";

 export function useContent(){
     // State bulid for fetch the main content 
      const [ contents ,setContents] = useState<any[]>([]) ;

      function refresh (){
         axios.get(`${BACKEND_URL}/api/v1/content` ,{
              headers: {
                  "Authorization":localStorage.getItem("token")  
              }
         })
         .then((responce)=>{ 
             setContents(responce.data) ;
         })
         .catch((error)=>{
             console.log("Error Feching Data ",error) ;
          })
      }

        useEffect (()=>{
             refresh() ; 
             
             let intervel  = setInterval(()=>{
                  refresh();
             } , 10*1000) ;

             return () => {
                 clearInterval(intervel) ;
             }

        } 
        ,[])

        /**
         Dashboard unmounts → useEffect cleanup runs → clearInterval()
User navigates away from Dashboard
Component removed from DOM
Interval stops to prevent memory leaks
         */

        return { contents ,refresh } ; 
 }

