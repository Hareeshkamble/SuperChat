import { useState } from "react";
import toast from 'react-hot-toast';
import { useAuthContext } from "../Context/AuthContext";

export default function userSignup() {
  const [loading, setLoading] = useState(false);
const {setauthUser}=useAuthContext()
  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    if (!handleInputErrors({ fullName, username, password, confirmPassword, gender })) {
      return false;
    }
    setLoading(true);
    try {
      let res = await fetch("http://localhost/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });

      let data = await res.json();
      console.log("this is the data we are setting in the localStorage",data)

      if(data.error){
        throw new Error(data.error)
      }

    //   local Storageobject
    localStorage.setItem("chat-user",JSON.stringify(data))
    // Context 
    setauthUser(data) 

    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      toast.error("Please fill all the fields");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  }

  return { loading, signup };
}
