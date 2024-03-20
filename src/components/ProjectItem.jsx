import PropTypes from 'prop-types'; 
import { HashLink as Link } from 'react-router-hash-link';

export const ProjectItem = ({img, title, description, link}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 dark:shadow-gray-900 rounded-xl group hover:bg-white dark:bg-black transform hover:-translate-y-4 transition'>
        <img src ={img} alt="/" className='rounded-xl group-hover:opacity-60' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-cardText dark:text-cardText-dark  tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 font-bold text-cardText dark:text-cardText-dark bold text-center'>{description}</p>
            <Link to={link}>
                <p className='text-center p-3 rounded-lg bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark font-bold cursor-pointer text-lg'>More Info</p>
            </Link>
        </div>
    </div>
  )
}

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};