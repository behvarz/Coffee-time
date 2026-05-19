"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/site-content";
import { useLanguage } from "@/components/providers/LanguageProvider";

type ProductCardProps = {
  product: Product;
  index: number;
};

const productVisuals = [
  { image: "/images/product-signature.png", price: "$ 18.90" },
  { image: "/images/product-daily.png", price: "$ 16.50" },
  { image: "/images/product-midnight.png", price: "$ 21.40" },
];

export default function ProductCard({ product, index }: ProductCardProps) {
  const { content } = useLanguage();
  const visual = productVisuals[index % productVisuals.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group rounded-3xl border border-[#E0A85A]/18 bg-[linear-gradient(165deg,rgba(42,24,16,0.88),rgba(18,11,8,0.95))] p-6 md:p-8"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#E0A85A]/22 bg-[#2A1810]/50 p-5">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={visual.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover opacity-72 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-78"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(200,138,61,0.2)_0%,rgba(42,24,16,0.16)_45%,rgba(18,11,8,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(224,168,90,0.24),transparent_45%)]" />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(224,168,90,0.14)]" />
      </div>

      <div className="mt-6">
        <h3 className="font-display text-3xl text-[#FFF7ED]">{product.name}</h3>
        <p className="mt-3 text-sm tracking-[0.14em] text-[#E0A85A] uppercase">
          {product.tastingNote}
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#F4E7D3]/78">
          {product.description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm tracking-[0.2em] text-[#F4E7D3]/75 uppercase">
          {content.actions.from}
        </span>
        <span className="font-display text-3xl text-[#E0A85A]">{visual.price}</span>
      </div>
    </motion.article>
  );
}
