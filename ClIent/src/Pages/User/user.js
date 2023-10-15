import React from 'react'

import Usercard from '../../Components/UserCard/usercard';
import Current from '../../Components/CurrentCaseCard/current';
import Case from '../../Components/CaseCur/case';
import Carousel from '../../Components/carousel/carousel';

function User() {
  return (
    <>
    <div className="flex flex-col  bg-gray-100 text-gray-600 min-h-screen p-10">
        <h1 className="mx-auto mb-2">NAVBAR</h1>
        <div className="mb-5">
            <Usercard></Usercard>
        </div>
        <div className="mb-12">
            <Case></Case>
        </div>
        <div className="mb-5">
            <Current></Current>
        </div>
        <div className="mb-5">
            <Carousel></Carousel>
        </div>
        <h1 className="mx-auto mt-5">FOOTER</h1>
    </div>
  </>
  
  )
}

export default User
