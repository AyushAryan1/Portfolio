import React from "react";
import {instagram , linkedin , gmail , github} from "../assets";

const FooterSection = () =>{
    return(
        <footer className = "bg-black text-white"> 
            <div className = "flex justify-center items-center sm:px-12 px-4 bg-primary py-7 w-50 h-20">
                <a href="https://www.instagram.com/a2_phenomenal/" className="flex justify-center px-10" ><img src = {instagram} alt = "instagram" className=""/></a>
                <a href="https://www.linkedin.com/in/ayusharyan1/" className="flex justify-center px-10"><img src = {linkedin} alt = "linkedin" className=""/></a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" className="flex justify-center px-10"><img src = {gmail} alt = "gmail" className=""/></a>
                <a href="https://github.com/AyushAryan1/" className="flex justify-center px-10 w-50 h-12"><img src = {github} alt = "github" className=" flex w-12  md:w-8"/></a>
            </div>
            <div className ="flex justify-center items-center sm:px-12 px-4 bg-primary py-2">
            <p>Created by Ayush</p>
            </div>
        </footer>
    );
}

//className = "lg:text-2xl text-2xl md:mb-3 flex justify-center mb-6 lg:leading-normal font-semibold md:w-2/5"


export default FooterSection