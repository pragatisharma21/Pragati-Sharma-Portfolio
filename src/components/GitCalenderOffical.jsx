import GitHubCalendar from "react-github-calendar";

function GitCalenderOffical() {
  return (
    <>
      <p className="text-center text-xs md:text-base lg:text-lg font-semibold mt-9 md:mt-10 lg:mt-14 tracking-widest">
        GITHUB CALENDAR
      </p>
      <div className="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center mx-auto mt-2 md:mt-5">
        <GitHubCalendar username="pragatisharma21" color="#6B46C1" />
      </div>
    </>
  );
}

export default GitCalenderOffical;
