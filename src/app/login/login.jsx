"use client"
import Image from "next/image";
import { useState } from "react";

export default function Login() {
     return(
            <div className="grid grid-cols-2 mx-auto h-screen items-center p-10">
               <div className="h-[400px] w-[400px] relative mx-auto">
                  <Image src="/login.png" alt="Signup" fill="cover"/>
               </div>

               <div className="w-full bg-[#3F719C40] h-fill p-8 rounded-[8px]">
                  <h3 className="text-medium text-center">Login</h3>
     
                  <input type="text" className="h-10 my-4 w-full p-2 bg-white rounded-[4px] outline-none" placeholder="Email"/>

                  <input type="password" className="h-10 my-4 w-full p-2 bg-white rounded-[4px] outline-none" placeholder="Confirm Password"/>

                  <div className="flex w-full justify-between mb-4">
                    <p className="text-[12px] -mt-2 flex text-black items-center">
                         <input type="checkbox" className="mr-2"/>
                         Remember me
                    </p>
                     
                    <p className="text-[12px] -mt-2 text-black">Forgot Password?</p>
                  </div>
                  
                  <button className="bg-[#E89766] text-white w-full h-10 rounded-[4px]">Login</button>

                  <p className="text-[12px] text-center my-4 text-gray-400">Already have an account? <a href="/signup" className="text-[#0C6390] text-bold">Sign in</a></p>
               </div>
            </div>
     )
}