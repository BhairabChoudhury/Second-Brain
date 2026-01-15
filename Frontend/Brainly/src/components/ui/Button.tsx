

import type { ReactElement } from "react"

  
 interface ButtonInterface {
    title :string ,
    size:"lg"|"md"|"md" ,
    startIcon? :ReactElement ;
    endIcon ?: ReactElement
    variant :"primary" | "secondary" ;  
    onClick ?: ()=> void  ;
    fullWidth :boolean ;
    loading ?: boolean 
 }

 // Mapping button variants to their respective CSS classes
const variantClasses = {
    "primary": "bg-purple-600 text-white", // Styles for primary variant
    "secondary": "bg-purple-200 text-purple-600", // Styles for secondary variant
}; 

// Default CSS classes for all buttons
const defaultStyles = "px-4 py-2  rounded-md font-light flex items-center";      //items-center is for vertically allignment of the item to be center

 const sizeStyles = {
    "lg" :"px-8 py-2 text-xl" ,
     "md":"px-4 py-2 text-md" ,
     "sm":"px-2 py-1 text-sm" 
 }
export function Button(props:ButtonInterface){
     return (
     
      <button  onClick={props.onClick}  className={`${variantClasses[props.variant]} ${sizeStyles[props.size]} ${defaultStyles} 
        props.fullWidth ? "w-full flex justify-center items-center" : "" 
       ${props.loading ? "opacity-45" : "" }`} >
         <div className="flex items-center">
          <div className="pr-2">
        {props.startIcon} 
        </div>
        {props.title} {props.endIcon} 
        </div>
      </button>
      
     )
}