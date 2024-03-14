import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaLinkedin, FaGithub} from 'react-icons/fa'


function Main() {
  return (
    <div id='main'>
        <img className='w-screen h-screen object-cover object-left scale-x-[-1]' src="./bg.jpg" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50 dark:bg-black/50' >
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-textHead dark:text-textHead-dark'>I'm Kevin Grajeda</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-textMain dark:text-textSub-dark'>
              I'm a
            <TypeAnimation
              sequence={[
                'Developer',
                1000, 
                'Coder',
                1000,
                'Tech Enthusiast',
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
            </h2>
            <div className='text-textHead dark:text-textHead-dark flex justify-between pt-6 max-w-[100px] w-full ease-in duration-300'>
              <a href='https://www.linkedin.com/in/kevin-grajeda-038039152/' target='_blank'>
                <FaLinkedin  className='cursor-pointer hover:text-textSub dark:hover:text-textSub-dark ' size={40}/>
              </a>
              <a href='https://github.com/kevinnn1'target='_blank'>
                <FaGithub className='cursor-pointer hover:text-textSub dark:hover:text-textSub-dark ' size={40}/>
              </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main