"use client";
import Link from "next/link";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1uivu6UJkkOHB-Pj2w3CSQmfP5eA3iDy0/view?usp=sharing",
    target: "_blank",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <div>
              <Link
                key={item.href}
                href={item.href}
                target={item.target}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={400}
      />
      <h1 className="z-10 text-4xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Ahmed Naoum
      </h1>
      <div className="flex flex-row gap-2">
        <h2 className="text-1xl sm:text-2xl md:text-4xl font-semibold text-[#667eea] ">
          React,{" "}
        </h2>
        <h2 className="text-1xl sm:text-2xl md:text-4xl font-semibold text-[#667eea]">
          React Native,{" "}
        </h2>
        <h2 className="text-1xl sm:text-2xl md:text-4xl font-semibold text-[#667eea]">
          Node,{" "}
        </h2>
        <h2 className="text-1xl sm:text-2xl md:text-4xl font-semibold text-[#667eea]">
          TypeScript
        </h2>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hi, my name is Ahmed, I'm a full-stack developer and freelancer.
          <br />
          and building open-source projects at{" "}
          <Link
            target="_blank"
            href="https://github.com/ahmedNaoumDev"
            className="underline duration-500 hover:text-zinc-300"
          >
            GitHub
          </Link>
          .
        </h2>
      </div>
    </div>
  );
}
