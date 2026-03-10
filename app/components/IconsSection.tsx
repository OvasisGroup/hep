"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IconsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const icons = [
    { 
      id: 1, 
      src: "/images/HOUSE.svg", 
      alt: "House",
      title: "Housing deficit:",
      body: "~2M units; demand 200–250k vs ~50k supplied annually."
    },
    { 
      id: 2, 
      src: "/images/MORTGAGE.svg", 
      alt: "Mortgage", 
      title: "Mortgage penetration:", 
      body: "Only ~30k active accounts; 1.86% of GDP." 
    },
    { 
      id: 3, 
      src: "/images/MOSQUE.svg", 
      alt: "Mosque", 
      title: "Riba Based Loans", 
      body: "Riba-based loans exclude Muslims & ethical investors." 
    },
    { 
      id: 4, 
      src: "/images/BANK.svg", 
      alt: "Bank", 
      title: "Bank Mortgages", 
      body: "Less than 4% of Kenyans can access bank mortgages." 
    },
  ];

  useEffect(() => {
    const icons = iconsRef.current;

    // Animate title
    gsap.fromTo(
      titleRef.current,
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate icons
    gsap.fromTo(
      icons,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full pt-12 md:pt-16 pb-0 border-b border-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <h2 ref={titleRef} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 md:mb-16">
          The Problem:
          <br />
          <span className="text-secondary">A Trillion-Shilling Gap</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {icons.map((icon, index) => (
            <div
              key={icon.id}
              ref={(el) => {
                if (el) iconsRef.current[index] = el;
              }}
              className={`flex flex-col items-start text-left space-y-4 relative ${
                index < icons.length - 1 ? 'md:border-r md:border-secondary md:pr-6 lg:pr-8' : ''
              }`}
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  fill
                  sizes="(max-width: 768px) 48px, 64px"
                  className="object-contain"
                />
              </div>
              {icon.title && (
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg md:text-xl">{icon.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {icon.body}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="relative w-full h-48 md:h-64 lg:h-80 mt-12 md:mt-16">
          <Image
            src="/images/CHURCH@3x.png"
            alt="Church"
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
