"use client"
import Image from "next/image";
import { useState } from "react";

export default function Signup() {
   const [activeTab, setActiveTab] = useState("student");
     return(
            <div className="grid grid-cols-2 mx-auto h-screen items-center p-10">
               <div className="h-[400px] w-[400px] relative mx-auto">
                  <Image src="/signup.png" alt="Signup" fill="cover"/>
               </div>

               <div className="w-full bg-[#3F719C40] h-fill p-8 rounded-[8px]">
                  <h3 className="text-medium text-center">Sign up</h3>
                  {/* Tab */}
                  <div className="flex justify-center my-4">
                     <button
                        className={`w-1/2 h-12 rounded-l-[8px] ${
                           activeTab === "student" ? "text-white font-bold bg-[#0C6390]" : "text-gray-400 bg-white"
                        }`}
                        onClick={() => setActiveTab("student")}
                     >
                        Student
                     </button>
                     <button
                        className={`w-1/2 h-12 rounded-r-[8px] ${
                           activeTab === "accommodation" ? "text-white font-bold bg-[#0C6390]" : "text-gray-400 bg-white"
                        }`}
                        onClick={() => setActiveTab("accommodation")}
                     >
                        Accommodation Lister
                     </button>
                  </div>
                  
                  <input type="text" className="h-10 my-4 w-full p-2 bg-white rounded-[4px] outline-none" placeholder="Select your institution"/>

                  <div className="grid grid-cols-2 gap-4">
                     <input type="text" className="h-10 my-4 w-full p-2 bg-white rounded-[4px] outline-none" placeholder="FirstName"/>
                     <input type="text" className="h-10 my-4 w-full p-2 bg-white rounded-[4px] outline-none" placeholder="LastName"/>
                  </div>

                  <input type="text" className="h-10 my-4 w-full p-2 bg-white rounded-[4px] outline-none" placeholder="Select your institution"/>

                  <div className="grid grid-cols-2 gap-4">
                     <input type="password" className="h-10 my-4 w-full p-2 bg-white rounded-[4px] outline-none" placeholder="Password"/>
                     <input type="password" className="h-10 my-4 w-full p-2 bg-white rounded-[4px] outline-none" placeholder="Confirm Password"/>
                  </div>
                  <p className="text-[12px] -mt-2 text-gray-400">Use 8 or more character</p>

                  <p className="text-[12px] text-center my-4 text-gray-400">By signing up, you agree to our Terms of Use and Privacy Policy.</p>

                  <button className="bg-[#E89766] text-white w-full h-10 rounded-[4px]">Sign up</button>

                  <p className="text-[12px] text-center my-4 text-gray-400">Already have an account? <a href="/login" className="text-[#0C6390] text-bold">Login</a></p>
               </div>
            </div>
     )
}