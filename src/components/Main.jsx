import { About } from "./About";
import { Contact } from "./Contact";
import { Introduction } from "./Introduction";

function Main() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-[800px] md:h-screen">
        <img className="w-full h-full object-cover object-right" src="./bg.jpg" alt="Background"/>
        <div className="absolute top-0 left-0 w-full h-full bg-white/20 dark:bg-black/50">
          <div className="max-w-[1440px] m-auto h-full p-2 flex justify-center items-center">
            <div className="md:hidden flex flex-col justify-start items-center bg-buttonBg/50 dark:bg-buttonBg-dark/50 rounded-xl">
              <Introduction />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[700px] gap-1 mt-4 md:mt-0 m-4 pl-4 md:items-start items-center">
        <div className="hidden md:block mt-16 flex-col">
          <Introduction />
        </div>
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default Main;
