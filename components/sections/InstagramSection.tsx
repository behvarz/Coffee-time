"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/sections/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function InstagramSection() {
  const { content } = useLanguage();

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
            eyebrow={content.instagram.eyebrow}
            title={content.instagram.title}
            description={content.instagram.description}
          />
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {content.instagram.shots.map((shot, index) => (
            <motion.article
              key={shot.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.2, 0.8, 0.2, 1],
                delay: index * 0.05,
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-[#E0A85A]/20"
            >
              <div
                className={`h-44 bg-gradient-to-br ${shot.toneClassName} transition-transform duration-500 group-hover:scale-105 md:h-56`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(18,11,8,0.92)_100%)]" />
              <div className="absolute right-4 bottom-4 left-4">
                <h3 className="font-display text-2xl text-[#FFF7ED]">{shot.title}</h3>
                <p className="mt-1 text-xs tracking-[0.12em] text-[#F4E7D3]/80 uppercase">
                  {shot.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="https://www.instagram.com/coffeetimeyerevan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[#E0A85A]/45 px-6 py-3 text-xs tracking-[0.22em] text-[#FFF7ED] uppercase hover:-translate-y-0.5 hover:border-[#E0A85A] hover:bg-[#C88A3D]/15"
          >
            {content.actions.followRitual}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
