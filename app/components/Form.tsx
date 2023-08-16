"use client"

import React, { useEffect } from 'react'
import Container from './Container'
import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa6'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { sendContactForm } from '../lib/api'


const initValues = {name: "", email: "", message: ""};

const initState = {values: initValues};

export default function Form() {

   

    const [form, setForm] = useState(initState);
    const {values} = form;

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setForm((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [e.target.name]: e.target.value
        }
    }))

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true);

        try {
            await sendContactForm(values)
            .then(res => setIsLoading(false))
        } catch (error) {
            setIsLoading(false),
            setIsError(true);
        }

        setForm(initState);
        if (!isError) {
            setSuccess(true);
        }

        console.log(success)
    }

  return (
    <div className='flex justify-center items-center'>
        <Container classes="alt">
            <div className='p-4 w-[30rem]'>
                
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                    <h1 className='text-5xl font-bold self-center'>Contact</h1>
                    <div className='flex flex-col'>
                        {/* <label>Name</label> */}
                        <input 
                        type="text" 
                        name="name" value={values.name}
                        onChange={handleChange} 
                        placeholder='Name'
                        className='p-2 border-slate-300 border-2' 
                        />
                    </div>
                    <div className='flex flex-col'>
                        {/* <label>Email</label> */}
                        <input 
                        type="email" 
                        name="email" value={values.email} 
                        onChange={handleChange} 
                        placeholder='Email'
                        className='p-2 border-slate-300 border-2'
                         />
                    </div>
                    <div className='flex flex-col'>
                        {/* <label>Message</label> */}
                        <textarea 
                        name="message" 
                        value={values.message} 
                        onChange={handleChange} 
                        placeholder='Message'
                        className='p-2 border-slate-300 border-2'
                        rows={5}
                         />
                    </div>
                    {success ? <div className='self-center m-2 flex '>
                        <button 
                        className="bg-lime-400 text-black font-bold w-48 py-2 px-4 border-4 border-black" 
                        disabled={success}>
                            <div className='flex justify-center items-center gap-2'>
                            <MdOutlineMarkEmailRead className="scale-[1.3]" /> 
                            <h3>Message sent!</h3>
                            </div>
                        </button>
                    </div> : <div className='self-center m-2'>
                        <button 
                        className=" bg-[#FF6F91] hover:bg-[#F9F871] disabled:cursor-not-allowed disabled:scale-95 disabled:opacity-75 disabled:bg-slate-300 disabled:shadow-none hover:scale-95 hover:shadow-[2px_2px_0_black] transition ease-in-out duration-110 text-black font-bold w-48 py-2 px-4 shadow-[6px_6px_0_black] border-4 border-black"
                        disabled={
                            !values.name || !values.email  || !values.message
                        }
                        >
                            {isLoading ? (<div className='flex justify-center'><FaSpinner className="animate-spin" /></div>) : (<h3>Submit</h3>)}
                        </button>
                        </div>}
                        
                </form>
            </div>
        </Container>
    </div>
  )
}
