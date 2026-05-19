"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/cards/ProductCard";
import SectionHeading from "@/components/sections/SectionHeading";
import { collectionProducts } from "@/lib/site-content";

export default function CollectionSection() {
  return (
    <section id="collection" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <SectionHeading
            eyebrow="Collection"
            title="Signature Roasts For Refined Coffee Rituals"
            description="A curated line of premium coffee crafted for layered aroma, velvet texture, and unforgettable character."
          />
        </motion.div>

        <div className="luxury-divider mt-12" />

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {collectionProducts.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
