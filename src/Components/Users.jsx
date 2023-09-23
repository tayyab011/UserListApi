import React from 'react';
import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { CgMenuRight} from "react-icons/cg";
import { Api } from "./Api";
import './App.css';
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
    
    const [list, setList] = useState([]);
    useEffect(() => {
        Api().then((res) => setList(res.data.users));
      }, []);

    return (
        <div>
            <section class="bg-gray-50 body-font">
  <div class=" px-5 py-24 mx-auto">
  <section className='flex w-full justify-between mx-auto'>
      <h2 className="md:p-8 px-3 md:gap-2 p-4 pt-16 md:text-4xl  text-2xl font-bold text-blue-900 flex  md:w-3/4 w-1/2 "><FiUsers className='text-3xl'/> Users </h2>
      <div className='flex  md:w-1/4  w-1/5 md:p-8 p-4 pt-16 text-3xl font-bold text-blue-900 flex gap-x-3 align-right'>
      <Link
            to={"/listview"}>    <CgMenuRight className=' mt-2 text-3xltext-blue-900'/></Link>
        <Link
            to={"/"}> <CgMenuGridR className='text-gray-700 mt-2 text-3xl active:text-blue-900 hover:text-blue-900'/></Link>
        <Link
            to={"/"}>   <button class="animated-button md:block hidden">
  <span>Change to grid view</span>
  <span></span>
</button></Link>

        </div>

      </section>
    <div class="flex flex-wrap -m-2">
        
    {list.map((item) => (
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full hover:bg-blue-100 rounded  hover:border-4 hover:border-blue-800 transition-all">
        <div class="h-full flex items-center border-gray-200 border bg-white shadow-xl p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.image}/>
          <div class="flex-grow">
            <h2 class="text-blue-900 title-font font-bold text-lg">{item.firstName} {item.lastName}</h2>
            <p class="text-gray-700">{item.email}</p> 
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className=" btn bg-blue-300 my-3 hover:bg-blue-600 text-white transition-all" onClick={()=>document.getElementById('my_modal_1').showModal()}>See more details</button>
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
      </div>))}
          
    </div>
  </div>
</section>
            
        </div>
    );
};

export default Users;