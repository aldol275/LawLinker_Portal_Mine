import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { BiSolidImageAdd } from 'react-icons/bi';
import Priyansh from "./3.jpg";

function Usercard() {
  return (
    <div className="">
            <div className="flex-grow p-5">
              <div className="flex justify-center items-start">
                <header>
                  <div className="flex ">
                    <div className="justify-center pt-5 px-5 mr-10 bg-white shadow-lg rounded-lg border border-gray-250 ">
                      <a className="relative inline-flex items-start " href="#0">
                        <img className="rounded-full block" src={Priyansh} width="130" height="130" alt="User 01" />
                      </a>
                      <div className="ml-28 mb-1 -mt-5 text-3xl">
                          <BiSolidImageAdd></BiSolidImageAdd>
                      </div>
                    </div>
                    <div className="w-80 bg-white shadow-lg rounded-lg border border-gray-250 ">
                    <div className="ml-5 ">
                        <div className="inline-flex">
                        <a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                            <h1 className=" mt-5 text-2xl leading-snug justify-center font-bold">
                              Priyansh Bothra
                            </h1>
                        </a>
                        <div className="mt-3 ml-16">
                            <button className="text-4xl " >
                              <BiEdit className='hover:text-yellow-400'/>
                            </button>
                        </div>
                        </div>
                        <div className="flex items-center mt-2">
                            <span className="text-base font-medium text-gray-400 p-1.5 mr-1">
                                <p>+91 1234567890</p>
                                <p>Delhi, India</p>
                                <p>812345</p>
                            </span>
                        </div>
                    </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
        </div>
  )
}

export default Usercard