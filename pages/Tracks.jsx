import { useState, useEffect } from "react";
import "./style.css";

const Tracks = () => {
  const [activeTrack, setActiveTrack] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to toggle the dropdown menu for mobile view
  const toggleDropdown = (id) => {
    if (isMobileView) {
      setActiveTrack((prevActiveTrack) => (prevActiveTrack === id ? null : id));
    } else {
      setActiveTrack(id);
    }
  };

  useEffect(() => {
    const updateActiveTrack = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);

      if (!isMobile) {
        setActiveTrack("track1");
      } else {
        setActiveTrack(null);
      }
    };

    updateActiveTrack();
    window.addEventListener("resize", updateActiveTrack);
    return () => {
      window.removeEventListener("resize", updateActiveTrack);
    };
  }, []);

  const tracks = [
    {
      id: "track1",
      title: "Track I: Climate Change, Extreme Events, and Risk Management",
      items: ["Climate Change", "Extreme Events", "Risk Management"],
    },
    {
      id: "track2",
      title:
        "Track II: Advanced Weather Forecasting, Remote Sensing, and Data Management",
      items: [
        "Advanced Weather Forecasting",
        "Remote Sensing",
        "Data Management",
      ],
    },
    {
      id: "track3",
      title:
        "Track III: Carbon Neutrality, Net Zero Pathways, Low-Carbon Innovations, and Emerging Technologies",
      items: [
        "Carbon Neutrality",
        "Net Zero Pathways",
        "Low-Carbon Innovations",
        "Emerging Technologies",
      ],
    },
    {
      id: "track4",
      title: "Track IV: Climate Modelling, Simulation, and Big Data Analytics",
      items: ["Climate Modelling", "Simulation", "Big Data Analytics"],
    },
    {
      id: "track5",
      title:
        "Track V: Smart Energy Systems, Sustainable Power Management, and Computational Intelligence",
      items: [
        "Smart Energy Systems",
        "Sustainable Power Management",
        "Computational Intelligence",
      ],
    },
    {
      id: "track6",
      title:
        "Track VI: Artificial Intelligence, Machine Learning, and Data-Driven Sustainability",
      items: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data-Driven Sustainability",
      ],
    },
  ];

  return (
    <section id="track" className="tracks-section section hauto">
      <div className="w-full">
        <div className="bg-white pt-12 md:px-[10%]">
          <div className="pt-16">
            <h1 className="text-[#c00000] text-center text-3xl font-[600]">
              TRACKS
            </h1>
            <div className="w-[100px] h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8"></div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 m-5">
            <div className="w-full md:w-[300px] relative flex">
              <ul className="space-y-2 flex flex-col justify-around px-2">
                {tracks.map((track) => (
                  <li key={track.id} className="relative">
                    <button
                      className={`hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 md:w-[190px] lg:w-full border border-borderColor ${
                        activeTrack === track.id ? "bg-gray-500 text-white" : ""
                      }`}
                      onClick={() => toggleDropdown(track.id)}
                    >
                      {track.title}
                    </button>

                    <ul
                      id={track.id}
                      className={`${
                        activeTrack === track.id ? "block" : "hidden"
                      } md:hidden bg-white mt-2 rounded-md shadow-lg text-left p-5 border borderColor`}
                    >
                      {track.items.map((item, index) => (
                        <li
                          key={index}
                          className={`py-2 text-black pl-2 flex items-center transition-all duration-200 hover:bg-gray-100 rounded-md cursor-pointer ${
                            item.startsWith("1.") || item.startsWith("2.")
                              ? "pl-4"
                              : ""
                          }`}
                        >
                          <span
                            className="font-semibold"
                            style={{ whiteSpace: "pre-wrap" }}
                            dangerouslySetInnerHTML={{
                              __html: item.replace(
                                /Special Session/g,
                                (match) =>
                                  `<span class="text-red-600">${match}</span>`
                              ),
                            }}
                          ></span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block mt-4 md:mt-0 w-full md:w-[800px] bg-white rounded-md shadow-lg p-5 border border-gray-300">
              {tracks.map(
                (track) =>
                  activeTrack === track.id && (
                    <ul key={track.id} className="text-left">
                      {track.items.map((item, index) => (
                        <li
                          key={index}
                          className={`py-2 text-black pl-2 flex items-center transition-all duration-200 hover:bg-gray-100 rounded-md cursor-pointer`}
                        >
                          <span className="inline-block w-2 h-2 bg-[#365372] rounded-full mr-2 shrink-0"></span>

                          <span
                            className="font-semibold"
                            style={{ whiteSpace: "pre-wrap" }}
                            dangerouslySetInnerHTML={{
                              __html: item.replace(
                                /Special Session/g,
                                (match) =>
                                  `<span class="text-blue-600">${match}</span>`
                              ),
                            }}
                          ></span>
                        </li>
                      ))}
                    </ul>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
