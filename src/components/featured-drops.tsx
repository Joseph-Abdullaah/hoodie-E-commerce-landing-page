import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredDrops = [
  {
    title: "Sleek Urban Fit",
    description:
      "Durable and slim, this off-duty essential keeps your look sharp all day.",
    image: "/LD23tJ1bKNEn5JF4I0ydbiQDRM.jpeg",
    label: "Woman",
    price: "$79",
  },
  {
    title: "Spring Jacket",
    description:
      "Lightweight layers with a clean silhouette for breezy city afternoons.",
    image: "/5BiIzCvuaFWfMol4ShSeCtMwKas.jpeg",
    label: "Men",
    price: "$84",
  },
  {
    title: "Summer Cap",
    description:
      "Stay cool with an easy neutral palette and lightweight everyday texture.",
    image: "/3XA0cbETN9O76tsYRSDdsBoaD7k.jpeg",
    label: "Accessories",
    price: "$39",
  },
  {
    title: "Core Layers",
    description:
      "Balanced proportions and soft neutrals built for the daily rotation.",
    image: "/yh1PJ7MNePJuPUbkdnTpvfg1DU4.jpeg",
    label: "New",
    price: "$68",
  },
]

export default function FeaturedDrops() {
  return (
    <section className="mx-auto flex w-full max-w-300 flex-col gap-10 px-6 py-18 md:px-10">
      <div className="flex max-w-4xl flex-col gap-4">
        <h2 className="text-4xl font-black uppercase leading-tight tracking-[-0.05em] md:text-6xl">
          Featured Drops: Stand Out, Stay Ahead
        </h2>
        <p className="max-w-3xl text-base text-muted-foreground">
          Exclusive designs, premium materials, and street-ready vibes. These
          must-have pieces are setting the tone for the season.
        </p>
      </div>
      <Carousel className="px-4 pb-14 md:px-12" opts={{ align: "start" }}>
        <CarouselContent>
          {featuredDrops.map((drop) => (
            <CarouselItem
              key={drop.title}
              className="basis-[85%] sm:basis-[70%] lg:basis-1/2 xl:basis-1/3"
            >
              <Card className="h-full rounded-[2rem] border-0 bg-transparent p-0 ring-0">
                <CardHeader className="relative min-h-[32rem] justify-end overflow-hidden rounded-[2rem] p-0 text-white">
                  <img
                    src={drop.image}
                    alt={drop.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                  <div className="relative z-10 flex flex-col gap-3 p-6">
                    <Badge variant="secondary" className="w-fit rounded-full">
                      {drop.label}
                    </Badge>
                    <CardTitle className="text-3xl font-black uppercase tracking-[-0.04em] text-white">
                      {drop.title}
                    </CardTitle>
                    <CardDescription className="max-w-sm text-white/80">
                      {drop.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Limited Edition
                  </p>
                </CardContent>
                <CardFooter className="justify-between border-0 bg-transparent px-4 pb-0 pt-0">
                  <p className="text-lg font-semibold">{drop.price}</p>
                  <Button variant="outline" className="rounded-full">
                    View Drop
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bottom-0 left-4 top-auto translate-y-0 md:left-12" />
        <CarouselNext className="bottom-0 left-16 top-auto translate-y-0 md:left-20" />
      </Carousel>
    </section>
  )
}
