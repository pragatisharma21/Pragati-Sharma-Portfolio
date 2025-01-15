
import { AiOutlineCheck } from "react-icons/ai";

const timelineData = [
    {
      title: "10th Grade - Frommans memorial School",
      date: "2017-18",
      description:
        "Completed secondary schooling with a strong academic foundation and excellent performance.",
      isActive: true,
    },
    {
      title: "12th Grade - Frommans memorial School",
      date: "2019-10",
      description:
        "Graduated with a focus on science stream, excelling in core subjects like Mathematics and Physics.",
      isActive: true,
    },
    {
      title: "Engineering - Orientai Institute of Science and Technology",
      date: "2020-2024",
      description:
        "Pursued a Bachelor's degree in Engineering, specializing in Computer Science.",
      isActive: true,
    },
    {
      title: "Web Developer Intern - Sna Bhopal",
      date: "Sept 2023 - Nov 2023",
      description:
        "Worked on various frontend projects, enhancing skills in React and modern web technologies.",
      isActive: true,
    },
    {
      title: "Full Stack Development Course - Masai School",
      date: "July 2024 - Present",
      description:
        "Currently pursuing advanced full-stack development with a focus on MERN stack and Redux.",
      isActive: true,
    },
  ];
  
  const reversedTimelineData = [...timelineData].reverse();

const Timeline = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center  overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div className="w-full max-w-3xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {reversedTimelineData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                    item.isActive ? "is-active" : ""
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-white ${
                      item.isActive
                        ? "bg-emerald-500 text-emerald-50"
                        : "bg-slate-300 text-slate-500"
                    } shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}
                  >
                    <AiOutlineCheck />
                  </div>
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] text-white md:w-[calc(50%-2.5rem)] bg-transparent p-4 rounded border border-slate-200 shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-300">{item.title}</div>
                      <time
                        className={`text-[10px] font-medium ${
                          item.isActive ? "text-indigo-500" : "text-amber-500"
                        }`}
                      >
                        {item.date}
                      </time>
                    </div>
                    <div className="text-slate-400">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
