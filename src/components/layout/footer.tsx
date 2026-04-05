import tiktokIcon from "@/assets/tiktok.svg"
import facebookIcon from "@/assets/facebook.svg"
import instagramIcon from "@/assets/instagram.svg"
import linkedInIcon from "@/assets/linkedIn.svg"
import twitterIcon from "@/assets/twitter.svg"

import { Separator } from "@/components/ui/separator"

const footerColumns = [
  {
    title: "Menu",
    links: ["Home", "Shop", "About", "Contact", "Story"],
  },
  {
    title: "Shop",
    links: [
      "Collections",
      "New arrival",
      "Men collections",
      "Women collections",
      "Accessories",
    ],
  },
]

const socials = [
  { label: "LinkedIn", icon: linkedInIcon },
  { label: "Instagram", icon: instagramIcon },
  { label: "Twitter", icon: twitterIcon },
  { label: "Facebook", icon: facebookIcon },
  { label: "Tiktok", icon: tiktokIcon },
]

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto flex w-full max-w-300 flex-col gap-12 px-6 py-16 md:px-10">
        <Separator className="bg-white/10" />
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr]">
          <div className="flex max-w-sm flex-col gap-5">
            <h2 className="text-4xl font-black uppercase tracking-[-0.08em]">
              Rawblox
            </h2>
            <p className="text-base uppercase text-primary-foreground/60">
              Streetwear for the bold, built for the movement.
            </p>
            <p className="text-sm leading-7 text-primary-foreground/45">
              Inspired by the raw energy of the streets, we create statement
              pieces that blend style, attitude, and individuality.
            </p>
            <p className="text-sm text-primary-foreground/35">© 2026 Copyright</p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-primary-foreground/50">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Social
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/50">
              {socials.map((social) => {
                return (
                  <li key={social.label} className="flex items-center gap-3">
                    <img src={social.icon} alt={social.label} className="size-4 invert" />
                    <span>{social.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <p className="text-[clamp(4rem,16vw,14rem)] font-black uppercase leading-none tracking-[-0.12em] text-white/5">
          Rawblox
        </p>
      </div>
    </footer>
  )
}
