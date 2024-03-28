import { MdPerson } from "react-icons/md";

export const About = () => {
  return (
    <div className="p-4 rounded-xl">
      <span className="text-textHead dark:text-textHead-dark md:justify-start justify-center flex text-4xl font-bold text-center">
        <MdPerson />
        <h1 className="pl-4">About Me</h1>
      </span>
      <p className="text-textSub dark:text-textSub-dark pt-2">
        I am a graduate of New York University's Tandon School of Engineering
        with a degree in Computer Science and a minor in Mathematics. During my
        time at NYU, I developed a large skillset in various fields of computer
        science, including AI, game development, and app development. I hope
        that the software I create for my career and personal projects can be
        enjoyed by its users. During my free time, I enjoy watching soccer, playing
        video games, and reading.
      </p>
    </div>
  );
};
