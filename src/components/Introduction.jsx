import { TypeAnimation } from "react-type-animation";

export const Introduction = () => {
  return (
    <div className="p-4">
      <h1 className="lgxl:text-6xl md:text-5xl text-4xl font-bold pt-0 md:pt-4 text-cardText dark:text-cardText-dark">
        Hello!
      </h1>
      <h1 className="lgxl:text-6xl md:text-5xl text-4xl font-bold text-cardText dark:text-cardText-dark">
        I&apos;m Kevin Grajeda
      </h1>
      <h2 className="flex lgxl:text-3xl md:text-xl text-2xl  text-cardText dark:text-cardText-dark">
        <TypeAnimation
          sequence={["Software Engineering", 1000, "Front End Development", 1000, "Video Games",  1000, "Artificial Intelligence", 1000]}
          wrapper="div"
          speed={50}
          style={{ fontSize: "1em", paddingLeft: "0px" }}
          repeat={Infinity}
        />
      </h2>
    </div>
  );
};
