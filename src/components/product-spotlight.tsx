import { useState } from "react"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const spotlightItems = [
  {
    title: "Nightfall Oversized Hoodie",
    description:
      "A heavyweight, ultra-soft hoodie designed for comfort and style. Built with a relaxed fit, subtle detailing, and a worn-in finish for everyday city layering.",
    price: 89,
    originalPrice: 120,
    image: "/newdrops2.jpeg",
    alt: "Model wearing the Nightfall Oversized Hoodie",
  },
  {
    title: "Shadow Drip Hoodie",
    description:
      "Minimalist black layers with a clean drape and an off-duty silhouette.",
    price: 89,
    originalPrice: 129,
    image: "/newdrops1.jpeg",
    alt: "Model wearing the Shadow Drip Hoodie",
  },
  {
    title: "Neon Rebellion Hoodie",
    description:
      "Oversized shape with a darker wash and confident, after-hours energy.",
    price: 89,
    originalPrice: 129,
    image: "/newdrops3.jpeg",
    alt: "Model wearing the Neon Rebellion Hoodie",
  },
  {
    title: "Spring Jacket",
    description:
      "A soft neutral jacket that balances relaxed tailoring with street ease.",
    price: 84,
    originalPrice: 112,
    image: "/5BiIzCvuaFWfMol4ShSeCtMwKas.jpeg",
    alt: "Model wearing a lightweight spring jacket",
  },
]

export default function ProductSpotlight() {
  const [activeItem, setActiveItem] = useState(spotlightItems[0])

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-300 gap-12 px-6 py-18 md:px-10 xl:grid-cols-[0.85fr_1.15fr] xl:items-center">
        <div className="flex flex-col gap-6">
          <h2 className="max-w-md text-6xl font-black uppercase leading-[0.9] tracking-[-0.08em] md:text-8xl">
            {activeItem.title}
          </h2>
          <p className="max-w-lg text-base leading-8 text-primary-foreground/70">
            {activeItem.description}
          </p>
          <div className="flex items-end gap-3">
            <p className="text-4xl font-semibold">${activeItem.price}</p>
            <p className="pb-1 text-lg text-primary-foreground/45 line-through">
              ${activeItem.originalPrice}
            </p>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="w-fit rounded-full px-5 text-primary"
          >
            Shop now
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-[2rem] bg-white/5">
            <img
              src={activeItem.image}
              alt={activeItem.alt}
              className="h-[32rem] w-full object-cover object-top"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {spotlightItems.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveItem(item)}
                className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 transition hover:border-white/40"
                aria-pressed={activeItem.title === item.title}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-28 w-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
