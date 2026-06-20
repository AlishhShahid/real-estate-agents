"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { insforge } from "@/lib/insforge";
import { formatPricePKR } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFeatured() {
      const { data } = await insforge.database
        .from("properties")
        .select("*")
        .limit(6)
        .order("created_at", { ascending: false });

      if (data) {
        setProperties(data);
      }
    }
    fetchFeatured();
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Featured Properties</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties, offering unparalleled luxury, comfort, and breathtaking views.
          </p>
        </div>

        {properties.length > 0 && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-[800px]"
          >
            {properties.map((property, index) => {
              const isLarge = index < 2; // Make the first 2 large for bento layout
              return (
                <motion.div
                  key={property.id}
                  variants={itemVariants}
                  className={`relative group overflow-hidden rounded-xl border border-transparent hover:border-accent transition-colors duration-500 cursor-pointer ${
                    isLarge 
                      ? "md:col-span-2 md:row-span-1 h-[400px] md:h-full" 
                      : "md:col-span-1 md:row-span-1 h-[300px] md:h-full"
                  }`}
                >
                  <Link href={`/properties/${property.id}`} className="block w-full h-full">
                    <img 
                      src={property.image_url}
                      alt={property.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-xl md:text-2xl font-heading mb-1 group-hover:text-accent transition-colors">{property.title}</h3>
                          <p className="text-white/80 text-sm mb-4">{property.location}</p>
                          
                          <div className="flex space-x-4 text-sm text-white/70">
                            <span className="inline-block bg-accent text-primary font-medium text-xs px-2 py-1 rounded-sm">
                              {property.property_type}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xl md:text-2xl font-medium text-accent">{formatPricePKR(property.price)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
