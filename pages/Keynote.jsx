const Keynote = () => {
  const speakers = [
    {
      img: "/jagvirSingh.jpg",
      name: "Dr. Jagvir Singh",
      title: "Scientist G",
      subtitle: "Ministry of Earth Sciences, New Delhi",
    },
    {
      img: "/manjuKhari.jpeg",
      name: "Prof. Dr. Manju Khari",
      title: "Professor",
      subtitle: "School of Computer & Systems Sciences, JNU, Delhi",
    },
    {
      img: "/vishalBhatnagar.jpeg",
      name: "Dr. Vishal Bhatnagar",
      title: "Professor and Head",
      subtitle: "NSUT(East Campus), Delhi",
    },
    {
      img: "/sachiNandan.jpeg",
      name: "Dr.Sachi Nandan Mohanty",
      title: "Professor",
      subtitle: "School of CSE, VIT-AP University, Amaravati, AP, India",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-[#e9e9e9] px-[18%]">
        <div>
          <h1 className="text-[#c00000] pt-16 text-center text-3xl font-[600]">
            KEYNOTE SPEAKERS
          </h1>
          <div className="w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl"></div>
        </div>
        <div className="mt-20 pb-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-content-center">
            {speakers.length !== 0 ? (
              speakers.map((speaker, index) => (
                <div key={index} className="text-center font-[700]">
                  <div className="w-[220px] h-[220px] mx-auto">
                    <img
                      className="w-full h-full object-cover rounded-full border-[4px] border-gray-500"
                      src={speaker.img}
                      alt={speaker.name}
                    />
                  </div>
                  <p className="bg-[#c00000] z-[100] rounded-lg py-2 text-white px-3 my-2">
                    {speaker.name}
                  </p>
                  <p>{speaker.title}</p>
                  {speaker.subtitle && <p>{speaker.subtitle}</p>}
                </div>
              ))
            ) : (
              <h2 className="text-center text-xl">To be Announced soon...</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keynote;
