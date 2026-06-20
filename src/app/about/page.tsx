import Image from "next/image";

export const metadata = {
  title: "About Us | Luxe Estates",
  description: "Learn more about our agent and company history.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Agent Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[600px] w-full rounded-sm overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Lead Agent Usman Ali" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-accent text-sm tracking-widest uppercase font-medium mb-4">Lead Agent</h2>
            <h1 className="text-5xl font-heading text-primary mb-6">Usman Ali</h1>
            <p className="text-xl text-primary/80 font-light italic mb-8">
              "Connecting discerning clients with extraordinary properties across Pakistan for over 15 years."
            </p>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                With over a decade and a half of experience in the luxury real estate market, Usman Ali has established himself as one of the most trusted names in the industry. His extensive knowledge of exclusive neighborhoods like DHA, Clifton, and Bahria Town ensures that clients receive unparalleled guidance.
              </p>
              <p>
                Usman’s approach is built on absolute discretion, transparency, and a relentless dedication to fulfilling his clients' exact requirements, whether they are searching for a lavish seaside villa or a strategic commercial investment.
              </p>
            </div>
          </div>
        </div>

        {/* Company Story Section */}
        <div className="bg-primary text-white p-12 md:p-24 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform translate-x-32 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-accent text-sm tracking-widest uppercase font-medium mb-4">Our Heritage</h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-8">The Luxe Estates Story</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Founded in 2010, Luxe Estates began with a simple yet ambitious vision: to redefine the luxury real estate experience in Pakistan. We recognized a gap in the market for a boutique agency that offered not just properties, but an elevated, concierge-level service.
            </p>
            <p className="text-white/80 leading-relaxed">
              Today, we represent a curated portfolio of the finest residential, commercial, and plot investments. Our reputation is built on long-lasting relationships, an expansive network of off-market listings, and an unwavering commitment to excellence. We don't just sell real estate; we deliver a lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
