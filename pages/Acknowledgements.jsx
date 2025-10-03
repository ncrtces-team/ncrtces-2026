const Acknowledgements = () => {
  return (
    <section id="acknowledgements">
      <div className="h-8 w-full"></div>
      <div className="w-full">
        <div className="bg-white px-[5%] md:px-[15%]">
          <div>
            <h1 className="text-[#c00000] pt-16 text-center text-3xl font-[600]">
              ACKNOWLEDGEMENTS
            </h1>
            <div className="w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl"></div>
            <div className="h-12 bg-white w-full"></div>
          </div>

          <div className="max-w-4xl mx-auto pb-16">
            <p className="leading-tight text-[11px] font-sans break-words text-gray-700 text-justify">
              The Microsoft CMT service was used for managing the peer-reviewing
              process for this conference. This service was provided for free by
              Microsoft and they bore all expenses, including costs for Azure
              cloud services as well as for software development and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgements;
