import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
const newDrops = [
  {
    id: 1,
    imageUrl: "/newdrops1.jpeg",
    tag: "NEW",
    title: "SHADOW DRIP",
    description:
      "A sleek, minimalist hoodie with dark tones and subtlereflective accents for an effortless street vibe.",
    discountPrice: 89,
    actualPrice: 129,
  },
  {
    id: 2,
    imageUrl: "/newdrops2.jpeg",
    tag: "NEW",
    title: "URBAN PHANTOM",
    description:
      "Urban Phantom — A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by citynights.",
    discountPrice: 89,
    actualPrice: 129,
  },
  {
    id: 3,
    imageUrl: "/newdrops3.jpeg",
    tag: "NEW",
    title: "NEON REBELLION",
    description:
      "A statement piece with vibrant neon details and rebellious street art influences for a standout look.",
    discountPrice: 89,
    actualPrice: 129,
  },
]

export default function NewDrops() {
  return (
    <section className="mx-auto flex w-full max-w-300 flex-col gap-10 lg:pt-15 lg:pb-25">
      <div className="flex w-full max-w-150 flex-col gap-5">
        <h2 className="text-5xl">NEW DROPS</h2>
        <p className="text-base text-muted-foreground">
          Stand out with our latest collection—bold designs, premium fabrics,
          and street-ready fits. Once they're gone, they're gone. Don't miss
          out!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {newDrops.map((drop) => (
          <Card key={drop.id} className="relative rounded-none p-0 ring-0">
            <CardHeader className="relative w-full p-0">
              <img
                src={drop.imageUrl}
                alt={drop.title}
                className="w-full rounded-4xl object-cover"
              />
              <Badge className="absolute top-6 left-6 p-4">{drop.tag}</Badge>
            </CardHeader>
            <CardContent className="flex flex-col gap-2.5 p-0">
              <h3 className="text-3xl font-bold">{drop.title}</h3>
              <p className="text-xs text-muted-foreground">
                {drop.description}
              </p>
              <div className="flex items-center gap-2.5">
                <p className="text-xl font-bold">
                  ${drop.discountPrice.toFixed(2)}
                </p>
                <p className="text-xl text-muted-foreground line-through">
                  ${drop.actualPrice.toFixed(2)}
                </p>
              </div>
            </CardContent>
            <CardFooter className="hidden" />
          </Card>
        ))}
      </div>
    </section>
  )
}
