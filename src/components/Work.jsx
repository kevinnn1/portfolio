import { WorkItem } from "./WorkItem";

const workData = [
    {
      year: "Mar. 2019 – May 2021",
      title: "Tutor",
      location: "New York City, NY",
      details: [
          "America Reads/Counts hires students to assist teachers across several New York City public schools in the classroom",
          "Worked across several schools in Manhattan, Brooklyn, and the Bronx, helping students in mathematics, reading, writing, and science. Also worked with students individually and in small groups",
          "Assisted teachers in paperwork, grading, class preparation, and classroom management",
      ],
      employer: "America Reads/Counts",
    },
    {
      year: "Jul. 2022 – Aug. 2023",
      title: "Tenant House Maintenance",
      location: "Paterson, NJ; Haledon, NJ",
      details: [
        "Worked on family’s houses fixing regular plumbing, heating, kitchen issues",
        "Renovated rooms within houses which involved painting, deep cleaning, removing/repairing flooring",
      ],
      employer: "Independent",
    },
    {
      year: "Nov. 2023 – Feb. 2024",
      title: "Year-End Temp Generalist",
      location: "Parsippany, NJ",
      details: [
          "Wrapped and bagged Employee W2 and Payroll checks for ADP’s clients",
          "Performed quality assurance for the documents by checking all documents are accounted for and in order",
      ],
      employer: "ADP",
    },
];

export const Work = () => {
    return (
    <>
        {workData.map((item, i) => (
            <WorkItem
              key={i}
              year={item.year}
              title={item.title}
              location={item.location}
              details={item.details}
              employer={item.employer}
            />
          ))}
    </>
    )
}