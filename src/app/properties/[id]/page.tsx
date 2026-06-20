import { insforge } from "@/lib/insforge";
import { notFound } from "next/navigation";
import { MapPin, Phone, Mail } from "lucide-react";
import { formatPricePKR } from "@/lib/utils";

export default async function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const { data: property, error } = await insforge.database
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !property) {
    notFound();
  }

  const formattedPrice = formatPricePKR(property.price);

  return (
    <div className="pt-28 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
          <div>
            <div className="inline-block bg-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold mb-4">
              {property.property_type}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading text-primary mb-2">{property.title}</h1>
            <div className="flex items-center text-foreground/60">
              <MapPin size={18} className="mr-2" />
              <p className="text-lg">{property.location}</p>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-foreground/50 uppercase tracking-widest mb-1">Asking Price</p>
            <p className="text-3xl md:text-4xl font-medium text-accent">{formattedPrice}</p>
          </div>
        </div>

        {/* Image Gallery (Main Image) */}
        <div className="rounded-xl overflow-hidden h-[400px] md:h-[600px] mb-12 relative shadow-2xl">
          <img 
            src={property.image_url} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section className="bg-white p-8 rounded-xl border border-primary/5 shadow-sm">
              <h2 className="text-2xl font-heading text-primary mb-6">Property Overview</h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                Experience unparalleled luxury and sophistication in this stunning {property.property_type.toLowerCase()}. 
                Located in the highly sought-after area of {property.location}, this property offers an exquisite blend of 
                modern design, premium finishes, and exceptional comfort. Whether you're looking for an investment or your 
                forever home, this is an opportunity you don't want to miss.
              </p>
              
              <div className="mt-8 pt-8 border-t border-primary/10 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Type</p>
                  <p className="font-medium text-primary">{property.property_type}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Status</p>
                  <p className="font-medium text-primary">For Sale</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Added</p>
                  <p className="font-medium text-primary">{new Date(property.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Contact */}
          <div className="lg:col-span-1">
            <div className="bg-primary text-white p-8 rounded-xl sticky top-32 shadow-xl">
              <h3 className="text-2xl font-heading mb-2">Interested?</h3>
              <p className="text-white/70 mb-8">Contact our premier agent to schedule a private viewing.</p>
              
              <div className="space-y-4 mb-8">
                <button className="w-full bg-accent text-primary py-4 rounded-sm font-medium hover:bg-white transition-colors flex items-center justify-center">
                  <Phone size={18} className="mr-2" /> +92 300 1234567
                </button>
                <button className="w-full bg-white/10 text-white border border-white/20 py-4 rounded-sm font-medium hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Mail size={18} className="mr-2" /> Request Details
                </button>
              </div>

              <div className="text-sm text-white/50 text-center">
                Ref ID: #{property.id.toString().padStart(6, '0')}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
