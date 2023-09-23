import React from 'react';
import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { CgMenuRight} from "react-icons/cg";
import { Api } from "./Api";
import './App.css';
import { Link, useNavigate } from "react-router-dom";

const Userlist = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        Api().then((res) => setList(res.data.users));
      }, []);
    return (
        <div className='overflow-x-hidden bg-gray-50'>
                <section class="  body-font">
                  <section className='flex w-full justify-between  '>
      <h2 className="md:p-8 pl-5 px-3 md:gap-2 p-4 pt-5 md:text-4xl  text-2xl font-bold text-blue-900 flex  md:w-3/4 w-1/2 "><FiUsers className='text-3xl'/> Users </h2>
      <div className='flex  md:w-1/4  w-1/5 md:p-8  p-4 pt-5 text-3xl font-bold text-blue-900 flex gap-x-3 justify-right align-right'>
      <Link
            to={"/listview"}>    <CgMenuRight className='text-gray-700 mt-2 text-3xl active:text-blue-900 hover:text-blue-900'/></Link>
        <Link
            to={"/"} > <CgMenuGridR className=' mt-2 text-3xl text-blue-900'/></Link>
         <Link
            to={"/listview"}> <button class="animated-button md:block hidden">
  <span>Change to list view</span>
  <span></span>
</button></Link>

        </div>

      </section>
      <div class=" px-3 gap-x-2 py-10  rounded-xl mx-auto">
        <div class="flex flex-wrap -m-4 w-full  md:justify-evenly justify-center ">
          
          {list.map((item) => (
            <div class=" group lg:w-3/12 md:w-1/2 shadow-xl mb-16 rounded-xl md:hover:w-4/12 transition-all  focus:ring focus:ring-blue-300 active:bg-blue-200  hover:bg-blue-300 md:mx-2  p-2 w-11/12 justify-center align-center ml-8 bg-white">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  class="object-cover object-center w-full h-full rounded-2xl block group-hover:w-11/12 card-hover:h-9/12 justify-center"
                  src={item.image}
                  alt={item.title}
                />
              </a>
              <div class="mt-4 p-2">
                <h3 class="text-blue-900 text-xl tracking-wide text-center font-bold mb-1">
                 {item.firstName} {item.lastName}
                </h3>
                <h2 class="text-gray-600 title-font text-lg text-center font-semibold">
                  {item.email}
                </h2>
                   {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className=" btn bg-blue-900 my-3 hover:bg-blue-600 text-white transition-all mx-auto justify-center" onClick={()=>document.getElementById('my_modal_1').showModal()}>See more details</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">

                <p class="mt-1 mb-5 text-teal-800 transition-all text-lg font-semibold">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.image}/>
                    Username: {item.username} <br />
                    Sex: {item.gender} <br />
                    Age: {item.age} <br />
                    Phone: {item.phone}  <br />
                    Blood type: {item.bloodGroup}  <br />
                    D.O.B: {item.birthDate}  <br />
                    Address: {item.address.address}  <br />
                </p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-blue-300 my-3 hover:bg-blue-600 text-white transition-all">Close</button>
      </form>
    </div>
  </div>
</dialog>
                
                
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
        </div>
    );
};

export default Userlist;