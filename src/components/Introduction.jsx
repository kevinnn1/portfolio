import { TypeAnimation } from "react-type-animation";

export const Introduction = () => {
  return (
    <div className="p-4">
      <h1 className="lgxl:text-5xl md:text-3xl text-4xl font-bold text-cardText dark:text-cardText-dark">
        Hello!
      </h1>
      <h1 className="lgxl:text-5xl md:text-3xl text-4xl font-bold text-cardText dark:text-cardText-dark">
        I&apos;m Kevin Grajeda
      </h1>
      <h2 className="flex sm:text-3xl text-2xl   text-cardText dark:text-cardText-dark">
        I&apos;m a
        <TypeAnimation
          sequence={["developer", 1000, "coder", 1000, "tech enthusiast", 1000]}
          wrapper="div"
          speed={50}
          style={{ fontSize: "1em", paddingLeft: "8px" }}
          repeat={Infinity}
        />
      </h2>
    </div>
  );
};
