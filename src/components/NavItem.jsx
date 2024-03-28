import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

export const NavItem = ({ icon: Icon, link, title, handleClick, mobile }) => {
  const isPdf = link.toLowerCase().endsWith(".pdf");
  if (isPdf) {
    if (mobile) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-[75%] flex justify-center rounded-full  bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark shadow-lg shadow-gray-400 dark:shadow-gray-900 m-2 p-4 cursor-pointer hover:bg-bgMain hover:dark:bg-bgMain-dark hover:scale-110 ease-in-out duration-300">
          <Icon size={20} />
          <span className="pl-4">
            {title}
          </span>
        </a>
      );
    }
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="bg-buttonBg dark:bg-buttonBg-dark  text-textHead dark:text-textHead-dark space-x-2 flex      p-4 cursor-pointer hover:bg-bgMain hover:dark:bg-bgMain-dark ease-in-out duration-300">
        <div className="flex hover:scale-110 ease-in-out duration-300">
          <Icon size={20} />
          <span className="pl-2">
            {title}
          </span>
        </div>
      </a>
    );
  } else {
    if (mobile) {
      return (
        <Link to={link} onClick={handleClick} className="w-[75%] flex justify-center rounded-full  bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark shadow-lg shadow-gray-400 dark:shadow-gray-900 m-2 p-4 cursor-pointer hover:bg-bgMain hover:dark:bg-bgMain-dark hover:scale-110 ease-in-out duration-300">
          <Icon size={20} />
          <span className="pl-4">
            {title}
          </span>
        </Link>
      );
    }
    return (
      <Link to={link} onClick={handleClick} className="bg-buttonBg dark:bg-buttonBg-dark  text-textHead dark:text-textHead-dark space-x-2 flex p-4 cursor-pointer hover:bg-bgMain hover:dark:bg-bgMain-dark ease-in-out duration-300 ">
        <div className="flex hover:scale-110 ease-in-out duration-300">
          <Icon size={20} />
          <span className="pl-2 ">
            {title}
          </span>
        </div>
      </Link>
    );
  }
};

NavItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  mobile: PropTypes.bool.isRequired,
};
