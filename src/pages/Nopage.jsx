import { ImConfused } from "react-icons/im";

export function Nopage() {
    return (
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
                <span className='md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center pb-12'>
                    <ImConfused />
                    <h1 className='pl-4' >404 Page Not Found</h1>
                </span>
                <p className='text-textSub dark:text-textSub-dark pb-8'>
                     How did you get here?
                </p>
                <div className="flex justify-center items-center">
                    <img src="404dog.jpeg"  />
                </div>

        </div>
      )
}
