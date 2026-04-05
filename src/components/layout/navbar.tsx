"use client"

import { useState } from "react"
import { MenuIcon, ShoppingBagIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navLinks = [
  { label: "SHOP", href: "/" },
  { label: "MEN", href: "/" },
  { label: "WOMEN", href: "/" },
  { label: "OUR STORY", href: "/" },
]

const collectionLinks = [
  "SUMMER COLLECTION",
  "NEW COLLECTION",
  "MENS COLLECTION",
  "WOMEN COLLECTION",
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex w-full justify-center border-b border-border/60 text-secondary-foreground">
      <nav className="flex w-full max-w-300 items-center justify-between px-6 py-5 md:px-10">
        <h1 className="text-3xl font-bold tracking-[-0.08em]">RAWBLOX</h1>

        <div className="hidden items-center gap-6 lg:flex">
          <NavigationMenu className="text-sm font-medium tracking-[0.18em]">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href={navLinks[0].href}>
                  {navLinks[0].label}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>COLLECTION</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-secondary text-secondary-foreground">
                  <ul className="flex w-52 flex-col gap-2 p-3 text-xs tracking-[0.16em]">
                    {collectionLinks.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {navLinks.slice(1).map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink href={link.href}>
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="ghost" size="icon-sm" aria-label="Open cart">
            <ShoppingBagIcon />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon-lg"
          className="lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </Button>
      </nav>

      {isOpen ? (
        <div className="absolute inset-x-0 top-[7.75rem] z-20 border-b border-border/60 bg-background lg:hidden">
          <div className="mx-auto flex w-full max-w-300 flex-col gap-6 px-6 py-6 md:px-10">
            <div className="flex flex-col gap-4 text-sm font-medium tracking-[0.18em]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-border/60 pt-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                COLLECTION
              </p>
              <div className="flex flex-col gap-3 text-sm tracking-[0.16em] text-muted-foreground">
                {collectionLinks.map((link) => (
                  <a
                    key={link}
                    href="/"
                    className="transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <Button variant="outline" className="w-fit rounded-full">
              <ShoppingBagIcon data-icon="inline-start" />
              View cart
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
