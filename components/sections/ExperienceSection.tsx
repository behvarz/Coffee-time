"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/sections/SectionHeading";
import { experienceItems } from "@/lib/site-content";

export default function ExperienceSection() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <SectionHeading
            eyebrow="Experience"
            title="Built For Premium Daily Coffee Moments"
            align="center"
          />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {experienceItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="gold-glow rounded-3xl border border-[#E0A85A]/12 bg-[#2A1810]/40 p-7 md:p-8"
            >
              <p className="text-xs tracking-[0.2em] text-[#E0A85A] uppercase">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-display text-3xl text-[#FFF7ED]">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-[#F4E7D3]/75">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
