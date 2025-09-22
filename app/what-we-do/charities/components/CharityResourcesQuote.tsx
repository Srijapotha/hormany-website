export default function CharityResourcesQuote() {
  return (
    <section className="p-[40px_10px_40px_10px] md:p-[4%] bg-white">
      <div className="mx-auto px-5 max-w-5xl text-center flex flex-col items-center bg-white">
        {/* Header */}
        <h2 className="text-blue-500 text-lg md:text-xl font-semibold mb-8 md:mb-6">
          Explore our Resources for Charities
        </h2>
        
        {/* Quote */}
        <blockquote className="mb-6 md:mb-8 max-w-[790px]">
          <p className="text-xl font-medium text-gray-900 leading-relaxed mb-4">
            &quot;{`No one can whistle a symphony. It takes a whole orchestra to play it.`}&quot;
          </p>
          <p className="text-xl text-end text-gray-700 font-medium">
            — H.E. Luccock.
          </p>
        </blockquote>
        
        {/* Decorative line */}
        <div className="w-80 h-px bg-[#2E6BE6] mx-auto mb-8 md:mb-10"></div>
        
        {/* Supporting text */}
        <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          <p>
           {` People are the backbone of successful organisations. A team driven by a common goal will fuel the efforts, help push through, and achieve unimaginable results.`}
          </p>
          <p>
            {`Our platform provides volunteers and volunteering resources across various services and sectors.`}
          </p>
        </div>
      </div>
    </section>
  );
}