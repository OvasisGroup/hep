"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Users, Heart, TrendingUp, Shield, Globe } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const valuesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Hero animation
    tl.from(heroRef.current, {
      y: -20,
      duration: 0.6,
    });

    // Content animation
    tl.from(
      contentRef.current,
      {
        y: 20,
        duration: 0.5,
      },
      "-=0.4"
    );

    // Stats animation
    gsap.fromTo(
      statsRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Values animation
    gsap.fromTo(
      valuesRef.current,
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
          trigger: valuesRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const stats = [
    {
      value: "<4%",
      label: "Kenyans Qualify for Mortgages",
      description: "Traditional financing remains out of reach",
    },
    {
      value: "Millions",
      label: "Asset-Rich Homeowners",
      description: "Unable to access their home's value",
    },
    {
      value: "100%",
      label: "Shariah-Compliant",
      description: "Ethical, interest-free financing",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We believe in honest partnerships built on clear terms and mutual respect.",
    },
    {
      icon: Heart,
      title: "Ethical Finance",
      description:
        "Our Shariah-compliant model ensures financing that aligns with your values.",
    },
    {
      icon: TrendingUp,
      title: "Empowerment",
      description:
        "We unlock opportunities for education, healthcare, and business growth.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Supporting Kenyan families in building generational wealth and security.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Leveraging blockchain technology for secure, transparent transactions.",
    },
    {
      icon: Target,
      title: "Accessibility",
      description:
        "Making home equity accessible to those excluded by traditional systems.",
    },
  ];

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                About HEP
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Unlocking Opportunity Through{" "}
                <span className="text-secondary">Home Equity</span>
              </h1>
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
              <Image
                src="/images/2148950335.jpg"
                alt="About HEP"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center justify-center p-3 rounded-lg bg-secondary/10 mb-4">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                At HEP (Home Equity Partnership), we believe that homeownership should be more than just security—it should be an opportunity for growth, financial freedom, and generational empowerment.
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-card border rounded-2xl p-6 md:p-8">
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Across Kenya, millions of families own homes but struggle to access affordable capital when they need it most. Traditional mortgages remain out of reach for the majority of homeowners, with less than 4% qualifying for mortgage financing.
              </p>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                For many others, interest-based lending structures are simply not acceptable due to religious or ethical considerations.
              </p>

              <p className="text-sm leading-relaxed text-foreground font-medium">
                As a result, countless families are asset-rich but cash-poor, unable to unlock the value stored in their homes to support education, healthcare, business growth, or life opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                ref={(el) => {
                  if (el) statsRef.current[index] = el;
                }}
                className="text-center p-8 rounded-xl border border-secondary/20 bg-secondary/5"
              >
                <div className="text-5xl md:text-6xl font-bold text-secondary mb-3">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-secondary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at HEP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  ref={(el) => {
                    if (el) valuesRef.current[index] = el;
                  }}
                  className="p-8 rounded-xl border bg-card hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group"
                >
                  <div className="mb-4 p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors inline-block">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Unlock Your Home&apos;s Potential?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Join us in revolutionizing home equity access across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors text-lg"
            >
              Get Started
            </a>
            <a
              href="/contacts"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-secondary text-secondary font-medium hover:bg-secondary/10 transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
