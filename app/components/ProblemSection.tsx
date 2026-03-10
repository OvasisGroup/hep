"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const problems = [
    {
      id: 1,
      text: "Millions of Kenyan homeowners are asset-rich but cash-poor.",
    },
    {
      id: 2,
      text: "Mortgages are inaccessible (<4% qualify) or impermissible (Riba).",
    },
    {
      id: 3,
      text: "Families can't unlock their home's value for education, healthcare, or SME growth.",
    },
  ];

  useEffect(() => {
    const items = itemsRef.current;

    gsap.fromTo(
      items,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
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
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="flex flex-col items-start text-left space-y-4"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src="/images/patan.svg"
                  alt="Pattern Icon"
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-contain"
                />
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
