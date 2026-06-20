"use client";

import { motion } from "framer-motion";

const areas = [
  { name: "DHA Karachi", properties: "150+ Properties" },
  { name: "Bahria Town", properties: "200+ Properties" },
  { name: "Clifton", properties: "85+ Properties" },
  { name: "Gulshan-e-Iqbal", properties: "120+ Properties" },
];

export default function Areas() {
  return (
    <section className="bg-primary py-24 text-white border-y border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Prime Locations</h2>
            <p className="text-white/70">
              Discover exclusive properties in the most sought-after neighborhoods.
            </p>
          </div>
          <button className="text-accent hover:text-white transition-colors uppercase tracking-widest text-sm font-medium mt-6 md:mt-0">
            View All Areas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <h3 className="text-2xl font-heading mb-2 group-hover:text-accent transition-colors relative inline-block">
                {area.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-white/50 text-sm">{area.properties}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
