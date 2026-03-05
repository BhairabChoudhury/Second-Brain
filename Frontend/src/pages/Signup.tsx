import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config"; 
import { useRef } from "react";

import axios from "axios" ;
import { useNavigate } from "react-router-dom";

export function  Signup () {
   // @ts-ignore 
  // References for the username and password input fields
    const usernameRef = useRef<HTMLInputElement>(); 
    // @ts-ignore 
    const passwordRef = useRef<HTMLInputElement>();

    // useNavigate hook for navigating to different routes
    const navigate = useNavigate();

    // signup function to handle user registration
    async function signup() {
        const username = usernameRef.current?.value; // Get the value from the username input field
        console.log(usernameRef.current); // Log the username reference for debugging (optional)
        const password = passwordRef.current?.value; // Get the value from the password input field

        // Send POST request to the backend API for signup
        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username, // Send username as part of the request
            password  // Send password as part of the request
        });

        // Navigate to the signin page after successful signup
        navigate("/signin");

        // Display an alert message to inform the user that the signup was successful
        alert("You have signed up!");
    }
      

     return (
        <div className=" h-screen w-screen bg-gray-400 flex justify-center items-center" >
            <div className="bg-white rounded-xl border min-w-48 col items-center p-8 ">
                <Input  reference={usernameRef}   placeholder="Username"/>
                <Input reference={passwordRef}  placeholder="Password"/>
         <div className="flex justify-center pt-4"> 
         <Button  onClick={signup} variant="primary" loading={false} size="md" title="SignUp" fullWidth={true}/>
        </div>    
         </div> 
        </div>

     ) ;
   }

   

// src/pages/Signup.tsx
