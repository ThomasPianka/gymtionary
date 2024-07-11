"use client";

import Link from "next/link";
import Logo from "@/app/ui/logo";
import { usePathname } from "next/navigation";
import { HomeIcon, InformationCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Favorites", href: "/favorites", icon: StarIcon },
  { name: "About", href: "/about", icon: InformationCircleIcon }
]

export default function TopNav() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row w-full rounded-b-md bg-pink-400 py-1">
      <Link className="mr-2" href="/">
        <Logo />
      </Link>
      <div className="flex grow flex-row">
        {navLinks.map(link => {
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex grow items-center justify-center rounded-md",
                {
                  "bg-pink-300": pathname === link.href
                }
              )}
            >
              <Icon className="w-10" />
              <p className="hidden md:block md:pl-1 text-lg">{link.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}