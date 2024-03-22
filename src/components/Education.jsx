import nyu from "../assets/nyu.png";

export const Education = () =>{
    return(
        <div className="flex flex-col sm:flex-row  items-center">
        <img src={nyu} className="h-36 w-36 rounded-xl flex-shrink-0 mr-4 mb-4  hover:scale-105"/>
        <div className="flex flex-col  mb-2">
            <div className=" grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 items-center">
              <span className="           px-2 text-cardText dark:text-cardText-dark order-1 sm:order-1  font-bold">New York University</span>
              <span className="sm:ml-auto px-2 text-cardText dark:text-cardText-dark order-3 sm:order-2  font-normal sm:font-bold italic sm:not-italic">New York City</span>
              <span className="           px-2 text-cardText dark:text-cardText-dark order-2 sm:order-3  sm:font-normal font-bold sm:italic not-italic">Tandon School of Engineering</span>
              <span className="sm:ml-auto px-2 text-cardText dark:text-cardText-dark order-4 sm:order-4  italic">2018-2022</span>
            </div>

          <p className="flex    items-center justify-start text-xs md:text-sm">
            <span className="text-textSub dark:text-textSub-dark text-sm m-1 px-2">
              ▪ Relevant Coursework: Software Engineering, Machine Learning,
              Artificial Intelligence, Linear Algebra, Object Oriented
              Programming
            </span>
          </p>
          <p className="flex    items-center justify-start text-xs md:text-sm">
            <span className="text-textSub dark:text-textSub-dark text-sm m-1 px-2">
              ▪ Studied abroad in Paris, France during the Fall of 2021 and
              Spring of 2022 at NYU’s Paris campus
            </span>
          </p>
        </div>
      </div>
    )
}