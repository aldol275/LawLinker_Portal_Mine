import React from 'react'

function Case() {
  return (
    <div className="w-3/4 mx-auto p-5 bg-white shadow-lg rounded-lg border border-gray-250">
        <div className="flex justify-around items-start">
            <div className="">
            <h1 className="mb-2 mt-1 text-2xl leading-snug justify-center font-bold">Current Case Card</h1>
                <div className=''>
                    <div className="flex">
                        <h3 className="text-xl leading-snug font-semibold">Case Details :</h3>
                        <h5 className="ml-2 mb-1 text-xl leading-snug ">Lorem Na Bhujyam</h5>
                    </div>
                    <div className="flex">
                        <h3 className="text-xl leading-snug font-semibold">Case No. :</h3>
                        <h5 className="ml-2 mb-1 text-xl leading-snug">12345</h5>
                    </div>
                    <div className="flex">
                        <h3 className="text-xl leading-snug font-semibold">Court :</h3>
                        <h5 className="ml-2 mb-1 text-xl leading-snug">Delhi High Court</h5>
                    </div>
                    <div className="flex">
                        <h3 className="text-xl leading-snug font-semibold">Lawyer :</h3>
                        <h5 className="ml-2 text-xl leading-snug">Advocate Aryan Solanki</h5>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="mb-2 text-2xl leading-snug justify-center font-bold">Upcoming Events</h1>
                </div>
                <div>
                    <div className="flex w-80 p-4 bg-red-300 shadow-lg rounded-lg border border-gray-250 ">
                        
                        <h2>Meeting with Lawyer at 2 PM</h2>
                    </div>
                    <div className="flex w-80 mt-3 p-4 bg-yellow-200 shadow-lg rounded-lg border border-gray-250 ">
                        <h2>Hearing at 3 PM</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Case