import React from "react";
import Header from "../ui/Header";
import NavList from "../ui/NavList";

function Homepage() {
  return (
    <>
      <div>
        <h1 className="text-4xl">
          Welcome to the <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <p className="my-4 italic">Pick a subject to get started.</p>
        {/* <h1 className='flex flex-col text-4xl'>Welcome to the <span className='font-bold'>Frontend Quiz!</span></h1>
       <p className='italic my-4'>Pick a subject to get started.</p> */}
      </div>
      <NavList />
    </>
  );
}

export default Homepage;
