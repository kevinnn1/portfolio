export const WorkItem = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-buttonBg dark:bg-buttonBg-dark rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='bg-buttonBg dark:bg-buttonBg-dark text-textSub dark:text-textSub-dark inline-block px-2 py-1 font-semibold  rounded-md'>{year}</span>
                <span className='text-buttonBg dark:text-buttonBg-dark text-lg font-semibold'>{title}</span>
                <span className='text-textSub dark:text-textSub-dark my-1 text-sm font-normal leading-none'>{duration}</span>
            </p>
            <p className='text-textSub dark:text-textSub-dark my-2 text-base font-normal'>{details}</p>
        </li>
    </ol>
  )
}

