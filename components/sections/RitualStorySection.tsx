"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/sections/SectionHeading";
import { ritualStoryParagraphs } from "@/lib/site-content";

export default function RitualStorySection() {
  return (
    <section id="ritual" className="relative py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-6 md:px-10 lg:grid-cols-12 lg:px-16">
        <motion.div
          className="lg:col-span-5 lg:pt-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <SectionHeading
            eyebrow="Coffee Ritual"
            title="Where Aroma Becomes Memory"
            description="A cinematic tribute to slow mornings, artisan craftsmanship, and shared coffee culture in Yerevan."
          />
        </motion.div>

        <motion.div
          className="relative lg:col-span-7"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="rounded-[2rem] border border-[#E0A85A]/18 bg-[linear-gradient(160deg,rgba(42,24,16,0.88),rgba(18,11,8,0.95))] p-8 md:p-12">
            <div className="absolute -top-5 right-9 hidden rounded-full border border-[#E0A85A]/45 bg-[#120B08]/85 px-5 py-2 text-[10px] tracking-[0.22em] text-[#E0A85A] uppercase md:block">
              Yerevan, Armenia
            </div>

            <div className="space-y-7">
              {ritualStoryParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-[#F4E7D3]/80 md:text-xl md:leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
