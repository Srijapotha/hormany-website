export default function HarmonySection() {
    return (
        <section className="p-[40px_10px_40px_10px] md:p-[6%] bg-[#0F172A]">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#ffffff] mb-6 sm:mb-8 md:mb-12 leading-[35px] sm:leading-[45px] md:leading-[50px]" style={{ fontFamily: "Unbounded" }}>
              Advancement of Harmony Among
              <br />
              All Faiths and Communities
            </h2>
            <p className="text-center text-[#C1C1C1] text-base font-normal leading-relaxed md:-mt-10 -mt-5">
             {`  To advance harmony among all faiths and communities for the public
              benefit by`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-5xl mx-auto min-h-96">
            {/* Top row: space, card, space, card */}
            <div className="hidden lg:block"></div>
            <div className="bg-white py-8 px-4 md:px-6 md:py-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-t-3xl lg:rounded-t-3xl lg:rounded-b-none flex items-center min-h-48">
              <p className="text-base font-medium leading-relaxed text-[#64748B]">
                {`Supporting interfaith and intercultural events and projects that
                promote reconciliation and long-term social cohesion.`}
              </p>
            </div>
            <div className="hidden lg:block"></div>
            <div className="bg-white py-8 px-4 md:px-6 md:py-12  shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-t-3xl lg:rounded-t-3xl lg:rounded-b-none flex items-center min-h-48">
              <p className="text-base font-medium leading-relaxed text-[#64748B]">
                {`Working collaboratively across sectors to strengthen
                understanding and respect between all faiths and communities.`}
              </p>
            </div>

            <div className="bg-white py-8 px-4 md:px-6 md:py-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-b-3xl lg:rounded-b-3xl lg:rounded-t-none flex items-center min-h-48">
              <p className="text-base font-medium leading-relaxed text-[#64748B]">
                {`Encouraging dialogue, co-operation, and friendship between
                people of all faiths, cultures, and community backgrounds.`}
              </p>
            </div>
            <div className="hidden lg:block"></div>
            <div className="bg-white py-8 px-4 md:px-6 md:py-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-b-3xl lg:rounded-b-3xl lg:rounded-t-none flex items-center min-h-48">
              <p className="text-base font-medium leading-relaxed text-[#64748B]">
                {`Providing education and mediation initiatives to reduce conflict
                and build peaceful, sustainable relationships.`}
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>
    )
}