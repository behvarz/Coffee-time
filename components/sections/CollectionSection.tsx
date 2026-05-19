"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductCard from "@/components/cards/ProductCard";
import SectionHeading from "@/components/sections/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CollectionSection() {
  const { content } = useLanguage();

  return (
    <section id="collection" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 right-[-8rem] h-[430px] w-[430px] opacity-18">
          <Image
            src="/images/product-midnight.jpg"
            alt=""
            fill
            sizes="430px"
            className="object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(18,11,8,0.12)_0%,rgba(18,11,8,0.88)_78%)]" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <SectionHeading
            eyebrow={content.collection.eyebrow}
            title={content.collection.title}
            description={content.collection.description}
          />
        </motion.div>

        <div className="luxury-divider mt-12" />

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {content.collection.products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
