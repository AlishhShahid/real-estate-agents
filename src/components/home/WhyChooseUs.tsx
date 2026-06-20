"use client";

import { motion } from "framer-motion";
import { Key, ShieldCheck, Trophy } from "lucide-react";

const features = [
  {
    icon: <Trophy size={40} className="text-accent" />,
    number: "01",
    title: "Unmatched Expertise",
    description: "Over two decades of curating luxury real estate, providing you with market insights that matter.",
  },
  {
    icon: <ShieldCheck size={40} className="text-accent" />,
    number: "02",
    title: "Absolute Privacy",
    description: "We handle every transaction with the utmost discretion and prioritize your confidentiality above all.",
  },
  {
    icon: <Key size={40} className="text-accent" />,
    number: "03",
    title: "Exclusive Access",
    description: "Gain entry to off-market properties and private listings not available to the general public.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4 font-heading">The Luxe Standard</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Why discerning clients choose us for their most significant real estate investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-10 rounded-sm border border-primary/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="bg-primary/5 p-4 rounded-full">{feature.icon}</div>
                <span className="text-4xl font-heading text-primary/10 font-bold">{feature.number}</span>
              </div>
              <h3 className="text-2xl font-heading text-primary mb-4">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
