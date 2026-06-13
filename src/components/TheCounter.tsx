"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const products = [
  {
    name: "Mangalore Bun",
    description: "Banana-sweet, fried golden, soft as a cloud.",
    price: "₹15",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Khara Biscuit",
    description: "Black pepper, curry leaf, and a snap you can hear across the room.",
    price: "₹10",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Dil Pasand",
    description: "Flaky pastry hugging a coconut-jaggery heart.",
    price: "₹20",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Rusk",
    description: "Twice-baked with cardamom, built for your morning chai.",
    price: "₹60 / pack",
    image:
      "https://images.unsplash.com/photo-1612827788868-c8632040ab64?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Cream Bun",
    description: "Pillow-soft bun, piped with fresh whipped cream.",
    price: "₹25",
    image:
      "https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Butter Cookies",
    description: "Six ingredients, zero shortcuts, grandmother-approved.",
    price: "₹120 / box",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Veg Puff",
    description: "Spiced potato folded into a hundred buttery layers.",
    price: "₹20",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Plum Cake",
    description: "Rum-soaked fruit, baked low and slow — not just for December.",
    price: "₹350 / kg",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&h=400&q=80",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.07, duration: 0.6, ease: EASE },
        },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group"
      style={{
        background: "#FDFAF4",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(43,29,20,0.07)",
        cursor: "default",
        position: "relative",
      }}
    >
      {/* Image */}
      <div
        style={{
          aspectRatio: "1 / 1",
          overflow: "hidden",
          background: "#EDE0CE",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.06)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "1rem 1rem 1.25rem" }}>
        <h3
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 600,
            fontSize: "1.1rem",
            color: "#2B1D14",
            marginBottom: "0.35rem",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "0.875rem",
            lineHeight: 1.6,
            color: "rgba(43,29,20,0.6)",
          }}
        >
          {product.description}
        </p>
      </div>

      {/* Price tag — rotates -4° at rest, 0° on card hover */}
      <div
        className="group-hover:[transform:rotate(0deg)]"
        style={{
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
          background: "#DDA34B",
          color: "#2B1D14",
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.05em",
          padding: "0.25rem 0.5rem",
          borderRadius: "4px",
          transform: "rotate(-4deg)",
          transformOrigin: "top right",
          transition: "transform 0.25s ease",
          boxShadow: "0 2px 6px rgba(43,29,20,0.15)",
          whiteSpace: "nowrap",
        }}
      >
        {product.price}
      </div>
    </motion.div>
  );
}

export default function TheCounter() {
  return (
    <section
      id="the-counter"
      style={{
        background: "#F7EFE1",
        padding: "clamp(3.5rem, 8vw, 6rem) 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: "3rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#DDA34B",
              marginBottom: "0.875rem",
            }}
          >
            The Counter
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              lineHeight: 1.15,
              color: "#2B1D14",
              letterSpacing: "-0.02em",
              maxWidth: "28rem",
            }}
          >
            Eight things we will never stop making
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={{ visible: { transition: { staggerChildren: 0 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
