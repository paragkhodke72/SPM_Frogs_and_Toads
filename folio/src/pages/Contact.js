import React, { useEffect, useState } from 'react';

const SuccessModal = ({ open, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 2000)
        return () => clearTimeout(timer);
    }, [open, onClose])
    return <div className={`${open ? 'fixed': 'hidden'} h-full w-full flex justify-center items-center`}>
        <div className="p-8 text-center bg-black shadow-2xl rounded-lg">
            <h1 className="text-xl text-purple-500">Your message has been sent successfully!</h1>
        </div>
    </div>
}
export default () => {
    const [{
        name,
        email,
        message
    }, setContact] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [open, setOpen] = useState(false)

    const handleChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        setContact(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true)
    }

    return <>
        <SuccessModal open={open} onClose={() => setOpen(false)} />
        <form className="p-12 flex-1 min-h-screen flex justify-center items-center flex-col" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold text-purple-500 self-center mb-12">Contact</h1>
            <label className="w-full xs:w-full xl:w-1/3 mb-2">Name</label>
            <input value={name} className="w-full xs:w-full xl:w-1/3 mb-6 bg-purple-200 p-2 rounded-lg" type="text" name="name" onChange={handleChange} required />
            <label className="w-full xs:w-full xl:w-1/3 mb-2">Email</label>
            <input value={email} className="w-full xs:w-full xl:w-1/3 mb-6  bg-purple-200 p-2 rounded-lg" type="email" name="email" onChange={handleChange} required />
            <label className="w-full xs:w-full xl:w-1/3 mb-2">Message</label>
            <textarea value={message} className="w-full xs:w-full xl:w-1/3 h-64 bg-purple-200 p-2 rounded-lg" name="message" onChange={handleChange} required />
            <button className="p-3 w-full xs:w-full xl:w-1/3 bg-purple-700 rounded-lg mt-6 text-white">Submit</button>
        </form>
    </>
}