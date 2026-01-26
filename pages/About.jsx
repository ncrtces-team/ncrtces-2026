import { Campaign } from "@mui/icons-material";
const About = () => {
  return (
    <section id="about" className="w-full  text-white">
      <div className="bg-gradient-to-b from-blue-400 to-blue-600">
        <div className="mt-4 pt-20">
          <div className="relative w-full py-6">
            <h1 className="text-[#c00000] pb-4 text-center text-3xl font-[600]">
              Important Dates
            </h1>
            <div className="w-52 h-[3px] mx-auto mb-5 bg-[#365372] rounded-xl"></div>
            <marquee className="text-xl" direction="left">
              <div className="flex w-[250%] items-center">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 mb-2 shadow-md mr-3">
                  <Campaign className="text-red-700" />
                  <span className="ml-2 text-red-600 font-semibold">News</span>
                </div>
                <p className="ml-2 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-2 mb-2 rounded-md shadow-md mr-2">
                  •{" "}
                  <strong className="tracking-wider">
                    Paper Submission Deadline :{" "}
                  </strong>
                  February 2, 2026
                </p>
              </div>
              <div className="flex w-[500%] items-center">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 mb-2 shadow-md mr-3">
                  <Campaign className="text-red-700" />
                  <span className="ml-2 text-red-600 font-semibold">News</span>
                </div>
                <p className="ml-2 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-2 mb-2 rounded-md shadow-md">
                  •{" "}
                  <strong className="tracking-wider">
                    Notification of acceptance :{" "}
                  </strong>
                  February 4, 2026
                </p>
              </div>
              <div className="flex w-[500%] items-center">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 mb-2 shadow-md mr-3">
                  <Campaign className="text-red-700" />
                  <span className="ml-2 text-red-600 font-semibold">News</span>
                </div>
                <p className="ml-2 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-2 mb-2 rounded-md shadow-md">
                  •{" "}
                  <strong className="tracking-wider">
                    Camera-Ready Submission :{" "}
                  </strong>
                  February 5, 2026
                </p>
              </div>
              <div className="flex w-[250%] items-center">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 mb-2 shadow-md mr-3">
                  <Campaign className="text-red-700" />
                  <span className="ml-2 text-red-600 font-semibold">News</span>
                </div>
                <p className="ml-2 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-2 mb-2 rounded-md shadow-md">
                  •{" "}
                  <strong className="tracking-wider">
                    Registration Deadline:{" "}
                  </strong>
                  February 7, 2026
                </p>
              </div>
              <div className="flex w-[250%] items-center">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 mb-2 shadow-md mr-3">
                  <Campaign className="text-red-700" />
                  <span className="ml-2 text-red-600 font-semibold">News</span>
                </div>
                <p className="ml-2 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-2 mb-2 rounded-md shadow-md">
                  •{" "}
                  <strong className="tracking-wider">
                    Conference Dates :{" "}
                  </strong>
                  February 27-28, 2026
                </p>
              </div>
            </marquee>
          </div>
          <div className=" px-[8%] md:px-[15%]">
            <h1 className="text-[#c00000] pt-6 text-center text-3xl font-[600]">
              CONFERENCE OVERVIEW
            </h1>
            <div className="w-72 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl"></div>
          </div>
          <p className="text-md md:text-xl px-[15%] mt-8 pb-28 text-justify">
            <strong>NCRTCES 2026</strong> aims to address critical and
            unresolved research questions in the domains of climate, energy, and
            sustainability, while fostering innovative approaches and
            technological solutions. The conference will also explore the role
            of Artificial Intelligence and Computational Intelligence in driving
            environmental sustainability and energy efficiency. By bringing
            together researchers, academicians, and industry professionals, the
            conference provides a vibrant platform to present original research
            contributions, exchange knowledge, and engage in meaningful
            dialogue.
            <br />
            Maharaja Surajmal Institute of Technology (MSIT), affiliated with
            Guru Gobind Singh Indraprastha University (GGSIPU), is one of the
            premier engineering institutions in New Delhi. Established with a
            vision to provide excellence in technical education, MSIT has
            consistently focused on fostering innovation, research, and
            entrepreneurship. The institute is known for its strong academic
            environment, modern infrastructure, and a commitment to addressing
            real-world challenges through research and technology.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
