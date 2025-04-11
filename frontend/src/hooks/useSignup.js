import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuth } from '../context/Authcontext';

const useSignup = () => {
    const [loading,setLoading] = useState(false);

    const {setUser} =  useAuth();

    const SignUp = async ({fullName, Username, Password, cnfPassword, gender})=>{

       const success =  handleInpErrors({fullName, Username, Password, cnfPassword, gender});

       if(!success) return;
      
       setLoading(true);

       // Loading toast

       const loadingToast = toast.loading("Creating account...");

       try {
          const res = await fetch("/api/auth/signup", {
              method: "POST",
              headers: {"Content-Type" : "application/json"},
              body: JSON.stringify({fullName, Username, Password, cnfPassword, gender}),
          });

          const data = await res.json();
          if(data.error){
            throw new Error(data.error);
          }

          //localstorage
          localStorage.setItem("chat-user",JSON.stringify(data));

          //context
          setUser(data);

          toast.success("Account created successfully! 🎉", { id: loadingToast });

       } catch (error) {
          toast.error(error.message, { id: loadingToast });
       } finally {
          setLoading(false);
       }

    };

    return {loading, SignUp};
};

export default useSignup


function handleInpErrors({fullName, Username, Password, cnfPassword, gender}){
    if(!fullName || !Username || !Password || !cnfPassword || !gender){
        toast.error("Please fill all the fields!");
        return false;
    }

    if(Password !== cnfPassword){
        toast.error("Passwords do not match");
        return false;
    }

    if(Password.length < 6){
      toast.error("Password must be atleast 6 characters");
      return false;
    }

    return true;
}