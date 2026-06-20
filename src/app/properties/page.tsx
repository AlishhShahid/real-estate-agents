"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";
import { insforge } from "@/lib/insforge";
import { formatPricePKR } from "@/lib/utils";

function PropertiesContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      setLoading(true);
      let query = insforge.database
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });

      if (filter !== "All") {
        query = query.eq("property_type", filter);
      }

      if (searchQuery.trim() !== "") {
        query = query.textSearch("search_vector", searchQuery.trim(), { type: "plain" });
      }

      const { data, error } = await query;
      if (data) {
        setProperties(data);
      }
      setLoading(false);
    }

    // Debounce the search input
    const timeoutId = setTimeout(() => {
      fetchProperties();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [filter, searchQuery]);

  return (
    <div className="pt-28 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading text-primary mb-6">Exclusive Properties</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Browse our comprehensive portfolio of high-end residential estates, prime commercial spaces, and valuable land plots.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-primary/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent bg-white"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50" size={20} />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All", "Residential", "Commercial", "Plot"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                filter === type 
                  ? "bg-primary text-accent shadow-lg" 
                  : "bg-white text-primary border border-primary/10 hover:border-accent"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12 text-foreground/60">
              Loading properties...
            </div>
          ) : properties.length === 0 ? (
            <div className="col-span-full text-center py-12 text-foreground/60">
              No properties found matching your search.
            </div>
          ) : (
            properties.map((property) => (
              <Link href={`/properties/${property.id}`} key={property.id} className="block">
                <div className="bg-white rounded-sm overflow-hidden border border-primary/5 hover:shadow-2xl transition-shadow duration-300 group cursor-pointer h-full">
                  <div className="relative h-[250px] overflow-hidden">
                    <img 
                      src={property.image_url} 
                      alt={property.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-accent px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-sm">
                      {property.property_type}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-heading text-primary mb-1 group-hover:text-accent transition-colors">{property.title}</h3>
                        <p className="text-foreground/60 text-sm">{property.location}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-primary/5 flex justify-between items-center">
                      <span className="text-lg font-medium text-accent">{formatPricePKR(property.price)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="pt-28 pb-24 bg-background min-h-screen flex items-center justify-center">
        <p className="text-foreground/60">Loading...</p>
      </div>
    }>
      <PropertiesContent />
    </Suspense>
  );
}
