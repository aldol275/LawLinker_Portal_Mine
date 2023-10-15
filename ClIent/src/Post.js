import React from 'react'
import user from "./user.png"
import postimg from "./postimg.jpeg"
function Post() {
  return (
    <div>
      <div className='border-2 border-black  w-[50vw] m-4 rounded-md shadow-lg bg-gray-100 shadow-slate-700'>
           <div className='flex'>
            <img className='h-9 m-3' src={user}/>
            <p className='text-2xl font-bold p-3'>Priyansh Shrivastav</p>
           </div>
           <div className='text-xl p-3'>
           Indian Institute of Technology, Guwahati, is proud to host an Internal Hackathon for Smart India Hackathon (SIH) 2023 on September 28th, starting at 9:00 am, in the Lecture Hall Complex.
        
      </div>
      <img className="m-2 w-[98%] rounded-md" src={postimg}/>
    </div>
    </div>
  )
}

export default Post
