import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const slides = [
    {
      image: "/hero.jpeg",
      title: "Wear the Movement",
      description: "Streetwear that speaks your style.",
      button: "Shop Now",
    },
    {
      image: "/hero.jpeg",
      title: "Break the Mold",
      description: "Stand out with bold designs.",
      button: "Explore",
    },
    {
      image: "/hero.jpeg",
      title: "New Collection",
      description: "Fresh drops every week.",
      button: "View Drops",
    },
    {
      image: "/hero.jpeg",
      title: "Own Your Style",
      description: "Confidence starts here.",
      button: "Get Started",
    },
  ]

  return (
    <section className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-125 md:h-175 w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                  <div className="flex max-w-xl flex-col gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold">
                      {slide.title}
                    </h1>

                    <p className="text-sm md:text-lg">
                      {slide.description}
                    </p>

                    <Button className="mt-4">
                      {slide.button}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
