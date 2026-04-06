import facebookIcon from "@/assets/facebook.svg"
import instagramIcon from "@/assets/instagram.svg"
import linkedInIcon from "@/assets/linkedIn.svg"
import twitterIcon from "@/assets/twitter.svg"

const socialLinks = [
  { label: "Facebook", icon: facebookIcon },
  { label: "Instagram", icon: instagramIcon },
  { label: "Twitter", icon: twitterIcon },
  { label: "LinkedIn", icon: linkedInIcon },
]

export default function Banner() {
  return (
    <div className="flex justify-center bg-primary text-primary-foreground">
      <div className="flex w-full max-w-300 justify-between px-10 py-2.5">
        <div className="flex gap-5">
          {socialLinks.map((link) => {
            return (
              <img
                key={link.label}
                src={link.icon}
                alt={link.label}
                className="size-4 invert"
              />
            )
          })}
        </div>
        <div>
          <ul className="flex gap-2">
            <li className="text-xs">Contact</li>
            <li className="text-xs">FAQ</li>
            <li className="text-xs">Support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
