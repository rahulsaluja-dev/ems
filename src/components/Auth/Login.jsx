import  { useState } from 'React'

const  Login = ({handleLogin}) => {
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)

  }


  return (
    <div className='flex h-screen w-screen items-center justify-center '>
      <div className='border-2 border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
         className='flex flex-col items-center justify-center'>
          <input
          required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
           className=' outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-grey-400' type="text" placeholder='enter your name'
            />
          <input
          required
          value={password} 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
           className=' outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full mt-3 placeholder:text-grey-400' type="password" placeholder='enter password' 
           />
          <button className=' m-6  text-white outline-none  border-none hover:bg-emerald-700 bg-emerald-600 px-9 py-2 text-lg rounded-full'>Log in</button>
        </form>
      </div>

    </div>
  )
}

export default Login