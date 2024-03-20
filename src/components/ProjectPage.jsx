import mayaImg from '../assets/project1.jpg'
import PropTypes from 'prop-types'; 
import { FaGithub } from 'react-icons/fa';


export const ProjectPage = ({name}) => {
    switch(name){
        case "project1":
            return (
              <div className=" max-w-[1040px] m-auto md:pl-20 p-4 py-24 md:justify-start">
                <span className='md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center pb-12'>
                    <FaGithub />
                    <h1 className='pl-4' >Project 1</h1>
                </span>
                <div className="container mx-auto ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col ">
                    <div className='flex justify-center'>
                      <img
                        src={mayaImg}
                        alt="Project Image"
                        className="rounded-xl  max-w-80 max-h-80  mb-4"
                      />
                    </div>
                        <p className=" text-textHead dark:text-textHead-dark flex justify-center  items-center ">
                            <a href='http://www.github.com' target='_blank'>
                                <span className='bg-buttonBg dark:bg-buttonBg-dark rounded-full px-4 flex items-center hover:scale-110 ease-in-out duration-300'>
                                    View on GitHub:
                                    <FaGithub className='pl-4' size={40}/>
                                </span>
                            </a>
                        </p>

                    </div>
                    <div className="flex flex-col">

                      <p className="text-textSub dark:text-textSub-dark  p-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed suscipit ultrices turpis. In in velit nulla. Nulla
                        facilisi. Nulla nec sapien non lectus gravida blandit.
                        Curabitur suscipit ex in consectetur bibendum. Nam
                        mattis, libero sed dapibus auctor, odio risus tristique
                        sapien, in facilisis enim magna a ex. Duis ultrices,
                        eros vitae volutpat consectetur, elit eros feugiat
                        risus, nec facilisis mauris dui ut lorem. Sed interdum,
                        orci quis feugiat fermentum, lorem enim gravida risus,
                        in placerat justo velit vel ligula. Nullam pulvinar
                        nulla eget ante fringilla, sit amet scelerisque odio
                        mattis.
                      </p>
                      <p className="text-center  text-textHead dark:text-textHead-dark">
                        Tools Used: CSS, HTML, React.js, Tailwind
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
        case "project2":
            return(
            <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
            <h1 className='text-textHead dark:text-textHead-dark text-4xl font-bold '>This is the project 2</h1>
                <p className='text-textSub dark:text-textSub-dark py-8'>
                     How did you get here?
                </p>
                <div className="flex justify-center items-center">
                    <img src="404dog.jpeg"  />
                </div>

             </div>
            )
        case "project3":
            return(
            <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
            <h1 className='text-textHead dark:text-textHead-dark text-4xl font-bold '>This is project 3</h1>
                <p className='text-textSub dark:text-textSub-dark py-8'>
                     How did you get here?
                </p>
                <div className="flex justify-center items-center">
                    <img src="404dog.jpeg"  />
                </div>
                
        </div>
            )
        case "project4":
            return (
                <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
                <h1 className='text-textHead dark:text-textHead-dark text-4xl font-bold '>This is project 4</h1>
                    <p className='text-textSub dark:text-textSub-dark py-8'>
                         How did you get here?
                    </p>
                    <div className="flex justify-center items-center">
                        <img src="404dog.jpeg"  />
                    </div>
    
            </div>

                )
        default: 
                return (
                    <h1>test</h1>
                )
    }
    

}

ProjectPage.propTypes = {
    name: PropTypes.string.isRequired,
}