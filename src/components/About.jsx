import { MdPerson } from "react-icons/md";

export const About = () =>{
  return (
    <div  className='max-w-[500px]   p-4 bg-buttonBg/50 dark:bg-buttonBg-dark/50 rounded-xl '>
        <span className=' md:justify-start justify-center text-textHead dark:text-textHead-dark flex  items-center text-4xl font-bold text-center'>
            <MdPerson />
            <h1 className='pl-4' >About Me</h1>
        </span>
        <p className="text-textSub text-center dark:text-textSub-dark py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia illo harum adipisci hic architecto excepturi vitae ex dolorum distinctio sed repellat blanditiis dolorem similique debitis quisquam quis, voluptate doloribus pariatur?
        </p>
    </div>
  )
}



