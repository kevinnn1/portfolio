import { TypeAnimation } from "react-type-animation";
import { About } from "./About";
import { Contact } from "./Contact";

function Main() {
  return (
    <div>
      <img className="w-screen h-screen  object-cover object-left" src="./bg.jpg" alt=""/>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 dark:bg-black/50">
        <div className="max-w-[1440px] m-auto h-full  p-4 flex flex-col md:flex-row  justify-center  items-center">
          <div className="flex flex-col md:items-start p-4 md:m-0 m-4 mt-12 whitespace-nowrap justify-start items-center bg-buttonBg/50 dark:bg-buttonBg-dark/50 rounded-xl">
            <h1 className="sm:text-5xl text-4xl font-bold text-cardText dark:text-cardText-dark">
              Hello!
            </h1>
            <h1 className="sm:text-5xl text-4xl font-bold text-cardText dark:text-cardText-dark">
              I&apos;m Kevin Grajeda
            </h1>
            <h2 className="flex sm:text-3xl text-2xl pt-0 md:pt-56 text-cardText dark:text-cardText-dark">
              I&apos;m a
              <TypeAnimation sequence={["Developer", 1000, "Coder", 1000, "Tech Enthusiast", 1000,]} wrapper="div" speed={50} style={{ fontSize: "1em", paddingLeft: "5px" }} repeat={Infinity}/>
            </h2>
          </div>
          <div className="flex flex-col  gap-4 md:ml-4">
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;