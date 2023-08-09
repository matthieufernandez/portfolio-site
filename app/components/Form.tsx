"use client"

import React, { useEffect } from 'react'
import Container from './Container'
import Button from './Button'
import { useState } from 'react'

const initValues = {name: "", email: "", message: ""};

const initState = {values: initValues};

export default function Form() {

    const [form, setForm] = useState(initState);

    const {values} = form;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setForm((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [e.target.name]: e.target.value
        }
    }))

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <div className='flex justify-center items-center'>
        <Container>
            <div className='p-4 w-96'>
                
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                    <h1 className='text-4xl font-bold self-center'>Contact</h1>
                    <div className='flex flex-col'>
                        {/* <label>Name</label> */}
                        <input 
                        type="text" 
                        name="name" value={values.name} 
                        onChange={handleChange} 
                        placeholder='Name'
                        className='p-2' 
                        />
                    </div>
                    <div className='flex flex-col'>
                        {/* <label>Email</label> */}
                        <input 
                        type="email" 
                        name="email" value={values.email} 
                        onChange={handleChange} 
                        placeholder='Email'
                        className='p-2'
                         />
                    </div>
                    <div className='flex flex-col'>
                        {/* <label>Message</label> */}
                        <textarea 
                        name="message" 
                        value={values.message} 
                        onChange={handleChange} 
                        placeholder='Message'
                        className='p-2'
                         />
                    </div>
                    <div className='self-center m-2'>
                    <Button classes="!p-2 !w-48">
                        Submit
                    </Button>
                    </div>
                </form>
            </div>
        </Container>
    </div>
  )
}
