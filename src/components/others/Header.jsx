//import { useState } from "react"
const Header = (props) => {
  //  const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstname)
  // }
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div>
        <div className='flex items-end justify-between '>
           <h1 className='text-xl font-medium'> Hello <br/><span className='text-3xl font-semibold'>username</span> 👋</h1> 
           <button  onClick={logOutUser} className='bg-red-500 text-white  text-lg font-medium rounded-sm px-5 py-2'>log Out</button>
        </div>
    </div>
  )
}

export default Header