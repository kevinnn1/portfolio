import PropTypes from 'prop-types'; 
export const WorkItem = ({year, title, location, details, employer}) => {
  return (
<ol className='flex flex-col  md:flex-row relative border-l border-stone-200'>
    <li className='w-full mb-4 ml-4 items-center'>
        <div className='absolute w-3 h-3 bg-buttonBg dark:bg-buttonBg-dark rounded-full mt-1.5 -left-1.5 border-white'/>
        <div className=' grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 '>
          <span className='           px-2 text-cardText dark:text-cardText-dark order-1 sm:order-1  font-bold'>{employer}</span>
          <span className='sm:ml-auto px-2 text-cardText dark:text-cardText-dark order-3 sm:order-2  font-normal sm:font-bold italic sm:not-italic'>{location}</span>
          <span className='           px-2 text-cardText dark:text-cardText-dark order-2 sm:order-3  sm:font-normal font-bold sm:italic not-italic'>{title}</span>
          <span className='sm:ml-auto px-2 text-cardText dark:text-cardText-dark order-4 sm:order-4  italic'>{year}</span>
        </div>
        <div className='flex  selection:text-textSub dark:text-textSub-dark mb-2 m-1 px-2 font-normal   items-center justify-start text-xs md:text-sm'>  
          <ul className="list-disc">
            {details.map((detail, index) => (
              <li key={index} className='text-textSub dark:text-textSub-dark text-sm m-1 px-2'>{detail}</li>
            ))}
          </ul>
        </div>
    </li>
</ol>
  )
}

WorkItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  employer: PropTypes.string.isRequired
};