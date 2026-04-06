import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MovementBanner() {
  return (
    <section className="mx-auto w-full max-w-300 px-6 py-18 md:px-10">
      <div className="relative overflow-hidden rounded-[2rem]">
        <img
          src="/hero.jpeg"
          alt="Streetwear campaign portrait"
          className="h-[36rem] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-red-950/45 to-transparent" />
        <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center gap-6 p-8 text-white md:p-12">
          <h2 className="text-6xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
            Join the Movement. Wear the Future.
          </h2>
          <p className="max-w-md text-base leading-7 text-white/80">
            Streetwear designed for those who break the mold. Limited drops,
            bold designs, and premium quality for every day.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="w-fit rounded-full px-5 text-primary"
          >
            Shop now
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}
