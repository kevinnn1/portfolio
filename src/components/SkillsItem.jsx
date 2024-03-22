import PropTypes from 'prop-types'; 

export const SkillsItem = ({icon: Icon, skillType, skillSet}) =>{
    return (
      <div className="flex justify-center items-center w-full h-[300px]">
        <div className="relative bg-cardBg dark:bg-cardBg-dark flex flex-col  h-full w-full shadow-md shadow-gray-600 dark:shadow-gray-900 rounded-xl group ease-in-out duration-300 transform hover:-translate-y-4 transition hover:bg-buttonBg dark:hover:bg-buttonBg-dark">
          <div className="rounded-xl p-4 text-cardText dark:text-cardText-dark">
            <div className=" flex pb-4 justify-center">
              <Icon size={80} />
            </div>
            <h3 className="text-xl font-bold  text-center">
              {skillType}
            </h3>
            <p className="pb-4 pt-4 italic text-center">{skillSet}</p>
          </div>
        </div>
      </div>
    );
}