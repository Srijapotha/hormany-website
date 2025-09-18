export default function HarmonySection() {
    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Advancement of Harmony Among
              <br />
              All Faiths and Communities
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              To advance harmony among all faiths and communities for the public
              benefit by
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-5xl mx-auto min-h-96">
            {/* Top row: space, card, space, card */}
            <div className="hidden lg:block"></div>
            <div className="bg-white py-8 px-4 md:px-6 md:py-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-t-3xl lg:rounded-t-3xl lg:rounded-b-none flex items-center min-h-48">
              <p className="text-gray-600 text-sm leading-relaxed">
                Supporting interfaith and intercultural events and projects that
                promote reconciliation and long-term social cohesion.
              </p>
            </div>
            <div className="hidden lg:block"></div>
            <div className="bg-white py-8 px-4 md:px-6 md:py-12  shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-t-3xl lg:rounded-t-3xl lg:rounded-b-none flex items-center min-h-48">
              <p className="text-gray-600 text-sm leading-relaxed">
                Working collaboratively across sectors to strengthen
                understanding and respect between all faiths and communities.
              </p>
            </div>

            <div className="bg-white py-8 px-4 md:px-6 md:py-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-b-3xl lg:rounded-b-3xl lg:rounded-t-none flex items-center min-h-48">
              <p className="text-gray-600 text-sm leading-relaxed">
                Encouraging dialogue, co-operation, and friendship between
                people of all faiths, cultures, and community backgrounds.
              </p>
            </div>
            <div className="hidden lg:block"></div>
            <div className="bg-white py-8 px-4 md:px-6 md:py-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-b-3xl lg:rounded-b-3xl lg:rounded-t-none flex items-center min-h-48">
              <p className="text-gray-600 text-sm leading-relaxed">
                Providing education and mediation initiatives to reduce conflict
                and build peaceful, sustainable relationships.
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>
    )
}