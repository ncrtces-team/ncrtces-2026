import { useState, useEffect, useRef } from "react";
import "./style.css";

const Committee = () => {
  const [activeCommittee, setActiveCommittee] = useState(null); // Default to 'committee0'
  const [activeTab, setActiveTab] = useState("committee0"); // Default to 'home'
  const listRef = useRef(null);

  const changeTab = (id) => {
    setActiveTab(id);
    // Set active committee based on tab
    if (window.innerWidth < 768) {
      setActiveCommittee(null); // Reset active committee on mobile
    } else {
      setActiveCommittee(id); // Set active committee on desktop
    }
  };

  const handleCommitteeClick = (id) => {
    if (window.innerWidth < 768) {
      setActiveCommittee((prevActiveCommittee) =>
        prevActiveCommittee === id ? null : id
      );
    } else {
      setActiveCommittee(id);
    }
  };

  useEffect(() => {
    const updateActiveCommittee = () => {
      if (window.innerWidth >= 768) {
        setActiveCommittee(activeTab); // Sync active committee with active tab on desktop
      } else {
        setActiveCommittee(null); // Reset active committee on mobile
      }
    };

    updateActiveCommittee();
    window.addEventListener("resize", updateActiveCommittee);
    return () => {
      window.removeEventListener("resize", updateActiveCommittee);
    };
  }, [activeTab]);

  const commiteeNew = [
    {
      id: "advisory",
      members: [
        { name: "Prof. Ashutosh Kr. Singh, Director IIIT Bhopal, India" },
        { name: "Prof. Gulshan Dhamija, COE, GGSIPU, India" },
        { name: "Prof. Pankaj Lathar, COE, DSEU, Delhi, India" },
        { name: "Prof. Vishal Bhatnagar, NSUT, Delhi, India" },
        { name: "Prof. Joan Lu, University of Huddersfield, UK" },
        { name: "Prof. Qiang Xu, University of Huddersfield, UK" },
        { name: "Prof. Rama Krishna, NITTTR Chandigarh" },
        { name: "Prof. D.S. Khushwa, MNIT Allahabad" },
        { name: "Dr. Latesh Mallick, Govt. College of Engg., Nagpur" },
        { name: "Prof. Tejbir Rana, Delhi University" },
        {
          name: "Prof. Sachinandan Mohanty, SCOPE, VIT-AP University, Andhra Pradesh, India",
        },
        { name: "Prof. Manish Kumar, IIIT Allahabad, India" },
        { name: "Prof. Shailender Kumar, DTU, Delhi, India" },
        {
          name: "Prof. Vishal Goyal, Punjabi University, Patiala, Punjab, India",
        },
        { name: "Prof. Mukesh Kumar, UIET, Chandigarh, Punjab, India" },
        { name: "Dr. Deepak Kumar Sharma, IGDTUW, India" },
        { name: "Prof. Prateek Agrawal, SGT University, Haryana, India" },
      ],
    },
  ];
  const committees = [
    {
      id: "committee0",
      name: "Patrons",
      members: [
        { name: "Sh. Kaptan Singh (President) SMES, New Delhi" },
        { name: "Ms. Esha Jakhar, (Vice - President) SMES, New Delhi" },
        {
          name: "Prof. Prem Vrat, (Chairman, Academic Committee) SMES, New Delhi",
        },
        {
          name: "Sh. Karnal Singh, (IPS) Former Director - Enforcement Directorate",
        },
        { name: "Sh. Ajit Singh Chaudhary, (Secretary) SMES, New Delhi" },
        { name: "Sh. Raj Pal Solanki, (Treasurer) SMES, New Delhi" },
        { name: "Sh. S.S. Solanki (Joint Secretary) SMES, New Delhi" },
      ],
    },
    {
      id: "committee1",
      name: "Organising Chair",
      members: [{ name: "Prof. (Dr.) A.K. Srivastava" }],
    },
    {
      id: "committee2",
      name: "Convener",
      members: [{ name: "Prof. (Dr.) Naveen Dahiya" }],
    },
    {
      id: "committee3",
      name: "Co-Conveners",
      members: [{ name: "Dr. Geetika Dhand" }, { name: "Dr. Nishtha Jatana" }],
    },
    {
      id: "committee4",
      name: "Program Committee",
      members: [
        { name: "Prof. (Dr.) Koyel Datta Gupta" },
        { name: "Dr. Priyanka Nandal" },
        { name: "Ms. Bhawna Bhardwaj" },
      ],
    },
    {
      id: "committee5",
      name: "Technical Program Committee",
      members: [
        { name: "Prof. (Dr.) Naresh Kumar" },
        { name: "Dr. Sandeep Kumar" },
        { name: "Dr. Amita Yadav" },
        { name: "Dr. Pooja Kherwa" },
      ],
    },
    {
      id: "committee6",
      name: "Sponsorship/Funding Committee",
      members: [
        { name: "Dr. Kavita Sheoran" },
        { name: "Dr. Navdeep Bohra" },
        { name: "Ms. Shabnam" },
      ],
    },
    {
      id: "committee7",
      name: "Website Committee",
      members: [{ name: "Dr. Vikrant Shokeen" }],
    },
    {
      id: "committee8",
      name: "Finance Committee",
      members: [{ name: "Dr. Sonia Rathee" }, { name: "Dr. Shalu" }],
    },
    {
      id: "committee9",
      name: "Publication Committee",
      members: [
        { name: "Dr. Savita Ahlawat" },
        { name: "Dr. Sapna Malik" },
        { name: "Dr. Neeti Sangwan" },
      ],
    },
    {
      id: "committee10",
      name: "Publicity, Design & Printing",
      members: [{ name: "Dr. Sangeeta" }, { name: "Mr. Deepak" }],
    },
    {
      id: "committee11",
      name: "Stage Committee",
      members: [
        { name: "Dr. Shaily Malik" },
        { name: "Ms. Gunjan" },
        { name: "Ms. Vaani Garg" },
        { name: "Ms. Jyoti" },
      ],
    },
    {
      id: "committee12",
      name: "Hospitality Committee, MSIT",
      members: [
        { name: "Dr. Poonam Dahiya" },
        { name: "Dr. Anshul Pareek" },
        { name: "Ms. Sonica" },
      ],
    },
    {
      id: "committee13",
      name: "Registration Committee, MSIT",
      members: [
        { name: "Dr. Vimal Gaur" },
        { name: "Dr. Vinita Rohilla" },
        { name: "Dr. Medhavi Malik" },
        { name: "Ms. Kirti Dahiya" },
      ],
    },
    {
      id: "committee14",
      name: "Local Organizing Committee, MSIT",
      members: [
        { name: "Prof. Rinky Dwivedi" },
        { name: "Dr. Ravi Choudhary" },
        { name: "Mr. Sushil Kumar" },
        { name: "Dr. Swati Malik" },
      ],
    },
    // {
    //   id: "committee15",
    //   name: "Media Committee, MSIT",
    //   members: [{ name: "Dr. Aman Dahiya" }, { name: "Dr. Sitendar Malik" }],
    // },
    // {
    //   id: "committee16",
    //   name: "Audio/Video Committee, MSIT",
    //   members: [{ name: "Mr. Deepak Goyal" }],
    // },
    // {
    //   id: "committee17",
    //   name: "Internet Committee, MSIT",
    //   members: [{ name: "Dr. Bharti Sharma" }],
    // },
  ];

  const renderMembers = () => {
    const committeeList = activeTab === "committee0" ? committees : commiteeNew;
    return committeeList.map(
      (committee) =>
        activeCommittee === committee.id && (
          <ul key={committee.id} className="text-left">
            {committee.members.map((member, index) => (
              <li
                key={index}
                className="py-2 text-black pl-4 flex items-center transition-all duration-200 hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <span className="inline-block w-2 h-2 bg-[#365372] rounded-full mr-2"></span>
                <span className="font-semibold">{member.name}</span>
              </li>
            ))}
          </ul>
        )
    );
  };

  return (
    <section id="committee" className="committee-section section hauto py-12">
      <div className="w-full">
        <div className="bg-white pt-12 md:px-[10%]">
          <div className="pt-16">
            <h1 className="text-[#c00000] text-center text-3xl font-[600]">
              COMMITTEES
            </h1>
            <div className="w-[100px] h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 mx-auto">
            <button
              className={`mx-auto tab text-lg rounded-lg ${
                activeTab === "committee0"
                  ? "text-white bg-[#365372] "
                  : "text-black border-black bg-white hover:border shadow-lg "
              } w-[80%] py-1`}
              onClick={() => changeTab("committee0")}
            >
              Organising Committee
            </button>
            <button
              className={`mx-auto tab text-lg rounded-lg ${
                activeTab === "advisory"
                  ? "text-white bg-[#365372] "
                  : "text-black bg-white hover:border border-black shadow-lg"
              } w-[80%] py-1`}
              onClick={() => changeTab("advisory")}
            >
              Advisory Committee
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 m-5">
            <div className="w-full md:w-[300px] relative">
              <ul className="space-y-2">
                {activeTab === "committee0"
                  ? committees.map((committee) => (
                      <li key={committee.id} className="relative">
                        <button
                          className={`hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 transition-all duration-200 ease-in-out  focus:outline-none focus:bg-gray-500 lg:w-full md:w-[190px] border border-borderColor ${
                            activeCommittee === committee.id
                              ? "bg-gray-500 text-white"
                              : ""
                          }`}
                          onClick={() => handleCommitteeClick(committee.id)}
                        >
                          {committee.name}
                        </button>
                        <ul
                          id={committee.id}
                          className={`${
                            activeCommittee === committee.id
                              ? "block"
                              : "hidden"
                          } md:hidden bg-white mt-2 rounded-md shadow-lg text-left p-5 border borderColor`}
                        >
                          {committee.members.map((member, index) => (
                            <li
                              key={index}
                              className="py-1 text-black pl-4 flex items-center transition-all duration-200 hover:bg-gray-100 rounded-md"
                            >
                              <span className="inline-block w-2 h-2 bg-[#365372] rounded-full mr-2 shrink-0"></span>
                              <span className="font-semibold">
                                {member.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))
                  : commiteeNew.map((committee) => (
                      <li key={committee.id} className="relative">
                        <button
                          className={`hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 transition-all duration-200 ease-in-out  focus:outline-none focus:bg-gray-500 lg:w-full md:w-[190px] border border-borderColor ${
                            activeCommittee === committee.id
                              ? "bg-gray-500 text-white"
                              : ""
                          }`}
                          onClick={() => handleCommitteeClick(committee.id)}
                        >
                          {committee.id === "advisory"
                            ? "Advisory Committee"
                            : committee.name}
                        </button>
                        <ul
                          id={committee.id}
                          className={`${
                            activeCommittee === committee.id
                              ? "block"
                              : "hidden"
                          } md:hidden bg-white mt-2 rounded-md shadow-lg text-left p-5 border borderColor`}
                        >
                          {committee.members.map((member, index) => (
                            <li
                              key={index}
                              className="py-1 text-black pl-4 flex items-center transition-all duration-200 hover:bg-gray-100 rounded-md"
                            >
                              <span className="inline-block w-2 h-2 bg-[#365372] rounded-full mr-2 shrink-0"></span>
                              <span className="font-semibold">
                                {member.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
              </ul>
            </div>
            <div
              className="md:w-[calc(100%-300px)] border-b md:border-0 border-gray-300 pb-5"
              ref={listRef}
            >
              {renderMembers()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
