const Sponsors = () => {
  return (
    <div>
      <div className="w-full my-8" id="sponsors">
        <div className=" bg-white pt-16">
          <div className="pt-16">
            <h1 className="text-[#c00000] text-center text-3xl font-[600] ">
              CONFERENCE PARTNERS
            </h1>
            <div className="w-48 h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl"></div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <div className="flex flex-col justify-center items-center bg-white w-32 min-w-32 md:w-1/4 m-8 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.15)] min-h-[300px]">
              <img
                src="3b-realty.png"
                alt="Sponsor logo"
                className="w-40 h-auto object-contain mb-8"
              />
              <div className="text-center text-2xl font-semibold">
                3B REALTY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
