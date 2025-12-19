const CallForSpecialSession = () => {
  return (
    <div>
      {/* Placeholder Header for Smooth Scrolling */}

      {/* Main Content */}
      <div id="cfs" className="w-full text-white">
        <div className="bg-gradient-to-t from-blue-400 to-blue-500 px-[8%] md:px-[15%] py-16 shadow-lg">
          {/* Header */}
          <header className="text-center">
            <h2 className="text-[#c00000] text-2xl font-semibold uppercase tracking-wider mb-10">
              <a
                href="/Call for proposals for Special Sessions.docx"
                target="_blank"
                className="underline text-current"
              >
                Call for Special Sessions
              </a>
              <div className="w-32 h-[4px] mx-auto bg-[#365372] rounded-xl mt-2 mb-4"></div>
            </h2>
          </header>

          {/* Invitation */}
          <section className="text-center mb-12">
            <p className="mt-6 text-md md:text-lg">
              Please send your special session proposals in the
              <a
                href="/Special Session Proposal Template - NCRTCES'26.docx"
                target="_blank"
                className="underline px-1"
              >
                <strong>template</strong>
              </a>{" "}
              to
              <a href="mailto:ncrtces2026@msit.in" className="underline px-1">
                ncrtces2026@msit.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CallForSpecialSession;
