import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid w-full max-w-300 gap-8 px-6 py-16 md:px-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-md text-4xl font-black uppercase leading-tight tracking-[-0.05em] md:text-6xl">
            Subscribe to Our Newsletter Now!
          </h2>
          <p className="max-w-md text-base text-muted-foreground">
            Get top drops, exclusive access, and fresh streetwear inspiration
            delivered to your inbox weekly.
          </p>
        </div>
        <form className="flex flex-col gap-3 md:flex-row md:items-center">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="jane@email.com"
            className="h-12 rounded-full bg-background px-5"
          />
          <Button size="lg" className="h-12 rounded-full px-6">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
