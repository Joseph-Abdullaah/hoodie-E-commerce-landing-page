import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
export default function Bento() {
  return (
    <section className="mx-auto w-full flex flex-col gap-10 max-w-300 lg:pt-15 lg:pb-25">
      <div className="flex w-full max-w-200 flex-col gap-5">
        <h2 className="text-5xl">SHIP YOUR WEBSITE QUICKLY WITH FRAMEBLOX</h2>
        <p className="text-base text-muted-foreground">
          Use prebuilt templates and components for a professional, stunning
          look. Save time and focus on content with our user-friendly,
          customizable design solutions.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        <img src="/orange.jpeg" alt="orange hoodie" className="col-span-2 rounded-4xl" />
        <Card className="p-7.5 rounded-4xl flex flex-col justify-end items-start bg-foreground">
          <h5 className="text-background">BUILT BY THE STREETS, MADE FOR YOU</h5>
          <p className="text-background">
            From the streets to your style—our journey is all about
            self-expression and rebellion. Join the movement.
          </p>
          <Button className="">READ OUR STORY</Button>
        </Card>
        <Card className="p-7.5 rounded-4xl flex flex-col justify-end items-start bg-accent">
          <h5 className="">ELEVATE YOUR STREET GAME</h5>
          <p>
            From bold graphics to everyday essentials, explore our latest drops
            and signature pieces designed for the culture.
          </p>
          <Button className="">SHOP COLLECTIONS</Button>
        </Card>

        <img src="/tshirt.jpeg" alt="t-shirt" className="col-span-2 rounded-4xl"/>
      </div>
    </section>
  )
}
