import React from 'react'
import { FaLaravel } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
        <h1 className='text-textHead dark:text-textHead-dark text-4xl font-bold text-left'>Contact</h1>
        <form action="" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='text-textSub dark:text-textSub-dark uppercase text-sm py-2'>Name</label>
                    <input className='bg-inputBg dark:bg-inputBg-dark border-2 rounded-lg p-3 flex border-buttonBg dark:border-buttonBg-dark' type="text" name='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-textSub dark:text-textSub-dark uppercase text-sm py-2'>Phone</label>
                    <input className='bg-inputBg dark:bg-inputBg-dark border-2 rounded-lg p-3 flex border-buttonBg dark:border-buttonBg-dark' type="text" name='phone'/>
                </div>

            </div>
            <div className='flex flex-col'>
                <label className='text-textSub dark:text-textSub-dark uppercase text-sm py-2'>Email</label>
                <input className='bg-inputBg dark:bg-inputBg-dark border-2 rounded-lg p-3 flex border-buttonBg dark:border-buttonBg-dark' type="email" name="email"/>
            </div>
            <div className='flex flex-col'>
                <label className='text-textSub dark:text-textSub-dark uppercase text-sm py-2'>Subject</label>
                <input className='bg-inputBg dark:bg-inputBg-dark border-2 rounded-lg p-3 flex border-buttonBg dark:border-buttonBg-dark' type="email" name="subject" />
            </div>
            <div className='flex flex-col'>
                <label className='text-textSub dark:text-textSub-dark uppercase text-sm py-2'>Message</label>
                <textarea className='bg-inputBg dark:bg-inputBg-dark border-2 rounded-lg p-3 border-buttonBg dark:border-buttonBg-dark' rows='10' name='message'></textarea>
            </div>
            <button className='bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact