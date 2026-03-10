"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const builtOnRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subtitleRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        builtOnRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.8"
      );
  }, []);

  return (
    <section className="w-full h-auto md:h-[80vh] flex items-center py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-6 order-2 lg:order-1">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none"
            >
              Unlocking Home
              <br />
              Equity for Kenyan
              <br />
              Families
            </h1>
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl text-secondary max-w-xl"
            >
              Kenya's first Shariah-compliant,
              <br />
              blockchain-enabled home equity product.
            </p>
            <div 
              ref={builtOnRef}
              className="pt-4 flex flex-col gap-2 items-start"
            >
              <p className="text-sm text-muted-foreground">Built on</p>
              <Image
                src="/images/cardano.svg"
                alt="Powered by Cardano"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Image */}
          <div 
            ref={imageRef}
            className="relative w-full aspect-square lg:aspect-auto lg:h-125 order-1 lg:order-2 p-8 mr-24"
          >
            <Image
              src="/images/sharia.png"
              alt="Home Equity"
              fill
              className="object-cover rounded-3xl border-2 border-secondary"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
