import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function StoryManifesto() {
  return (
    <section className="mx-auto grid w-full max-w-300 gap-10 px-6 py-18 md:px-0 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-medium text-foreground">
          Streetwear with a Story
        </p>
        <h2 className="max-w-4xl text-6xl leading-[0.88] font-black tracking-[-0.08em] text-foreground uppercase md:text-8xl">
          Wear the Movement, Break the Mold.
        </h2>
      </div>
      <div className="flex flex-col gap-6 text-base leading-8 text-muted-foreground">
        <p>
          Born from the pulse of the streets, our brand is a tribute to the
          rebels, the dreamers, and the rule-breakers who shape the culture.
          Inspired by the raw energy of city life, we craft streetwear that
          speaks to individuality and self-expression.
        </p>
        <p>
          Every stitch, every design, and every drop reflects movement, bold
          graphics, oversized silhouettes, and urban edge. More than clothing,
          it is a statement. Wear your story, break the mold, and define your
          own path.
        </p>
        <Button size="lg" className="w-fit rounded-full px-5">
          Get it now
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </section>
  )
}
