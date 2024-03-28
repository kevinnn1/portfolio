import PropTypes from 'prop-types'; 
import { FaGithub } from 'react-icons/fa';

const colorMap = {
    'C++': 'bg-red-500',
    'C': 'bg-red-500', 
    'C#': 'bg-red-500', 
    'Java': 'bg-red-500', 
    'Python': 'bg-red-500', 
    'JavaScript': 'bg-red-500', 
    'Haskell': 'bg-red-500',

    'Windows': 'bg-orange-500', 
    'Linux': 'bg-orange-500', 
    'iOS': 'bg-orange-500',

    'HTML': 'bg-yellow-500', 
    'CSS': 'bg-yellow-500', 
    'Tailwind': 'bg-yellow-500',
    'Node.js': 'bg-yellow-500',
    'React': 'bg-yellow-500', 
    'Django': 'bg-yellow-500', 
    'REST': 'bg-yellow-500',
    'SQL': 'bg-yellow-500', 
    'UI/UX': 'bg-yellow-500', 
    'Heroku': 'bg-yellow-500',
    'Wordpress': 'bg-yellow-500',
    'GitHub Pages': 'bg-yellow-500',

    'Unity': 'bg-green-500', 
    'emulation': 'bg-green-500', 
    'video game console modding': 'bg-green-500',

    'Git': 'bg-blue-500', 
    'GitHub': 'bg-blue-500', 
    'NPM' : 'bg-blue-500',

    'Dreamweaver': 'bg-purple-500', 
    'Flash': 'bg-purple-500', 
    'Photoshop': 'bg-purple-500', 
    'Premiere': 'bg-purple-500', 

    'MS Word': 'bg-rose-500', 
    'MS Excel': 'bg-rose-500', 
    'MS PowerPoint': 'bg-rose-500', 
    'MS Access': 'bg-rose-500', 

  };

export const ProjectPage = ({icon: Icon, name, image, description, link, tools}) => {
    return (
        <div className=" max-w-[1040px] m-auto md:pl-20 p-4 pt-24 md:justify-start">
          <span className='md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center md:text-4xl text-2xl font-bold text-center pb-12'>
              <Icon />
              <h1 className='pl-4' >{name}</h1>
          </span>
          <div className="container mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col ">
              <div className='flex justify-center'>
                <img src={image} alt="Project Image" className="rounded-xl  h-full sm:h-96 w-full  mb-4 "/>
              </div>
                  <p className=" text-textHead dark:text-textHead-dark flex justify-center  items-center ">
                      <a href={link} target='_blank'>
                          <span className='bg-buttonBg dark:bg-buttonBg-dark rounded-full px-4 mt-4 flex items-center hover:scale-110 ease-in-out duration-300'>
                              View on GitHub:
                              <FaGithub className='pl-4' size={40}/>
                          </span>
                      </a>
                  </p>
              </div>
              <div className="flex flex-col">

                <p className="text-textSub dark:text-textSub-dark  pl-4 ">
                  {description}
                </p>
                <div className=" text-textHead flex dark:text-textHead-dark pl-4 pt-4">
                  <div className='flex flex-wrap'>
                  <div className='ml-1 pr-4'>
                        Utilizes:
                    </div>
                  {tools.tools.map((item, index) => (
                    <div className={`flex ${colorMap[item] || 'bg-buttonBg dark:bg-buttonBg-dark'} text-white rounded-xl mx-1 px-4 mb-2`} key={index}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

ProjectPage.propTypes = {
    icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tools: PropTypes.object.isRequired,
};