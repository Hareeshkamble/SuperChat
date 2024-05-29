import React,{useState} from 'react'
import { useAuthContext } from '../Context/AuthContext'
import toast from 'react-hot-toast';



export default function useLogin() {
    const [loading, setloading] = useState(false)
   let {setauthUser}= useAuthContext()
   let login=async({username,password})=>{
    if (!handleInputErrors({  username, password })) {
        return false;
      }
    try {
        setloading(true)
        let res = await fetch("http://localhost/api/auth/login", {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({username,password})
    })
    let data= await res.json()
    let simplifiedData=JSON.stringify(data)
    if(!data){
        toast.error("error while login")
    }

    localStorage.setItem("chat-user",simplifiedData)
    
    setauthUser(data)

    } catch (error) {
        toast.error(error.message)
    }finally{
        setloading(false)
        toast.success("log in successful")
    }
   }
  return {loading,login}
}

function handleInputErrors({  username, password}) {
    if (!username || !password ) {
      toast.error("Please fill all the fields");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  }



 