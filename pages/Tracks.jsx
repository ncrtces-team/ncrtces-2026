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
      title: "Track I: Climate Change and Extreme Weather ",
      items: [
        "Climate variability, adaptation, and mitigation strategies",
        "Impact of extreme weather events on ecosystems and infrastructure",
        "Climate change modelling and prediction techniques",
        "Risk assessment frameworks for climate-induced disasters",
        "Hydrological extremes: floods, droughts, and cyclones",
        "Policies, governance, and resilience planning for climate adaptation",
        "Computer Science sub-track: Simulation tools and data-driven climate analysis",
      ],
    },
    {
      id: "track2",
      title: "Track II: Energy Efficiency and Conservation",
      items: [
        "Renewable and clean energy technologies",
        "Energy efficiency and conservation methods",
        "Smart grids and distributed energy systems",
        "Energy economics, policy, and sustainability",
        "Greenhouse gas emissions and carbon capture technologies",
        "Integration of AI, IoT, and cloud computing in energy systems",
        "Computer Science sub-track: Energy data analytics and optimization algorithms",
      ],
    },
    {
      id: "track3",
      title: "Track III: Weather Forecasting & Information Management",
      items: [
        "Numerical weather prediction models",
        "Remote sensing and satellite data applications",
        "Ensemble forecasting and uncertainty quantification",
        "Big data management in meteorology",
        "Real-time data visualization and dissemination systems",
        "Cloud-based and edge computing solutions for weather data",
        "Computer Science sub-track: Machine learning approaches for forecasting accuracy",
      ],
    },
    {
      id: "track4",
      title: "Track IV: Sustainability, Environment & Ecosystem Management",
      items: [
        "Sustainable development and low-carbon innovations",
        "Circular economy and waste management",
        "Environmental impact assessment and lifecycle analysis",
        "Water, food, and energy nexus",
        "Sustainable urban planning and smart cities",
        "Green computing and sustainable ICT practices",
        "Computer Science sub-track: Data-driven decision support systems for sustainability",
      ],
    },
    {
      id: "track5",
      title: "Track V: Artificial Intelligence & Machine Learning",
      items: [
        "AI models for environmental and climate applications",
        "Deep learning for satellite image analysis",
        "Predictive analytics for disaster management",
        "Reinforcement learning in energy optimization",
        "Hybrid AI models for environmental forecasting",
        "Ethical AI and explainability in environmental applications",
        "Computer Science sub-track: High-performance computing and algorithmic efficiency",
      ],
    },
    {
      id: "track6",
      title:
        "Track VI: Computer Science Applications in Climate Data and Weather Forecasting",
      items: [
        "Cloud computing platforms for climate data processing",
        "Big data frameworks for environmental datasets",
        "Data mining and visualization for weather patterns",
        "AI/ML-based prediction systems for climate anomalies",
        "Blockchain applications in environmental data integrity",
        "Cybersecurity in climate and weather information systems",
        "Software architectures for integrated climate information management",
      ],
    },
    {
      id: "track7",
      title: "Track VII: Recycling, Reuse & Resource Recovery",
      items: [
        "Advanced materials recovery (plastics, metals, e-waste)",
        "Innovative recycling technologies (chemical, mechanical, thermal)",
        "Water recycling & wastewater reclamation",
      ],
    },
    {
      id: "track8",
      title: "Track VIII: Waste-to-Value Innovations",
      items: [
        "Bioenergy from agricultural, municipal & industrial waste",
        "Conversion of waste to fuels, chemicals & bioproducts",
        "Startups, entrepreneurship & scalable waste-to-value models",
      ],
    },
    {
      id: "track9",
      title: "Track IX: Lightning Science, Impacts & Safety Technologies",
      items: [
        "Lightning detection, monitoring & prediction systems",
        "Impacts of lightning on infrastructure, aviation & power systems",
        "Lightning protection technologies & standards",
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
