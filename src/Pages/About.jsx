
import "../App.css";
import Timeline from "../components/Timeline";
import GitCalenderOffical from "../components/GitCalenderOffical";

const About = () => {
  return (
    <div className="">
      <div className="pt-24 flex justify-center items-center w-full">
        <div className="border border-white rounded-2xl w-2/3 text-center p-5 text-xl text-white">
          A detail-oriented software developer with experience of designing,
          developing, and deploying enterprise-level applications. Proficient in
          multiple programming languages, software development methodologies.
          Strong problem-solving skills and ability to work effectively in a
          team-based environment.
        </div>
      </div>
      <Timeline />

      <div className="mt-10 pb-10">
        <GitCalenderOffical/>
      </div>
    </div>
  );
};

export default About;
