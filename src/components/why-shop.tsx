import {
  HeadphonesIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const benefits = [
  {
    icon: TruckIcon,
    title: "Free Delivery",
    description:
      "Get your streetwear fast and free, with no surprise shipping costs at checkout.",
    footer: "Orders over $75",
  },
  {
    icon: ShieldCheckIcon,
    title: "100% Secure Payment",
    description:
      "Encrypted checkout and trusted payment methods keep every purchase protected.",
    footer: "Safe by design",
  },
  {
    icon: RotateCcwIcon,
    title: "30 Days Return",
    description:
      "Need another fit? Exchange or return within 30 days with a streamlined process.",
    footer: "No-stress policy",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Questions about sizing, shipping, or drops? Our team is always within reach.",
    footer: "Real humans, always",
  },
]

export default function WhyShop() {
  return (
    <section className="mx-auto w-full max-w-300 px-6 py-18 md:px-10">
      <div className="grid gap-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-start">
        <div className="flex flex-col gap-5">
          <Separator className="max-w-24" />
          <h2 className="text-4xl font-black uppercase tracking-[-0.05em] md:text-5xl">
            Why Shop With Us?
          </h2>
          <p className="max-w-md text-base leading-8 text-muted-foreground">
            We pair bold design with a smoother buying experience, from delivery
            to support, so you can shop with confidence every time.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <Card key={benefit.title} className="rounded-[1.75rem] bg-card/70 py-0">
                <CardHeader className="gap-4 p-6">
                  <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background">
                    <Icon className="size-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-black uppercase tracking-[-0.04em]">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6 pt-0">
                  <CardDescription className="text-base leading-7">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="border-t border-border/60 bg-transparent px-6 py-4 text-sm text-muted-foreground">
                  {benefit.footer}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
