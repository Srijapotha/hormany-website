export default function ReliefSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="text-center md:text-start mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Relief of Those in Need
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto md:mx-0 leading-relaxed">
            To relieve the needs of individuals who have suffered hate crime,
            discrimination, or social exclusion due to faith, ethnicity, or
            community identity by
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-5xl mx-auto">
          {/* Practical Assistance */}
          <div className="px-4 md:px-6 border-r-[3px] border-gray-200 last:border-r-0">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3 relative inline-block pb-3">
                <span className="relative z-10">
                  Practical{" "}
                  <span className="relative inline-block">
                    Assistance
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400/60 transform -rotate-1 scale-y-150"></span>
                  </span>
                </span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed pr-5">
              Offering support services, grants, or practical assistance.
            </p>
          </div>

          {/* Recovery Support */}
          <div className="px-4 md:px-6 border-r-[3px] border-gray-200 last:border-r-3">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3 relative inline-block pb-3">
                <span className="relative z-10">
                  Recovery{" "}
                  <span className="relative inline-block">
                    Support
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-green-400/60 transform -rotate-1 scale-y-150"></span>
                  </span>
                </span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed pr-5">
              Helping victims and their families recover, integrate, and rebuild
              confidence through sustainable support programmes.
            </p>
          </div>

          {/* Partner Services */}
          <div className="px-4 md:px-6 border-r-[3px] border-gray-200 last:border-r-3">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3 relative inline-block pb-3">
                <span className="relative z-10">
                  Partner{" "}
                  <span className="relative inline-block">
                    Services
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400/60 transform -rotate-1 scale-y-150"></span>
                  </span>
                </span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed pr-5">
              Supporting partner organisations that deliver counselling, crisis
              relief, or rehabilitation services.
            </p>
          </div>

          {/* Joint Relief */}
          <div className="px-4 md:px-6">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3 relative inline-block pb-3">
                <span className="relative z-10">
                  Joint{" "}
                  <span className="relative inline-block">
                    Relief
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400/60 transform -rotate-1 scale-y-150"></span>
                  </span>
                </span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed pr-5">
              Collaborating with local authorities, faith groups, and civil
              society to provide joined-up and long-term relief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
