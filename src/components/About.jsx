import {BsPerson} from 'react-icons/bs'

export const About = () =>{
  return (
    <div  className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <span className='md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center'>
            <BsPerson />
            <h1 className='pl-4' >About Me</h1>
        </span>
        <p className="text-textSub dark:text-textSub-dark py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia illo harum adipisci hic architecto excepturi vitae ex dolorum distinctio sed repellat blanditiis dolorem similique debitis quisquam quis, voluptate doloribus pariatur?
        </p>
    </div>
  )
}

