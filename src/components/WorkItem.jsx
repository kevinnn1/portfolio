import PropTypes from 'prop-types'; 
export const WorkItem = ({year, title, location, details, employer}) => {
  return (
<ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
    <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-buttonBg dark:bg-buttonBg-dark rounded-full mt-1.5 -left-1.5 border-white'/>
          <p className='flex    gap-1 md:gap-4  items-center justify-start text-xs md:text-sm'>
            <span className='mr-auto  bg-buttonBg dark:bg-buttonBg-dark text-cardText dark:text-cardText-dark text-sm font-semibold m-1 px-2 py-1 rounded-md'>{employer}</span>
            <span className='ml-auto  bg-buttonBg dark:bg-buttonBg-dark text-cardText dark:text-cardText-dark text-sm font-semibold m-1 px-2 py-1 rounded-md'>{location}</span>
          </p>
          <p className='flex  gap-1 md:gap-4  items-center justify-start text-xs md:text-sm'>
            <span className='mr-auto  bg-buttonBg dark:bg-buttonBg-dark text-cardText dark:text-cardText-dark text-sm font-semibold m-1 px-2 py-1 rounded-md'>{title}</span>
            <span className='ml-auto  bg-buttonBg dark:bg-buttonBg-dark text-cardText dark:text-cardText-dark text-sm font-semibold m-1 px-2 py-1 rounded-md'>{year}</span>
          </p>
        <p className='text-textSub dark:text-textSub-dark my-2 text-base font-normal'>{details}</p>
    </li>
</ol>
  )
}

WorkItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};