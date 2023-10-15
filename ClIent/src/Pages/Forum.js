import React from 'react'
import Post from '../Components/Post'
function Forum() {
  return (
    <div className='h-[100vh]'>
      <div className='flex justify-center py-4'>
        <p className='text-cyan-500 text-4xl font-extrabold mx-auto block '>
        LEGAL-HELP-FORUM</p>
      </div>
      <div className='px-4'>
        <p className='text-3xl font-extrabold'>Want Free Legal Advice?</p>
      </div>
      <div>
        

      <form>
   <div class="w-[60%] mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-slate-200 dark:border-slate-100 m-4 shadow-md shadow-slate-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-100">
           <label for="comment" class="sr-only">Your comment</label>
           <textarea id="comment" rows="8" class="w-full px-0 text-gray-900 bg-white border-0 dark:bg-gray-100 focus:ring-0 focus:outline-none dark:text-black dark:placeholder-gray-400 text-xl" placeholder="Ask your Question..." required></textarea>
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </button>
           <div class="flex pl-0 space-x-1 sm:pl-2">
               <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                    </svg>
                   <span class="sr-only">Attach file</span>
               </button>
               <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                    </svg>
                   <span class="sr-only">Set location</span>
               </button>
               <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                   <span class="sr-only">Upload image</span>
               </button>
           </div>
       </div>
   </div>
</form>

<div className='p-4 flex justify-between pt-10'>
   
    
<form className='w-[25%]'>
    <div class="flex">
      
        
        
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lgfocus:ring-blue-500 focus:border-gray-700 dark:bg-gray-100 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500 rounded-md" placeholder="Search..." required/>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

    
    <div className='w-[50%] mx-auto'>
 <p className='text-3xl font-extrabold text-center mr-5'>Here are some Recent Posts!</p>
    </div>
    <div className='w-[15%] pl-4'>
   
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500">
  <option selected>Latest</option>
  <option value="US">Popular</option>
  <option value="CA">Rated</option>
  
</select>
    </div>
</div>
<hr className='bg-black border-black border-2 w-full mt-3'></hr>

<div className='flex justify-between'>
<div className='overflow-y-scroll h-[90vh]'>

<Post/>
<Post/>
<Post/>
<Post/>

</div>
    <div>
<div className='bg-gray-100 w-full rounded-md shadow-slate-700 my-5 float-right mx-4 shadow-md '>
<p className='text-3xl font-bold p-2'>
Top Advices
</p>
<p className='text-2xl p-2'>
Dalal Advice
</p>
<p className='text-2xl p-2'>
Lelo Mera
</p>
<p className='text-2xl p-2'>
Lomda
</p>
</div>
    </div>
   
</div>
       
      </div>
    </div>
  )
}

export default Forum
