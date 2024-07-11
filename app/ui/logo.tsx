import Image from "next/image";
import logo from "@/public/logo.png"

export default function Logo() {
  return (
    <div className="flex flex-row invert-[98%] drop-shadow-[0_2px_2px_rgb(0,0,0)]">
      <Image 
        src={logo}
        width={64}
        height={64}
        alt="Logo image of mid-air gymnast inside a medal" 
      />
      <p className="text-5xl mt-2">Gymtionary</p>
    </div>
  )
}